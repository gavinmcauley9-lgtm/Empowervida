import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroSectionHybrid.css';

const HeroSectionHybrid = ({
    backgroundImage = "/hero-longevity.jpg",
    title = "LONGEVITY, PRESCRIBED.",
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
                {/* Trust Badge */}
                <motion.span
                    className="hero-hybrid-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Evidence-based guidance. Delivered with human attention.
                </motion.span>

                {/* Main Title */}
                <motion.h1
                    className="hero-hybrid-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {title}
                </motion.h1>

                {/* Softer Subheadline */}
                <motion.p
                    className="hero-hybrid-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    You don't need to <span className="hero-hybrid-italic">push harder</span> to feel better.
                </motion.p>

                {/* Supporting Text */}
                <motion.p
                    className="hero-hybrid-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    Calm, evidence-based support for energy, health, and longevity — guided by a doctor who listens.
                </motion.p>

                {/* Safety Tagline */}
                <motion.p
                    className="hero-hybrid-tagline"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    NO HYPE. NO OVERWHELM. JUST STEADY SCIENCE.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="hero-hybrid-cta-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    <a href="/protocol" className="hero-hybrid-btn-primary">
                        Get the Free Starter Checklist
                    </a>
                    <a href="#how-we-work" className="hero-hybrid-btn-secondary">
                        Learn how we work <span className="hero-hybrid-arrow">→</span>
                    </a>
                </motion.div>

                {/* Doctor Identity */}
                <motion.div
                    className="hero-hybrid-footer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                >
                    <div className="hero-hybrid-avatar-group">
                        <div className="hero-hybrid-avatar">G</div>
                        <div className="hero-hybrid-avatar">P</div>
                    </div>
                    <div className="hero-hybrid-doctor-label">
                        Led by <strong>Dr. Gavin McAuley</strong> <span>|</span> GP & Longevity Physician
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeroSectionHybrid;
