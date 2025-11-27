import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function Home() {
    return (
        <>
            {/* Hero Section - Deep Charcoal Background */}
            <section style={{
                minHeight: '75vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '4rem var(--spacing-md) 0',
                backgroundColor: 'var(--color-bg-hero)',
                color: 'var(--color-text-hero)'
            }}>
                <header style={{ maxWidth: '900px' }}>
                    <Reveal width="100%">
                        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-text)', marginBottom: '0.5rem', lineHeight: '1.1' }}>THE RESILIENCE PROTOCOL <span style={{ color: 'var(--color-primary)' }}>MD</span></h1>
                        <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'var(--color-primary)', margin: '0.5rem 0 1rem', fontWeight: 600 }}>Medicine 3.0: Engineering the Body for Longevity</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Founded by a Board-Certified Physician</p>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 2.5rem', fontWeight: 300 }}>
                            Evidence-based protocols for metabolic optimization, mitochondrial health, and cognitive performance.
                        </p>
                    </Reveal>

                    <Reveal width="100%" delay={0.4}>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/protocol" className="btn-primary" style={{
                                textDecoration: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '1rem 2rem'
                            }}>
                                <span style={{ fontSize: '1rem' }}>VIEW THE ARMOR</span>
                                <span style={{ fontSize: '0.7rem', fontWeight: 400, opacity: 0.9, textTransform: 'none', marginTop: '0.2rem' }}>My Daily Mitochondrial Stack</span>
                            </Link>
                            <Link to="/blog" className="btn-secondary" style={{
                                textDecoration: 'none',
                                color: 'var(--color-text)',
                                borderColor: 'var(--color-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '1rem 2rem'
                            }}>
                                <span style={{ fontSize: '1rem' }}>EXPLORE THE BLUEPRINT</span>
                                <span style={{ fontSize: '0.7rem', fontWeight: 400, opacity: 0.9, textTransform: 'none', marginTop: '0.2rem' }}>Science-Based Longevity Research</span>
                            </Link>
                        </div>
                    </Reveal>
                </header>
            </section>

            {/* Trust Bar - Light Divider */}
            <div style={{
                background: 'var(--color-bg-alt)',
                padding: '1.5rem 0',
                borderTop: '1px solid rgba(0,0,0,0.1)',
                borderBottom: '1px solid rgba(0,0,0,0.1)'
            }}>
                <div className="container text-center">
                    <p style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                        Founded by an Acute Care Physician & ER Veteran
                    </p>
                </div>
            </div>

            {/* Value Prop Section - Light Clean Background */}
            <section style={{
                padding: '6rem 0',
                background: 'var(--color-bg)',
                borderTop: '1px solid rgba(0,0,0,0.05)'
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>

                    {/* Card 1: THE BLUEPRINT */}
                    <Reveal delay={0.2}>
                        <Link to="/blog" style={{
                            background: '#FFFFFF',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            padding: '2rem',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔬</div>
                            <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>THE BLUEPRINT</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                                Deep-dive briefings on Mitochondria, Sleep Architecture, and Cellular Resilience.
                            </p>
                            <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore &gt;</div>
                        </Link>
                    </Reveal>

                    {/* Card 2: THE ARMOR */}
                    <Reveal delay={0.4}>
                        <Link to="/protocol" style={{
                            background: '#FFFFFF',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            padding: '2rem',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
                            <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>THE ARMOR</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                                My exact daily supplement stack. Dosage, timing, and sourcing.
                            </p>
                            <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore &gt;</div>
                        </Link>
                    </Reveal>

                    {/* Card 3: THE RADAR */}
                    <Reveal delay={0.6}>
                        <Link to="/diagnostics" style={{
                            background: '#FFFFFF',
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '8px',
                            padding: '2rem',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--color-primary)';
                                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🩸</div>
                            <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>THE RADAR</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                                Stop guessing. The 5 essential blood markers your doctor isn't checking.
                            </p>
                            <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore &gt;</div>
                        </Link>
                    </Reveal>

                </div>
            </section>
        </>
    );
}
