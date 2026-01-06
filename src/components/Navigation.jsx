import React, { useEffect } from 'react';
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
            zIndex: 2000,
            padding: '1.5rem 0',
            background: 'rgba(255, 255, 255, 0.85)', /* Frosted Glass Effect */
            backdropFilter: 'blur(12px)',
            transition: 'all 0.3s ease',
            pointerEvents: 'none' // Prevent click hijacking on blog cards below
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pointerEvents: 'auto' }}>
                <Link to="/" style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-text)', letterSpacing: '0.15em', textDecoration: 'none', fontFamily: '"Inter", sans-serif', textTransform: 'uppercase', zIndex: 102, pointerEvents: 'auto' }}>
                    <span style={{ color: 'var(--color-text)' }}>EMPOWER</span><span style={{ color: 'var(--color-accent-teal)' }}>VIDA</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', pointerEvents: 'auto' }}>
                    <Link to="/blog" style={linkStyle('/blog')}>The Journal</Link>
                    <a href="https://drgavinmcauley.substack.com" target="_blank" rel="noopener noreferrer" style={linkStyle('https://drgavinmcauley.substack.com')}>Newsletter</a>

                    <Link to="/empower-protocol" style={linkStyle('/empower-protocol')}>THE PROTOCOL</Link>

                    {/* Guides Dropdown */}
                    <div
                        className="nav-item-dropdown"
                        style={{ position: 'relative', display: 'inline-block' }}
                        onMouseEnter={(e) => {
                            const menu = e.currentTarget.querySelector('.dropdown-menu-safe');
                            if (menu) {
                                const timerId = menu.getAttribute('data-timer');
                                if (timerId) {
                                    clearTimeout(parseInt(timerId));
                                    menu.removeAttribute('data-timer');
                                }
                                menu.style.display = 'block';
                                menu.style.visibility = 'visible';
                                menu.style.pointerEvents = 'auto'; // Enable clicks when visible
                                requestAnimationFrame(() => {
                                    menu.style.opacity = '1';
                                });
                            }
                        }}
                        onMouseLeave={(e) => {
                            const menu = e.currentTarget.querySelector('.dropdown-menu-safe');
                            if (menu) {
                                // Add delay to allow moving mouse to the menu
                                const timerId = setTimeout(() => {
                                    menu.style.display = 'none';
                                    menu.style.opacity = '0';
                                    menu.style.pointerEvents = 'none';
                                    menu.style.visibility = 'hidden';
                                }, 800); // 800ms grace period
                                menu.setAttribute('data-timer', timerId);
                            }
                        }}
                    >
                        <span style={{ ...linkStyle('/guides'), cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            GUIDES <span style={{ fontSize: '0.7em' }}>▼</span>
                        </span>
                        <div
                            className="dropdown-menu-safe"
                            style={{
                                position: 'absolute',
                                top: '0',
                                left: '50%',
                                transform: 'translateX(-50%)', // Centering only
                                opacity: 0,
                                display: 'none',
                                visibility: 'hidden',
                                paddingTop: '60px', // Extended bridge to overlap trigger
                                paddingLeft: '40px', // Wider safe zone
                                paddingRight: '40px', // Wider safe zone
                                transition: 'opacity 0.2s ease',
                                zIndex: 1000,
                                pointerEvents: 'none' // Prevent click hijacking when hidden
                            }}
                        >
                            <div style={{
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                borderRadius: '12px',
                                padding: '1rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                minWidth: '260px'
                            }}>
                                <Link to="/mitochondrial-guide" style={{ display: 'block', padding: '0.8rem 1rem', color: '#EC4899', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s' }} onMouseEnter={e => e.target.style.background = 'rgba(236, 72, 153, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                    ⚡ Mitochondrial Health
                                </Link>
                                <Link to="/longevity" style={{ display: 'block', padding: '0.8rem 1rem', color: '#667eea', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s' }} onMouseEnter={e => e.target.style.background = 'rgba(102, 126, 234, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                    🧬 The 5 Pillars of Longevity
                                </Link>
                                <Link to="/insulin-story" style={{ display: 'block', padding: '0.8rem 1rem', color: 'var(--color-accent-red)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s' }} onMouseEnter={e => e.target.style.background = 'rgba(255, 59, 48, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                    🩸 The Insulin Story
                                </Link>
                                <Link to="/advanced-optimization" style={{ display: 'block', padding: '0.8rem 1rem', color: '#FF5F00', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s' }} onMouseEnter={e => e.target.style.background = 'rgba(255, 95, 0, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                    🎯 Advanced Diagnostics
                                </Link>
                            </div>
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
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        style={{
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            color: 'var(--color-text)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2100
                        }}
                    >
                        {isOpen ? (
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <div
                    id="mobile-menu"
                    role="navigation"
                    aria-label="Mobile navigation"
                    style={{
                        position: 'fixed',
                        top: '80px', // Start below the header
                        left: 0,
                        width: '100%',
                        height: 'calc(100vh - 80px)', // Full height minus header
                        background: '#FFFFFF',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start', // Align to top instead of center
                        alignItems: 'center',
                        zIndex: 101,
                        opacity: isOpen ? 1 : 0,
                        pointerEvents: isOpen ? 'all' : 'none',
                        visibility: isOpen ? 'visible' : 'hidden', // PREVENT CLICKS WHEN CLOSED
                        transition: 'opacity 0.3s ease',
                        overflowY: 'auto', // Allow scrolling if content is too tall
                        padding: '2rem 1rem' // Add padding for better spacing
                    }}>
                    <Link to="/blog" style={mobileLinkStyle('/blog')} onClick={() => setIsOpen(false)}>The Journal</Link>

                    <Link to="/empower-protocol" style={mobileLinkStyle('/empower-protocol')} onClick={() => setIsOpen(false)}>THE PROTOCOL</Link>

                    <div style={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '1rem 0', margin: '1rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Guides</p>
                        <Link to="/mitochondrial-guide" style={{ ...mobileLinkStyle('/mitochondrial-guide'), color: '#EC4899', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>⚡ Mitochondrial Health</Link>
                        <Link to="/longevity" style={{ ...mobileLinkStyle('/longevity'), color: '#667eea', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>🧬 The 5 Pillars</Link>
                        <Link to="/insulin-story" style={{ ...mobileLinkStyle('/insulin-story'), color: 'var(--color-accent-red)', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>🩸 The Insulin Story</Link>
                        <Link to="/advanced-optimization" style={{ ...mobileLinkStyle('/advanced-optimization'), color: '#FF5F00', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>🎯 Advanced Diagnostics</Link>
                    </div>

                    <Link to="/diagnostics" style={mobileLinkStyle('/diagnostics')} onClick={() => setIsOpen(false)}>The Diagnostics</Link>
                    <Link to="/shop" style={mobileLinkStyle('/shop')} onClick={() => setIsOpen(false)}>Shop</Link>
                    <Link to="/about" style={mobileLinkStyle('/about')} onClick={() => setIsOpen(false)}>About</Link>
                </div>
            </div>
        </nav>
    );
}
