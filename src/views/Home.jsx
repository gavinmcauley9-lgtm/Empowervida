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

            {/* COMPACT EDITORIAL GATEWAYS — discovery before biography */}
            <section aria-labelledby="explore-health-title" style={{ padding: 'clamp(2rem, 4vw, 3.5rem) 1.25rem', background: '#f4f9f8' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <p style={{ color: '#168c84', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.65rem' }}>Start exploring</p>
                    <h2 id="explore-health-title" style={{ fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(1.9rem, 4vw, 3rem)', color: '#1A3C34', marginBottom: '0.65rem' }}>Explore the science of living better</h2>
                    <p style={{ color: '#4A5568', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>Four fascinating places to begin. Discover the science, follow your curiosity and find practical insights along the way.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '0.85rem' }}>
                        {[
                            { label: 'CELLULAR ENERGY', title: 'Mitochondrial Health', hook: 'The tiny power stations inside your cells.', href: '/mitochondrial-guide', action: 'Explore the guide', image: '/hero_split_screen_mitochondria.png' },
                            { label: 'METABOLIC HEALTH', title: 'The Insulin Story', hook: 'Insulin does far more than control blood sugar.', href: '/insulin-story', action: 'Read the story', image: '/cellular_structure.webp' },
                            { label: 'COGNITIVE HEALTH', title: 'Brain Health & Ageing', hook: 'What can we do to protect the ageing brain?', href: '/blog', action: 'Explore brain health', image: '/gut_brain_inflammation.png' },
                            { label: 'HEALTHSPAN', title: 'The Five Pillars', hook: 'The practical foundations of healthier ageing.', href: '/longevity', action: 'Discover the foundations', image: '/home_hero_user.png' }
                        ].map((topic) => (
                            <Link key={topic.title} href={topic.href} style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: '18px', background: '#fff', border: '1px solid #dceae7', textDecoration: 'none', boxShadow: '0 10px 30px rgba(26,60,52,0.06)' }}>
                                <div style={{ height: 'clamp(78px, 9vw, 112px)', backgroundImage: `linear-gradient(180deg, rgba(10,31,34,0.08), rgba(10,31,34,0.35)), url("${topic.image}")`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#15383b' }} role="img" aria-label={topic.title + ' editorial illustration'} />
                                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: 'clamp(0.85rem, 1.6vw, 1.1rem)' }}>
                                    <span style={{ color: '#168c84', fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.12em', marginBottom: '0.35rem' }}>{topic.label}</span>
                                    <h3 style={{ color: '#1A3C34', fontSize: '1.22rem', lineHeight: 1.3, margin: '0 0 0.35rem' }}>{topic.title}</h3>
                                    <p style={{ color: '#4A5568', lineHeight: 1.55, fontSize: '0.95rem', margin: '0 0 0.65rem', flexGrow: 1 }}>{topic.hook}</p>
                                    <span style={{ color: '#087e76', fontSize: '0.9rem', fontWeight: 800 }}>{topic.action} →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* LATEST STORIES — distinct from the four evergreen gateways */}
            <section aria-labelledby="latest-journal-title" style={{ padding: 'clamp(2.5rem, 5vw, 4rem) 1.25rem', background: '#fff' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 id="latest-journal-title" style={{ color: '#1A3C34', fontFamily: 'Manrope, sans-serif', fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', marginBottom: '0.5rem' }}>From the Journal</h2>
                    <p style={{ color: '#4A5568', lineHeight: 1.65, marginBottom: '1.5rem' }}>Thoughtful explorations of health science, from established evidence to promising discoveries.</p>
                    <Link href="/blog" style={{ color: '#087e76', fontWeight: 800, textDecoration: 'none' }}>Browse all articles →</Link>
                </div>
            </section>

            {/* ABOUT DR. GAVIN SECTION - OVERLAPPING SEAMLESS BLEND */}
            <section className="homepage-founder-section" style={{
                padding: 'clamp(3rem, 6vw, 5rem) 1.25rem',
                marginTop: '0',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 10%, rgba(248, 252, 252, 0.3) 25%, rgba(240, 248, 248, 0.9) 50%, rgba(248, 252, 252, 0.3) 75%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 0) 100%)',
                position: 'relative',
                zIndex: 10,
                isolation: 'isolate',
                pointerEvents: 'none',
                transform: 'translateZ(0)'
            }}>
                <div className="container" data-aos="fade-up" style={{ maxWidth: '1000px', margin: '0 auto', pointerEvents: 'auto' }}>
                    {/* Heading */}
                    <div style={{ textAlign: 'center', marginBottom: 'clamp(1.4rem, 3vw, 2.5rem)' }}>
                        <div style={{
                            fontSize: '0.85rem',
                            fontWeight: '700',
                            letterSpacing: '0.2em',
                            color: '#20B2AA',
                            marginBottom: '0.7rem',
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
                            padding: 'clamp(1.25rem, 3.5vw, 2.75rem)',
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
                            marginBottom: '1.5rem',
                            gap: '1.1rem'
                        }}>
                            <img
                                src="/dr-gavin-mcauley.jpg"
                                alt="Dr. Gavin McAuley, physician and founder of EMPOWERVIDA"
                                style={{
                                    width: 'clamp(105px, 20vw, 155px)',
                                    height: 'clamp(105px, 20vw, 155px)',
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
                                    fontSize: 'clamp(1.05rem, 2.5vw, 1.3rem)',
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
                            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                            lineHeight: '1.65',
                            color: '#1A3C34',
                            marginBottom: '1.1rem',
                            fontWeight: '400',
                            letterSpacing: '0.005em'
                        }}>
                            After years working in emergency medicine and general practice, I've seen what happens when health problems become impossible to ignore. But I've become increasingly interested in a different question: what could we do years — perhaps decades — before that moment arrives?
                        </p>

                        <p style={{
                            fontSize: 'clamp(0.98rem, 1.8vw, 1.08rem)',
                            lineHeight: '1.65',
                            color: '#4A5568',
                            marginBottom: '1.25rem',
                            letterSpacing: '0.005em'
                        }}>
                            That's what led me to explore prevention, metabolic health and longevity. Some discoveries are genuinely exciting. Others are promising but preliminary. And some of the most effective ways to protect our health have been hiding in plain sight for decades. EmpowerVida is where I examine the evidence and share what I discover.
                        </p>

                        {/* Premium Credentials Grid */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                            gap: '0.7rem',
                            marginTop: '1.35rem',
                            paddingTop: '1.25rem',
                            borderTop: '2px solid rgba(32, 178, 170, 0.15)'
                        }}>
                            {[
                                { icon: '🎓', text: 'Aberdeen 2009' },
                                { icon: '⚕️', text: '16 Years Practising' },
                                { icon: '🚑', text: 'ER & General Practice' },
                                { icon: '💪', text: 'Clinical Optimisation' }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        padding: '0.65rem 0.5rem',
                                        background: 'rgba(255, 255, 255, 0.3)',
                                        borderRadius: '12px',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <div style={{
                                        fontSize: '1.3rem',
                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                                    }}>
                                        {item.icon}
                                    </div>
                                    <div style={{
                                        fontSize: 'clamp(0.73rem, 1.5vw, 0.92rem)',
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
                        <div style={{ textAlign: 'center', marginTop: '1.65rem' }}>
                            <Link
                                href="/about"
                                onClick={() => window.scrollTo(0, 0)}
                                className="btn-primary"
                                style={{
                                    padding: '0.95rem 1.6rem',
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

            {/* NEWSLETTER — preserve existing capture form and hero anchor */}
            <div id="email-capture"><EmailCapture variant="default" /></div>

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
