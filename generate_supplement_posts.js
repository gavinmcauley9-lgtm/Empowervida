#!/usr/bin/env node

/**
 * PROGRAMMATIC SEO BLOG POST GENERATOR
 * 
 * This script reads supplement_combinations.csv and generates blog post objects
 * that can be added to src/data/posts.js
 * 
 * Usage: node generate_supplement_posts.js
 * 
 * Output: supplement_posts_generated.js (ready to copy into posts.js)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read and parse CSV
function parseCSV(filename) {
    const csvContent = fs.readFileSync(filename, 'utf-8');
    const lines = csvContent.split('\n');
    const headers = lines[0].split(',');

    const data = [];
    for (let i = 1; i < lines.length; i++) {
        if (!lines[i].trim()) continue;

        const values = parseCSVLine(lines[i]);
        const obj = {};
        headers.forEach((header, index) => {
            obj[header.trim()] = values[index] ? values[index].trim() : '';
        });
        data.push(obj);
    }
    return data;
}

// Handle quoted CSV fields properly
function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current);
    return result;
}

// Generate blog post object from CSV row
function generateBlogPost(data, startingId) {
    const references = data.references.split('|').map(ref => {
        const parts = ref.split('http');
        return {
            text: parts[0].trim(),
            url: parts[1] ? 'http' + parts[1].trim() : ''
        };
    });

    const title = `${data.supplementA} and ${data.supplementB}: Can You Take Them Together? (Physician's Guide)`;
    const excerpt = data.mechanism.substring(0, 150) + '...';

    return `  {
    id: ${startingId},
    title: '${title}',
    category: '${data.category}',
    image: '/supplement_synergy.png',
    excerpt: '${excerpt.replace(/'/g, "\\'")}',
    date: 'Jan 10, 2026',
    cta: {
      text: "View Clinical Grade Supplements",
      link: "/shop"
    },
    references: ${JSON.stringify(references, null, 6)},
    content: \`
      <p><strong>By Dr. Gavin McAuley | EMPOWERVIDA</strong></p>
      
      <div style="background: rgba(32, 178, 170, 0.1); border-left: 4px solid #20B2AA; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
        <p style="margin: 0; font-weight: 700; color: #20B2AA; font-size: 1.1rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">THE SHORT ANSWER</p>
        <p style="margin: 0; font-size: 1.05rem; line-height: 1.6;">${data.shortAnswer.replace(/"/g, '&quot;')}</p>
      </div>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">Why This Combination Works</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        ${data.mechanism.replace(/"/g, '&quot;')}
      </p>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">Dosing and Timing</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        ${data.dosing.replace(/"/g, '&quot;')}
      </p>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Physician's Note</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        ${data.physicianNote.replace(/"/g, '&quot;')}
      </p>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">Safety Considerations</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        ${data.safety.replace(/"/g, '&quot;')}
      </p>

      <div style="background: rgba(220, 38, 38, 0.1); border-left: 4px solid #DC2626; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
        <p style="margin: 0; font-weight: 700; color: #DC2626; font-size: 1.1rem; margin-bottom: 0.75rem;">Medical Disclaimer</p>
        <p style="margin: 0; font-size: 1rem; line-height: 1.6;">
          This information is for educational purposes and does not constitute medical advice. Consult your physician before starting any new supplement regimen, particularly if you have existing medical conditions or take prescription medications.
        </p>
      </div>
    \`
  }`;
}

// Main execution
function main() {
    const csvFile = path.join(__dirname, 'supplement_combinations.csv');
    const outputFile = path.join(__dirname, 'supplement_posts_generated.js');

    console.log('🔧 Reading CSV file...');
    const combinations = parseCSV(csvFile);

    console.log(`📊 Found ${combinations.length} supplement combinations`);

    // Start IDs from 31 (after the 5 pilot posts: 26-30)
    let currentId = 31;
    const generatedPosts = combinations.map(combo => {
        const post = generateBlogPost(combo, currentId);
        currentId++;
        return post;
    });

    const output = `// GENERATED SUPPLEMENT INTERACTION POSTS
// Generated on ${new Date().toISOString()}
// Copy these into src/data/posts.js array

const generatedPosts = [
${generatedPosts.join(',\n')}
];

export default generatedPosts;
`;

    fs.writeFileSync(outputFile, output);

    console.log(`✅ Generated ${generatedPosts.length} blog posts`);
    console.log(`📝 Output written to: ${outputFile}`);
    console.log(`\n📋 Next steps:`);
    console.log(`1. Open ${outputFile}`);
    console.log(`2. Copy the generated posts`);
    console.log(`3. Paste into src/data/posts.js array (before the closing bracket)`);
    console.log(`4. Commit and push to deploy\n`);
}

main();
