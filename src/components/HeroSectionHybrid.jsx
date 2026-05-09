import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSectionHybrid.css';

const HeroSectionHybrid = ({
    backgroundImage = "/hero_split_screen_mitochondria.png",
    height = "100vh"
}) => {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 500], [0, 250]);
    const contentY = useTransform(scrollY, [0, 500], [0, -150]);
    const contentOpacity = useTransform(scrollY, [0, 600], [1, 0]);

    return (
        <section className="hero-hybrid-section" style={{ minHeight: height }}>
            {/* Masked Background Wrapper */}
            <div className="hero-hybrid-bg-wrapper">
                {/* Background Image Layer - Ken Burns Effect */}
                <motion.div
                    className="hero-hybrid-bg-image"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        y: backgroundY
                    }}
                    animate={{
                        scale: [1.1, 1.15],
                        backgroundPosition: ['center 20%', 'center 25%']
                    }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />

                {/* Gradient Overlay */}
                <div className="hero-hybrid-overlay" />

                {/* Right Side Fade */}
                <div className="hero-hybrid-right-fade" />
            </div>

            {/* Content Layer */}
            <motion.div
                className="hero-hybrid-content"
                style={{
                    y: contentY,
                    opacity: contentOpacity
                }}
            >
                {/* Authority Signal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: '700', letterSpacing: '0.05em', marginBottom: '1.5rem', textTransform: 'uppercase', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                >
                    Led by Gavin McAuley, Physician | Specialist Interest: Metabolic & Longevity Protocols
                </motion.div>

                {/* Trust Badge */}
                <motion.span
                    className="hero-hybrid-badge premium-glow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span style={{ marginRight: '8px' }}>⚡️</span> Stop settling for "normal".
                </motion.span>

                {/* Main Title */}
                <motion.h1
                    className="hero-hybrid-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    YOUR LABS ARE NORMAL.<br/>
                    <span className="text-gradient-award">YOU STILL FEEL TERRIBLE.</span>
                </motion.h1>

                {/* Softer Subheadline */}
                <motion.p
                    className="hero-hybrid-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ fontSize: '1.35rem', letterSpacing: '0.01em', marginTop: '1.5rem', marginBottom: '2.5rem', lineHeight: '1.6', maxWidth: '800px', color: '#f8fafc', textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}
                >
                    Modern medicine says you're fine, but your cells are starving. Discover our physician-engineered protocol to restore mitochondrial energy, clear brain fog, and reclaim your biological prime.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="hero-hybrid-cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    <a href="/protocol" className="hero-hybrid-btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.15rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        Get Your Protocol →
                    </a>
                </motion.div>

                {/* Doctor Identity removed to avoid duplication with top authority signal */}
            </motion.div>
        </section>
    );
};

export default HeroSectionHybrid;
