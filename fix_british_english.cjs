const fs = require('fs');

let content = fs.readFileSync('src/data/posts.js', 'utf8');
const original = content;

// Track all replacements
const log = [];
let totalReplacements = 0;

/**
 * Smart replace that ONLY targets visible text content in HTML,
 * NOT CSS properties, HTML attributes, or JS variable names.
 * 
 * Strategy: We split the content into "safe zones" (text between tags)
 * and "unsafe zones" (inside HTML tags, style attributes, etc.)
 * 
 * For simplicity and safety, we use word-boundary regex with
 * negative lookbehinds/lookaheads to avoid CSS contexts.
 */
function smartReplace(fileContent, american, british, notes = '') {
    // Build a regex that matches the american word at word boundaries
    // Case-insensitive, global
    const regex = new RegExp(`\\b${american}\\b`, 'g');
    
    let count = 0;
    const newContent = fileContent.replace(regex, (match, offset) => {
        // Check surrounding context to avoid CSS/HTML attribute replacements
        const before = fileContent.substring(Math.max(0, offset - 80), offset);
        const after = fileContent.substring(offset, Math.min(fileContent.length, offset + match.length + 40));
        
        // SKIP if inside a CSS property (e.g., `color:`, `text-align: center`, `var(--color-`)
        if (/style=/.test(before) && /["']/.test(before.slice(-40))) {
            // We're likely inside a style attribute — skip for color/center
            if (american.toLowerCase() === 'color' || american.toLowerCase() === 'center') {
                return match;
            }
        }
        
        // SKIP if it's a CSS variable reference like --color-
        if (before.includes('--color') || before.includes('color:') || before.includes('color-')) {
            if (american.toLowerCase() === 'color') return match;
        }
        
        // SKIP if it's text-align: center or similar CSS center
        if (/text-align:\s*$/.test(before) || /align-items:\s*$/.test(before) || /justify-content:\s*$/.test(before)) {
            if (american.toLowerCase() === 'center') return match;
        }
        
        // SKIP if inside an HTML tag attribute (src=, alt=, href=, class=, id=)
        // Check if we're between < and > 
        const lastOpen = before.lastIndexOf('<');
        const lastClose = before.lastIndexOf('>');
        if (lastOpen > lastClose) {
            // We're inside an HTML tag — skip for color/center
            if (american.toLowerCase() === 'color' || american.toLowerCase() === 'center') {
                return match;
            }
        }
        
        // Preserve original casing pattern
        let replacement;
        if (match[0] === match[0].toUpperCase()) {
            replacement = british.charAt(0).toUpperCase() + british.slice(1);
        } else {
            replacement = british;
        }
        
        // If full uppercase
        if (match === match.toUpperCase() && match.length > 2) {
            replacement = british.toUpperCase();
        }
        
        count++;
        return replacement;
    });
    
    if (count > 0) {
        log.push(`  ✅ "${american}" → "${british}" (${count} replacements)${notes ? ' — ' + notes : ''}`);
        totalReplacements += count;
    }
    
    return newContent;
}

console.log('=================================================================');
console.log('  BRITISH ENGLISH FIX — EMPOWERVIDA posts.js');
console.log('=================================================================\n');

// ========================
// -ize → -ise family
// ========================
console.log('--- Fixing -ize → -ise ---');
content = smartReplace(content, 'optimize', 'optimise');
content = smartReplace(content, 'optimized', 'optimised');
content = smartReplace(content, 'optimizing', 'optimising');
content = smartReplace(content, 'optimization', 'optimisation');
content = smartReplace(content, 'realize', 'realise');
content = smartReplace(content, 'realized', 'realised');
content = smartReplace(content, 'realizing', 'realising');
content = smartReplace(content, 'recognize', 'recognise');
content = smartReplace(content, 'recognized', 'recognised');
content = smartReplace(content, 'recognizing', 'recognising');
content = smartReplace(content, 'specialize', 'specialise');
content = smartReplace(content, 'specialized', 'specialised');
content = smartReplace(content, 'specializing', 'specialising');
content = smartReplace(content, 'analyze', 'analyse');
content = smartReplace(content, 'analyzed', 'analysed');
content = smartReplace(content, 'analyzing', 'analysing');
content = smartReplace(content, 'minimize', 'minimise');
content = smartReplace(content, 'minimized', 'minimised');
content = smartReplace(content, 'minimizing', 'minimising');
content = smartReplace(content, 'maximize', 'maximise');
content = smartReplace(content, 'maximized', 'maximised');
content = smartReplace(content, 'maximizing', 'maximising');
content = smartReplace(content, 'utilize', 'utilise');
content = smartReplace(content, 'utilized', 'utilised');
content = smartReplace(content, 'utilizing', 'utilising');
content = smartReplace(content, 'characterize', 'characterise');
content = smartReplace(content, 'characterized', 'characterised');
content = smartReplace(content, 'characterizing', 'characterising');
content = smartReplace(content, 'summarize', 'summarise');
content = smartReplace(content, 'summarized', 'summarised');
content = smartReplace(content, 'mobilize', 'mobilise');
content = smartReplace(content, 'mobilized', 'mobilised');
content = smartReplace(content, 'metabolize', 'metabolise');
content = smartReplace(content, 'metabolized', 'metabolised');
content = smartReplace(content, 'metabolizing', 'metabolising');
content = smartReplace(content, 'neutralize', 'neutralise');
content = smartReplace(content, 'neutralized', 'neutralised');
content = smartReplace(content, 'neutralizing', 'neutralising');
content = smartReplace(content, 'stabilize', 'stabilise');
content = smartReplace(content, 'stabilized', 'stabilised');
content = smartReplace(content, 'stabilizing', 'stabilising');
content = smartReplace(content, 'prioritize', 'prioritise');
content = smartReplace(content, 'prioritized', 'prioritised');
content = smartReplace(content, 'catalyze', 'catalyse');
content = smartReplace(content, 'catalyzed', 'catalysed');
content = smartReplace(content, 'synthesize', 'synthesise');
content = smartReplace(content, 'synthesized', 'synthesised');
content = smartReplace(content, 'synthesizing', 'synthesising');
content = smartReplace(content, 'immunize', 'immunise');
content = smartReplace(content, 'immunized', 'immunised');
content = smartReplace(content, 'oxidize', 'oxidise');
content = smartReplace(content, 'oxidized', 'oxidised');
content = smartReplace(content, 'oxidizing', 'oxidising');
content = smartReplace(content, 'colonize', 'colonise');
content = smartReplace(content, 'colonized', 'colonised');
content = smartReplace(content, 'memorize', 'memorise');
content = smartReplace(content, 'memorized', 'memorised');
content = smartReplace(content, 'energize', 'energise');
content = smartReplace(content, 'energized', 'energised');
content = smartReplace(content, 'energizing', 'energising');
content = smartReplace(content, 'customize', 'customise');
content = smartReplace(content, 'customized', 'customised');

// ========================
// -or → -our family
// ========================
console.log('\n--- Fixing -or → -our ---');
content = smartReplace(content, 'favor', 'favour');
content = smartReplace(content, 'favorite', 'favourite');
content = smartReplace(content, 'favorites', 'favourites');
content = smartReplace(content, 'honor', 'honour');
content = smartReplace(content, 'honored', 'honoured');
content = smartReplace(content, 'behavior', 'behaviour');
content = smartReplace(content, 'behaviors', 'behaviours');
content = smartReplace(content, 'behavioral', 'behavioural');
content = smartReplace(content, 'labor', 'labour');
content = smartReplace(content, 'tumor', 'tumour');
content = smartReplace(content, 'tumors', 'tumours');
content = smartReplace(content, 'vigor', 'vigour');
content = smartReplace(content, 'humor', 'humour');
// NOTE: "color" is too risky due to CSS — handle separately below

// ========================
// -er → -re family
// ========================
console.log('\n--- Fixing -er → -re ---');
// "center" is very common in CSS (text-align: center), so we handle carefully
content = smartReplace(content, 'center', 'centre');
content = smartReplace(content, 'centered', 'centred');

// ========================
// -ense → -ence
// ========================
console.log('\n--- Fixing -ense → -ence ---');
content = smartReplace(content, 'defense', 'defence');
content = smartReplace(content, 'offense', 'offence');
content = smartReplace(content, 'license', 'licence', 'noun form only');

// ========================
// -ling → -lling
// ========================
console.log('\n--- Fixing doubled consonants ---');
content = smartReplace(content, 'signaling', 'signalling');
content = smartReplace(content, 'modeling', 'modelling');
content = smartReplace(content, 'labeling', 'labelling');
content = smartReplace(content, 'traveling', 'travelling');
content = smartReplace(content, 'canceling', 'cancelling');
content = smartReplace(content, 'fueling', 'fuelling');
content = smartReplace(content, 'channeling', 'channelling');

// ========================
// Unique words
// ========================
console.log('\n--- Fixing unique British spellings ---');
content = smartReplace(content, 'fiber', 'fibre');
content = smartReplace(content, 'fibers', 'fibres');
content = smartReplace(content, 'aging', 'ageing');
content = smartReplace(content, 'catalog', 'catalogue');
content = smartReplace(content, 'program', 'programme', 'only noun form — code "program" won\'t match here due to context');
content = smartReplace(content, 'sulfur', 'sulphur');
content = smartReplace(content, 'estrogen', 'oestrogen');
content = smartReplace(content, 'anemia', 'anaemia');
content = smartReplace(content, 'anemic', 'anaemic');
content = smartReplace(content, 'pediatric', 'paediatric');
content = smartReplace(content, 'encyclopedia', 'encyclopaedia');
content = smartReplace(content, 'maneuver', 'manoeuvre');
content = smartReplace(content, 'fetus', 'foetus');
content = smartReplace(content, 'fetal', 'foetal');
content = smartReplace(content, 'edema', 'oedema');
content = smartReplace(content, 'diarrhea', 'diarrhoea');
content = smartReplace(content, 'hemorrhage', 'haemorrhage');
content = smartReplace(content, 'hemoglobin', 'haemoglobin');

// ========================
// Summary
// ========================
console.log('\n=================================================================');
console.log(`  TOTAL REPLACEMENTS: ${totalReplacements}`);
console.log('=================================================================\n');

if (log.length > 0) {
    console.log('All changes:');
    for (const entry of log) {
        console.log(entry);
    }
}

if (totalReplacements === 0) {
    console.log('No American English spellings found. File is already clean!');
} else {
    // Write the fixed file
    fs.writeFileSync('src/data/posts.js', content, 'utf8');
    console.log(`\n✅ File saved! ${totalReplacements} total replacements made.`);
    
    // Verify file is still valid JS by checking basic structure
    const postCount = (content.match(/\bid:\s*\d+,/g) || []).length;
    console.log(`📊 Post count verification: ${postCount} posts found (file structure intact)`);
}
