const fs = require('fs');
const content = fs.readFileSync('src/data/posts.js', 'utf8');

// Extract posts by finding id, title, and content blocks
const postRegex = /\{\s*\n\s*id:\s*(\d+),\s*\n\s*title:\s*['"](.*?)['"],/g;
let match;
const posts = [];

while ((match = postRegex.exec(content)) !== null) {
    posts.push({ id: parseInt(match[1]), title: match[2], position: match.index });
}

// For each post, estimate content word count
for (let i = 0; i < posts.length; i++) {
    const start = posts[i].position;
    const end = i + 1 < posts.length ? posts[i + 1].position : content.length;
    const postContent = content.substring(start, end);

    // Extract the content template literal
    const contentMatch = postContent.match(/content:\s*`([\s\S]*?)`/);
    if (contentMatch) {
        // Strip HTML tags to count actual words
        const textOnly = contentMatch[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const wordCount = textOnly.split(' ').filter(w => w.length > 0).length;
        posts[i].wordCount = wordCount;
    } else {
        posts[i].wordCount = 0;
    }
}

// Sort by word count to find thin posts
const thinPosts = posts.filter(p => p.wordCount < 300).sort((a, b) => a.wordCount - b.wordCount);

console.log('=== THIN POSTS (under 300 words) ===\n');
console.log('ID | Words | Title');
console.log('---|-------|------');
for (const p of thinPosts) {
    console.log(`${p.id} | ${p.wordCount} | ${p.title}`);
}

console.log(`\nTotal thin posts: ${thinPosts.length}`);
console.log(`Total posts: ${posts.length}`);

console.log('\n=== FULL POSTS (300+ words) ===\n');
const fullPosts = posts.filter(p => p.wordCount >= 300).sort((a, b) => b.wordCount - a.wordCount);
console.log('ID | Words | Title');
console.log('---|-------|------');
for (const p of fullPosts) {
    console.log(`${p.id} | ${p.wordCount} | ${p.title}`);
}
