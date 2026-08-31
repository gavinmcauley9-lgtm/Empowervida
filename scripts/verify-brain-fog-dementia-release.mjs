import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { PUBLISHED_POSTS } from '../src/data/posts.js';

const articlePath = 'dist/blog/neurolongevity-starving-brain/index.html';
const post = PUBLISHED_POSTS.find((item) => item.slug === 'neurolongevity-starving-brain');

assert.ok(post, 'Brain fog and dementia article is not published');
assert.ok(fs.existsSync(articlePath), 'Brain fog and dementia article was not exported');

const html = fs.readFileSync(articlePath, 'utf8');

assert.match(html, /<title>Brain Fog or Dementia\? Signs and Risk \| EmpowerVida<\/title>/);
assert.match(
  html,
  /<link rel="canonical" href="https:\/\/empowervida\.com\/blog\/neurolongevity-starving-brain\/"/
);
assert.ok(html.includes('Brain fog is a description, not a diagnosis'));
assert.ok(html.includes('Sudden confusion is not typical brain fog'));
assert.ok(html.includes('no supplement stack has been shown to prevent'));
assert.ok(html.includes('“Type 3 diabetes” is a research nickname'));

for (const removedClaim of [
  "Your brain is not declining. It's starving.",
  'Type 3 Diabetes (The Starvation Mechanism)',
  'feeding those starving neurons directly',
  "Your glymphatic system operates almost exclusively during deep sleep",
  'Magnesium L-Threonate (2g)',
  'target 50-70 ng/mL for neuroprotection'
]) {
  assert.ok(!html.includes(removedClaim), `Removed claim returned: ${removedClaim}`);
}

assert.equal(post.references.length, 7, 'Expected the seven reviewed sources');
for (const reference of post.references) {
  assert.equal(new URL(reference.url).protocol, 'https:', 'Reference must use HTTPS');
  assert.ok(html.includes(`href="${reference.url}"`), `Reference not rendered: ${reference.url}`);
}

// Local checks only: source identity, accessibility and claim support require editorial review.
const internalLinks = new Set([
  post.cta.link,
  ...Array.from(post.content.matchAll(/href="(\/[^\"]*)"/g), (match) => match[1])
]);
for (const href of internalLinks) {
  const url = new URL(href, 'https://empowervida.com');
  const targetPath = path.join('dist', url.pathname, 'index.html');
  assert.ok(fs.existsSync(targetPath), `Internal destination missing: ${href}`);
  if (url.hash) {
    const target = fs.readFileSync(targetPath, 'utf8');
    assert.ok(target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `Anchor missing: ${href}`);
  }
}
assert.ok(fs.existsSync(path.join('dist', post.image)), 'Article image was not exported');

const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
const sitemapEntry = sitemap.match(/<url>\s*<loc>https:\/\/empowervida\.com\/blog\/neurolongevity-starving-brain\/?<\/loc>[\s\S]*?<\/url>/)?.[0];
assert.ok(sitemapEntry, 'Article missing from sitemap');
assert.match(sitemapEntry, /<lastmod>2026-08-28(?:T00:00:00\.000Z)?<\/lastmod>/);

console.log('Brain fog and dementia release verification passed.');
