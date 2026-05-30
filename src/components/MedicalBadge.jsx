"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MedicalBadge = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show badge after scrolling down 80vh (past the Hero section)
            if (window.scrollY > window.innerHeight * 0.8) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(32, 178, 170, 0.3)',
                        borderRadius: '50px',
                        padding: '8px 16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                        zIndex: 9999,
                        pointerEvents: 'none'
                    }}
                >
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#20B2AA',
                        boxShadow: '0 0 8px #20B2AA'
                    }}></div>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: '#1A3C34',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Medically Reviewed By Dr. Gavin McAuley, MBChB
                    </span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MedicalBadge;
