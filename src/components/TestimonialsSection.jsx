import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote: "We don't just treat symptoms. We identify the upstream metabolic dysfunction—the 'grinding gears'—before it becomes a disease state.",
        author: "Root Cause Medicine",
        role: " The Philosophy"
    },
    {
        id: 2,
        quote: "Aging is fundamentally an energy crisis. By restoring mitochondrial currency (NAD+, ATP), we reverse the biological clock at the source.",
        author: "Cellular Economics",
        role: "The Mechanism"
    },
    {
        id: 3,
        quote: "Your gut, brain, and hormones are a single network. We treat the system as a whole, not as isolated parts.",
        author: "Systems, Not Silos",
        role: "The Architecture"
    }
];

const TestimonialsSection = () => {
    return (
        <section style={{
            padding: '6rem 2rem',
            background: 'var(--color-bg)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                position: 'relative',
                zIndex: 2
            }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        color: 'var(--color-text)',
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 800,
                        marginBottom: '1rem',
                        fontFamily: '"Manrope", sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        The Medical Standard
                    </h2>
                    <p style={{
                        color: 'var(--color-accent-teal)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem'
                    }}>
                        Built on Evidence, Not Hype
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'rgba(255, 255, 255, 0.4)', // Frosted Glass
                                backdropFilter: 'blur(12px)',
                                padding: '2.5rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%'
                            }}
                        >
                            <div style={{ marginBottom: '1.5rem' }}>
                                {[...Array(5)].map((_, starIndex) => (
                                    <span key={starIndex} style={{ color: '#FFB800', fontSize: '1.2rem', marginRight: '4px' }}>★</span>
                                ))}
                            </div>
                            <p style={{
                                fontSize: '1.05rem',
                                lineHeight: 1.6,
                                color: 'var(--color-text)',
                                fontStyle: 'italic',
                                flex: 1,
                                marginBottom: '2rem'
                            }}>
                                "{t.quote}"
                            </p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: 'var(--color-accent-teal)',
                                    color: '#FFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700
                                }}>
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, color: 'var(--color-text)' }}>{t.author}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
