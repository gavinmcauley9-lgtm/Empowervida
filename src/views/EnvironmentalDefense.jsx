"use client";

import React from 'react';

const sections = [
  { id: 'air', label: 'The air we breathe' },
  { id: 'water', label: 'The water we drink' },
  { id: 'light', label: 'Light and the body clock' },
  { id: 'exposures', label: 'Other everyday exposures' },
  { id: 'action', label: 'Your practical priorities' },
  { id: 'sources', label: 'Sources and further reading' },
];

function Evidence({ level, children }) {
  return <span className={`env-evidence env-${level}`}>{children}</span>;
}

export default function EnvironmentalDefense() {
  return <main className="env-guide">
    <style>{`
      .env-guide{--ink:#173a34;--muted:#53665f;--green:#126c60;--line:#dbe7e0;background:#fff;color:var(--ink)}
      .env-guide *{box-sizing:border-box}
      .env-guide .env-hero{min-height:570px;display:flex;align-items:flex-end;padding:10rem max(24px,calc((100vw - 1140px)/2)) 5rem;background:linear-gradient(100deg,rgba(8,31,29,.96) 0%,rgba(10,45,41,.85) 52%,rgba(13,56,50,.55) 100%),url('/hero_dna_botanical.png') center/cover;color:#fff}
      .env-guide .env-hero-inner{max-width:900px}
      .env-guide .eyebrow{display:block;text-transform:uppercase;letter-spacing:.16em;font-size:.78rem;font-weight:750;color:#a6e8d8}
      .env-guide h1{font-size:clamp(3rem,6.5vw,5.6rem);line-height:1.04;letter-spacing:-.052em;color:#fff;margin:1rem 0 1.4rem}
      .env-guide .env-deck{font-size:clamp(1.12rem,2.2vw,1.48rem);line-height:1.55;color:#edf7f3;max-width:750px}
      .env-guide .env-byline{color:#bde2d7;font-size:.9rem;margin-top:1.7rem}
      .env-guide .env-layout{max-width:1160px;margin:0 auto;padding:4rem 24px 6rem;display:grid;grid-template-columns:235px minmax(0,1fr);gap:clamp(2rem,6vw,5rem)}
      .env-guide .env-nav{position:sticky;top:110px;align-self:start;border-left:2px solid var(--line);padding-left:1.2rem}
      .env-guide .env-nav strong{font-size:.77rem;letter-spacing:.1em;text-transform:uppercase}
      .env-guide .env-nav a{display:block;color:#315a51;text-decoration:none;margin:1rem 0;font-size:.91rem;line-height:1.45}
      .env-guide .env-nav a:hover{text-decoration:underline}
      .env-guide article{min-width:0;max-width:790px;font-size:1.09rem;line-height:1.83}
      .env-guide article p{margin:0 0 1.5rem}
      .env-guide article h2{font-size:clamp(1.9rem,3.6vw,2.75rem);letter-spacing:-.035em;line-height:1.16;margin:3.6rem 0 1.1rem;scroll-margin-top:115px}
      .env-guide article h3{font-size:1.32rem;line-height:1.35;margin:1.8rem 0 .8rem}
      .env-guide .env-summary{padding:1.7rem 1.9rem;background:#eef7f3;border-left:4px solid var(--green);border-radius:0 14px 14px 0;margin-bottom:2.7rem}
      .env-guide .env-summary strong{display:block;margin-bottom:.65rem}
      .env-guide .env-summary p{margin:0}
      .env-guide .env-figure{background:#103d36;color:#f5fbf8;padding:2rem;border-radius:18px;margin:2.5rem 0}
      .env-guide .env-figure h3{color:#fff;margin:0 0 .75rem}
      .env-guide .env-flow{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.8rem;margin:1.4rem 0}
      .env-guide .env-flow div{background:#1c5148;border:1px solid #508e80;border-radius:12px;padding:1.15rem .9rem;font-size:.93rem;line-height:1.45}
      .env-guide .env-flow strong{display:block;color:#c6f2e5;margin-bottom:.4rem}
      .env-guide figcaption{font-size:.84rem;line-height:1.6;color:#cfe4dd}
      .env-guide .env-evidence{display:inline-block;font-size:.74rem;line-height:1.35;letter-spacing:.045em;text-transform:uppercase;font-weight:800;border-radius:999px;padding:.4rem .75rem;margin:0 0 1rem}
      .env-guide .env-established{background:#e2f1e9;color:#215b42}
      .env-guide .env-emerging{background:#fff1d7;color:#755315}
      .env-guide .env-uncertain{background:#edf0f1;color:#47545a}
      .env-guide .env-panel{border-top:1px solid var(--line);padding:1.7rem 0 1rem}
      .env-guide .env-panel h3{margin:.2rem 0 .8rem}
      .env-guide .env-action{background:#f3f8f5;border-radius:14px;padding:1.3rem 1.5rem;margin:1.4rem 0 2rem}
      .env-guide .env-action strong{display:block;margin-bottom:.4rem}
      .env-guide .env-action p{margin:0}
      .env-guide ul,.env-guide ol{padding-left:1.45rem;margin:1rem 0 2rem}
      .env-guide li{margin:0 0 .85rem;padding-left:.25rem}
      .env-guide a{color:#0a7063;text-underline-offset:3px;overflow-wrap:anywhere}
      .env-guide .env-sources{font-size:.92rem;line-height:1.65}
      .env-guide .env-sources li{margin-bottom:1rem}
      .env-guide .env-caveat{border:1px solid var(--line);border-radius:14px;padding:1.4rem 1.6rem;margin:2rem 0}
      @media(max-width:820px){.env-guide .env-layout{display:block;padding:2.5rem 20px 4rem}.env-guide .env-nav{position:static;border-left:0;border-bottom:1px solid var(--line);padding:0 0 1.2rem;margin-bottom:2rem}.env-guide .env-nav a{display:inline-block;margin:.6rem 1rem .3rem 0}.env-guide .env-hero{min-height:450px;padding:8rem 22px 3.5rem}.env-guide article{font-size:1.03rem;line-height:1.77}.env-guide .env-figure{padding:1.4rem}}
      @media(max-width:460px){.env-guide .env-hero{min-height:410px;padding:7rem 20px 2.8rem}.env-guide h1{font-size:clamp(2.55rem,11vw,3.5rem)}.env-guide .env-flow{grid-template-columns:1fr}.env-guide .env-summary{padding:1.3rem}}
    `}</style>

    <header className="env-hero">
      <div className="env-hero-inner">
        <span className="eyebrow">EmpowerVida | Longevity Guides</span>
        <h1>The Invisible Environment</h1>
        <p className="env-deck">How the air we breathe, the water we drink and the light around us influence health — and which risks deserve our attention.</p>
        <p className="env-byline">An evidence-led guide to everyday exposures · Australian perspective</p>
      </div>
    </header>

    <div className="env-layout">
      <nav className="env-nav" aria-label="On this page"><strong>In this guide</strong>{sections.map(s=><a key={s.id} href={`#${s.id}`}>{s.label}</a>)}</nav>
      <article>
        <aside className="env-summary"><strong>The story in 30 seconds</strong><p>Our surroundings influence health, but not every detectable substance represents a meaningful danger. Air pollution and tobacco smoke have well-established health effects. Some newer concerns, including microplastics, warrant research rather than panic. The best approach is to understand the evidence, consider your actual exposure and focus on practical changes with clear benefits.</p></aside>
        <p>We spend our lives immersed in an environment we barely notice. Air moves through our lungs. Water becomes part of our daily routine. Light quietly helps set the timing of sleep and wakefulness. None of this requires a “detox protocol” to be worth understanding.</p>
        <p>The fascinating part is that environmental health is not simply a list of invisible threats. It is a science of exposure, biology and proportion. Some hazards are firmly established. Others are plausible but still uncertain. Knowing the difference helps us act where it matters most.</p>

        <figure className="env-figure">
          <h3>Hazard is not the same as risk</h3>
          <div className="env-flow">
            <div><strong>1 · Hazard</strong>Could this agent cause harm under some circumstances?</div>
            <div><strong>2 · Exposure</strong>How much reaches you, by what route, and for how long?</div>
            <div><strong>3 · Risk</strong>How likely is harm at that exposure, given the evidence and individual context?</div>
          </div>
          <figcaption>A simplified framework. Susceptibility, dose–response and uncertainty also influence real-world risk.</figcaption>
        </figure>

        <h2 id="air">The air we breathe</h2>
        <p>Of the environmental exposures we can influence, air quality deserves serious attention. Fine particulate matter (PM2.5) can reach deep into the lungs. Long-term exposure is associated with cardiovascular and respiratory disease, and population studies link it to premature mortality. Bushfire smoke can cause substantial short-term pollution episodes in Australia.</p>
        <div className="env-panel">
          <Evidence level="established">Established risk</Evidence>
          <h3>Fine particles, smoke and second-hand tobacco smoke</h3>
          <p>These are not hypothetical concerns. The evidence linking air pollution and tobacco smoke to adverse health outcomes is extensive. Risk varies with concentration, duration and vulnerability, including pre-existing heart or lung disease.</p>
          <div className="env-action"><strong>What helps</strong><p>Keep indoor spaces smoke-free. Check local air-quality advice during bushfires. Reduce outdoor exertion when smoke levels are high, close windows when appropriate, and consider a correctly sized portable HEPA purifier for a frequently used room during pollution events. Filtration reduces particles; it does not remove every gas or eliminate all risk.</p></div>
        </div>
        <div className="env-panel">
          <Evidence level="established">Established in relevant settings</Evidence>
          <h3>Indoor ventilation, mould and combustion</h3>
          <p>Ventilation and moisture control matter. Damp or mouldy buildings are associated with respiratory symptoms and asthma problems. Combustion appliances can generate pollutants, including nitrogen dioxide; faulty or poorly ventilated fuel-burning equipment can create a carbon monoxide hazard.</p>
          <div className="env-action"><strong>What helps</strong><p>Address leaks and persistent dampness, use kitchen extraction where available, maintain fuel-burning appliances and follow local carbon monoxide safety advice. Outdoor air quality matters when deciding when to ventilate.</p></div>
        </div>

        <h2 id="water">The water we drink</h2>
        <p>Safe drinking water is a major public-health achievement. In Australia, regulated public supplies are managed against health-based guidance and monitored by water providers. The sensible starting point is your local water-quality report, not the assumption that ordinary tap water is inherently unsafe.</p>
        <div className="env-panel">
          <Evidence level="established">Established when levels are excessive</Evidence>
          <h3>Microbial contamination, lead and other regulated contaminants</h3>
          <p>Contamination can matter greatly in particular circumstances, including private rainwater or bore supplies, plumbing issues and official boil-water advisories. The specific hazard determines the right response. No single home filter removes every contaminant.</p>
          <div className="env-action"><strong>What helps</strong><p>Follow local water-provider and health-department advice. If you rely on a private supply or have a specific contamination concern, seek appropriate testing and choose treatment certified for that contaminant. Reverse osmosis can reduce certain dissolved substances but is not routinely necessary for every household and requires maintenance.</p></div>
        </div>
        <div className="env-panel">
          <Evidence level="emerging">Emerging concern</Evidence>
          <h3>Microplastics: an important unanswered question</h3>
          <p>Microplastic particles have been detected in environmental samples and in human tissues. Scientists are investigating exposure pathways and possible biological effects. But detection alone does not establish that typical drinking-water exposure causes a particular disease, and the magnitude of long-term human health risk remains uncertain.</p>
          <p>That uncertainty is a reason for better research and sensible waste reduction — not a reason to promise that an expensive filtration system will improve longevity.</p>
        </div>

        <h2 id="light">Light and the body clock</h2>
        <p>Light is more than illumination. It is an important signal for the circadian system, helping the brain coordinate sleep and wakefulness. Bright light during the day and lower light levels in the evening can support a more consistent daily rhythm.</p>
        <div className="env-panel">
          <Evidence level="established">Established physiology</Evidence>
          <h3>Timing and intensity matter</h3>
          <p>Evening light can affect melatonin timing and sleepiness, although effects depend on brightness, spectrum, duration and the person. Morning daylight and a regular sleep schedule are reasonable starting points.</p>
          <div className="env-action"><strong>What helps</strong><p>Get daylight exposure during the day, keep evenings comfortably dimmer and maintain a consistent sleep–wake schedule where possible. You do not need to eliminate every screen or buy specialised glasses to make meaningful changes.</p></div>
        </div>
        <div className="env-panel">
          <Evidence level="uncertain">Claims often overstated</Evidence>
          <h3>Do blue-light-blocking glasses transform sleep?</h3>
          <p>Trials of blue-light-filtering spectacles have not established a reliable, clinically meaningful sleep benefit for everyone. They may be comfortable for some people, but they should not be presented as essential protection against “mitochondrial damage”.</p>
        </div>

        <h2 id="exposures">Other everyday exposures worth understanding</h2>
        <p>Not every exposure needs its own supplement, gadget or ritual. The priority depends on how strong the evidence is and how much exposure a person actually has.</p>
        <div className="env-panel"><Evidence level="established">Established risk</Evidence><h3>Noise and hearing</h3><p>Repeated exposure to loud sound can damage hearing. Practical protection includes lowering listening volumes, limiting duration and using appropriate hearing protection at concerts or noisy workplaces.</p></div>
        <div className="env-panel"><Evidence level="established">Established risk</Evidence><h3>Ultraviolet radiation</h3><p>Excess UV exposure increases skin-cancer risk. Sensible sun protection remains important in Australia. This is compatible with recognising the benefits of time outdoors and daylight for daily rhythms.</p></div>
        <div className="env-panel"><Evidence level="emerging">Exposure-specific evidence</Evidence><h3>Household chemicals and emerging contaminants</h3><p>Some chemicals are hazardous at particular doses or in occupational settings, but broad claims that ordinary household products are universally “toxic” are not scientifically useful. Follow product instructions, avoid unnecessary inhalation of sprays and solvents, and seek specific advice for known exposures rather than relying on generic detox claims.</p></div>

        <h2 id="action">Your practical priorities</h2>
        <p>If you make only a few changes, start with those supported by the strongest evidence and most relevant to your circumstances.</p>
        <ol>
          <li><strong>Protect your air:</strong> avoid smoke, respond to bushfire advisories and address persistent dampness or combustion hazards.</li>
          <li><strong>Know your water:</strong> use local quality reports and investigate genuine concerns before buying filtration equipment.</li>
          <li><strong>Work with your body clock:</strong> seek daytime light and reduce unnecessarily bright evening lighting.</li>
          <li><strong>Protect hearing and skin:</strong> reduce harmful noise exposure and manage UV exposure.</li>
          <li><strong>Be curious, not alarmed:</strong> follow research on microplastics and emerging contaminants without mistaking early findings for proven disease risk.</li>
        </ol>
        <div className="env-caveat"><strong>A useful principle:</strong> Better environmental health is rarely about achieving a perfectly “clean” life. It is about reducing meaningful exposures where the benefits are credible and the actions are practical.</div>

        <h2 id="sources">Sources and further reading</h2>
        <p>These public-health and research resources provide useful starting points. Evidence and local guidance can change; check the latest advice for your circumstances.</p>
        <ul className="env-sources">
          <li><a href="https://www.who.int/health-topics/air-pollution" target="_blank" rel="noopener noreferrer">World Health Organization — Air pollution and health</a></li>
          <li><a href="https://www.airquality.gov.au/" target="_blank" rel="noopener noreferrer">Australian Government — Air Quality information</a></li>
          <li><a href="https://www.nhmrc.gov.au/about-us/publications/australian-drinking-water-guidelines" target="_blank" rel="noopener noreferrer">NHMRC — Australian Drinking Water Guidelines</a></li>
          <li><a href="https://www.who.int/publications/i/item/9789241516198" target="_blank" rel="noopener noreferrer">WHO — Microplastics in drinking-water</a></li>
          <li><a href="https://www.cochrane.org/CD013244/EYES_blue-light-filtering-spectacle-lenses-visual-performance-sleep-and-macular-health-adults" target="_blank" rel="noopener noreferrer">Cochrane — Blue-light-filtering spectacle lenses: evidence review</a></li>
          <li><a href="https://www.cancer.org.au/cancer-information/causes-and-prevention/sun-safety" target="_blank" rel="noopener noreferrer">Cancer Council Australia — Sun safety</a></li>
        </ul>
        <p style={{fontSize:'.9rem',color:'var(--muted)'}}>This guide provides general health information, not individual medical advice. People with specific exposures, symptoms or health conditions may need tailored assessment.</p>
      </article>
    </div>
  </main>;
}
