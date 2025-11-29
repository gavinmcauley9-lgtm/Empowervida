import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
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
                padding: '0 2rem',
                overflow: 'hidden'
            }}>
                {/* Background Image */}
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
                    opacity: 0.9
                }}></div>

                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, #FFFFFF 100%)',
                    zIndex: 1
                }}></div>

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }} data-aos="fade-up">
                    <h1 style={{
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: 800,
                        color: 'var(--color-text)',
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        fontFamily: '"Manrope", sans-serif'
                    }}>
                        THE DIAGNOSTICS
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontWeight: 500
                    }}>
                        "If you are not measuring, you are guessing."
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up" data-aos-delay="100">
                <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-text)', marginBottom: '2rem' }}>
                    Standard blood panels are designed to catch disease when it is too late. They are "sick-care" diagnostics.
                    <strong style={{ color: 'var(--color-accent-teal)' }}> We use "health-care" diagnostics.</strong> We look for optimal ranges, not just "normal" ranges.
                    Normal is average, and average is sick.
                </p>
            </section>

            {/* Tier 1: THE ESSENTIAL 5 */}
            <section style={{ padding: '2rem 2rem 4rem', maxWidth: '1000px', margin: '0 auto' }}>
                <div style={{
                    borderBottom: '1px solid var(--color-accent-orange)',
                    marginBottom: '3rem',
                    paddingBottom: '1rem'
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'var(--color-text)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }} data-aos="fade-up">
                        Tier 1: <span style={{ color: 'var(--color-accent-orange)' }}>The Essential 5</span>
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
                                background: 'var(--color-bg)',
                                border: '1px solid var(--color-border)',
                                padding: '2rem',
                                borderRadius: '4px',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1.5rem',
                                alignItems: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(32, 178, 170, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                            }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 700,
                                    color: 'var(--color-text)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {marker.name}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-text-muted)',
                                    margin: 0,
                                    lineHeight: 1.5
                                }}>
                                    <strong style={{ color: 'var(--color-accent-orange)' }}>The Truth:</strong> {marker.truth}
                                </p>
                            </div>
                            <div style={{
                                background: '#F8F8F8',
                                padding: '1rem',
                                borderRadius: '4px',
                                borderLeft: '3px solid var(--color-accent-orange)'
                            }}>
                                <div style={{
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '0.25rem',
                                    fontWeight: 600
                                }}>
                                    Target
                                </div>
                                <div style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: 'var(--color-accent-orange)',
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
                    borderBottom: '1px solid var(--color-text-muted)',
                    marginBottom: '3rem',
                    paddingBottom: '1rem'
                }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: 'var(--color-text)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Tier 2: <span style={{ color: 'var(--color-text-muted)' }}>Honourable Mentions</span>
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
                                background: 'var(--color-bg)',
                                border: '1px solid var(--color-border)',
                                padding: '2rem',
                                borderRadius: '4px',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1.5rem',
                                alignItems: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(32, 178, 170, 0.15)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                            }}
                        >
                            <div>
                                <h3 style={{
                                    fontSize: '1.75rem',
                                    fontWeight: 700,
                                    color: 'var(--color-text)',
                                    marginBottom: '0.5rem'
                                }}>
                                    {marker.name}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-text-muted)',
                                    margin: 0,
                                    lineHeight: 1.5
                                }}>
                                    <strong style={{ color: 'var(--color-text-muted)' }}>The Truth:</strong> {marker.truth}
                                </p>
                            </div>
                            <div style={{
                                background: '#F8F8F8',
                                padding: '1rem',
                                borderRadius: '4px',
                                borderLeft: '3px solid var(--color-text-muted)'
                            }}>
                                <div style={{
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '0.25rem',
                                    fontWeight: 600
                                }}>
                                    Target
                                </div>
                                <div style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: 'var(--color-text)',
                                    fontFamily: 'monospace'
                                }}>
                                    {marker.target}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section >

            {/* THE DEEP DIVE: Mechanism of Action */}
            < section style={{
                position: 'relative',
                padding: '6rem 2rem',
                color: 'var(--color-text)',
                overflow: 'hidden'
            }}>
                {/* Background Image */}
                < div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/dna_bg_user.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.1,
                    zIndex: 0
                }}></div >

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            fontWeight: 800,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            THE DEEP DIVE: <span style={{ color: 'var(--color-accent-teal)' }}>Mechanism of Action</span>
                        </h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2.5rem'
                    }}>
                        {/* Block 1 */}
                        <div style={{ background: '#F8F8F8', padding: '2rem', borderTop: '4px solid var(--color-accent-teal)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                Why ApoB? <br /><span style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>(The Traffic Analogy)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                                LDL-C measures the weight of cholesterol in your blood. ApoB counts the actual number of particles. Think of it like a highway: LDL-C tells you the weight of the passengers, but ApoB tells you the number of cars. It is the number of cars (particles) that causes the traffic jams (plaque) and accidents (heart disease). You can have 'normal' LDL but dangerous ApoB.
                            </p>
                        </div>

                        {/* Block 2 */}
                        <div style={{ background: '#F8F8F8', padding: '2rem', borderTop: '4px solid var(--color-accent-teal)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                Fasting Insulin vs. HbA1c
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                                Why is Insulin the superior metric? HbA1c is a backward-looking average of the last 3 months. Fasting Insulin is a real-time stress test. Your pancreas can mask metabolic damage for years by pumping out massive amounts of insulin to keep your blood sugar (HbA1c) normal. By the time HbA1c rises, the damage is already done. Insulin catches the fire before it spreads.
                            </p>
                        </div>

                        {/* Block 3 */}
                        <div style={{ background: '#F8F8F8', padding: '2rem', borderTop: '4px solid var(--color-accent-teal)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                Vitamin D <br /><span style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>(The Hormone)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                                Stop calling it a vitamin. It is a steroid hormone that regulates over 1,000 genes, accounting for nearly 5% of the human genome. It is a critical cofactor for immune defense, dopamine production (mental health), and calcium homeostasis. Low levels are not just bad for bones; they are a signal of systemic fragility.
                            </p>
                        </div>

                        {/* Block 4 */}
                        <div style={{ background: '#F8F8F8', padding: '2rem', borderTop: '4px solid var(--color-accent-teal)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                Homocysteine <br /><span style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>(The Vascular Toxin)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                                This is an amino acid breakdown product. Elevated levels indicate a failure in your methylation cycle (often due to B-vitamin deficiency or MTHFR gene mutations). High homocysteine acts like sandpaper on the lining of your arteries, creating the injury that allows cholesterol to stick. We treat this to protect the vessel wall.
                            </p>
                        </div>

                        {/* Block 5 */}
                        <div style={{ background: '#F8F8F8', padding: '2rem', borderTop: '4px solid var(--color-accent-teal)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                hs-CRP <br /><span style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>(The Silent Fire)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                                Cholesterol builds the plaque, but inflammation makes it rupture. Think of hs-CRP as a smoke detector for your arteries. Standard CRP measures acute infection (like a fever), but High-Sensitivity CRP detects chronic, low-grade inflammation—the 'smoldering fire' caused by stress, toxins, and visceral fat.
                                <br /><br />
                                <strong style={{ color: 'var(--color-text)' }}>The Clinical Reality:</strong> You can have high cholesterol and be stable. But if you have high cholesterol plus high hs-CRP, your risk of a sudden cardiac event explodes. We track this to ensure your blood vessels are cool and stable, not inflamed and fragile.
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            {/* ACCESS TIER 3 BANNER */}
            < section style={{
                padding: '4rem 2rem',
                background: 'linear-gradient(90deg, #FFFFFF 0%, #F0F0F0 100%)',
                color: 'var(--color-text)',
                textAlign: 'center',
                borderTop: '1px solid var(--color-border)'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>GET TESTED NOW</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                        Order your own labs. Own your own data.
                    </p>
                    <a href="https://www.functionhealth.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        padding: '1.2rem 3rem',
                        display: 'inline-block',
                        background: 'var(--color-accent-teal)',
                        color: 'var(--color-text-muted)',
                        borderRadius: '4px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        transition: 'background 0.3s ease'
                    }}>
                        ORDER FUNCTION HEALTH PANEL
                    </a>
                </div>
            </section >

            {/* Footer / Disclaimer */}
            < section style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                borderTop: '1px solid var(--color-border)',
                background: 'var(--color-bg)'
            }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)' }}>READY TO INTERPRET?</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                        Learn how to read your bloodwork like a longevity physician.
                    </p>
                    <Link to="/blog" className="btn-secondary" style={{
                        textDecoration: 'none',
                        fontSize: '1.1rem',
                        padding: '1.2rem 3rem',
                        display: 'inline-block',
                        border: '1px solid var(--color-accent-teal)',
                        color: 'var(--color-accent-teal)',
                        borderRadius: '4px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        transition: 'background 0.3s ease, color 0.3s ease'
                    }}>
                        READ THE GUIDE
                    </Link>
                </div>
            </section >
        </div >
    );
};

export default Diagnostics;
