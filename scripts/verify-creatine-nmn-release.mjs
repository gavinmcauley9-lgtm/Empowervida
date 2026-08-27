import assert from 'node:assert/strict';
import fs from 'node:fs';

const primaryPath = 'dist/blog/creatine-and-nad-take-together-physician-guide/index.html';
const duplicatePath = 'dist/blog/creatine-vs-nad-why-you-need-both/index.html';

assert.ok(fs.existsSync(primaryPath), 'Primary Creatine + NMN article was not exported');
assert.ok(!fs.existsSync(duplicatePath), 'Legacy duplicate article must not be exported');

const html = fs.readFileSync(primaryPath, 'utf8');
assert.match(html, /<title>Can You Take Creatine and NMN Together\? \| EmpowerVida<\/title>/);
assert.match(html, /<link rel="canonical" href="https:\/\/empowervida\.com\/blog\/creatine-and-nad-take-together-physician-guide\/"/);
assert.ok(html.includes('no human trial has tested the combination'));
assert.ok(html.includes('maximum recommended daily dose of 500 mg'));
assert.ok(!html.includes('Stacking both addresses the two biggest bottlenecks'));
assert.ok(!html.includes('5g Creatine Monohydrate + 300mg NMN'));

const redirects = fs.readFileSync('dist/_redirects', 'utf8');
assert.ok(
  redirects.includes('/blog/creatine-vs-nad-why-you-need-both  /blog/creatine-and-nad-take-together-physician-guide  301!'),
  'Legacy slug must permanently redirect to the primary article'
);

const sitemap = fs.readFileSync('dist/sitemap.xml', 'utf8');
assert.ok(sitemap.includes('creatine-and-nad-take-together-physician-guide'));
assert.ok(!sitemap.includes('creatine-vs-nad-why-you-need-both'));

console.log('Creatine + NMN release verification passed.');
