import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import HeroSection from '../components/HeroSection';
import EmailCapture from '../components/EmailCapture';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
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
        "logo": "https://empowervida.com/empowervida_hero_logo.png",
        "founder": {
            "@type": "Person",
            "name": "Dr. Gavin McAuley",
            "jobTitle": "Physician & Longevity Specialist"
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
            answer: "If you have already ruled out the 'Big 4' (Anaemia, Thyroid disease, Sleep Apnea, and Depression), yet you still feel exhausted, you are likely suffering from Sub-Clinical Mitochondrial Dysfunction. Your cells are receiving fuel but cannot convert it into energy (ATP). This is effectively a 'brownout' of your biological grid."
        },
        {
            question: "Why 'Clinical-Grade' Supplements?",
            answer: "Most off-the-shelf supplements suffer from poor bioavailability (your body can't absorb them) or low dosing. We reference only the forms and dosages used in successful clinical trials, such as Liposomal delivery and methylated B-vitamins."
        },
        {
            question: "I'm overwhelmed. Where do I start?",
            answer: "Begin with 'Tier 1: The Essential 5'. These are the non-negotiables: Vitamin D, Magnesium, Omega-3s, and Metabolic support. Once your baseline is stable, you can layer on 'Tier 2' optimizations for specific goals like cognitive clarity or energy."
        },
        {
            question: "Do I need a doctor's referral?",
            answer: "No. These protocols are designed for proactive health optimization. However, Dr. Gavin always recommends sharing your supplement regimen with your primary care provider, especially if you are on prescription medications."
        },
        {
            question: "How quickly will I feel results?",
            answer: "Biochemistry takes time. While some users feel energy shifts (from things like Electrolytes or Creatine) in days, cellular repair (Mitochondrial Biogenesis) is a 6-12 week process. Consistency is the active ingredient."
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
                title="EMPOWERVIDA - Longevity, Prescribed | Evidence-Based Health Optimization"
                description="Physician-led longevity protocols. Clinical-grade supplements for energy, focus, and cellular renewal. Evidence-based solutions for optimal health and performance."
                keywords="longevity protocol, mitochondrial health, anti-aging supplements, cellular optimization, brain health, energy supplements, dr gavin mcauley, evidence-based wellness"
                canonical="/"
                ogImage="/home_hero_user.png"
                schemaData={[organizationSchema, websiteSchema, faqSchema]}
            />
            <HeroSection
                // title prop removed as it is now inside HeroSection
                backgroundImage="/home_hero_user.png"
                subtitle="Dr. Gavin McAuley, MBChB • 125kg → 95kg • ER Doctor → Longevity Strategist"
                overlay="linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)"
                textColor="#1A3C34"
                subtitleColor="#064E3B"
                subtitleWeight="600"
            >
                {/* DNA Helix Background Pattern */}
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    opacity: 0.08,
                    pointerEvents: 'none',
                    background: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='dna' x='0' y='0' width='200' height='200' patternUnits='userSpaceOnUse'%3E%3Cpath d='M100,0 Q120,50 100,100 T100,200' stroke='%2320B2AA' stroke-width='3' fill='none' opacity='0.4'/%3E%3Cpath d='M100,0 Q80,50 100,100 T100,200' stroke='%2320B2AA' stroke-width='3' fill='none' opacity='0.4'/%3E%3Ccircle cx='100' cy='25' r='4' fill='%2320B2AA'/%3E%3Ccircle cx='100' cy='75' r='4' fill='%2320B2AA'/%3E%3Ccircle cx='100' cy='125' r='4' fill='%2320B2AA'/%3E%3Ccircle cx='100' cy='175' r='4' fill='%2320B2AA'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='400' height='400' fill='url(%23dna)'/%3E%3C/svg%3E")`,
                    animation: 'dnaFloat 60s linear infinite'
                }} />
                <style>{`
                    @keyframes dnaFloat {
                        0% { transform: translateY(0px); }
                        100% { transform: translateY(-200px); }
                    }
                `}</style>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}
                >
                    <Link to="#email-capture" className="btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1rem', fontWeight: '700' }} onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#email-capture')?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        GET THE 5 LABS CHECKLIST
                    </Link>
                    <Link to="/protocol" className="btn-secondary" style={{ padding: '1.25rem 3rem', fontSize: '1rem' }} onClick={() => window.scrollTo(0, 0)}>
                        READ THE PROTOCOL
                    </Link>
                </motion.div>
            </HeroSection>

            {/* ABOUT DR. GAVIN SECTION - OVERLAPPING SEAMLESS BLEND */}
            <section style={{
                padding: '18rem 2rem 8rem 2rem',
                marginTop: '-10rem',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 10%, rgba(248, 252, 252, 0.3) 25%, rgba(240, 248, 248, 0.9) 50%, rgba(248, 252, 252, 0.3) 75%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 0) 100%)',
                position: 'relative',
                zIndex: 10,
                isolation: 'isolate',
                pointerEvents: 'none'
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
                            MBChB, University of Aberdeen
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


                        {/* Bio Text - Premium Typography */}
                        <p style={{
                            fontSize: '1.35rem',
                            lineHeight: '1.85',
                            color: '#1A3C34',
                            marginBottom: '2rem',
                            fontWeight: '400',
                            letterSpacing: '0.005em'
                        }}>
                            I'm a physician who lost 30kg by treating the root cause—not the symptoms.
                            After 15 years working in Emergency Medicine and General Practice, I
                            reversed my own insulin resistance and now specialize in holistic longevity
                            medicine.
                        </p>

                        <p style={{
                            fontSize: '1.15rem',
                            lineHeight: '1.8',
                            color: '#4A5568',
                            marginBottom: '2.5rem',
                            letterSpacing: '0.005em'
                        }}>
                            My mission is to help you optimize your healthspan through evidence-based protocols—the same approach that transformed my own health from 125kg with sleep apnea to metabolically optimized and thriving.
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
                                { icon: '🚑', text: '5 Years ER' },
                                { icon: '⚕️', text: '5 Years GP' },
                                { icon: '💪', text: '-30kg in 2022' }
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
                                to="/about"
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
                position: 'relative'
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
                            Navigate the three pillars of the Empowervida protocol: Education, Optimization, and Implementation.
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
                                to="/longevity"
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
                                    Aging is malleable. Explore our deep-dive resources on the 5 pillars of healthspan, from genomic stability to circadian biology.
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
                                to="/mitochondrial-guide"
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
                                    Energy begins at the cellular level. Discover the physician's protocol for optimizing your mitochondria and eliminating fatigue.
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
                        <motion.div
                            whileHover={{ y: -12, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <Link
                                to="/shop"
                                onClick={() => window.scrollTo(0, 0)}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(0, 128, 128, 0.04) 0%, rgba(32, 178, 170, 0.06) 100%)',
                                    backdropFilter: 'blur(10px)',
                                    WebkitBackdropFilter: 'blur(10px)',
                                    borderRadius: '20px',
                                    padding: '3rem 2.5rem',
                                    boxShadow: '0 10px 40px rgba(0, 128, 128, 0.08), 0 0 0 1px rgba(32, 178, 170, 0.1) inset',
                                    border: '1px solid rgba(32, 178, 170, 0.15)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}>
                                <div style={{
                                    fontSize: '4rem',
                                    marginBottom: '2rem',
                                    filter: 'drop-shadow(0 4px 12px rgba(0, 128, 128, 0.3))',
                                    transition: 'transform 0.3s ease'
                                }}>
                                    💊
                                </div>

                                <h3 style={{
                                    fontSize: '1.65rem',
                                    fontWeight: 800,
                                    color: '#1A3C34',
                                    marginBottom: '1rem',
                                    letterSpacing: '-0.01em'
                                }}>
                                    The Nutrient Stacks
                                </h3>

                                <p style={{
                                    fontSize: '1.05rem',
                                    color: '#4A5568',
                                    marginBottom: '2rem',
                                    lineHeight: 1.7,
                                    flexGrow: 1
                                }}>
                                    Evidence-based tools for the job. Shop our definitive 'Core 3' protocols for Vitality, Clarity, and Resilience.
                                </p>

                                <span style={{
                                    display: 'inline-block',
                                    padding: '1rem 2rem',
                                    background: '#008080',
                                    color: '#FFFFFF',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.08em',
                                    boxShadow: '0 8px 20px rgba(0, 128, 128, 0.3)',
                                    transition: 'all 0.3s ease'
                                }}>
                                    SHOP THE PROTOCOLS →
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* Testimonials Section */}
            <TestimonialsSection />

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
                        Founded by an Acute Care Physician & ER Veteran
                    </p>
                </div>
            </div >
        </>
    );
}
