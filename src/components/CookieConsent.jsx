import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        } else if (consent === 'all') {
            loadTrackingScripts();
        }
    }, []);

    const loadTrackingScripts = () => {
        console.log('Loading tracking scripts (GA, Pixel, etc.)...');
        // TODO: Insert actual tracking scripts here
        // Example:
        // const script = document.createElement('script');
        // script.src = 'https://www.googletagmanager.com/gtag/js?id=YOUR_ID';
        // document.head.appendChild(script);
    };

    const handleAcceptAll = () => {
        localStorage.setItem('cookieConsent', 'all');
        loadTrackingScripts();
        setIsVisible(false);
    };

    const handleNecessary = () => {
        localStorage.setItem('cookieConsent', 'necessary');
        console.log('Blocking third-party tracking scripts.');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '600px',
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
            padding: '2rem',
            zIndex: 9999,
            border: '1px solid rgba(32, 178, 170, 0.2)',
            fontFamily: '"Inter", sans-serif'
        }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#2C3E50',
                    marginBottom: '0.75rem',
                    marginTop: 0
                }}>
                    Your Health, Your Data, Your Choice.
                </h3>
                <p style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: '#666',
                    margin: 0
                }}>
                    We use cookies to personalize your health journey and analyze traffic. We never sell your private health data. See our <a href="/privacy" style={{ color: '#20B2AA', textDecoration: 'underline' }}>Privacy Policy</a> for details.
                </p>
            </div>

            <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                justifyContent: 'flex-end'
            }}>
                <button
                    onClick={handleNecessary}
                    style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        background: 'transparent',
                        color: '#666',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.borderColor = '#999'}
                    onMouseOut={(e) => e.currentTarget.style.borderColor = '#ccc'}
                >
                    Necessary Only
                </button>

                <button
                    onClick={handleAcceptAll}
                    style={{
                        padding: '0.75rem 1.5rem',
                        borderRadius: '6px',
                        border: 'none',
                        background: '#20B2AA',
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(32, 178, 170, 0.3)',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-1px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                    Accept All
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;
