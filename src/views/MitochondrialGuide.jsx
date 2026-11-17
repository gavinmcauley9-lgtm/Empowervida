"use client";

import React from 'react';
import Link from 'next/link';
import RelatedPosts from '../components/RelatedPosts';

const evidence = [
  { label: 'Strongest practical foundation', title: 'Exercise and everyday health', body: 'Regular aerobic activity and resistance training support muscle health, metabolic function and physical capacity. Exercise can stimulate mitochondrial adaptations in skeletal muscle. The clinical benefits of activity are better established than those of most products marketed for “mitochondrial support”.' },
  { label: 'Useful in specific settings', title: 'Treat the underlying condition', body: 'A diagnosis matters. Nutrient deficiencies, medication effects, sleep disorders and cardiovascular, endocrine or neuromuscular conditions can all affect energy and function. Some mitochondrial disorders require specialist assessment and condition-specific care.' },
  { label: 'Promising, not proven for longevity', title: 'Supplements and experimental approaches', body: 'Creatine has established uses in strength and high-intensity exercise performance, but is not a proven anti-ageing treatment. CoQ10, NAD+ precursors, PQQ, urolithin A and senolytic compounds have differing levels of preliminary evidence; changes in biomarkers do not establish longer life or better health outcomes.' }
];

const sections = [
  { id: 'basics', label: 'How mitochondria work' },
  { id: 'ageing', label: 'What changes with age' },
  { id: 'evidence', label: 'What actually helps' },
  { id: 'supplements', label: 'The supplement question' },
  { id: 'practical', label: 'A practical starting point' },
  { id: 'references', label: 'Sources and further reading' }
];

export default function MitochondrialGuide() {
  const faq = [
    { q: 'What do mitochondria do?', a: 'Mitochondria are structures inside most human cells that help convert nutrients into usable energy, especially ATP. They also participate in cellular signalling, calcium handling and other processes.' },
    { q: 'Does feeling tired mean my mitochondria are failing?', a: 'No. Fatigue is common and has many possible causes. Persistent or unexplained symptoms deserve an appropriate clinical assessment rather than a mitochondrial diagnosis based on symptoms alone.' },
    { q: 'Can supplements reverse mitochondrial ageing?', a: 'No supplement has been shown to reverse mitochondrial ageing or extend human lifespan. Some compounds are being studied, and some have specific established uses, but results should not be generalised to healthy adults.' },
    { q: 'What is the best-supported way to support mitochondrial health?', a: 'Regular physical activity, including aerobic and resistance exercise, supports health and can improve mitochondrial function in muscle. Adequate nutrition, sleep and management of medical conditions are also important.' }
  ];
  return (
    <main className="mito-editorial">
      <style>{`
        .mito-editorial{--ink:#18352f;--muted:#53635e;--teal:#116e65;color:var(--ink);background:#fff}
        .mito-editorial *{box-sizing:border-box}
        .mito-editorial .hero{background:linear-gradient(105deg,rgba(7,29,29,.92),rgba(9,47,44,.77)),url('/mitochondrion_hero_cinematic_1764586685814.png') center/cover;min-height:520px;display:flex;align-items:flex-end;color:#fff;padding:9rem max(24px,calc((100vw - 1120px)/2)) 5rem}
        .mito-editorial .hero-inner{max-width:830px}
        .mito-editorial .eyebrow{text-transform:uppercase;letter-spacing:.16em;font-size:.79rem;font-weight:750;color:#a6e9df}
        .mito-editorial h1{font-size:clamp(2.6rem,6vw,5.1rem);line-height:1.07;letter-spacing:-.045em;margin:1rem 0 1.4rem;color:#fff}
        .mito-editorial .hero p{font-size:clamp(1.12rem,2vw,1.42rem);line-height:1.55;max-width:720px;color:#f0f7f4}
        .mito-editorial .shell{max-width:1120px;margin:auto;padding:3.8rem 24px 5rem;display:grid;grid-template-columns:230px minmax(0,1fr);gap:clamp(2rem,6vw,5.5rem)}
        .mito-editorial nav{position:sticky;top:115px;align-self:start;border-left:2px solid #dbe9e4;padding:0 0 0 1.2rem}
        .mito-editorial nav strong{font-size:.78rem;letter-spacing:.11em;text-transform:uppercase}
        .mito-editorial nav a{display:block;margin:1rem 0;color:#345b53;text-decoration:none;font-size:.9rem;line-height:1.4}
        .mito-editorial nav a:hover{text-decoration:underline}
        .mito-editorial article{max-width:760px;min-width:0;font-size:1.12rem;line-height:1.85}
        .mito-editorial article p{margin:0 0 1.5rem}
        .mito-editorial article h2{font-size:clamp(1.8rem,3.3vw,2.5rem);line-height:1.2;letter-spacing:-.03em;margin:3.3rem 0 1.2rem;scroll-margin-top:120px}
        .mito-editorial article h3{font-size:1.28rem;line-height:1.4;margin:2rem 0 .7rem}
        .mito-editorial .summary{background:#eef7f4;border-left:4px solid var(--teal);padding:1.5rem 1.8rem;border-radius:0 12px 12px 0;margin:0 0 3rem}
        .mito-editorial .summary strong{display:block;margin-bottom:.6rem}
        .mito-editorial .summary p{margin:0}
        .mito-editorial .science-figure{background:#10332f;border-radius:18px;color:#fff;padding:2rem;margin:2.7rem 0}
        .mito-editorial .science-figure h3{color:#fff;margin:0 0 .5rem}
        .mito-editorial .energy-flow{display:flex;align-items:center;gap:.65rem;flex-wrap:wrap;margin:1.5rem 0}
        .mito-editorial .energy-flow span{padding:.8rem 1rem;border:1px solid #7fb9ad;border-radius:9px;background:#1b4c45;font-weight:650;font-size:.94rem}
        .mito-editorial .energy-flow b{color:#b8eee3}
        .mito-editorial figcaption{font-size:.85rem;line-height:1.6;color:#d4e9e3}
        .mito-editorial .evidence-card{border-top:1px solid #d7e6df;padding:1.4rem 0}
        .mito-editorial .evidence-card small{color:#0d7165;font-weight:750;text-transform:uppercase;letter-spacing:.07em}
        .mito-editorial .evidence-card h3{margin:.4rem 0 .6rem}
        .mito-editorial .evidence-card p{margin:0}
        .mito-editorial .note{border:1px solid #c9ddd5;border-radius:12px;padding:1.5rem;margin:2rem 0;background:#fafdfb}
        .mito-editorial ol,.mito-editorial ul{padding-left:1.4rem;margin:1rem 0 2rem}
        .mito-editorial li{padding-left:.25rem;margin-bottom:.8rem}
        .mito-editorial a{color:#096f64;text-underline-offset:3px;overflow-wrap:anywhere}
        .mito-editorial .sources{font-size:.94rem;line-height:1.65}
        .mito-editorial details{border-bottom:1px solid #dce9e3;padding:1rem 0}
        .mito-editorial summary{cursor:pointer;font-weight:700}
        .mito-editorial details p{margin:1rem 0}
        @media(max-width:800px){.mito-editorial .shell{display:block;padding:2.5rem 20px 4rem}.mito-editorial nav{position:static;border-left:0;border-bottom:1px solid #dbe9e4;padding:0 0 1.5rem;margin-bottom:2rem}.mito-editorial nav a{display:inline-block;margin:.6rem 1rem .2rem 0}.mito-editorial .hero{min-height:440px;padding:8rem 22px 3.5rem}.mito-editorial article{font-size:1.04rem;line-height:1.8}.mito-editorial .science-figure{padding:1.4rem}}
      `}</style>
      <header className="hero"><div className="hero-inner">
        <span className="eyebrow">EmpowerVida | The Guides</span>
        <h1>Mitochondria: The Science of Cellular Energy</h1>
        <p>What these tiny structures actually do, what changes as we age, and which interventions have meaningful evidence behind them.</p>
        <p style={{fontSize:'.92rem',marginTop:'1.8rem'}}>A physician-authored guide · Evidence over hype</p>
      </div></header>
      <div className="shell">
        <nav aria-label="On this page"><strong>In this guide</strong>{sections.map(s=><a key={s.id} href={`#${s.id}`}>{s.label}</a>)}</nav>
        <article>
          <aside className="summary"><strong>In 30 seconds</strong><p>Mitochondria help your cells make usable energy. They also have roles beyond energy production. Exercise can improve mitochondrial adaptations in muscle, but fatigue alone does not diagnose mitochondrial dysfunction. Despite exciting laboratory research, no supplement stack has been shown to reverse human ageing.</p></aside>
          <p>Imagine a busy city that needs electricity around the clock. Every hospital, train and home depends on a reliable supply. Your cells face a similar challenge: they need a steady way to turn food into usable energy.</p>
          <p>Mitochondria are central to that process — and they are one of the most intriguing areas of modern health and ageing research. Here is the remarkable part: they respond to how we live. Human exercise studies show that skeletal muscle can increase its mitochondrial content with training, even later in life. That does not mean exercise reverses ageing, but it offers a tangible example of biological adaptability. Researchers are now exploring whether other approaches might help preserve cellular function as we age. The possibilities are exciting, even as we distinguish promising mechanisms from treatments shown to improve people's lives.</p>
          <h2 id="basics">What mitochondria actually do</h2>
          <p>Mitochondria are small structures inside most of our cells. They help convert energy from carbohydrates and fats into adenosine triphosphate (ATP), a molecule cells use to power many tasks. This process relies on a series of reactions, including the electron transport chain and oxidative phosphorylation.</p>
          <figure className="science-figure" aria-label="Simplified flow of cellular energy production">
            <h3>From food to usable energy</h3>
            <div className="energy-flow"><span>Nutrients + oxygen</span><b aria-hidden="true">→</b><span>Mitochondrial processes</span><b aria-hidden="true">→</b><span>ATP</span></div>
            <figcaption>A simplified conceptual illustration. The real process involves multiple metabolic pathways; not all ATP is produced in mitochondria.</figcaption>
          </figure>
          <p>ATP production is only part of the story. Mitochondria also contribute to calcium regulation, cell signalling and processes involved in cellular stress responses. They are dynamic: cells can change their number, shape and activity in response to different demands.</p>
          <section aria-labelledby="engine-room-explainer">
            <h2 id="engine-room-explainer">Inside the engine room: ATP and its supporting machinery</h2>
            <p>The engine-room metaphor is a useful way to understand cellular energy. Mitochondria help generate much of the ATP used by cells. The electron transport chain depends on several components, including coenzyme Q10, while nutrients such as B vitamins and magnesium contribute to normal energy metabolism. ATP is continually used and regenerated; it is not a reserve that can simply be topped up by swallowing an 'energy' supplement. That does not mean taking more of each nutrient will increase energy in someone who already has adequate levels.</p>
            <p>Creatine plays a different role: the phosphocreatine system helps regenerate ATP rapidly when demand rises. Its established benefits are mainly in certain exercise settings; whether supplementation meaningfully improves cognition or slows ageing in healthy adults remains uncertain. Acetyl-L-carnitine, NAC and urolithin A are also being studied for specific biological effects, but laboratory mechanisms and early studies are not proof of longer human life.</p>
            <div className="note"><strong>What matters clinically:</strong> Start with activity, adequate nutrition and assessment of persistent fatigue or suspected deficiency. Supplements should be considered for a defined reason, not assembled into a universal mitochondrial “stack”.</div>
          </section>
          <h2 id="ageing">What changes as we age?</h2>
          <p>In some tissues, ageing is associated with changes in mitochondrial function, quality control and the way cells respond to stress. Researchers study processes such as <strong>mitophagy</strong> (the selective breakdown of mitochondria through cellular recycling pathways) and <strong>mitochondrial biogenesis</strong> (the production and expansion of mitochondrial components). Both are parts of ongoing mitochondrial quality control, not simple on/off switches.</p>
          <p>These changes are not a single switch that explains all ageing. They vary across tissues and individuals, and they interact with inflammation, physical activity, disease and many other biological processes.</p>
          <div className="note"><strong>A crucial distinction:</strong> Being tired, experiencing brain fog or recovering slowly from exercise does not establish that your mitochondria are failing. These symptoms have many possible explanations, some of which need medical assessment.</div>
          <h2 id="evidence">What actually helps mitochondrial health?</h2>
          <p>When we move from laboratory mechanisms to practical decisions, the strength of the evidence matters more than how exciting a theory sounds.</p>
          {evidence.map(item=><section className="evidence-card" key={item.title}><small>{item.label}</small><h3>{item.title}</h3><p>{item.body}</p></section>)}
          <h2 id="supplements">The supplement question: from good science to real-world benefit</h2>
          <p>Here is where mitochondrial science becomes especially interesting. A compound can have a well-understood role in human physiology, yet supplementing it may not deliver the outcome we hope for. We need to ask three different questions: <strong>Does the mechanism make sense?</strong> <strong>What have human studies actually found?</strong> And <strong>what remains unproven?</strong></p>
          <h3>Creatine: an established energy system, an open question for brain health</h3>
          <p><strong>The physiology:</strong> Creatine and phosphocreatine help cells rapidly regenerate ATP from ADP when energy demand rises. This is established biochemistry in muscle and brain, not a speculative theory.</p>
          <p><strong>What human studies show:</strong> Creatine supplementation has strong evidence for improving certain strength and high-intensity exercise outcomes. Cognitive trials have reported some encouraging results, including in memory-related measures, but studies are relatively small and heterogeneous; the findings do not establish a reliable benefit for everyone.</p>
          <p><strong>What remains open:</strong> Whether creatine supplementation meaningfully preserves cognition with ageing, prevents Alzheimer's disease or slows neurodegeneration. A plausible energy mechanism is a reason to investigate these possibilities, not proof that they occur.</p>
          <h3>Coenzyme Q10: essential to electron transport, but context matters</h3>
          <p><strong>The physiology:</strong> CoQ10 carries electrons within the mitochondrial respiratory chain. Its role in ATP production is well established.</p>
          <p><strong>What human studies show:</strong> Clinical trials have explored CoQ10 in specific conditions, including heart failure, with some encouraging findings but varying certainty across outcomes and studies. That evidence should not be transferred automatically to healthy adults.</p>
          <p><strong>What remains open:</strong> Whether routine supplementation improves everyday energy, preserves mitochondrial function or extends healthy lifespan in people without a defined indication. CoQ10 may reduce warfarin's anticoagulant effect; people taking warfarin should seek clinical advice before use.</p>
          <h3>NAD+ precursors: a measurable biological effect, an uncertain health benefit</h3>
          <p><strong>The physiology:</strong> NAD+ is central to energy metabolism and many cellular reactions. Nicotinamide riboside (NR) and nicotinamide mononucleotide (NMN) are precursors involved in NAD metabolism.</p>
          <p><strong>What human studies show:</strong> Trials consistently demonstrate that oral precursors can raise measured NAD-related metabolites. A 2026 systematic review found that results for functional, metabolic and other health outcomes were mixed or sometimes null.</p>
          <p><strong>What remains open:</strong> Whether raising those biomarkers improves strength, cognition, disease risk or longevity. A biochemical response is real; the clinical consequences still need to be established.</p>
          <h3>Urolithin A: intriguing signals from human muscle trials</h3>
          <p><strong>The physiology:</strong> Urolithin A is a metabolite that some gut microbes produce from dietary compounds. Laboratory and animal research suggests effects on mitophagy, the recycling of mitochondria; the extent to which supplementation reproduces those effects in human tissues remains under investigation.</p>
          <p><strong>What human studies show:</strong> In a small randomised trial involving older adults, some muscle-endurance measures and blood biomarkers improved. However, the trial did not demonstrate significant improvements over placebo in its primary measures of six-minute walking distance or maximal muscle ATP production. These findings are promising, but narrower than claims that it 'rejuvenates mitochondria'.</p>
          <p><strong>What remains open:</strong> Whether these early signals translate into sustained improvements in mobility, independence or healthy lifespan. Larger, longer trials are needed.</p>
          <h3>PQQ, fisetin and other experimental compounds</h3>
          <p>There are scientifically interesting mechanisms and early findings here too, but the human evidence is generally less developed and differs considerably between compounds. We should not group them together as proven mitochondrial enhancers, senolytics or anti-ageing treatments.</p>
          <div className="note"><strong>The EmpowerVida distinction:</strong> Established physiology is not the same as proven supplementation benefit. Equally, a lack of long-term outcomes data does not mean a promising mechanism is worthless. We can celebrate the research while being precise about which benefits have — and have not — been demonstrated.</div>
          <div className="note"><strong>Why there is no universal supplement stack here:</strong> The evidence does not justify a single multi-product protocol for healthy adults. Supplements may carry adverse effects, interactions, quality issues and costs. Any use should have a clear purpose and be considered in the context of individual health.</div>
          <h2 id="practical">A sensible starting point</h2>
          <ol><li><strong>Move regularly.</strong> Build aerobic fitness and strength gradually, adapting activity to your abilities and medical circumstances.</li><li><strong>Eat adequately.</strong> A balanced dietary pattern and sufficient energy and protein are more important than an elaborate supplement routine.</li><li><strong>Protect sleep and recovery.</strong> Persistent poor sleep deserves attention; a wearable sleep score is not a diagnosis.</li><li><strong>Investigate persistent symptoms.</strong> Fatigue, weakness or exercise intolerance can have treatable causes. Seek assessment rather than assuming “mitochondrial burnout”.</li><li><strong>Be sceptical of certainty.</strong> Ask whether a claim comes from cells, animals, biomarkers or well-designed human trials measuring outcomes that matter.</li></ol>
          <h2 id="references">Sources and further reading</h2>
          <p>For accessible evidence summaries and primary research starting points:</p>
          <ul className="sources"><li><a href="https://www.nia.nih.gov/health/exercise-physical-activity" target="_blank" rel="noopener noreferrer">US National Institute on Aging — Exercise and Physical Activity</a></li><li><a href="https://ods.od.nih.gov/factsheets/ExerciseandAthleticPerformance-HealthProfessional/" target="_blank" rel="noopener noreferrer">NIH Office of Dietary Supplements — Exercise and Athletic Performance (creatine evidence)</a></li><li><a href="https://www.nccih.nih.gov/health/coenzyme-q10" target="_blank" rel="noopener noreferrer">NIH NCCIH — Coenzyme Q10</a></li><li><a href="https://pubmed.ncbi.nlm.nih.gov/39390310/" target="_blank" rel="noopener noreferrer">Mølmen et al. (2025) — Systematic review of exercise training and mitochondrial growth in human muscle</a></li><li><a href="https://pubmed.ncbi.nlm.nih.gov/40459444/" target="_blank" rel="noopener noreferrer">Systematic review (2025) — Exercise and mitochondrial biogenesis markers in skeletal muscle</a></li><li><a href="https://pubmed.ncbi.nlm.nih.gov/31278280/" target="_blank" rel="noopener noreferrer">Conze et al. (2019) — Randomised trial: nicotinamide riboside increased blood NAD+ biomarkers</a></li><li><a href="https://pubmed.ncbi.nlm.nih.gov/29992272/" target="_blank" rel="noopener noreferrer">Dollerup et al. (2018) — Randomised trial of nicotinamide riboside and insulin sensitivity</a></li><li><a href="https://pubmed.ncbi.nlm.nih.gov/39070254/" target="_blank" rel="noopener noreferrer">2024 systematic review and meta-analysis — Creatine and cognitive function in adults</a></li><li><a href="https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2788244" target="_blank" rel="noopener noreferrer">Liu et al. (2022) — Randomised urolithin A trial in older adults</a></li><li><a href="https://pubmed.ncbi.nlm.nih.gov/41655607/" target="_blank" rel="noopener noreferrer">2026 systematic review — NAD+ supplementation, biomarkers and clinical outcomes</a></li></ul>
          <h2>Questions readers often ask</h2>
          {faq.map(item=><details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}
          <p style={{fontSize:'.88rem',color:'#53635e',marginTop:'3rem',borderTop:'1px solid #dce9e3',paddingTop:'1.5rem'}}><strong>Medical note:</strong> This guide is for general education, not personal diagnosis or treatment. Research evolves, and individual medical decisions require appropriate clinical advice.</p>
          <RelatedPosts currentCategory="longevity" />
          <p style={{fontSize:'.95rem',marginTop:'2rem'}}><Link href="/blog">Explore more in The Journal</Link></p>
        </article>
      </div>
    </main>
  );
}
