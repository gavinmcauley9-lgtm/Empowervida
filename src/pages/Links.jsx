import React from 'react';
import { motion } from 'framer-motion';

const Links = () => {
    const linkItems = [
        {
            title: "Download the Free 5-Labs Checklist",
            url: "https://drgavinmcauley.substack.com",
            primary: true
        },
        {
            title: "Test Your HOMA-IR Score",
            url: "/calculator",
            primary: false
        },
        {
            title: "Read the Clinical Journal",
            url: "https://drgavinmcauley.substack.com",
            primary: false
        },
        {
            title: "The EmpowerVida Dispensary",
            url: "/shop",
            primary: false
        }
    ];

    return (
        <div style={{
            minHeight: '100vh',
            background: '#0B1120',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '3rem 1.5rem',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
        }}>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', marginBottom: '3rem' }}
            >
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #20B2AA, #1A3C34)',
                    margin: '0 auto 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2.5rem',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: '0 10px 25px rgba(32, 178, 170, 0.3)'
                }}>
                    EV
                </div>
                <h1 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '0.5rem', color: '#fff' }}>EmpowerVida</h1>
                <p style={{ fontSize: '1rem', color: '#8892B0', maxWidth: '300px', margin: '0 auto' }}>
                    Physician-led clinical architecture for neuro-longevity and metabolic health.
                </p>
            </motion.div>

            <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {linkItems.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.url}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            padding: '1.25rem',
                            background: link.primary ? 'linear-gradient(135deg, #FF4500, #E63E00)' : 'rgba(255, 255, 255, 0.05)',
                            color: 'white',
                            textDecoration: 'none',
                            borderRadius: '12px',
                            fontWeight: '600',
                            fontSize: '1rem',
                            border: link.primary ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: link.primary ? '0 10px 20px rgba(255, 69, 0, 0.2)' : 'none',
                            transition: 'transform 0.2s, background 0.2s',
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                            if (!link.primary) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            if (!link.primary) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        }}
                    >
                        {link.title}
                    </motion.a>
                ))}
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                style={{ marginTop: '4rem', fontSize: '0.85rem', color: '#4A5568' }}
            >
                © 2026 EmpowerVida Medical
            </motion.div>
        </div>
    );
};

export default Links;
