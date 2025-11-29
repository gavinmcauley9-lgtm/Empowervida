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
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
            minHeight: '100vh',
            fontFamily: '"Inter", sans-serif',
            overflowX: 'hidden'
        }}>
            {/* Hero Section */}
            <section style={{
                padding: '8rem 2rem 4rem',
                textAlign: 'center',
                background: 'linear-gradient(to bottom, #FFFFFF 0%, #F5F5F7 100%)'
            }}>
                <div data-aos="fade-up">
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
