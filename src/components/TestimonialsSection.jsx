import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        quote: "I've spent thousands on supplements over the years. This is the first time I actually felt a shift. The focus on 'clinical grade' isn't just marketing—it's the active ingredient.",
        author: "Mark R.",
        role: "Executive Performance Coach"
    },
    {
        id: 2,
        quote: "Finally, a doctor who explains the mechanism. I'm not just following orders; I'm understanding my own biology. The 'Factory Floor' analogy changed everything for me.",
        author: "Sarah J.",
        role: "Early Adopter"
    },
    {
        id: 3,
        quote: "The deep sleep protocol delivered exactly what it promised. I track my sleep with an Oura ring, and my Deep Sleep scores doubled in 3 weeks.",
        author: "David L.",
        role: "Biohacker"
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
                        The Clinical Difference
                    </h2>
                    <p style={{
                        color: 'var(--color-accent-teal)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem'
                    }}>
                        Real Results from the Protocol
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
