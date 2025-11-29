import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';

export default function Home() {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 500], [0, 250]); // Background moves slower (parallax)
    const contentY = useTransform(scrollY, [0, 500], [0, -150]);   // Content moves faster (parallax)
    const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]); // Content fades out

    return (
        <>
            {/* Hero Section - Immersive Background */}
            <section style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF', // Pure White
                color: 'var(--color-text-hero)'
            }}>
                {/* Background Image Layer - Sterile Texture */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }} // Subtle breathing
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                        y: backgroundY // Apply Parallax Y
                    }}
                >
                    <img
                        src="/sterile_biological_texture.png"
                        alt="Background"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.08, // 8% Opacity (Target 5-10%)
                        }}
                    />
                </motion.div>

                {/* Gradient Overlay - Subtle White Fade */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    background: 'radial-gradient(circle at center, rgba(255,255,255,0) 0%, #FFFFFF 100%)'
                }}></div>

                {/* Content Layer */}
                <motion.header
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        maxWidth: '1000px',
                        padding: '0 var(--spacing-md)',
                        y: contentY,       // Apply Parallax Y
                        opacity: contentOpacity // Apply Scroll Fade
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        {/* Main Title - Authority Fix */}
                        <h1 style={{
                            fontSize: 'clamp(3rem, 9vw, 7rem)',
                            fontWeight: 900, // Heavy
                            letterSpacing: '-0.04em',
                            color: '#1A3C34', // Deep Biological Green
                            marginBottom: '2rem', // Increased padding
                            textTransform: 'uppercase',
                            fontFamily: '"Manrope", sans-serif',
                            lineHeight: 0.9,
                            textShadow: 'none', // Flat & Matte
                            display: 'block'
                        }}>
                            EMPOWERVIDA
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            style={{
                                fontSize: '1.1rem',
                                color: '#1A3C34', // Deep Biological Green (Matching Logo)
                                fontWeight: 700,
                                letterSpacing: 'clamp(0.15em, 5vw, 0.3em)', // Responsive tracking
                                textTransform: 'uppercase',
                                marginBottom: '4rem'
                            }}
                        >
                            LONGEVITY, PRESCRIBED.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        {/* The Hook - Vitality Teal */}
                        <motion.h2
                            whileHover={{
                                textShadow: '0 0 20px rgba(0, 128, 128, 0.5), 0 0 40px rgba(0, 128, 128, 0.3)',
                                scale: 1.02
                            }}
                            transition={{ duration: 0.3 }}
                            style={{
                                fontSize: 'clamp(2.5rem, 6.25vw, 4.375rem)', // Increased by 25%
                                fontWeight: 800,
                                color: '#008080', // Vitality Teal
                                marginBottom: '1.5rem',
                                fontFamily: '"Manrope", sans-serif',
                                letterSpacing: '-0.02em',
                                lineHeight: 1.1,
                                cursor: 'default'
                            }}
                        >
                            DON'T JUST AGE. EVOLVE.
                        </motion.h2>

                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', maxWidth: '750px', margin: '0 auto 3rem', lineHeight: 1.6, fontWeight: 500 }}>
                            The physician-led protocol to upgrade your metabolic engine, sharpen cognitive focus, and extend your prime.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <Link to="/protocol" className="btn-primary" style={{ padding: '1rem 2.5rem' }}>
                            FIND YOUR PROTOCOL
                        </Link>
                        <Link to="/diagnostics" className="btn-secondary" style={{ padding: '1rem 2.5rem' }}>
                            THE LABS
                        </Link>
                    </motion.div>
                </motion.header>
            </section>

            {/* NEW: Choose Your Protocol Section */}
            <section style={{ padding: '6rem 2rem', background: '#FFFFFF' }}>
                <div className="container" data-aos="fade-up">
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 800,
                            color: '#1A3C34',
                            marginBottom: '1rem',
                            fontFamily: '"Manrope", sans-serif',
                            letterSpacing: '-0.02em'
                        }}>
                            ENGINEERED FOR YOUR BIOLOGY.
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Select your primary objective. Evidence-based stacks designed for specific clinical outcomes.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {/* CARD 1: VITALITY */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '16px',
                                padding: '2.5rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#FF5F00' }}>⚡</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A3C34', marginBottom: '0.5rem' }}>THE VITALITY STACK</h3>
                            <p style={{ fontSize: '0.9rem', color: '#FF5F00', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>For Physical & Cellular Energy</p>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Eliminate the afternoon crash. Fuel your mitochondria for sustained ATP production.
                            </p>
                            <div style={{ background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '8px', width: '100%', marginBottom: '2rem' }}>
                                <p style={{ fontSize: '0.85rem', color: '#1A3C34', fontWeight: 600 }}>
                                    Bio-Available CoQ10 • Creatine Monohydrate • Methylated B-Complex
                                </p>
                            </div>
                            <Link to="/protocol" style={{ marginTop: 'auto', color: '#FF5F00', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid #FF5F00', paddingBottom: '2px' }}>
                                VIEW THE STACK &gt;
                            </Link>
                        </div>

                        {/* CARD 2: CLARITY */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '16px',
                                padding: '2.5rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#008080' }}>🧠</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A3C34', marginBottom: '0.5rem' }}>THE CLARITY STACK</h3>
                            <p style={{ fontSize: '0.9rem', color: '#008080', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>For Focus & Cognitive Speed</p>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Clear the fog. Optimize neurotransmitter synthesis and synaptic firing speeds.
                            </p>
                            <div style={{ background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '8px', width: '100%', marginBottom: '2rem' }}>
                                <p style={{ fontSize: '0.85rem', color: '#1A3C34', fontWeight: 600 }}>
                                    Magnesium L-Threonate • High-DHA Omega-3 • Lion's Mane
                                </p>
                            </div>
                            <Link to="/protocol" style={{ marginTop: 'auto', color: '#008080', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid #008080', paddingBottom: '2px' }}>
                                VIEW THE STACK &gt;
                            </Link>
                        </div>

                        {/* CARD 3: FOUNDATION */}
                        <div
                            data-aos="fade-up"
                            data-aos-delay="300"
                            style={{
                                background: '#FFFFFF',
                                borderRadius: '16px',
                                padding: '2.5rem',
                                boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.05)';
                            }}
                        >
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#1A3C34' }}>🧬</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A3C34', marginBottom: '0.5rem' }}>THE FOUNDATION</h3>
                            <p style={{ fontSize: '0.9rem', color: '#1A3C34', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>For Immunity & Genomic Stability</p>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                The non-negotiables. Defense against inflammation and genomic instability.
                            </p>
                            <div style={{ background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '8px', width: '100%', marginBottom: '2rem' }}>
                                <p style={{ fontSize: '0.85rem', color: '#1A3C34', fontWeight: 600 }}>
                                    Vitamin D3 + K2 • GlyNAC • Zinc Picolinate
                                </p>
                            </div>
                            <Link to="/protocol" style={{ marginTop: 'auto', color: '#1A3C34', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', borderBottom: '2px solid #1A3C34', paddingBottom: '2px' }}>
                                VIEW THE STACK &gt;
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Bar - Light Divider */}
            <div style={{
                background: 'var(--color-bg-alt)',
                padding: '1.5rem 0',
                borderTop: '1px solid rgba(0,0,0,0.1)',
                borderBottom: '1px solid rgba(0,0,0,0.1)'
            }}>
                <div className="container text-center">
                    <p style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                        Founded by an Acute Care Physician & ER Veteran
                    </p>
                </div>
            </div>

            {/* Value Prop Section - Premium Clean White */}
            <section style={{
                padding: 'var(--section-padding) 0',
                background: 'var(--color-bg)',
                borderTop: '1px solid var(--color-border)'
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '3rem',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>

                    {/* Card 1: THE JOURNAL */}
                    <SpotlightCard to="/blog" delay={0.2}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔬</div>
                        <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>THE JOURNAL</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                            Deep-dive briefings on Mitochondria, Sleep Architecture, and Cellular Resilience.
                        </p>
                        <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore &gt;</div>
                    </SpotlightCard>

                    {/* Card 2: THE PROTOCOL */}
                    <SpotlightCard to="/protocol" delay={0.4}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📋</div>
                        <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>THE PROTOCOL</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                            My exact daily supplement stack. Dosage, timing, and sourcing.
                        </p>
                        <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore &gt;</div>
                    </SpotlightCard>

                    {/* Card 3: THE DIAGNOSTICS */}
                    <SpotlightCard to="/diagnostics" delay={0.6}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🩸</div>
                        <h3 style={{ color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 700 }}>THE DIAGNOSTICS</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, flexGrow: 1 }}>
                            Stop guessing. The 5 essential blood markers your doctor isn't checking.
                        </p>
                        <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Explore &gt;</div>
                    </SpotlightCard>

                </div>
            </section>
        </>
    );
}
