import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const MitochondrialGuide = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Helmet>
                <title>The Ultimate Guide to Mitochondrial Health | EMPOWERVIDA</title>
                <meta name="description" content="A physician's protocol for reviving your cellular engines. Stop borrowing energy, start creating it." />
            </Helmet>

            {/* Hero Section */}
            <section style={{
                position: 'relative',
                width: '100%',
                height: '80vh',
                overflow: 'hidden',
                background: '#000'
            }}>
                {/* Hero Image with Ken Burns Effect */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    animation: 'kenBurns 20s ease-out infinite alternate'
                }}>
                    <img
                        src="/mitochondrion_hero_cinematic_1764586685814.png"
                        alt="Mitochondrion Revitalization"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                        }}
                    />
                </div>

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '60%',
                    background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0) 100%)',
                    pointerEvents: 'none'
                }} />

                {/* Hero Text with Parallax */}
                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '50%',
                    transform: `translate(-50%, ${scrollY * 0.3}px)`,
                    width: '90%',
                    maxWidth: '1200px',
                    color: '#fff',
                    textAlign: 'center',
                    zIndex: 2
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        fontWeight: 700,
                        marginBottom: '1rem',
                        lineHeight: 1.2,
                        textShadow: '0 4px 20px rgba(0,0,0,0.8)'
                    }}>
                        The Ultimate Guide to Mitochondrial Health
                    </h1>
                    <h2 style={{
                        fontSize: 'clamp(1.2rem, 3vw, 2rem)',
                        fontWeight: 400,
                        marginBottom: '1.5rem',
                        color: 'var(--color-accent-teal)',
                        textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                    }}>
                        Stop Borrowing Energy, Start Creating It.
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                        fontWeight: 300,
                        fontStyle: 'italic',
                        opacity: 0.9
                    }}>
                        A Physician's Protocol for Reviving Your Cellular Engines
                    </p>
                    <p style={{
                        fontSize: '1rem',
                        marginTop: '1rem',
                        opacity: 0.7
                    }}>
                        By Dr. Gavin | The Longevity Architect
                    </p>
                </div>

                {/* Ken Burns Animation */}
                <style>{`
          @keyframes kenBurns {
            0% { transform: scale(1); }
            100% { transform: scale(1.05); }
          }
        `}</style>
            </section>

            {/* Introduction Section */}
            <section style={{
                maxWidth: '800px',
                margin: '0 auto',
                padding: '4rem 2rem',
                color: 'var(--color-text)',
                fontSize: '1.1rem',
                lineHeight: 1.8
            }}>
                <p style={{ marginBottom: '1.5rem' }}>
                    If you hit a wall at 2:00 PM every day, you don't have a caffeine deficiency. You have an <strong>energy crisis at a cellular level</strong>.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                    In my practice, high-performing individuals constantly ask me how to fix brain fog, chronic fatigue, and slow recovery. They are drinking four cups of coffee a day, trying to "borrow" energy from tomorrow to get through today.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                    But caffeine is just a neurological trick—it blocks the signals of fatigue, but it doesn't generate fuel. To fix the problem, we have to look deeper. We have to look at your <strong>mitochondria</strong>.
                </p>

                <p style={{ marginBottom: '1.5rem' }}>
                    These are the microscopic power plants inside nearly every cell in your body. You have trillions of them, turning the food you eat into ATP—the currency of life. When they are healthy, you feel sharp, resilient, and energetic. When they dysfunction—due to aging, stress, or poor inputs—you feel old, regardless of your actual age.
                </p>

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
            </section>

            {/* Phase 2: The Armor */}
            <section style={{
                background: 'linear-gradient(135deg, rgba(46, 125, 50, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '6rem 2rem',
                borderTop: '1px solid rgba(46, 125, 50, 0.2)'
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
                            Managing Oxidative Stress & Inflammation
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
                            href="/shop"
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
            </section>
        </>
    );
};

export default MitochondrialGuide;
