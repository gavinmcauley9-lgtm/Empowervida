import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay for better UX on load
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        } else if (consent === 'all') {
            loadTrackingScripts();
        }
    }, []);

    const loadTrackingScripts = () => {
        console.log('Loading tracking scripts (GA, Pixel, etc.)...');
        // Placeholder for actual script injection logic
        // window.gtag('consent', 'update', { ... });
    };

    const handleAcceptAll = () => {
        localStorage.setItem('cookieConsent', 'all');
        loadTrackingScripts();
        setIsVisible(false);
    };

    const handleNecessary = () => {
        localStorage.setItem('cookieConsent', 'necessary');
        console.log('Consent denied. Loading only necessary scripts.');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        zIndex: 9999,
                        padding: '1.5rem',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        borderTop: '1px solid rgba(0,0,0,0.1)',
                        boxShadow: '0 -10px 40px rgba(0,0,0,0.05)'
                    }}
                >
                    <div className="container" style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        {/* Desktop Layout: Row */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            width: '100%',
                            flexWrap: 'wrap',
                            gap: '1.5rem'
                        }}>
                            <div style={{ maxWidth: '700px' }}>
                                <h4 style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 700,
                                    color: '#1A3C34',
                                    marginBottom: '0.5rem',
                                    fontFamily: '"Manrope", sans-serif'
                                }}>
                                    YOUR HEALTH. YOUR DATA. YOUR CHOICE.
                                </h4>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--color-text-muted)',
                                    lineHeight: 1.5
                                }}>
                                    We use cookies to personalize your health journey and analyze how our protocols are being used. We do not sell your data to third parties.
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button
                                    onClick={handleNecessary}
                                    style={{
                                        padding: '0.8rem 1.5rem',
                                        background: 'transparent',
                                        border: '1px solid rgba(0,0,0,0.2)',
                                        borderRadius: '6px',
                                        color: 'var(--color-text)',
                                        fontWeight: 600,
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={e => e.target.style.borderColor = '#1A3C34'}
                                    onMouseLeave={e => e.target.style.borderColor = 'rgba(0,0,0,0.2)'}
                                >
                                    NECESSARY ONLY
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    style={{
                                        padding: '0.8rem 2rem',
                                        background: '#1A3C34',
                                        border: 'none',
                                        borderRadius: '6px',
                                        color: '#FFFFFF',
                                        fontWeight: 700,
                                        fontSize: '0.85rem',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 15px rgba(26, 60, 52, 0.2)',
                                        transition: 'all 0.2s ease'
                                    }}
                                    onMouseEnter={e => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(26, 60, 52, 0.3)';
                                    }}
                                    onMouseLeave={e => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = '0 4px 15px rgba(26, 60, 52, 0.2)';
                                    }}
                                >
                                    ACCEPT ALL
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
