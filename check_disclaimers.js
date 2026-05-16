import posts from './src/data/posts.js';

const missingDisclaimers = [];
const prescriptiveLanguage = [];
const protocolCheck = [];

posts.forEach(post => {
    if (!post.content.toLowerCase().includes('medical disclaimer')) {
        missingDisclaimers.push(post.id);
    }
    
    // Check for prescriptive language like "take X mg" instead of "I recommend"
    if (post.content.match(/\b(?:take|use)\s+\d+(?:mg|g|mcg|ml)\b/i)) {
        prescriptiveLanguage.push({id: post.id, match: post.content.match(/\b(?:take|use)\s+\d+(?:mg|g|mcg|ml)\b/i)[0]});
    }

    // Check for "protocol" usage
    if (post.content.toLowerCase().includes('protocol')) {
        protocolCheck.push(post.id);
    }
});

console.log("Missing Disclaimers in posts (IDs):", missingDisclaimers);
console.log("Potential prescriptive language ('take X mg'):", prescriptiveLanguage);
console.log("Posts containing 'protocol':", protocolCheck.length);
