"use client";

import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function About() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dr Gavin McAuley",
        "jobTitle": "Physician and health writer",
        "description": "Physician with experience in emergency medicine and general practice, writing about health and longevity research.",
        "url": "https://empowervida.com/about",
        "alumniOf": { "@type": "CollegeOrUniversity", "name": "University of Aberdeen" },
        "hasCredential": { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MBChB" },
        "sameAs": ["https://www.linkedin.com/in/gavin-mcauley-62147151/", "https://drgavinmcauley.substack.com"]
    };

    return (
        <main className="about-editorial">
            <SEO
                title="About Dr Gavin McAuley | EmpowerVida"
                description="Meet Dr Gavin McAuley, a physician drawing on experience in emergency medicine and general practice to explore the science of healthier ageing."
                keywords="Dr Gavin McAuley, EmpowerVida, health education, longevity science, medical writing"
                canonical="/about"
                ogImage="/dr-gavin-mcauley.jpg"
                schemaData={personSchema}
            />

            <header className="about-hero">
                <div className="about-hero-inner">
                    <p className="about-eyebrow">THE PERSON BEHIND EMPOWERVIDA</p>
                    <h1>From treating illness to exploring healthier ageing.</h1>
                    <p className="about-hero-lead">I'm Dr Gavin McAuley. After 16 years in emergency medicine and general practice, I've become increasingly interested in a question that reaches beyond the consulting room: what can help us stay healthier for longer?</p>
                </div>
            </header>

            <div className="about-content">
                <section className="about-intro" aria-label="Meet Dr Gavin McAuley">
                    <img src="/dr-gavin-mcauley.jpg" alt="Portrait of Dr Gavin McAuley" className="about-portrait" />
                    <div>
                        <p className="about-eyebrow">DR GAVIN McAULEY · MBChB</p>
                        <h2>Why I started looking beyond the emergency.</h2>
                        <p>My medical career began after graduating from the University of Aberdeen in 2009. Working in emergency departments and general practice taught me the value of good clinical care — and how much health can shape the course of a life.</p>
                        <p>Acute medicine can be extraordinary. But alongside treating illness, I've become fascinated by the research into exercise, sleep, nutrition, metabolic health and the biology of ageing. Some of that science is well established. Some is new, intriguing and far from settled.</p>
                    </div>
                </section>

                <section className="about-story">
                    <p className="about-eyebrow">THE IDEA</p>
                    <h2>Curiosity, without the hype.</h2>
                    <p>It's easy to find confident promises about longevity. It's much harder to work out which claims are supported by good evidence, which are still being investigated and which are simply overstated.</p>
                    <p>That's why I created EmpowerVida: a place to explore useful health research in plain English, with room for both scientific caution and genuine optimism. My aim is to make the subject interesting and accessible, not to promise a shortcut to a longer life.</p>
                </section>

                <section className="about-principles" aria-label="How I approach the evidence">
                    <h2>What you can expect here</h2>
                    <div className="about-principles-grid">
                        <div><h3>Evidence first</h3><p>Established findings are distinguished from early or uncertain research.</p></div>
                        <div><h3>Plain English</h3><p>Complex science explained without assuming a medical background.</p></div>
                        <div><h3>Reasons for hope</h3><p>Promising ideas explored seriously, without turning possibility into certainty.</p></div>
                    </div>
                </section>

                <section className="about-next">
                    <p className="about-eyebrow">WHERE TO NEXT?</p>
                    <h2>Explore what interests you.</h2>
                    <p>Whether you're curious about metabolism, sleep, brain health or emerging longevity research, there's plenty to discover.</p>
                    <div className="about-actions">
                        <Link href="/blog" className="about-button about-button-primary">Explore the journal →</Link>
                        <Link href="/" className="about-button about-button-secondary">Back to homepage</Link>
                    </div>
                    <p className="about-disclaimer">EmpowerVida provides general educational information, not personalised medical advice. Decisions about your health should be discussed with an appropriate healthcare professional.</p>
                </section>
            </div>
            <style jsx global>{`
                .about-editorial { background:#fff; color:#193d35; font-family:Inter,Arial,sans-serif; }
                .about-editorial * { box-sizing:border-box; }
                .about-hero { background:linear-gradient(110deg,rgba(12,42,39,.88),rgba(12,42,39,.68)),url('/about_hero_transformation.png') center/cover; color:white; padding:clamp(5rem,10vw,8rem) 1.5rem; }
                .about-hero-inner { max-width:900px; margin:auto; }
                .about-eyebrow { color:#19b8ae; font-size:.82rem; letter-spacing:.13em; font-weight:800; margin:0 0 1rem; }
                .about-hero h1 { font-family:Manrope,Inter,sans-serif; font-size:clamp(2.3rem,5.5vw,4rem); line-height:1.12; letter-spacing:-.035em; max-width:820px; margin:0 0 1.5rem; color:white; }
                .about-hero-lead { font-size:clamp(1.05rem,2vw,1.35rem); line-height:1.65; max-width:760px; color:#f0f8f6; margin:0; }
                .about-content { max-width:1050px; margin:auto; padding:0 1.5rem; }
                .about-content section { margin:0 auto; padding:clamp(2.75rem,6vw,5rem) 0; }
                .about-content h2 { font-family:Manrope,Inter,sans-serif; font-size:clamp(1.75rem,3vw,2.55rem); line-height:1.2; letter-spacing:-.025em; margin:0 0 1.35rem; color:#193d35; }
                .about-content p:not(.about-eyebrow) { font-size:1.08rem; line-height:1.75; margin:0 0 1.2rem; }
                .about-intro { display:grid; grid-template-columns:minmax(170px,280px) 1fr; align-items:center; gap:clamp(2rem,5vw,4rem); }
                .about-portrait { width:100%; aspect-ratio:1/1; object-fit:cover; object-position:center top; border-radius:24px; border:3px solid #c2eae5; }
                .about-story { max-width:780px; border-top:1px solid #dbeae7; }
                .about-principles { border-top:1px solid #dbeae7; }
                .about-principles-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1.2rem; }
                .about-principles-grid>div { background:#f3f9f8; padding:1.6rem; border-radius:18px; border:1px solid #deeeea; }
                .about-principles-grid h3 { font-size:1.15rem; margin:0 0 .65rem; color:#193d35; }
                .about-principles-grid p { font-size:1rem!important; margin:0!important; }
                .about-next { text-align:center; border-top:1px solid #dbeae7; max-width:780px; }
                .about-actions { display:flex; flex-wrap:wrap; justify-content:center; gap:1rem; margin:1.6rem 0 2rem; }
                .about-button { padding:.95rem 1.5rem; border-radius:12px; font-weight:750; text-decoration:none; display:inline-block; }
                .about-button-primary { background:#164e43; color:white; }
                .about-button-secondary { border:1px solid #164e43; color:#164e43; }
                .about-content .about-disclaimer { font-size:.86rem!important; color:#53665f; line-height:1.6!important; }
                @media(max-width:650px) {
                    .about-hero { padding:4rem 1.25rem 3.5rem; }
                    .about-content { padding:0 1.15rem; }
                    .about-content section { padding:2.5rem 0; }
                    .about-intro { grid-template-columns:1fr; gap:1.4rem; }
                    .about-portrait { width:150px; height:150px; border-radius:50%; margin:auto; }
                    .about-principles-grid { grid-template-columns:1fr; gap:.75rem; }
                    .about-principles-grid>div { padding:1.2rem; }
                    .about-actions { flex-direction:column; }
                    .about-button { width:100%; }
                }
            `}</style>
        </main>
    );
}
