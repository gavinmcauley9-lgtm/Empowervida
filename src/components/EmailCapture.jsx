import React from 'react';
import { motion } from 'framer-motion';

const EmailCapture = ({ variant = 'default' }) => {
    const containerStyles = {
        default: {
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            padding: '4rem 3rem',
            borderRadius: '24px',
            margin: '4rem auto',
            maxWidth: '900px',
            boxShadow: '0 20px 60px rgba(26, 60, 52, 0.15), 0 0 0 1px rgba(255,255,255,0.4) inset',
            border: '1px solid rgba(32, 178, 170, 0.2)',
        },
        inline: {
            background: 'rgba(248, 249, 250, 0.9)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            padding: '3rem 2rem',
            borderRadius: '16px',
            margin: '3rem 0',
            border: '2px solid #20B2AA',
            boxShadow: '0 10px 30px rgba(32, 178, 170, 0.1)',
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
                ...containerStyles[variant],
                position: 'relative',
                zIndex: 1001
            }}
        >
            {variant === 'default' && (
                <div style={{
                    textAlign: 'center',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        fontWeight: 800,
                        color: '#1A3C34',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Get The Metabolic Reset Protocol
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                        color: '#20B2AA',
                        fontWeight: 700,
                        marginBottom: '1rem'
                    }}>
                        The Physician's Guide to Reversing Insulin Resistance
                    </p>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: '#4A5568',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: '1.6'
                    }}>
                        Join the free 7-day email protocol designed by Dr. Gavin to lower fasting glucose, eliminate afternoon brain fog, and restore your cellular energy engine.
                    </p>
                </div>
            )}

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <a 
                    href="https://drgavinmcauley.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        background: '#FF4500',
                        color: 'white',
                        padding: '1rem 3rem',
                        fontSize: '1.25rem',
                        fontWeight: '700',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        boxShadow: '0 10px 25px rgba(255, 69, 0, 0.3)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        cursor: 'pointer'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-3px)';
                        e.target.style.boxShadow = '0 15px 35px rgba(255, 69, 0, 0.4)';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 10px 25px rgba(255, 69, 0, 0.3)';
                    }}
                >
                    Start the Free Reset & Subscribe
                </a>
            </div>

            <p style={{
                textAlign: 'center',
                marginTop: '1.5rem',
                fontSize: '0.85rem',
                color: '#6C757D'
            }}>
                Join 1,000+ others. We respect your privacy. Unsubscribe at any time.
            </p>
        </motion.div>
    );
};

export default EmailCapture;
