
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SafetyAccordion from '../components/SafetyAccordion';

const Shop = () => {
    const protocols = [
        {
            icon: '🧬',
            title: '1. LONGEVITY: THE FOUNDATION',
            goal: 'Genomic Stability & Cellular Maintenance',
            safety: [
                {
                    title: "Blood Thinners",
                    content: "This protocol contains high-dose Omega-3 fatty acids, which have a mild blood-thinning effect. If you are taking anticoagulants (e.g., Warfarin), consult your physician."
                }
            ],
            products: [
                {
                    name: 'Vitamin D3 + K2 (Liquid)',
                    subtitle: 'The Solar Hormone',
                    why: 'Vitamin D controls 5% of your genome. Without K2, calcium goes to your arteries. With K2, it goes to your bones.',
                    pick: 'Thorne Vitamin D/K2 Liquid',
                    amazonLink: 'https://geni.us/BvEHS0',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Vitamin%20D%20Liquid'
                },
                {
                    name: 'GlyNAC (Glycine + NAC)',
                    subtitle: 'The Cellular Shield',
                    why: 'The combination proven to restore glutathione synthesis and correct intracellular oxidative stress in older adults.',
                    pick: 'Life Extension NAC + Glycine Powder',
                    amazonLink: 'https://geni.us/glynac',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20NAC%20Glycine'
                },
                {
                    name: 'Methylated B-Complex',
                    subtitle: 'The Methylator',
                    why: 'Essential for DNA repair and users with the MTHFR gene mutation who cannot process standard folic acid.',
                    pick: 'Thorne Basic B',
                    amazonLink: 'https://geni.us/6fwizx',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Basic%20B%20Complex'
                },
                {
                    name: 'High-DHA Omega-3',
                    subtitle: 'The Foundation',
                    why: 'The structural brick for cell membranes. Reduces systemic inflammation and supports longevity.',
                    pick: 'Nordic Naturals ProOmega 2000',
                    amazonLink: 'https://geni.us/0id7g',
                    iherbLink: 'https://www.iherb.com/search?kw=Nordic%20Naturals%20ProOmega%202000'
                },
                {
                    name: 'NAD+ Precursor (NR)',
                    subtitle: 'The Repair Signal',
                    why: 'Restores NAD+ levels which drop 50% by age 40. Essential for sirtuin activation and DNA repair.',
                    pick: 'Tru Niagen (300mg)',
                    amazonLink: 'https://geni.us/v8Dd0',
                    iherbLink: 'https://www.iherb.com/search?kw=Tru%20Niagen'
                },
                {
                    name: 'Urolithin A',
                    subtitle: 'The Recycler',
                    why: 'Triggers mitophagy—the recycling of old, dysfunctional mitochondria.',
                    pick: 'Timeline Nutrition Mitopure',
                    amazonLink: 'https://geni.us/urolithin-a',
                    iherbLink: 'https://www.iherb.com/search?kw=Urolithin%20A'
                }
            ]
        },
        {
            icon: '🧠',
            title: '2. BRAIN FOG / CLARITY',
            goal: 'Focus, Memory & Cognitive Drive',
            safety: [
                {
                    title: "Kidney Health",
                    content: "Creatine increases creatinine levels in blood work. If you have CKD, consult your nephrologist."
                },
                {
                    title: "Mood Medication",
                    content: "Contains Rhodiola. If you are taking SSRIs or MAOIs, consult your physician."
                }
            ],
            products: [
                {
                    name: 'Creatine Monohydrate',
                    subtitle: 'The Battery',
                    why: 'Recycles ATP in the brain to prevent mental fatigue and cognitive crashing.',
                    pick: 'Thorne Creatine (Creapure)',
                    amazonLink: 'https://geni.us/0FAo',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Creatine'
                },
                {
                    name: 'CDP-Choline (Citicoline)',
                    subtitle: 'The Architect',
                    why: 'Increases acetylcholine (the learning neurotransmitter) and repairs cell membranes.',
                    pick: 'Jarrow Formulas Citicoline',
                    amazonLink: 'https://geni.us/BEY5',
                    iherbLink: 'https://www.iherb.com/search?kw=Jarrow%20Formulas%20Citicoline'
                },
                {
                    name: 'Rhodiola Rosea',
                    subtitle: 'The Stress Shield',
                    why: 'Modulates cortisol and reduces decision fatigue. Helps you stay calm under pressure.',
                    pick: 'Thorne Rhodiola',
                    amazonLink: 'https://geni.us/V4dBIU',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Rhodiola'
                },
                {
                    name: 'L-Theanine',
                    subtitle: 'The Flow State',
                    why: 'Increases alpha brain waves to promote "relaxed alertness" and reduce caffeine jitters.',
                    pick: 'Thorne Theanine',
                    unavailable: true
                }
            ]
        },
        {
            icon: '⚡',
            title: '3. NEUROLONGEVITY',
            goal: 'Neuroprotection & Structural Repair',
            safety: [
                {
                    title: "Blood Thinners",
                    content: "Contains Omega-3s. Monitor if on anticoagulants."
                },
                {
                    title: "Renal Function",
                    content: "Magnesium is excreted by the kidneys. Use caution in renal failure."
                }
            ],
            products: [
                {
                    name: 'Magnesium L-Threonate',
                    subtitle: 'The "Brain Cleaner"',
                    why: 'The only magnesium proven to cross the blood-brain barrier. Calms NMDA receptors.',
                    pick: 'Life Extension Neuro-Mag',
                    amazonLink: 'https://geni.us/hAgLBH',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20Neuro-Mag'
                },
                {
                    name: 'High-DHA Omega-3',
                    subtitle: 'The Structure',
                    why: '60% of your brain is fat. DHA is the raw material for building new neurons.',
                    pick: 'Nordic Naturals ProOmega 2000',
                    amazonLink: 'https://geni.us/0id7g',
                    iherbLink: 'https://www.iherb.com/search?kw=Nordic%20Naturals%20ProOmega%202000'
                },
                {
                    name: 'Curcumin Phytosome',
                    subtitle: 'The Anti-Inflammatory',
                    why: 'Lowers neuroinflammation. Phytosome technology ensures it reaches the brain.',
                    pick: 'Thorne Curcumin Phytosome',
                    amazonLink: 'https://geni.us/fCiHC',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Curcumin%20Phytosome'
                },
                {
                    name: 'Lion\'s Mane Mushroom',
                    subtitle: 'The Neuro-Grower',
                    why: 'Stimulates Nerve Growth Factor (NGF) to support neuroplasticity.',
                    pick: 'Real Mushrooms Lion\'s Mane',
                    unavailable: true
                }
            ]
        },
        {
            icon: '🔥',
            title: '4. ENERGY / VITALITY',
            goal: 'Mitochondrial Biogenesis & ATP',
            products: [
                {
                    name: 'CoQ10 + PQQ (Ubiquinol)',
                    subtitle: 'The Spark',
                    why: 'Essential for electron transport and mitochondrial biogenesis.',
                    pick: 'Life Extension Super Ubiquinol',
                    amazonLink: 'https://geni.us/kyBLJ3m',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20Super%20Ubiquinol'
                },
                {
                    name: 'PQQ (BioPQQ)',
                    subtitle: 'The Builder',
                    why: 'Triggers the growth of brand new mitochondria.',
                    pick: 'Jarrow Formulas PQQ',
                    amazonLink: 'https://geni.us/gZB1H',
                    iherbLink: 'https://www.iherb.com/search?kw=Jarrow%20Formulas%20PQQ'
                },
                {
                    name: 'Acetyl-L-Carnitine',
                    subtitle: 'The Fuel Shuttle',
                    why: 'Shuttles fatty acids into the mitochondria to be burned for fuel.',
                    pick: 'Life Extension Acetyl-L-Carnitine',
                    amazonLink: 'https://geni.us/Dp3jeAg',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20Acetyl-L-Carnitine'
                },
                {
                    name: 'R-Lipoic Acid (ALA)',
                    subtitle: 'The Engine Cleaner',
                    why: 'Potent mitochondrial antioxidant that recycles other antioxidants.',
                    pick: 'Life Extension Super R-Lipoic Acid',
                    amazonLink: 'https://geni.us/aRKwL6',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20Super%20R-Lipoic%20Acid'
                },
                {
                    name: 'Grass-Fed Whey Isolate',
                    subtitle: 'The Building Block',
                    why: 'Bioavailable protein to support muscle mass and metabolic rate.',
                    pick: 'Thorne Whey Isolate',
                    amazonLink: 'https://geni.us/zrRNpo',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Whey%20Protein%20Isolate'
                }
            ]
        },
        {
            icon: '🛡️',
            title: '5. GUT HEALTH: THE BARRIER',
            goal: 'Immune Regulation & Absorption',
            products: [
                {
                    name: 'L-Glutamine',
                    subtitle: 'The Gut Healer',
                    why: 'The primary fuel source for enterocytes (cell lining of the gut).',
                    pick: 'Thorne L-Glutamine',
                    unavailable: true
                },
                {
                    name: 'Zinc Carnosine',
                    subtitle: 'The Mucosal Shield',
                    why: 'Restores the integrity of the stomach lining.',
                    pick: 'Life Extension Gastro-Ease',
                    unavailable: true
                },
                {
                    name: 'Curcumin Phytosome',
                    subtitle: 'The Fire Extinguisher',
                    why: 'Reduces gut inflammation and supports barrier integrity.',
                    pick: 'Thorne Curcumin Phytosome',
                    amazonLink: 'https://geni.us/fCiHC',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Curcumin%20Phytosome'
                },
                {
                    name: 'High-DHA Omega-3',
                    subtitle: 'The Modulator',
                    why: 'Supports a healthy microbiome and reduces intestinal inflammation.',
                    pick: 'Nordic Naturals ProOmega 2000',
                    amazonLink: 'https://geni.us/0id7g',
                    iherbLink: 'https://www.iherb.com/search?kw=Nordic%20Naturals%20ProOmega%202000'
                },
                {
                    name: 'Collagen Peptides',
                    subtitle: 'The Mesh',
                    why: 'Provides the amino acid matrix to seal the gut barrier.',
                    pick: 'Vital Proteins Collagen',
                    unavailable: true
                },
                {
                    name: 'Spore-Based Probiotics',
                    subtitle: 'The Reset',
                    why: 'Survives stomach acid to colonize the gut.',
                    pick: 'MegaSporeBiotic',
                    unavailable: true
                }
            ]
        },
        {
            icon: '😴',
            title: '6. SLEEP & RECOVERY',
            goal: 'Deep Sleep & Regulation',
            safety: [
                {
                    title: "Kidney Function",
                    content: "Magnesium is cleared by the kidneys. Caution in renal failure."
                }
            ],
            products: [
                {
                    name: 'Magnesium Bisglycinate',
                    subtitle: 'The Body Relaxer',
                    why: 'Highly absorbable form that promotes physical relaxation.',
                    pick: 'Thorne Magnesium Bisglycinate',
                    unavailable: true
                },
                {
                    name: 'Ashwagandha KSM-66',
                    subtitle: 'The Cortisol Thermostat',
                    why: 'Lowers evening cortisol to allow natural melatonin production.',
                    pick: 'Jarrow Formulas KSM-66',
                    amazonLink: 'https://geni.us/AxGBnX',
                    iherbLink: 'https://www.iherb.com/search?kw=Jarrow%20Formulas%20Ashwagandha%20KSM-66'
                },
                {
                    name: 'Magnesium L-Threonate',
                    subtitle: 'The Relaxer',
                    why: 'Supports GABA levels and calm for sleep onset.',
                    pick: 'Life Extension Neuro-Mag',
                    amazonLink: 'https://geni.us/hAgLBH',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20Neuro-Mag'
                },
                {
                    name: 'Glycine',
                    subtitle: 'The Core Body Temp',
                    why: 'Lowers core body temperature to initiate sleep.',
                    pick: 'Life Extension Glycine',
                    unavailable: true
                },
                {
                    name: 'Apigenin',
                    subtitle: 'The Sedative',
                    why: 'Chamomile extract that binds to benzodiazepine receptors (mildly).',
                    pick: 'Life Extension Bio-Quercetin',
                    unavailable: true
                }
            ]
        },
        {
            icon: '🩸',
            title: '7. METABOLIC HEALTH',
            goal: 'Insulin Sensitivity & Glucose Control',
            products: [
                {
                    name: 'Berberine Phytosome',
                    subtitle: 'The Switch',
                    why: 'Activates AMPK to improve insulin sensitivity and glucose disposal.',
                    pick: 'Thorne Berberine-500',
                    amazonLink: 'https://geni.us/ANVjh',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Berberine'
                },
                {
                    name: 'R-Lipoic Acid (ALA)',
                    subtitle: 'The Antioxidant',
                    why: 'Improves insulin sensitivity and reduces oxidative stress from high blood sugar.',
                    pick: 'Life Extension Super R-Lipoic Acid',
                    amazonLink: 'https://geni.us/aRKwL6',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20Super%20R-Lipoic%20Acid'
                },
                {
                    name: 'Chromium Picolinate',
                    subtitle: 'The Sensitizer',
                    why: 'Improves insulin receptor function.',
                    pick: 'Thorne Chromium',
                    unavailable: true
                },
                {
                    name: 'Myo-Inositol',
                    subtitle: 'The Signal',
                    why: 'Functions as a secondary messenger for insulin signaling.',
                    pick: 'Jarrow Formulas Inositol',
                    unavailable: true
                },
                {
                    name: 'Ceylon Cinnamon',
                    subtitle: 'The Mimic',
                    why: 'Improves glucose uptake by mimicking insulin activity.',
                    pick: 'Organic Ceylon Cinnamon',
                    unavailable: true
                }
            ]
        }
    ];

    return (
        <div style={{
            backgroundColor: '#0B0F11',
            color: '#FFFFFF',
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
            <HeroSection
                backgroundImage="/capsules_bg_user.jpg"
                title={
                    <span style={{
                        background: 'linear-gradient(135deg, #FFFFFF 0%, var(--color-accent-teal) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}>
                        THE EMPOWERVIDA DISPENSARY
                    </span>
                }
                subtitle="Clinical-Grade Solutions for Longevity & Performance"
                overlay="linear-gradient(180deg, rgba(11, 15, 17, 0.7) 0%, #0B0F11 100%)"
                textColor="#FFFFFF"
                subtitleColor="var(--color-accent-teal)"
            >
                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.6,
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    The supplement industry is unregulated and full of impurities. I have curated this dispensary to include only the brands I trust, verify, and use in my own clinical practice.
                </p>
            </HeroSection>

            {/* Protocols Section */}
            <section style={{
                padding: '4rem 2rem',
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
                                color: '#FFFFFF'
                            }}>
                                {protocol.title}
                            </h2>
                            <p style={{
                                fontSize: '1.2rem',
                                color: 'var(--color-accent-teal)',
                                fontWeight: 500,
                                marginBottom: protocol.citation ? '1rem' : '0'
                            }}>
                                Goal: {protocol.goal}
                            </p>
                            {protocol.citation && (
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'rgba(255,255,255,0.7)',
                                    maxWidth: '700px',
                                    margin: '0 auto',
                                    fontStyle: 'italic',
                                    lineHeight: 1.5,
                                    marginBottom: protocol.clinicalDeepDive ? '1.5rem' : '0'
                                }}>
                                    🔬 Clinical Backbone: {protocol.citation}
                                </p>
                            )}

                            {/* Clinical Deep Dive */}
                            {protocol.clinicalDeepDive && (
                                <div style={{
                                    maxWidth: '800px',
                                    margin: '0 auto',
                                    backgroundColor: 'rgba(32, 178, 170, 0.05)',
                                    border: '1px solid rgba(32, 178, 170, 0.2)',
                                    borderRadius: '12px',
                                    padding: '1.5rem',
                                    textAlign: 'left'
                                }}>
                                    <p style={{
                                        fontSize: '0.95rem',
                                        color: 'rgba(255,255,255,0.9)',
                                        lineHeight: 1.6,
                                        marginBottom: '1rem'
                                    }}>
                                        <strong>The Findings:</strong> {protocol.clinicalDeepDive.findings}
                                    </p>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-accent-teal)',
                                        fontStyle: 'italic',
                                        marginBottom: '1rem'
                                    }}>
                                        <strong>Note:</strong> {protocol.clinicalDeepDive.commercialNote}
                                    </p>
                                    <div style={{
                                        borderTop: '1px solid rgba(255,255,255,0.1)',
                                        paddingTop: '1rem',
                                        marginTop: '1rem'
                                    }}>
                                        <p style={{
                                            fontSize: '1rem',
                                            fontWeight: 600,
                                            color: '#FFFFFF'
                                        }}>
                                            👨‍⚕️ Doctor's Verdict: "{protocol.clinicalDeepDive.verdict}"
                                        </p>
                                    </div>
                                </div>
                            )}
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
                                        backgroundColor: '#1A2023',
                                        color: '#FFFFFF',
                                        borderRadius: '16px',
                                        padding: '2.5rem',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                                        border: '1px solid rgba(255, 255, 255, 0.05)'
                                    }}
                                >
                                    <h3 style={{
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        marginBottom: '0.5rem',
                                        color: '#FFFFFF'
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
                                        backgroundColor: 'rgba(32, 178, 170, 0.1)',
                                        borderRadius: '8px',
                                        borderLeft: '4px solid var(--color-accent-teal)'
                                    }}>
                                        <p style={{
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            color: '#FFFFFF',
                                            marginBottom: '0.5rem'
                                        }}>
                                            The Medical Why:
                                        </p>
                                        <p style={{
                                            fontSize: '0.95rem',
                                            color: 'rgba(255,255,255,0.8)',
                                            lineHeight: 1.6
                                        }}>
                                            {product.why}
                                        </p>
                                    </div>

                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: 'rgba(255,255,255,0.6)',
                                        marginBottom: '1.5rem',
                                        fontStyle: 'italic'
                                    }}>
                                        Dr. Gavin's Pick: <strong>{product.pick}</strong>
                                    </p>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {product.unavailable ? (
                                            <div style={{
                                                display: 'block',
                                                backgroundColor: 'rgba(255,255,255,0.05)',
                                                color: 'rgba(255,255,255,0.3)',
                                                padding: '1rem 2rem',
                                                borderRadius: '8px',
                                                textAlign: 'center',
                                                fontWeight: 700,
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.05em',
                                                cursor: 'not-allowed',
                                                border: '1px solid rgba(255,255,255,0.05)',
                                                userSelect: 'none'
                                            }}>
                                                Item Coming Soon
                                            </div>
                                        ) : (
                                            <>


                                                {/* Secondary Button: Amazon */}
                                                <a
                                                    href={product.amazonLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        display: 'block',
                                                        backgroundColor: 'transparent',
                                                        color: 'rgba(255,255,255,0.6)',
                                                        padding: '0.8rem 2rem',
                                                        borderRadius: '8px',
                                                        textDecoration: 'none',
                                                        fontSize: '0.9rem',
                                                        fontWeight: 600,
                                                        textAlign: 'center',
                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                                                        e.target.style.color = '#FFFFFF';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                                                        e.target.style.color = 'rgba(255,255,255,0.6)';
                                                    }}
                                                >
                                                    CHECK REVIEWS ON AMAZON
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Safety Accordion */}
                        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                            <SafetyAccordion warnings={protocol.safety} />
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Footer Disclaimer */}
            <section style={{
                padding: '4rem 2rem',
                backgroundColor: 'rgba(255, 255, 255, 0.02)',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.05)'
            }}>
                <p style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.6
                }}>
                    <strong>Disclaimer:</strong> These statements have not been evaluated by the TGA or FDA. These products are not intended to diagnose, treat, cure, or prevent any disease. The information provided is for educational purposes only and does not replace the advice of your primary care physician. Always consult a healthcare professional before starting any new supplement regimen.
                </p>
            </section>
        </div>
    );
};

export default Shop;
