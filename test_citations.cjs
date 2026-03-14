const fs = require('fs');
const https = require('https');
const http = require('http');

const urls = JSON.parse(fs.readFileSync('citation_urls.json', 'utf8'));

// Filter to only citation/reference URLs (exclude geni.us affiliate links)
const citationUrls = urls.filter(u => !u.url.includes('geni.us'));
const affiliateUrls = urls.filter(u => u.url.includes('geni.us'));

console.log(`Testing ${citationUrls.length} citation URLs (skipping ${affiliateUrls.length} affiliate links)...`);
console.log('');

function testUrl(url) {
    return new Promise((resolve) => {
        const mod = url.startsWith('https') ? https : http;
        const req = mod.get(url, {
            timeout: 15000,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        }, (res) => {
            resolve({
                url,
                status: res.statusCode,
                location: res.headers.location || null
            });
        });
        req.on('error', (err) => {
            resolve({
                url,
                status: 'ERROR',
                error: err.message
            });
        });
        req.on('timeout', () => {
            req.destroy();
            resolve({
                url,
                status: 'TIMEOUT',
                error: 'Request timed out after 15s'
            });
        });
    });
}

async function runAudit() {
    const results = { pass: [], warn: [], fail: [] };

    // Test in batches of 5 to avoid overwhelming
    for (let i = 0; i < citationUrls.length; i += 5) {
        const batch = citationUrls.slice(i, i + 5);
        const batchResults = await Promise.all(
            batch.map(item => testUrl(item.url).then(r => ({
                ...r,
                locations: item.locations
            })))
        );

        for (const r of batchResults) {
            const locs = r.locations.map(l => `${l.source}:${l.line}`).join(', ');

            if (r.status === 200 || r.status === 301 || r.status === 302) {
                results.pass.push(r);
                console.log(`✅ [${r.status}] ${r.url} (${locs})`);
            } else if (r.status === 403 || r.status === 429) {
                results.warn.push(r);
                console.log(`⚠️  [${r.status}] ${r.url} (${locs}) — Cloudflare/rate limit, likely OK`);
            } else {
                results.fail.push(r);
                console.log(`❌ [${r.status}] ${r.url} (${locs})${r.error ? ' — ' + r.error : ''}`);
            }
        }

        // Small delay between batches
        await new Promise(res => setTimeout(res, 1000));
    }

    console.log('\n========================================');
    console.log('CITATION AUDIT SUMMARY');
    console.log('========================================');
    console.log(`✅ PASS: ${results.pass.length}`);
    console.log(`⚠️  WARN (Cloudflare/rate-limited): ${results.warn.length}`);
    console.log(`❌ FAIL: ${results.fail.length}`);
    console.log(`⏭️  SKIPPED (affiliate links): ${affiliateUrls.length}`);
    console.log(`📊 TOTAL: ${urls.length}`);

    if (results.fail.length > 0) {
        console.log('\n--- FAILED URLS ---');
        for (const r of results.fail) {
            const locs = r.locations.map(l => `${l.source}:${l.line}`).join(', ');
            console.log(`  ${r.url} [${r.status}] (${locs})`);
        }
    }

    if (results.warn.length > 0) {
        console.log('\n--- WARNINGS (likely OK but blocked by server) ---');
        for (const r of results.warn) {
            const locs = r.locations.map(l => `${l.source}:${l.line}`).join(', ');
            console.log(`  ${r.url} [${r.status}] (${locs})`);
        }
    }

    // Save full results
    fs.writeFileSync('citation_audit_results.json', JSON.stringify(results, null, 2));
    console.log('\nFull results saved to citation_audit_results.json');
}

runAudit();
