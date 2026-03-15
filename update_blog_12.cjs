const fs = require('fs');

let fileContent = fs.readFileSync('src/data/posts.js', 'utf8');

const updatedPost = `  {
    id: 12,
    title: 'The Sun Phobia Trap: Why Your SPF is Costing You Your Mood',
    category: 'neurolongevity',
    image: '/spf_blocking_synthesis.png',
    excerpt: 'We have been conditioned to fear the sun. But aggressive SPF use is blocking the synthesis of the most critical neuro-hormone in the human body. A physician explains the connection between Vitamin D deficiency and seasonal depression.',
    date: 'Mar 15, 2026',
    cta: {
      text: "View The Neurolongevity Protocol",
      link: "/protocol#neurolongevity-stack"
    },
    references: [
      { text: "Holick, M. F. (2007). Vitamin D deficiency. New England Journal of Medicine.", url: "https://pubmed.ncbi.nlm.nih.gov/17634462/" },
      { text: "Eyles, D. W., et al. (2013). Vitamin D in fetal brain development. Seminars in cell & developmental biology.", url: "https://pubmed.ncbi.nlm.nih.gov/23274737/" },
      { text: "Pfotenhauer, K. M., & Shubrook, J. H. (2017). Vitamin D deficiency, its role in health and disease, and current supplementation recommendations. The Journal of the American Osteopathic Association.", url: "https://pubmed.ncbi.nlm.nih.gov/28459478/" },
      { text: "Anglin, R. E., et al. (2013). Vitamin D deficiency and depression in adults: systematic review and meta-analysis. The British Journal of Psychiatry.", url: "https://pubmed.ncbi.nlm.nih.gov/23377209/" }
    ],
    content: \`
      <p><strong>By Dr. Gavin McAuley | EMPOWERVIDA</strong></p>
      
      <div style="background: rgba(32, 178, 170, 0.1); border-left: 4px solid #20B2AA; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
        <p style="margin: 0; font-weight: 700; color: #20B2AA; font-size: 1.1rem; margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em;">TL;DR</p>
        <p style="margin: 0; font-size: 1.05rem; line-height: 1.6;">Vitamin D is not just a vitamin for bone health; it is a master neuro-steroid that governs our immune system and mood. In our modern quest to avoid skin cancer, aggressive use of SPF 50 blocks 98% of the UVB rays required to synthesize Vitamin D. The consequence? A silent, global epidemic of Vitamin D deficiency that manifests as chronic winter fatigue, compromised immunity, and depression. Discover the "Architect's Protocol" for achieving adequate D3 levels without compromising your skin health.</p>
      </div>

      <div style="margin: 2rem 0; text-align: center;">
        <img src="/spf_blocking_synthesis.png" alt="Clinical diagram showing SPF 50 blocking the conversion of 7-DHC to Vitamin D3" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
      </div>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Physician’s Perspective: The "Normal" Patient</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Last November, a 34-year-old software engineer sat in my clinic. She came in complaining of overwhelming fatigue, describing a heavy "brain fog" that rolled in every afternoon, and a dark, lethargic mood that she couldn’t shake. She thought she was clinically depressed. She was already considering asking for an SSRI.
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        I ordered a complete blood panel. When her results came back, the answer was staring us right in the face. Her Vitamin D levels were at a shockingly low 14 ng/mL (optimal is 50-80 ng/mL). She wasn't depressed in the traditional psychiatric sense. She was biologically starving for sunlight. 
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        She was a victim of the modern "Sun Phobia." We apply SPF 50 every day, work indoors from 9 to 5, and then wonder why our biology collapses.
      </p>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Misunderstood Neuro-Steroid</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Calling it "Vitamin" D is actually a historical mistake. It is not a vitamin (a compound you must get from food). It is a highly potent <strong>secosteroid hormone</strong>.
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        We naturally synthesize this hormone in our skin when a cholesterol derivative (7-DHC) is exposed to ultraviolet B (UVB) radiation from the sun. The liver and kidneys then convert it into its final, active form (Calcitriol), where it acts as a molecular "skeleton key."
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Active Vitamin D unlocks over 1,000 different genes in the human genome. And crucially, many of those genes are located directly in the brain.
      </p>

      <div style="margin: 2rem 0; text-align: center;">
        <img src="/vitamin_d_brain_receptors.png" alt="3D render of a glowing human brain showing Vitamin D receptors in the hypothalamus and hippocampus" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
      </div>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        We have discovered dense clusters of Vitamin D Receptors (VDRs) in the hypothalamus, the hippocampus, and the substantia nigra. These are the exact brain regions responsible for regulating our mood, sleep-wake cycles, and dopamine production. 
      </p>
      
      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        When you aggressive block UVB rays with daily SPF, you shut down the production of the very neuro-steroid your brain needs to maintain its emotional equilibrium.
      </p>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Immune Shield</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Beyond mood, Vitamin D is the primary commander of the immune system. 
      </p>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        Your white blood cells (macrophages) rely on Vitamin D to produce "cathelicidins"—tiny endogenous antibiotics that tear apart invading bacteria and viruses. There is a reason cold and flu season peaks in January and February. It is not just the cold air; it is the fact that the entire population in the Northern Hemisphere has collectively plummeted into Vitamin D deficiency due to the angle of the winter sun.
      </p>

      <div style="margin: 2rem 0; text-align: center;">
        <img src="/immunity_shield_d3.png" alt="3D render of a white blood cell with a golden D3 shield actively defending against pathogens" style="max-width: 100%; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />
      </div>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        <em><a href="/blog/33" style="color: #20B2AA; text-decoration: none; border-bottom: 1px solid #20B2AA;">Read next: Why Your Vitamin D is Useless Without Magnesium &rarr;</a></em>
      </p>

      <h2 style="font-size: 2rem; font-weight: 700; margin: 3rem 0 1.5rem 0; color: var(--color-text);">The Architect's Protocol: The 3-Step Solution</h2>

      <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem;">
        We must respect the danger of excessive UV radiation and skin cancer. But we cannot continue to live in total biological darkness. Here is the clinical protocol to restore your master neuro-hormone:
      </p>

      <div style="background: rgba(32, 178, 170, 0.05); border: 1px solid rgba(32, 178, 170, 0.2); border-radius: 8px; padding: 2rem; margin: 3rem 0;">
        <h3 style="font-size: 1.5rem; font-weight: 700; margin-top: 0; margin-bottom: 1.5rem; color: #20B2AA; border-bottom: 2px solid #20B2AA; padding-bottom: 0.5rem; display: inline-block;">THE ARCHITECT'S PROTOCOL</h3>
        
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1rem;"><strong>1. Test, Don't Guess.</strong> Over-the-counter supplementation is useless if you don't know your baseline. Ask your doctor for a <strong>25-OH Vitamin D Blood Test</strong>. Your target optimization zone is between 50 ng/mL and 80 ng/mL.</p>
        
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1rem;"><strong>2. The D3/K2 Synergy.</strong> If you are supplementing in the winter, you must take <strong>Vitamin D3</strong> (the active form), not D2. Crucially, you must pair it with <strong>Vitamin K2 (MK-7)</strong>. High dose D3 increases calcium absorption; K2 acts as the traffic cop, ensuring that calcium goes into your bones, not your arteries.</p>
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; padding-left: 1.5rem; border-left: 3px solid #FF5F00;"><em><a href="/shop" style="color: #FF5F00; text-decoration: none; font-weight: 600;">View our Clinical-Grade D3/K2 Formula Here &rarr;</a></em></p>
        
        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 0;"><strong>3. The Magnesium Co-Factor.</strong> Your liver and kidneys require heavy amounts of Magnesium as a cofactor to activate the Vitamin D you swallow. If you are magnesium deficient (and 50% of people are), your Vitamin D supplement will remain inactive. <br/><br/><em><a href="/blog/33" style="color: #20B2AA; text-decoration: none; font-weight: 600;">Read our complete guide to Magnesium here &rarr;</a></em></p>
      </div>

      <div style="background: rgba(220, 38, 38, 0.1); border-left: 4px solid #DC2626; padding: 1.5rem; margin: 2rem 0; border-radius: 8px;">
        <p style="margin: 0; font-weight: 700; color: #DC2626; font-size: 1.1rem; margin-bottom: 0.75rem;">Medical Disclaimer</p>
        <p style="margin: 0; font-size: 1rem; line-height: 1.6;">
          This information is for educational purposes and does not constitute medical advice. High-dose Vitamin D supplementation can be toxic if not monitored. Always consult your physician and get your blood levels tested before initiating a high-dose replenishment protocol.
        </p>
      </div>
    \`
  }`;

// Replace post 12 first
const startPost12 = fileContent.indexOf("  {\n    id: 12,");
if (startPost12 === -1) throw new Error("Could not find post 12");
const endPost12 = fileContent.search(/  \},\n  \{\n    id: 13,/);
if (endPost12 === -1) throw new Error("Could not find end of post 12");
fileContent = fileContent.substring(0, startPost12) + updatedPost + fileContent.substring(endPost12 + 4);

// Delete post 17
const startPost17 = fileContent.indexOf("  {\n    id: 17,");
if (startPost17 !== -1) {
    const endPost17 = fileContent.search(/  \},\n  \{\n    id: 18,/);
    if (endPost17 !== -1) {
        fileContent = fileContent.substring(0, startPost17) + fileContent.substring(endPost17 + 4);
    }
}

fs.writeFileSync('src/data/posts.js', fileContent);
console.log('Successfully updated Blog Post 12 and deleted duplicate 17!');
