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
            zIndex: 50,
            padding: '1.5rem 0',
            background: 'rgba(255, 255, 255, 0.85)', /* Frosted Glass Effect */
            backdropFilter: 'blur(12px)',
            transition: 'all 0.3s ease',
            pointerEvents: 'none' // Prevent click hijacking on blog cards below
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pointerEvents: 'auto' }}>
                <Link to="/" style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-text)', letterSpacing: '0.15em', textDecoration: 'none', fontFamily: '"Inter", sans-serif', textTransform: 'uppercase', zIndex: 102 }}>
                    <span style={{ color: 'var(--color-text)' }}>EMPOWER</span><span style={{ color: 'var(--color-accent-teal)' }}>VIDA</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', pointerEvents: 'auto' }}>
                    <Link to="/blog" style={linkStyle('/blog')}>The Journal</Link>

                    {/* Protocols Dropdown */}
                    <div
                        style={{ position: 'relative', display: 'inline-block' }}
                        onMouseEnter={(e) => {
                            const menu = e.currentTarget.querySelector('.dropdown-menu');
                            if (menu) {
                                // Clear any existing close timer
                                const timerId = menu.getAttribute('data-timer');
                                if (timerId) {
                                    clearTimeout(parseInt(timerId));
                                    menu.removeAttribute('data-timer');
                                }
                                menu.style.display = 'block';
                                menu.style.pointerEvents = 'auto'; // Enable clicks when visible
                                // Small delay to allow display:block to apply before opacity transition
                                requestAnimationFrame(() => {
                                    menu.style.opacity = '1';
                                    menu.style.transform = 'translateY(0) translateX(-50%)';
                                });
                            }
                        }}
                        onMouseLeave={(e) => {
                            const menu = e.currentTarget.querySelector('.dropdown-menu');
                            if (menu) {
                                menu.style.opacity = '0';
                                menu.style.transform = 'translateY(10px) translateX(-50%)';
                                menu.style.pointerEvents = 'none'; // Disable clicks when hiding
                                // Set a delay before hiding completely
                                const timerId = setTimeout(() => {
                                    menu.style.display = 'none';
                                }, 0); // Immediate hide to prevent Safari race conditions
                                menu.setAttribute('data-timer', timerId);
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
                                display: 'none', // Default to none
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                borderRadius: '12px',
                                padding: '1rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                minWidth: '280px',
                                transition: 'opacity 0.2s ease, transform 0.2s ease',
                                zIndex: 1000,
                                pointerEvents: 'none' // Prevent click hijacking when hidden
                            }}
                        >
                            <Link to="/protocol#longevity-stack" style={{ display: 'block', padding: '0.8rem 1rem', color: '#1A3C34', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s', pointerEvents: 'inherit' }} onMouseEnter={e => e.target.style.background = 'rgba(26, 60, 52, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                🧬 LONGEVITY
                            </Link>
                            <Link to="/protocol#clarity-stack" style={{ display: 'block', padding: '0.8rem 1rem', color: '#008080', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s', pointerEvents: 'inherit' }} onMouseEnter={e => e.target.style.background = 'rgba(0, 128, 128, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                🧠 BRAIN FOG / CLARITY
                            </Link>
                            <Link to="/protocol#neurolongevity-stack" style={{ display: 'block', padding: '0.8rem 1rem', color: '#667eea', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s', pointerEvents: 'inherit' }} onMouseEnter={e => e.target.style.background = 'rgba(102, 126, 234, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                🧪 NEUROLONGEVITY
                            </Link>
                            <Link to="/protocol#vitality-stack" style={{ display: 'block', padding: '0.8rem 1rem', color: '#FF5F00', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s', pointerEvents: 'inherit' }} onMouseEnter={e => e.target.style.background = 'rgba(255, 95, 0, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                ⚡ ENERGY / VITALITY
                            </Link>
                            <Link to="/protocol#gut-stack" style={{ display: 'block', padding: '0.8rem 1rem', color: '#FF6B6B', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s', pointerEvents: 'inherit' }} onMouseEnter={e => e.target.style.background = 'rgba(255, 107, 107, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                🩺 GUT HEALTH
                            </Link>
                            <Link to="/protocol#sleep-stack" style={{ display: 'block', padding: '0.8rem 1rem', color: '#764ba2', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s', pointerEvents: 'inherit' }} onMouseEnter={e => e.target.style.background = 'rgba(118, 75, 162, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                💤 SLEEP & RECOVERY
                            </Link>
                            <Link to="/protocol#metabolic-stack" style={{ display: 'block', padding: '0.8rem 1rem', color: '#DC2626', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s', pointerEvents: 'inherit' }} onMouseEnter={e => e.target.style.background = 'rgba(220, 38, 38, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                🩸 METABOLIC HEALTH
                            </Link>
                        </div>
                    </div>

                    {/* Guides Dropdown */}
                    <div
                        style={{ position: 'relative', display: 'inline-block' }}
                        onMouseEnter={(e) => {
                            const menu = e.currentTarget.querySelector('.dropdown-menu');
                            if (menu) {
                                const timerId = menu.getAttribute('data-timer');
                                if (timerId) {
                                    clearTimeout(parseInt(timerId));
                                    menu.removeAttribute('data-timer');
                                }
                                menu.style.display = 'block';
                                menu.style.pointerEvents = 'auto'; // Enable clicks when visible
                                requestAnimationFrame(() => {
                                    menu.style.opacity = '1';
                                    menu.style.transform = 'translateY(0) translateX(-50%)';
                                });
                            }
                        }}
                        onMouseLeave={(e) => {
                            const menu = e.currentTarget.querySelector('.dropdown-menu');
                            if (menu) {
                                menu.style.opacity = '0';
                                menu.style.transform = 'translateY(10px) translateX(-50%)';
                                menu.style.pointerEvents = 'none'; // Disable clicks when hiding
                                const timerId = setTimeout(() => {
                                    menu.style.display = 'none';
                                }, 0); // Immediate hide to prevent Safari race conditions
                                menu.setAttribute('data-timer', timerId);
                            }
                        }}
                    >
                        <span style={{ ...linkStyle('/guides'), cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}>
                            GUIDES <span style={{ fontSize: '0.7em' }}>▼</span>
                        </span>
                        <div
                            className="dropdown-menu"
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: '50%',
                                transform: 'translateY(10px) translateX(-50%)',
                                opacity: 0,
                                display: 'none',
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                borderRadius: '12px',
                                padding: '1rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                minWidth: '260px',
                                transition: 'opacity 0.2s ease, transform 0.2s ease',
                                zIndex: 1000,
                                pointerEvents: 'none' // Prevent click hijacking when hidden
                            }}
                        >
                            <Link to="/mitochondrial-guide" style={{ display: 'block', padding: '0.8rem 1rem', color: '#EC4899', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s', pointerEvents: 'inherit' }} onMouseEnter={e => e.target.style.background = 'rgba(236, 72, 153, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                ⚡ Mitochondrial Health
                            </Link>
                            <Link to="/longevity" style={{ display: 'block', padding: '0.8rem 1rem', color: '#667eea', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s', pointerEvents: 'inherit' }} onMouseEnter={e => e.target.style.background = 'rgba(102, 126, 234, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                🧬 The 5 Pillars of Longevity
                            </Link>
                            <Link to="/insulin-story" style={{ display: 'block', padding: '0.8rem 1rem', color: 'var(--color-accent-red)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600, borderRadius: '8px', transition: 'background 0.2s', pointerEvents: 'inherit' }} onMouseEnter={e => e.target.style.background = 'rgba(255, 59, 48, 0.05)'} onMouseLeave={e => e.target.style.background = 'transparent'}>
                                🩸 The Insulin Story
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
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
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
                        transition: 'opacity 0.3s ease',
                        overflowY: 'auto', // Allow scrolling if content is too tall
                        padding: '2rem 1rem' // Add padding for better spacing
                    }}>
                    <Link to="/blog" style={mobileLinkStyle('/blog')} onClick={() => setIsOpen(false)}>The Journal</Link>

                    <div style={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '1rem 0', margin: '1rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Protocols</p>
                        <Link to="/protocol#vitality-stack" style={{ ...mobileLinkStyle('/protocol'), color: '#FF5F00', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>⚡ VITALITY</Link>
                        <Link to="/protocol#clarity-stack" style={{ ...mobileLinkStyle('/protocol'), color: '#008080', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>🧠 CLARITY</Link>
                        <Link to="/protocol#foundation-stack" style={{ ...mobileLinkStyle('/protocol'), color: '#1A3C34', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>🧬 FOUNDATION</Link>
                    </div>

                    <div style={{ width: '100%', borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', padding: '1rem 0', margin: '1rem 0' }}>
                        <p style={{ textAlign: 'center', fontSize: '0.8rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>Guides</p>
                        <Link to="/mitochondrial-guide" style={{ ...mobileLinkStyle('/mitochondrial-guide'), color: '#EC4899', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>⚡ Mitochondrial Health</Link>
                        <Link to="/longevity" style={{ ...mobileLinkStyle('/longevity'), color: '#667eea', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>🧬 The 5 Pillars</Link>
                        <Link to="/insulin-story" style={{ ...mobileLinkStyle('/insulin-story'), color: 'var(--color-accent-red)', fontSize: '1rem', margin: '0.5rem 0' }} onClick={() => setIsOpen(false)}>🩸 The Insulin Story</Link>
                    </div>

                    <Link to="/diagnostics" style={mobileLinkStyle('/diagnostics')} onClick={() => setIsOpen(false)}>The Diagnostics</Link>
                    <Link to="/shop" style={mobileLinkStyle('/shop')} onClick={() => setIsOpen(false)}>Shop</Link>
                    <Link to="/about" style={mobileLinkStyle('/about')} onClick={() => setIsOpen(false)}>About</Link>
                </div>
            </div>
        </nav>
    );
}
