"use client";

import React from 'react';

const phases = [
  {
    number: '01', eyebrow: 'THE FOUNDATION', title: 'Build the rhythm',
    intro: 'Before chasing the latest longevity intervention, start with the habits that have the strongest evidence behind them.',
    items: [
      ['Daylight', 'Spend time outdoors after waking when practical. Morning light can help synchronise your body clock; the timing and effect vary.'],
      ['Sleep', 'Aim for consistent, sufficient sleep. Most adults need around seven to nine hours, although individual needs differ.'],
      ['Movement', 'Build towards at least 150 minutes of moderate activity each week, alongside strength training. Start at a level that suits you.']
    ],
    note: 'Light detected by specialised retinal cells helps the brain coordinate circadian rhythms. It does not set a universal 16-hour sleep timer.',
    image: '/protocol_cortisol_curve.png',
    alt: 'Conceptual illustration of daily cortisol and melatonin patterns; actual timing varies between people',
    caption: 'Illustrative hormone patterns, not a timetable for every individual.'
  },
  {
    number: '02', eyebrow: 'METABOLIC HEALTH', title: 'Look after the fuel system',
    intro: 'Your metabolic health is shaped by far more than a single glucose reading. The opportunity lies in sustainable habits, not perfect-looking graphs.',
    items: [
      ['Food quality', 'Prioritise fibre-rich foods, adequate protein and an eating pattern you can maintain.'],
      ['Glucose and insulin', 'Understand your personal risk factors. HbA1c or glucose testing may be useful when clinically indicated; normal rises after meals are expected.'],
      ['Daily habits', 'Regular activity, sleep and weight management where appropriate can improve insulin sensitivity. Fasting is optional, not a requirement.']
    ],
    note: 'Insulin resistance is a complex process involving muscle, liver, adipose tissue and pancreatic function. It is not established that every glucose spike causes brain insulin resistance or dementia.',
    image: '/protocol_glucose_curve.png',
    alt: 'Conceptual glucose curves contrasting different patterns of glucose variation',
    caption: 'A conceptual comparison only. A perfectly flat glucose trace is not a clinical goal.'
  },
  {
    number: '03', eyebrow: 'PERSONALISED OPTIONS', title: 'Be curious. Be selective.',
    intro: 'Once the foundations are in place, targeted testing or supplements may be worth discussing. More interventions do not automatically mean better health.',
    items: [
      ['Creatine', 'Well supported for certain exercise outcomes. Cognitive benefits are being studied, but it is not an established dementia-prevention treatment.'],
      ['Magnesium', 'Essential to normal physiology. Supplements are most useful when intake is inadequate or there is a specific clinical indication.'],
      ['Better questions', 'Consider what a test or intervention would change, how strong the evidence is and whether there are downsides.']
    ],
    note: 'Creatine helps regenerate ATP through the phosphocreatine system. That biochemical mechanism alone does not prove a clinical benefit for brain ageing.',
    image: '/protocol_creatine.png',
    alt: 'Illustration of the creatine molecule',
    caption: 'Mechanistic promise is interesting; meaningful human outcomes remain the test.'
  }
];

export default function EmpowerProtocol() {
  return (
    <main className="ev-protocol">
      <style>{`
        .ev-protocol { --ink:#182a2c; --teal:#208c86; --cream:#faf8f3; color:var(--ink); background:var(--cream); font-family:inherit; }
        .ev-protocol * { box-sizing:border-box; }
        .ev-protocol .hero { position:relative; min-height:560px; display:flex; align-items:center; overflow:hidden; isolation:isolate; background:#172b2c; color:white; }
        .ev-protocol .hero::before { content:""; position:absolute; inset:0; z-index:-2; background:url('/dna_bg_user.jpg') center / cover no-repeat; opacity:.94; }
        .ev-protocol .hero::after { content:""; position:absolute; inset:0; z-index:-1; background:linear-gradient(90deg,rgba(10,29,32,.68),rgba(10,29,32,.40) 58%,rgba(10,29,32,.22)); }
        .ev-protocol .hero-inner { width:min(1080px,100%); margin:auto; padding:72px 36px; }
        .ev-protocol .eyebrow { display:block; font-size:.78rem; font-weight:750; letter-spacing:.16em; text-transform:uppercase; color:#70d3c6; margin-bottom:18px; }
        .ev-protocol .hero h1 { color:#ffffff !important; text-shadow:0 2px 18px rgba(0,0,0,.35); font-size:clamp(2.7rem,6vw,5.2rem); line-height:1.04; letter-spacing:-.045em; max-width:780px; margin:0 0 22px; font-weight:760; }
        .ev-protocol .hero-lead { font-size:clamp(1.12rem,2.2vw,1.4rem); line-height:1.55; max-width:620px; margin:0; color:#f2f5f1; }
        .ev-protocol .hero-kicker { font-size:1rem; color:#c8e9df; margin:24px 0 0; }
        .ev-protocol .intro { padding:62px 24px 50px; text-align:center; }
        .ev-protocol .intro-inner { max-width:760px; margin:auto; }
        .ev-protocol h2 { font-size:clamp(1.9rem,4vw,2.8rem); line-height:1.14; letter-spacing:-.035em; margin:0 0 16px; }
        .ev-protocol .intro p,.ev-protocol .closing p { font-size:1.08rem; line-height:1.65; color:#526261; margin:0; }
        .ev-protocol .phase { padding:56px 24px; border-top:1px solid #e6e8e1; }
        .ev-protocol .phase:nth-of-type(even) { background:#fff; }
        .ev-protocol .phase-inner { max-width:1080px; margin:auto; display:grid; grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr); gap:52px; align-items:center; }
        .ev-protocol .phase-label { color:var(--teal); letter-spacing:.14em; font-size:.8rem; font-weight:800; margin-bottom:12px; }
        .ev-protocol h3 { font-size:clamp(1.9rem,3.5vw,2.65rem); line-height:1.14; letter-spacing:-.035em; margin:0 0 16px; }
        .ev-protocol .phase-intro { font-size:1.08rem; line-height:1.65; color:#475958; margin:0 0 20px; }
        .ev-protocol .points { padding:0; margin:0; list-style:none; }
        .ev-protocol .points li { padding:12px 0; border-top:1px solid #e9eae4; font-size:1rem; line-height:1.58; }
        .ev-protocol .points strong { color:#173b38; }
        .ev-protocol .science-note { margin-top:20px; padding:16px 18px; border-left:3px solid var(--teal); background:#eef5f0; line-height:1.55; font-size:.94rem; color:#39534d; }
        .ev-protocol figure { margin:0; min-width:0; }
        .ev-protocol figure img { width:100%; height:auto; max-height:360px; object-fit:contain; display:block; border-radius:12px; }
        .ev-protocol figcaption { text-align:center; color:#64726e; font-size:.83rem; line-height:1.45; margin-top:12px; }
        .ev-protocol .closing { padding:64px 24px 72px; text-align:center; background:#eaf1ea; }
        .ev-protocol .closing-inner { max-width:720px; margin:auto; }
        .ev-protocol .closing a { display:inline-block; margin-top:26px; background:#173e3b; color:#fff; padding:13px 23px; border-radius:6px; font-weight:700; text-decoration:none; }
        .ev-protocol .closing a:hover { background:#25645d; }
        .ev-protocol .disclaimer { margin-top:22px!important; font-size:.86rem!important; }
        @media(max-width:700px) {
          .ev-protocol .hero { min-height:0; }
          .ev-protocol .hero::after { background:linear-gradient(90deg,rgba(10,29,32,.70),rgba(10,29,32,.46)); }
          .ev-protocol .hero-inner { padding:54px 22px 60px; }
          .ev-protocol .eyebrow { margin-bottom:12px; }
          .ev-protocol h1 { font-size:clamp(2.35rem,10vw,3.6rem); }
          .ev-protocol .intro { padding:42px 22px 36px; }
          .ev-protocol .phase { padding:38px 22px; }
          .ev-protocol .phase-inner { grid-template-columns:minmax(0,1fr); gap:22px; }
          .ev-protocol .phase-intro { margin-bottom:14px; }
          .ev-protocol .points li { padding:10px 0; }
          .ev-protocol .science-note { margin-top:16px; }
          .ev-protocol figure img { max-height:260px; }
          .ev-protocol .closing { padding:45px 22px 52px; }
        }
        @media(prefers-reduced-motion:reduce) { .ev-protocol * { scroll-behavior:auto!important; } }
      `}</style>

      <header className="hero">
        <div className="hero-inner">
          <span className="eyebrow">EMPOWERVIDA / A GUIDE TO HEALTHIER LIVING</span>
          <h1>The science of living better.</h1>
          <p className="hero-lead">A more hopeful approach to longevity begins with what we can change — and the curiosity to distinguish promising science from proven benefits.</p>
          <p className="hero-kicker">Three foundations. One healthier direction.</p>
        </div>
      </header>

      <section className="intro">
        <div className="intro-inner">
          <span className="eyebrow" style={{color:'#208c86'}}>THE HIERARCHY OF HEALTH</span>
          <h2>Build the foundations. Then explore what comes next.</h2>
          <p>There is no single protocol for a longer, healthier life. But there is a sensible order to the questions we ask: how we sleep and move, how we support metabolic health, and where individualised options might help. Here is a practical framework, not a prescription.</p>
        </div>
      </section>

      {phases.map((phase) => (
        <section className="phase" key={phase.number}>
          <div className="phase-inner">
            <div>
              <div className="phase-label">PHASE {phase.number} / {phase.eyebrow}</div>
              <h3>{phase.title}</h3>
              <p className="phase-intro">{phase.intro}</p>
              <ul className="points">
                {phase.items.map(([label, detail]) => (
                  <li key={label}><strong>{label}.</strong> {detail}</li>
                ))}
              </ul>
              <div className="science-note"><strong>Behind the science:</strong> {phase.note}</div>
            </div>
            <figure>
              <img src={phase.image} alt={phase.alt} loading="lazy" />
              <figcaption>{phase.caption}</figcaption>
            </figure>
          </div>
        </section>
      ))}

      <section className="closing">
        <div className="closing-inner">
          <span className="eyebrow" style={{color:'#208c86'}}>THE NEXT CHAPTER</span>
          <h2>Better health is built, not bought.</h2>
          <p>The exciting part of longevity science is not a promise of perfection. It is that many of the things shaping our future health are worth understanding — and some are within our influence. Start with the foundations, stay curious, and let the evidence guide the next step.</p>
          <a href="/diagnostics">Explore the diagnostics guide</a>
          <p className="disclaimer">Educational information only. Testing, supplements and treatment decisions should be individualised with a qualified clinician.</p>
        </div>
      </section>
    </main>
  );
}
