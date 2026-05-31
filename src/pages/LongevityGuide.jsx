"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import RelatedPosts from '../components/RelatedPosts';

const LongevityGuide = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>

            <HeroSection
                backgroundImage="/longevity_hero_cinematic_1764666029631.png"
                title="The 5 Pillars of Longevity Medicine"
                subtitle="Beyond Diet and Exercise: The Physician's Framework for Healthspan"
                overlay="linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 20%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0) 100%)"
                textColor="#FFFFFF"
                subtitleColor="#20B2AA"
                textShadow="0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)"
                subtitleShadow="0 3px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)"
                subtitleWeight="700"
            >
                <p style={{

                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    fontWeight: 400,
                    fontStyle: 'italic',
                    opacity: 1,
                    color: '#374151',
                    textShadow: 'none'
                }}>
                    A Clinical Approach to Extending Your Years of Vitality
                </p>
                <p style={{
                    fontSize: '1rem',
                    marginTop: '1rem',
                    opacity: 1,
                    color: '#1F2937',
                    textShadow: 'none',
                    fontWeight: 600
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
                        <strong>This is evidence-based, proactive medicine.</strong> The goal is not just to live longer. It's to extend your <strong>healthspan</strong>: the years you remain vital, cognitively sharp, and physically capable.
                    </p>
                </div>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    marginTop: '2rem'
                }}>
                    Below are the <strong>5 Pillars</strong> that form the foundation of longevity medicine: the framework I use in my clinical education to support patients in optimising their healthspan.
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
                                The goal is not calorie restriction. It's <strong>nutrient timing</strong>. We use fasting windows (12-16 hours) to downregulate mTOR and activate AMPK, which signals the cell to "clean house" via autophagy.
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
                            Exercise is widely regarded as one of the <strong>most effective interventions</strong> for supporting longevity.
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
                                    description: 'To protect against frailty and serve as a "glucose sink." Muscle is the organ of longevity. It buffers blood sugar and prevents insulin resistance.'
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
                                We look at the ratio of <strong>Deep Sleep</strong> (physical repair) to <strong>REM Sleep</strong> (emotional/cognitive repair). Both are essential. You can't sacrifice one for the other.
                            </p>
                        </div>

                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginTop: '3rem',
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            What We Optimise:
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
                            <Link href="/shop" style={{
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
                            You can have perfect labs, but if your sympathetic nervous system is chronically activated in "fight or flight," elevated cortisol may compromise insulin sensitivity and gut barrier integrity.
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
                            This pillar acknowledges that even a <strong>well-optimised lifestyle may benefit from additional support</strong> to maximise healthspan potential.
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
                                <li><strong>Bio-Fisetin:</strong> Senolytic for clearing "zombie" cells that drive inflammation</li>
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
                                <strong>Important:</strong> These are prescription medications used off-label in longevity contexts. They should only be considered under direct physician supervision with appropriate monitoring. This information is for educational purposes only and does not constitute a recommendation.
                            </p>
                        </div>

                        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                            <Link href="/protocol#longevity-stack" style={{
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
                                marginBottom: '1rem'
                            }}>
                                Explore The Longevity Framework →
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
                    These 5 pillars are not a checklist. They're a <strong>living framework</strong>. Longevity medicine is precision medicine. It requires measurement, iteration, and clinical oversight.
                </p>
                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    color: 'var(--color-text-muted)'
                }}>
                    The goal is not just to add years to your life. It's to add <strong>life to your years</strong>.
                </p>

                <div style={{ padding: '0 2rem' }}>
                    <RelatedPosts currentCategory="longevity" />
                </div>
                {/* Footer Navigation */}
                <div style={{
                    marginTop: '6rem',
                    paddingTop: '3rem',
                    borderTop: '2px solid rgba(0,0,0,0.08)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '2rem'
                }}>
                    <Link
                        href="/mitochondrial-guide"
                        onClick={() => window.scrollTo(0, 0)}
                        style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-primary)',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}
                    >
                        ← Mitochondrial Health Guide
                    </Link>
                    <Link
                        href="/insulin-story"
                        onClick={() => window.scrollTo(0, 0)}
                        style={{
                            fontSize: '1.1rem',
                            color: 'var(--color-primary)',
                            textDecoration: 'none',
                            fontWeight: '600'
                        }}
                    >
                        The Insulin Story →
                    </Link>
                </div>
            </section >
        </>
    );
};

export default LongevityGuide;
