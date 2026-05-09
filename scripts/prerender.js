import puppeteer from 'puppeteer';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { POSTS } from '../src/data/posts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

// Define all routes to pre-render
const routes = [
  '/',
  '/about',
  '/blog',
  '/protocol',
  '/shop',
  '/diagnostics',
  '/calculator',
  '/engine-room',
  '/environmental-defense',
  '/advanced-optimization',
];

// Add all blog posts
POSTS.forEach(post => {
  if (post.slug) {
    routes.push(`/blog/${post.slug}`);
  }
});

async function prerender() {
  console.log('Starting pre-rendering process...');
  
  // 1. Start a local server to serve the build
  const app = express();
  app.use(express.static(DIST_DIR));
  
  // For client-side routing, serve index.html for all other routes
  app.use((req, res) => {
    res.sendFile(path.resolve(DIST_DIR, 'index.html'));
  });

  const port = 3001;
  const server = app.listen(port, () => {
    console.log(`Server listening on port ${port} for prerendering`);
  });

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({ headless: 'new' });
  
  for (const route of routes) {
    console.log(`Pre-rendering: ${route}`);
    const page = await browser.newPage();
    
    try {
      // Navigate and wait for the network to be idle so JS can render the React components
      await page.goto(`http://localhost:${port}${route}`, { waitUntil: 'networkidle0' });
      
      // Give React an extra second to render any framer-motion or deferred components
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const html = await page.content();
      
      // Determine the output path
      const outputPath = path.join(DIST_DIR, route);
      
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
      }
      
      // Save the generated HTML
      fs.writeFileSync(path.join(outputPath, 'index.html'), html);
      console.log(`✅ Saved ${route}/index.html`);
    } catch (e) {
      console.error(`❌ Failed to pre-render ${route}:`, e);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log('Pre-rendering complete!');
}

prerender().catch(err => {
  console.error(err);
  process.exit(1);
});
