"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';

export default function WelcomeInsider() {
    return (
        <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)', fontFamily: '"Inter", sans-serif' }}>
            <Helmet>
                <title>Welcome to the Insider Lab | EMPOWERVIDA</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* HERO SECTION */}
            <HeroSection
                backgroundImage="/longevity_hero_cinematic_1764666029631.png"
                title="WELCOME TO THE LAB"
                subtitle="Your Foundational Starting Point is Here."
                overlay="linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.65) 70%, rgba(250,250,250,0.95) 95%, rgba(250,250,250,1) 100%)"
                textColor="#FFFFFF"
                subtitleColor="#4FD1C5"
            >
                <p style={{
                    fontSize: '1.2rem',
                    color: '#D1D5DB',
                    fontStyle: 'italic',
                    marginTop: '1rem',
                    maxWidth: '600px',
                    margin: '1rem auto 0'
                }}>
                    "I spent 15 years seeing patients when it was already urgent. Now, I help people long before it gets to that point." — Dr. Gavin
                </p>
            </HeroSection>

            {/* MAIN CONTENT */}
            <div className="container" style={{ maxWidth: '900px', paddingTop: '4rem', paddingBottom: '6rem' }}>
                
                {/* Intro */}
                <div style={{ marginBottom: '4rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I'm Dr. Gavin. I'm glad you're here.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Whether you're here because you're feeling "flat" despite a clean diet, or you're ready to architect a decades-long healthspan, you've come to the right place.
                    </p>
                    <p style={{ marginBottom: '1.5rem', fontWeight: '600', color: 'var(--color-primary)' }}>
                        As promised, below is your foundational starting point: The 5 "hidden" blood markers your doctor likely isn't testing.
                    </p>
                </div>

                {/* The 5 Labs Checklist */}
                <section style={{ marginBottom: '6rem' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-text)', marginBottom: '1rem', fontFamily: '"Manrope", sans-serif' }}>
                        The 5 Labs Your Doctor Isn't Testing
                    </h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '3rem' }}></div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {/* Lab 1 */}
                        <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #FF3B30', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FF3B30', marginBottom: '0.5rem' }}>1. Fasting Insulin</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1rem', fontWeight: 600 }}>Standard medicine checks: Fasting Glucose</p>
                            <p style={{ lineHeight: 1.7 }}>
                                <strong>Why you need this:</strong> Your fasting glucose can remain perfectly "normal" for 10-15 years while insulin resistance silently develops. The pancreas compensates by producing more insulin to keep glucose down. By the time glucose rises, significant metabolic dysfunction may already be present.
                            </p>
                            <p style={{ marginTop: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>Optimal Target: &lt; 5 µIU/mL</p>
                        </div>

                        {/* Lab 2 */}
                        <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #FF9500', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#FF9500', marginBottom: '0.5rem' }}>2. HOMA-IR</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1rem', fontWeight: 600 }}>Standard medicine checks: HbA1c</p>
                            <p style={{ lineHeight: 1.7 }}>
                                <strong>Why you need this:</strong> HOMA-IR is a calculation based on your Fasting Insulin and Fasting Glucose. It is a widely used proxy for measuring insulin resistance. An elevated score may indicate early metabolic dysfunction, regardless of what your HbA1c says.
                            </p>
                            <p style={{ marginTop: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>Optimal Target: &lt; 1.0</p>
                        </div>

                        {/* Lab 3 */}
                        <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #20B2AA', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#20B2AA', marginBottom: '0.5rem' }}>3. hs-CRP (High-Sensitivity)</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1rem', fontWeight: 600 }}>Standard medicine checks: Standard CRP</p>
                            <p style={{ lineHeight: 1.7 }}>
                                <strong>Why you need this:</strong> Systemic, low-grade inflammation is the soil in which cardiovascular disease, neurodegeneration, and cancer grow. A standard CRP test only detects massive, acute infections. The high-sensitivity (hs-CRP) test detects the silent vascular inflammation that slowly hardens arteries.
                            </p>
                            <p style={{ marginTop: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>Optimal Target: &lt; 1.0 mg/L</p>
                        </div>

                        {/* Lab 4 */}
                        <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #007AFF', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#007AFF', marginBottom: '0.5rem' }}>4. ApoB (Apolipoprotein B)</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1rem', fontWeight: 600 }}>Standard medicine checks: LDL-Cholesterol (Calculated)</p>
                            <p style={{ lineHeight: 1.7 }}>
                                <strong>Why you need this:</strong> Standard lipid panels measure the *weight* of cholesterol in your blood. But what causes plaque isn't the weight, it's the *number of particles* crashing into your artery walls. ApoB measures the exact particle count of all atherogenic (plaque-forming) lipoproteins.
                            </p>
                            <p style={{ marginTop: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>Optimal Target: &lt; 80 mg/dL (or &lt; 60 if high risk)</p>
                        </div>

                        {/* Lab 5 */}
                        <div style={{ background: '#FFFFFF', padding: '2rem', borderRadius: '16px', borderLeft: '4px solid #5856D6', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#5856D6', marginBottom: '0.5rem' }}>5. GGT (Gamma-Glutamyl Transferase)</h3>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '1rem', fontWeight: 600 }}>Standard medicine checks: ALT / AST</p>
                            <p style={{ lineHeight: 1.7 }}>
                                <strong>Why you need this:</strong> While often included in a liver panel, GGT is far more than a liver enzyme. It is one of our best surrogate markers for intracellular oxidative stress and depletion of Glutathione (the body's master antioxidant). Elevated GGT may indicate increased oxidative burden.
                            </p>
                            <p style={{ marginTop: '1rem', fontWeight: 700, color: 'var(--color-text)' }}>Optimal Target: &lt; 20 U/L</p>
                        </div>
                    </div>
                </section>

                {/* Call to Actions */}
                <section style={{ 
                    background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.1) 0%, rgba(26, 60, 52, 0.1) 100%)', 
                    padding: '4rem 3rem', 
                    borderRadius: '24px',
                    border: '1px solid rgba(32, 178, 170, 0.3)',
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#1A3C34', marginBottom: '1rem' }}>
                        Ready to Optimise Your Foundation?
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        If you're not sure where to start, I recommend the "Core 3" protocol I curated for the Dispensary, or you can explore the full clinical protocols.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link 
                            href="/protocol" 
                            style={{
                                display: 'inline-block',
                                padding: '1.2rem 3rem',
                                background: '#1A3C34',
                                color: '#FFFFFF',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                borderRadius: '10px',
                                textDecoration: 'none',
                                boxShadow: '0 8px 24px rgba(26, 60, 52, 0.3)',
                                transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
                            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
                        >
                            View All Clinical Protocols
                        </Link>

                        <Link 
                            href="/shop" 
                            style={{
                                display: 'inline-block',
                                padding: '1.2rem 3rem',
                                background: 'var(--color-accent-teal)',
                                color: '#FFFFFF',
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                borderRadius: '10px',
                                textDecoration: 'none',
                                boxShadow: '0 8px 24px rgba(32, 178, 170, 0.3)',
                                transition: 'transform 0.2s ease'
                            }}
                            onMouseEnter={e => e.target.style.transform = 'translateY(-3px)'}
                            onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
                        >
                            Shop The "Core 3" Stack
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
