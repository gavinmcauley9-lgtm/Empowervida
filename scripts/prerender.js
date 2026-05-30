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
  const urlPath = post.slug ? `/blog/${post.slug}` : `/blog/${post.id}`;
  routes.push(urlPath);
  
  // Also prerender the primary alias to ensure old Google links resolve instantly
  if (post.aliases && post.aliases.length > 0) {
      routes.push(`/blog/${post.aliases[0]}`);
  }
});

async function prerender() {
  console.log('Starting pre-rendering process...');
  
  // 1. Start a local server to serve the build
  const app = express();
  app.use(express.static(DIST_DIR));
  
  const SPA_INDEX = path.resolve(DIST_DIR, 'spa-index.html');
  if (!fs.existsSync(SPA_INDEX)) {
      fs.copyFileSync(path.resolve(DIST_DIR, 'index.html'), SPA_INDEX);
  }

  // For client-side routing, serve the SPA shell for all other routes
  app.use((req, res, next) => {
    if (fs.existsSync(SPA_INDEX)) {
      try {
        const html = fs.readFileSync(SPA_INDEX, 'utf8');
        res.setHeader('Content-Type', 'text/html');
        res.send(html);
      } catch (err) {
        console.error("Error reading SPA_INDEX:", err);
        res.status(500).send("<html><body>Error reading index.html</body></html>");
      }
    } else {
      console.error("SPA_INDEX NOT FOUND AT:", SPA_INDEX);
      res.status(404).send("<html><body>index.html not found</body></html>");
    }
  });

  const port = 3001;
  const server = app.listen(port, () => {
    console.log(`Server listening on port ${port} for prerendering`);
  });

  // 2. Launch Puppeteer
  const browser = await puppeteer.launch({ 
    headless: 'new', 
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'] 
  });
  
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
      throw e; // Fail the build if a route fails
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();
  console.log('Pre-rendering complete!');
}

prerender().catch(err => {
  console.error("Prerendering failed! Check the logs above:");
  console.error(err);
  process.exit(1);
});
