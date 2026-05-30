"use client";

import React from 'react';
import { motion } from 'framer-motion';

const insights = [
    {
        id: 1,
        quote: "The goal isn't just to live longer—it's to extend your healthspan. We should be focused on preventing chronic disease decades before it manifests.",
        author: "Dr. Peter Attia, MD",
        role: "Longevity Physician & Host of The Drive Podcast",
        initials: "PA",
        source: "The Drive Podcast"
    },
    {
        id: 2,
        quote: "Sleep is the foundation of mental and physical health. It's during sleep that the brain clears metabolic waste and consolidates learning.",
        author: "Dr. Andrew Huberman, PhD",
        role: "Stanford Neuroscientist & Host of Huberman Lab",
        initials: "AH",
        source: "Huberman Lab Podcast"
    },
    {
        id: 3,
        quote: "Biological age and chronological age are not the same thing. We are learning that the pace of cellular decline can be significantly influenced by our daily metabolic choices.",
        author: "Dr. David Sinclair, PhD",
        role: "Harvard Geneticist & Author of Lifespan",
        initials: "DS",
        source: "Lifespan: Why We Age and Why We Don't Have To"
    }
];


const ExpertInsightsSection = () => {
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
                        Expert Insights
                    </h2>
                    <p style={{
                        color: 'var(--color-accent-teal)',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        fontSize: '0.9rem'
                    }}>
                        What Leading Researchers Are Saying
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {insights.map((t, i) => (
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
                            <div style={{ marginBottom: '1rem', color: 'var(--color-accent-teal)', fontSize: '2.5rem', lineHeight: 1, opacity: 0.6 }}>
                                "
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
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--color-accent-teal), #064E3B)',
                                    color: '#FFF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    letterSpacing: '0.05em'
                                }}>
                                    {t.initials}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 700, color: 'var(--color-text)', fontSize: '0.95rem' }}>{t.author}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>{t.role}</div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--color-accent-teal)', marginTop: '4px', fontStyle: 'italic' }}>Source: {t.source}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertInsightsSection;
