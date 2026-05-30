"use client";

import React from 'react';
import HeroSection from '../components/HeroSection';
import HeroSectionCalm from '../components/HeroSectionCalm';
import HeroSectionHybrid from '../components/HeroSectionHybrid';

const HeroCompare = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            {/* ========== HYBRID (RECOMMENDED) ========== */}
            <div style={{
                background: 'linear-gradient(135deg, #20B2AA, #0f766e)',
                color: 'white',
                padding: '1.25rem 2rem',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
            }}>
                ⭐ HYBRID DESIGN (Recommended - Best of Both)
            </div>

            <HeroSectionHybrid />

            {/* Divider */}
            <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #1A3C34, #0f766e)',
                margin: '0'
            }} />

            {/* ========== CURRENT ========== */}
            <div style={{
                background: '#1A3C34',
                color: 'white',
                padding: '1rem 2rem',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
            }}>
                ⬇️ CURRENT DESIGN (Bold / High Production)
            </div>

            <HeroSection
                backgroundImage="/hero-longevity.jpg"
                title="LONGEVITY, PRESCRIBED."
                subtitle="Evidence-Based Health Optimization"
                height="80vh"
                overlay="radial-gradient(circle at center, rgba(255,255,255,0) 0%, #FFFFFF 100%)"
                textColor="#1A3C34"
                subtitleColor="#1A3C34"
            >
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="/protocol"
                        style={{
                            padding: '1rem 2rem',
                            background: 'var(--color-accent-teal)',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '1.1rem'
                        }}
                    >
                        Start the Protocol
                    </a>
                    <a
                        href="/blog"
                        style={{
                            padding: '1rem 2rem',
                            background: 'transparent',
                            color: '#1A3C34',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            fontSize: '1.1rem',
                            border: '2px solid #1A3C34'
                        }}
                    >
                        Read the Science
                    </a>
                </div>
            </HeroSection>

            {/* Divider */}
            <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #20B2AA, #0f766e)',
                margin: '0'
            }} />

            {/* ========== CALM ========== */}
            <div style={{
                background: '#0f172a',
                color: 'white',
                padding: '1rem 2rem',
                textAlign: 'center',
                fontWeight: 700,
                fontSize: '1.25rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
            }}>
                ⬇️ CALM DESIGN (Light / Reassuring)
            </div>

            <HeroSectionCalm />

            {/* Comparison Notes */}
            <div style={{
                background: '#f8fafc',
                padding: '3rem 2rem',
                textAlign: 'center',
                borderTop: '1px solid #e2e8f0'
            }}>
                <h2 style={{ color: '#0f172a', marginBottom: '1.5rem' }}>Quick Comparison</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '1.5rem',
                    maxWidth: '1100px',
                    margin: '0 auto',
                    textAlign: 'left'
                }}>
                    <div style={{ background: 'linear-gradient(135deg, rgba(32,178,170,0.1), rgba(15,118,110,0.05))', padding: '1.5rem', borderRadius: '12px', border: '2px solid #20B2AA' }}>
                        <h3 style={{ color: '#0f766e', marginBottom: '1rem' }}>⭐ Hybrid (Recommended)</h3>
                        <ul style={{ color: '#475569', lineHeight: '1.8' }}>
                            <li>✓ Ken Burns parallax background</li>
                            <li>✓ Bold "LONGEVITY, PRESCRIBED" title</li>
                            <li>✓ Trust badge + soft subheadline</li>
                            <li>✓ Doctor identity social proof</li>
                            <li>✓ "No hype" reassurance tagline</li>
                        </ul>
                    </div>
                    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ color: '#1A3C34', marginBottom: '1rem' }}>Current (Bold)</h3>
                        <ul style={{ color: '#475569', lineHeight: '1.8' }}>
                            <li>✓ High production value</li>
                            <li>✓ Parallax & Ken Burns effects</li>
                            <li>✓ Assertive, commanding tone</li>
                            <li>✓ Minimal messaging</li>
                        </ul>
                    </div>
                    <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                        <h3 style={{ color: '#0f766e', marginBottom: '1rem' }}>Calm (Light)</h3>
                        <ul style={{ color: '#475569', lineHeight: '1.8' }}>
                            <li>✓ Light, calming aesthetic</li>
                            <li>✓ Serif typography</li>
                            <li>✓ Empathetic tone</li>
                            <li>✓ No parallax/animation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroCompare;
