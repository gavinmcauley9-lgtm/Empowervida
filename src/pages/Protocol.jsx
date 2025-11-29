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
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
            minHeight: '100vh',
            fontFamily: '"Inter", sans-serif',
            overflowX: 'hidden'
        }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '70vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 2rem',
                overflow: 'hidden'
            }}>
                {/* Background Image with Overlay */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/molecular_network_teal.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0,
                        opacity: 0.8
                    }}
                ></motion.div>

                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 50%, #FFFFFF 100%)',
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
                        color: 'var(--color-text)',
                        fontFamily: '"Manrope", sans-serif'
                    }}>
                        THE ESSENTIALS: <br />
                        <span style={{ color: 'var(--color-accent-teal)' }}>MITOCHONDRIAL DEFENSE</span>
                    </h1>
                    <p style={{
                        fontSize: '1.5rem',
                        fontWeight: 500,
                        color: 'var(--color-text-muted)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        borderLeft: '4px solid var(--color-accent-teal)',
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
                        color: 'var(--color-text)',
                        fontWeight: 400
                    }}
                >
                    In the Emergency Room, I manage acute failure. In longevity medicine, we manage chronic capacity. The goal of this protocol is to optimize the performance of your mitochondria—the microscopic power plants inside every cell. This is a tactical stack designed to support three phases: <strong style={{ color: 'var(--color-accent-teal)' }}>Fuel Transport, Energy Generation, and Waste Removal.</strong>
                </motion.p>
            </section>

            {/* The Protocol Phases */}
            <section style={{
                padding: '6rem 2rem 8rem',
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
                    backgroundImage: 'url(/dna_white_bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.4,
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
                    {/* PHASE 1: THE ENERGY MATRIX */}
                    <div className="protocol-phase" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center',
                        marginBottom: '8rem'
                    }}>
                        <div data-aos="fade-right">
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: 800,
                                color: 'rgba(0,0,0,0.05)',
                                lineHeight: 1,
                                marginBottom: '-1rem',
                                marginLeft: '-0.5rem'
                            }}>01</div>
                            <h2 style={{
                                fontSize: '2.5rem',
                                color: '#1A3C34',
                                marginBottom: '1.5rem',
                                fontFamily: '"Manrope", sans-serif'
                            }}>
                                THE ENERGY MATRIX
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                The non-negotiables. Includes Coenzyme Q10 (Ubiquinol) to ignite mitochondrial respiration, Magnesium Malate for stability, and Methylated B-Complex to catalyze fuel conversion.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: '#008080', fontWeight: 700 }}>+</span> CoQ10 (Ubiquinol) 200mg
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: '#008080', fontWeight: 700 }}>+</span> Magnesium Malate 400mg
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: '#008080', fontWeight: 700 }}>+</span> Methylated B-Complex
                                </li>
                            </ul>
                        </div>
                        <div data-aos="fade-left" style={{
                            background: '#F5F5F7',
                            borderRadius: '24px',
                            padding: '3rem',
                            minHeight: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img src="/mitochondria_biogenesis.png" alt="Mitochondrial Structure" style={{ maxWidth: '100%', filter: 'grayscale(100%) opacity(0.8)' }} />
                        </div>
                    </div>

                    {/* PHASE 2: METABOLIC FLOW */}
                    <div className="protocol-phase" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center',
                        marginBottom: '8rem',
                        direction: 'rtl' // Alternating layout
                    }}>
                        <div data-aos="fade-left" style={{ direction: 'ltr' }}>
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: 800,
                                color: 'rgba(0,0,0,0.05)',
                                lineHeight: 1,
                                marginBottom: '-1rem',
                                marginLeft: '-0.5rem'
                            }}>02</div>
                            <h2 style={{
                                fontSize: '2.5rem',
                                color: '#1A3C34',
                                marginBottom: '1.5rem',
                                fontFamily: '"Manrope", sans-serif'
                            }}>
                                METABOLIC FLOW
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                The delivery architecture. Includes Acetyl-L-Carnitine (ALCAR) to shuttle fatty acids across the mitochondrial membrane, and Creatine Monohydrate as a rapid-response ATP buffer.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: '#008080', fontWeight: 700 }}>+</span> Acetyl-L-Carnitine 1000mg
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: '#008080', fontWeight: 700 }}>+</span> Creatine Monohydrate 5g
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: '#008080', fontWeight: 700 }}>+</span> PQQ 20mg
                                </li>
                            </ul>
                        </div>
                        <div data-aos="fade-right" style={{
                            background: '#F5F5F7',
                            borderRadius: '24px',
                            padding: '3rem',
                            minHeight: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            direction: 'ltr'
                        }}>
                            <img src="/cellular_oil_change.png" alt="Metabolic Transport" style={{ maxWidth: '100%', filter: 'grayscale(100%) opacity(0.8)' }} />
                        </div>
                    </div>

                    {/* PHASE 3: CELLULAR RENEWAL */}
                    <div className="protocol-phase" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '4rem',
                        alignItems: 'center',
                        marginBottom: '8rem'
                    }}>
                        <div data-aos="fade-right">
                            <div style={{
                                fontSize: '4rem',
                                fontWeight: 800,
                                color: 'rgba(0,0,0,0.05)',
                                lineHeight: 1,
                                marginBottom: '-1rem',
                                marginLeft: '-0.5rem'
                            }}>03</div>
                            <h2 style={{
                                fontSize: '2.5rem',
                                color: '#1A3C34',
                                marginBottom: '1.5rem',
                                fontFamily: '"Manrope", sans-serif'
                            }}>
                                CELLULAR RENEWAL
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                The purity protocol. Includes N-Acetyl Cysteine (NAC) to replenish Glutathione reserves, Alpha-Lipoic Acid (ALA) for oxidative defense, and Vitamin C for systemic clearing.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: '#008080', fontWeight: 700 }}>+</span> NAC 600mg
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: '#008080', fontWeight: 700 }}>+</span> Alpha-Lipoic Acid 300mg
                                </li>
                                <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <span style={{ color: '#008080', fontWeight: 700 }}>+</span> Vitamin C 1000mg
                                </li>
                            </ul>
                        </div>
                        <div data-aos="fade-left" style={{
                            background: '#F5F5F7',
                            borderRadius: '24px',
                            padding: '3rem',
                            minHeight: '400px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img src="/glymphatic_system_v2.png" alt="Cellular Cleaning" style={{ maxWidth: '100%', filter: 'grayscale(100%) opacity(0.8)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Deployment Section */}
            <section style={{
                padding: '0 0 8rem',
                position: 'relative',
                zIndex: 2,
                background: 'var(--color-bg)'
            }}>
                {/* Section Header */}
                <div style={{
                    position: 'relative',
                    height: '500px',
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
                        backgroundImage: 'url(/clinical_supplements_white.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: 0
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, #FFFFFF 100%)',
                        pointerEvents: 'none',
                        zIndex: 1
                    }}></div>
                    <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                            fontWeight: 800,
                            color: 'var(--color-text)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            fontFamily: '"Manrope", sans-serif',
                            marginBottom: '1rem'
                        }}>
                            THE DAILY REGIMEN
                        </h2>
                        <p style={{
                            color: 'var(--color-accent-teal)',
                            fontWeight: 700,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            background: 'rgba(255,255,255,0.8)',
                            padding: '0.5rem 1rem',
                            borderRadius: '4px',
                            display: 'inline-block'
                        }}>
                            Timing & Dosage
                        </p>
                    </div>
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
                                borderBottom: '2px solid var(--color-accent-teal)',
                                paddingBottom: '1rem',
                                marginBottom: '2rem'
                            }}>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-accent-teal)', margin: 0, fontFamily: 'monospace' }}>07:00 <span style={{ fontSize: '1rem', verticalAlign: 'middle' }}>AM</span></h3>
                                <p style={{ color: 'var(--color-text)', margin: '0.5rem 0 0', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.05em' }}>MORNING PROTOCOL</p>
                                <p style={{ colour: 'var(--color-text-muted)', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.25rem' }}>Target: Energy Production & Cognitive Drive</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ color: 'var(--color-accent-teal)', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>Take with Breakfast (Fat required for absorption):</p>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text)' }}>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', top: '2px' }}>►</span>
                                        <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }}>CoQ10 (Ubiquinol):</strong>
                                        100-200mg <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>(Needs fat to absorb)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', top: '2px' }}>►</span>
                                        <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }}>Acetyl-L-Carnitine:</strong>
                                        500mg <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>(Best for brain focus)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', top: '2px' }}>►</span>
                                        <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }}>B-Complex:</strong>
                                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>(To fuel the Krebs cycle for the day)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-accent-teal)', top: '2px' }}>►</span>
                                        <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }}>PQQ:</strong>
                                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>(If using)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2: Evening */}
                        <div>
                            <div style={{
                                borderBottom: '2px solid var(--color-text-muted)',
                                paddingBottom: '1rem',
                                marginBottom: '2rem'
                            }}>
                                <h3 style={{ fontSize: '2.5rem', color: 'var(--color-text-muted)', margin: 0, fontFamily: 'monospace' }}>21:00 <span style={{ fontSize: '1rem', verticalAlign: 'middle' }}>PM</span></h3>
                                <p style={{ color: 'var(--color-text)', margin: '0.5rem 0 0', fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.05em' }}>EVENING RECOVERY</p>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontStyle: 'italic', marginTop: '0.25rem' }}>Target: Detoxification & Relaxation</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <p style={{ color: 'var(--color-text-muted)', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>Take 1 Hour Before Bed:</p>
                                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-text)' }}>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-text-muted)', top: '2px' }}>►</span>
                                        <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }}>Magnesium Malate/Glycinate:</strong>
                                        400mg <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>(To support GABA and sleep)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-text-muted)', top: '2px' }}>►</span>
                                        <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }}>NAC:</strong>
                                        600mg <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>(To replenish Glutathione while you sleep)</span>
                                    </li>
                                    <li style={{ marginBottom: '1.5rem', paddingLeft: '2rem', position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'var(--color-text-muted)', top: '2px' }}>►</span>
                                        <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.25rem' }}>Vitamin C:</strong>
                                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>(Synergistic with NAC)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Red Flag Warning Section */}
                    <div style={{
                        background: 'var(--color-bg-alt)',
                        border: '1px solid rgba(255, 95, 0, 0.2)',
                        padding: '3rem',
                        borderRadius: '16px',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                    }}>
                        <h3 style={{
                            color: 'var(--color-accent-orange)',
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
                        <p style={{ color: 'var(--color-text)', marginBottom: '2.5rem', fontStyle: 'italic', fontSize: '1.1rem', borderLeft: '3px solid var(--color-accent-orange)', paddingLeft: '1rem' }}>
                            "The supplement industry is the Wild West. It is unregulated and full of fillers. As a doctor, here are the two things I demand you avoid:"
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1rem', fontWeight: 700 }}>1. Proprietary Blends</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    "If a bottle lists a 'Mitochondrial Blend' but hides the exact milligram dosage of each ingredient, it is a scam. They are likely giving you 99% cheap filler and 1% active ingredient. Demand transparency."
                                </p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--color-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '1rem', fontWeight: 700 }}>2. The Wrong Forms</h4>
                                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                    "Magnesium Oxide is cheap, but only 4% is absorbed. CoQ10 as Ubiquinone is useless if you are over 40. Form matters more than dose."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section style={{
                padding: '6rem 2rem',
                textAlign: 'center',
                marginTop: '4rem'
            }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: 'var(--color-text)' }}>
                    Ready to Upgrade Your Biology?
                </h2>
                <Link to="/shop" style={{
                    display: 'inline-block',
                    padding: '1.2rem 3rem',
                    background: 'var(--color-accent-teal)',
                    color: '#FFFFFF',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    letterSpacing: '0.05em',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 4px 15px rgba(32, 178, 170, 0.3)',
                    transition: 'all 0.2s ease'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(32, 178, 170, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(32, 178, 170, 0.3)';
                    }}
                >
                    GET THE FULL STACK
                </Link>
            </section>

        </div>
    );
};

export default Protocol;
