import posts from '../src/data/posts.js';

const imageCounts = {};
posts.forEach(p => {
    if (p.image) {
        imageCounts[p.image] = (imageCounts[p.image] || 0) + 1;
    } else {
        imageCounts['NO_IMAGE'] = (imageCounts['NO_IMAGE'] || 0) + 1;
    }
});

console.log('Image usage breakdown:');
Object.entries(imageCounts)
    .sort((a, b) => b[1] - a[1])
    .forEach(([img, count]) => {
        console.log(`- ${img}: ${count} posts`);
    });
