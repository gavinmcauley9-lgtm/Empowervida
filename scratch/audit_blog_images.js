import fs from 'fs';
import path from 'path';

// Import POSTS using dynamic import since it's an ES module
async function runAudit() {
  const { POSTS } = await import('../src/data/posts.js');
  
  let missingImageProp = [];
  let missingImageFile = [];
  let totalPosts = POSTS.length;
  
  POSTS.forEach((post) => {
    if (!post.image) {
      missingImageProp.push({ id: post.id, title: post.title });
    } else {
      const fullPath = path.join('public', post.image);
      if (!fs.existsSync(fullPath)) {
        missingImageFile.push({ id: post.id, title: post.title, image: post.image });
      }
    }
  });

  console.log(`Total Posts: ${totalPosts}`);
  
  if (missingImageProp.length > 0) {
    console.log(`\n❌ Found ${missingImageProp.length} posts missing the 'image' property entirely:`);
    missingImageProp.forEach(p => console.log(`  - [ID: ${p.id}] ${p.title}`));
  } else {
    console.log('\n✅ All posts have an image property.');
  }

  if (missingImageFile.length > 0) {
    console.log(`\n❌ Found ${missingImageFile.length} posts where the image file does NOT exist in public/:`);
    missingImageFile.forEach(p => console.log(`  - [ID: ${p.id}] ${p.title} (Missing file: ${p.image})`));
  } else {
    console.log('\n✅ All referenced image files exist in public/.');
  }
}

runAudit();
