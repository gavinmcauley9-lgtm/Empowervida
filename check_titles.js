import posts from './src/data/posts.js';

const missingDisclaimers = [999, 1, 2, 3, 4, 5, 20, 31];
const prescriptiveIds = [2, 3, 4, 24];

console.log("Missing Disclaimers:");
posts.filter(p => missingDisclaimers.includes(p.id)).forEach(p => {
    console.log(`- ID: ${p.id}, Title: ${p.title}`);
});

console.log("\nPrescriptive Language:");
posts.filter(p => prescriptiveIds.includes(p.id)).forEach(p => {
    const match = p.content.match(/\b(?:take|use)\s+\d+(?:mg|g|mcg|ml)\b/i);
    console.log(`- ID: ${p.id}, Title: ${p.title}, Match: ${match ? match[0] : 'Not found'}`);
});
