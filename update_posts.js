const fs = require('fs');
let code = fs.readFileSync('src/data/posts.js', 'utf8');

// Replace post 1
const newPost1 = `  {
    id: 1,
    title: 'From Fog to Flow: The Science of the Starving Neuron',
    category: 'neurolongevity',
    image: '/neuron_starving_nourished.png',
    excerpt: 'Cognitive decline and "brain fog" are often symptoms of cerebral bioenergetic failure. When the brain becomes insulin resistant, it can no longer uptake glucose, leaving neurons to starve. A physician explains how to reverse this.',
    date: 'Dec 01, 2025',
    cta: {
      text: "View The Neurolongevity Protocol",
      link: "/protocol"
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
        <img src="/fuel_gauge_ketones.png" alt="fuel gauge showing glucose in red and ketones in green" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
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
  }`;

// Use regex to replace the first post object
code = code.replace(/  \{\n    id: 1,[\s\S]*? \},/, newPost1 + ',');
fs.writeFileSync('src/data/posts.js', code);
console.log("Post 1 replaced");

// Now let's handle the reordering.
// The user wants fleshed out thin blogs from 28 onwards to just be near 29.
// Our list of fleshed out blogs from tonight: 75, 63, 52, 49, 46, 44, 41, 36, 33, 30.
// We also have 83, 82, 81, 80 which are long. User said "all the blogs from 28 onwards are place holders ... with the exception of those thin blogs that we worked on tonight. COuld you kindly move these newly 'flesh edout blogs from thei higher numerical postion to close to 29 in the order ?"
// We will assign them IDs: 29, 30, 31, 32... 
// And we push the existing ones with those IDs to higher IDs (like shifting them up or moving the fleshed out ones down the list).
