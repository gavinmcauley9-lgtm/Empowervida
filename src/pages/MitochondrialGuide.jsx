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

            {/* Placeholder for Fuel/Armor/Renovation sections */}
            <section style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <p style={{
                    fontSize: '1.5rem',
                    color: 'var(--color-text-muted)',
                    fontStyle: 'italic'
                }}>
                    [Fuel, Armor, and Renovation sections coming next...]
                </p>
            </section>
        </>
    );
};

export default MitochondrialGuide;
