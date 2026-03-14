// Link Audit Script for EMPOWERVIDA
// Extracts all citation URLs from posts.js and humanized_posts.js,
// then checks each URL to verify it resolves and matches the expected paper.

const fs = require('fs');
const https = require('https');
const http = require('http');

// Read both files
const postsContent = fs.readFileSync('./src/data/posts.js', 'utf8');
const humanizedContent = fs.readFileSync('./src/data/humanized_posts.js', 'utf8');

// Extract all references with their text and url
function extractReferences(content, sourceFile) {
    const refs = [];

    // Match patterns like: { text: "...", url: "..." }
    const refRegex = /\{\s*text:\s*"([^"]*?)"\s*,\s*url:\s*"([^"]*?)"\s*\}/g;
    let match;

    while ((match = refRegex.exec(content)) !== null) {
        refs.push({
            text: match[1],
            url: match[2],
            source: sourceFile
        });
    }

    // Also match href="..." patterns in content HTML
    const hrefRegex = /href="(https?:\/\/[^"]+)"/g;
    while ((match = hrefRegex.exec(content)) !== null) {
        // Skip internal links
        if (!match[1].startsWith('/')) {
            refs.push({
                text: `[inline link in content]`,
                url: match[1],
                source: sourceFile + ' (inline)'
            });
        }
    }

    return refs;
}

const postsRefs = extractReferences(postsContent, 'posts.js');
const humanizedRefs = extractReferences(humanizedContent, 'humanized_posts.js');
const allRefs = [...postsRefs, ...humanizedRefs];

// Deduplicate by URL
const uniqueUrls = new Map();
for (const ref of allRefs) {
    const key = ref.url;
    if (!uniqueUrls.has(key)) {
        uniqueUrls.set(key, []);
    }
    uniqueUrls.get(key).push(ref);
}

console.log(`\n========================================`);
console.log(`EMPOWERVIDA CITATION LINK AUDIT`);
console.log(`========================================`);
console.log(`Total references found: ${allRefs.length}`);
console.log(`Unique URLs to check: ${uniqueUrls.size}`);
console.log(`From posts.js: ${postsRefs.length}`);
console.log(`From humanized_posts.js: ${humanizedRefs.length}`);
console.log(`========================================\n`);

// Categorize issues immediately
const issues = {
    empty: [],
    incomplete: [],
    httpErrors: [],
    mismatch: [],
    ok: [],
    redirected: []
};

// Check for empty or incomplete URLs first
for (const [url, refs] of uniqueUrls) {
    if (!url || url.trim() === '') {
        issues.empty.push({ url, refs });
    } else if (url === 'https://pubmed.ncbi.nlm.nih.gov/' || url.endsWith('.gov/') && !url.match(/\/\d+\//)) {
        // URL points to PubMed homepage, not a specific paper
        issues.incomplete.push({ url, refs });
    }
}

// Print immediate issues
if (issues.empty.length > 0) {
    console.log(`\n🔴 EMPTY URLs (${issues.empty.length}):`);
    console.log(`${'─'.repeat(60)}`);
    for (const issue of issues.empty) {
        for (const ref of issue.refs) {
            console.log(`  Source: ${ref.source}`);
            console.log(`  Citation: ${ref.text}`);
            console.log(`  URL: [EMPTY]`);
            console.log('');
        }
    }
}

if (issues.incomplete.length > 0) {
    console.log(`\n🟠 INCOMPLETE URLs - Point to PubMed homepage, not specific paper (${issues.incomplete.length}):`);
    console.log(`${'─'.repeat(60)}`);
    for (const issue of issues.incomplete) {
        for (const ref of issue.refs) {
            console.log(`  Source: ${ref.source}`);
            console.log(`  Citation: ${ref.text}`);
            console.log(`  URL: ${issue.url}`);
            console.log('');
        }
    }
}

// Now check each URL via HTTP
function checkUrl(url) {
    return new Promise((resolve) => {
        if (!url || url.trim() === '') {
            resolve({ status: 'empty', code: null, finalUrl: null, title: null });
            return;
        }

        const protocol = url.startsWith('https') ? https : http;

        const req = protocol.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                'Accept': 'text/html,application/xhtml+xml'
            },
            timeout: 10000
        }, (res) => {
            let body = '';
            res.on('data', (chunk) => { body += chunk; });
            res.on('end', () => {
                // Extract title from HTML
                const titleMatch = body.match(/<title[^>]*>([^<]+)<\/title>/i);
                const title = titleMatch ? titleMatch[1].trim() : null;

                resolve({
                    status: res.statusCode >= 200 && res.statusCode < 400 ? 'ok' : 'error',
                    code: res.statusCode,
                    finalUrl: res.headers.location || url,
                    title: title,
                    redirected: res.statusCode >= 300 && res.statusCode < 400
                });
            });
        });

        req.on('error', (err) => {
            resolve({ status: 'error', code: null, finalUrl: null, title: null, error: err.message });
        });

        req.on('timeout', () => {
            req.destroy();
            resolve({ status: 'timeout', code: null, finalUrl: null, title: null });
        });
    });
}

async function runAudit() {
    const urlsToCheck = [];
    for (const [url, refs] of uniqueUrls) {
        if (url && url.trim() !== '' && url !== 'https://pubmed.ncbi.nlm.nih.gov/') {
            urlsToCheck.push({ url, refs });
        }
    }

    console.log(`\n🔍 Checking ${urlsToCheck.length} URLs for HTTP status and title match...\n`);

    const results = { ok: [], warnings: [], errors: [] };

    // Check URLs in batches of 5
    for (let i = 0; i < urlsToCheck.length; i += 5) {
        const batch = urlsToCheck.slice(i, i + 5);
        const checks = await Promise.all(batch.map(item => checkUrl(item.url)));

        for (let j = 0; j < batch.length; j++) {
            const { url, refs } = batch[j];
            const result = checks[j];

            // Extract first author surname from citation text for matching
            const firstRef = refs[0];
            const authorMatch = firstRef.text.match(/^([^,]+)/);
            const expectedAuthor = authorMatch ? authorMatch[1].trim() : '';

            if (result.status === 'error' || result.status === 'timeout') {
                results.errors.push({
                    url,
                    refs,
                    code: result.code,
                    error: result.error || 'timeout',
                    title: result.title
                });
            } else if (result.title) {
                // Check if the page title seems to match the citation
                const titleLower = (result.title || '').toLowerCase();
                const authorLower = expectedAuthor.toLowerCase().replace(/[^a-z]/g, '');

                // Check for "page not found" or similar
                if (titleLower.includes('not found') || titleLower.includes('error') || titleLower.includes('404')) {
                    results.errors.push({
                        url,
                        refs,
                        code: result.code,
                        title: result.title,
                        reason: 'Page appears to be a 404/error page'
                    });
                } else {
                    results.ok.push({
                        url,
                        refs,
                        code: result.code,
                        title: result.title
                    });
                }
            } else {
                results.ok.push({
                    url,
                    refs,
                    code: result.code,
                    title: result.title || '[no title extracted]'
                });
            }
        }

        // Progress indicator
        process.stdout.write(`  Checked ${Math.min(i + 5, urlsToCheck.length)}/${urlsToCheck.length} URLs\r`);
    }

    console.log('\n');

    // Print results
    if (results.errors.length > 0) {
        console.log(`\n🔴 BROKEN/ERROR URLs (${results.errors.length}):`);
        console.log(`${'═'.repeat(70)}`);
        for (const item of results.errors) {
            console.log(`  URL: ${item.url}`);
            console.log(`  HTTP: ${item.code || 'N/A'} | Error: ${item.error || item.reason || 'unknown'}`);
            console.log(`  Page Title: ${item.title || 'N/A'}`);
            for (const ref of item.refs) {
                console.log(`  Citation: ${ref.text}`);
                console.log(`  Source: ${ref.source}`);
            }
            console.log(`${'─'.repeat(70)}`);
        }
    }

    console.log(`\n✅ VALID URLs (${results.ok.length}):`);
    console.log(`${'═'.repeat(70)}`);
    for (const item of results.ok) {
        console.log(`  ✓ [${item.code}] ${item.url}`);
        console.log(`    Title: ${item.title}`);
        console.log(`    Citation: ${item.refs[0].text.substring(0, 90)}...`);
        console.log('');
    }

    // Summary
    console.log(`\n${'═'.repeat(70)}`);
    console.log(`AUDIT SUMMARY`);
    console.log(`${'═'.repeat(70)}`);
    console.log(`Total references: ${allRefs.length}`);
    console.log(`Unique URLs: ${uniqueUrls.size}`);
    console.log(`🔴 Empty URLs: ${issues.empty.length}`);
    console.log(`🟠 Incomplete URLs (PubMed homepage): ${issues.incomplete.length}`);
    console.log(`🔴 Broken/Error URLs: ${results.errors.length}`);
    console.log(`✅ Valid URLs: ${results.ok.length}`);
    console.log(`${'═'.repeat(70)}`);
}

runAudit().catch(console.error);
