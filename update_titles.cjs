const fs = require('fs');
let code = fs.readFileSync('src/data/posts.js', 'utf8');

const updates = [
    { id: 1, newTitle: "Brain Fog & Cognitive Decline: The Science of the \\\"Starving\\\" Neuron" },
    { id: 2, newTitle: "Brain Fog Causes: Why Your Brain is Full of \\\"Sewage\\\" & How to Flush It" },
    { id: 5, newTitle: "Brain Atrophy & Memory Loss: How to Trigger BDNF and Reverse the Decay" },
    { id: 7, newTitle: "Chronic Fatigue Syndrome: I’M EXHAUSTED, BUT MY LABS ARE NORMAL" },
    { id: 10, newTitle: "Chronic Inflammation Symptoms: Why It is The Root Cause of Fatigue & Joint Pain" },
    { id: 11, newTitle: "Blood Sugar Spikes: Why I Treat \\\"Normal\\\" Fasting Glucose as a Medical Emergency" },
    { id: 12, newTitle: "Vitamin D Deficiency: The \\\"Silent\\\" Root Cause of Your Winter Fatigue" },
    { id: 13, newTitle: "Focus & Attention Deficit: Why You Can\\'t Concentrate (And How to Clear the Haze)" },
    { id: 14, newTitle: "Anxiety & Inflammation: The Hidden Link Behind \\\"Brain on Fire\\\"" },
    { id: 15, newTitle: "Chronic Fatigue: Why Your Brain Tires Before Your Body (And How to Fix It)" },
    { id: 20, newTitle: "Insomnia & High Cortisol: TIRED BUT WIRED & Why You Can\\'t Sleep at 10 PM" },
    { id: 22, newTitle: "Cellular Aging: Why You Feel 60 at 40 (The \\\"Battery\\\" That Dies Before You Do)" },
    { id: 28, newTitle: "Creatine vs. NAD+: Why You Need Both for Ultimate Cellular Energy (Physician\\'s Guide)" },
    { id: 37, newTitle: "Vitamin C and Quercetin: The Ultimate Immune & Allergy Stack (Physician\\'s Guide)" }
];

updates.forEach(u => {
    const regex = new RegExp(`(id:\\s*${u.id},\\s*\\n\\s*title:\\s*)[^\\n]+`);
    code = code.replace(regex, `$1'${u.newTitle}',`);
});

fs.writeFileSync('src/data/posts.js', code);
console.log('Done mapping titles.');
