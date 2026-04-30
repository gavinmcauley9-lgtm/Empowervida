const fs = require('fs');

let postsCode = fs.readFileSync('src/data/posts.js', 'utf8');
const humanizedCode = fs.readFileSync('src/data/humanized_posts.js', 'utf8');

// Extract all humanized posts using a regex that captures export const humanizedPostX = { ... };
const regex = /export const humanizedPost(\d+) = (\{[\s\S]*?\n\});/g;
let match;
let count = 0;

while ((match = regex.exec(humanizedCode)) !== null) {
  const id = match[1];
  const replacementString = match[2];

  // Find the post in posts.js
  const postRegex = new RegExp('  \\\{\\n\\s*id: ' + id + ',[\\s\\S]*?\\n  \\\}', 'g');
  
  if (postRegex.test(postsCode)) {
    postsCode = postsCode.replace(postRegex, '  ' + replacementString.replace(/\n/g, '\n  '));
    console.log('Replaced post ' + id);
    count++;
  } else {
    // Try without strict spacing
    const postRegexFallback = new RegExp('\\\{\\s*id:\\s*' + id + ',[\\s\\S]*?\\n\\s*\\\}', 'g');
    if (postRegexFallback.test(postsCode)) {
      postsCode = postsCode.replace(postRegexFallback, replacementString);
      console.log('Replaced post ' + id + ' (fallback)');
      count++;
    } else {
      console.log('Could not find post ' + id + ' in posts.js');
    }
  }
}

fs.writeFileSync('src/data/posts.js', postsCode);
console.log('Successfully replaced ' + count + ' posts.');
