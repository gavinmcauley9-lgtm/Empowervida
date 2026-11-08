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
          <p>Mitochondria are central to that process. They are fascinating, essential and increasingly studied in ageing research. But understanding them means separating what scientists can measure inside a cell from what has actually been shown to improve people's lives.</p>
          <h2 id="basics">What mitochondria actually do</h2>
          <p>Mitochondria are small structures inside most of our cells. They help convert energy from carbohydrates and fats into adenosine triphosphate (ATP), a molecule cells use to power many tasks. This process relies on a series of reactions, including the electron transport chain and oxidative phosphorylation.</p>
          <figure className="science-figure" aria-label="Simplified flow of cellular energy production">
            <h3>From food to usable energy</h3>
            <div className="energy-flow"><span>Nutrients + oxygen</span><b aria-hidden="true">→</b><span>Mitochondrial processes</span><b aria-hidden="true">→</b><span>ATP</span></div>
            <figcaption>A simplified conceptual illustration. The real process involves multiple metabolic pathways; not all ATP is produced in mitochondria.</figcaption>
          </figure>
          <p>ATP production is only part of the story. Mitochondria also contribute to calcium regulation, cell signalling and processes involved in cellular stress responses. They are dynamic: cells can change their number, shape and activity in response to different demands.</p>
          <h2 id="ageing">What changes as we age?</h2>
          <p>In some tissues, ageing is associated with changes in mitochondrial function, quality control and the way cells respond to stress. Researchers study processes such as <strong>mitophagy</strong> (the removal of damaged mitochondria) and <strong>mitochondrial biogenesis</strong> (the formation of new mitochondrial material).</p>
          <p>These changes are not a single switch that explains all ageing. They vary across tissues and individuals, and they interact with inflammation, physical activity, disease and many other biological processes.</p>
          <div className="note"><strong>A crucial distinction:</strong> Being tired, experiencing brain fog or recovering slowly from exercise does not establish that your mitochondria are failing. These symptoms have many possible explanations, some of which need medical assessment.</div>
          <h2 id="evidence">What actually helps mitochondrial health?</h2>
          <p>When we move from laboratory mechanisms to practical decisions, the strength of the evidence matters more than how exciting a theory sounds.</p>
          {evidence.map(item=><section className="evidence-card" key={item.title}><small>{item.label}</small><h3>{item.title}</h3><p>{item.body}</p></section>)}
          <h2 id="supplements">What about creatine, CoQ10 and NAD+?</h2>
          <p>These compounds often appear together in online “mitochondrial protocols”, but they should not be treated as interchangeable or as a proven combination.</p>
          <h3>Creatine</h3><p>Creatine helps rapidly regenerate ATP from ADP in tissues with high energy demands, particularly muscle. Supplementation has good evidence for certain exercise-performance outcomes. Research into cognition and ageing is interesting, but creatine is not an established treatment to prevent dementia or extend lifespan.</p>
          <h3>Coenzyme Q10 (CoQ10)</h3><p>CoQ10 participates in mitochondrial electron transport. That biological role does not automatically mean supplements improve energy in otherwise healthy people. Clinical evidence varies by condition and outcome; medication interactions and individual circumstances matter.</p>
          <h3>NAD+ precursors (NR and NMN)</h3><p>Small human studies suggest some precursors can change NAD-related biomarkers. Whether this reliably translates into better cognition, physical function or longer life remains uncertain. A biomarker increase is not the same as a clinical benefit.</p>
          <h3>PQQ, urolithin A, fisetin and other emerging compounds</h3><p>Mechanistic and early human research may justify further trials, but claims of “rebuilding mitochondria”, clearing senescent cells or reversing ageing in people are premature. Product-specific absorption claims and dosing protocols should not be presented as established treatment.</p>
          <div className="note"><strong>Why there is no recommended supplement stack here:</strong> The evidence does not justify a universal multi-product protocol for healthy adults. Supplements can have adverse effects, interactions, quality issues and costs. Discuss individual indications with a qualified clinician.</div>
          <h2 id="practical">A sensible starting point</h2>
          <ol><li><strong>Move regularly.</strong> Build aerobic fitness and strength gradually, adapting activity to your abilities and medical circumstances.</li><li><strong>Eat adequately.</strong> A balanced dietary pattern and sufficient energy and protein are more important than an elaborate supplement routine.</li><li><strong>Protect sleep and recovery.</strong> Persistent poor sleep deserves attention; a wearable sleep score is not a diagnosis.</li><li><strong>Investigate persistent symptoms.</strong> Fatigue, weakness or exercise intolerance can have treatable causes. Seek assessment rather than assuming “mitochondrial burnout”.</li><li><strong>Be sceptical of certainty.</strong> Ask whether a claim comes from cells, animals, biomarkers or well-designed human trials measuring outcomes that matter.</li></ol>
          <h2 id="references">Sources and further reading</h2>
          <p>For accessible evidence summaries and primary research starting points:</p>
          <ul className="sources"><li><a href="https://www.nia.nih.gov/health/exercise-physical-activity" target="_blank" rel="noopener noreferrer">US National Institute on Aging — Exercise and Physical Activity</a></li><li><a href="https://ods.od.nih.gov/factsheets/ExerciseandAthleticPerformance-HealthProfessional/" target="_blank" rel="noopener noreferrer">NIH Office of Dietary Supplements — Exercise and Athletic Performance (creatine evidence)</a></li><li><a href="https://www.nccih.nih.gov/health/coenzyme-q10" target="_blank" rel="noopener noreferrer">NIH NCCIH — Coenzyme Q10</a></li><li><a href="https://pubmed.ncbi.nlm.nih.gov/39390310/" target="_blank" rel="noopener noreferrer">Mølmen et al. (2025) — Systematic review of exercise training and mitochondrial growth in human muscle</a></li><li><a href="https://pubmed.ncbi.nlm.nih.gov/31278280/" target="_blank" rel="noopener noreferrer">Conze et al. (2019) — Randomised trial: nicotinamide riboside increased blood NAD+ biomarkers</a></li><li><a href="https://pubmed.ncbi.nlm.nih.gov/29992272/" target="_blank" rel="noopener noreferrer">Dollerup et al. (2018) — Randomised trial of nicotinamide riboside and insulin sensitivity</a></li></ul>
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
