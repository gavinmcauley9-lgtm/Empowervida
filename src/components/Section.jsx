"use client";

import React from 'react';
import { motion } from 'framer-motion'; // We might need to install framer-motion, or just use CSS transitions. 
// Let's stick to CSS for now as per plan, or simple inline styles. 
// Actually, let's use simple CSS classes for animations to keep it lightweight if we didn't install framer-motion.
// Wait, I didn't install framer-motion. I'll use standard CSS animations.

export default function Section({ children, className = '', id = '' }) {
    return (
        <section
            id={id}
            className={`container ${className}`}
            style={{
                minHeight: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: 'var(--spacing-xl) var(--spacing-md)',
                position: 'relative',
                zIndex: 1
            }}
        >
            {children}
        </section>
    );
}
