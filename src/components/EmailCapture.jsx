import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const EmailCapture = ({ variant = 'default' }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'
    const formRef = useRef(null);

    // Create hidden iframe for form submission to prevent page redirect
    useEffect(() => {
        const iframeName = 'kit-form-iframe-' + Date.now();
        const iframe = document.createElement('iframe');
        iframe.name = iframeName;
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        if (formRef.current) {
            formRef.current.setAttribute('target', iframeName);
        }

        return () => {
            if (document.body.contains(iframe)) {
                document.body.removeChild(iframe);
            }
        };
    }, []);

    const handleSubmit = (e) => {
        setStatus('submitting');

        // Form will submit to hidden iframe - no page redirect!
        // Show success message after brief delay
        setTimeout(() => {
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus(''), 5000);
        }, 1500);
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
            style={{
                ...containerStyles[variant],
                position: 'relative',
                zIndex: 1001  // Higher than navigation dropdowns (1000)
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
                ref={formRef}
                action="https://app.kit.com/forms/0e2ee0a8b5/subscriptions"
                method="post"
                onSubmit={handleSubmit}
                style={{
                    maxWidth: '600px',
                    margin: '0 auto'
                }}
            >
                <input
                    type="email"
                    name="email_address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={status === 'submitting'}
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
                        boxSizing: 'border-box',
                        opacity: status === 'submitting' ? 0.6 : 1
                    }}
                />

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    style={{
                        width: '100%',
                        padding: '18px 32px',
                        fontSize: '18px',
                        fontWeight: 700,
                        background: status === 'submitting' ? '#95D5D2' : '#20B2AA',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        transition: 'all 0.3s ease',
                        boxSizing: 'border-box'
                    }}
                    onMouseEnter={(e) => {
                        if (status !== 'submitting') {
                            e.target.style.background = '#1A9B8E';
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 10px 25px rgba(32, 178, 170, 0.4)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (status !== 'submitting') {
                            e.target.style.background = '#20B2AA';
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = 'none';
                        }
                    }}
                >
                    {status === 'submitting' ? 'SENDING...' : 'SEND ME THE CHECKLIST'}
                </button>

                {/* Success Message */}
                {status === 'success' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            marginTop: '1rem',
                            padding: '1rem',
                            background: 'rgba(34, 197, 94, 0.15)',
                            border: '2px solid #22C55E',
                            borderRadius: '12px',
                            textAlign: 'center',
                            color: variant === 'default' ? '#FFFFFF' : '#1A3C34',
                            fontWeight: 600
                        }}
                    >
                        ✅ Success! Check your email for the checklist.
                    </motion.div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            marginTop: '1rem',
                            padding: '1rem',
                            background: 'rgba(239, 68, 68, 0.15)',
                            border: '2px solid #EF4444',
                            borderRadius: '12px',
                            textAlign: 'center',
                            color: variant === 'default' ? '#FFFFFF' : '#1A3C34',
                            fontWeight: 600
                        }}
                    >
                        ❌ Something went wrong. Please try again.
                    </motion.div>
                )}

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
