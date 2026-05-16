import fs from 'fs';
import path from 'path';

const filePath = '/Users/gavin/.gemini/antigravity/scratch/EMPOWERVIDA-EXPERIMENT/src/data/posts.js';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

const disclaimerHTML = `
      <div style="background: rgba(220, 38, 38, 0.1); border-left: 4px solid #DC2626; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
        <p style="margin: 0; font-weight: 700; color: #DC2626; font-size: 1.1rem; margin-bottom: 0.75rem;">Medical Disclaimer</p>
        <p style="margin: 0; font-size: 1rem; line-height: 1.6;">
          This information is for educational purposes and does not constitute medical advice. Consult your physician before starting any new supplement regimen, particularly if you have existing medical conditions or take prescription medications.
        </p>
      </div>`;

const missingIds = [1, 2, 3, 4, 5, 20, 31]; // 999 was already fixed
let currentId = null;
let inContentBlock = false;

for (let i = 0; i < lines.length; i++) {
    const idMatch = lines[i].match(/^\s*id:\s*(\d+),/);
    if (idMatch) {
        currentId = parseInt(idMatch[1], 10);
    }

    if (lines[i].includes('content: `')) {
        inContentBlock = true;
    }

    // End of content block is marked by exactly `    \`` or `    \`,  ` or similar
    // Wait, let's just look for the line that is exactly `    \`` or `    \`, `
    if (inContentBlock && missingIds.includes(currentId)) {
        if (lines[i].trim() === '`' || lines[i].trim() === '`,' || lines[i] === "    `") {
            lines.splice(i, 0, disclaimerHTML);
            console.log(`Added disclaimer for ID ${currentId}`);
            missingIds.splice(missingIds.indexOf(currentId), 1);
            inContentBlock = false;
            i += disclaimerHTML.split('\\n').length; // skip added lines
        }
    }
}

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log("File modifications complete.");
