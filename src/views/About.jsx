"use client";

import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function About() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Gavin McAuley",
        "honorificPrefix": "Dr.",
        "givenName": "Gavin",
        "familyName": "McAuley",
        "jobTitle": "Family Physician, Clinical Focus in Longevity",
        "description": "Practicing physician with a clinical focus on longevity. Evidence-based protocols for metabolic health and cellular optimization.",
        "url": "https://empowervida.com/about",
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "University of Aberdeen School of Medicine",
            "sameAs": "https://www.abdn.ac.uk/medical"
        },
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "MBChB (MD equivalent)"
        },
        "medicalSpecialty": [
            "Emergency Medicine",
            "General Practice",
            "Longevity Medicine",
            "Preventive Medicine"
        ],
        "knowsAbout": [
            "Longevity Medicine",
            "Mitochondrial Health",
            "Metabolic Optimization",
            "Insulin Resistance",
            "Cellular Health",
            "Evidence-Based Medicine"
        ],
        "sameAs": [
            "https://www.linkedin.com/in/gavin-mcauley-62147151/",
            "https://drgavinmcauley.substack.com"
        ]
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-bg)',
            minHeight: '100vh',
            color: 'var(--color-text)',
            fontFamily: '"Inter", sans-serif'
        }}>
            <SEO
                title="About Dr. Gavin | Physician & Longevity Educator | EMPOWERVIDA"
                description="Meet Dr. Gavin McAuley — a physician specialising in evidence-based longevity medicine and metabolic health education."
                keywords="dr gavin mcauley, longevity doctor, longevity medicine, metabolic health, evidence-based wellness"
                canonical="/about"
                ogImage="/water_refraction.png"
                schemaData={personSchema}
            />

            {/* Hero Section - The Hook */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 2rem',
                overflow: 'hidden',
                marginBottom: '0'
            }}>
                {/* Background Image */}
                <div className="ken-burns-active" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/about_hero_transformation.png)',
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
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)',
                    zIndex: 1
                }}></div>

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px' }} data-aos="fade-up">
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        lineHeight: '1.1',
                        marginBottom: '2rem',
                        color: '#FFFFFF',
                        fontWeight: '800',
                        fontFamily: '"Manrope", sans-serif',
                        textShadow: '0 4px 20px rgba(0,0,0,0.8)'
                    }}>
                        Bridging the Gap Between <span style={{ color: 'var(--color-accent-teal)' }}>Traditional Medicine</span> & Biohacking.
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontWeight: '400',
                        textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                    }}>
                        I'm a physician who spent 16 years in acute and general practice medicine before expanding my clinical focus toward proactive health optimisation.
                    </p>
                </div>
            </section>

            <div className="container" style={{ paddingTop: '6rem', paddingBottom: '0' }}>

                {/* Profile Image with Quote */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginBottom: '6rem',
                    gap: '2.5rem'
                }} data-aos="fade-up">
                    <div style={{
                        position: 'relative',
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid var(--color-accent-teal)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}>
                        <img
                            src="/dr-gavin-mcauley.jpg"
                            alt="Dr. Gavin McAuley - GP and Longevity Physician, founder of EMPOWERVIDA"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center top'
                            }}
                        />
                    </div>
                    <blockquote style={{
                        textAlign: 'center',
                        maxWidth: '700px',
                        margin: '0',
                        padding: '0 2rem'
                    }}>
                        <p style={{
                            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                            fontStyle: 'italic',
                            color: 'var(--color-text)',
                            lineHeight: '1.6',
                            fontWeight: '500',
                            margin: '0'
                        }}>
                            "I spent years meeting people when it was already urgent.<br />
                            <span style={{ color: 'var(--color-accent-teal)' }}>Now I help people long before it gets to that point.</span>"
                        </p>
                    </blockquote>
                </div>

                {/* Section 1: The George Clooney Myth */}
                <section style={{
                    marginBottom: '8rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div>
                        <div style={{
                            fontSize: '4rem',
                            fontWeight: '800',
                            color: 'var(--color-accent-teal)',
                            opacity: 0.2,
                            marginBottom: '-1rem'
                        }}>2009</div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)', fontWeight: '700' }}>
                            The Failure of the Assembly Line
                        </h2>
                        <div style={{ width: '50px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '2rem' }}></div>
                    </div>
                    <div>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            When I graduated from the University of Aberdeen in 2009, I threw myself into medicine. Over 16 years, I worked in Emergency Medicine and General Practice. The work was rewarding, but I began to notice a devastating pattern.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginTop: '1.5rem' }}>
                            Modern medicine is exceptional at acute intervention — if you have a heart attack, the system will save your life. However, for complex presentations like chronic fatigue, metabolic dysfunction, and early cognitive decline, there is growing recognition that a more proactive, systems-based approach can complement standard care.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginTop: '1.5rem' }}>
                            I saw patients in their 40s and 50s presenting with patterns consistent with mitochondrial dysfunction and insulin resistance, and the standard toolkit offered limited options beyond symptom management.
                        </p>
                    </div>
                </section>

                {/* Section 2: A New Paradigm (Dark Background) */}
                <section style={{
                    marginBottom: '8rem',
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(26,26,26,0.95) 100%)',
                    padding: '4rem 3rem',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Subtle pattern overlay */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        opacity: 0.03,
                        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)',
                        pointerEvents: 'none'
                    }}></div>

                    <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                        <div style={{
                            fontSize: '4.5rem',
                            fontWeight: '800',
                            color: '#20B2AA',
                            opacity: 0.15,
                            marginBottom: '-2rem',
                            textAlign: 'center'
                        }}>EVIDENCE</div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '2rem',
                            color: '#FFFFFF',
                            fontWeight: '700',
                            textAlign: 'center'
                        }}>
                            A New Paradigm
                        </h2>

                        <div style={{ width: '50px', height: '4px', background: '#20B2AA', margin: '0 auto 3rem' }}></div>

                        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem', textAlign: 'center' }}>
                            Modern healthcare excels at acute intervention but struggles with systemic optimization. To truly address the complex physiological demands of modern life, we require a framework built on proactive metabolic resilience.
                        </p>
                    </div>
                </section>

                {/* Section 3: The Protocol */}
                <section style={{
                    marginBottom: '8rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center'
                }}>
                    <div style={{ order: 2 }}>
                        <div style={{
                            fontSize: '4rem',
                            fontWeight: '800',
                            color: 'var(--color-accent-teal)',
                            opacity: 0.2,
                            marginBottom: '-1rem'
                        }}>CLINICAL</div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)', fontWeight: '700' }}>
                            The Protocol Architecture
                        </h2>
                        <div style={{ width: '50px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '2rem' }}></div>
                    </div>
                    <div style={{ order: 1 }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            The solution to metabolic decline requires a systematic approach.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginTop: '1.5rem' }}>
                            By focusing on optimizing mitochondrial function with specific cofactors and supporting insulin sensitivity with targeted compounds and evidence-based protocols, physiological resilience and energy can be stabilized.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginTop: '1.5rem' }}>
                            Today, I focus on proactive health education through <strong style={{ color: 'var(--color-accent-teal)' }}>EMPOWERVIDA</strong>. This is the approach I emphasize now: not reactive, but proactive. Not waiting for disease, but engineering resilience.
                        </p>
                    </div>
                </section>

                {/* Section 4: The Philosophy */}
                <section style={{
                    marginBottom: '8rem',
                    background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.05) 0%, rgba(32, 178, 170, 0.02) 100%)',
                    padding: '4rem',
                    borderRadius: '16px',
                    border: '2px solid var(--color-accent-teal)',
                    position: 'relative'
                }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)', fontWeight: '700' }}>
                            Science, Not Celebrity
                        </h2>
                        <div style={{ width: '50px', height: '4px', background: 'var(--color-accent-teal)', margin: '0 auto 2rem' }}></div>

                        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '1.5rem' }}>
                            I respect the ER for a heart attack. But for living a long, vibrant life? You need a different toolkit.
                        </p>
                        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            I believe in <em>"Let food be thy medicine,"</em> but I also know that in our modern, stressed world, food isn't always enough. That is where <strong>targeted, clinical supplementation</strong> bridges the gap.
                        </p>

                        <div style={{
                            marginTop: '3rem',
                            padding: '2rem',
                            background: 'rgba(255,255,255,0.5)',
                            borderRadius: '12px',
                            borderLeft: '4px solid var(--color-accent-teal)'
                        }}>
                            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
                                "We focus on <strong>mitochondrial health</strong>, <strong>metabolic flexibility</strong>, and <strong>cognitive resilience</strong>—the foundations that standard medicine overlooks."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Credentials Section */}
                <section style={{ marginBottom: '8rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', color: 'var(--color-text)', fontWeight: '700' }}>The Foundation</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {[
                            { label: 'University of Aberdeen 2009', icon: '🎓' },
                            { label: '16 Years Practising Medicine', icon: '⚕️' },
                            { label: 'Emergency Medicine & General Practice', icon: '🚑' },
                            { label: 'Clinical Focus: Metabolic Health', icon: '🔬' }
                        ].map((cred, index) => (
                            <div key={index} style={{
                                padding: '1.5rem 2rem',
                                border: '2px solid var(--color-accent-teal)',
                                borderRadius: '50px',
                                color: 'var(--color-accent-teal)',
                                fontWeight: '700',
                                fontSize: '1.1rem',
                                background: 'rgba(255,255,255,0.5)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>{cred.icon}</span>
                                {cred.label}
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer CTA */}
            <section style={{
                textAlign: 'center',
                padding: '6rem 2rem',
                background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(26,26,26,1) 100%)',
                color: '#FFFFFF',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#FFFFFF', fontWeight: '700' }}>
                    Begin Your Optimization
                </h2>
                <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', fontStyle: 'italic' }}>
                    Evidence-based protocols designed for comprehensive metabolic health.
                </p>
                <p style={{ fontSize: '1.5rem', color: 'var(--color-accent-teal)', marginBottom: '3rem', fontWeight: '600' }}>
                    Take control of your cellular resilience.
                </p>
                <Link
                    href="/longevity"
                    className="btn-primary"
                    style={{
                        display: 'inline-block',
                        padding: '1.2rem 3rem',
                        fontSize: '1.2rem',
                        textDecoration: 'none',
                        border: 'none'
                    }}
                >
                    Start Your Protocol
                </Link>
                <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.6)', marginTop: '2rem' }}>
                    - Dr. G
                </p>
            </section>
        </div>
    );
}
