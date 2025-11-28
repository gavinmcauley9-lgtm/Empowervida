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
            background: 'rgba(255, 255, 255, 0.9)', /* Increased opacity for better read */
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-text)', letterSpacing: '0.15em', textDecoration: 'none', fontFamily: '"Inter", sans-serif', textTransform: 'uppercase', zIndex: 102 }}>
                    <span style={{ color: 'var(--color-text)' }}>EMPOWER</span><span style={{ color: 'var(--color-accent-teal)' }}>VIDA</span>
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-only">
                    <Link to="/blog" style={linkStyle('/blog')}>The Journal</Link>
                    <Link to="/protocol" style={linkStyle('/protocol')}>The Protocol</Link>
                    <Link to="/diagnostics" style={linkStyle('/diagnostics')}>The Diagnostics</Link>
                    <Link to="/environmental-defense" style={linkStyle('/environmental-defense')}>The Elements</Link>
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
                    <Link to="/protocol" style={mobileLinkStyle('/protocol')} onClick={() => setIsOpen(false)}>The Protocol</Link>
                    <Link to="/diagnostics" style={mobileLinkStyle('/diagnostics')} onClick={() => setIsOpen(false)}>The Diagnostics</Link>
                    <Link to="/environmental-defense" style={mobileLinkStyle('/environmental-defense')} onClick={() => setIsOpen(false)}>The Elements</Link>
                    <Link to="/about" style={mobileLinkStyle('/about')} onClick={() => setIsOpen(false)}>About</Link>
                </div>
            </div>
        </nav>
    );
}
