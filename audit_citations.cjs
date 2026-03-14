const fs = require('fs');

// Read both files
const posts = fs.readFileSync('src/data/posts.js', 'utf8');
const humanized = fs.readFileSync('src/data/humanized_posts.js', 'utf8');

let allUrls = new Map(); // url -> [{ source, line }]

function extractUrls(content, source) {
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let match;

        // Reference URLs: url: '...' or url: "..."
        const r1 = /url:\s*['"]([^'"]+)['"]/g;
        while ((match = r1.exec(line)) !== null) {
            const url = match[1];
            if (url && url.startsWith('http')) {
                if (!allUrls.has(url)) allUrls.set(url, []);
                allUrls.get(url).push({ source, line: i + 1 });
            }
        }

        // Inline href URLs in HTML content
        const r2 = /href=\\?"([^"\\]+)\\?"/g;
        while ((match = r2.exec(line)) !== null) {
            const url = match[1];
            if (url && url.startsWith('http')) {
                if (!allUrls.has(url)) allUrls.set(url, []);
                allUrls.get(url).push({ source, line: i + 1 });
            }
        }

        // Also catch single-quoted hrefs
        const r3 = /href='([^']+)'/g;
        while ((match = r3.exec(line)) !== null) {
            const url = match[1];
            if (url && url.startsWith('http')) {
                if (!allUrls.has(url)) allUrls.set(url, []);
                allUrls.get(url).push({ source, line: i + 1 });
            }
        }
    }
}

extractUrls(posts, 'posts.js');
extractUrls(humanized, 'humanized_posts.js');

console.log('Total unique URLs found: ' + allUrls.size);
console.log('');

// Output as JSON for further processing
const output = [];
for (const [url, locations] of allUrls) {
    output.push({ url, locations });
}
fs.writeFileSync('citation_urls.json', JSON.stringify(output, null, 2));
console.log('URLs saved to citation_urls.json');

// Also print summary
for (const [url, locations] of allUrls) {
    const locs = locations.map(l => l.source + ':' + l.line).join(', ');
    console.log(url + ' | ' + locs);
}
