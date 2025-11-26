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
                        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                            <img src="/resilience_protocol_logo_v3.png" alt="Resilience Protocol MD" style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto 1rem' }} />
                            <span style={{ color: 'var(--color-primary)', fontSize: '0.6em', display: 'block' }}>The Science of Longevity, Simplified.</span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <p style={{ fontSize: '1.25rem', color: '#A0A0A0', maxWidth: '700px', margin: '0 auto 2.5rem', fontWeight: 300 }}>
                            Doctor-led protocols for mitochondrial health, metabolic flexibility, and cognitive performance.
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
                                color: '#FFFFFF',
                                borderColor: '#FFFFFF',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                padding: '1rem 2rem'
                            }}>
                                <span style={{ fontSize: '1rem' }}>ACCESS THE INTEL</span>
                                <span style={{ fontSize: '0.7rem', fontWeight: 400, opacity: 0.9, textTransform: 'none', marginTop: '0.2rem' }}>Briefings on Sleep & Longevity</span>
                            </Link>
                        </div>
                    </Reveal>
                </header>
            </section>

            {/* Trust Bar - Darker Divider */}
            <div style={{
                background: '#1A1A1A',
                padding: '1.5rem 0',
                borderTop: '1px solid #333',
                borderBottom: '1px solid #333'
            }}>
                <div className="container text-center">
                    <p style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#666' }}>
                        Founded by an Acute Care Physician & ER Veteran
                    </p>
                </div>
            </div>

            {/* Value Prop Section - Dark Tactical Background */}
            <section style={{
                padding: '6rem 0',
                background: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(/dark_smoke_bg.png)',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>

                    {/* Card 1: THE INTEL */}
                    <Reveal delay={0.2}>
                        <Link to="/blog" style={{
                            background: '#1A1A1A',
                            border: '1px solid #333333',
                            borderRadius: '4px',
                            padding: '2rem',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'all 0.2s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = '#FF5F00';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#333333';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔬</div>
                            <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>THE INTEL</h3>
                            <p style={{ color: '#E0E0E0', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                                Deep-dive briefings on Mitochondria, Sleep Architecture, and Cellular Resilience.
                            </p>
                            <div style={{ color: '#FF5F00', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore &gt;</div>
                        </Link>
                    </Reveal>

                    {/* Card 2: THE ARMOR */}
                    <Reveal delay={0.4}>
                        <Link to="/protocol" style={{
                            background: '#1A1A1A',
                            border: '1px solid #333333',
                            borderRadius: '4px',
                            padding: '2rem',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'all 0.2s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = '#FF5F00';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#333333';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
                            <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>THE ARMOR</h3>
                            <p style={{ color: '#E0E0E0', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                                My exact daily supplement stack. Dosage, timing, and sourcing.
                            </p>
                            <div style={{ color: '#FF5F00', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore &gt;</div>
                        </Link>
                    </Reveal>

                    {/* Card 3: THE DIAGNOSTICS */}
                    <Reveal delay={0.6}>
                        <Link to="/diagnostics" style={{
                            background: '#1A1A1A',
                            border: '1px solid #333333',
                            borderRadius: '4px',
                            padding: '2rem',
                            textDecoration: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            transition: 'all 0.2s ease'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = '#FF5F00';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = '#333333';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🩸</div>
                            <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>THE DIAGNOSTICS</h3>
                            <p style={{ color: '#E0E0E0', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                                Stop guessing. The 5 essential blood markers your doctor isn't checking.
                            </p>
                            <div style={{ color: '#FF5F00', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore &gt;</div>
                        </Link>
                    </Reveal>

                </div>
            </section>
        </>
    );
}
