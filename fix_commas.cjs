const fs = require('fs');
let code = fs.readFileSync('src/data/posts.js', 'utf8');

// Find all occurrences of } immediately followed by { ignoring whitespace
code = code.replace(/\}\s*\{/g, '},\n  {');

fs.writeFileSync('src/data/posts.js', code);
console.log('Fixed missing commas.');
