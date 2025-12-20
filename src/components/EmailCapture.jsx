import React from 'react';
import { motion } from 'framer-motion';

const EmailCapture = ({ variant = 'default' }) => {
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
                        Ready to Optimize Your Longevity?
                    </h2>
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        color: 'rgba(255,255,255,0.9)',
                        maxWidth: '600px',
                        margin: '0 auto 2rem auto'
                    }}>
                        Get evidence-based protocols and insights from a physician who reversed his own metabolic decline.
                    </p>
                </div>
            )}

            {/* Kit Form Embed */}
            <div style={{
                maxWidth: '600px',
                margin: '0 auto'
            }}>
                <script async data-uid="0e2ee0a8b5" src="https://empowervida.kit.com/0e2ee0a8b5/index.js"></script>
            </div>
        </motion.div>
    );
};

export default EmailCapture;
