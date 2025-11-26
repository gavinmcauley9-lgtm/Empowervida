import React from 'react';
import { motion } from 'framer-motion';

const Diagnostics = () => {
    const essentialMarkers = [
        {
            name: "ApoB",
            truth: "The single most accurate predictor of cardiovascular risk.",
            target: "< 60 mg/dL (Optimal)"
        },
        {
            name: "Fasting Insulin",
            truth: "The early warning for metabolic dysfunction before glucose rises.",
            target: "< 5 uIU/mL (Optimal)"
        },
        {
            name: "Homocysteine",
            truth: "A critical marker for methylation and cognitive health. High levels correlate with neurodegeneration.",
            target: "< 10 umol/L"
        },
        {
            name: "hs-CRP",
            truth: "Measures silent, low-grade inflammation. If this is high, your vessel walls are under attack.",
            target: "< 0.5 mg/L"
        },
        {
            name: "Lipoprotein(a)",
            truth: "A genetically determined risk factor for heart disease. 20% of people have high levels and don't know it.",
            target: "< 30 mg/dL"
        }
    ];

    const honourableMentions = [
        {
            name: "Vitamin D",
            truth: "Not just for bones. A critical hormone for immune defense and gene regulation.",
            target: "100–150 nmol/L"
        },
        {
            name: "HbA1c",
            truth: "A 3-month average of blood glucose. Useful, but lags behind insulin.",
            target: "< 5.2%"
        },
        {
            name: "GGT",
            truth: "The most sensitive marker for liver stress and oxidative burden.",
            target: "< 20 U/L"
        }
    ];

    return (
        <div style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            minHeight: '100vh',
            fontFamily: '"Inter", sans-serif',
            overflowX: 'hidden'
        }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '60vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 2rem'
            }}>
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/diagnostics_hero_user.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.7
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)',
                    zIndex: 1
                }}></div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        color: '#FFFFFF'
                    }}>
                        THE DIAGNOSTICS: <br />
                        <span style={{ color: '#FF5F00' }}>The Essential Biometrics</span>
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.9)',
                        display: 'inline-block',
                        borderLeft: '4px solid #FF5F00',
                        paddingLeft: '1.5rem',
                        textAlign: 'left'
                    }}>
                        "'Normal' is not the same as Healthy."
                    </p>
                </motion.div>
            </section>

            {/* Introduction */}
            <section style={{ padding: '2rem 2rem', maxWidth: '800px', margin: '0 auto' }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.8,
                        color: '#CCCCCC'
                    }}
                >
                    In standard medicine, reference ranges are based on the average population. But the average population is metabolically unhealthy. If your goal is resilience, being 'in range' is not enough. You need to be optimal. These are the 5 markers that act as your early warning system.
                </motion.p>
            </section>

            {/* Tier 1: THE ESSENTIAL 5 */}
            <section style={{ padding: '2rem 2rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{
                    borderBottom: '1px solid #FF5F00',
                    marginBottom: '3rem',
                    paddingBottom: '1rem'
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Tier 1: <span style={{ color: '#FF5F00' }}>The Essential 5</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {essentialMarkers.map((marker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '2rem',
                                borderRadius: '4px',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1.5rem',
                                alignItems: 'center'
                            }}
                        >
                            <div>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    marginBottom: '0.5rem'
                                }}>
                                    {marker.name}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#AAAAAA',
                                    margin: 0,
                                    lineHeight: 1.5
                                }}>
                                    <strong style={{ color: '#FF5F00' }}>The Truth:</strong> {marker.truth}
                                </p>
                            </div>
                            <div style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: '1rem',
                                borderRadius: '4px',
                                borderLeft: '3px solid #FF5F00'
                            }}>
                                <div style={{
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    color: '#888888',
                                    marginBottom: '0.25rem',
                                    fontWeight: 600
                                }}>
                                    Target
                                </div>
                                <div style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#FF5F00',
                                    fontFamily: 'monospace'
                                }}>
                                    {marker.target}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Tier 2: HONOURABLE MENTIONS */}
            <section style={{ padding: '2rem 2rem 6rem', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{
                    borderBottom: '1px solid #888888',
                    marginBottom: '3rem',
                    paddingBottom: '1rem'
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Tier 2: <span style={{ color: '#888888' }}>Honourable Mentions</span>
                    </h2>
                </div>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {honourableMentions.map((marker, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '2rem',
                                borderRadius: '4px',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1.5rem',
                                alignItems: 'center'
                            }}
                        >
                            <div>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    marginBottom: '0.5rem'
                                }}>
                                    {marker.name}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#AAAAAA',
                                    margin: 0,
                                    lineHeight: 1.5
                                }}>
                                    <strong style={{ color: '#888888' }}>The Truth:</strong> {marker.truth}
                                </p>
                            </div>
                            <div style={{
                                background: 'rgba(0,0,0,0.3)',
                                padding: '1rem',
                                borderRadius: '4px',
                                borderLeft: '3px solid #888888'
                            }}>
                                <div style={{
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    color: '#888888',
                                    marginBottom: '0.25rem',
                                    fontWeight: 600
                                }}>
                                    Target
                                </div>
                                <div style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    fontFamily: 'monospace'
                                }}>
                                    {marker.target}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* THE DEEP DIVE: Mechanism of Action */}
            <section style={{
                position: 'relative',
                padding: '6rem 2rem',
                color: '#FFFFFF',
                overflow: 'hidden'
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/dna_bg_user.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.25,
                    zIndex: 0
                }}></div>

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            letterSpacing: '0.05em',
                            marginBottom: '1rem',
                            color: '#FFFFFF'
                        }}>
                            THE DEEP DIVE: <span style={{ color: '#FF5F00' }}>Mechanism of Action</span>
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {/* Block 1 */}
                        <div style={{ background: 'rgba(0,0,0,0.6)', padding: '2rem', borderTop: '4px solid #FF5F00', backdropFilter: 'blur(10px)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FF5F00', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                Why ApoB? <br /><span style={{ color: '#FFF', fontSize: '0.9rem' }}>(The Traffic Analogy)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#DDD' }}>
                                LDL-C measures the weight of cholesterol in your blood. ApoB counts the actual number of particles. Think of it like a highway: LDL-C tells you the weight of the passengers, but ApoB tells you the number of cars. It is the number of cars (particles) that causes the traffic jams (plaque) and accidents (heart disease). You can have 'normal' LDL but dangerous ApoB.
                            </p>
                        </div>

                        {/* Block 2 */}
                        <div style={{ background: 'rgba(0,0,0,0.6)', padding: '2rem', borderTop: '4px solid #FF5F00', backdropFilter: 'blur(10px)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FF5F00', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                Fasting Insulin vs. HbA1c
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#DDD' }}>
                                Why is Insulin the superior metric? HbA1c is a backward-looking average of the last 3 months. Fasting Insulin is a real-time stress test. Your pancreas can mask metabolic damage for years by pumping out massive amounts of insulin to keep your blood sugar (HbA1c) normal. By the time HbA1c rises, the damage is already done. Insulin catches the fire before it spreads.
                            </p>
                        </div>

                        {/* Block 3 */}
                        <div style={{ background: 'rgba(0,0,0,0.6)', padding: '2rem', borderTop: '4px solid #FF5F00', backdropFilter: 'blur(10px)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FF5F00', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                Vitamin D <br /><span style={{ color: '#FFF', fontSize: '0.9rem' }}>(The Hormone)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#DDD' }}>
                                Stop calling it a vitamin. It is a steroid hormone that regulates over 1,000 genes, accounting for nearly 5% of the human genome. It is a critical cofactor for immune defense, dopamine production (mental health), and calcium homeostasis. Low levels are not just bad for bones; they are a signal of systemic fragility.
                            </p>
                        </div>

                        {/* Block 4 */}
                        <div style={{ background: 'rgba(0,0,0,0.6)', padding: '2rem', borderTop: '4px solid #FF5F00', backdropFilter: 'blur(10px)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FF5F00', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                Homocysteine <br /><span style={{ color: '#FFF', fontSize: '0.9rem' }}>(The Vascular Toxin)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#DDD' }}>
                                This is an amino acid breakdown product. Elevated levels indicate a failure in your methylation cycle (often due to B-vitamin deficiency or MTHFR gene mutations). High homocysteine acts like sandpaper on the lining of your arteries, creating the injury that allows cholesterol to stick. We treat this to protect the vessel wall.
                            </p>
                        </div>

                        {/* Block 5 */}
                        <div style={{ background: 'rgba(0,0,0,0.6)', padding: '2rem', borderTop: '4px solid #FF5F00', backdropFilter: 'blur(10px)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FF5F00', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                hs-CRP <br /><span style={{ color: '#FFF', fontSize: '0.9rem' }}>(The Silent Fire)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#DDD' }}>
                                Cholesterol builds the plaque, but inflammation makes it rupture. Think of hs-CRP as a smoke detector for your arteries. Standard CRP measures acute infection (like a fever), but High-Sensitivity CRP detects chronic, low-grade inflammation—the 'smoldering fire' caused by stress, toxins, and visceral fat.
                                <br /><br />
                                <strong style={{ color: '#FFF' }}>The Clinical Reality:</strong> You can have high cholesterol and be stable. But if you have high cholesterol plus high hs-CRP, your risk of a sudden cardiac event explodes. We track this to ensure your blood vessels are cool and stable, not inflamed and fragile.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ACCESS TIER 3 BANNER */}
            <section style={{
                padding: '4rem 2rem',
                background: 'linear-gradient(90deg, #000000 0%, #111111 100%)',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Go Beyond The Basics
                    </h3>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#AAAAAA',
                        marginBottom: '2rem'
                    }}>
                        The Essential 5 keep you alive. Tier 3 optimizes you for performance.
                    </p>
                    <a href="/advanced-optimization" style={{
                        display: 'inline-block',
                        padding: '1rem 2.5rem',
                        border: '1px solid #FF5F00',
                        color: '#FF5F00',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '1rem',
                        borderRadius: '4px',
                        letterSpacing: '0.1em',
                        transition: 'all 0.3s ease'
                    }}>
                        ACCESS TIER 3 &gt;
                    </a>
                </div>
            </section>

            {/* Footer / Disclaimer */}
            <section style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                background: '#050505'
            }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{
                        fontSize: '0.85rem',
                        color: '#666666',
                        fontStyle: 'italic',
                        margin: 0
                    }}>
                        Medical Disclaimer: This guide is for educational purposes. Discuss results with a qualified practitioner.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Diagnostics;
