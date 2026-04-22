import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const EmailCapture = ({ variant = 'default' }) => {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
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
            setFirstName('');
            setTimeout(() => setStatus(''), 5000);
        }, 1500);
    };

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
                        color: '#1A3C34',
                        marginBottom: '1rem',
                        letterSpacing: '-0.02em'
                    }}>
                        Get Dr. Gavin's Free Checklist
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                        color: '#20B2AA',
                        fontWeight: 700,
                        marginBottom: '1rem'
                    }}>
                        5 Labs Your Doctor Isn't Testing
                    </p>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: '#4A5568',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Discover the blood markers that reveal insulin resistance, mitochondrial dysfunction, and accelerated aging—before you develop symptoms.
                    </p>
                </div>
            )}

            <div style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', borderRadius: '12px', overflow: 'hidden' }}>
                <iframe 
                    src="https://drgavinmcauley.substack.com/embed" 
                    width="100%" 
                    height="320" 
                    style={{ border: '1px solid #eee', background: 'white' }} 
                    frameBorder="0" 
                    scrolling="no"
                    title="Newsletter Signup"
                ></iframe>
            </div>

            <p style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '0.85rem',
                color: '#6C757D'
            }}>
                We respect your privacy. Unsubscribe at any time.
            </p>
        </motion.div >
    );
};

export default EmailCapture;
