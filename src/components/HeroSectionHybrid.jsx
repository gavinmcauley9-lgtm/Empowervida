import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSectionHybrid.css';

const FloatingParticles = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 5, pointerEvents: 'none' }}>
            {[...Array(25)].map((_, i) => {
                const size = Math.random() * 3 + 1;
                const left = Math.random() * 100;
                const delay = Math.random() * 5;
                const duration = Math.random() * 12 + 8;
                return (
                    <motion.div
                        key={i}
                        initial={{ y: '110vh', opacity: 0, x: `${left}vw` }}
                        animate={{ 
                            y: '-10vh', 
                            opacity: [0, 0.6, 0],
                            x: `calc(${left}vw + ${Math.random() * 100 - 50}px)` 
                        }}
                        transition={{
                            duration: duration,
                            repeat: Infinity,
                            delay: delay,
                            ease: 'linear'
                        }}
                        style={{
                            position: 'absolute',
                            width: size,
                            height: size,
                            borderRadius: '50%',
                            background: '#20B2AA',
                            boxShadow: '0 0 8px #20B2AA, 0 0 15px #20B2AA',
                        }}
                    />
                );
            })}
        </div>
    );
};

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

            {/* Dynamic CSS Particles Overlay */}
            <FloatingParticles />

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
                    style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: '500', letterSpacing: '0.05em', marginBottom: '1.5rem', textTransform: 'uppercase', textShadow: '0 2px 4px rgba(0,0,0,0.5)', opacity: 0.9 }}
                >
                    LED BY GAVIN MCAULEY, PHYSICIAN | CLINICAL FOCUS: METABOLIC & LONGEVITY PROTOCOLS
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
                    Modern medicine says you're fine, but your <strong style={{ color: '#FFFFFF', fontWeight: 800 }}>cells are starving</strong>. Discover our physician-engineered protocol to restore mitochondrial energy, clear brain fog, and reclaim your biological prime.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="hero-hybrid-cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
                >
                    <a href="/protocol" className="hero-hybrid-btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.15rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                        Reclaim My Energy →
                    </a>
                    
                    {/* Anxiety Reducer */}
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: '500', letterSpacing: '0.02em', textShadow: '0 1px 2px rgba(0,0,0,0.5)', marginTop: '0.25rem' }}>
                        Immediate Access | Secure Purely Technical Delivery.
                    </div>
                    
                    {/* Bifurcation Safety Net */}
                    <a href="#email-capture" style={{ fontSize: '0.85rem', color: '#cbd5e1', textDecoration: 'underline', marginTop: '0.75rem', textShadow: '0 1px 2px rgba(0,0,0,0.5)', transition: 'color 0.2s', fontWeight: '500' }}>
                        Or join my newsletter for weekly Medicine 3.0 case studies and metabolic research. [Tap to Access]
                    </a>
                </motion.div>

                {/* Doctor Identity removed to avoid duplication with top authority signal */}
            </motion.div>

            {/* Bottom Elements (Responsive) */}
            <div className="hero-hybrid-bottom-bar">
                <div className="hero-hybrid-disclosure">
                    Visualization for medical education purposes.
                </div>
                
                <div className="hero-hybrid-authority-badge">
                    <span style={{ fontSize: '1.1rem' }}>⚕️</span> MEDICALLY REVIEWED BY DR. GAVIN MCAULEY
                </div>
            </div>
        </section>
    );
};

export default HeroSectionHybrid;
