"use client";

import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { trackContactFormSubmit } from '../utils/analytics';

// Web3Forms — free, unlimited submissions, sends full email notifications.
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = '0d7ca794-804b-4975-afa0-46bfcf504135';

export default function Contact() {
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Dr. Gavin McAuley - EMPOWERVIDA",
        "description": "Get in touch with Dr. Gavin McAuley for inquiries, collaborations, or questions about longevity protocols.",
        "url": "https://empowervida.com/contact"
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (status === 'loading') return;

        setStatus('loading');

        try {
            const response = await fetch(WEB3FORMS_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `EmpowerVida Contact: ${formData.name}`,
                    from_name: 'EmpowerVida Contact Form',
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                trackContactFormSubmit();
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    const inputStyle = {
        padding: '0.8rem 1rem',
        borderRadius: '8px',
        border: '1px solid var(--color-border)',
        fontSize: '1rem',
        background: '#F8FAFC',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        outline: 'none',
        width: '100%',
    };

    const inputFocusHandlers = {
        onFocus: (e) => {
            e.target.style.borderColor = 'var(--color-accent-teal)';
            e.target.style.boxShadow = '0 0 0 3px rgba(32, 178, 170, 0.15)';
        },
        onBlur: (e) => {
            e.target.style.borderColor = 'var(--color-border)';
            e.target.style.boxShadow = 'none';
        },
    };

    return (
        <div style={{
            background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(241, 245, 249, 0.7) 8%, #F1F5F9 15%)',
            minHeight: '100vh',
            color: 'var(--color-text)',
            fontFamily: '"Inter", sans-serif',
            paddingTop: '8rem',
            paddingBottom: '4rem'
        }}>
            <SEO
                title="Contact - EMPOWERVIDA"
                description="Get in touch with Dr. Gavin McAuley for inquiries, collaborations, or questions about longevity protocols."
                canonical="/contact"
                schemaData={pageSchema}
            />

            <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        color: 'var(--color-text)',
                        marginBottom: '1rem',
                        fontFamily: '"Manrope", sans-serif'
                    }}>
                        Get in Touch
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Have a question about a protocol, or a business/collaboration inquiry? Reach out directly.
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        background: '#FFFFFF',
                        padding: '3rem',
                        borderRadius: '16px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                        border: '1px solid var(--color-border)'
                    }}
                >
                    {/* SUCCESS STATE */}
                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                textAlign: 'center',
                                padding: '3rem 2rem',
                            }}
                        >
                            <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>✅</div>
                            <h2 style={{
                                fontSize: '1.8rem',
                                fontWeight: 800,
                                color: '#1A3C34',
                                marginBottom: '1rem',
                                fontFamily: '"Manrope", sans-serif'
                            }}>
                                Message Sent Successfully
                            </h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: '#4A5568',
                                lineHeight: '1.6',
                                maxWidth: '450px',
                                margin: '0 auto 2rem'
                            }}>
                                Thank you for reaching out. Dr. Gavin will review your message and respond within 48 hours.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                style={{
                                    background: 'var(--color-accent-teal)',
                                    color: '#FFFFFF',
                                    padding: '0.8rem 2rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                Send Another Message
                            </button>
                        </motion.div>
                    ) : (
                        <form 
                            onSubmit={handleSubmit}
                            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                        >
                            {/* Honeypot for spam protection */}
                            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                                <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" tabIndex="-1" autoComplete="off" /></label>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="name" style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem' }}>Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                    style={inputStyle}
                                    {...inputFocusHandlers}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem' }}>Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    style={inputStyle}
                                    {...inputFocusHandlers}
                                />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="message" style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem' }}>Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required 
                                    style={{
                                        ...inputStyle,
                                        resize: 'vertical'
                                    }}
                                    {...inputFocusHandlers}
                                ></textarea>
                            </div>

                            {/* Error state */}
                            {status === 'error' && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        color: '#DC2626',
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        margin: '0',
                                        padding: '0.75rem 1rem',
                                        background: 'rgba(220, 38, 38, 0.08)',
                                        borderRadius: '8px',
                                        textAlign: 'center'
                                    }}
                                >
                                    Something went wrong. Please try again or email directly at{' '}
                                    <a href="mailto:gavin@empowervida.com" style={{ color: '#DC2626', textDecoration: 'underline' }}>
                                        gavin@empowervida.com
                                    </a>
                                </motion.p>
                            )}

                            <button 
                                type="submit"
                                disabled={status === 'loading'}
                                style={{
                                    background: status === 'loading' ? '#94a3b8' : 'var(--color-accent-teal)',
                                    color: '#FFFFFF',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    cursor: status === 'loading' ? 'wait' : 'pointer',
                                    transition: 'all 0.3s ease',
                                    marginTop: '1rem'
                                }}
                                onMouseEnter={(e) => {
                                    if (status !== 'loading') {
                                        e.currentTarget.style.background = '#1A9B8E';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(32, 178, 170, 0.3)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (status !== 'loading') {
                                        e.currentTarget.style.background = 'var(--color-accent-teal)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }
                                }}
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
