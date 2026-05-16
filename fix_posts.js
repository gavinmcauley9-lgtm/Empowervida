import fs from 'fs';
import path from 'path';

const filePath = '/Users/gavin/.gemini/antigravity/scratch/EMPOWERVIDA-EXPERIMENT/src/data/posts.js';
let fileContent = fs.readFileSync(filePath, 'utf8');

const disclaimerHTML = `
      <div style="background: rgba(220, 38, 38, 0.1); border-left: 4px solid #DC2626; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
        <p style="margin: 0; font-weight: 700; color: #DC2626; font-size: 1.1rem; margin-bottom: 0.75rem;">Medical Disclaimer</p>
        <p style="margin: 0; font-size: 1rem; line-height: 1.6;">
          This information is for educational purposes and does not constitute medical advice. Consult your physician before starting any new supplement regimen, particularly if you have existing medical conditions or take prescription medications.
        </p>
      </div>`;

const missingIds = [999, 1, 2, 3, 4, 5, 20, 31];

// 1. Soften Prescriptive Language
const replacements = [
  { search: "take 3g of Glycine", replace: "clinical protocols typically suggest 3g of Glycine" },
  { search: "Take 5g of Creatine", replace: "Clinical protocols typically utilize 5g of Creatine" },
  { search: "Take 2g-3g of clinical-grade Omega-3s", replace: "Clinical protocols suggest 2g-3g of clinical-grade Omega-3s" },
  { search: "Take 250mg - 500mg of CDP-Choline", replace: "I typically recommend 250mg - 500mg of CDP-Choline" },
  { search: "Take 144mg of elemental magnesium", replace: "Clinical protocols typically suggest 144mg of elemental magnesium" },
  { search: "Take 400mg of Magnesium Bisglycinate", replace: "Clinical protocols suggest 400mg of Magnesium Bisglycinate" }
];

replacements.forEach(({search, replace}) => {
    fileContent = fileContent.replace(search, replace);
});

// 2. Append Disclaimers
// We need to find the `content: \`...\`` block for the specific IDs.
// A regex to match an object with id: X and capture its content block:
for (const id of missingIds) {
    // Regex matches:
    // id: <ID>, (or other properties)
    // ...
    // content: `...`
    
    // We'll use a regex that finds the id, then the nearest `content: \``, then the end of that string `\``.
    // Because JS regex can be tricky with multiline matching over large files, we'll process the file in chunks or use a robust pattern.
    
    const regex = new RegExp(`(id:\\s*${id}\\s*,[\\s\\S]*?content:\\s*\`[\\s\\S]*?)(?=\\s*\`,\\s*excerpt:)`, 'g');
    
    // Let's test if the regex matches
    if (regex.test(fileContent)) {
        fileContent = fileContent.replace(regex, `$1${disclaimerHTML}`);
        console.log(`Successfully added disclaimer to post ID ${id}`);
    } else {
        console.log(`Failed to find content block for post ID ${id}`);
        // Try another pattern if excerpt is not immediately after
        const backupRegex = new RegExp(`(id:\\s*${id}\\s*,[\\s\\S]*?content:\\s*\`[\\s\\S]*?)(?=\\s*\`,\\s*(?:excerpt|category|tags|author):)`, 'g');
        if (backupRegex.test(fileContent)) {
             fileContent = fileContent.replace(backupRegex, `$1${disclaimerHTML}`);
             console.log(`Successfully added disclaimer to post ID ${id} using backup regex`);
        } else {
             console.log(`Backup regex also failed for post ID ${id}`);
        }
    }
}

fs.writeFileSync(filePath, fileContent, 'utf8');
console.log("File modifications complete.");
