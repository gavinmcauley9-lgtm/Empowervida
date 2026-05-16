import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Since we can't easily import the JS file because it's not a proper ES module without export default (wait, it DOES have export default POSTS;)
// Let's just read it as text and extract titles and excerpts.
const content = fs.readFileSync('/Users/gavin/.gemini/antigravity/scratch/EMPOWERVIDA-EXPERIMENT/src/data/posts.js', 'utf8');

const titles = [];
let match;
const titleRegex = /title:\s*['"](.*?)['"],/g;
while ((match = titleRegex.exec(content)) !== null) {
  titles.push(match[1]);
}

const excerpts = [];
const excerptRegex = /excerpt:\s*['"](.*?)['"],/g;
while ((match = excerptRegex.exec(content)) !== null) {
  excerpts.push(match[1]);
}

// simulate fuzzy match
const POSTS = titles.map((t, i) => ({ title: t, excerpt: excerpts[i] || '', id: i + 1 }));

function findMatch(slug) {
    const slugWords = slug.toLowerCase().split('-').filter(w => w.length > 3);
    let bestMatch = null;
    let maxScore = 0;

    for (const p of POSTS) {
      const targetText = `${p.title} ${p.excerpt || ''}`.toLowerCase();
      let score = 0;

      for (const word of slugWords) {
        if (targetText.includes(word)) {
          score++;
        }
      }

      const normalizedSlug = slug.toLowerCase().replace(/-/g, ' ');
      const titleNormalized = p.title.toLowerCase().replace(/[^a-z0-9\s]/g, '');
      if (titleNormalized.includes(normalizedSlug.substring(0, 15))) {
        score += 5;
      }

      if (score > maxScore) {
        maxScore = score;
        bestMatch = p;
      }
    }

    if (bestMatch && maxScore >= 2) {
      return { match: bestMatch.title, score: maxScore };
    }
    return null;
}

console.log('mit-discovery-reverses-brain-ageing-nmn', findMatch('mit-discovery-reverses-brain-ageing-nmn'));
console.log('brain-fog-cognitive-decline-the-science-of-the-starving-neuron', findMatch('brain-fog-cognitive-decline-the-science-of-the-starving-neuron'));
console.log('brain-fog-causes-why-your-brain-is-full-of-sewage-how-to-flush-it', findMatch('brain-fog-causes-why-your-brain-is-full-of-sewage-how-to-flush-it'));
console.log('brain-pills-that-work-vs-snake-oil', findMatch('brain-pills-that-work-vs-snake-oil'));
