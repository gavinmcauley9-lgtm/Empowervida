import fs from 'fs';
import path from 'path';

const filePath = '/Users/gavin/.gemini/antigravity/scratch/EMPOWERVIDA-EXPERIMENT/src/data/posts.js';
const postsCode = fs.readFileSync(filePath, 'utf8');

// We need to parse posts. Since it's a JS file, a simple regex might be messy, but let's try a heuristic approach.
// We will look for common names or the word "patient" near a name.
// Also looking for "cure", "reverse", "guarantee".

const lines = postsCode.split('\n');

const riskyWords = /\b(cure|cures|cured|guarantee|guaranteed|100%|miracle)\b/i;
const reversePattern = /\b(reverse|reversed|reversing)\b/i;
const anecdotePattern = /\b(?:patient|client)\b.{0,50}\b[A-Z][a-z]+\b/i; 

console.log("--- AHPRA COMPLIANCE SCREENING REPORT ---");

let currentPostId = null;
let currentPostTitle = null;

for(let i=0; i<lines.length; i++) {
    const line = lines[i];
    
    const idMatch = line.match(/^\s*id:\s*(\d+),/);
    if (idMatch) {
        currentPostId = parseInt(idMatch[1], 10);
    }
    const titleMatch = line.match(/^\s*title:\s*['"](.*)['"],/);
    if (titleMatch) {
        currentPostTitle = titleMatch[1];
    }
    
    // Ignore code/markup structure lines mostly
    if (line.length < 20) continue;
    
    const flag = (msg, match) => {
        console.log(`[ID: ${currentPostId}] ${currentPostTitle}`);
        console.log(`  Flag: ${msg}`);
        console.log(`  Line ${i+1}: "...${line.trim().substring(0, 80)}..."`);
    };

    if (riskyWords.test(line) && !line.includes('Medical Disclaimer')) {
        // Exclude some false positives if possible, but let's review them all.
        if (!line.includes('no magic cure') && !line.includes('magic-bullet')) {
           flag("Risky claim word detected", line.match(riskyWords)[0]);
        }
    }
    
    if (reversePattern.test(line)) {
        if (!line.includes('The MIT Discovery That Reverses') && !line.includes('Reverse the Decay')) {
             flag("Word 'reverse' detected (check if unreasonable expectation)", line.match(reversePattern)[0]);
        }
    }
    
    // Look for potential patient names
    // Example: "A patient, Sarah," or "My patient John"
    if (line.match(/\bpatient\b/i) && line.match(/\b(?:Mary|John|Sarah|Maeve|David|Jane|Michael|Emma)\b/i)) {
         flag("Possible identifiable patient name detected", "Name match");
    }
}
