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
                        fontSize: '1.3rem',
                        fontWeight: 800,
                        letterSpacing: '0.15em',
                        marginBottom: '1rem',
                        color: 'var(--color-text)',
                        textTransform: 'uppercase'
                    }}>
                        <span style={{ color: 'var(--color-text)' }}>EMPOWER</span><span style={{ color: 'var(--color-accent-teal)' }}>VIDA</span>
                    </h3>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '1rem',
                        marginBottom: '2rem',
                        fontStyle: 'italic'
                    }}>
                        Clinical Vitality Engineering
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        {/* Twitter / X */}
                        <a href="https://x.com/GavinMcAuleyMD" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" style={{
                            color: 'var(--color-text-muted)',
                            transition: 'color 0.2s ease',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#000000'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/gavin-mcauley-62147151/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{
                            color: 'var(--color-text-muted)',
                            transition: 'color 0.2s ease',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.color = '#0077b5'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-muted)'}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
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
                    <Link to="/blog" style={linkStyle}>[ THE JOURNAL ]</Link>
                    <a href="https://drgavinmcauley.substack.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>[ NEWSLETTER ]</a>
                    <Link to="/shop" style={linkStyle}>[ SHOP ]</Link>
                    <Link to="/about" style={linkStyle}>[ ABOUT ]</Link>
                    <Link to="/contact" style={linkStyle}>[ CONTACT ]</Link>
                    <Link to="/diagnostics" style={linkStyle}>[ THE DIAGNOSTICS ]</Link>
                </div>

                {/* Column 3: Essential Guides */}
                <div>
                    <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem',
                        color: '#555555'
                    }}>
                        Essential Guides
                    </h4>
                    <Link to="/mitochondrial-guide" style={linkStyle}>⚡ [ MITOCHONDRIAL HEALTH ]</Link>
                    <Link to="/longevity" style={linkStyle}>🧬 [ THE 5 PILLARS ]</Link>
                    <Link to="/insulin-story" style={linkStyle}>🩸 [ THE INSULIN STORY ]</Link>
                    <Link to="/advanced-optimization" style={linkStyle}>🎯 [ ADVANCED METRICS ]</Link>
                    <Link to="/environmental-defense" style={linkStyle}>🛡️ [ THE ELEMENTS ]</Link>
                </div>

                {/* Column 3: Legal & Privacy */}
                <div>
                    <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1.5rem',
                        color: '#555555'
                    }}>
                        Legal & Privacy
                    </h4>
                    <Link to="/terms" style={linkStyle}>[ TERMS & CONDITIONS ]</Link>
                    <Link to="/privacy" style={linkStyle}>[ PRIVACY POLICY ]</Link>
                    <Link to="/affiliate-disclaimer" style={linkStyle}>[ AFFILIATE DISCLAIMER ]</Link>
                </div>

                {/* Column 4: Medical Disclaimer */}
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
                color: '#444444',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <span>© 2025 EmpowerVida. All Rights Reserved.</span>
                <span style={{ opacity: 0.5 }}>|</span>
                <Link
                    to="/terms"
                    style={{
                        color: 'inherit',
                        textDecoration: 'underline',
                        opacity: 0.8
                    }}
                >
                    Terms
                </Link>
                <span style={{ opacity: 0.5 }}>|</span>
                <Link
                    to="/privacy"
                    style={{
                        color: 'inherit',
                        textDecoration: 'underline',
                        opacity: 0.8
                    }}
                >
                    Privacy
                </Link>
                <span style={{ opacity: 0.5 }}>|</span>
                <Link
                    to="/affiliate-disclaimer"
                    style={{
                        color: 'inherit',
                        textDecoration: 'underline',
                        opacity: 0.8
                    }}
                >
                    Affiliate Disclaimer
                </Link>
                <span style={{ opacity: 0.5 }}>|</span>
                <button
                    onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'inherit',
                        font: 'inherit',
                        cursor: 'pointer',
                        textDecoration: 'underline',
                        fontSize: 'inherit',
                        opacity: 0.8
                    }}
                >
                    Cookie Preferences
                </button>
            </div>
        </footer>
    );
};

export default Footer;
