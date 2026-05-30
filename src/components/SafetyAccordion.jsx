"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SafetyAccordion = ({ warnings }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!warnings || warnings.length === 0) return null;

    return (
        <div style={{
            marginTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.5rem'
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'none',
                    border: 'none',
                    color: '#FF7E5F', // Solar Orange for "Warning" but not alarmist red
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: 0,
                    width: '100%',
                    textAlign: 'left'
                }}
            >
                <span>⚠️ Clinical Safety & Who Should Be Careful</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontSize: '0.8rem' }}
                >
                    ▼
                </motion.span>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <div style={{ paddingTop: '1.5rem', paddingBottom: '0.5rem' }}>
                            {warnings.map((warning, index) => (
                                <div key={index} style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{
                                        color: '#FFFFFF',
                                        fontSize: '0.95rem',
                                        fontWeight: 700,
                                        marginBottom: '0.5rem'
                                    }}>
                                        {warning.title}
                                    </h4>
                                    <p style={{
                                        color: 'rgba(255,255,255,0.7)',
                                        fontSize: '0.9rem',
                                        lineHeight: 1.6,
                                        margin: 0
                                    }}>
                                        {warning.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SafetyAccordion;
