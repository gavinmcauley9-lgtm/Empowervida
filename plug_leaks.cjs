const fs = require('fs');

let text = fs.readFileSync('/Users/gavin/.gemini/antigravity/scratch/EMPOWERVIDA-EXPERIMENT/src/pages/Shop.jsx', 'utf8');

text = text.replace(/unavailable:\s*true/g, function(match, offset, string) {
    let context = string.substring(offset - 150, offset);
    let pickMatch = context.match(/pick:\s*'([^']+)'/);
    
    if (pickMatch) {
        let searchKeyword = encodeURIComponent(pickMatch[1]);
        return `amazonLink: 'https://www.amazon.com/s?k=${searchKeyword}',\n                    iherbLink: 'https://www.iherb.com/search?kw=${searchKeyword}'`;
    }
    return match;
});

fs.writeFileSync('/Users/gavin/.gemini/antigravity/scratch/EMPOWERVIDA-EXPERIMENT/src/pages/Shop.jsx', text);
console.log("Successfully replaced all 'unavailable: true' tags with active remote search links.");
