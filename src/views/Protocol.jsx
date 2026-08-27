"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import FAQSection from '../components/FAQSection';

const Protocol = () => {
    // usePathname() returns a string, not an object — use window.location for hash access
    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    React.useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://empowervida.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Protocols",
                "item": "https://empowervida.com/protocol"
            }
        ]
    };

    const faqData = [
        {
            question: "What is a longevity protocol?",
            answer: "On this page, “protocol” refers to an educational framework that brings together lifestyle priorities and supplements studied for particular health goals. It is not a personalised treatment plan. The relevance of any supplement depends on diet, health history, medicines, symptoms and clinical findings."
        },
        {
            question: "Which protocol should I start with?",
            answer: "There is no universal starting stack. Begin with lifestyle foundations and address any identified deficiency or health concern with an appropriately qualified health professional. If you are considering a supplement, choose it for a defined reason rather than treating one of these sections as a default foundation."
        },
        {
            question: "Can I combine multiple protocols?",
            answer: "Combining multiple sections can duplicate ingredients and increase total doses or interaction risks. Do not assume that combinations are synergistic. Review the complete ingredient list, medicines and health circumstances with an appropriately qualified health professional before combining products."
        },
        {
            question: "How long before I see results from a longevity protocol?",
            answer: "Response varies according to the reason for use, baseline status, product, adherence and other care. Some supplements may have no noticeable effect. No general timetable can be promised for energy, cognition, metabolic markers or long-term health outcomes. Persistent symptoms or abnormal results warrant appropriate assessment."
        },
        {
            question: "Are these protocols safe to take long-term?",
            answer: "No supplement regimen is automatically safe for long-term use. Safety depends on the ingredient, dose, duration, product quality, health conditions, pregnancy or breastfeeding, kidney or liver function, medicines and duplication across products. Ongoing need should be reviewed, and adverse effects warrant appropriate professional advice."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
            minHeight: '100vh',
            fontFamily: '"Inter", sans-serif',
            overflowX: 'hidden'
        }}>
            {/* JSON-LD Schemas — server-rendered, visible to Googlebot immediately */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero Section */}
            <HeroSection
                backgroundImage="/protocol_hero_fire_v2.jpg"
                title={
                    <>
                        THE 7 MASTER PROTOCOLS: <br />
                        <span style={{ color: 'var(--color-accent-teal)' }}>CLINICAL ARCHITECTURE</span>
                    </>
                }
                subtitle=""
                height="70vh"
                overlay="linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, #FFFFFF 100%)"
                textColor="var(--color-text)"
            >
                <p style={{
                    fontSize: '1.5rem',
                    fontWeight: 500,
                    color: 'var(--color-text-muted)',
                    maxWidth: '700px',
                    margin: '0 auto',
                    borderLeft: '4px solid var(--color-accent-teal)',
                    paddingLeft: '1.5rem',
                    textAlign: 'left'
                }}>
                    "Medicine usually waits for a crash. We engineer the system for maximum resilience."
                </p>
            </HeroSection>

            {/* Introduction */}
            <section style={{ padding: '2rem 2rem', maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.8,
                        color: 'var(--color-text)',
                        fontWeight: 400,
                        marginBottom: '2rem'
                    }}
                >
                    Over 16 years across emergency medicine, hospital medicine and general practice, I have seen how symptoms and long-term health are influenced by lifestyle, existing conditions and individual circumstances. This page organises seven educational areas: Longevity, Brain Fog / Clarity, Cognitive Health, Energy / Vitality, Gut Health, Sleep & Recovery and Metabolic Health. They are not universal prescriptions or instructions to combine multiple supplement regimens. Use them as topics for informed discussion with an appropriately qualified health professional.
                </motion.p>
            </section>

            {/* The Protocol Sections */}
            <section style={{
                padding: '6rem 2rem 8rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/dna_white_bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.4,
                    zIndex: 0
                }}></div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {/* EVIDENCE AND SAFETY NOTE */}
                    <div style={{
                        background: 'rgba(255, 152, 0, 0.08)',
                        borderLeft: '4px solid #FF9800',
                        borderRadius: '12px',
                        padding: '1.75rem 2rem',
                        marginBottom: '3rem',
                        fontSize: '1rem',
                        lineHeight: '1.6',
                        color: 'var(--color-text)'
                    }}>
                        <p style={{ margin: 0, fontWeight: 500 }}>
                            <strong>Evidence and safety note:</strong> Supplement needs vary according to diet, health conditions, medications, age and laboratory findings. None of the combinations below is universally indicated. They are presented for education and discussion with an appropriately qualified health professional, not as personalised treatment.
                        </p>
                    </div>

                    {/* PROTOCOL 1: LONGEVITY (FOUNDATION) */}
                    <div id="longevity-stack" className="protocol-phase" style={{
                        background: 'var(--color-bg-secondary)',
                        borderRadius: '24px',
                        padding: '3rem',
                        marginBottom: '4rem',
                        border: '2px solid rgba(26, 60, 52, 0.1)',
                        scrollMarginTop: '120px'
                    }}>
                        <div style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            color: 'rgba(26, 60, 52, 0.3)',
                            lineHeight: 1,
                            marginBottom: '-1rem'
                        }}>01</div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            color: '#1A3C34',
                            marginBottom: '0.5rem',
                            fontFamily: '"Manrope", sans-serif'
                        }}>
                            LONGEVITY: THE FOUNDATION
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            color: 'var(--color-accent-teal)',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Nutritional adequacy, deficiency correction and carefully selected options
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            Healthy ageing begins with diet, physical activity, sleep and management of established health risks. The nutrients and compounds below are frequently discussed in healthy-ageing research, but their usefulness depends on individual circumstances. They should not be treated as a universal longevity stack or biological insurance policy.
                        </p>

                        <div style={{
                            background: 'rgba(26, 60, 52, 0.05)',
                            borderRadius: '12px',
                            padding: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#1A3C34' }}>The Stack:</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', fontWeight: 700 }}>+</span>
                                    <strong>Vitamin D3 ± K2</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Vitamin D supports bone and muscle health. Supplementation is most appropriate when dietary intake, sun exposure, clinical risk or testing suggests it may be needed. Vitamin K is included in some combined formulations but may interact with medicines such as warfarin.</span><br />
                                    <span style={{ color: '#1A3C34', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise according to clinical circumstances and applicable guidance.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', fontWeight: 700 }}>+</span>
                                    <strong>Glycine + NAC</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Glycine and N-acetylcysteine support pathways involved in glutathione production. Small human studies have examined their effects on selected metabolic and oxidative-stress markers, but benefits for lifespan or prevention of age-related disease have not been established.</span><br />
                                    <span style={{ color: '#1A3C34', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise; long-term outcome evidence remains limited.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', fontWeight: 700 }}>+</span>
                                    <strong>B-Complex</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>B vitamins perform essential metabolic and neurological functions. Supplementation is most relevant when intake is inadequate, deficiency risk is present or a clinical indication has been identified. Common MTHFR variants alone do not establish that a methylated B-complex is necessary.</span><br />
                                    <span style={{ color: '#1A3C34', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Base on dietary intake, clinical context and, where appropriate, testing.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', fontWeight: 700 }}>+</span>
                                    <strong>Omega-3</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>EPA and DHA are important fatty acids found principally in seafood. Regular fish consumption is generally preferred as a dietary source. Supplements may be appropriate in selected circumstances, but they have not been shown to provide a universal longevity benefit.</span><br />
                                    <span style={{ color: '#1A3C34', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Higher-dose supplementation should be discussed with a clinician, particularly when medicines or cardiovascular conditions are relevant.</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(26, 60, 52, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <h4 style={{ color: '#1A3C34', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Deep Dive:</h4>
                            <Link href="/longevity" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Learn more about the science of aging</Link>
                            <Link href="/blog/22" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Read: Why NAD+ Declines with Age</Link>
                            <Link href="/diagnostics" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Before starting, consider testing your biomarkers</Link>
                        </div>
                    </div>

                    {/* PROTOCOL 2: BRAIN FOG / CLARITY */}
                    <div id="clarity-stack" className="protocol-phase" style={{
                        background: 'var(--color-bg-secondary)',
                        borderRadius: '24px',
                        padding: '3rem',
                        marginBottom: '4rem',
                        border: '2px solid rgba(0, 128, 128, 0.1)',
                        scrollMarginTop: '120px'
                    }}>
                        <div style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            color: 'rgba(0, 128, 128, 0.3)',
                            lineHeight: 1,
                            marginBottom: '-1rem'
                        }}>02</div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            color: '#008080',
                            marginBottom: '0.5rem',
                            fontFamily: '"Manrope", sans-serif'
                        }}>
                            BRAIN FOG / CLARITY
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            color: '#008080',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Compounds studied for cognitive performance in particular settings
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            Persistent brain fog can have many causes, including inadequate sleep, medication effects, mood disorders, metabolic conditions and nutritional deficiencies. Supplements should not be assumed to correct an unidentified structural or metabolic problem. The options below have been studied for aspects of cognition or fatigue, but results vary between populations.
                        </p>

                        <div style={{
                            background: 'rgba(0, 128, 128, 0.05)',
                            borderRadius: '12px',
                            padding: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#008080' }}>The Stack:</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>Creatine Monohydrate</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Creatine supports cellular energy buffering. Some human studies report modest cognitive benefits, particularly during sleep deprivation, high cognitive demand or low dietary creatine intake, while results in generally healthy populations are mixed.</span><br />
                                    <span style={{ color: '#008080', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Commonly studied amount—not a personalised recommendation</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>Citicoline</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Citicoline participates in phospholipid and acetylcholine pathways. It has been studied for several neurological and cognitive applications, but evidence for routine cognitive enhancement in healthy adults remains limited.</span><br />
                                    <span style={{ color: '#008080', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Study protocols vary; individual suitability should be reviewed.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>Magnesium L-Threonate</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>This form of magnesium has been examined in preliminary cognitive and sleep research. Current human evidence does not establish that it uniquely enters the brain, repairs synaptic structure or treats brain fog.</span><br />
                                    <span style={{ color: '#008080', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Follow product guidance and consider total magnesium intake and kidney function.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>B-Complex with 5-MTHF</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Folate, vitamin B12 and vitamin B6 are important for neurological function. Supplementation should address dietary inadequacy, deficiency or another identified clinical need rather than being based solely on a common MTHFR variant.</span><br />
                                    <span style={{ color: '#008080', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise and avoid unnecessary high-dose or duplicated B-vitamin products.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>Rhodiola Rosea</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Small studies have examined rhodiola for fatigue, stress and cognitive performance, but findings are not conclusive. It may be unsuitable with certain medicines or health conditions.</span><br />
                                    <span style={{ color: '#008080', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Discuss suitability and possible interactions with a qualified health professional.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>L-Theanine</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>L-theanine has been studied for relaxed attention, frequently in combination with caffeine. Evidence does not show that it repairs neural pathways or prevents cognitive decline.</span><br />
                                    <span style={{ color: '#008080', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Study protocols vary; effects may differ when combined with caffeine.</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(0, 128, 128, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <h4 style={{ color: '#008080', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Deep Dive:</h4>
                            <Link href="/blog/3" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ More on nootropics for focus</Link>
                            <Link href="/blog/1" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Read: The Science of the Starving Neuron</Link>
                        </div>
                    </div>

                    {/* PROTOCOL 3: NEUROLONGEVITY */}
                    <div id="neurolongevity-stack" className="protocol-phase" style={{
                        background: 'var(--color-bg-secondary)',
                        borderRadius: '24px',
                        padding: '3rem',
                        marginBottom: '4rem',
                        border: '2px solid rgba(102, 126, 234, 0.1)',
                        scrollMarginTop: '120px'
                    }}>
                        <div style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            color: 'rgba(102, 126, 234, 0.3)',
                            lineHeight: 1,
                            marginBottom: '-1rem'
                        }}>03</div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            color: '#667eea',
                            marginBottom: '0.5rem',
                            fontFamily: '"Manrope", sans-serif'
                        }}>
                            COGNITIVE HEALTH: COMPOUNDS UNDER INVESTIGATION
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            color: '#667eea',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Research areas in long-term cognitive health—not dementia prevention
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            No supplement stack has been shown to prevent dementia or preserve brain structure over decades. The compounds below are being investigated for possible effects on cognitive or neurological pathways. This preliminary research should not be interpreted as evidence of disease prevention, neural repair or protection against Alzheimer-related pathology.
                        </p>

                        <div style={{
                            background: 'rgba(102, 126, 234, 0.05)',
                            borderRadius: '12px',
                            padding: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#667eea' }}>The Stack:</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 700 }}>+</span>
                                    <strong>Magnesium L-Threonate</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Preliminary human studies have examined possible effects on cognition and sleep. It has not been demonstrated to prevent dementia, increase BDNF meaningfully in humans or repair brain structure.</span><br />
                                    <span style={{ color: '#667eea', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Follow product guidance and consider total magnesium intake and kidney function.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 700 }}>+</span>
                                    <strong>DHA / Omega-3</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>DHA is an important component of neuronal cell membranes. Fish consumption is associated with several general health benefits, but omega-3 supplements have not been shown convincingly to prevent dementia in adequately nourished adults.</span><br />
                                    <span style={{ color: '#667eea', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise; higher-dose supplementation warrants clinical review.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 700 }}>+</span>
                                    <strong>Lion’s Mane</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Lion’s mane has effects on nerve-growth pathways in laboratory research. Human studies are small and preliminary, and there is no established evidence that it produces neurogenesis, repairs myelin or prevents cognitive disease.</span><br />
                                    <span style={{ color: '#667eea', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: No established dose exists for dementia prevention or neural repair.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 700 }}>+</span>
                                    <strong>Curcumin</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Curcumin has anti-inflammatory effects in laboratory research, but human cognitive trials are limited and inconsistent. It has not been shown to remove or prevent amyloid plaque in the human brain.</span><br />
                                    <span style={{ color: '#667eea', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Formulations vary and may interact with medicines; clinical review may be appropriate.</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{
                            background: 'rgba(255, 152, 0, 0.1)',
                            borderLeft: '4px solid #FF9800',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            fontSize: '0.95rem',
                            fontStyle: 'italic',
                            color: 'var(--color-text)'
                        }}>
                            <strong>Note:</strong> Clarity-oriented supplements are generally studied for short-term performance or fatigue. Long-term cognitive health is better supported by attention to physical activity, vascular risk, sleep, hearing, social engagement and overall dietary quality.
                        </div>

                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(102, 126, 234, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <h4 style={{ color: '#667eea', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Deep Dive:</h4>
                            <Link href="/blog/creatine-and-nad-take-together-physician-guide" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Read: Can You Take Creatine and NMN Together?</Link>
                            <Link href="/diagnostics" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Track your progress with cognitive biomarkers</Link>
                        </div>
                    </div>

                    {/* PROTOCOL 4: ENERGY / VITALITY */}
                    <div id="vitality-stack" className="protocol-phase" style={{
                        background: 'var(--color-bg-secondary)',
                        borderRadius: '24px',
                        padding: '3rem',
                        marginBottom: '4rem',
                        border: '2px solid rgba(255, 95, 0, 0.1)',
                        scrollMarginTop: '120px'
                    }}>
                        <div style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            color: 'rgba(255, 95, 0, 0.3)',
                            lineHeight: 1,
                            marginBottom: '-1rem'
                        }}>04</div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            color: '#FF5F00',
                            marginBottom: '0.5rem',
                            fontFamily: '"Manrope", sans-serif'
                        }}>
                            ENERGY / VITALITY
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            color: '#FF5F00',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Compounds studied for cellular energy and fatigue in selected settings
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            Fatigue can have many causes, including inadequate sleep, medication effects, nutritional deficiency and underlying medical or psychological conditions. Persistent, new or unexplained fatigue warrants appropriate assessment. Physical activity, sleep, dietary quality and management of identified causes are the foundations. The compounds below participate in cellular-energy pathways or have been studied for fatigue, but no supplement stack should be assumed to repair mitochondria or reliably restore energy.
                        </p>

                        <div style={{
                            background: 'rgba(255, 95, 0, 0.05)',
                            borderRadius: '12px',
                            padding: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#FF5F00' }}>The Stack:</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF5F00', fontWeight: 700 }}>+</span>
                                    <strong>CoQ10</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Coenzyme Q10 participates in mitochondrial electron transport. Ubiquinol has shown higher bioavailability than ubiquinone in some studies, but absorption also depends on formulation and individual factors. Evidence does not establish that everyone over 40 must use ubiquinol or that ubiquinone is ineffective. Evidence for general energy enhancement in otherwise healthy people remains limited.</span><br />
                                    <span style={{ color: '#FF5F00', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise according to the reason for use, formulation, health history and medicines. Review possible interactions, including warfarin and glucose-lowering treatment.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF5F00', fontWeight: 700 }}>+</span>
                                    <strong>Acetyl-L-Carnitine</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Acetyl-L-carnitine participates in fatty-acid transport into mitochondria and has been studied in selected fatigue and cognitive research settings. Clinical outcomes vary, and evidence does not establish universal fatigue reduction or energy restoration.</span><br />
                                    <span style={{ color: '#FF5F00', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Study protocols vary; consider individual health circumstances, medicines and the reason for use.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF5F00', fontWeight: 700 }}>+</span>
                                    <strong>PQQ</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>PQQ has been studied for mitochondrial signalling and selected biological markers. Human research is small and preliminary. Current evidence does not establish that PQQ supplementation builds new mitochondria or reliably improves energy or physical performance.</span><br />
                                    <span style={{ color: '#FF5F00', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: No generally established dose applies for mitochondrial restoration or routine energy enhancement.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF5F00', fontWeight: 700 }}>+</span>
                                    <strong>Alpha-Lipoic Acid</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Alpha-lipoic acid participates in energy metabolism and antioxidant pathways. Clinical evidence does not support describing it as a universal antioxidant or claiming that every user requires the R-isomer. Formulations differ, and supplementation may cause adverse effects or interact with medicines.</span><br />
                                    <span style={{ color: '#FF5F00', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise and seek professional advice when glucose-lowering medicines or relevant health conditions are present.</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(255, 95, 0, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <h4 style={{ color: '#FF5F00', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Deep Dive:</h4>
                            <Link href="/mitochondrial-guide" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Deep dive: Mitochondrial Guide</Link>
                            <Link href="/blog/the-coq10-trap" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Read: The CoQ10 Trap</Link>
                        </div>
                    </div>

                    {/* PROTOCOL 5: GUT HEALTH */}
                    <div id="gut-stack" className="protocol-phase" style={{
                        background: 'var(--color-bg-secondary)',
                        borderRadius: '24px',
                        padding: '3rem',
                        marginBottom: '4rem',
                        border: '2px solid rgba(255, 107, 107, 0.1)',
                        scrollMarginTop: '120px'
                    }}>
                        <div style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            color: 'rgba(255, 107, 107, 0.3)',
                            lineHeight: 1,
                            marginBottom: '-1rem'
                        }}>05</div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            color: '#FF6B6B',
                            marginBottom: '0.5rem',
                            fontFamily: '"Manrope", sans-serif'
                        }}>
                            GUT HEALTH: DIGESTIVE SUPPORT
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            color: '#FF6B6B',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Dietary foundations and compounds studied for digestive health
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            Digestive symptoms can have many causes, and persistent, recurrent or concerning symptoms warrant appropriate assessment. Dietary quality, fibre intake as tolerated, sleep, physical activity and treatment of identified gastrointestinal conditions form the foundation. The compounds below have been studied for selected digestive outcomes, but no supplement combination should be assumed to repair an undefined barrier problem or control systemic inflammation.
                        </p>

                        <div style={{
                            background: 'rgba(255, 152, 0, 0.1)',
                            borderLeft: '4px solid #FF9800',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            marginBottom: '2rem',
                            fontSize: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            Diet and lifestyle are important foundations, but individual needs vary. Supplements should be selected for a defined purpose and should not be assumed to accelerate intestinal tissue repair.
                        </div>

                        <div style={{
                            background: 'rgba(255, 107, 107, 0.05)',
                            borderRadius: '12px',
                            padding: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#FF6B6B' }}>The Stack:</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>L-Glutamine</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Glutamine is an amino acid used by intestinal and immune cells. Studies of supplementation and intestinal permeability have produced mixed, population-dependent results. It has not been established as a universal way to repair tight junctions or intestinal tissue.</span><br />
                                    <span style={{ color: '#FF6B6B', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise according to the reason for use, health history and applicable professional guidance.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>Zinc Carnosine</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Zinc carnosine has been investigated in selected upper gastrointestinal settings. Evidence does not support presenting it as a universal treatment that directly heals the intestinal lining. Total zinc intake and duration matter because excessive supplemental zinc can cause adverse effects and impair copper status.</span><br />
                                    <span style={{ color: '#FF6B6B', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Consider total zinc exposure and seek professional guidance for prolonged supplementation.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>Collagen Peptides</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Collagen peptides provide amino acids such as glycine and proline, but evidence that supplementation produces targeted intestinal repair is limited.</span><br />
                                    <span style={{ color: '#FF6B6B', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise according to health history, medicines and applicable professional guidance.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>Curcumin</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Curcumin has been investigated for inflammatory and digestive outcomes, but human findings vary according to the condition and formulation studied. It should not be described as blocking or extinguishing systemic inflammation.</span><br />
                                    <span style={{ color: '#FF6B6B', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Formulations vary and may interact with medicines; individual suitability should be reviewed.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>Omega-3</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>EPA and DHA are long-chain fatty acids found in seafood and algae. While studied for anti-inflammatory pathways, evidence does not show that omega-3 supplements control systemic inflammation on their own.</span><br />
                                    <span style={{ color: '#FF6B6B', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise according to health history, medicines and applicable professional guidance.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>Spore-Based Probiotics</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Probiotic effects are strain- and condition-specific; evidence for one strain or product does not apply automatically to another. Supplements should not be described as producing reliable or permanent recolonisation. People who are seriously ill or have compromised immune function should seek clinical advice before use.</span><br />
                                    <span style={{ color: '#FF6B6B', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Product selection and duration should reflect the specific strain, intended purpose and individual circumstances.</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{
                            background: 'rgba(32, 178, 170, 0.1)',
                            borderLeft: '4px solid var(--color-accent-teal)',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            fontSize: '0.95rem',
                            color: 'var(--color-text)'
                        }}>
                            Response varies according to the cause of symptoms, the intervention used and individual circumstances. No general timeline can be promised for intestinal-barrier repair or complete symptom resolution. Persistent, recurrent or worsening symptoms warrant appropriate clinical assessment.
                        </div>

                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(255, 107, 107, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <h4 style={{ color: '#FF6B6B', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Deep Dive:</h4>
                            <Link href="/blog/5" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Read: The Gut-Brain Connection</Link>
                        </div>
                    </div>

                    {/* PROTOCOL 6: SLEEP & RECOVERY */}
                    <div id="sleep-stack" className="protocol-phase" style={{
                        background: 'var(--color-bg-secondary)',
                        borderRadius: '24px',
                        padding: '3rem',
                        marginBottom: '4rem',
                        border: '2px solid rgba(118, 75, 162, 0.1)',
                        scrollMarginTop: '120px'
                    }}>
                        <div style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            color: 'rgba(118, 75, 162, 0.3)',
                            lineHeight: 1,
                            marginBottom: '-1rem'
                        }}>06</div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            color: '#764ba2',
                            marginBottom: '0.5rem',
                            fontFamily: '"Manrope", sans-serif'
                        }}>
                            SLEEP & RECOVERY
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            color: '#764ba2',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Sleep quality, regularity and carefully selected support
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            Sleep supports cognitive and physical function, but persistent sleep problems can have many causes, including insomnia, sleep apnoea, medication effects, pain, mood disorders and circadian disruption. Regular sleep timing, appropriate light exposure, physical activity and evidence-based care for an identified sleep disorder are the foundations. Emerging research links sleep with brain fluid-transport processes, but its clinical significance remains uncertain and does not justify promises of disease-related waste clearance.
                        </p>

                        <div style={{
                            background: 'rgba(118, 75, 162, 0.05)',
                            borderRadius: '12px',
                            padding: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#764ba2' }}>The Stack:</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#764ba2', fontWeight: 700 }}>+</span>
                                    <strong>Magnesium Bisglycinate</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Magnesium contributes to normal nerve and muscle function. Sleep studies have used different magnesium forms, doses and populations, and do not establish magnesium bisglycinate as universally superior to oxide or citrate. Supplement labels should be interpreted according to their elemental magnesium content.</span><br />
                                    <span style={{ color: '#764ba2', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Consider total supplemental elemental magnesium, medicines and individual circumstances. People with impaired kidney function should obtain professional advice before supplementation.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#764ba2', fontWeight: 700 }}>+</span>
                                    <strong>Glycine</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Glycine is an amino acid involved in several physiological processes. Small human studies have examined subjective sleep outcomes, but the evidence remains limited and does not establish glycine as a treatment for persistent sleep problems.</span><br />
                                    <span style={{ color: '#764ba2', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Study protocols vary; consider individual health circumstances, medicines and tolerance.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#764ba2', fontWeight: 700 }}>+</span>
                                    <strong>Apigenin</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Apigenin is a plant flavonoid investigated mainly in laboratory and preclinical research. Human evidence for isolated apigenin as a sleep aid is limited, and its clinical effects and long-term safety are not established.</span><br />
                                    <span style={{ color: '#764ba2', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: No generally established sleep dose applies to everyone; individual suitability should be reviewed.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#764ba2', fontWeight: 700 }}>+</span>
                                    <strong>L-Theanine</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>L-theanine is an amino acid found in tea and has been studied for relaxation and sleep-related outcomes. Human studies are limited and do not establish it as a treatment for insomnia or another sleep disorder.</span><br />
                                    <span style={{ color: '#764ba2', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Study protocols vary; individual suitability and medicines should be reviewed.</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{
                            background: 'rgba(255, 152, 0, 0.1)',
                            borderLeft: '4px solid #FF9800',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            fontSize: '0.95rem',
                            fontStyle: 'italic',
                            color: 'var(--color-text)'
                        }}>
                            <strong>Note:</strong> Sleep position should be guided by comfort, breathing, reflux and individual clinical needs. Research suggesting greater glymphatic transport in the lateral position was conducted in anaesthetised rodents and has not established a twofold benefit in sleeping humans.
                        </div>

                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(118, 75, 162, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <h4 style={{ color: '#764ba2', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Deep Dive:</h4>
                            <Link href="/blog/7" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Learn: Sleep Optimization Protocol</Link>
                        </div>
                    </div>

                    {/* PROTOCOL 7: METABOLIC HEALTH */}
                    <div id="metabolic-stack" className="protocol-phase" style={{
                        background: 'var(--color-bg-secondary)',
                        borderRadius: '24px',
                        padding: '3rem',
                        marginBottom: '4rem',
                        border: '2px solid rgba(220, 38, 38, 0.1)',
                        scrollMarginTop: '120px'
                    }}>
                        <div style={{
                            fontSize: '3.5rem',
                            fontWeight: 800,
                            color: 'rgba(220, 38, 38, 0.3)',
                            lineHeight: 1,
                            marginBottom: '-1rem'
                        }}>07</div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            color: '#DC2626',
                            marginBottom: '0.5rem',
                            fontFamily: '"Manrope", sans-serif'
                        }}>
                            METABOLIC HEALTH
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            color: '#DC2626',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Lifestyle foundations and clinically guided metabolic risk reduction
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            Insulin resistance and raised blood glucose can have several contributing causes and warrant appropriate assessment. Regular physical activity, dietary quality, sleep, weight management where relevant, and management of established cardiovascular risk factors are the foundations of metabolic health. The compounds below have been studied for selected metabolic outcomes, but none should be treated as a substitute for diagnosis, monitoring or prescribed treatment.
                        </p>

                        <div style={{
                            background: 'rgba(220, 38, 38, 0.05)',
                            borderRadius: '12px',
                            padding: '2rem',
                            marginBottom: '2rem'
                        }}>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#DC2626' }}>The Stack:</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#DC2626', fontWeight: 700 }}>+</span>
                                    <strong>Berberine</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Berberine has been studied for possible effects on blood glucose and blood lipids, but results are variable and it should not be treated as a substitute for prescribed treatment. It can cause gastrointestinal adverse effects and interact with medicines. It should not be used during pregnancy or breastfeeding.</span><br />
                                    <span style={{ color: '#DC2626', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individual suitability requires clinician or pharmacist review, particularly when glucose-lowering medicines are used.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#DC2626', fontWeight: 700 }}>+</span>
                                    <strong>Alpha-Lipoic Acid</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Alpha-lipoic acid participates in oxidative metabolism and has been examined for glucose-uptake pathways. Formulations and oral absorption vary, and higher-dose supplementation should be used with caution in individuals taking blood-glucose-lowering medicines.</span><br />
                                    <span style={{ color: '#DC2626', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise according to health history, medicines, dietary intake and applicable professional guidance.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#DC2626', fontWeight: 700 }}>+</span>
                                    <strong>Chromium Picolinate</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Chromium is a trace element involved in carbohydrate and lipid metabolism. Clinical trial evidence for routine supplementation in people with adequate dietary intake remains inconsistent.</span><br />
                                    <span style={{ color: '#DC2626', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise according to health history, medicines, dietary intake and applicable professional guidance.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#DC2626', fontWeight: 700 }}>+</span>
                                    <strong>Myo-Inositol</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Myo-inositol has been studied in selected reproductive and metabolic settings. Some outcomes may improve, but the evidence remains limited and uncertain, and no single formulation or dose is established for everyone.</span><br />
                                    <span style={{ color: '#DC2626', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Study protocols vary; individual circumstances and treatment goals should be reviewed with an appropriately qualified health professional.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#DC2626', fontWeight: 700 }}>+</span>
                                    <strong>Cinnamon Extract</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Cinnamon extracts have been examined for glycaemic markers in small clinical trials. Results across studies are variable, and extracts should not be relied upon to manage elevated blood glucose.</span><br />
                                    <span style={{ color: '#DC2626', fontSize: '0.88rem', fontWeight: 600, fontStyle: 'italic' }}>Dose: Individualise according to health history, medicines, dietary intake and applicable professional guidance.</span>
                                </li>
                            </ul>
                        </div>

                        <div style={{
                            background: 'rgba(255, 152, 0, 0.1)',
                            borderLeft: '4px solid #FF9800',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            fontSize: '0.95rem',
                            color: 'var(--color-text)'
                        }}>
                            <strong>Note:</strong> If you have been told that you have insulin resistance or abnormal glucose results, discuss appropriate assessment, monitoring and treatment with your healthcare team before considering supplements. Do not change prescribed treatment on the basis of this page.
                        </div>

                        <div style={{
                            marginTop: '2rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid rgba(220, 38, 38, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            <h4 style={{ color: '#DC2626', fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Deep Dive:</h4>
                            <Link href="/insulin-story" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: '500' }}>→ Understand the insulin story</Link>
                            <Link href="/blog/23" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: '500' }}>→ Read: The Test Your Doctor Isn't Ordering (HOMA-IR)</Link>
                            <Link href="/diagnostics" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: '500' }}>→ Track your progress with these labs</Link>
                        </div>
                    </div>

                </div>
            </section>

            {/* Timing & Deployment Section */}
            <section style={{
                padding: '0 0 8rem',
                position: 'relative',
                zIndex: 2,
                background: 'var(--color-bg)'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    <div style={{
                        textAlign: 'center',
                        marginBottom: '4rem'
                    }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 800,
                            color: 'var(--color-text)',
                            marginBottom: '1rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontFamily: '"Manrope", sans-serif'
                        }}>
                            CLINICAL IMPLEMENTATION
                        </h2>
                        <p style={{
                            color: 'var(--color-accent-teal)',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            fontSize: '0.9rem'
                        }}>
                            Timing & Dosage Matters
                        </p>
                    </div>

                    <div style={{
                        background: 'var(--color-bg-alt)',
                        border: '1px solid rgba(255, 95, 0, 0.2)',
                        padding: '3rem',
                        borderRadius: '16px',
                        marginBottom: '4rem'
                    }}>
                        <h3 style={{
                            color: 'var(--color-accent-orange)',
                            fontSize: '1.25rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            fontWeight: 800
                        }}>
                            <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                            PRACTICAL SUPPLEMENT CONSIDERATIONS
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1rem', fontWeight: 700 }}>1. Formulation and Suitability</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    Supplement form can affect absorption, tolerability and convenience, but no single rule applies across all ingredients. Ubiquinol may have higher bioavailability than ubiquinone in some studies, while age alone does not make ubiquinone ineffective. Common MTHFR variants do not by themselves establish a need for methylated B-vitamin supplements. Consider the evidence, total dose, formulation, health history and medicines together.
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1rem', fontWeight: 700 }}>2. Ingredient Transparency</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    Proprietary blends may state a total blend amount without disclosing the amount of each ingredient. This can make it difficult to compare a product with relevant research or assess whether individual ingredient amounts are appropriate. Prefer labels that clearly identify each ingredient and amount, while recognising that transparent labelling alone does not establish efficacy or quality.
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1rem', fontWeight: 700 }}>3. Timing and Administration</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    Administration can affect absorption or tolerability for some supplements. Taking fat-soluble vitamins and compounds such as CoQ10 with a meal containing dietary fat may support absorption. Magnesium timing can be chosen according to formulation, purpose and tolerance. Rhodiola and other botanical products should be used according to product directions and individual tolerance. Potential medicine interactions should be checked where relevant. Timing is one consideration and does not replace evidence, appropriate dosing or individual suitability.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FAQSection data={faqData} />

            {/* Final CTA */}
            <section style={{
                padding: '6rem 2rem',
                textAlign: 'center',
                marginTop: '4rem'
            }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--color-text)' }}>
                    Ready to Upgrade Your Biology?
                </h2>
                <Link href="/shop" style={{
                    display: 'inline-block',
                    padding: '1.2rem 3rem',
                    background: 'var(--color-accent-teal)',
                    color: '#FFFFFF',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(32, 178, 170, 0.3)',
                    transition: 'all 0.2s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(32, 178, 170, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(32, 178, 170, 0.3)';
                    }}
                >
                    EXPLORE OPTIONS
                </Link>
            </section>

            
        </div>
    );
};

export default Protocol;
