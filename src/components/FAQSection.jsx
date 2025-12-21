import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
                background: 'rgba(255, 255, 255, 0.4)', // Glass style
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '16px',
                padding: '1.5rem 2rem',
                marginBottom: '1rem',
                cursor: 'pointer',
                border: '1px solid rgba(32, 178, 170, 0.15)',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
            }}
            whileHover={{ scale: 1.005, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
            transition={{ duration: 0.2 }}
        >
            <motion.div layout style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#1A3C34',
                    margin: 0,
                    fontFamily: '"Manrope", sans-serif'
                }}>
                    {question}
                </h3>
                <span style={{
                    fontSize: '1.5rem',
                    color: '#20B2AA',
                    fontWeight: 300,
                    lineHeight: 1,
                    minWidth: '24px',
                    textAlign: 'center'
                }}>
                    {isOpen ? '−' : '+'}
                </span>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ color: '#4A5568', lineHeight: 1.7, fontSize: '1rem' }}
                    >
                        {answer}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQSection = ({ data }) => {
    if (!data || data.length === 0) return null;

    return (
        <section style={{ padding: '6rem 2rem', position: 'relative', zIndex: 10 }}>
            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                        fontWeight: 800,
                        color: '#1A3C34',
                        marginBottom: '1rem',
                        fontFamily: '"Manrope", sans-serif',
                        letterSpacing: '-0.02em'
                    }}>
                        Frequently Asked Questions
                    </h2>
                    <p style={{ color: '#20B2AA', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                        Clinical Clarity
                    </p>
                </div>

                <div>
                    {data.map((item, index) => (
                        <FAQItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
