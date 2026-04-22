import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

export default function Contact() {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Dr. Gavin McAuley - EMPOWERVIDA",
        "description": "Get in touch with Dr. Gavin McAuley for inquiries, collaborations, or questions about longevity protocols.",
        "url": "https://empowervida.com/contact"
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
                    <form 
                        name="contact" 
                        method="POST" 
                        data-netlify="true" 
                        netlify-honeypot="bot-field"
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <div hidden>
                            <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="name" style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem' }}>Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                style={{
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-border)',
                                    fontSize: '1rem',
                                    background: '#F8FAFC'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="email" style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem' }}>Email Adddress</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                style={{
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-border)',
                                    fontSize: '1rem',
                                    background: '#F8FAFC'
                                }}
                            />
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="message" style={{ fontWeight: 600, color: 'var(--color-text)', fontSize: '0.9rem' }}>Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="5"
                                required 
                                style={{
                                    padding: '0.8rem 1rem',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-border)',
                                    fontSize: '1rem',
                                    background: '#F8FAFC',
                                    resize: 'vertical'
                                }}
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            style={{
                                background: 'var(--color-accent-teal)',
                                color: '#FFFFFF',
                                padding: '1rem',
                                borderRadius: '8px',
                                border: 'none',
                                fontWeight: 700,
                                fontSize: '1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                marginTop: '1rem'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = '#1A9B8E';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(32, 178, 170, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'var(--color-accent-teal)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
