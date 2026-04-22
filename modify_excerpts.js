const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'posts.js');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /excerpt:\s*'Can you take (.*?) and (.*?) together\? A UK medical doctor breaks down the science, the exact dosing protocol, and the serious interaction risks you need to know before combining these supplements\.',/g;

const customExcerpts = [
    "Discover the physiological interactions between **[X]** and **[Y]**. Learn how to sequence your dosing to avoid absorption competition and maximize bioenergetic impact.",
    "Combining **[X]** and **[Y]** can trigger unexpected biological pathways. I review the clinical half-life and provide a safe integration framework for your protocol.",
    "Should you stack **[X]** with **[Y]**? A breakdown of the metabolic synergies, potential gastrointestinal side effects, and exact clinical dosing guidelines.",
    "Before pairing **[X]** and **[Y]**, review this clinical assessment on receptor competition, toxicity risks, and the optimal timing for maximum absorption.",
    "Understanding the biochemical cross-talk between **[X]** and **[Y]**. Learn why timing matters and how to prevent these compounds from neutralizing each other.",
    "A physician's deep dive into the pharmacokinetics of **[X]** and **[Y]**. Protect your gut lining and maximize cellular uptake with this dosing schedule.",
    "Is it safe to stack **[X]** with **[Y]**? Uncover the science behind their interaction, the risks of excessive dosage, and the best way to utilize them both.",
    "We examine the systemic effects of taking **[X]** alongside **[Y]**. Learn the medical protocols for dosing to ensure you aren't wasting your supplements."
];

let counter = 0;

const newContent = content.replace(regex, (match, p1, p2) => {
    // Pick a variation by revolving through the array
    const template = customExcerpts[counter % customExcerpts.length];
    counter++;
    const customized = template.replace(/\*\*\[X\]\*\*/g, p1).replace(/\*\*\[Y\]\*\*/g, p2);
    return `excerpt: '${customized}',`;
});

fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully replaced ${counter} cookie-cutter excerpts with custom clinical variations.`);
