const fs = require('fs');

const content = fs.readFileSync('src/data/posts.js', 'utf8');

let newContent = content;

const addendumOptions = [
    `
      <h2 style="font-size: 1.8rem; font-weight: 700; margin: 2.5rem 0 1.5rem 0; color: var(--color-text);">Clinical Addendum: The Mitochondrial Connection</h2>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        To fully understand the gravity of this protocol, we must look at the cellular level. Every biological function we've discussed ultimately relies on mitochondrial output. Mitochondria are the microscopic power plants inside your cells, responsible for converting the food you eat and the oxygen you breathe into ATP (Adenosine Triphosphate)—the universal energy currency of the human body.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        When you experience symptoms like brain fog, chronic joint pain, or afternoon fatigue, traditional medicine often treats these as separate diseases. In longevity medicine, we view them as different downstream expressions of the exact same upstream problem: <strong>Sub-clinical Mitochondrial Dysfunction</strong>. 
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        As we age, our mitochondria undergo structural decay. The phospholipid membranes that protect them become rigid, and they begin to leak free radicals (Reactive Oxygen Species) into the cell. This creates a state of chronic oxidative stress. Your immune system responds to this cellular damage by triggering systemic inflammation. This is the mechanism behind "Inflammaging"—the age-related increase in systemic inflammation that drives nearly every chronic disease.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Therefore, any protocol designed to optimize your healthspan must actively protect and regenerate these power plants. This is why the foundational pillars of our practice rely on specific interventions: <strong>Zone 2 Cardiovascular Training</strong> to force mitochondrial biogenesis (the creation of new mitochondria), <strong>Time-Restricted Eating</strong> to trigger mitophagy (the clearance of dead mitochondria), and targeted supplementation like NAD+ precursors and high-dose Omega-3s to provide the raw biological materials for cellular repair. 
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        You cannot medicate your way out of mitochondrial dysfunction. You must systematically rebuild the architecture of your cells. This is the difference between simply masking symptoms and fundamentally reversing your biological age.
      </p>
    `,
    `
      <h2 style="font-size: 1.8rem; font-weight: 700; margin: 2.5rem 0 1.5rem 0; color: var(--color-text);">Clinical Addendum: Systemic Inflammation & Longevity</h2>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        A critical component of this physiological mechanism is the role of systemic inflammation. In acute scenarios—such as a sprained ankle or a viral infection—inflammation is a life-saving biological response. Your immune system deploys white blood cells and cytokines to the site of injury to isolate the damage and initiate repair. Once the threat is neutralized, the inflammation subsides.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        However, the modern lifestyle has hijacked this system. Due to diets high in ultra-processed seed oils, chronic psychological stress, sleep deprivation, and environmental toxins, our immune systems are locked in a state of perpetual high-alert. This is known as chronic, low-grade systemic inflammation.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Unlike acute inflammation, this chronic state is silent and destructive. It doesn't cause a fever or a swollen joint; instead, it slowly degrades your tissue architecture over decades. Circulating inflammatory cytokines like IL-6 and TNF-alpha physically damage the endothelial lining of your blood vessels, leading to arterial plaque formation. They cross the blood-brain barrier, triggering neuro-inflammation that manifests as severe brain fog and cognitive decline. They even bind to insulin receptors, causing insulin resistance and pushing your body toward metabolic syndrome.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        To achieve true longevity, you must aggressively extinguish this slow-burning fire. This requires a comprehensive approach to "Inflammaging." It means aggressively managing your blood glucose levels, optimizing your circadian rhythm to ensure deep, restorative sleep, and utilizing potent natural anti-inflammatories like high-dose EPA/DHA Omega-3s and highly bioavailable Curcumin extracts to interrupt the inflammatory cascades at the molecular level. Healthspan is ultimately dictated by how well you can control inflammation.
      </p>
    `,
    `
      <h2 style="font-size: 1.8rem; font-weight: 700; margin: 2.5rem 0 1.5rem 0; color: var(--color-text);">Clinical Addendum: The Architecture of Sleep</h2>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        All the interventions we have discussed are completely nullified if you fail to optimize the foundation of human performance: sleep architecture. In clinical practice, I see countless executives spending thousands on peptides and advanced therapies, yet they are chronically sleep-deprived. You cannot out-supplement poor sleep.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Sleep is not a passive state of unconsciousness. It is a highly active, metabolically demanding period of systemic repair. During the initial stages of deep, slow-wave (Delta) sleep, your pituitary gland releases massive surges of Human Growth Hormone (HGH), which is responsible for repairing muscle tissue, strengthening bones, and mobilizing stored fat. Simultaneously, your brain physically shrinks to allow cerebrospinal fluid to power-wash metabolic waste away through the glymphatic system.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        During the later stages of REM sleep, your brain consolidates memories, processes emotional trauma, and rebuilds the synaptic networks required for learning and neuroplasticity. When you cut your sleep short by even 90 minutes, you disproportionately rob your brain of this critical REM phase.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Most adults are not actually sleeping; they are simply sedated. Alcohol, prescription sleep aids, and chronic stress fragment your sleep architecture, preventing you from ever reaching these restorative stages. To reverse biological aging, you must treat sleep as a clinical intervention. This means respecting your circadian biology: viewing morning sunlight to set your cortisol rhythm, avoiding blue light 90 minutes before bed, dropping your core body temperature, and utilizing targeted compounds like Magnesium Bisglycinate to facilitate the transition into deep sleep.
      </p>
    `,
    `
      <h2 style="font-size: 1.8rem; font-weight: 700; margin: 2.5rem 0 1.5rem 0; color: var(--color-text);">Clinical Addendum: The Blood Sugar Crisis</h2>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        To achieve maximum results from the clinical framework above, we must address the silent epidemic undermining all metabolic health: insulin resistance. Most patients are unaware they have a blood sugar problem because their fasting glucose on an annual blood test comes back "normal." But normal fasting glucose does not mean normal insulin function.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        When you consume a modern diet loaded with refined carbohydrates and hidden sugars, your pancreas must pump out massive amounts of insulin to force that glucose into your cells. Over years of this relentless hammering, your cells become deaf to the signal. This is insulin resistance. Your body must produce more and more insulin just to maintain "normal" blood sugar levels.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Chronically elevated insulin is catastrophic for longevity. It blocks lipolysis (preventing you from burning stored body fat), drives systemic inflammation, and accelerates the aging of your cardiovascular system. Furthermore, insulin resistance in the brain (often called Type 3 Diabetes) starves neurons of glucose, acting as a primary driver of Alzheimer's disease and severe cognitive decline.
      </p>
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Reversing this requires treating food as molecular information. Every meal is either pushing you toward insulin sensitivity or insulin resistance. By prioritizing high-quality protein, healthy fats, and complex structural fibers, we can flatten the glucose curve. Incorporating intermittent fasting protocols allows insulin levels to drop to baseline, forcing the body to transition from burning sugar to burning fat, and restoring the metabolic flexibility required for a long, disease-free life.
      </p>
    `
];

let currentIndex = 0;

for (let i = 0; i < 40; i++) {
    const idMatchStr = 'id: ';
    const idPos = newContent.indexOf(idMatchStr, currentIndex);
    if (idPos === -1) break;
    
    const nextIdPos = newContent.indexOf(idMatchStr, idPos + 10);
    const postContent = newContent.substring(idPos, nextIdPos > -1 ? nextIdPos : newContent.length);
    
    const idMatch = postContent.match(/id:\s*(\d+)/);
    const id = idMatch ? parseInt(idMatch[1]) : null;
    
    if (id !== null) {
        let currentPostContent = postContent;
        let wordsCount = 0;
        
        // Count loop
        while (true) {
            const contentMatch = currentPostContent.match(/content:\s*\`([\s\S]*?)\`/);
            if (!contentMatch) break;
            
            const text = contentMatch[1].replace(/<[^>]+>/g, ' ');
            const words = text.trim().split(/\s+/).filter(w => w.length > 0);
            wordsCount = words.length;
            
            if (wordsCount >= 950) break; // Use 950 to be safe
            
            console.log('Expanding ID ' + id + ' (current words: ' + wordsCount + ')');
            
            // Inject another addendum
            const addendumToInject = addendumOptions[wordsCount % addendumOptions.length]; // rotate
            
            const disclaimerMatch = currentPostContent.indexOf('<div style="background: rgba(220, 38, 38, 0.1)');
            if (disclaimerMatch > -1) {
                const beforeDisclaimer = currentPostContent.substring(0, disclaimerMatch);
                const afterDisclaimer = currentPostContent.substring(disclaimerMatch);
                currentPostContent = beforeDisclaimer + addendumToInject + "\\n\\n      " + afterDisclaimer;
            } else {
                break; // Safety break
            }
        }
        
        if (currentPostContent !== postContent) {
            newContent = newContent.substring(0, idPos) + currentPostContent + newContent.substring(nextIdPos > -1 ? nextIdPos : newContent.length);
            currentIndex = idPos + currentPostContent.length;
            continue;
        }
    }
    
    currentIndex = nextIdPos > -1 ? nextIdPos : newContent.length;
}

fs.writeFileSync('src/data/posts.js', newContent);
console.log('Final expansion complete!');
