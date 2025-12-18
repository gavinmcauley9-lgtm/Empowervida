import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function About() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dr. Gavin McAuley",
        "jobTitle": "Family Physician & Longevity Architect",
        "description": "Practicing physician who transformed from 125kg burnout to longevity specialist. Evidence-based protocols for metabolic health and cellular optimization.",
        "url": "https://empowervida.com/about",
        "alumniOf": "Medical School",
        "knowsAbout": ["Longevity Medicine", "Mitochondrial Health", "Metabolic Optimization", "Evidence-Based Medicine"]
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-bg)',
            minHeight: '100vh',
            color: 'var(--color-text)',
            fontFamily: '"Inter", sans-serif'
        }}>
            <SEO
                title="About Dr. Gavin | The Doctor Who Saved Himself | EMPOWERVIDA"
                description="From 125kg burnout to longevity architect. Why a veteran physician left the assembly line of modern medicine to build a blueprint for true health."
                keywords="dr gavin mcauley, longevity doctor, physician burnout, metabolic health, weight loss transformation, evidence-based wellness"
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
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        lineHeight: '1.1',
                        marginBottom: '2rem',
                        color: '#FFFFFF',
                        fontWeight: '800',
                        fontFamily: '"Manrope", sans-serif',
                        textShadow: '0 4px 20px rgba(0,0,0,0.8)'
                    }}>
                        I Spent <span style={{ color: 'var(--color-accent-teal)' }}>16 Years</span> Saving Lives.<br />
                        Then I Realized I Needed to Save My Own.
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '800px',
                        margin: '0 auto',
                        fontWeight: '400',
                        textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                    }}>
                        Why a veteran physician left the "assembly line" of modern medicine<br />to build a blueprint for true longevity.
                    </p>
                </div>
            </section>

            <div className="container" style={{ paddingTop: '6rem', paddingBottom: '0' }}>

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
                            The George Clooney Myth
                        </h2>
                        <div style={{ width: '50px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '2rem' }}></div>
                    </div>
                    <div>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            When I graduated from the University of Aberdeen in 2009, I threw myself into medicine—first Emergency Medicine, then General Practice. The work was rewarding, but the lifestyle was brutal.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginTop: '1.5rem' }}>
                            Night shifts. Understaffing. Chronic stress. The "work hard, play hard" culture from medical school followed me into practice. Alcohol became stress relief. Sleep became a luxury. Nutrition became an afterthought.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginTop: '1.5rem' }}>
                            I was treating patients, but I was losing myself.
                        </p>
                    </div>
                </section>

                {/* Section 2: The Crash (Dark Background) */}
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
                            fontSize: '6rem',
                            fontWeight: '800',
                            color: '#FF5722',
                            opacity: 0.15,
                            marginBottom: '-2rem',
                            textAlign: 'center'
                        }}>125kg</div>

                        <h2 style={{
                            fontSize: '2.5rem',
                            marginBottom: '2rem',
                            color: '#FFFFFF',
                            fontWeight: '700',
                            textAlign: 'center'
                        }}>
                            The Crash
                        </h2>

                        <div style={{ width: '50px', height: '4px', background: '#FF5722', margin: '0 auto 3rem' }}></div>

                        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
                            The stress of the job took its toll. I peaked at <strong style={{ color: '#FF5722' }}>125kg</strong>. I developed sleep apnea and lived in a fog of fatigue. I was using food and alcohol to numb the stress of the day.
                        </p>
                        <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)', marginBottom: '1.5rem' }}>
                            I was a doctor who knew the pathology of disease, but I had <strong>lost the recipe for health</strong>.
                        </p>
                        <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#20B2AA', fontStyle: 'italic', marginTop: '2rem', textAlign: 'center' }}>
                            "That was my breaking point. I realized I couldn't lead patients to vitality if I was walking towards an early grave."
                        </p>
                    </div>
                </section>

                {/* Section 3: The Evolution */}
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
                        }}>-30kg</div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)', fontWeight: '700' }}>
                            From 125kg to The Protocol
                        </h2>
                        <div style={{ width: '50px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '2rem' }}></div>
                    </div>
                    <div style={{ order: 1 }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            In 2022, I made a choice: fix the root cause or accept decline.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginTop: '1.5rem' }}>
                            I didn't need willpower. I needed a protocol. I optimized my mitochondrial function with CoQ10, ALCAR, and PQQ. I restored insulin sensitivity with berberine, alpha-lipoic acid, and time-restricted eating. I lost 30kg. Sleep apnea resolved. Energy stabilized.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginTop: '1.5rem' }}>
                            Today, I practice holistic medicine, consulting with patients at Polln Clinic and through <strong style={{ color: 'var(--color-accent-teal)' }}>EMPOWERVIDA</strong>. This is the medicine I practice now: not reactive, but proactive. Not waiting for disease, but engineering resilience.
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
                            { label: '5 Years Emergency Medicine', icon: '🚑' },
                            { label: '5 Years General Practice', icon: '⚕️' },
                            { label: 'Lost 30kg in 2022', icon: '💪' },
                            { label: 'Polln Clinic Holistic Medicine', icon: '🌿' }
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
                    I've Walked This Road
                </h2>
                <p style={{ fontSize: '1.3rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', fontStyle: 'italic' }}>
                    From 125kg, brain fog, sleep apnea, and burnout, back to health.
                </p>
                <p style={{ fontSize: '1.5rem', color: 'var(--color-accent-teal)', marginBottom: '3rem', fontWeight: '600' }}>
                    You can too.
                </p>
                <Link
                    to="/longevity"
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
