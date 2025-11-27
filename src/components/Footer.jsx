import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const linkStyle = {
        display: 'block',
        color: '#86868b',
        textDecoration: 'none',
        marginBottom: '0.8rem',
        fontSize: '0.9rem',
        transition: 'color 0.2s ease',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    };

    return (
        <footer style={{
            backgroundColor: '#F5F5F7',
            color: '#1D1D1F',
            padding: '4rem 2rem',
            borderTop: '1px solid rgba(0,0,0,0.1)',
            position: 'relative',
            zIndex: 10,
            fontFamily: '"Inter", sans-serif'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                marginBottom: '4rem'
            }}>
                {/* Column 1: Identity */}
                <div>
                    <h3 style={{
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        marginBottom: '1rem',
                        color: '#1D1D1F'
                    }}>
                        THE RESILIENCE PROTOCOL <span style={{ color: '#FF4F00' }}>MD</span>
                    </h3>
                    <p style={{
                        color: '#86868b',
                        fontSize: '1rem',
                        marginBottom: '2rem',
                        fontStyle: 'italic'
                    }}>
                        Medicine 3.0: Engineering the Body for Longevity
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {/* Social Placeholders */}
                        <div style={{ width: '24px', height: '24px', background: '#333', borderRadius: '4px' }}></div>
                        <div style={{ width: '24px', height: '24px', background: '#333', borderRadius: '4px' }}></div>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem',
                        color: '#555555'
                    }}>
                        Quick Links
                    </h4>
                    <Link to="/blog" style={linkStyle}>[ THE BLUEPRINT ]</Link>
                    <Link to="/protocol" style={linkStyle}>[ THE ARMOR ]</Link>
                    <Link to="/diagnostics" style={linkStyle}>[ THE RADAR ]</Link>
                    <Link to="/environmental-defense" style={linkStyle}>[ GEAR ]</Link>
                    <Link to="/about" style={linkStyle}>[ ABOUT ]</Link>
                </div>

                {/* Column 3: Legal & Safety */}
                <div>
                    <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem',
                        color: '#FF5F00' // Warning color for disclaimer header
                    }}>
                        Medical Disclaimer
                    </h4>
                    <p style={{
                        fontSize: '0.8rem',
                        lineHeight: 1.6,
                        color: '#666666'
                    }}>
                        The content provided on this platform is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. Dr. Gavin is a physician, but he is not your physician. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or supplement regimen.
                    </p>
                </div>
            </div>

            {/* Bottom Row */}
            <div style={{
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                paddingTop: '2rem',
                textAlign: 'center',
                fontSize: '0.8rem',
                color: '#444444'
            }}>
                © 2025 The Resilience Protocol MD. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
