import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Protocol = () => {
    const phases = [
        {
            title: "PHASE 1: THE ENGINE BLOCK",
            subtitle: "Foundation",
            content: "The non-negotiables. Includes Coenzyme Q10 (Ubiquinol) 100-200mg for the spark, Magnesium Malate 300-400mg for stability, and High-Strength B-Complex (B2 & B3) as co-factors."
        },
        {
            title: "PHASE 2: THE FUEL INJECTORS",
            subtitle: "Transport",
            content: "The delivery system. Includes Acetyl-L-Carnitine (ALCAR) 500-1000mg to shuttle fatty acids into the brain and mitochondria, and Creatine Monohydrate 5g as a cellular battery buffer."
        },
        {
            title: "PHASE 3: THE EXHAUST SYSTEM",
            subtitle: "Antioxidants",
            content: "The shield against toxic waste. Includes N-Acetyl Cysteine (NAC) 600mg to replenish Glutathione, Alpha-Lipoic Acid (ALA) 300-600mg to recycle antioxidants, and Vitamin C 500-1000mg."
        }
    ];

    return (
        <div style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
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
                padding: '0 2rem'
            }}>
                {/* Background Image with Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/tactical_hero_user.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.8 // Increased opacity for better visibility of the kit
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, #FFFFFF 100%)',
                    zIndex: 1
                }}></div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative', zIndex: 2, maxWidth: '900px' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        color: '#FFFFFF'
                    }}>
                        THE ESSENTIALS: <br />
                        <span style={{ color: '#C19A6B' }}>MITOCHONDRIAL DEFENSE</span>
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        borderLeft: '4px solid #FF5F00',
                        paddingLeft: '1.5rem',
                        textAlign: 'left'
                    }}>
                        "Fatigue is not a lack of willpower. It is a cellular power failure."
                    </p>
                </motion.div>
            </section>

            {/* Introduction */}
            <section style={{ padding: '2rem 2rem', maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.8,
                        color: '#CCCCCC'
                    }}
                >
                    In the Emergency Room, I manage acute failure. In longevity medicine, we manage chronic capacity. The goal of this protocol is to optimize the performance of your mitochondria—the microscopic power plants inside every cell. This is a tactical stack designed to support three phases: <strong>Fuel Transport, Energy Generation, and Waste Removal.</strong>
                </motion.p>
            </section>

            {/* The Protocol Phases */}
            <section style={{
                padding: '4rem 2rem 8rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Background for Phases */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/capsules_bg_user.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.15, // Subtle background texture
                    zIndex: 0
                }}></div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 1
                }}>
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '16px',
                                padding: '2rem',
                                height: '100%',
                                border: '1px solid var(--color-border)',
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
                            <div style={{
                                textTransform: 'uppercase',
                                color: '#FF5F00',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                marginBottom: '0.5rem',
                                fontSize: '0.9rem'
                            }}>
                                {phase.subtitle}
                            </div>
                            <h2 style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                color: '#FFFFFF'
                            }}>
                                {phase.title}
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                lineHeight: 1.6,
                                color: '#DDDDDD',
                                margin: 0
                            }}>
                                {phase.content}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Operational Deployment Section */}
            <section style={{
                padding: '0 0 8rem',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Section Header with Holographic Clock */}
                <div style={{
                    position: 'relative',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '4rem',
                    overflow: 'hidden'
                }}>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/holographic_clock.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.8,
                        zIndex: 0
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, #FFFFFF 0%, transparent 20%, transparent 80%, #FFFFFF 100%)',
                        pointerEvents: 'none',
                        zIndex: 1
                    }}></div>
                    <h2 style={{
                        position: 'relative',
                        zIndex: 2,
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        textShadow: '0 0 20px rgba(255, 95, 0, 0.5)',
                        textAlign: 'center',
                        padding: '0 1rem'
                    }}>
                        Operational Deployment
                    </h2>
                </div>

                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                    {/* Two Column Layout */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        marginBottom: '6rem'
                    }}>
                        {/* Column 1: Morning */}
                        <div>
                            <div style={{
                                borderBottom: '2px solid #FF5F00',
                                paddingBottom: '1rem',
                                marginBottom: '2rem'
                            }}>
                                <h3 style={{ fontSize: '2.5rem', color: '#FF5F00', margin: 0, fontFamily: 'monospace' }}>07:00 <span style={{ fontSize: '1rem', verticalAlign: 'middle' }}>AM</span></h3>
                                <p style={{ color: '#FFFFFF', margin: '0.5rem 0 0', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.05em' }}>MORNING DEPLOYMENT</p>
                                <p style={{ color: '#888888', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.25rem' }}>Target: Energy Production & Cognitive Drive</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ color: '#FF5F00', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>Take with Breakfast (Fat required for absorption):</p>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#DDDDDD' }}>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#FF5F00', top: '2px' }}>►</span>
                                        <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.25rem' }}>CoQ10 (Ubiquinol):</strong>
                                        100-200mg <span style={{ color: '#888888', fontSize: '0.9rem' }}>(Needs fat to absorb)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#FF5F00', top: '2px' }}>►</span>
                                        <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.25rem' }}>Acetyl-L-Carnitine:</strong>
                                        500mg <span style={{ color: '#888888', fontSize: '0.9rem' }}>(Best for brain focus)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#FF5F00', top: '2px' }}>►</span>
                                        <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.25rem' }}>B-Complex:</strong>
                                        <span style={{ color: '#888888', fontSize: '0.9rem' }}>(To fuel the Krebs cycle for the day)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#FF5F00', top: '2px' }}>►</span>
                                        <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.25rem' }}>PQQ:</strong>
                                        <span style={{ color: '#888888', fontSize: '0.9rem' }}>(If using)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Evening */}
                        <div>
                            <div style={{
                                borderBottom: '2px solid #FFFFFF',
                                paddingBottom: '1rem',
                                marginBottom: '2rem'
                            }}>
                                <h3 style={{ fontSize: '2.5rem', color: '#FFFFFF', margin: 0, fontFamily: 'monospace' }}>21:00 <span style={{ fontSize: '1rem', verticalAlign: 'middle' }}>PM</span></h3>
                                <p style={{ color: '#FFFFFF', margin: '0.5rem 0 0', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.05em' }}>EVENING RECOVERY</p>
                                <p style={{ color: '#888888', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.25rem' }}>Target: Detoxification & Relaxation</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ color: '#FFFFFF', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>Take 1 Hour Before Bed:</p>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#DDDDDD' }}>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#FFFFFF', top: '2px' }}>►</span>
                                        <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.25rem' }}>Magnesium Malate/Glycinate:</strong>
                                        400mg <span style={{ color: '#888888', fontSize: '0.9rem' }}>(To support GABA and sleep)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#FFFFFF', top: '2px' }}>►</span>
                                        <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.25rem' }}>NAC:</strong>
                                        600mg <span style={{ color: '#888888', fontSize: '0.9rem' }}>(To replenish Glutathione while you sleep)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: '#FFFFFF', top: '2px' }}>►</span>
                                        <strong style={{ color: '#FFFFFF', display: 'block', marginBottom: '0.25rem' }}>Vitamin C:</strong>
                                        <span style={{ color: '#888888', fontSize: '0.9rem' }}>(Synergistic with NAC)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Red Flag Warning Section */}
                    <div style={{
                        background: 'rgba(20, 0, 0, 0.6)',
                        border: '1px solid rgba(255, 50, 50, 0.3)',
                        padding: '3rem',
                        borderRadius: '2px',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Striped warning background */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            background: 'repeating-linear-gradient(45deg, var(--color-bg-alt), var(--color-bg-alt) 10px, #FFFFFF 10px, #FFFFFF 20px)',
                            border: '1px solid var(--color-accent-orange)',
                            borderRadius: '12px',
                            padding: '2rem',
                            color: 'var(--color-text)'
                        }}></div>

                        <h3 style={{
                            color: '#FF3333',
                            fontSize: '1.25rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            fontWeight: 800
                        }}>
                            <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                            WHY MOST SUPPLEMENTS FAIL
                        </h3>
                        <p style={{ color: '#DDDDDD', marginBottom: '2.5rem', fontStyle: 'italic', fontSize: '1.1rem', borderLeft: '3px solid #FF3333', paddingLeft: '1rem' }}>
                            "The supplement industry is the Wild West. It is unregulated and full of fillers. As a doctor, here are the two things I demand you avoid:"
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h4 style={{ color: '#FFFFFF', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1rem' }}>1. Proprietary Blends</h4>
                                <p style={{ color: '#AAAAAA', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    "If a bottle lists a 'Mitochondrial Blend' but hides the exact milligram dosage of each ingredient, it is a scam. They are likely giving you 99% cheap filler and 1% active ingredient. Demand transparency."
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: '#FFFFFF', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1rem' }}>2. The Wrong Forms</h4>
                                <p style={{ color: '#AAAAAA', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    "Magnesium Oxide is cheap, but only 4% is absorbed. CoQ10 as Ubiquinone is useless if you are over 40. Form matters more than dose."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / CTA */}
            <section style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                letterSpacing: '0.05em',
                textDecoration: 'none',
                borderRadius: '2px', // Tactical sharp corners
            }}>
                <Link to="/shop" style={{
                    display: 'inline-block',
                    padding: '1.2rem 3rem',
                    background: 'linear-gradient(45deg, #FF5F00, #FF8C00)',
                    color: '#FFFFFF',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    borderRadius: '2px', // Tactical sharp corners
                    border: '1px solid #FF5F00',
                    transition: 'all 0.2s ease'
                }}>
                    BUY YOUR ARMOR NOW
                </Link>
            </section>
            <Footer />
        </div>
    );
};

export default Protocol;
