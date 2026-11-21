"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
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
                    Good preventive medicine starts with nutrition, movement, sleep and established risk reduction.
                </p>
                <p style={{
                    fontSize: '1.3rem',
                    lineHeight: 1.8,
                    marginBottom: '2rem',
                    fontWeight: 300
                }}>
                    Longevity research also asks how cellular maintenance and metabolism change with age — and which discoveries genuinely improve human health.
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
                        <strong>The strongest foundations are supported by human evidence.</strong> The goal is not just to live longer. It's to extend your <strong>healthspan</strong>: the years you remain vital, cognitively sharp, and physically capable.
                    </p>
                </div>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    marginTop: '2rem'
                }}>
                    Below are the <strong>5 Pillars</strong> that form the foundation of longevity medicine: a practical way to distinguish established actions from promising but experimental ideas.
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
                            Nutrition first, molecular pathways second
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Food quality, adequate protein and sustainable habits matter more clinically than chasing molecular pathways. mTOR and AMPK are important in ageing biology, but altering them does not automatically extend human life.
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
                                <strong>Cellular Maintenance:</strong> Time-restricted eating is being studied for its potential effects on autophagy; a reliable fasting threshold has not been established in humans
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
                                A 12–16-hour overnight fast is one practical form of time-restricted eating for some adults. Nutrient availability influences pathways such as mTOR and AMPK, which help regulate cellular maintenance, including autophagy. However, research has not established that fasting for 12–16 hours reliably increases autophagy in humans, or that doing so extends lifespan. Fasting is not suitable for everyone, particularly without medical advice when taking glucose-lowering medicines or with a history of eating disorders.
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
                            One of our strongest tools
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
                                    description: 'Cardiorespiratory fitness is strongly associated with lower mortality risk. It can improve through several forms of aerobic training; high-intensity intervals are an option, not a requirement.'
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
                            Sleep supports memory, mood and metabolic health. Researchers are investigating brain clearance pathways during sleep, including those involving amyloid and tau, but implications for preventing human neurodegenerative disease remain uncertain.
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
                                Deep and REM sleep both matter, but cannot be reduced to separate physical and mental repair categories. Consumer trackers estimate sleep stages imperfectly; overall duration, consistency and daytime functioning are more useful priorities.
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
                                <strong>Falling asleep:</strong> Persistent difficulty deserves attention; there is no single ideal minute-by-minute target
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Sleep Efficiency:</strong> Percentage of time in bed actually asleep (target: &gt;85%)
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Deep sleep:</strong> Varies with age and circumstances; tracker percentages are not clinical diagnoses
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>REM sleep:</strong> Varies between individuals; assess persistent symptoms rather than chasing a fixed percentage
                            </li>
                        </ul>

                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            
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
                            Resilience beyond a single biomarker
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '1.5rem', fontWeight: 600, fontSize: '1.2rem' }}>
                            Chronic stress can affect sleep, mood, blood pressure and health behaviours. Stress biology is complex; a single cortisol or wearable reading cannot determine resilience.
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
                                Build coping skills and recovery habits. Heart-rate variability (HRV) may help track personal trends, but values vary and higher is not always better.
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
                                <strong>Social connection:</strong> Relationships and practical support can help people manage stress
                            </li>
                            <li style={{ marginBottom: '1rem' }}>
                                <strong>Movement and outdoor time:</strong> Accessible approaches to supporting mood and wellbeing
                            </li>
                        </ul>
                    </div>
                </div>
            </section >

            {/* Pillar 5: Targeted Interventions */}
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
                            Promising science, careful judgment
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Some people benefit from treating diagnosed conditions or correcting deficiencies. Other interventions target ageing biology, but plausible mechanisms are not proof of longer life.
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
                                <strong>Areas of research — not a recommended supplement stack:</strong>
                            </p>
                            <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
                                <li><strong>Urolithin A:</strong> Investigated for mitochondrial-related effects; long-term clinical benefits remain uncertain</li>
                                <li><strong>Fisetin:</strong> Studied for possible senolytic activity, mainly preclinically; human anti-ageing benefit is unproven</li>
                                <li><strong>NAC:</strong> A glutathione precursor with established uses in specific medical settings, not proven for general longevity</li>
                                <li><strong>Glycine:</strong> Involved in collagen and glutathione synthesis; no proof that supplementation extends human lifespan</li>
                                <li><strong>NAD+ precursors:</strong> Influence NAD-related biology, without established improvements in human healthspan</li>
                                <li><strong>PQQ:</strong> Interesting preclinical research, with limited evidence for meaningful human outcomes</li>
                            </ul>
                        </div>

                        <div style={{
                            background: 'rgba(255, 152, 0, 0.1)',
                            borderLeft: '4px solid #ff9800',
                            padding: '1.5rem',
                            margin: '2rem 0',
                            borderRadius: '8px'
                        }}>
                            <h4 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1rem', color: '#ff9800' }}>Medicines and longevity research</h4>
                            <p style={{ marginBottom: '1rem' }}>Researchers are investigating how pathways involved in metabolism and cellular maintenance relate to ageing. Medicines used for established medical conditions are sometimes studied in this context, but findings cannot be assumed to apply to otherwise healthy people.</p>
                            <p style={{ marginTop: '1rem', fontStyle: 'italic', fontSize: '0.95rem' }}>Prescription treatment decisions belong in an individual consultation with a qualified clinician. This guide does not recommend medicines to extend lifespan or treat ageing.</p>
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
                    These pillars are a framework, not a race to optimise every biomarker. Begin with interventions that demonstrably help people; stay curious about emerging science without confusing possibility with proof.
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
