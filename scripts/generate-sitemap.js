import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import posts from '../src/data/posts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://empowervida.com';

const staticRoutes = [
  '/',
  '/about',
  '/blog',
  '/diagnostics',
  '/advanced-optimization',
  '/environmental-defense',
  '/protocol',
  '/empower-protocol',
  '/engine-room',
  '/shop',
  '/mitochondrial-guide',
  '/longevity',
  '/calculator',
  '/biological-age',
  '/diagnostics-portal'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static routes
staticRoutes.forEach(route => {
  sitemap += `  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>\n`;
});

// Add blog posts
posts.forEach(post => {
  const urlPath = post.slug ? `/blog/${post.slug}` : `/blog/${post.id}`;
  sitemap += `  <url>
    <loc>${DOMAIN}${urlPath}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
});

sitemap += `</urlset>`;

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf8');

console.log(`✅ Sitemap generated at ${outputPath} with ${staticRoutes.length + posts.length} URLs.`);
