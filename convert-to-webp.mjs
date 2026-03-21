import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const extensions = ['.png', '.jpg', '.jpeg'];

// Find all PNG/JPG files
function findImages(dir) {
  const results = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...findImages(fullPath));
    } else {
      const ext = path.extname(item).toLowerCase();
      if (extensions.includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const images = findImages(publicDir);
console.log(`Found ${images.length} images to convert`);

let converted = 0;
let skipped = 0;
let totalOriginalSize = 0;
let totalWebpSize = 0;

for (const imgPath of images) {
  const webpPath = imgPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  
  // Skip if WebP already exists and is newer
  if (fs.existsSync(webpPath)) {
    const origStat = fs.statSync(imgPath);
    const webpStat = fs.statSync(webpPath);
    if (webpStat.mtimeMs > origStat.mtimeMs) {
      skipped++;
      continue;
    }
  }

  try {
    const origSize = fs.statSync(imgPath).size;
    totalOriginalSize += origSize;
    
    await sharp(imgPath)
      .webp({ quality: 82, effort: 4 })
      .toFile(webpPath);
    
    const webpSize = fs.statSync(webpPath).size;
    totalWebpSize += webpSize;
    
    const savings = ((1 - webpSize / origSize) * 100).toFixed(0);
    converted++;
    
    if (converted % 20 === 0) {
      console.log(`  Converted ${converted}/${images.length}...`);
    }
  } catch (err) {
    console.error(`  ERROR: ${imgPath}: ${err.message}`);
  }
}

console.log(`\n=== RESULTS ===`);
console.log(`Converted: ${converted}`);
console.log(`Skipped (already done): ${skipped}`);
console.log(`Original size: ${(totalOriginalSize / 1024 / 1024).toFixed(1)} MB`);
console.log(`WebP size: ${(totalWebpSize / 1024 / 1024).toFixed(1)} MB`);
console.log(`Savings: ${((1 - totalWebpSize / totalOriginalSize) * 100).toFixed(0)}%`);
