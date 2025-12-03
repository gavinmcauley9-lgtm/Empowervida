
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SafetyAccordion from '../components/SafetyAccordion';

const Shop = () => {
    const protocols = [
        {
            icon: '🧠',
            title: 'THE BRAIN PROTOCOL',
            goal: 'Cognitive Precision, Memory, & Focus',
            citation: (
                <span>
                    Aligned with the findings of Silveri et al. (<strong>Harvard/McLean Hospital</strong>), showing Citicoline significantly enhances frontal lobe bioenergetics and membrane turnover.
                </span>
            ),
            safety: [
                {
                    title: "Blood Thinners",
                    content: "This stack contains high-dose Omega-3 fatty acids, which have a mild blood-thinning effect. If you are taking anticoagulants (e.g., Warfarin, Heparin, Xarelto), consult your physician to monitor your bleeding risk."
                }
            ],
            products: [
                {
                    name: 'High-DHA Omega-3',
                    subtitle: 'The Foundation',
                    why: '60% of your brain is fat. DHA is the structural brick used to build new neurons. If you don\'t have enough, neuroplasticity fails.',
                    pick: 'Nordic Naturals ProOmega 2000',
                    amazonLink: 'https://geni.us/0id7g',
                    iherbLink: 'https://www.iherb.com/search?kw=Nordic%20Naturals%20ProOmega%202000'
                },
                {
                    name: 'CoQ10 + PQQ (Ubiquinol)',
                    subtitle: 'The Spark',
                    why: 'Mitochondrial biogenesis. This stack helps grow new mitochondria and keeps the existing ones firing, especially if you are over 40 or taking Statins.',
                    pick: 'Life Extension Super Ubiquinol',
                    amazonLink: 'https://geni.us/kyBLJ3m',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20Super%20Ubiquinol'
                },
                {
                    name: 'CDP-Choline (Citicoline)',
                    subtitle: 'The Architect',
                    why: 'Crosses the blood-brain barrier to increase acetylcholine (the learning neurotransmitter) and repair cell membranes. Essential for focus, memory formation, and cognitive endurance.',
                    pick: 'Jarrow Formulas Citicoline (Cognizin)',
                    amazonLink: 'https://geni.us/BEY5',
                    iherbLink: 'https://www.iherb.com/search?kw=Jarrow%20Formulas%20Citicoline'
                },
                {
                    name: 'PQQ (Pyrroloquinoline Quinone)',
                    subtitle: 'The Builder',
                    why: 'Triggers mitochondrial biogenesis—the growth of brand new mitochondria. The only supplement proven to increase the number of cellular power plants in your brain.',
                    pick: 'Jarrow Formulas PQQ (BioPQQ)',
                    amazonLink: 'https://geni.us/gZB1H',
                    iherbLink: 'https://www.iherb.com/search?kw=Jarrow%20Formulas%20PQQ'
                }
            ]
        },
        {
            icon: '😴',
            title: 'THE DEEP SLEEP PROTOCOL',
            goal: 'Glymphatic Clearance & Recovery',
            safety: [
                {
                    title: "Mood Medication",
                    content: "The Advanced Protocol contains Rhodiola Rosea. If you are currently taking SSRIs, MAOIs, or other antidepressants, consult your prescribing physician to avoid potential interactions."
                },
                {
                    title: "Renal Failure",
                    content: "Magnesium is excreted by the kidneys. If you have diagnosed Renal Failure or severe Kidney Disease, do not take magnesium supplements without strict medical supervision, as toxic accumulation can occur."
                },
                {
                    title: "Hypotension",
                    content: "Magnesium relaxes smooth muscle and may lower blood pressure. If you have clinically low blood pressure, monitor your levels when starting this protocol."
                }
            ],
            products: [
                {
                    name: 'Magnesium L-Threonate',
                    subtitle: 'The "Brain Cleaner"',
                    why: 'The only form of Magnesium proven to cross the blood-brain barrier. It calms NMDA receptors to allow for Deep Delta Wave sleep, where the brain cleans toxins.',
                    pick: 'Life Extension Neuro-Mag',
                    amazonLink: 'https://geni.us/hAgLBH',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20Neuro-Mag'
                },
                {
                    name: 'Ashwagandha KSM-66',
                    subtitle: 'The Cortisol Thermostat',
                    why: 'Adaptogens reset your HPA axis. If evening cortisol is too high (Tired but Wired), Ashwagandha brings it down by 27.9%. Allows natural melatonin to rise for deep sleep. KSM-66 is the clinically studied root extract.',
                    pick: 'Jarrow Formulas KSM-66',
                    amazonLink: 'https://geni.us/AxGBnX',
                    iherbLink: 'https://www.iherb.com/search?kw=Jarrow%20Formulas%20Ashwagandha%20KSM-66'
                },
                {
                    name: 'Rhodiola Rosea',
                    subtitle: 'The Stress Shield',
                    why: 'An adaptogen that modulates cortisol and reduces decision fatigue. Helps you stay calm under pressure without sedation. Must be standardized to 3% Rosavins and 1% Salidrosides.',
                    pick: 'Thorne Rhodiola',
                    amazonLink: 'https://geni.us/V4dBIU',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Rhodiola'
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
                    amazonLink: 'https://geni.us/fCiHC',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Curcumin%20Phytosome'
                }
            ]
        },
        {
            icon: '⚡',
            title: 'THE ENERGY & MUSCLE PROTOCOL',
            goal: 'Physical Resilience & Metabolic Fire',
            citation: (
                <span>
                    Validated by Rae et al. (<strong>The Royal Society</strong>, 2003) demonstrating significant improvements in working memory and fluid intelligence via creatine-driven ATP recycling.
                </span>
            ),
            safety: [
                {
                    title: "Kidney Health",
                    content: "Creatine Monohydrate is safe for healthy individuals. However, if you have pre-existing Chronic Kidney Disease (CKD) or impaired renal function, consult your nephrologist before use, as creatine metabolism increases creatinine levels in blood work."
                },
                {
                    title: "Surgery",
                    content: "Supplements can affect metabolism. Discontinue use 2 weeks prior to any scheduled surgery."
                }
            ],
            products: [
                {
                    name: 'Creatine Monohydrate',
                    subtitle: 'The Battery',
                    why: 'Not just for muscles. Creatine recycles ATP in the brain to prevent mental fatigue and cognitive crashing in the afternoon.',
                    pick: 'Thorne Creatine (Creapure)',
                    amazonLink: 'https://geni.us/0FAo',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Creatine'
                },
                {
                    name: 'Grass-Fed Whey Isolate',
                    subtitle: 'The Building Block',
                    why: 'To trigger muscle repair, you need 30g of bioavailable protein. Isolate absorbs rapidly to overcome "anabolic resistance" in aging muscle.',
                    pick: 'Thorne Whey Isolate',
                    amazonLink: 'https://geni.us/zrRNpo',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Whey%20Protein%20Isolate'
                },
                {
                    name: 'Acetyl-L-Carnitine (ALCAR)',
                    subtitle: 'The Fuel Shuttle',
                    why: 'Shuttles fatty acids into the mitochondria to burn fat for brain fuel.',
                    pick: 'Life Extension Acetyl-L-Carnitine',
                    amazonLink: 'https://geni.us/Dp3jeAg',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20Acetyl-L-Carnitine'
                },
                {
                    name: 'R-Lipoic Acid (ALA)',
                    subtitle: 'The Engine Cleaner',
                    why: 'A potent mitochondrial antioxidant that cleans up exhaust fumes (free radicals).',
                    pick: 'Life Extension Super R-Lipoic Acid',
                    amazonLink: 'https://geni.us/aRKwL6',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20Super%20R-Lipoic%20Acid'
                }
            ]
        },
        {
            icon: '🧬',
            title: 'THE LONGEVITY & CELLULAR RENEWAL PROTOCOL',
            goal: 'DNA Repair, Mitophagy, & Anti-Aging',
            citation: (
                <span>
                    Based on the groundbreaking randomized clinical trials from <strong>Baylor College of Medicine</strong> (Sekhar et al., 2021-2023).
                </span>
            ),
            clinicalDeepDive: {
                findings: "This specific combination of Glycine and NAC was shown to correct intracellular Glutathione deficiency, restore mitochondrial fuel oxidation, and significantly lower oxidative stress and inflammation markers in older adults to levels comparable to younger individuals.",
                commercialNote: "Taking NAC alone is not enough—you need the combination to unlock the anti-aging benefit.",
                verdict: "If I were to pick only one supplement for a patient over 50 to protect their future health, it would be GlyNAC. It is that important."
            },
            products: [
                {
                    name: 'GlyNAC (Glycine + NAC)',
                    subtitle: 'The Cellular Shield',
                    why: 'The combination proven to restore glutathione synthesis. Glycine is the rate-limiting amino acid for glutathione production, and NAC provides the cysteine. Together, they are the most potent intracellular antioxidant system.',
                    pick: 'Life Extension NAC + Glycine Powder',
                    amazonLink: 'https://geni.us/glynac',
                    iherbLink: 'https://www.iherb.com/search?kw=Life%20Extension%20NAC%20Glycine'
                },
                {
                    name: 'NAD+ Precursor (Nicotinamide Riboside)',
                    subtitle: 'The Repair Signal',
                    why: 'NAD+ levels drop 50% by age 40. This is the master molecule for DNA repair (PARP enzymes), sirtuin activation (longevity genes), and mitochondrial function. NR is the most clinically validated and FDA-notified safe precursor.',
                    pick: 'Tru Niagen (300mg)',
                    amazonLink: 'https://geni.us/v8Dd0',
                    iherbLink: 'https://www.iherb.com/search?kw=Tru%20Niagen'
                },
                {
                    name: 'Urolithin A (Mitopure)',
                    subtitle: 'The Recycler',
                    why: 'The only molecule proven to trigger mitophagy—the recycling of old, dysfunctional mitochondria. You cannot get clinical doses from pomegranate juice. Only 40% of people can produce it naturally.',
                    pick: 'Timeline Nutrition Mitopure',
                    amazonLink: 'https://geni.us/urolithin-a',
                    iherbLink: 'https://www.iherb.com/search?kw=Urolithin%20A'
                }
            ]
        },
        {
            icon: '🔥',
            title: 'THE METABOLIC RESET',
            goal: 'Blood Sugar Control & Anti-Aging',
            products: [
                {
                    name: 'Berberine Phytosome',
                    subtitle: 'The Switch',
                    why: 'Activates AMPK (the longevity switch) to improve insulin sensitivity and stop the "caramelization" (Glycation) of your collagen and organs.',
                    pick: 'Thorne Berberine-500',
                    amazonLink: 'https://geni.us/ANVjh',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Berberine'
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
                    amazonLink: 'https://geni.us/6fwizx',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Basic%20B%20Complex'
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
                    amazonLink: 'https://geni.us/BvEHS0',
                    iherbLink: 'https://www.iherb.com/search?kw=Thorne%20Vitamin%20D%20Liquid'
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
                                        {/* Primary Button: iHerb */}
                                        <a
                                            href={product.iherbLink}
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
                                            SHOP AT IHERB (BEST PRICE)
                                        </a>
                                        {/* TODO: Add your iHerb Affiliate Code to the iherbLink above (e.g., ?rcode=YOURCODE) */}

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
