import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const LongevityGuide = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>The 5 Pillars of Longevity Medicine: A Physician's Framework | EMPOWERVIDA</title>
                <meta name="title" content="The 5 Pillars of Longevity Medicine: A Physician's Framework" />
                <meta name="description" content="Beyond diet and exercise. Learn the evidence-based framework for extending healthspan: nutritional biochemistry, exercise physiology, sleep architecture, stress resilience, and targeted supplementation." />
                <meta name="keywords" content="longevity medicine, healthspan, mTOR, AMPK, autophagy, VO2 max, zone 2 training, glymphatic system, HRV, rapamycin, metformin, longevity supplements" />
                <meta name="author" content="Dr. Gavin McAuley" />
                <link rel="canonical" href="https://empowervida.com/longevity" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://empowervida.com/longevity" />
                <meta property="og:title" content="The 5 Pillars of Longevity Medicine | EMPOWERVIDA" />
                <meta property="og:description" content="A physician's evidence-based framework for extending healthspan through nutritional biochemistry, exercise physiology, sleep optimization, and targeted interventions." />
                <meta property="og:site_name" content="EMPOWERVIDA" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://empowervida.com/longevity" />
                <meta property="twitter:title" content="The 5 Pillars of Longevity Medicine | EMPOWERVIDA" />
                <meta property="twitter:description" content="A physician's evidence-based framework for extending healthspan." />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalWebPage",
                        "headline": "The 5 Pillars of Longevity Medicine: A Physician's Framework",
                        "description": "Evidence-based framework for extending healthspan through nutritional biochemistry, exercise physiology, sleep optimization, stress resilience, and targeted supplementation.",
                        "author": {
                            "@type": "Person",
                            "name": "Dr. Gavin McAuley",
                            "jobTitle": "Physician",
                            "description": "The Longevity Architect"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "EMPOWERVIDA",
                            "url": "https://empowervida.com"
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://empowervida.com/longevity"
                        },
                        "datePublished": "2025-12-02",
                        "dateModified": "2025-12-02",
                        "specialty": "Longevity Medicine"
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/longevity_hero_cinematic_1764666029631.png"
                title="The 5 Pillars of Longevity Medicine"
                subtitle="Beyond Diet and Exercise: The Physician's Framework for Healthspan"
                overlay="linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)"
                textColor="#FFFFFF"
                subtitleColor="#20B2AA"
                textShadow="0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)"
            >
                <p style={{

                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    opacity: 0.95,
                    color: '#FFFFFF',
                    textShadow: '0 2px 15px rgba(0,0,0,0.9)'
                }}>
                    A Clinical Approach to Extending Your Years of Vitality
                </p>
                <p style={{
                    fontSize: '1rem',
                    marginTop: '1rem',
                    opacity: 0.85,
                    color: '#FFFFFF',
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                }}>
                    By Dr. Gavin | The Longevity Architect
                </p>
            </HeroSection>


            {/* Introduction */}
            < section style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '4rem 2rem',
                color: 'var(--color-text)'
            }
            }>
                <p style={{
                    fontSize: '1.3rem',
                    lineHeight: 1.8,
                    marginBottom: '2rem',
                    fontWeight: 300
                }}>
                    Standard medicine asks: <em>"Are you eating vegetables?"</em>
                </p>
                <p style={{
                    fontSize: '1.3rem',
                    lineHeight: 1.8,
                    marginBottom: '2rem',
                    fontWeight: 300
                }}>
                    Longevity medicine asks: <em>"Are you manipulating mTOR and AMPK signaling to trigger autophagy?"</em>
                </p>

                <div style={{
                    background: 'rgba(32, 178, 170, 0.1)',
                    borderLeft: '4px solid var(--color-accent-teal)',
                    padding: '2rem',
                    margin: '3rem 0',
                    borderRadius: '8px'
                }}>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                        margin: 0
                    }}>
                        <strong>This is not wellness. This is precision medicine.</strong> The goal is not just to live longer—it's to extend your <strong>healthspan</strong>: the years you remain vital, cognitively sharp, and physically capable.
                    </p>
                </div>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    marginTop: '2rem'
                }}>
                    Below are the <strong>5 Pillars</strong> that form the foundation of longevity medicine—the framework I use in my clinical practice to help patients reach "escape velocity" aging.
                </p>
            </section >

            {/* Pillar 1: Nutritional Biochemistry */}
            < section style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '6rem 2rem'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            Pillar 1: Nutritional Biochemistry
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#667eea',
                            fontWeight: 600
                        }}>
                            Not Just "Diet"—Pathway Manipulation
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Standard medicine asks if you're eating vegetables. Longevity medicine asks if you're <strong>manipulating mTOR and AMPK signaling</strong> to trigger cellular cleanup.
                        </p>

                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginTop: '3rem',
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            The Focus:
                        </h3>
                        <ul style={{ paddingLeft: '2rem', marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Energy Balance:</strong> Preventing insulin resistance and metabolic dysfunction
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Protein Synthesis:</strong> Maintaining muscle mass to prevent sarcopenia (age-related muscle loss)
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Autophagy Activation:</strong> Using Time-Restricted Feeding (TRF) to trigger cellular recycling
                            </li>
                        </ul>

                        <div style={{
                            background: 'rgba(102, 126, 234, 0.1)',
                            borderLeft: '4px solid #667eea',
                            padding: '1.5rem',
                            margin: '2rem 0',
                            borderRadius: '8px'
                        }}>
                            <p style={{ margin: 0, fontWeight: 600, color: '#667eea', marginBottom: '0.5rem' }}>
                                Physician's Note:
                            </p>
                            <p style={{ margin: 0 }}>
                                The goal is not calorie restriction—it's <strong>nutrient timing</strong>. We use fasting windows (12-16 hours) to downregulate mTOR and activate AMPK, which signals the cell to "clean house" via autophagy.
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Pillar 2: Exercise Physiology */}
            < section style={{
                background: 'linear-gradient(135deg, rgba(255, 107, 107, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '6rem 2rem'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            Pillar 2: Exercise Physiology
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#ff6b6b',
                            fontWeight: 600
                        }}>
                            The Most Potent Drug
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.2rem' }}>
                            Exercise is widely considered the <strong>single most effective intervention</strong> for extending life.
                        </p>

                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginTop: '3rem',
                            marginBottom: '1.5rem',
                            color: 'var(--color-text)'
                        }}>
                            The Four Subdivisions:
                        </h3>

                        <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
                            {[
                                {
                                    title: '1. Zone 2 Training',
                                    description: 'For mitochondrial efficiency and metabolic base. This is the "conversational pace" cardio that builds your aerobic engine.'
                                },
                                {
                                    title: '2. Strength/Hypertrophy',
                                    description: 'To protect against frailty and serve as a "glucose sink." Muscle is the organ of longevity—it buffers blood sugar and prevents insulin resistance.'
                                },
                                {
                                    title: '3. VO2 Max',
                                    description: 'The strongest correlate to mortality risk. Higher VO2 max = lower all-cause mortality. This requires high-intensity interval training (HIIT).'
                                },
                                {
                                    title: '4. Stability',
                                    description: 'The often-ignored foundation to prevent falls in late life. Balance, proprioception, and mobility work are non-negotiable.'
                                }
                            ].map((item, index) => (
                                <div key={index} style={{
                                    background: 'rgba(255, 107, 107, 0.05)',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    borderLeft: '4px solid #ff6b6b'
                                }}>
                                    <h4 style={{
                                        fontSize: '1.3rem',
                                        fontWeight: 700,
                                        marginBottom: '0.5rem',
                                        color: '#ff6b6b'
                                    }}>
                                        {item.title}
                                    </h4>
                                    <p style={{ margin: 0 }}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* Pillar 3: Sleep Physiology */}
            < section style={{
                background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '6rem 2rem'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            Pillar 3: Sleep Physiology
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#764ba2',
                            fontWeight: 600
                        }}>
                            The Repair Shop
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            This is not just "rest." Sleep is when the <strong>glymphatic system</strong> scrubs neurotoxins (amyloid and tau proteins) from the brain.
                        </p>

                        <div style={{
                            background: 'rgba(118, 75, 162, 0.1)',
                            borderLeft: '4px solid #764ba2',
                            padding: '1.5rem',
                            margin: '2rem 0',
                            borderRadius: '8px'
                        }}>
                            <p style={{ margin: 0, fontWeight: 600, color: '#764ba2', marginBottom: '0.5rem' }}>
                                The Metric: Sleep Architecture
                            </p>
                            <p style={{ margin: 0 }}>
                                We look at the ratio of <strong>Deep Sleep</strong> (physical repair) to <strong>REM Sleep</strong> (emotional/cognitive repair). Both are essential—you can't sacrifice one for the other.
                            </p>
                        </div>

                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginTop: '3rem',
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            What We Optimize:
                        </h3>
                        <ul style={{ paddingLeft: '2rem' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Sleep Latency:</strong> How quickly you fall asleep (should be &lt;15 minutes)
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Sleep Efficiency:</strong> Percentage of time in bed actually asleep (target: &gt;85%)
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Deep Sleep %:</strong> Should be 15-20% of total sleep time
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>REM Sleep %:</strong> Should be 20-25% of total sleep time
                            </li>
                        </ul>

                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <Link to="/shop" style={{
                                display: 'inline-block',
                                background: '#764ba2',
                                color: '#FFFFFF',
                                padding: '1rem 2rem',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                boxShadow: '0 4px 15px rgba(118, 75, 162, 0.3)'
                            }}>
                                View Sleep Protocol →
                            </Link>
                        </div>
                    </div>
                </div>
            </section >

            {/* Pillar 4: Distress Tolerance */}
            < section style={{
                background: 'linear-gradient(135deg, rgba(255, 159, 64, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '6rem 2rem'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            Pillar 4: Distress Tolerance
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#ff9f40',
                            fontWeight: 600
                        }}>
                            The Cortisol Connection
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.2rem' }}>
                            You can have perfect labs, but if your sympathetic nervous system is chronically stuck in "fight or flight," your cortisol will shred your insulin sensitivity and gut lining.
                        </p>

                        <div style={{
                            background: 'rgba(255, 159, 64, 0.1)',
                            borderLeft: '4px solid #ff9f40',
                            padding: '1.5rem',
                            margin: '2rem 0',
                            borderRadius: '8px'
                        }}>
                            <p style={{ margin: 0, fontWeight: 600, color: '#ff9f40', marginBottom: '0.5rem' }}>
                                The Goal: Autonomic Resilience
                            </p>
                            <p style={{ margin: 0 }}>
                                Building resilience and regulating the autonomic nervous system. We measure this via <strong>Heart Rate Variability (HRV)</strong>—the higher, the better.
                            </p>
                        </div>

                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginTop: '3rem',
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            The Interventions:
                        </h3>
                        <ul style={{ paddingLeft: '2rem' }}>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>HRV Training:</strong> Using biofeedback to increase vagal tone
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Breathwork:</strong> Box breathing, 4-7-8 breathing to activate parasympathetic response
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Adaptogens:</strong> Rhodiola, Ashwagandha to modulate cortisol
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Cold Exposure:</strong> Deliberate cold stress to build resilience
                            </li>
                        </ul>
                    </div>
                </div>
            </section >

            {/* Pillar 5: Exogenous Molecules */}
            < section style={{
                background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '6rem 2rem'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            Pillar 5: Exogenous Molecules
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            color: 'var(--color-accent-teal)',
                            fontWeight: 600
                        }}>
                            The "Architect's" Domain
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            This is where our specific role shines. This pillar acknowledges that even a <strong>perfect lifestyle may not be enough</strong> to reach "escape velocity" longevity.
                        </p>

                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginTop: '3rem',
                            marginBottom: '1.5rem',
                            color: 'var(--color-text)'
                        }}>
                            The Tools:
                        </h3>

                        <div style={{
                            background: 'rgba(32, 178, 170, 0.1)',
                            borderLeft: '4px solid var(--color-accent-teal)',
                            padding: '1.5rem',
                            margin: '2rem 0',
                            borderRadius: '8px'
                        }}>
                            <h4 style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                color: 'var(--color-accent-teal)'
                            }}>
                                Targeted Supplementation
                            </h4>
                            <p style={{ marginBottom: '1rem' }}>
                                Our <strong>Mitochondrial Stack</strong>:
                            </p>
                            <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
                                <li><strong>Urolithin A:</strong> Triggers mitophagy (recycling of old mitochondria)</li>
                                <li><strong>NAC:</strong> Glutathione precursor for antioxidant defense</li>
                                <li><strong>Glycine:</strong> Supports collagen synthesis and glutathione production</li>
                                <li><strong>NAD+ Precursors:</strong> For DNA repair and sirtuin activation</li>
                                <li><strong>PQQ:</strong> Triggers mitochondrial biogenesis</li>
                            </ul>
                        </div>

                        <div style={{
                            background: 'rgba(255, 152, 0, 0.1)',
                            borderLeft: '4px solid #ff9800',
                            padding: '1.5rem',
                            margin: '2rem 0',
                            borderRadius: '8px'
                        }}>
                            <h4 style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                marginBottom: '1rem',
                                color: '#ff9800'
                            }}>
                                Pharmaceutical Interventions
                            </h4>
                            <p style={{ marginBottom: '1rem' }}>
                                Where clinically appropriate:
                            </p>
                            <ul style={{ paddingLeft: '2rem' }}>
                                <li><strong>Rapamycin:</strong> mTOR inhibitor for autophagy activation</li>
                                <li><strong>Metformin:</strong> AMPK activator for metabolic health</li>
                                <li><strong>GLP-1 Agonists:</strong> For metabolic optimization (when indicated)</li>
                            </ul>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.95rem' }}>
                                <strong>Note:</strong> These are prescription medications and should only be used under physician supervision with appropriate monitoring.
                            </p>
                        </div>

                        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                            <Link to="/mitochondrial-guide" style={{
                                display: 'inline-block',
                                background: 'var(--color-accent-teal)',
                                color: '#FFFFFF',
                                padding: '1rem 2rem',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                boxShadow: '0 4px 15px rgba(32, 178, 170, 0.3)',
                                marginRight: '1rem',
                                marginBottom: '1rem'
                            }}>
                                View Mitochondrial Guide →
                            </Link>
                            <Link to="/shop" style={{
                                display: 'inline-block',
                                background: '#1A3C34',
                                color: '#FFFFFF',
                                padding: '1rem 2rem',
                                borderRadius: '8px',
                                textDecoration: 'none',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                boxShadow: '0 4px 15px rgba(26, 60, 52, 0.3)',
                                marginBottom: '1rem'
                            }}>
                                Shop Supplements →
                            </Link>
                        </div>
                    </div>
                </div>
            </section >

            {/* Conclusion */}
            < section style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '4rem 2rem',
                textAlign: 'center'
            }}>
                <h2 style={{
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    marginBottom: '2rem',
                    color: 'var(--color-text)'
                }}>
                    The Framework, Not the Finish Line
                </h2>
                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: 1.8,
                    marginBottom: '2rem'
                }}>
                    These 5 pillars are not a checklist—they're a <strong>living framework</strong>. Longevity medicine is precision medicine. It requires measurement, iteration, and clinical oversight.
                </p>
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    color: 'var(--color-text-muted)'
                }}>
                    The goal is not just to add years to your life—it's to add <strong>life to your years</strong>.
                </p>
            </section >
        </>
    );
};

export default LongevityGuide;
