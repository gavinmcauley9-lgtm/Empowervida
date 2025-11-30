import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Shop = () => {
    const protocols = [
        {
            icon: '🧠',
            title: 'THE BRAIN PROTOCOL',
            goal: 'Cognitive Precision, Memory, & Focus',
            products: [
                {
                    name: 'High-DHA Omega-3',
                    subtitle: 'The Foundation',
                    why: '60% of your brain is fat. DHA is the structural brick used to build new neurons. If you don\'t have enough, neuroplasticity fails.',
                    pick: 'Nordic Naturals ProOmega 2000',
                    link: 'https://geni.us/0id7g'
                },
                {
                    name: 'CoQ10 + PQQ (Ubiquinol)',
                    subtitle: 'The Spark',
                    why: 'Mitochondrial biogenesis. This stack helps grow new mitochondria and keeps the existing ones firing, especially if you are over 40 or taking Statins.',
                    pick: 'Life Extension Super Ubiquinol',
                    link: 'https://geni.us/kyBLJ3m'
                }
            ]
        },
        {
            icon: '😴',
            title: 'THE DEEP SLEEP PROTOCOL',
            goal: 'Glymphatic Clearance & Recovery',
            products: [
                {
                    name: 'Magnesium L-Threonate',
                    subtitle: 'The "Brain Cleaner"',
                    why: 'The only form of Magnesium proven to cross the blood-brain barrier. It calms NMDA receptors to allow for Deep Delta Wave sleep, where the brain cleans toxins.',
                    pick: 'Life Extension Neuro-Mag',
                    link: 'https://geni.us/hAgLBH'
                },
                {
                    name: 'Ashwagandha KSM-66',
                    subtitle: 'The Cortisol Thermostat',
                    why: 'Adaptogens reset your HPA axis. If evening cortisol is too high (Tired but Wired), Ashwagandha brings it down by 27.9%. Allows natural melatonin to rise for deep sleep. KSM-66 is the clinically studied root extract.',
                    pick: 'Jarrow Formulas KSM-66',
                    link: 'https://geni.us/AxGBnX'
                }
            ]
        },
        {
            icon: '🔥',
            title: 'THE ANTI-INFLAMMATION PROTOCOL',
            goal: 'Joint Health, Mood Stability, & Pain Relief',
            products: [
                {
                    name: 'Curcumin Phytosome',
                    subtitle: 'The Fire Extinguisher',
                    why: 'Standard turmeric doesn\'t absorb. We use Phytosome technology to ensure the curcumin reaches the brain and joints to lower systemic inflammation markers (IL-6).',
                    pick: 'Thorne Curcumin Phytosome',
                    link: 'https://geni.us/fCiHC'
                }
            ]
        },
        {
            icon: '⚡',
            title: 'THE ENERGY & MUSCLE PROTOCOL',
            goal: 'Physical Resilience & Metabolic Fire',
            products: [
                {
                    name: 'Creatine Monohydrate',
                    subtitle: 'The Battery',
                    why: 'Not just for muscles. Creatine recycles ATP in the brain to prevent mental fatigue and cognitive crashing in the afternoon.',
                    pick: 'Thorne Creatine (Creapure)',
                    link: 'https://geni.us/0FAo'
                },
                {
                    name: 'Grass-Fed Whey Isolate',
                    subtitle: 'The Building Block',
                    why: 'To trigger muscle repair, you need 30g of bioavailable protein. Isolate absorbs rapidly to overcome "anabolic resistance" in aging muscle.',
                    pick: 'Thorne Whey Isolate',
                    link: 'https://geni.us/zrRNpo'
                },
                {
                    name: 'Acetyl-L-Carnitine (ALCAR)',
                    subtitle: 'The Fuel Shuttle',
                    why: 'Shuttles fatty acids into the mitochondria to burn fat for brain fuel.',
                    pick: 'Life Extension Acetyl-L-Carnitine',
                    link: 'https://geni.us/Dp3jeAg'
                },
                {
                    name: 'R-Lipoic Acid (ALA)',
                    subtitle: 'The Engine Cleaner',
                    why: 'A potent mitochondrial antioxidant that cleans up exhaust fumes (free radicals).',
                    pick: 'Life Extension Super R-Lipoic Acid',
                    link: 'https://geni.us/aRKwL6'
                }
            ]
        },
        {
            icon: '🧬',
            title: 'THE METABOLIC RESET',
            goal: 'Blood Sugar Control & Anti-Aging',
            products: [
                {
                    name: 'Berberine Phytosome',
                    subtitle: 'The Switch',
                    why: 'Activates AMPK (the longevity switch) to improve insulin sensitivity and stop the "caramelization" (Glycation) of your collagen and organs.',
                    pick: 'Thorne Berberine-500',
                    link: 'https://geni.us/ANVjh'
                }
            ]
        },
        {
            icon: '🧬',
            title: 'THE GENETIC PROTOCOL (METHYLATION)',
            goal: 'Cellular Ignition & DNA Repair',
            products: [
                {
                    name: 'Methylated B-Complex',
                    subtitle: 'The Tissue-Ready Formula',
                    why: 'For the 40% of patients with the MTHFR gene who cannot process standard folic acid. This "tissue-ready" formula ensures your mitochondria can actually use the fuel you eat.',
                    pick: 'Thorne Basic B',
                    link: 'https://geni.us/6fwizx'
                }
            ]
        },
        {
            icon: '☀️',
            title: 'THE IMMUNE & HORMONAL HEALTH PROTOCOL',
            goal: 'Mood, Immunity, & Bone Density',
            products: [
                {
                    name: 'Vitamin D3 + K2 (Liquid)',
                    subtitle: 'The Solar Hormone',
                    why: 'Vitamin D is not a vitamin—it\'s a secosteroid hormone that controls 5% of your genome. Without K2, calcium goes to your arteries. With K2, it goes to your bones. Liquid drops bypass gut malabsorption.',
                    pick: 'Thorne Vitamin D/K2 Liquid',
                    link: 'https://geni.us/BvEHS0'
                }
            ]
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
            <SEO
                title="The EMPOWERVIDA Dispensary - Clinical-Grade Longevity Supplements"
                description="Physician-curated supplement protocols for brain health, deep sleep, inflammation control, energy, and metabolic health. Evidence-based, third-party tested."
                keywords="clinical supplements, longevity protocols, physician recommended, omega 3 DHA, magnesium threonate, curcumin phytosome, berberine AMPK, creatine monohydrate, CoQ10 ubiquinol"
                canonical="/shop"
                ogImage="/capsules_bg_user.jpg"
            />

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
                {/* Background Image */}
                <div className="ken-burns-active" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/capsules_bg_user.jpg)',
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
                    background: 'linear-gradient(180deg, rgba(11, 15, 17, 0.7) 0%, rgba(11, 15, 17, 0.95) 100%)',
                    zIndex: 1
                }}></div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{
                        position: 'relative',
                        zIndex: 2,
                        maxWidth: '900px'
                    }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        background: 'linear-gradient(135deg, #FFFFFF 0%, var(--color-accent-teal) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        THE EMPOWERVIDA DISPENSARY
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        color: 'var(--color-accent-teal)',
                        fontWeight: 600,
                        marginBottom: '2rem',
                        letterSpacing: '0.05em'
                    }}>
                        Clinical-Grade Solutions for Longevity & Performance
                    </p>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.6,
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        The supplement industry is unregulated and full of impurities. I have curated this dispensary to include only the brands I trust, verify, and use in my own clinical practice.
                    </p>
                </motion.div>
            </section>

            {/* Protocols Section */}
            <section style={{
                padding: '6rem 2rem',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {protocols.map((protocol, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        style={{
                            marginBottom: '6rem'
                        }}
                    >
                        {/* Protocol Header */}
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '3rem'
                        }}>
                            <div style={{
                                fontSize: '4rem',
                                marginBottom: '1rem'
                            }}>
                                {protocol.icon}
                            </div>
                            <h2 style={{
                                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                fontWeight: 800,
                                marginBottom: '1rem',
                                color: 'var(--color-text)'
                            }}>
                                {protocol.title}
                            </h2>
                            <p style={{
                                fontSize: '1.2rem',
                                color: 'var(--color-accent-teal)',
                                fontWeight: 500
                            }}>
                                Goal: {protocol.goal}
                            </p>
                        </div>

                        {/* Products Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '2rem',
                            maxWidth: '1200px',
                            margin: '0 auto'
                        }}>
                            {protocol.products.map((product, productIndex) => (
                                <motion.div
                                    key={productIndex}
                                    whileHover={{ y: -8 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        color: '#0B0F11',
                                        borderRadius: '16px',
                                        padding: '2.5rem',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                        border: '1px solid rgba(32, 178, 170, 0.1)'
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        marginBottom: '0.5rem',
                                        color: '#0B0F11'
                                    }}>
                                        {product.name}
                                    </h3>
                                    <p style={{
                                        fontSize: '1rem',
                                        color: 'var(--color-accent-teal)',
                                        fontWeight: 600,
                                        marginBottom: '1.5rem'
                                    }}>
                                        {product.subtitle}
                                    </p>

                                    <div style={{
                                        marginBottom: '1.5rem',
                                        padding: '1rem',
                                        backgroundColor: 'rgba(32, 178, 170, 0.05)',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid var(--color-accent-teal)'
                                    }}>
                                        <p style={{
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: '#0B0F11',
                                            marginBottom: '0.5rem'
                                        }}>
                                            The Medical Why:
                                        </p>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: '#333',
                                            lineHeight: 1.6
                                        }}>
                                            {product.why}
                                        </p>
                                    </div>

                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: '#666',
                                        marginBottom: '1.5rem',
                                        fontStyle: 'italic'
                                    }}>
                                        Dr. Gavin's Pick: <strong>{product.pick}</strong>
                                    </p>

                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'block',
                                            backgroundColor: 'var(--color-accent-teal)',
                                            color: '#FFFFFF',
                                            padding: '1rem 2rem',
                                            borderRadius: '8px',
                                            textDecoration: 'none',
                                            fontWeight: 700,
                                            textAlign: 'center',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.05em',
                                            boxShadow: '0 4px 15px rgba(32, 178, 170, 0.3)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = '#1ba098';
                                            e.target.style.transform = 'translateY(-2px)';
                                            e.target.style.boxShadow = '0 6px 20px rgba(32, 178, 170, 0.4)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = 'var(--color-accent-teal)';
                                            e.target.style.transform = 'translateY(0)';
                                            e.target.style.boxShadow = '0 4px 15px rgba(32, 178, 170, 0.3)';
                                        }}
                                    >
                                        BUY ON AMAZON →
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Footer Disclaimer */}
            <section style={{
                padding: '4rem 2rem',
                backgroundColor: 'rgba(32, 178, 170, 0.05)',
                textAlign: 'center'
            }}>
                <p style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6
                }}>
                    <strong>Disclaimer:</strong> These statements have not been evaluated by the FDA. These products are not intended to diagnose, treat, cure, or prevent any disease. Consult your physician before starting any supplement protocol, especially if you are taking medications or have underlying health conditions.
                </p>
            </section>
        </div>
    );
};

export default Shop;
