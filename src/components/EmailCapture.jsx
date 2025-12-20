import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const EmailCapture = ({ variant = 'default' }) => {
    useEffect(() => {
        // Load Kit script
        const script = document.createElement('script');
        script.src = 'https://empowervida.kit.com/0e2ee0a8b5/index.js';
        script.async = true;
        script.setAttribute('data-uid', '0e2ee0a8b5');
        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

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
            <div style={{
                textAlign: 'center',
                marginBottom: '2rem'
            }}>
                {variant === 'default' && (
                    <>
                        <motion.h2
                            style={{
                                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                                fontWeight: 800,
                                color: '#FFFFFF',
                                marginBottom: '1rem',
                                letterSpacing: '-0.02em'
                            }}
                        >
                            Ready to Optimize Your Longevity?
                        </motion.h2>
                        <p style={{
                            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                            color: 'rgba(255,255,255,0.9)',
                            maxWidth: '600px',
                            margin: '0 auto'
                        }}>
                            Get evidence-based protocols and insights from a physician who reversed his own metabolic decline.
                        </p>
                    </>
                )}
            </div>

            {/* Kit Form Embed */}
            <div
                className="kit-form-container"
                style={{
                    maxWidth: '600px',
                    margin: '0 auto'
                }}
            >
                <script async data-uid="0e2ee0a8b5" src="https://empowervida.kit.com/0e2ee0a8b5/index.js"></script>
            </div>

            <style>{`
                .kit-form-container form {
                    all: unset;
                }
                
                .kit-form-container input[type="email"] {
                    width: 100%;
                    padding: 16px 20px;
                    font-size: 16px;
                    border: 2px solid #E9ECEF;
                    border-radius: 12px;
                    margin-bottom: 16px;
                    transition: all 0.3s ease;
                    background: white;
                }
                
                .kit-form-container input[type="email"]:focus {
                    outline: none;
                    border-color: #20B2AA;
                    box-shadow: 0 0 0 3px rgba(32, 178, 170, 0.1);
                }
                
                .kit-form-container button {
                    width: 100%;
                    padding: 18px 32px;
                    font-size: 18px;
                    font-weight: 700;
                    background: #20B2AA !important;
                    color: white !important;
                    border: none;
                    border-radius: 12px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }
                
                .kit-form-container button:hover {
                    background: #1A9B8E !important;
                    transform: translateY(-2px);
                    box-shadow: 0 10px 25px rgba(32, 178, 170, 0.3);
                }
            `}</style>
        </motion.div>
    );
};

export default EmailCapture;
