import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
    const location = useLocation();

    const linkStyle = (path) => ({
        color: location.pathname === path ? 'var(--color-primary)' : 'var(--color-text-muted)',
        fontWeight: location.pathname === path ? '600' : '400',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        margin: '0 1rem'
    });

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            padding: '1.5rem 0',
            background: 'rgba(255, 255, 255, 0.8)', /* White Glass */
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-text)', letterSpacing: '0.15em', textDecoration: 'none', fontFamily: '"Inter", sans-serif', textTransform: 'uppercase' }}>
                    <span style={{ color: 'var(--color-text)' }}>EMPOWER</span><span style={{ color: 'var(--color-accent-teal)' }}>VIDA</span>
                </Link>

                <div>
                    <Link to="/blog" style={linkStyle('/blog')}>The Journal</Link>
                    <Link to="/protocol" style={linkStyle('/protocol')}>The Protocol</Link>
                    <Link to="/diagnostics" style={linkStyle('/diagnostics')}>The Diagnostics</Link>
                    <Link to="/environmental-defense" style={linkStyle('/environmental-defense')}>The Elements</Link>
                    <Link to="/about" style={linkStyle('/about')}>About</Link>
                </div>
            </div>
        </nav>
    );
}
