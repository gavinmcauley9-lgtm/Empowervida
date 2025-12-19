import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';

export default function Home() {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 500], [0, 250]); // Background moves slower (parallax)
    const contentY = useTransform(scrollY, [0, 500], [0, -150]);   // Content moves faster (parallax)
    const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]); // Content fades out

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": "EMPOWERVIDA",
        "description": "Evidence-based longevity protocols and clinical-grade supplements for optimal health and cellular performance.",
        "url": "https://empowervida.com",
        "logo": "https://empowervida.com/hero_dna_botanical_1764284832727.png",
        "founder": {
            "@type": "Person",
            "name": "Dr. Gavin McAuley",
            "jobTitle": "Physician & Longevity Specialist"
        },
        "sameAs": [
            // Add social media URLs when available
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "EMPOWERVIDA",
        "url": "https://empowervida.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://empowervida.com/blog?s={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
            <SEO
                title="EMPOWERVIDA - Longevity, Prescribed | Evidence-Based Health Optimization"
                description="Physician-led longevity protocols. Clinical-grade supplements for energy, focus, and cellular renewal. Evidence-based solutions for optimal health and performance."
                keywords="longevity protocol, mitochondrial health, anti-aging supplements, cellular optimization, brain health, energy supplements, dr gavin mcauley, evidence-based wellness"
                canonical="/"
                ogImage="/home_hero_fade.png"
                schemaData={[organizationSchema, websiteSchema]}
            />
            <HeroSection
                backgroundImage="/home_hero_fade.webp"
                title={
                    <>
                        <span style={{ color: '#1A3C34' }}>EMPOWER</span>
                        <span style={{ color: '#20B2AA' }}>VIDA</span>
                    </>
                }
                subtitle="LONGEVITY, PRESCRIBED."
                overlay="radial-gradient(circle at center, rgba(255,255,255,0) 0%, #FFFFFF 100%)"
                textColor="#1A3C34"
                subtitleColor="#1A3C34"
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
            </HeroSection>

            {/* ABOUT DR. GAVIN SECTION - PREMIUM MEDICAL AESTHETIC */}
            <section style={{
                padding: '8rem 2rem',
                background: '#FFFFFF',
                borderTop: '1px solid rgba(26, 60, 52, 0.08)',
                borderBottom: '1px solid rgba(26, 60, 52, 0.08)',
                position: 'relative',
                zIndex: 10
            }}>
                <div className="container" data-aos="fade-up" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    {/* Heading */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            letterSpacing: '0.15em',
                            color: '#1A3C34',
                            marginBottom: '1rem',
                            textTransform: 'uppercase'
                        }}>
                            Meet Your Physician
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                            fontWeight: 800,
                            color: '#1A3C34',
                            marginBottom: '1rem',
                            fontFamily: '"Manrope", sans-serif',
                            letterSpacing: '-0.02em',
                            lineHeight: '1.1'
                        }}>
                            DR. GAVIN McAULEY
                        </h2>
                        <div style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-accent-teal)',
                            fontWeight: '500',
                            fontStyle: 'italic'
                        }}>
                            MBChB, University of Aberdeen
                        </div>
                    </div>

                    {/* Main Content Card */}
                    <div style={{
                        background: 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%)',
                        borderRadius: '16px',
                        padding: '4rem 3.5rem',
                        boxShadow: '0 2px 20px rgba(26, 60, 52, 0.08)',
                        border: '1px solid rgba(26, 60, 52, 0.1)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        {/* Subtle accent line */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '4px',
                            height: '100%',
                            background: 'linear-gradient(180deg, var(--color-accent-teal) 0%, #1A3C34 100%)'
                        }}></div>

                        {/* Bio Text - FIRST PERSON */}
                        <p style={{
                            fontSize: '1.3rem',
                            lineHeight: '1.8',
                            color: 'var(--color-text)',
                            marginBottom: '2rem',
                            fontWeight: '400'
                        }}>
                            I'm a physician who lost 30kg by treating the root cause—not the symptoms. After 15 years practicing Emergency Medicine and General Practice, I reversed my own insulin resistance and now specialize in holistic longevity medicine.
                        </p>

                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: '1.8',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2.5rem'
                        }}>
                            My mission is to help you optimize your healthspan through evidence-based protocols—the same approach that transformed my own health from 125kg with sleep apnea to metabolically optimized and thriving.
                        </p>

                        {/* Credentials Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1.5rem',
                            marginTop: '3rem',
                            paddingTop: '2.5rem',
                            borderTop: '1px solid rgba(26, 60, 52, 0.1)'
                        }}>
                            {[
                                { icon: '🎓', text: 'Aberdeen 2009' },
                                { icon: '🚑', text: '5 Years ER' },
                                { icon: '⚕️', text: '5 Years GP' },
                                { icon: '💪', text: '-30kg in 2022' }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '0.5rem 0'
                                }}>
                                    <div style={{
                                        fontSize: '1.5rem'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div style={{
                                        fontSize: '0.95rem',
                                        fontWeight: '600',
                                        color: '#1A3C34',
                                        letterSpacing: '0.01em'
                                    }}>
                                        {item.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                            <Link
                                to="/about"
                                className="btn-primary"
                                style={{
                                    padding: '1rem 3rem',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    letterSpacing: '0.05em'
                                }}
                            >
                                READ MY FULL STORY →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* NEW: Content Portal Section */}
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
                            THE LONGEVITY ECOSYSTEM
                        </h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                            Navigate the three pillars of the Empowervida protocol: Education, Optimization, and Implementation.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {/* BOX 1: LONGEVITY EDUCATION */}
                        <Link
                            to="/longevity"
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
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                                cursor: 'pointer'
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
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A3C34', marginBottom: '0.5rem' }}>The Longevity Blueprint</h3>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Aging is malleable. Explore our deep-dive resources on the 5 pillars of healthspan, from genomic stability to circadian biology.
                            </p>
                            <span style={{
                                marginTop: 'auto',
                                display: 'inline-block',
                                padding: '0.8rem 1.5rem',
                                background: '#1A3C34',
                                color: '#FFFFFF',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                LEARN THE SCIENCE &gt;
                            </span>
                        </Link>

                        {/* BOX 2: MITOCHONDRIAL EDUCATION */}
                        <Link
                            to="/mitochondrial-guide"
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
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                                cursor: 'pointer'
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
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A3C34', marginBottom: '0.5rem' }}>Mitochondrial Health</h3>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Energy begins at the cellular level. Discover the physician's protocol for optimizing your mitochondria and eliminating fatigue.
                            </p>
                            <span style={{
                                marginTop: 'auto',
                                display: 'inline-block',
                                padding: '0.8rem 1.5rem',
                                background: '#FF5F00',
                                color: '#FFFFFF',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                EXPLORE THE ENGINE &gt;
                            </span>
                        </Link>

                        {/* BOX 3: THE STORE */}
                        <Link
                            to="/shop"
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
                                transition: 'all 0.3s ease',
                                textDecoration: 'none',
                                cursor: 'pointer'
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
                            <div style={{ fontSize: '3rem', marginBottom: '1.5rem', color: '#008080' }}>💊</div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A3C34', marginBottom: '0.5rem' }}>The Nutrient Stacks</h3>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Evidence-based tools for the job. Shop our definitive 'Core 3' protocols for Vitality, Clarity, and Resilience.
                            </p>
                            <span style={{
                                marginTop: 'auto',
                                display: 'inline-block',
                                padding: '0.8rem 1.5rem',
                                background: '#008080',
                                color: '#FFFFFF',
                                borderRadius: '8px',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                SHOP THE PROTOCOLS &gt;
                            </span>
                        </Link>
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
        </>
    );
}
