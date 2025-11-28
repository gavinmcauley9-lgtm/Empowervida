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
                backgroundColor: 'var(--color-bg-hero)',
                color: 'var(--color-text-hero)'
            }}>
                {/* Background Image Layer - Breathing + Parallax */}
                <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
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
                        src="/hero_dna_botanical.png"
                        alt="Background"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.3,
                            filter: 'grayscale(20%)'
                        }}
                    />
                </motion.div>

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,1) 100%)'
                }}></div>

                {/* Content Layer - Parallax + Fade */}
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
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                            <img
                                src="/empowervida_hero_logo.png"
                                alt="EMPOWERVIDA"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    width: '800px', // Adjust as needed based on image aspect ratio
                                    filter: 'drop-shadow(0 4px 20px rgba(255,255,255,0.5))'
                                }}
                            />
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 1 }}
                            style={{
                                fontSize: '1.2rem',
                                color: 'var(--color-text-muted)',
                                fontWeight: 600,
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                marginBottom: '3rem'
                            }}
                        >
                            Clinical Vitality Engineering
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6, fontWeight: 500 }}>
                            Evidence-based protocols for metabolic optimization, mitochondrial health, and cognitive performance.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                    >
                        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Link to="/protocol" className="btn-primary" style={{ textDecoration: 'none', padding: '1.2rem 3rem', fontSize: '1rem' }}>
                                EXPLORE THE PROTOCOL
                            </Link>
                            <Link to="/blog" className="btn-secondary" style={{ textDecoration: 'none', padding: '1.2rem 3rem', fontSize: '1rem', background: 'rgba(255,255,255,0.8)' }}>
                                READ THE JOURNAL
                            </Link>
                        </div>
                    </motion.div>
                </motion.header>
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
                padding: '8rem 0',
                background: 'var(--color-bg)',
                borderTop: '1px solid var(--color-border)'
            }}>
                <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
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
