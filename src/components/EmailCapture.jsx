"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { trackNewsletterSignup } from '../utils/analytics';

const KIT_FORM_UID = '0a0c3d4c2b';
const KIT_FORM_ACTION = `https://app.kit.com/forms/${KIT_FORM_UID}/subscriptions`;

const EmailCapture = ({ variant = 'default' }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || status === 'loading') return;

        setStatus('loading');

        try {
            // Submit to Kit using no-cors mode (fire-and-forget).
            // Kit doesn't return CORS headers, so we can't read the response,
            // but the subscription IS processed on their end.
            await fetch(KIT_FORM_ACTION, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    email_address: email,
                }).toString(),
            });

            // With no-cors, we can't read the response status,
            // but if fetch didn't throw, the request was sent successfully.
            setStatus('success');
            setEmail('');
            trackNewsletterSignup('inline_form');
        } catch (err) {
            setStatus('error');
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
                        The Physician&apos;s Guide to Reversing Insulin Resistance
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

            {/* SUCCESS STATE */}
            {status === 'success' ? (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        textAlign: 'center',
                        padding: '2rem',
                        background: 'rgba(32, 178, 170, 0.1)',
                        borderRadius: '16px',
                        border: '2px solid rgba(32, 178, 170, 0.3)',
                    }}
                >
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: '#1A3C34',
                        marginBottom: '0.75rem'
                    }}>
                        You&apos;re In &mdash; Check Your Inbox
                    </h3>
                    <p style={{
                        fontSize: '1.05rem',
                        color: '#4A5568',
                        lineHeight: '1.6',
                        maxWidth: '500px',
                        margin: '0 auto'
                    }}>
                        Your first protocol email is on its way. Look for an email from Dr. Gavin McAuley. Check spam if you don&apos;t see it within 5 minutes.
                    </p>
                </motion.div>
            ) : (
                /* FORM */
                <form
                    onSubmit={handleSubmit}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        marginTop: variant === 'default' ? '1.5rem' : '0'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        width: '100%',
                        maxWidth: '550px',
                        gap: '0.75rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <input
                            type="email"
                            name="email_address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            aria-label="Email address for newsletter signup"
                            style={{
                                flex: '1 1 280px',
                                padding: '1rem 1.25rem',
                                fontSize: '1.05rem',
                                borderRadius: '50px',
                                border: '2px solid rgba(32, 178, 170, 0.3)',
                                background: '#FFFFFF',
                                color: '#1A3C34',
                                outline: 'none',
                                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                                minWidth: '0',
                            }}
                            onFocus={(e) => {
                                e.target.style.borderColor = '#20B2AA';
                                e.target.style.boxShadow = '0 0 0 4px rgba(32, 178, 170, 0.15)';
                            }}
                            onBlur={(e) => {
                                e.target.style.borderColor = 'rgba(32, 178, 170, 0.3)';
                                e.target.style.boxShadow = 'none';
                            }}
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            style={{
                                flex: '0 0 auto',
                                padding: '1rem 2.5rem',
                                fontSize: '1.05rem',
                                fontWeight: '700',
                                borderRadius: '50px',
                                border: 'none',
                                background: status === 'loading' ? '#94a3b8' : '#FF4500',
                                color: 'white',
                                cursor: status === 'loading' ? 'wait' : 'pointer',
                                boxShadow: '0 10px 25px rgba(255, 69, 0, 0.3)',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease',
                                textTransform: 'uppercase',
                                letterSpacing: '0.03em',
                                whiteSpace: 'nowrap',
                            }}
                            onMouseOver={(e) => {
                                if (status !== 'loading') {
                                    e.target.style.transform = 'translateY(-3px)';
                                    e.target.style.boxShadow = '0 15px 35px rgba(255, 69, 0, 0.4)';
                                }
                            }}
                            onMouseOut={(e) => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 10px 25px rgba(255, 69, 0, 0.3)';
                            }}
                        >
                            {status === 'loading' ? 'Subscribing...' : 'Start the Free Reset'}
                        </button>
                    </div>

                    {status === 'error' && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                color: '#DC2626',
                                fontSize: '0.9rem',
                                fontWeight: 600,
                                margin: '0',
                                textAlign: 'center'
                            }}
                        >
                            Something went wrong. Please try again.
                        </motion.p>
                    )}
                </form>
            )}

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
