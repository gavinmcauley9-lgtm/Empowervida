const fs = require('fs');

let content = fs.readFileSync('src/data/posts.js', 'utf8');

// Replace CATEGORIES
content = content.replace(/export const CATEGORIES = \[[\s\S]*?\];/, `export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'Mitochondrial Efficiency', label: 'Mitochondrial Efficiency' },
  { id: 'Neuro-Optimization', label: 'Neuro-Optimization' },
  { id: 'Metabolic Flexibility', label: 'Metabolic Flexibility' },
  { id: 'Sarcopenia Prevention', label: 'Sarcopenia Prevention' }
];`);

// Map categories
const map = {
  '"Cellular Energy"': "'Mitochondrial Efficiency'",
  "'energy'": "'Mitochondrial Efficiency'",
  "'cognition'": "'Neuro-Optimization'",
  "'inflammation'": "'Neuro-Optimization'",
  "'sleep'": "'Neuro-Optimization'",
  "'neurolongevity'": "'Neuro-Optimization'",
  "'brain-health'": "'Neuro-Optimization'",
  "'metabolic'": "'Metabolic Flexibility'",
  "'longevity'": "'Metabolic Flexibility'",
  "'supplements'": "'Metabolic Flexibility'",
  "'musculoskeletal'": "'Sarcopenia Prevention'",
  "'pantry'": "'Metabolic Flexibility'",
  "'Cellular Energy'": "'Mitochondrial Efficiency'"
};

for (const [oldCat, newCat] of Object.entries(map)) {
    const regex = new RegExp(`category:\\s*${oldCat}`, 'g');
    content = content.replace(regex, `category: ${newCat}`);
}

fs.writeFileSync('src/data/posts.js', content);
console.log('Categories updated.');
