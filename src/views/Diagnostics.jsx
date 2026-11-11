"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Link from 'next/link';

const Diagnostics = () => {
    const essentialMarkers = [
        {
            name: "ApoB",
            truth: "ApoB reflects the number of atherogenic lipoprotein particles and can refine cardiovascular risk assessment, especially when conventional lipid measures are discordant.",
            target: "Risk-dependent; no universal target"
        },
        {
            name: "Fasting Insulin",
            truth: "Fasting insulin can help characterise insulin resistance in research and selected settings. It is not a validated general screening replacement for glucose or HbA1c.",
            target: "No universal clinical target"
        },
        {
            name: "Homocysteine",
            truth: "Elevated homocysteine can be associated with cardiovascular risk or vitamin deficiency, but lowering it has not consistently prevented cardiovascular events.",
            target: "Interpret by clinical context"
        },
        {
            name: "hs-CRP",
            truth: "hs-CRP is a nonspecific marker of inflammation that can sometimes refine cardiovascular risk assessment; it cannot directly identify unstable plaque.",
            target: "Risk interpretation, not a universal target"
        },
        {
            name: "Lipoprotein(a)",
            truth: "Lp(a) is largely genetically determined and independently associated with cardiovascular risk. Several major guidelines support measuring it at least once in adulthood.",
            target: "Risk marker; units and thresholds vary"
        }
    ];

    const honourableMentions = [
        {
            name: "Vitamin D",
            truth: "Vitamin D supports calcium regulation and bone health. Testing is most useful for specific risk factors or clinical indications; higher levels are not proven to improve longevity.",
            target: "No universal longevity target"
        },
        {
            name: "HbA1c",
            truth: "HbA1c reflects average glycaemia over roughly two to three months and is an established tool for diabetes diagnosis and monitoring, with recognised limitations.",
            target: "Use diagnostic criteria and individual goals"
        },
        {
            name: "GGT",
            truth: "GGT can rise in several liver and biliary conditions, alcohol exposure and medication effects. It is not a validated measure of 'detoxification demand'.",
            target: "Laboratory-specific reference range"
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
            <HeroSection
                backgroundImage="/diagnostics_hero_user.jpg"
                title="THE DIAGNOSTICS"
                subtitle='"If you are not measuring, you are guessing."'
                overlay="linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, #FFFFFF 100%)"
                textColor="var(--color-text)"
                subtitleColor="var(--color-text-muted)"
            />

            {/* Intro Section */}
            <section style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up" data-aos-delay="100">
                <p style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-text)', marginBottom: '2rem' }}>
                    Routine preventive care can detect risk factors before symptoms or disease complications develop. 
                    <strong style={{ color: 'var(--color-accent-teal)' }}> We focus on proactive diagnostics.</strong> The goal is to choose tests with meaningful clinical interpretation, not to impose unvalidated ‘optimal’ targets on everyone.
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
                                These tests answer different questions. HbA1c is a validated measure of longer-term glucose exposure and helps diagnose diabetes. Fasting insulin may add context in selected cases, but assay variation and the absence of universal thresholds limit its use as a routine screening test.
                            </p>
                        </div>

                        {/* Block 3 */}
                        <div style={{ background: '#F8F8F8', padding: '2rem', borderTop: '4px solid var(--color-accent-teal)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                Vitamin D <br /><span style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>(The Hormone)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                                Vitamin D is a nutrient whose active form acts as a hormone. Its established clinical roles include calcium balance and skeletal health. Research explores other effects, but associations with immune or mood outcomes do not prove that higher vitamin D levels improve those outcomes.
                            </p>
                        </div>

                        {/* Block 4 */}
                        <div style={{ background: '#F8F8F8', padding: '2rem', borderTop: '4px solid var(--color-accent-teal)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                Homocysteine <br /><span style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>(The Vascular Toxin)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                                Homocysteine is an amino acid influenced by kidney function, vitamin B12 and folate status, medications and other factors. Elevated levels can prompt investigation in appropriate settings, but lowering homocysteine has not consistently reduced heart attacks or mortality.
                            </p>
                        </div>

                        {/* Block 5 */}
                        <div style={{ background: '#F8F8F8', padding: '2rem', borderTop: '4px solid var(--color-accent-teal)', backdropFilter: 'blur(10px)', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                                hs-CRP <br /><span style={{ color: 'var(--color-text)', fontSize: '0.9rem' }}>(The Silent Fire)</span>
                            </h3>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                                Inflammation contributes to atherosclerosis, but hs-CRP is a nonspecific blood marker rather than a direct scan of arterial plaque. It can be elevated for many reasons, including infection and chronic inflammatory conditions.
                                <br /><br />
                                <strong style={{ color: 'var(--color-text)' }}>The Clinical Reality:</strong> Elevated hs-CRP may provide additional risk information in selected people, but it cannot establish whether an individual plaque is stable or unstable.
                            </p>
                        </div>
                    </div>
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
                    <Link href="/blog" onClick={() => window.scrollTo(0, 0)} className="btn-secondary" style={{
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
