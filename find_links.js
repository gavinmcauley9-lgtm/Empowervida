const fs = require('fs');

const content = fs.readFileSync('/Users/gavin/.gemini/antigravity/scratch/EMPOWERVIDA-EXPERIMENT/src/data/posts.js', 'utf8');

const regex = /href="\/blog\/([^"]+)"/g;
let match;
const links = new Set();

while ((match = regex.exec(content)) !== null) {
  links.add(match[1]);
}

console.log("Found links:", Array.from(links));
