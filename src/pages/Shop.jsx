import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Shop = () => {
    const products = [
        {
            name: "CREATINE MONOHYDRATE (CREAPURE®)",
            description: "The 'Mitochondrial Battery Pack.' Instantly recycles ATP for sustained mental energy. Essential for cognitive endurance, focus, and preventing the 2 PM brain crash. Pure micronized monohydrate, third-party tested.",
            link: "https://geni.us/0xUMeY1"
        },
        {
            name: "Magnesium Bisglycinate",
            description: "High absorption, low gastric distress. Critical for sleep and nervous system stability.",
            link: "https://amzn.to/3M5OSCl"
        },
        {
            name: "HIGH-DHA OMEGA-3 FISH OIL",
            description: "The 'Brain Builder.' High-concentration DHA formula for neuronal membrane integrity. Essential for BDNF support, cognitive function, and reducing neuroinflammation. Third-party tested for purity.",
            link: "https://geni.us/XvZjhXc"
        },
        {
            name: "Coenzyme Q10 (Ubiquinol)",
            description: "The mitochondrial spark plug. Vital for electron transport chain efficiency.",
            link: "https://amzn.to/44kS03A"
        },
        {
            name: "MAGNESIUM L-THREONATE (MAGTEIN®)",
            description: "The 'Brain Penetrator.' The only magnesium that effectively crosses the blood-brain barrier. Supports deep sleep architecture, synaptic density, and cognitive restoration. Clinically proven to enhance memory and learning.",
            link: "https://geni.us/OBPS"
        },
        {
            name: "BERBERINE HCL + PHYTOSOME",
            description: "The 'Metabolic Mimetic.' Activates AMPK pathways to regulate glucose and mimic the effects of fasting. Supports insulin sensitivity and lipid metabolism.",
            link: "#"
        },
        {
            name: "VITAMIN D3 + K2 (LIQUID)",
            description: "The 'Hormonal Architect.' Essential for immune signaling and mood regulation. Includes K2 to direct calcium into bones and prevent arterial calcification.",
            link: "#"
        },
        {
            name: "NAC (N-ACETYL CYSTEINE)",
            description: "The 'Cellular Scavenger.' The direct precursor to Glutathione (the body's master antioxidant). Critical for liver health, lung function, and reducing oxidative stress.",
            link: "#"
        },
        {
            name: "CURCUMIN PHYTOSOME (MERIVA®)",
            description: "The 'Fire Extinguisher.' Clinically studied bioavailable curcumin that crosses the blood-brain barrier to calm neuroinflammation. Reduces anxiety, brain fog, and supports mood by lowering inflammatory cytokines. The most potent natural anti-inflammatory.",
            link: "https://geni.us/OrGpAV"
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
                title="Clinical Supplements - Physician-Recommended Stack | EMPOWERVIDA"
                description="Evidence-based supplement recommendations from Dr. Gavin McAuley. Creatine, CoQ10, Magnesium, Omega-3, and more for optimal cellular health."
                keywords="longevity supplements, clinical supplements, CoQ10 ubiquinol, magnesium threonate, omega 3 DHA EPA, creatine monohydrate, mitochondrial support"
                canonical="/shop"
                ogImage="/capsules_bg_user.jpg"
            />
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '60vh',
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
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, #FFFFFF 100%)',
                    zIndex: 1
                }}></div>

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }} data-aos="fade-up">
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        color: 'var(--color-text)',
                        fontFamily: '"Manrope", sans-serif'
                    }}>
                        THE ESSENTIALS: <span style={{ color: 'var(--color-accent-teal)' }}>CLINICAL SUPPLY</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Field-tested tools for mitochondrial defense. These are the specific compounds I recommend for the protocol.
                    </p>
                </div>
            </section>

            {/* Product Grid */}
            <section style={{ padding: '2rem 2rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {products.map((product, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={{
                                background: '#FFFFFF',
                                border: '1px solid var(--color-border)',
                                borderRadius: '16px',
                                padding: '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%',
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
                            <div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: 'var(--color-text)',
                                    marginBottom: '1rem',
                                    textTransform: 'uppercase',
                                    fontFamily: '"Manrope", sans-serif'
                                }}>
                                    {product.name}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: 'var(--color-text-muted)',
                                    lineHeight: 1.6,
                                    marginBottom: '2rem'
                                }}>
                                    {product.description}
                                </p>
                            </div>

                            <a
                                href={product.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    padding: '1rem',
                                    textAlign: 'center',
                                    backgroundColor: 'var(--color-accent-teal)',
                                    color: '#FFFFFF',
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    borderRadius: '8px',
                                    transition: 'all 0.2s ease',
                                    boxShadow: '0 4px 15px rgba(32, 178, 170, 0.3)'
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
                                Check Price &gt;
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer / Disclaimer */}
            <section style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                borderTop: '1px solid var(--color-border)',
                background: 'var(--color-bg)'
            }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-text-muted)',
                        fontStyle: 'italic',
                        margin: 0
                    }}>
                        Disclaimer: As an Amazon Associate, I earn from qualifying purchases. This helps support the platform at no extra cost to you.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Shop;
