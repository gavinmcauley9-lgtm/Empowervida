"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timer = null;
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            // Small delay for better UX on load
            timer = setTimeout(() => setIsVisible(true), 600);
        } else if (consent === 'all') {
            loadTrackingScripts();
        }

        // Always register reopen event listener so "Cookie Preferences" in footer works in the first session too
        const handleReopen = () => setIsVisible(true);
        window.addEventListener('openCookieSettings', handleReopen);
        return () => {
            if (timer) clearTimeout(timer);
            window.removeEventListener('openCookieSettings', handleReopen);
        };
    }, []);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.documentElement.dataset.cookieBanner = isVisible ? 'open' : 'closed';
        }
    }, [isVisible]);

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
                    className="ev-cookie-banner"
                    role="region"
                    aria-label="Cookie preferences"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        zIndex: 10001,
                        padding: '0.85rem 1.5rem',
                        background: '#FFFFFF',
                        borderTop: '1px solid rgba(0,0,0,0.12)',
                        boxShadow: '0 -8px 28px rgba(0,0,0,0.08)'
                    }}
                >
                    <div className="ev-cookie-inner" style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        gap: '1.25rem'
                    }}>
                        <div className="ev-cookie-copy" style={{ maxWidth: '720px', flex: '1 1 auto' }}>
                            <h4 className="ev-cookie-title" style={{
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                color: '#1A3C34',
                                margin: '0 0 0.15rem',
                                lineHeight: 1.3,
                                fontFamily: '"Manrope", sans-serif'
                            }}>
                                Cookie Preferences
                            </h4>
                            <p className="ev-cookie-text" style={{
                                fontSize: '0.82rem',
                                color: 'var(--color-text-muted)',
                                lineHeight: 1.45,
                                margin: 0
                            }}>
                                We use essential cookies to run this site and optional analytics cookies to understand how our educational articles are used. We do not sell your personal data.
                            </p>
                        </div>

                        <div className="ev-cookie-actions" style={{ display: 'flex', gap: '0.65rem', flexShrink: 0 }}>
                            <button
                                onClick={handleNecessary}
                                className="ev-cookie-btn ev-cookie-btn-secondary"
                                style={{
                                    minHeight: '44px',
                                    padding: '0.5rem 1.1rem',
                                    background: 'transparent',
                                    border: '1px solid rgba(0,0,0,0.22)',
                                    borderRadius: '6px',
                                    color: 'var(--color-text)',
                                    fontWeight: 600,
                                    fontSize: '0.8rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseEnter={e => e.currentTarget.style.borderColor = '#1A3C34'}
                                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(0,0,0,0.22)'}
                            >
                                Necessary Only
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="ev-cookie-btn ev-cookie-btn-primary"
                                style={{
                                    minHeight: '44px',
                                    padding: '0.5rem 1.25rem',
                                    background: '#1A3C34',
                                    border: 'none',
                                    borderRadius: '6px',
                                    color: '#FFFFFF',
                                    fontWeight: 700,
                                    fontSize: '0.8rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 12px rgba(26, 60, 52, 0.18)',
                                    transition: 'all 0.2s ease',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = 'translateY(-1px)';
                                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(26, 60, 52, 0.26)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(26, 60, 52, 0.18)';
                                }}
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                    <style>{`
                      .ev-cookie-banner .ev-cookie-text {
                        font-size: 0.82rem !important;
                        line-height: 1.45 !important;
                        margin: 0 !important;
                      }
                      @media (max-width: 768px) {
                        .ev-cookie-banner {
                          padding: 0.6rem 0.85rem calc(0.6rem + env(safe-area-inset-bottom, 0px)) !important;
                        }
                        .ev-cookie-inner {
                          flex-direction: column !important;
                          align-items: stretch !important;
                          gap: 0.5rem !important;
                        }
                        .ev-cookie-title {
                          font-size: 0.82rem !important;
                          margin-bottom: 0.12rem !important;
                        }
                        .ev-cookie-banner .ev-cookie-text {
                          font-size: 0.75rem !important;
                          line-height: 1.36 !important;
                        }
                        .ev-cookie-actions {
                          display: grid !important;
                          grid-template-columns: 1fr 1fr !important;
                          gap: 0.5rem !important;
                          width: 100% !important;
                        }
                        .ev-cookie-btn {
                          width: 100% !important;
                          min-height: 44px !important;
                          padding: 0.45rem 0.55rem !important;
                          font-size: 0.78rem !important;
                        }
                      }
                    `}</style>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
