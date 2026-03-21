import React from 'react';

const AuthorBio = () => {
    return (
        <div style={{
            marginTop: '4rem',
            padding: '2rem',
            background: 'rgba(255, 255, 255, 0.03)',
            borderTop: '4px solid var(--color-accent-teal)',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            <div style={{ flex: '0 0 80px' }}>
                <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                    GM
                </div>
            </div>
            <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ 
                    margin: '0 0 0.5rem 0', 
                    fontSize: '1.4rem', 
                    color: 'var(--color-text)',
                    fontFamily: '"Manrope", sans-serif'
                }}>
                    Dr. Gavin McAuley, MBChB
                </h3>
                <p style={{ 
                    margin: '0 0 1rem 0', 
                    fontWeight: 600, 
                    color: 'var(--color-accent-teal)',
                    fontSize: '0.95rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                }}>
                    Physician & Longevity Specialist
                </p>
                <p style={{ margin: '0 0 1rem 0', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
                    Dr. McAuley is a UK-trained medical doctor specializing in metabolic health, longevity protocols, and performance optimization. He combines clinical evidence with practical biohacking to help high-performers achieve peak cellular vitality.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="https://www.linkedin.com/in/gavin-mcauley-62147151/" target="_blank" rel="noopener noreferrer" style={{
                        color: 'var(--color-primary)',
                        textDecoration: 'none',
                        fontWeight: 600,
                        fontSize: '0.9rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span>LinkedIn Profile →</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AuthorBio;
