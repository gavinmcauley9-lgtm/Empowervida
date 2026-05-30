"use client";

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ThankYou = () => {
    // Fire a specific conversion event when this page loads
    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'generate_lead', {
                currency: 'USD',
                value: 50.00 // Assigning a nominal value to a new email subscriber
            });
        }
    }, []);

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-bg-secondary)',
            padding: '2rem'
        }}>
            <Helmet>
                <title>Welcome to the Architecture | EmpowerVida</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: '#ffffff',
                    padding: '4rem',
                    borderRadius: '24px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    maxWidth: '600px',
                    textAlign: 'center',
                    border: '1px solid rgba(32, 178, 170, 0.2)'
                }}
            >
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🧬</div>
                <h1 style={{
                    fontSize: '2.5rem',
                    color: 'var(--color-primary-navy)',
                    marginBottom: '1rem',
                    fontWeight: 800
                }}>
                    You're on the list.
                </h1>
                
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-text)',
                    lineHeight: '1.6',
                    marginBottom: '2rem'
                }}>
                    Thank you for joining the EmpowerVida clinical syndicate. The exact lab markers and clinical architecture you need to rebuild your cellular baseline have been dispatched to your email.
                </p>

                <div style={{
                    background: 'rgba(255, 95, 0, 0.05)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    borderLeft: '4px solid var(--color-accent-orange)',
                    marginBottom: '2rem',
                    textAlign: 'left'
                }}>
                    <strong style={{ color: 'var(--color-accent-orange)', display: 'block', marginBottom: '0.5rem' }}>Next Step:</strong>
                    While you wait for that email to arrive, you can review Phase 01 of the biological protocol to see exactly what nutrients are required to establish your base.
                </div>

                <Link
                    href="/protocol"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2rem',
                        background: 'var(--color-primary-navy)',
                        color: '#ffffff',
                        textDecoration: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        transition: 'opacity 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.9'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                >
                    Review The Master Protocols ➞
                </Link>
            </motion.div>
        </div>
    );
};

export default ThankYou;
