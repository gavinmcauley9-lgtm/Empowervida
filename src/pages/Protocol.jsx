"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';

const Protocol = () => {
    const { hash } = usePathname();

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
            answer: "A longevity protocol is a physician-designed supplement regimen targeting specific biological pathways of ageing. Unlike random supplementation, protocols combine synergistic compounds with precise dosing and timing to address root causes: mitochondrial dysfunction, inflammation, insulin resistance, and cellular senescence."
        },
        {
            question: "Which protocol should I start with?",
            answer: "Start with your primary health goal: Foundational Longevity (overall anti-ageing), Metabolic Health (insulin resistance/weight), Energy/Vitality (fatigue/mitochondria), Brain Fog/Clarity (cognition/focus), or Neurolongevity (brain ageing prevention). Most people benefit from the Longevity Stack as a foundation, then adding targeted protocols."
        },
        {
            question: "Can I combine multiple protocols?",
            answer: "Yes. Protocols are designed to stack synergistically. Start with your primary protocol for 30 days, then add a second. Avoid combining more than 2-3 protocols initially. Common combinations: Longevity + Metabolic, Vitality + Clarity, or Neurolongevity + Longevity."
        },
        {
            question: "How long before I see results from a longevity protocol?",
            answer: "Timeline varies by protocol: Energy/cognitive changes (2-4 weeks), metabolic improvements (4-8 weeks), longevity biomarkers (8-12 weeks). NAD+ precursors work quickly (days), while mitochondrial biogenesis takes months. Consistency is key - these are marathon interventions, not quick fixes."
        },
        {
            question: "Are these protocols safe to take long-term?",
            answer: "Yes. All protocols use evidence-based compounds with established safety profiles for long-term use. We prioritize nutrients and compounds your body naturally produces (NAD+, CoQ10, creatine) that decline with age. As with any supplement regimen, consult your physician, especially if you have medical conditions or take medications."
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
            <SEO
                title="The 7 Master Protocols - Clinical Longevity Stack | EMPOWERVIDA"
                description="Physician-designed supplement protocols for longevity, brain health, energy, gut repair, sleep, and metabolic health. Evidence-based stacks with exact dosing."
                keywords="longevity supplement protocol, brain fog supplements, gut health protocol, sleep supplements, metabolic health, insulin sensitivity, mitochondrial support"
                canonical="/protocol"
                ogImage="/protocol_hero_fire_v2.jpg"
                schemaData={[breadcrumbSchema, faqSchema]}
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
                    Over 16 years across the ER, hospital medicine, and General Practice, I managed acute failure. In longevity medicine, we build chronic capacity. I have designed <strong style={{ color: 'var(--color-accent-teal)' }}>seven distinct protocols</strong> targeting the primary pillars of human performance: Longevity, Brain Health, Neurolongevity, Energy, Gut Health, Sleep, and Metabolic Optimisation. <strong>Yes, there is overlap, that's biology.</strong> Choose your primary target, then layer as needed.
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
                            Genomic stability, cellular resilience, daily non-negotiables
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            The chassis. Without a stable genomic and metabolic foundation, high-performance interventions fail. This is your biological insurance policy: the supplements everyone should take, regardless of specific goals.
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
                                    <strong>Vitamin D3 (5,000 IU) + K2 (MK-7, 100mcg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Controls 5% of your genome. K2 directs calcium to bones, not arteries.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', fontWeight: 700 }}>+</span>
                                    <strong>GlyNAC Complex (Glycine 2g + NAC 1.2g)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Restores glutathione, the master antioxidant. Research suggests it may help improve markers associated with ageing.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', fontWeight: 700 }}>+</span>
                                    <strong>Methylated B-Complex</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Supports methylation pathways critical for DNA repair and neurotransmitter synthesis.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', fontWeight: 700 }}>+</span>
                                    <strong>Omega-3 (EPA/DHA 2-3g daily)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Membrane fluidity, anti-inflammatory, cardiovascular protection.</span>
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
                            Acute cognitive enhancement, focus, processing speed
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            The structural and software upgrade. This stack targets neurotransmitter synthesis, repairs synaptic density, and eliminates metabolic bottlenecks. For when you need to think sharper today, while rebuilding the physical pathways for tomorrow.
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
                                    <strong>Creatine Monohydrate (5g)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Brain ATP buffer. Proven to improve working memory and reduce mental fatigue.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>CDP-Choline / Citicoline (250-500mg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Acetylcholine synthesis for memory and learning. Crosses blood-brain barrier.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>Magnesium L-Threonate (2g)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>The only form proven to cross the blood-brain barrier. Addresses structural brain fog by supporting physical synaptic density.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>Methylated B-Complex (with 5-MTHF)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Crucial for anyone with MTHFR mutations (~50% of people). Bypasses genetic bottlenecks to synthesize dopamine and serotonin.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>Rhodiola Rosea (300-500mg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Adaptogen. Raises threshold for stress-induced cognitive decline. Take morning, empty stomach.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#008080', fontWeight: 700 }}>+</span>
                                    <strong>L-Theanine (200mg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Calm focus. Pairs with caffeine to smooth out jitters while maintaining alertness.</span>
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
                            NEUROLONGEVITY
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            color: '#667eea',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Long-term brain preservation, dementia prevention
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            The structural rebuild. Not for today's meeting, for your brain at 80. This protocol targets brain-derived neurotrophic factor (BDNF), neuroplasticity, and protection against amyloid/tau accumulation.
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
                                    <strong>Magnesium L-Threonate (2g)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Only form that crosses blood-brain barrier to increase brain magnesium. Boosts BDNF.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 700 }}>+</span>
                                    <strong>High-DHA Omega-3 (2g DHA minimum)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Brain is 60% fat. DHA is structural component of neurons. Anti-inflammatory.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 700 }}>+</span>
                                    <strong>Lions Mane Mushroom (1g)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Stimulates nerve growth factor (NGF). Promotes neurogenesis and myelin repair.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#667eea', fontWeight: 700 }}>+</span>
                                    <strong>Curcumin (500mg, 2x daily with black pepper)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Crosses blood-brain barrier. Reduces amyloid plaque formation. Potent anti-inflammatory.</span>
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
                            <strong>Note:</strong> This protocol overlaps with Clarity (both use Creatine, Omega-3). The distinction: Clarity = acute performance. Neurolongevity = structural preservation over decades.
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
                            <Link href="/blog/28" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Read: Can You Take Creatine and NAD+ Together?</Link>
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
                            Mitochondrial ATP synthesis, electron transport chain optimisation
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            The engine block. This stack targets the root of cellular energy production. Your mitochondria. For when you're done with caffeine band-aids and ready to fix the power plant.
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
                                    <strong>CoQ10 (Ubiquinol 200mg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Electron carrier in the mitochondrial membrane. Must be Ubiquinol (active form) if over 40.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF5F00', fontWeight: 700 }}>+</span>
                                    <strong>Acetyl-L-Carnitine (1g)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Shuttles fatty acids into mitochondria for beta-oxidation. Acetyl form crosses blood-brain barrier.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF5F00', fontWeight: 700 }}>+</span>
                                    <strong>PQQ (20mg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Triggers mitochondrial biogenesis. Builds NEW power plants. Use BioPQQ® (natural fermentation).</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF5F00', fontWeight: 700 }}>+</span>
                                    <strong>Alpha-Lipoic Acid (R-ALA 300-600mg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Universal antioxidant. Recycles vitamins C & E. Improves glucose uptake. Must be R-ALA (active form).</span>
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
                            GUT HEALTH: THE BARRIER
                        </h2>

                        <p style={{
                            fontSize: '1.2rem',
                            color: '#FF6B6B',
                            fontWeight: 700,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            Intestinal barrier repair, systemic inflammation control
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            The firewall. Your gut lining is ONE CELL THICK. When it breaks, bacterial toxins flood your bloodstream, triggering anxiety, joint pain, brain fog, and chronic fatigue. This protocol seals the barrier and extinguishes systemic inflammation.
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
                            <strong>⚠️ Critical:</strong> Supplements alone will NOT fix a broken gut if you're still eating inflammatory foods, taking NSAIDs daily, or living in chronic stress. <strong>Diet and lifestyle are non-negotiable foundations.</strong> These supplements accelerate repair. They don't replace discipline.
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
                                    <strong>L-Glutamine (5g, 2x daily)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Primary fuel for intestinal cells. Repairs tight junctions. Clinical trials show reduced permeability.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>Zinc Carnosine (75mg daily)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Directly heals gut lining. Used in Japan for gastric ulcers for decades.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>Collagen Peptides (10-20g daily)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Provides glycine and proline, building blocks for tissue repair.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>Curcumin (500mg, 2x daily with black pepper)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>NF-κB inhibitor. Blocks the master switch of inflammation.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>Omega-3 (EPA/DHA 2-3g daily)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Competes with inflammatory omega-6. Reduces IL-6 and TNF-alpha cytokine production.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#FF6B6B', fontWeight: 700 }}>+</span>
                                    <strong>Spore-Based Probiotics (Bacillus subtilis, B. coagulans)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Survive stomach acid. Recolonize gut. Produce anti-inflammatory compounds.</span>
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
                            <strong>Timeline:</strong> 8-12 weeks for barrier repair. 3-6 months for full symptom resolution of systemic inflammation.
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
                            Glymphatic activation, deep sleep architecture, waste clearance
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            The dishwasher. Your brain accumulates metabolic waste (amyloid beta, tau proteins) all day. The glymphatic system ONLY activates during deep Non-REM sleep to flush this sewage. Poor sleep = toxic brain = brain fog. This protocol optimises sleep architecture for maximum waste clearance.
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
                                    <strong>Magnesium Bisglycinate (400mg elemental)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Activates GABA receptors (brain's brake pedal). Superior absorption vs. oxide/citrate. Take 30-60 min before bed.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#764ba2', fontWeight: 700 }}>+</span>
                                    <strong>Glycine (3g powder)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Lowers core body temperature by dilating extremity blood vessels, critical signal for deep sleep onset.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#764ba2', fontWeight: 700 }}>+</span>
                                    <strong>Apigenin (50mg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Flavonoid from chamomile. Binds to benzodiazepine receptors without addiction risk.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#764ba2', fontWeight: 700 }}>+</span>
                                    <strong>L-Theanine (200mg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Crosses blood-brain barrier. Increases alpha waves. Calms without sedation.</span>
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
                            <strong>Mechanical Hack:</strong> Sleep on your side (lateral decubitus position). Research shows glymphatic flow is 2x more efficient on your side vs. back/stomach. Gravity matters.
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
                            Insulin sensitivity, glucose disposal, mitochondrial efficiency
                        </p>

                        <p style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            lineHeight: 1.6
                        }}>
                            The overflow prevention system. Insulin resistance is the root of accelerated ageing, hyperinsulinemia damages everything from your brain to your arteries. This protocol targets AMPK activation, insulin signaling, and cellular glucose uptake. Critical if you have pre-diabetes, metabolic syndrome, or a family history of Type 2 diabetes.
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
                                    <strong>Berberine (500mg, 2-3x daily with meals)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>AMPK activator. Some studies suggest comparable effects to Metformin for glucose control. Take with food.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#DC2626', fontWeight: 700 }}>+</span>
                                    <strong>Alpha-Lipoic Acid (R-ALA 300-600mg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Improves insulin-mediated glucose uptake. Recycles antioxidants. Must be R-ALA (active isomer).</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#DC2626', fontWeight: 700 }}>+</span>
                                    <strong>Chromium Picolinate (200-400mcg)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Enhances insulin receptor signaling. Reduces cravings. Picolinate form has best absorption.</span>
                                </li>
                                <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#DC2626', fontWeight: 700 }}>+</span>
                                    <strong>Myo-Inositol (2g daily)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Second messenger for insulin signaling. Proven effective in PCOS and metabolic syndrome.</span>
                                </li>
                                <li style={{ marginBottom: '0', paddingLeft: '2rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: '#DC2626', fontWeight: 700 }}>+</span>
                                    <strong>Cinnamon Extract (500mg Ceylon cinnamon)</strong><br />
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>Improves insulin sensitivity. Must be Ceylon (not Cassia, high coumarin content).</span>
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
                            <strong>Note:</strong> This protocol has significant overlap with Energy/Vitality (ALA appears in both). The distinction: Metabolic Health targets glucose/insulin pathways. Energy targets ATP production. If you have insulin resistance, prioritize this stack.
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
                            <Link href="/insulin-story" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Understand the insulin story</Link>
                            <Link href="/blog/23" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Read: The Test Your Doctor Isn't Ordering (HOMA-IR)</Link>
                            <Link href="/diagnostics" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 500 }}>→ Track your progress with these labs</Link>
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
                            WHY MOST SUPPLEMENTS FAIL
                        </h3>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1rem', fontWeight: 700 }}>1. Wrong Forms</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    Magnesium Oxide = 4% absorption. CoQ10 as Ubiquinone is useless over 40. Methylated B vitamins matter if you have MTHFR mutations. <strong>Form {'>'} {'>'} {'>'} Dose.</strong>
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1rem', fontWeight: 700 }}>2. Proprietary Blends</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    If a label says "Mitochondrial Blend 500mg" but doesn't list exact milligrams of each ingredient, it's a scam. Demand transparency.
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1rem', fontWeight: 700 }}>3. Bad Timing</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    Fat-soluble vitamins (D, K, CoQ10) need dietary fat. Magnesium before bed. Rhodiola on empty stomach. Timing matters.
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
                    GET THE FULL STACK
                </Link>
            </section>

            <Footer />
        </div>
    );
};

export default Protocol;
