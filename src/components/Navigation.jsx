import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();
    const [isOpen, setIsOpen] = React.useState(false);

    const linkStyle = (path) => ({
        color: location.pathname === path ? 'var(--color-primary)' : 'var(--color-text-muted)',
        fontWeight: location.pathname === path ? '600' : '400',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 1rem',
        textDecoration: 'none',
        transition: 'color 0.2s ease'
    });

    const mobileLinkStyle = (path) => ({
        ...linkStyle(path),
        display: 'block',
        margin: '1.5rem 0',
        fontSize: '1.2rem',
        textAlign: 'center'
    });

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            padding: '1.5rem 0',
            background: 'rgba(255, 255, 255, 0.85)', /* Frosted Glass Effect */
            backdropFilter: 'blur(12px)',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-text)', letterSpacing: '0.15em', textDecoration: 'none', fontFamily: '"Inter", sans-serif', textTransform: 'uppercase', zIndex: 102 }}>
                    <span style={{ color: 'var(--color-text)' }}>EMPOWER</span><span style={{ color: 'var(--color-accent-teal)' }}>VIDA</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-only" style={{ display: 'flex', alignItems: 'center' }}>
                    <Link to="/blog" style={linkStyle('/blog')}>The Journal</Link>

                    {/* Protocols Dropdown */}
                    <div
                        style={{ position: 'relative', display: 'inline-block' }}
                        onMouseEnter={(e) => {
                            const menu = e.currentTarget.querySelector('.dropdown-menu');
                            if (menu) {
                                menu.style.opacity = '1';
                                menu.style.visibility = 'visible';
                                menu.style.transform = 'translateY(0)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            const menu = e.currentTarget.querySelector('.dropdown-menu');
                            if (menu) {
                                menu.style.opacity = '0';
                                menu.style.visibility = 'hidden';
                                menu.style.transform = 'translateY(10px)';
                            }
                        }}
                    >
                        <span style={{ ...linkStyle('/protocol'), cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            PROTOCOLS <span style={{ fontSize: '0.7em' }}>▼</span>
                        </span>
                        <div
                            className="dropdown-menu"
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateY(10px) translateX(-50%)', // Centered
                                opacity: 0,
                                visibility: 'hidden',
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                borderRadius: '12px',
                                padding: '1rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                minWidth: '220px',
                                transition: 'all 0.2s ease',
                                marginLeft: '-50%' // Correction for left: 50%
                            }}
                        >
                            <Link to="/protocol#vitality-stack" style={{ display: 'block', padding: '0.8rem 1rem', color: '#FF5F00', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s' }} onMouseEnter={e => e.target.style.background = 'rgba(255, 95, 0, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                ⚡ VITALITY (Energy)
                            </Link>
                            <Link to="/protocol#clarity-stack" style={{ display: 'block', padding: '0.8rem 1rem', color: '#008080', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s' }} onMouseEnter={e => e.target.style.background = 'rgba(0, 128, 128, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                🧠 CLARITY (Brain)
                            </Link>
                            <Link to="/protocol#foundation-stack" style={{ display: 'block', padding: '0.8rem 1rem', color: '#1A3C34', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s' }} onMouseEnter={e => e.target.style.background = 'rgba(26, 60, 52, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                🧬 FOUNDATION (Longevity)
                            </Link>
                        </div>
                    </div>

                    <Link to="/diagnostics" style={linkStyle('/diagnostics')}>The Diagnostics</Link>
                    <Link to="/shop" style={linkStyle('/shop')}>Shop</Link>
                    <Link to="/about" style={linkStyle('/about')}>About</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-only" style={{ zIndex: 102 }}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            color: 'var(--color-text)'
                        }}
                    >
                        <div style={{ width: '24px', height: '2px', background: 'currentColor', marginBottom: '6px', transition: 'all 0.3s ease', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
                        <div style={{ width: '24px', height: '2px', background: 'currentColor', marginBottom: '6px', opacity: isOpen ? 0 : 1, transition: 'all 0.3s ease' }}></div>
                        <div style={{ width: '24px', height: '2px', background: 'currentColor', transition: 'all 0.3s ease', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    background: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 101,
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'all' : 'none',
                    transition: 'opacity 0.3s ease'
                }}>
                    <Link to="/blog" style={mobileLinkStyle('/blog')} onClick={() => setIsOpen(false)}>The Journal</Link>

                    <div style={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '1rem 0', margin: '1rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Protocols</p>
                        <Link to="/protocol#vitality-stack" style={{ ...mobileLinkStyle('/protocol'), color: '#FF5F00', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>⚡ VITALITY</Link>
                        <Link to="/protocol#clarity-stack" style={{ ...mobileLinkStyle('/protocol'), color: '#008080', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>🧠 CLARITY</Link>
                        <Link to="/protocol#foundation-stack" style={{ ...mobileLinkStyle('/protocol'), color: '#1A3C34', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>🧬 FOUNDATION</Link>
                    </div>

                    <Link to="/diagnostics" style={mobileLinkStyle('/diagnostics')} onClick={() => setIsOpen(false)}>The Diagnostics</Link>
                    <Link to="/shop" style={mobileLinkStyle('/shop')} onClick={() => setIsOpen(false)}>Shop</Link>
                    <Link to="/about" style={mobileLinkStyle('/about')} onClick={() => setIsOpen(false)}>About</Link>
                </div>
            </div>
        </nav>
    );
}
