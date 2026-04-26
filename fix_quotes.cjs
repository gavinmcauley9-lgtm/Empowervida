const fs = require('fs');
let content = fs.readFileSync('/Users/gavin/.gemini/antigravity/scratch/EMPOWERVIDA-EXPERIMENT/src/data/posts.js', 'utf8');
let lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
    let trimmed = lines[i].trim();
    // Check if it's an excerpt line using single quotes
    if (trimmed.startsWith("excerpt: '")) {
        let firstQuoteIdx = lines[i].indexOf("'");
        let lastQuoteIdx = lines[i].lastIndexOf("'");
        
        if (firstQuoteIdx !== -1 && lastQuoteIdx !== -1 && firstQuoteIdx !== lastQuoteIdx) {
            let before = lines[i].substring(0, firstQuoteIdx);
            let inside = lines[i].substring(firstQuoteIdx + 1, lastQuoteIdx);
            let after = lines[i].substring(lastQuoteIdx + 1);
            
            // If the inside string contains a single quote, let's switch the outer quotes to double quotes,
            // and escape any double quotes inside.
            inside = inside.replace(/"/g, '\\"');
            
            lines[i] = before + '"' + inside + '"' + after;
        }
    }
}

fs.writeFileSync('/Users/gavin/.gemini/antigravity/scratch/EMPOWERVIDA-EXPERIMENT/src/data/posts.js', lines.join('\n'));
console.log('Fixed quotes in posts.js');
