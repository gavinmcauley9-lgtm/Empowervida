"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import HeroSectionHybrid from '../components/HeroSectionHybrid';
import EmailCapture from '../components/EmailCapture';
import ExpertInsightsSection from '../components/ExpertInsightsSection';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';

export default function Home() {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 500], [0, 250]); // Background moves slower (parallax)
    const contentY = useTransform(scrollY, [0, 500], [0, -150]);   // Content moves faster (parallax)
    const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]); // Content fades out

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "EMPOWERVIDA",
        "description": "Physician-led health education exploring longevity, metabolic health and emerging science with a clear distinction between established evidence and promising research.",
        "url": "https://empowervida.com",
        "logo": "https://empowervida.com/empowervida_hero_logo.png",
        "founder": {
            "@type": "Person",
            "name": "Dr. Gavin McAuley",
            "jobTitle": "Physician and Health Writer"
        },
        "sameAs": [
            "https://www.linkedin.com/in/gavin-mcauley-62147151/"
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

    const faqData = [
        {
            question: "Why am I always tired even after sleeping?",
            answer: "Persistent fatigue has many possible causes, including sleep disorders, medication effects, mental health conditions and medical illness. Mitochondria are central to energy production, but unexplained fatigue alone does not establish mitochondrial dysfunction. If fatigue persists, seek an individual medical assessment."
        },
        {
            question: "Do supplements have a role in healthy ageing?",
            answer: "Some supplements can help when there is a specific deficiency or clinical indication. For otherwise healthy adults, evidence for many longevity supplements remains limited. We explore the research, possible benefits, uncertainties and safety considerations without treating supplements as substitutes for proven fundamentals."
        },
        {
            question: "I'm overwhelmed. Where do I start?",
            answer: "Start with the fundamentals supported by the strongest evidence: regular movement, good sleep, a nutritious diet, not smoking and managing blood pressure, cholesterol and blood glucose where appropriate. Our guides then explore emerging ideas, including supplements, with their evidence and limitations clearly explained."
        },
        {
            question: "Do I need a doctor's referral?",
            answer: "No referral is needed to read our educational guides. They are general information, not an individual treatment plan. Discuss significant health changes or supplements with your treating clinician, particularly if you have medical conditions or take prescription medicines."
        },
        {
            question: "How quickly will I feel results?",
            answer: "Results vary with the intervention, the individual and the outcome being measured. There is no reliable universal timeline for 'cellular repair'. Sustainable habits often matter more than quick fixes, and our articles distinguish measurable clinical benefits from early-stage biological findings."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <>
            <SEO
                title="EMPOWERVIDA | The Science of Living Better, for Longer"
                description="Physician-led health journalism on longevity, metabolic health and promising research — grounded in evidence, clear about uncertainty and focused on practical wellbeing."
                keywords="longevity research, metabolic health, mitochondrial science, healthy ageing, brain health, evidence-based health education, dr gavin mcauley"
                canonical="/"
                ogImage="/home_hero_user.png"
                schemaData={[organizationSchema, websiteSchema, faqSchema]}
            />
            <HeroSectionHybrid />

            {/* ABOUT DR. GAVIN SECTION - OVERLAPPING SEAMLESS BLEND */}
            <section className="homepage-founder-section" style={{
                padding: '18rem 2rem 8rem 2rem',
                marginTop: '-10rem',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 10%, rgba(248, 252, 252, 0.3) 25%, rgba(240, 248, 248, 0.9) 50%, rgba(248, 252, 252, 0.3) 75%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 0) 100%)',
                position: 'relative',
                zIndex: 10,
                isolation: 'isolate',
                pointerEvents: 'none',
                transform: 'translateZ(0)'
            }}>
                <div className="container" data-aos="fade-up" style={{ maxWidth: '1000px', margin: '0 auto', pointerEvents: 'auto' }}>
                    {/* Heading */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <div style={{
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.2em',
                            color: '#20B2AA',
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase'
                        }}>
                            Meet the Founder
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 800,
                            color: '#1A3C34',
                            marginBottom: '0.75rem',
                            fontFamily: '"Manrope", sans-serif',
                            letterSpacing: '-0.03em',
                            lineHeight: '1.1'
                        }}>
                            DR. GAVIN McAULEY
                        </h2>
                        <div style={{
                            fontSize: '1.05rem',
                            color: '#20B2AA',
                            fontWeight: '500',
                            fontStyle: 'italic',
                            letterSpacing: '0.01em'
                        }}>
                            MBChB (MD equivalent), University of Aberdeen
                        </div>
                    </div>

                    {/* Premium Glassmorphism Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.4)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            borderRadius: '24px',
                            padding: '4rem 3.5rem',
                            boxShadow: '0 20px 60px rgba(26, 60, 52, 0.12), 0 0 0 1px rgba(255,255,255,0.4) inset',
                            border: '1px solid rgba(32, 178, 170, 0.2)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Photo and Quote Section */}
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '3rem',
                            gap: '2rem'
                        }}>
                            <img
                                src="/dr-gavin-mcauley.jpg"
                                alt="Dr. Gavin McAuley, physician and founder of EMPOWERVIDA"
                                style={{
                                    width: '180px',
                                    height: '180px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    objectPosition: 'center top',
                                    border: '4px solid rgba(32, 178, 170, 0.3)',
                                    boxShadow: '0 10px 30px rgba(26, 60, 52, 0.2)'
                                }}
                            />
                            <blockquote style={{
                                textAlign: 'center',
                                maxWidth: '600px',
                                margin: '0'
                            }}>
                                <p style={{
                                    fontSize: '1.5rem',
                                    fontStyle: 'italic',
                                    color: '#1A3C34',
                                    lineHeight: '1.6',
                                    fontWeight: '500',
                                    margin: '0'
                                }}>
                                    "I spent years meeting people when it was already urgent.<br />
                                    <span style={{ color: '#20B2AA' }}>Now I help people long before it gets to that point.</span>"
                                </p>
                            </blockquote>
                        </div>


                        {/* Bio Text - Premium Typography */}
                        <p style={{
                            fontSize: '1.35rem',
                            lineHeight: '1.85',
                            color: '#1A3C34',
                            marginBottom: '2rem',
                            fontWeight: '400',
                            letterSpacing: '0.005em'
                        }}>
                            I'm a physician with experience in emergency medicine and general practice, and a growing focus on explaining the science of living healthier for longer.
                            After 16 years working in Emergency Medicine and General Practice, I
                            now explore longevity and preventive health research through accessible, evidence-led writing.
                        </p>

                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: '1.8',
                            color: '#4A5568',
                            marginBottom: '2.5rem',
                            letterSpacing: '0.005em'
                        }}>
                            My mission is to make health and longevity research understandable, useful and genuinely interesting — celebrating promising discoveries while being clear about what science has, and has not, established.
                        </p>

                        {/* Premium Credentials Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '1.75rem',
                            marginTop: '3.5rem',
                            paddingTop: '3rem',
                            borderTop: '2px solid rgba(32, 178, 170, 0.15)'
                        }}>
                            {[
                                { icon: '🎓', text: 'Aberdeen 2009' },
                                { icon: '⚕️', text: '16 Years Practising' },
                                { icon: '🚑', text: 'ER & General Practice' },
                                { icon: '💪', text: 'Clinical Optimization' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '1rem',
                                        padding: '0.75rem 1rem',
                                        background: 'rgba(255, 255, 255, 0.3)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '1.75rem',
                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div style={{
                                        fontSize: '0.95rem',
                                        fontWeight: '700',
                                        color: '#1A3C34',
                                        letterSpacing: '0.02em'
                                    }}>
                                        {item.text}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Premium CTA Button */}
                        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                            <Link
                                href="/about"
                                onClick={() => window.scrollTo(0, 0)}
                                className="btn-primary"
                                style={{
                                    padding: '1.25rem 3.5rem',
                                    fontSize: '1rem',
                                    fontWeight: '700',
                                    letterSpacing: '0.08em',
                                    boxShadow: '0 10px 30px rgba(255, 95, 0, 0.25)',
                                    transition: 'all 0.3s ease',
                                    display: 'inline-block',
                                    textDecoration: 'none'
                                }}
                            >
                                READ MY FULL STORY →
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section >

            {/* EMAIL CAPTURE */}
            <div id="email-capture">
                <EmailCapture variant="default" />
            </div>


            {/* LONGEVITY ECOSYSTEM - PREMIUM GRADIENT CARDS */}
            < section style={{
                padding: '8rem 2rem',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 25%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)',
                position: 'relative',
                transform: 'translateZ(0)'
            }
            }>
                <div className="container" data-aos="fade-up">
                    <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 800,
                            color: '#1A3C34',
                            marginBottom: '1.5rem',
                            fontFamily: '"Manrope", sans-serif',
                            letterSpacing: '-0.02em'
                        }}>
                            THE LONGEVITY ECOSYSTEM
                        </h2>
                        <p style={{
                            fontSize: '1.15rem',
                            color: '#4A5568',
                            maxWidth: '650px',
                            margin: '0 auto',
                            lineHeight: '1.7'
                        }}>
                            Explore the science, understand what the evidence means, and discover practical steps that may help you protect your long-term health.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {/* CARD 1: LONGEVITY BLUEPRINT - Blue Gradient */}
                        <motion.div
                            whileHover={{ y: -12, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <Link
                                href="/longevity"
                                onClick={() => window.scrollTo(0, 0)}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(26, 60, 52, 0.03) 0%, rgba(32, 178, 170, 0.05) 100%)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    borderRadius: '20px',
                                    padding: '3rem 2.5rem',
                                    boxShadow: '0 10px 40px rgba(26, 60, 52, 0.08), 0 0 0 1px rgba(26, 60, 52, 0.1) inset',
                                    border: '1px solid rgba(26, 60, 52, 0.15)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                {/* Hover Glow Effect */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-50%',
                                    left: '-50%',
                                    width: '200%',
                                    height: '200%',
                                    background: 'radial-gradient(circle, rgba(26, 60, 52, 0.1) 0%, transparent 70%)',
                                    opacity: 0,
                                    transition: 'opacity 0.4s ease',
                                    pointerEvents: 'none'
                                }}></div>

                                <div style={{
                                    fontSize: '4rem',
                                    marginBottom: '2rem',
                                    filter: 'drop-shadow(0 4px 12px rgba(26, 60, 52, 0.2))',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    🧬
                                </div>

                                <h3 style={{
                                    fontSize: '1.65rem',
                                    fontWeight: 800,
                                    color: '#1A3C34',
                                    marginBottom: '1rem',
                                    letterSpacing: '-0.01em'
                                }}>
                                    The Longevity Blueprint
                                </h3>

                                <p style={{
                                    fontSize: '1.05rem',
                                    color: '#4A5568',
                                    marginBottom: '2rem',
                                    lineHeight: 1.7,
                                    flexGrow: 1
                                }}>
                                    Ageing is malleable. Explore our deep-dive resources on the 5 pillars of healthspan, from genomic stability to circadian biology.
                                </p>

                                <span style={{
                                    display: 'inline-block',
                                    padding: '1rem 2rem',
                                    background: '#1A3C34',
                                    color: '#FFFFFF',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    boxShadow: '0 8px 20px rgba(26, 60, 52, 0.25)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    LEARN THE SCIENCE →
                                </span>
                            </Link>
                        </motion.div>

                        {/* CARD 2: MITOCHONDRIAL HEALTH - Orange Gradient */}
                        <motion.div
                            whileHover={{ y: -12, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <Link
                                href="/mitochondrial-guide"
                                onClick={() => window.scrollTo(0, 0)}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255, 95, 0, 0.04) 0%, rgba(255, 165, 0, 0.06) 100%)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    borderRadius: '20px',
                                    padding: '3rem 2.5rem',
                                    boxShadow: '0 10px 40px rgba(255, 95, 0, 0.08), 0 0 0 1px rgba(255, 95, 0, 0.1) inset',
                                    border: '1px solid rgba(255, 95, 0, 0.15)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                            >
                                <div style={{
                                    fontSize: '4rem',
                                    marginBottom: '2rem',
                                    filter: 'drop-shadow(0 4px 12px rgba(255, 95, 0, 0.3))',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    ⚡
                                </div>

                                <h3 style={{
                                    fontSize: '1.65rem',
                                    fontWeight: 800,
                                    color: '#1A3C34',
                                    marginBottom: '1rem',
                                    letterSpacing: '-0.01em'
                                }}>
                                    Mitochondrial Health
                                </h3>

                                <p style={{
                                    fontSize: '1.05rem',
                                    color: '#4A5568',
                                    marginBottom: '2rem',
                                    lineHeight: 1.7,
                                    flexGrow: 1
                                }}>
                                    Mitochondria help power our cells. Explore what researchers are learning about cellular energy, healthy ageing and the limits of current evidence — without assuming every case of fatigue has a mitochondrial cause.
                                </p>

                                <span style={{
                                    display: 'inline-block',
                                    padding: '1rem 2rem',
                                    background: '#FF5F00',
                                    color: '#FFFFFF',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    boxShadow: '0 8px 20px rgba(255, 95, 0, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    EXPLORE THE ENGINE →
                                </span>
                            </Link>
                        </motion.div>

                        {/* CARD 3: NUTRIENT STACKS - Teal Gradient */}
                        
                    </div>
                </div>
            </section >

            {/* Expert Insights Section */}
            <ExpertInsightsSection />

            {/* FAQ Section */}
            <FAQSection data={faqData} />

            {/* Trust Bar - Light Divider */}
            < div style={{
                background: 'var(--color-bg-alt)',
                padding: '1.5rem 0',
                borderTop: '1px solid rgba(0,0,0,0.1)',
                borderBottom: '1px solid rgba(0,0,0,0.1)'
            }}>
                <div className="container text-center">
                    <p style={{ fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                        Evidence-led health education by Dr. Gavin McAuley, MBChB
                    </p>
                </div>
            </div >
        </>
    );
}
