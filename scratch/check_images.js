import fs from 'fs';
import path from 'path';

const postsFile = fs.readFileSync('src/data/posts.js', 'utf8');

const imageRegex = /image:\s*['"](\/.*?\.(png|jpg|jpeg|webp))['"]/g;
let match;
const missingImages = [];

while ((match = imageRegex.exec(postsFile)) !== null) {
  const imagePath = match[1];
  const fullPath = path.join('public', imagePath);
  if (!fs.existsSync(fullPath)) {
    missingImages.push(imagePath);
  }
}

// Remove duplicates
const uniqueMissing = [...new Set(missingImages)];
console.log('Missing images:', uniqueMissing);
