const fs = require('fs');
const content = fs.readFileSync('src/data/posts.js', 'utf8');

const prefixIdx = content.indexOf('export const POSTS = [\n');
if (prefixIdx === -1) throw new Error("Could not find posts array start");
const prefixEnd = prefixIdx + 'export const POSTS = [\n'.length;

const suffixIdx = content.lastIndexOf('];');
const prefix = content.substring(0, prefixEnd);
const suffix = content.substring(suffixIdx);
const middle = content.substring(prefixEnd, suffixIdx);

const parts = middle.split(/^  \{\n    id: /m);
let posts = [];

parts.forEach(part => {
  if (!part.trim()) return;
  // each part looks like: "1,\n    title: '...', \n ...   },\n"
  const match = part.match(/^(\d+),/);
  if (!match) return;
  const id = parseInt(match[1]);
  // Reconstruct the full string block for this post
  const fullStr = "  {\n    id: " + part;
  posts.push({ id, text: fullStr });
});

console.log("Found " + posts.length + " posts.");

// NEW POST 1
const newPost1 = `  {
    id: 1,
    title: 'From Fog to Flow: The Science of the Starving Neuron',
    category: 'neurolongevity',
    image: '/neuron_starving_nourished.png',
    excerpt: 'Cognitive decline and "brain fog" are often symptoms of cerebral bioenergetic failure. When the brain becomes insulin resistant, it can no longer uptake glucose, leaving neurons to starve. A physician explains how to reverse this.',
    date: 'Mar 15, 2026',
    cta: {
      text: "View The Neurolongevity Protocol",
      link: "/protocol#neurolongevity-stack"
    },
    references: [
      { text: "de la Monte, S. M., & Wands, J. R. (2008). Alzheimer's Disease Is Type 3 Diabetes-Evidence Reviewed. Journal of Diabetes Science and Technology, 2(6), 1101-1113.", url: "https://pubmed.ncbi.nlm.nih.gov/19008985/" },
      { text: "Jessen, N. A., et al. (2015). The Glymphatic System: A Beginner's Guide. Neurochemical Research, 40(12), 2583-2599.", url: "https://pubmed.ncbi.nlm.nih.gov/25947369/" },
      { text: "Fortier, M., et al. (2021). A ketogenic drink improves brain energy and some measures of cognition in mild cognitive impairment. Alzheimer's & Dementia.", url: "https://pubmed.ncbi.nlm.nih.gov/30415609/" },
      { text: "Roschel, H., et al. (2021). Creatine Supplementation and Brain Health. Nutrients, 13(2), 586.", url: "https://pubmed.ncbi.nlm.nih.gov/33578876/" }
    ],
    content: \`
      <p><strong>By Dr. Gavin McAuley | EMPOWERVIDA</strong></p>
      
      <div style="background: rgba(32, 178, 170, 0.1); border-left: 4px solid #20B2AA; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
        <p style="margin: 0; font-weight: 700; color: #20B2AA; font-size: 1.1rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">TL;DR</p>
        <p style="margin: 0; font-size: 1.05rem; line-height: 1.6;">Cognitive decline and "brain fog" are often symptoms of cerebral bioenergetic failure. When the brain becomes insulin resistant—a state known as Type 3 Diabetes—it can no longer uptake glucose, leaving neurons to starve. By utilizing ketones as an alternative fuel and optimizing the Glymphatic waste-clearance system, we can protect and potentially reverse cognitive attrition.</p>
      </div>

      <div style="margin: 2rem 0; text-align: center;">
        <img src="/neuron_starving_nourished.png" alt="A cinematic 3D render of a single neuron. Withered on one side, glowing on the other." style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
      </div>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Physician’s Observation: The "Paper-Perfect" Patient</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        In my years as a GP, I have seen many patients who did everything "right" but still lost their way. I remember a couple who came to see me—let's call the wife Maeve.
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Maeve was in her mid-sixties, lean, and physically active. She'd often arrive for her appointments in outdoor leisure gear, fresh from a walk. But her husband was worried, her friends were worried, and Maeve was becoming noticeably forgetful.
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        I ran the standard screens: full blood count, iron, thyroid. On paper, she was perfect. I was at a loss for a "quick fix," so I referred her to a Geriatrician. The MRI was normal, no drugs were started, and the working diagnosis was "early-onset dementia."
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        At the time, before I transitioned into holistic health and functional medicine, I wasn't equipped with the knowledge I have now. I followed the reactive protocol—wait and watch. But looking back, I realize that while Maeve was fit, her brain was likely starving in plain sight. Whether we call it "brain fog," age-related forgetfulness, or the early stages of cognitive decline, the underlying biology is often the same: a brain that can no longer feed itself.
      </p>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Science of the Starving Neuron: Type 3 Diabetes</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Seminal research, notably by Dr. Suzanne de la Monte at Brown University, has changed how I would treat Maeve today. We now understand that Alzheimer’s and cognitive decline are frequently a form of "Type 3 Diabetes."
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        In this state, the brain becomes insulin resistant. Even if your peripheral blood sugar looks "normal" on a standard fasting test, your neurons are losing the ability to uptake glucose. It is a "locked door" scenario: glucose molecules surround the neuron, but the insulin "key" no longer works. The neuron, deprived of its primary energy source, begins to wither. This isn't just "aging"; it is metabolic failure at the cellular level.
      </p>

      <div style="margin: 2rem 0; text-align: center;">
        <img src="/fuel_gauge_ketones.png" alt="A clean, minimalist medical infographic showing Glucose empty and Ketones full" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
      </div>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Nightly Cleanse: The Glymphatic System</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        We used to think the brain was static in its waste management. Then, Dr. Maiken Nedergaard identified the Glymphatic System—the brain's specialized plumbing system.
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        During deep sleep, the space between neurons increases by up to 60%, allowing cerebrospinal fluid (CSF) to flush out neurotoxic waste, specifically amyloid-beta and tau proteins.
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        If sleep is poor, or if we eat too close to bedtime (raising insulin and blocking repair signals), the "drainage" fails. The brain's "trash" builds up, accelerating the very decline we saw in Maeve. If the brain is starving by day and clogged by night, decline is inevitable.
      </p>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Resilience Protocol: How to Feed Your Brain</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        If Maeve walked into my clinic today, we wouldn't just wait for an MRI to show "atrophy." By the time atrophy is visible, the battle has been raging for twenty years. Instead, we would optimize the "Engine in the Basement" immediately using a dual-fuel strategy.
      </p>

      <h3 style="font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0; color: var(--color-text);">1. The Ketogenic "Bypass"</h3>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        When a neuron is insulin resistant, it can't use glucose. However, it can still use <strong>Ketones</strong>. Ketones (specifically Beta-hydroxybutyrate) are a "super-fuel" that enter the mitochondria through a different "door" (the monocarboxylate transporter), bypassing the broken insulin signaling entirely.
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        By shifting toward a Low-Carb/High-Fat diet or utilizing Intermittent Fasting, we encourage the liver to produce ketones. This provides the "starving" brain with an immediate energy source, often lifting the "fog" within days.
      </p>

      <h3 style="font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0; color: var(--color-text);">2. Metabolic Rigor & Testing</h3>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        We must move beyond "normal" ranges. In my Neurolongevity series, I look for:
      </p>

      <ul style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
        <li style="margin-bottom: 0.75rem;"><strong>Fasting Insulin:</strong> Below 5 uIU/mL. (Standard "normal" can go up to 25, which is far too high for brain health).</li>
        <li style="margin-bottom: 0.75rem;"><strong>HbA1c:</strong> Aiming for 4.8% to 5.2%.</li>
        <li style="margin-bottom: 0.75rem;"><strong>HOMA-IR:</strong> A calculated score of insulin resistance that helps us see the "starvation" before it starts.</li>
      </ul>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">Strategic Neurolongevity Supplementation</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        To support the bioenergetics of the brain, I recommend these three pillars:
      </p>

      <ul style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
        <li style="margin-bottom: 0.75rem;"><strong>Creatine Monohydrate (5g daily):</strong> Creatine isn't just for muscles. It acts as a secondary "energy battery" for neurons, helping them maintain ATP levels during metabolic stress.</li>
        <li style="margin-bottom: 0.75rem;"><strong>Magnesium L-Threonate:</strong> This is the specific form of magnesium that crosses the blood-brain barrier. It is essential for synaptic density—the actual physical connections between your memories.</li>
        <li style="margin-bottom: 0.75rem;"><strong>Vitamin D3 + K2:</strong> Aim for the upper quartile of the reference range (60–80 ng/mL). Vitamin D is a potent neuro-steroid that regulates the brain’s immune cells (microglia), preventing them from turning "inflammatory."</li>
      </ul>

      <div style="margin: 2rem 0; text-align: center;">
        <img src="/brain_health_flatlay.png" alt="A professional flat-lay of a wooden desk with blueberries, MRI scan, and supplements" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
      </div>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Takeaway: Protect Your Cognitive Wealth</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        We cannot wait for a diagnosis to start protecting our brain. By the time an MRI shows "atrophy," the structural damage is profound. Whether you are thirty and struggling with focus, or sixty and worried about names, the biology is the same.
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Fix the fuel, and fix the drainage. The "locked door" of insulin resistance can be bypassed, and the glymphatic "trash" can be cleared. The time to feed your brain is not after the diagnosis—it is tonight.
      </p>
    \`
  },`;

// NEW POST 28
const newPost28 = `  {
    id: 28,
    title: 'Creatine and NAD+: Can You Take Them Together? (The Physician’s Guide)',
    category: 'supplements',
    image: '/cell_nad_creatine.png',
    excerpt: 'Yes, not only can you take Creatine and NAD+ together, but they are highly synergistic. While Creatine focuses on rapid ATP recycling in the cytoplasm, NAD+ powers the long-term ATP production within the mitochondria. Combining them creates a dual-pathway energy strategy that supports both physical power and cognitive longevity. Just heed the warning: Timing is everything.',
    date: 'Mar 15, 2026',
    cta: {
      text: "View Clinical Grade Supplements",
      link: "/shop"
    },
    references: [
      { text: "Tarnopolsky, M. A. (2014). Synergy between Creatine and Mitochondrial Function. Amino Acids.", url: "https://pubmed.ncbi.nlm.nih.gov/26748651/" },
      { text: "Asher, G., & Sassone-Corsi, P. (2015). Time for food: the intimate interplay between nutrition, metabolism, and the circadian clock. Cell, 161(1), 84-92.", url: "https://pubmed.ncbi.nlm.nih.gov/22179986/" },
      { text: "Forbes, S. C., et al. (2021). Creatine Supplementation in Aging Populations. Journal of Clinical Medicine, 10(9), 1903.", url: "https://pubmed.ncbi.nlm.nih.gov/36949443/" },
      { text: "Irie, J., et al. (2020). Safety and Efficacy of Nicotinamide Mononucleotide (NMN) in Humans. Endocrine Journal.", url: "https://pubmed.ncbi.nlm.nih.gov/36482258/" }
    ],
    content: \`
      <p><strong>By Dr. Gavin McAuley | EMPOWERVIDA</strong></p>
      
      <div style="background: rgba(32, 178, 170, 0.1); border-left: 4px solid #20B2AA; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
        <p style="margin: 0; font-weight: 700; color: #20B2AA; font-size: 1.1rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">TL;DR</p>
        <p style="margin: 0; font-size: 1.05rem; line-height: 1.6;">Yes, not only can you take Creatine and NAD+ together, but they are highly synergistic. While Creatine focuses on rapid ATP recycling in the cytoplasm, NAD+ powers the long-term ATP production within the mitochondria. Combining them creates a dual-pathway energy strategy that supports both physical power and cognitive longevity. Just heed the warning: Timing is everything.</p>
      </div>

      <div style="margin: 2rem 0; text-align: center;">
        <img src="/cell_nad_creatine.png" alt="A sophisticated, clinical 3D render of a single human cell with glowing blue mitochondria and golden cytoplasm" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
      </div>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Short Answer: The Power Plant and the Battery</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Think of your cellular energy as a city’s power grid. NAD+ is the Power Plant—it generates the bulk of the electricity (ATP) continuously. Creatine is the Battery Backup—it provides an instantaneous surge of power the moment the grid is stressed.
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        In clinical practice, I often see patients focusing on one or the other. But for true "Longevity Architecture," you need both sustained mitochondrial output and rapid-response recycling. Taking them together isn't just "safe"; it's biologically logical.
      </p>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">Why This Combination Works: The Biochemistry</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Your mitochondria are engines, but even the best engines need a recycling system to maintain power without stalling.
      </p>

      <h3 style="font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0; color: var(--color-text);">NAD+’s Role: The Electron Shuttle</h3>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme required for the Electron Transport Chain (ETC). It accepts electrons from NADH and shuttles them through the mitochondrial complexes to drive the synthesis of ATP.
      </p>

      <div style="background: rgba(243, 244, 246, 0.5); padding: 1.5rem; margin: 2rem 0; text-align: center; border-radius: 8px; font-family: monospace; font-size: 1.1rem; color: var(--color-text); overflow-x: auto;">
        NADH + Q + 5H(matrix) &rarr; NAD+ + QH2 + 4H(intermembrane)
      </div>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Without adequate NAD+, your mitochondria cannot produce energy efficiently, regardless of how much fuel (glucose or fat) you consume. It is the "rate-limiting" factor of your metabolism.
      </p>

      <h3 style="font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0; color: var(--color-text);">Creatine’s Role: The Instant Recycler</h3>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Creatine exists as Phosphocreatine in your muscles and brain. When you do work—whether lifting a weight or thinking through a complex diagnosis—your body breaks down ATP into ADP (Adenosine Diphosphate). Creatine "donates" its phosphate group to turn that ADP back into ATP instantly.
      </p>

      <div style="background: rgba(243, 244, 246, 0.5); padding: 1.5rem; margin: 2rem 0; text-align: center; border-radius: 8px; font-family: monospace; font-size: 1.1rem; color: var(--color-text);">
        ADP + Phosphocreatine &rarr; ATP + Creatine
      </div>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        This prevents the "energetic lag" that occurs when the mitochondria have to ramp up production from scratch.
      </p>

      <div style="margin: 2rem 0; text-align: center;">
        <img src="/circular_energy_flow.png" alt="A minimalist infographic showing the Circular Energy Flow between NAD+ and Creatine" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
      </div>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Physician’s Note: A Personal Warning on Timing</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        In my own life, I have experimented extensively with this stack. When I have the timing right, the results are undeniable: sharper focus, reduced afternoon fatigue, and a noticeable "lift" in exercise recovery. However, as a physician, I have to give you a stern warning about NAD+ precursors (NMN/NR). <strong>Do not take NAD+ late in the day.</strong>
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        I learned this the hard way. I once took my NAD+ dose in the late afternoon, thinking it would help me push through some evening work. I didn't sleep a wink that night. My brain felt "electrically" awake—not a jittery caffeine feeling, but a deep, metabolic wakefulness that made sleep impossible.
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        NAD+ levels follow a strict Circadian Rhythm. They naturally peak in the morning. By taking a precursor late, you are essentially telling your "Master Biological Clock" that it is 8:00 AM when it’s actually 8:00 PM. This disrupts the SIRT1-mediated clock genes, throwing your entire sleep-wake cycle into chaos.
      </p>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Clinical Why: Who Is This For?</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        This combination is one of my core recommendations for patients over the age of 40.
      </p>

      <ul style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
        <li style="margin-bottom: 0.75rem;"><strong>Natural Decline:</strong> Both NAD+ and Creatine levels begin to decline as we age, leading to "age-related fatigue."</li>
        <li style="margin-bottom: 0.75rem;"><strong>Neuro-Protection:</strong> Creatine supports ATP recycling in the neurons of the prefrontal cortex (executive function), while NAD+ supports brain-wide mitochondrial health.</li>
        <li style="margin-bottom: 0.75rem;"><strong>Metabolic Resilience:</strong> This stack helps maintain insulin sensitivity and muscle mass—the two greatest markers for a long healthspan.</li>
      </ul>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">Dosing and Timing: The Physician’s Protocol</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        To avoid the "insomnia trap" while maximizing the synergy, follow this schedule:
      </p>

      <h3 style="font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0; color: var(--color-text);">1. The Morning Stack (The "Foundation")</h3>

      <ul style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
        <li style="margin-bottom: 0.75rem;"><strong>NAD+ Precursor (NMN or NR):</strong> 300–500 mg daily. Take this immediately upon waking. This aligns with your natural NAD+ peak.</li>
        <li style="margin-bottom: 0.75rem;"><strong>Creatine Monohydrate:</strong> 5g daily. You can take this at the same time as your NMN. I take both with my morning coffee. There is no pharmacological interaction between them.</li>
      </ul>

      <h3 style="font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem 0; color: var(--color-text);">2. The Optional "Push" (Post-Exercise)</h3>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        If you had an intense workout, you can move your Creatine dose to post-exercise to aid in muscle saturation, but the NAD+ should always remain a morning-only supplement.
      </p>

      <div style="margin: 2rem 0; text-align: center;">
        <img src="/morning_vitality_stack.png" alt="A morning sun-drenched kitchen counter with a coffee mug and supplements" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
      </div>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">Safety & Considerations</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        As always, we must act with clinical diligence:
      </p>

      <ul style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; padding-left: 2rem;">
        <li style="margin-bottom: 0.75rem;"><strong>Creatine & Kidney Labs:</strong> Creatine will elevate your Serum Creatinine levels. If you are getting blood work done, tell your doctor you are taking Creatine. It doesn't mean your kidneys are failing; it means you are supplementing!</li>
        <li style="margin-bottom: 0.75rem;"><strong>CKD Warning:</strong> Do not use Creatine if you have Chronic Kidney Disease (CKD) without consulting a nephrologist.</li>
        <li style="margin-bottom: 0.75rem;"><strong>NAD+ Flushing:</strong> Some people experience a mild "flush" or GI discomfort with high doses of NMN. Start at 250–300 mg and titrate up.</li>
        <li style="margin-bottom: 0.75rem;"><strong>Hydration:</strong> Creatine requires water to work. Aim for 2–3 liters of water per day to prevent cramping and support cellular hydration.</li>
      </ul>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">Final Physician’s Note</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        We are living in an era where we can finally "Architect" our cellular energy. Combining Creatine and NAD+ is like giving your body both a better engine and a better battery. If you are over 40 and feel like your "spark" is fading, this is the first place I would look. Just remember: Take it with the sun, not with the moon.
      </p>

      <div style="background: rgba(220, 38, 38, 0.1); border-left: 4px solid #DC2626; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
        <p style="margin: 0; font-weight: 700; color: #DC2626; font-size: 1.1rem; margin-bottom: 0.75rem;">Medical Disclaimer</p>
        <p style="margin: 0; font-size: 1rem; line-height: 1.6;">
          This information is for educational purposes and does not constitute medical advice. Consult your physician before starting any new supplement regimen, particularly if you have existing medical conditions or take prescription medications.
        </p>
      </div>
    \`
  },`;


// Replace Post 1 and 28 in our parsed array
posts = posts.map(p => {
  if (p.id === 1) return { ...p, text: newPost1 };
  if (p.id === 28) return { ...p, text: newPost28 };
  return p;
});

// We want to pull the fleshed-out thin blogs into smaller numerical positions 
// The fleshed out thick blogs from tonight are:
const thickIdsToMove = [30, 33, 36, 41, 44, 46, 49, 52, 63, 75, 80, 81, 82, 83];
const startId = 29;

let thickPostsToMove = posts.filter(p => thickIdsToMove.includes(p.id));
let otherPosts = posts.filter(p => !thickIdsToMove.includes(p.id));

let newIdCounter = startId;
thickPostsToMove.forEach(p => {
  p.newId = newIdCounter++;
});

// the other posts that are >= 29 natively must get higher IDs to accommodate
otherPosts.forEach(p => {
  if (p.id >= startId) {
    p.newId = newIdCounter++;
  } else {
    p.newId = p.id;
  }
});

let allPosts = [...otherPosts, ...thickPostsToMove];
// Sort them ascending by newId 
allPosts.sort((a, b) => a.newId - b.newId);

const newPostLines = allPosts.map(p => {
  // We must carefully replace ONLY the starting 'id: X,' 
  return p.text.replace(/id:\s*\d+,/, "id: " + p.newId + ",");
});

const finalCode = prefix + newPostLines.join("") + suffix;
fs.writeFileSync('src/data/posts.js', finalCode);
console.log("Successfully rebuilt posts array.");
