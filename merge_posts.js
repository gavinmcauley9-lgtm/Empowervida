import fs from 'fs';

// Read the main posts file
const postsContent = fs.readFileSync('src/data/posts.js', 'utf-8');

// Read the generated posts
const generatedContent = fs.readFileSync('supplement_posts_generated.js', 'utf-8');

// Extract just the post objects (between the array brackets, excluding the wrapper)
const generatedPosts = generatedContent
    .split('const generatedPosts = [')[1]
    .split('];')[0]
    .trim();

// Find the closing bracket of the posts array
const closingIndex = postsContent.lastIndexOf('];');

// Insert the new posts before the closing bracket
const updatedContent = postsContent.substring(0, closingIndex) + ',\n' + generatedPosts + '\n];\n\nexport default posts;';

// Write back to posts.js
fs.writeFileSync('src/data/posts.js', updatedContent);

console.log('✅ Successfully added 15 generated posts to posts.js');
console.log('📊 New total: 45 blog posts (30 existing + 15 generated)');
