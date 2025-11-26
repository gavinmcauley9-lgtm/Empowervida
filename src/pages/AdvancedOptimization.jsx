import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AdvancedOptimization = () => {
    const pillars = [
        {
            title: "THYROID FUNCTION",
            subtitle: "(The Gas Pedal)",
            marker: "Free T3 (Triiodothyronine)",
            logic: "Standard tests only look at TSH (the brain's signal). We look at Free T3—the active hormone that actually hits your cells. Low Free T3 is the primary cause of unexplained fatigue, cold intolerance, and weight gain, even when TSH is 'normal'."
        },
        {
            title: "IRON DYNAMICS",
            subtitle: "(The Double-Edged Sword)",
            marker: "Ferritin",
            logic: "Iron is oxygen transport, but it is also a pro-oxidant. Too low (<50), and you have air hunger. Too high (>200), and you are literally 'rusting' your organs with oxidative stress. We aim for the Goldilocks zone."
        },
        {
            title: "KIDNEY FILTRATION",
            subtitle: "(The True Filter)",
            marker: "Cystatin C",
            logic: "If you lift weights and eat protein, your Creatinine levels will be artificially high, making it look like kidney failure. Cystatin C is a muscle-independent marker. It is the only accurate way to measure kidney health in the athletic population."
        },
        {
            title: "HORMONAL STATUS",
            subtitle: "(The Bio-Availability)",
            marker: "Free Testosterone & SHBG",
            logic: "Total Testosterone is a vanity metric. What matters is Free Testosterone—the amount not bound by SHBG (Sex Hormone Binding Globulin). As we age, SHBG rises and steals our active hormones. We measure both to calculate your true hormonal status."
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
                height: '80vh',
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
                    backgroundImage: 'url(/tier3_hero_user.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.6
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%)',
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
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase'
                    }}>
                        TIER 3: <br />
                        <span style={{ color: '#FF5F00' }}>ADVANCED OPTIMIZATION</span>
                    </h1>
                    <h2 style={{
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        color: '#FFFFFF',
                        marginBottom: '2rem',
                        fontStyle: 'italic'
                    }}>
                        "You have fixed the engine. Now we tune it for speed."
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        fontWeight: 300,
                        color: 'rgba(255,255,255,0.8)',
                        maxWidth: '700px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        The Essential 5 ensure you don't die early. The Advanced Panel ensures you live fully. This tier looks at metabolic rate, oxygen transport, and hormonal bioavailability. This is the difference between 'normal aging' and 'high performance'.
                    </p>
                </motion.div>
            </section>

            {/* Main Content: The 4 Pillars */}
            <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem'
                }}>
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                padding: '2.5rem',
                                borderRadius: '4px',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid #FF5F00', paddingBottom: '1rem' }}>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    marginBottom: '0.25rem',
                                    textTransform: 'uppercase'
                                }}>
                                    {pillar.title}
                                </h3>
                                <span style={{
                                    fontSize: '1rem',
                                    color: '#FF5F00',
                                    fontStyle: 'italic'
                                }}>
                                    {pillar.subtitle}
                                </span>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    color: '#888888',
                                    fontWeight: 600,
                                    display: 'block',
                                    marginBottom: '0.5rem'
                                }}>
                                    Target Marker
                                </span>
                                <span style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    fontFamily: 'monospace'
                                }}>
                                    {pillar.marker}
                                </span>
                            </div>

                            <p style={{
                                fontSize: '1rem',
                                color: '#CCCCCC',
                                lineHeight: 1.6,
                                flexGrow: 1
                            }}>
                                {pillar.logic}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer / CTA */}
            <section style={{
                padding: '6rem 2rem',
                textAlign: 'center',
                background: 'linear-gradient(to top, #050505 0%, #000000 100%)',
                borderTop: '1px solid rgba(255,255,255,0.1)'
            }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: '2rem',
                        textTransform: 'uppercase'
                    }}>
                        Ready to Optimize?
                    </h2>
                    <Link to="/shop" style={{
                        display: 'inline-block',
                        padding: '1rem 3rem',
                        backgroundColor: '#FF5F00',
                        color: '#FFFFFF',
                        textDecoration: 'none',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        borderRadius: '4px',
                        letterSpacing: '0.05em',
                        transition: 'all 0.3s ease',
                        border: '1px solid #FF5F00'
                    }}>
                        BOOK A CONSULT
                    </Link>

                    <p style={{
                        fontSize: '0.85rem',
                        color: '#666666',
                        fontStyle: 'italic',
                        marginTop: '3rem'
                    }}>
                        Medical Disclaimer: This guide is for educational purposes. Discuss results with a qualified practitioner.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AdvancedOptimization;
