import fs from 'fs';
import path from 'path';

const filePath = '/Users/gavin/.gemini/antigravity/scratch/EMPOWERVIDA-EXPERIMENT/src/data/posts.js';
const lines = fs.readFileSync(filePath, 'utf8').split('\n');

const disclaimerHTML = `      <div style="background: rgba(220, 38, 38, 0.1); border-left: 4px solid #DC2626; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
        <p style="margin: 0; font-weight: 700; color: #DC2626; font-size: 1.1rem; margin-bottom: 0.75rem;">Medical Disclaimer</p>
        <p style="margin: 0; font-size: 1rem; line-height: 1.6;">
          This information is for educational purposes and does not constitute medical advice. Consult your physician before starting any new supplement regimen, particularly if you have existing medical conditions or take prescription medications.
        </p>
      </div>\n`;

const missingIds = [999, 1, 2, 3, 4, 5, 20, 31];
let currentId = null;

for (let i = 0; i < lines.length; i++) {
    // 1. Soften Prescriptive Language
    lines[i] = lines[i].replace("take 3g of Glycine", "clinical protocols typically suggest 3g of Glycine");
    lines[i] = lines[i].replace("Take 5g of Creatine", "Clinical protocols typically utilize 5g of Creatine");
    lines[i] = lines[i].replace("Take 2g-3g of clinical-grade Omega-3s", "Clinical protocols suggest 2g-3g of clinical-grade Omega-3s");
    lines[i] = lines[i].replace("Take 250mg - 500mg of CDP-Choline", "I typically recommend 250mg - 500mg of CDP-Choline");
    lines[i] = lines[i].replace("Take 144mg of elemental magnesium", "Clinical protocols typically suggest 144mg of elemental magnesium");
    lines[i] = lines[i].replace("Take 400mg of Magnesium Bisglycinate", "Clinical protocols suggest 400mg of Magnesium Bisglycinate");

    // Check ID
    const idMatch = lines[i].match(/^\s*id:\s*(\d+),/);
    if (idMatch) {
        currentId = parseInt(idMatch[1], 10);
    }

    // 2. Insert Disclaimer before AuthorBio if it's a missing ID
    if (missingIds.includes(currentId) && lines[i].includes('<AuthorBio />')) {
        lines.splice(i, 0, disclaimerHTML);
        console.log(`Added disclaimer for ID ${currentId}`);
        // Remove from missingIds so we don't add it twice
        missingIds.splice(missingIds.indexOf(currentId), 1);
        i++; // adjust index because we inserted a line
    }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("File modifications complete.");
