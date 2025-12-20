import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EmailCapture = ({ variant = 'default' }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Submit to Kit using their form endpoint
        const formData = new FormData();
        formData.append('email_address', email);

        try {
            const response = await fetch('https://api.convertkit.com/v3/forms/7317881/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    api_key: 'your_api_key', // You'll need to add this
                    email: email
                })
            });

            if (response.ok) {
                setStatus('success');
                setEmail('');
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const containerStyles = {
        default: {
            background: 'linear-gradient(135deg, #1A3C34 0%, #2C5F50 100%)',
            padding: '4rem 2rem',
            borderRadius: '20px',
            margin: '4rem auto',
            maxWidth: '900px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        },
        inline: {
            background: 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
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
            style={containerStyles[variant]}
        >
            {variant === 'default' && (
                <div style={{
                    textAlign: 'center',
                    marginBottom: '2rem'
                }}>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        fontWeight: 800,
                        color: '#FFFFFF',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Get Dr. Gavin's Free Checklist
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        marginBottom: '1rem'
                    }}>
                        5 Labs Your Doctor Isn't Testing
                    </p>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Discover the blood markers that reveal insulin resistance, mitochondrial dysfunction, and accelerated aging—before you develop symptoms.
                    </p>
                </div>
            )}

            <form
                action="https://app.kit.com/forms/7317881/subscriptions"
                method="post"
                style={{
                    maxWidth: '600px',
                    margin: '0 auto'
                }}
            >
                <input
                    type="email"
                    name="email_address"
                    placeholder="Enter your email address"
                    required
                    style={{
                        width: '100%',
                        padding: '18px 24px',
                        fontSize: '16px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderRadius: '12px',
                        marginBottom: '16px',
                        background: 'rgba(255,255,255,0.95)',
                        color: '#1A3C34',
                        fontWeight: 500,
                        boxSizing: 'border-box'
                    }}
                />

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '18px 32px',
                        fontSize: '18px',
                        fontWeight: 700,
                        background: '#20B2AA',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = '#1A9B8E';
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 10px 25px rgba(32, 178, 170, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = '#20B2AA';
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = 'none';
                    }}
                >
                    SEND ME THE CHECKLIST
                </button>

                <p style={{
                    textAlign: 'center',
                    marginTop: '1rem',
                    fontSize: '0.85rem',
                    color: variant === 'default' ? 'rgba(255,255,255,0.7)' : '#6C757D'
                }}>
                    We respect your privacy. Unsubscribe at any time.
                </p>
            </form>
        </motion.div>
    );
};

export default EmailCapture;
