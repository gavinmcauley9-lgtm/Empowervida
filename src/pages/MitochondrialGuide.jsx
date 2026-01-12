import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import MitochondrialDiagram from '../components/MitochondrialDiagram';

const MitochondrialGuide = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // FAQ Schema for Rich Snippets
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What are mitochondria and why are they important?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Mitochondria are the powerhouses of your cells, responsible for producing ATP (cellular energy). They determine your energy levels, cognitive function, athletic performance, and rate of ageing. Healthy mitochondria mean vibrant energy, sharp focus, and resilient cells. Dysfunctional mitochondria lead to chronic fatigue, brain fog, accelerated ageing, and metabolic disease."
                }
            },
            {
                "@type": "Question",
                "name": "How do I improve mitochondrial function?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The three-pillar approach: 1) FUEL with NAD+ precursors (NMN/NR), CoQ10 (ubiquinol form), and creatine. 2) PROTECT with PQQ, curcumin, and alpha-lipoic acid to reduce oxidative stress. 3) REBUILD with urolithin A (mitophagy activator), resveratrol, and strength training to stimulate mitochondrial biogenesis."
                }
            },
            {
                "@type": "Question",
                "name": "What supplements are best for mitochondrial health?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Evidence-based core stack: CoQ10 (ubiquinol 100-200mg daily), ALCAR (1-2g daily), PQQ (10-20mg daily), Alpha-Lipoic Acid (300-600mg daily), NAD+ precursors (NMN 250-500mg or NR 300-500mg), and Creatine Monohydrate (5g daily). These work synergistically to fuel, protect, and rebuild mitochondria."
                }
            },
            {
                "@type": "Question",
                "name": "What are signs of poor mitochondrial function?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Key indicators include: chronic fatigue despite adequate sleep, brain fog and poor focus, difficulty recovering from exercise, muscle weakness, cold intolerance, metabolic dysfunction (insulin resistance), premature ageing signs, and inability to handle stress. These symptoms suggest your mitochondria aren't producing enough ATP efficiently."
                }
            },
            {
                "@type": "Question",
                "name": "What is NAD+ and why does it decline with age?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NAD+ (nicotinamide adenine dinucleotide) is a critical coenzyme for mitochondrial energy production. It declines 50% by age 40 due to increased consumption by DNA repair enzymes and inflammation. This decline directly impairs mitochondrial function and cellular energy. Supplementing with NAD+ precursors (NMN or NR) can restore levels and improve energy, cognition, and metabolic health."
                }
            }
        ]
    };

    return (
        <>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>The Ultimate Guide to Mitochondrial Health: Stop Borrowing Energy, Start Creating It | EMPOWERVIDA</title>
                <meta name="title" content="The Ultimate Guide to Mitochondrial Health: Stop Borrowing Energy, Start Creating It" />
                <meta name="description" content="ER physician reveals how to optimise mitochondrial health. Stop brain fog and chronic fatigue with evidence-based supplements, dosing, and timing protocols." />
                <meta name="keywords" content="mitochondrial health, NAD+, cellular energy, ATP production, nootropics, longevity supplements, anti-ageing, brain fog, chronic fatigue, urolithin a, PQQ, creatine, physician protocol" />
                <meta name="author" content="Dr. Gavin McAuley" />
                <link rel="canonical" href="https://empowervida.com/mitochondrial-guide" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://empowervida.com/mitochondrial-guide" />
                <meta property="og:title" content="The Ultimate Guide to Mitochondrial Health | EMPOWERVIDA" />
                <meta property="og:description" content="A physician's evidence-based protocol for reviving your cellular engines. Stop brain fog and chronic fatigue with the right supplements, dosages, and timing." />
                <meta property="og:image" content="https://empowervida.com/mitochondrion_hero_cinematic_1764586685814.png" />
                <meta property="og:site_name" content="EMPOWERVIDA" />
                <meta property="article:author" content="Dr. Gavin McAuley" />
                <meta property="article:section" content="Longevity & Health" />
                <meta property="article:tag" content="Mitochondrial Health" />
                <meta property="article:tag" content="Supplements" />
                <meta property="article:tag" content="Longevity" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://empowervida.com/mitochondrial-guide" />
                <meta property="twitter:title" content="The Ultimate Guide to Mitochondrial Health | EMPOWERVIDA" />
                <meta property="twitter:description" content="A physician's evidence-based protocol for reviving your cellular engines. Stop brain fog and chronic fatigue." />
                <meta property="twitter:image" content="https://empowervida.com/mitochondrion_hero_cinematic_1764586685814.png" />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalWebPage",
                        "headline": "The Ultimate Guide to Mitochondrial Health: Stop Borrowing Energy, Start Creating It",
                        "description": "A physician's evidence-based protocol for reviving your cellular engines with supplements for mitochondrial health.",
                        "author": {
                            "@type": "Person",
                            "name": "Dr. Gavin McAuley",
                            "jobTitle": "Physician",
                            "description": "The Longevity Architect"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "EMPOWERVIDA",
                            "url": "https://empowervida.com"
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://empowervida.com/mitochondrial-guide"
                        },
                        "image": "https://empowervida.com/mitochondrion_hero_cinematic_1764586685814.png",
                        "datePublished": "2025-12-01",
                        "dateModified": "2025-12-01",
                        "specialty": "Longevity Medicine",
                        "about": {
                            "@type": "MedicalCondition",
                            "name": "Mitochondrial Dysfunction"
                        }
                    })}
                </script>

                {/* FAQ Schema for Rich Snippets */}
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>

            {/* Hero Section */}
            <HeroSection
                backgroundImage="/mitochondrion_hero_cinematic_1764586685814.png"
                title="THE MITOCHONDRIAL GUIDE"
                subtitle="THE ENGINE EVERYONE FORGETS: AS VITAL AS YOUR HEART"
                overlay="linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.75) 100%)"
                textColor="#FFFFFF"
                subtitleColor="#FFFFFF"
            >
                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    opacity: 0.95,
                    color: '#FFFFFF',
                    textShadow: '0 2px 15px rgba(0,0,0,0.9)'
                }}>
                    A Physician's Protocol for Cellular Revival
                </p>
                <p style={{
                    fontSize: '1rem',
                    marginTop: '1rem',
                    opacity: 0.85,
                    color: '#FFFFFF',
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                }}>
                    By Dr. Gavin | The Longevity Architect
                </p>
            </HeroSection>            {/* Introduction Section */}
            < section style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '4rem 2rem',
                color: 'var(--color-text)',
                fontSize: '1.1rem',
                lineHeight: 1.8
            }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    Everyone knows the heart is the body's engine. But there's another engine—trillions of them, actually—so vital that if they stopped working, <strong>you would die immediately</strong>.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                    Your <strong>mitochondria</strong>. The microscopic power plants inside nearly every cell in your body.
                </p>

                <div style={{
                    background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.1) 0%, rgba(32, 178, 170, 0.05) 100%)',
                    borderLeft: '4px solid var(--color-accent-teal)',
                    padding: '1.5rem',
                    margin: '2rem 0',
                    borderRadius: '8px'
                }}>
                    <p style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-accent-teal)' }}>
                        As vital as your heart. As overlooked as your breath.
                    </p>
                </div>

                <p style={{ marginBottom: '1.5rem' }}>
                    Fortunately, complete mitochondrial shutdown is rare. But here's what happens every day: they become <strong>knackered, fatigued, overwhelmed</strong>. They don't stop—they just slow down.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                    And when they slow down, <em>you</em> slow down. That 2:00 PM wall? That brain fog? That chronic fatigue? That's not a caffeine deficiency. That's your cellular engines running on fumes.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                    In my practice, high-performing individuals constantly ask me how to fix this. They're drinking four cups of coffee a day, trying to "borrow" energy from tomorrow to get through today.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                    But caffeine is just a neurological trick—it blocks the signals of fatigue, but it doesn't generate fuel. To fix the problem, we have to look deeper. We have to <strong>restart the engines</strong>.
                </p>

                <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    marginTop: '3rem',
                    marginBottom: '1.5rem'
                }}>
                    What Mitochondria Actually Do (Beyond Energy)
                </h3>

                <p style={{ marginBottom: '1.5rem' }}>
                    Most people think mitochondria just make energy. That's like saying the heart just pumps blood. True, but incomplete.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                    margin: '2rem 0'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.08) 0%, rgba(32, 178, 170, 0.03) 100%)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(32, 178, 170, 0.2)'
                    }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                            Energy Production
                        </h4>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                            Generate ATP for every cellular activity—from digestion and cognition to muscle movement.
                        </p>
                    </div>

                    <div style={{
                        background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.08) 0%, rgba(32, 178, 170, 0.03) 100%)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(32, 178, 170, 0.2)'
                    }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🧬</div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                            Cellular Regulation
                        </h4>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                            Manage cell death (apoptosis), calcium levels, hormone production, and immune responses.
                        </p>
                    </div>

                    <div style={{
                        background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.08) 0%, rgba(32, 178, 170, 0.03) 100%)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                        border: '1px solid rgba(32, 178, 170, 0.2)'
                    }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛡️</div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                            Antioxidant Defense
                        </h4>
                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', margin: 0 }}>
                            Neutralize harmful free radicals, protecting cells from oxidative stress and ageing.
                        </p>
                    </div>
                </div>

                <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    color: '#FF5722',
                    marginTop: '3rem',
                    marginBottom: '1.5rem'
                }}>
                    When Mitochondria Fail
                </h3>

                <p style={{ marginBottom: '1.5rem' }}>
                    Mitochondrial dysfunction isn't just about feeling tired. It's a cascade that touches every system in your body:
                </p>

                <ul style={{
                    marginLeft: '1.5rem',
                    marginBottom: '2rem',
                    lineHeight: 1.8
                }}>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Metabolic Collapse:</strong> Insulin resistance, obesity, Type 2 Diabetes
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Neurological Decline:</strong> Alzheimer's, Parkinson's, chronic fatigue syndrome (ME/CFS)
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Cardiovascular Disease:</strong> Heart failure, liver dysfunction, muscle weakness
                    </li>
                    <li style={{ marginBottom: '0.75rem' }}>
                        <strong>Accelerated Ageing:</strong> Chronic pain, fatigue, loss of vitality. <Link to="/blog/25" style={{ color: 'var(--color-accent-teal)', textDecoration: 'underline' }}>Learn how to reverse this.</Link>
                    </li>
                </ul>

                <div style={{
                    background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.1) 0%, rgba(255, 87, 34, 0.05) 100%)',
                    borderLeft: '4px solid #FF5722',
                    padding: '1.5rem',
                    margin: '2rem 0',
                    borderRadius: '8px'
                }}>
                    <p style={{ margin: 0, fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--color-text)' }}>
                        "In my clinic, I see patients with 'normal' lab results who feel terrible. Their mitochondria are screaming, but standard medicine isn't listening. This is why mitochondrial health is the new frontier of longevity medicine."
                    </p>
                    <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-muted)', textAlign: 'right' }}>
                        — Dr. Gavin
                    </p>
                </div>

                <div style={{
                    background: 'var(--color-bg-secondary)',
                    padding: '2rem',
                    borderRadius: '12px',
                    borderLeft: '4px solid var(--color-accent-teal)',
                    margin: '3rem 0'
                }}>
                    <p style={{ marginBottom: '1rem', fontSize: '1.2rem', fontWeight: 600 }}>
                        This is not another generic list of vitamins.
                    </p>
                    <p style={{ marginBottom: '1rem' }}>
                        This is a comprehensive, clinically-structured guide to the specific compounds that actively support mitochondrial function. We will organize them not alphabetically, but by <strong>function</strong>:
                    </p>
                    <ul style={{ marginLeft: '2rem', marginBottom: '1rem' }}>
                        <li><strong>The Fuel:</strong> Compounds that help the engine run efficiently.</li>
                        <li><strong>The Armor:</strong> Antioxidants that protect the engine from overheating.</li>
                        <li><strong>The Renovation:</strong> Advanced molecules that repair old mitochondria and build new ones.</li>
                    </ul>
                    <p>
                        We will also cover the uncomfortable truth: why many of the supplements you see on shelves are biologically dead, overpriced fakes—and how to ensure you are getting the physician-grade compounds that actually work.
                    </p>
                </div>

                <p style={{
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: 'var(--color-accent-teal)',
                    textAlign: 'center',
                    marginTop: '3rem'
                }}>
                    Let's restart the engines.
                </p>
            </section >

            {/* Mitochondrial Supplement Map */}
            <section style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: 'var(--color-text)'
                }}>
                    The Mitochondrial Supplement Map
                </h2>
                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--color-text-muted)',
                    marginBottom: '3rem',
                    maxWidth: '800px',
                    margin: '0 auto 3rem'
                }}>
                    Explore how each supplement supports your cellular powerhouses
                </p>
                <MitochondrialDiagram />
            </section>

            {/* Phase 2: The Armor */}
            < section style={{
                background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '6rem 2rem'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            Phase 2: The Armor
                        </h2>
                        <h3 style={{
                            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                            fontWeight: 400,
                            color: '#2E7D32',
                            marginBottom: '2rem'
                        }}>
                            Manageing Oxidative Stress & Inflammation
                        </h3>
                    </div>

                    {/* Intro Copy */}
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto 4rem',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: 'var(--color-text)'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            A high-performance engine produces exhaust. Your mitochondria are no different. As they burn fuel to create energy, they release toxic byproducts called <strong>Free Radicals (ROS)</strong>.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            In small amounts, these are healthy signals for growth. But when they accumulate—due to stress, pollution, or poor diet—they cause <strong>"Oxidative Stress."</strong> This is biological rust. It damages your DNA and kills the mitochondria.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Phase 2 is about the <strong>Antioxidant Defense System</strong>—the coolant that keeps the engine from overheating.
                        </p>
                    </div>

                    {/* Placeholder for Defense Illustration */}
                    <div style={{
                        maxWidth: '900px',
                        margin: '4rem auto',
                        padding: '3rem',
                        background: 'rgba(46, 125, 50, 0.05)',
                        borderRadius: '12px',
                        border: '1px solid rgba(46, 125, 50, 0.2)',
                        textAlign: 'center'
                    }}>
                        <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                            [Antioxidant Defense Illustration: Free radicals attacking cell membrane vs. antioxidant shield neutralizing them]
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '1rem' }}>
                            The Defense System: Antioxidants donate electrons to neutralize free radicals before they can damage cellular DNA.
                        </p>
                    </div>

                    {/* Supplement Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem',
                        marginTop: '4rem'
                    }}>
                        {/* Card 1: Glutathione (NAC) */}
                        <div style={{
                            background: 'var(--color-bg-secondary)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(46, 125, 50, 0.2)'
                        }}>
                            <h4 style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: '#2E7D32'
                            }}>
                                Glutathione (via NAC)
                            </h4>
                            <p style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'var(--color-text-muted)',
                                marginBottom: '1.5rem'
                            }}>
                                The Master Coolant
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>The Mechanism:</p>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    Glutathione is the body's primary endogenous antioxidant. It detoxifies the liver and protects the brain.
                                </p>
                            </div>

                            <div style={{
                                background: 'rgba(32, 178, 170, 0.1)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--color-accent-teal)',
                                marginBottom: '1.5rem'
                            }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>The Physician's Note:</p>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                                    "Most people waste money on plain 'Glutathione' capsules. They are destroyed by stomach acid before they reach your blood. I prescribe <strong>N-Acetyl Cysteine (NAC)</strong> instead. It is the precursor that survives digestion and forces your body to make its own fresh Glutathione."
                                </p>
                            </div>

                            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                                Recommendation: Thorne NAC or Pure Encapsulations NAC
                            </p>
                        </div>

                        {/* Card 2: Alpha Lipoic Acid */}
                        <div style={{
                            background: 'var(--color-bg-secondary)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(46, 125, 50, 0.2)'
                        }}>
                            <h4 style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: '#2E7D32'
                            }}>
                                Alpha Lipoic Acid (ALA)
                            </h4>
                            <p style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'var(--color-text-muted)',
                                marginBottom: '1.5rem'
                            }}>
                                The Universal Shield
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>The Mechanism:</p>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    Most antioxidants work only in water (like Vitamin C) or fat (like Vitamin E). ALA works in both. It can enter every part of the cell, including the brain, to neutralize toxins.
                                </p>
                            </div>

                            <div style={{
                                background: 'rgba(255, 152, 0, 0.1)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                borderLeft: '4px solid #FF9800',
                                marginBottom: '1.5rem'
                            }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem', color: '#FF9800' }}>⚠️ Warning:</p>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                                    "Look at your label. If it just says 'Alpha Lipoic Acid,' it is likely a 50% synthetic mixture (S-ALA) that your body struggles to use. You must look for <strong>Stabilized R-Lipoic Acid (R-ALA)</strong>. This is the biologically active form found in nature."
                                </p>
                            </div>

                            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                                Recommendation: Life Extension Super R-Lipoic Acid
                            </p>
                        </div>

                        {/* Card 3: Vitamin C */}
                        <div style={{
                            background: 'var(--color-bg-secondary)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(46, 125, 50, 0.2)'
                        }}>
                            <h4 style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: '#2E7D32'
                            }}>
                                Vitamin C (The Right Way)
                            </h4>
                            <p style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'var(--color-text-muted)',
                                marginBottom: '1.5rem'
                            }}>
                                The First Responder
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>The Mechanism:</p>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    It acts as the initial scavenger of free radicals in the blood and recycles "used" Vitamin E and Glutathione so they can work again.
                                </p>
                            </div>

                            <div style={{
                                background: 'rgba(32, 178, 170, 0.1)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--color-accent-teal)',
                                marginBottom: '1.5rem'
                            }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>The Physician's Note:</p>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                                    "Timing is everything. Do NOT take high-dose Vitamin C immediately after a workout. The inflammation from exercise is a signal for your muscles to grow. If you blunt it instantly with Vitamin C, you kill the adaptation. Take it in the morning or before bed, away from training."
                                </p>
                            </div>

                            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>
                                Recommendation: Liposomal Vitamin C (for better absorption without stomach upset)
                            </p>
                        </div>
                    </div>

                    {/* CTA Box */}
                    <div style={{
                        maxWidth: '700px',
                        margin: '4rem auto 0',
                        padding: '3rem',
                        background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.1) 0%, rgba(32, 178, 170, 0.1) 100%)',
                        borderRadius: '12px',
                        border: '2px solid #2E7D32',
                        textAlign: 'center'
                    }}>
                        <h3 style={{
                            fontSize: '1.8rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: '#2E7D32'
                        }}>
                            Build Your Defense Stack
                        </h3>
                        <p style={{
                            fontSize: '1.1rem',
                            marginBottom: '2rem',
                            color: 'var(--color-text)'
                        }}>
                            Protect your cells from biological rust.
                        </p>
                        <a
                            href="/protocol#defense-stack"
                            style={{
                                display: 'inline-block',
                                background: '#2E7D32',
                                color: '#FFFFFF',
                                padding: '1rem 2.5rem',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                boxShadow: '0 4px 15px rgba(46, 125, 50, 0.3)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Shop the Defense Kit
                        </a>
                    </div>
                </div>
            </section >

            {/* Phase 3: The Renovation */}
            < section style={{
                background: 'linear-gradient(135deg, rgba(0, 77, 128, 0.08) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '6rem 2rem'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Section Header */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            Phase 3: The Renovation
                        </h2>
                        <h3 style={{
                            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                            fontWeight: 400,
                            color: '#0096C7',
                            marginBottom: '2rem'
                        }}>
                            Repairing DNA & Building New Engines
                        </h3>
                    </div>

                    {/* Intro Copy */}
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto 4rem',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: 'var(--color-text)'
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            You can fuel an engine (Phase 1) and cool it (Phase 2), but eventually, parts wear out. In biology, this is when mitochondria become <strong>"senescent"</strong>—they stop working but refuse to die, pumping out inflammation like a broken exhaust pipe.
                        </p>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Phase 3 is about <strong>Structural Renovation</strong>. We are using advanced molecules to do two things:
                        </p>
                        <ul style={{ marginLeft: '2rem', marginBottom: '1.5rem' }}>
                            <li><strong>Mitophagy:</strong> Recycling the old, broken mitochondria.</li>
                            <li><strong>Biogenesis:</strong> Building brand new, efficient ones from scratch.</li>
                        </ul>
                        <p style={{
                            padding: '1rem',
                            background: 'rgba(255, 152, 0, 0.1)',
                            borderLeft: '4px solid #FF9800',
                            borderRadius: '4px',
                            fontStyle: 'italic'
                        }}>
                            <strong>Note:</strong> This is the most expensive phase of the protocol. It is for those serious about reversing cellular age.
                        </p>
                    </div>

                    {/* Supplement Cards */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '2rem',
                        marginTop: '4rem'
                    }}>
                        {/* Card 1: Urolithin A */}
                        <div style={{
                            background: 'var(--color-bg-secondary)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(0, 150, 199, 0.2)'
                        }}>
                            <h4 style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: '#0096C7'
                            }}>
                                Urolithin A
                            </h4>
                            <p style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'var(--color-text-muted)',
                                marginBottom: '1.5rem'
                            }}>
                                The Recycler / Trash Compactor
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>The Mechanism:</p>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    It triggers Mitophagy. This is the only known molecule that safely forces your cells to identify "zombie" mitochondria, break them down, and recycle their parts into raw energy.
                                </p>
                            </div>

                            <div style={{
                                background: 'rgba(32, 178, 170, 0.1)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--color-accent-teal)',
                                marginBottom: '1.5rem'
                            }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>The Pomegranate Myth:</p>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                                    "You cannot drink enough pomegranate juice to get a clinical dose of Urolithin A. Furthermore, only 40% of humans have the gut bacteria to make it naturally. I only recommend Mitopure® because it bypasses the gut and delivers the direct bioactive molecule."
                                </p>
                            </div>

                            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                Recommendation: Timeline Nutrition (Mitopure)
                            </p>
                            <a href="https://geni.us/urolithin-a" target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-block',
                                background: '#0096C7',
                                color: '#fff',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: 600
                            }}>
                                Check Price
                            </a>
                        </div>

                        {/* Card 2: PQQ */}
                        <div style={{
                            background: 'var(--color-bg-secondary)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(0, 150, 199, 0.2)'
                        }}>
                            <h4 style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: '#0096C7'
                            }}>
                                PQQ
                            </h4>
                            <p style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'var(--color-text-muted)',
                                marginBottom: '1.5rem'
                            }}>
                                The Builder / Construction Crew
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>The Mechanism:</p>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    While Urolithin A cleans up, PQQ (Pyrroloquinoline Quinone) triggers Mitochondrial Biogenesis. It activates the PGC-1α pathway, effectively telling your DNA to print 3D copies of new power plants.
                                </p>
                            </div>

                            <div style={{
                                background: 'rgba(32, 178, 170, 0.1)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--color-accent-teal)',
                                marginBottom: '1.5rem'
                            }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>The Physician's Note:</p>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                                    "PQQ is unstable. Synthetic versions often degrade into useless powder before you even open the bottle. You must look for BioPQQ® (a natural fermentation product) to ensure it is biologically active."
                                </p>
                            </div>

                            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                Recommendation: Jarrow Formulas PQQ
                            </p>
                            <a href="https://geni.us/gZB1H" target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-block',
                                background: '#0096C7',
                                color: '#fff',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: 600
                            }}>
                                Check Price
                            </a>
                        </div>

                        {/* Card 3: NAD+ */}
                        <div style={{
                            background: 'var(--color-bg-secondary)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(0, 150, 199, 0.2)'
                        }}>
                            <h4 style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: '#0096C7'
                            }}>
                                NAD+ Precursor
                            </h4>
                            <p style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: 'var(--color-text-muted)',
                                marginBottom: '1.5rem'
                            }}>
                                The Repair Signal / General Contractor
                            </p>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>The Mechanism:</p>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    NAD+ is required for PARP enzymes to fix broken DNA strands. Without it, genomic damage accumulates.
                                </p>
                            </div>

                            <div style={{
                                background: 'rgba(32, 178, 170, 0.1)',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                borderLeft: '4px solid var(--color-accent-teal)',
                                marginBottom: '1.5rem'
                            }}>
                                <p style={{ fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>The Physician's Note:</p>
                                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                                    "I do not recommend NMN currently due to FDA regulatory flux. The safest, most clinically-validated route is Nicotinamide Riboside (NR). It is FDA-notified and proven to enter human cells safely."
                                </p>
                            </div>

                            <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                Recommendation: Tru Niagen (300mg)
                            </p>
                            <a href="https://geni.us/v8Dd0" target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-block',
                                background: '#0096C7',
                                color: '#fff',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: 600
                            }}>
                                Check Price
                            </a>
                        </div>

                        {/* Card 4: Bio-Fisetin */}
                        <div style={{
                            background: 'var(--color-bg-secondary)',
                            padding: '2rem',
                            borderRadius: '12px',
                            border: '1px solid rgba(0, 150, 199, 0.2)'
                        }}>
                            <h4 style={{
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                marginBottom: '0.5rem',
                                color: '#0096C7'
                            }}>
                                Bio-Fisetin (Senolytic)
                            </h4>
                            <p style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: '#FF5722',
                                marginBottom: '1rem'
                            }}>
                                The Cleanup Crew
                            </p>
                            <p style={{
                                fontSize: '1rem',
                                lineHeight: 1.7,
                                color: 'var(--color-text)',
                                marginBottom: '1rem'
                            }}>
                                When mitochondria fail, they don't always die gracefully. Many become <strong>senescent</strong>—refusing to trigger apoptosis but pumping out damageing ROS and inflammatory signals.
                            </p>
                            <p style={{
                                fontSize: '1rem',
                                lineHeight: 1.7,
                                color: 'var(--color-text)',
                                marginBottom: '1rem'
                            }}>
                                Bio-Fisetin selectively targets these "zombie mitochondria" for destruction, making room for fresh, efficient ones.
                            </p>
                            <div style={{
                                background: 'rgba(0, 150, 199, 0.1)',
                                borderLeft: '3px solid #0096C7',
                                padding: '1rem',
                                margin: '1.5rem 0',
                                borderRadius: '4px'
                            }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6,
                                    fontWeight: 600,
                                    color: '#0096C7'
                                }}>
                                    The Physician's Note:
                                </p>
                                <p style={{
                                    margin: '0.5rem 0 0 0',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.6
                                }}>
                                    In a 2018 Mayo Clinic study, Fisetin showed the <strong>strongest senolytic effect</strong> of 10 tested flavonoids. The key is using Bio-Fisetin (liposomal form) to ensure it actually enters your cells. Regular Fisetin supplements are mostly wasted in your gut.
                                </p>
                            </div>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--color-text-muted)',
                                marginBottom: '0.5rem'
                            }}>
                                <strong>Dosing:</strong> 100-200mg daily, OR 1,000mg pulsed dosing (2 days/month)
                            </p>
                            <p style={{
                                fontSize: '0.9rem',
                                color: 'var(--color-text-muted)',
                                marginBottom: '1.5rem'
                            }}>
                                <strong>Form:</strong> Liposomal Bio-Fisetin (25x better absorption)
                            </p>
                            <a href="https://amzn.to/3B0z7Qx" target="_blank" rel="noopener noreferrer" style={{
                                display: 'inline-block',
                                background: '#0096C7',
                                color: '#fff',
                                padding: '0.75rem 1.5rem',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontSize: '0.9rem',
                                fontWeight: 600
                            }}>
                                Check Price
                            </a>
                        </div>
                    </div>
                </div>
            </section >

            {/* Phase 4: The Pitfalls */}
            < section style={{
                background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '6rem 2rem'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: '#FF5722'
                        }}>
                            The "Expensive Urine" Check
                        </h2>
                        <h3 style={{
                            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                            fontWeight: 400,
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem'
                        }}>
                            Don't buy dead molecules. If your bottle doesn't meet these standards, throw it out.
                        </h3>
                    </div>

                    {/* Warning Table */}
                    <div style={{
                        maxWidth: '1000px',
                        margin: '0 auto',
                        background: 'var(--color-bg-secondary)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '2px solid #FF9800'
                    }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ background: '#FF5722', color: '#fff' }}>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>Supplement</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>The Common Scam</th>
                                    <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>The Physician's Standard</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    {
                                        supplement: 'CoQ10',
                                        scam: 'Sold as "Ubiquinone" (crystalline powder). Absorbs like a brick.',
                                        standard: 'Must be "Ubiquinol" (Kaneka). 3-8x better absorption.'
                                    },
                                    {
                                        supplement: 'Magnesium',
                                        scam: 'Sold as "Oxide." It is just chalk. It causes diarrhea, not energy.',
                                        standard: 'Must be "Malate" or "Glycinate." Bound to organic acids.'
                                    },
                                    {
                                        supplement: 'Glutathione',
                                        scam: 'Sold as plain Glutathione. Destroyed by stomach acid instantly.',
                                        standard: 'Must be "NAC" or "Liposomal." Precursors survive digestion.'
                                    },
                                    {
                                        supplement: 'Vitamin C',
                                        scam: 'Taken immediately post-workout. Blunts your exercise gains.',
                                        standard: 'Timing matters. Take it 4 hours away from training.'
                                    },
                                    {
                                        supplement: 'B-Vitamins',
                                        scam: 'Sold as "Folic Acid" or "Cyanocobalamin." Hard to process.',
                                        standard: 'Must be "Methylated." (Methylfolate/Methylcobalamin).'
                                    }
                                ].map((row, idx) => (
                                    <tr key={idx} style={{
                                        borderBottom: '1px solid rgba(255, 152, 0, 0.2)',
                                        background: idx % 2 === 0 ? 'transparent' : 'rgba(255, 152, 0, 0.03)'
                                    }}>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: '#FF9800' }}>{row.supplement}</td>
                                        <td style={{ padding: '1.5rem', fontSize: '0.9rem', color: '#FF5722' }}>{row.scam}</td>
                                        <td style={{ padding: '1.5rem', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-accent-teal)' }}>{row.standard}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section >

            {/* Phase 5: Daily Protocol */}
            < section style={{
                background: 'var(--color-bg)',
                padding: '6rem 2rem'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            Putting It All Together
                        </h2>
                        <h3 style={{
                            fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                            fontWeight: 400,
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem'
                        }}>
                            Your 24-Hour Cellular Schedule
                        </h3>
                    </div>

                    {/* Morning Stack */}
                    <div style={{
                        background: 'var(--color-bg-secondary)',
                        padding: '2rem',
                        borderRadius: '12px',
                        marginBottom: '2rem',
                        borderLeft: '4px solid #FFB300'
                    }}>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#FFB300' }}>
                            The Morning Stack (Ignition)
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            Goal: Wake up the brain & engines
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Creatine Monohydrate (5g) - in water/coffee', 'B-Complex (Methylated) (1 cap)', 'PQQ (20mg)', 'ALCAR (500mg)'].map((item, idx) => (
                                <li key={idx} style={{ padding: '0.75rem 0', fontSize: '1rem', borderBottom: '1px solid rgba(255, 179, 0, 0.1)' }}>
                                    ☐ {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pre-Lunch Stack */}
                    <div style={{
                        background: 'var(--color-bg-secondary)',
                        padding: '2rem',
                        borderRadius: '12px',
                        marginBottom: '2rem',
                        borderLeft: '4px solid var(--color-accent-teal)'
                    }}>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-accent-teal)' }}>
                            The Pre-Lunch / Focus Stack
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            Goal: Prevent the 2 PM crash
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Citicoline (250mg)', 'Rhodiola Rosea (1-2 caps)', 'NAD+ / Tru Niagen (300mg)'].map((item, idx) => (
                                <li key={idx} style={{ padding: '0.75rem 0', fontSize: '1rem', borderBottom: '1px solid rgba(32, 178, 170, 0.1)' }}>
                                    ☐ {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Evening Stack */}
                    <div style={{
                        background: 'var(--color-bg-secondary)',
                        padding: '2rem',
                        borderRadius: '12px',
                        marginBottom: '2rem',
                        borderLeft: '4px solid #7B1FA2'
                    }}>
                        <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: '#7B1FA2' }}>
                            The Evening / Repair Stack
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                            Goal: Cool down & Restore
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {['Magnesium Malate (400mg) - 1 hour before bed', 'Urolithin A / Mitopure (500mg)', 'Ubiquinol CoQ10 (100mg) - Take with dinner (fat soluble)'].map((item, idx) => (
                                <li key={idx} style={{ padding: '0.75rem 0', fontSize: '1rem', borderBottom: '1px solid rgba(123, 31, 162, 0.1)' }}>
                                    ☐ {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section >

            {/* Commercial Footer */}
            < section style={{
                background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.1) 0%, rgba(0, 150, 199, 0.1) 100%)',
                padding: '4rem 2rem',
                borderTop: '2px solid var(--color-accent-teal)'
            }}>
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    padding: '3rem',
                    background: 'var(--color-bg-secondary)',
                    borderRadius: '12px',
                    border: '2px solid var(--color-accent-teal)'
                }}>
                    <h3 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-accent-teal)' }}>
                        Too Many Bottles?
                    </h3>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                        Start with the Essentials. We have curated the <strong>"Executive Focus Bundle"</strong> containing just the top 3 impact players: Creatine, Citicoline, and Rhodiola.
                    </p>
                    <a
                        href="/shop"
                        style={{
                            display: 'inline-block',
                            background: 'var(--color-accent-teal)',
                            color: '#FFFFFF',
                            padding: '1.25rem 3rem',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            boxShadow: '0 6px 20px rgba(32, 178, 170, 0.4)',
                            transition: 'all 0.3s ease'
                        }}
                    >
                        Shop the Executive Bundle
                    </a>
                </div>
            </section >
        </>
    );
};

export default MitochondrialGuide;
