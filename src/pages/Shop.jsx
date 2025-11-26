import React from 'react';
import { motion } from 'framer-motion';

const Shop = () => {
    const products = [
        {
            name: "Creatine Monohydrate",
            description: "The cellular battery buffer. Essential for ATP recycling and cognitive function.",
            link: "https://amzn.to/3XTdwbX"
        },
        {
            name: "Magnesium Bisglycinate",
            description: "High absorption, low gastric distress. Critical for sleep and nervous system stability.",
            link: "https://amzn.to/3M5OSCl"
        },
        {
            name: "Omega-3 Fish Oil",
            description: "High EPA/DHA concentrate. The foundation of cell membrane fluidity and inflammation control.",
            link: "https://amzn.to/4aeL5wx"
        },
        {
            name: "Coenzyme Q10 (Ubiquinol)",
            description: "The mitochondrial spark plug. Vital for electron transport chain efficiency.",
            link: "https://amzn.to/44kS03A"
        },
        {
            name: "Magnesium Threonate",
            description: "The only form that effectively crosses the blood-brain barrier. For cognitive precision.",
            link: "https://amzn.to/4801eVh"
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
                padding: '8rem 2rem 4rem',
                textAlign: 'center',
                background: 'linear-gradient(to bottom, #111111 0%, #000000 100%)'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 800,
                        letterSpacing: '-0.03em',
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        color: '#FFFFFF'
                    }}>
                        THE ARMORY: <span style={{ color: '#FF5F00' }}>TACTICAL SUPPLY</span>
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: '#AAAAAA',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Field-tested tools for mitochondrial defense. These are the specific compounds I recommend for the "Armor" protocol.
                    </p>
                </motion.div>
            </section>

            {/* Product Grid */}
            <section style={{ padding: '2rem 2rem 6rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '4px',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%'
                            }}
                        >
                            <div>
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 700,
                                    color: '#FFFFFF',
                                    marginBottom: '1rem',
                                    textTransform: 'uppercase'
                                }}>
                                    {product.name}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    color: '#CCCCCC',
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
                                    backgroundColor: '#FF5F00',
                                    color: '#FFFFFF',
                                    textDecoration: 'none',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    borderRadius: '4px',
                                    transition: 'background-color 0.2s ease'
                                }}
                            >
                                Check Price &gt;
                            </a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer / Disclaimer */}
            <section style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                background: '#050505'
            }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <p style={{
                        fontSize: '0.85rem',
                        color: '#666666',
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
