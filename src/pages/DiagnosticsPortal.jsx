"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const DiagnosticsPortal = () => {
    return (
        <>
            <Helmet>
                {/* Primary Meta Tags */}
                <title>The Diagnostics Portal: Your Biological Audit | EMPOWERVIDA</title>
                <meta name="title" content="The Diagnostics Portal: Your Biological Audit" />
                <meta name="description" content="Standard blood work detects disease. Our protocol defines optimisation. The Empowervida 5: Fasting Insulin, ApoB, hsCRP, Homocysteine, GGT. Independent clinical guidance for exceptional healthspan." />
                <meta name="keywords" content="fasting insulin test, apolipoprotein b, hsCRP, homocysteine, GGT liver function, advanced blood work, longevity blood tests, metabolic health markers" />
                <meta name="author" content="Dr. Gavin McAuley" />
                <link rel="canonical" href="https://empowervida.com/diagnostics" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://empowervida.com/diagnostics" />
                <meta property="og:title" content="The Diagnostics Portal: Your Biological Audit | EMPOWERVIDA" />
                <meta property="og:description" content="The advanced blood markers standard medicine ignores. Independent clinical guidance for optimisation, not detection." />
                <meta property="og:site_name" content="EMPOWERVIDA" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://empowervida.com/diagnostics" />
                <meta property="twitter:title" content="The Diagnostics Portal: Your Biological Audit" />
                <meta property="twitter:description" content="Standard blood work detects disease. Our protocol defines optimisation." />

                {/* Schema.org Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MedicalWebPage",
                        "headline": "The Diagnostics Portal: Your Biological Audit",
                        "description": "Independent clinical guidance for advanced blood markers that define metabolic optimisation",
                        "author": {
                            "@type": "Person",
                            "@id": "https://empowervida.com/about#gavin",
                            "name": "Dr. Gavin McAuley",
                            "jobTitle": "Physician",
                            "description": "Former Emergency Medicine Physician, Longevity Architect"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "EMPOWERVIDA",
                            "url": "https://empowervida.com"
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://empowervida.com/diagnostics"
                        },
                        "specialty": "Longevity Medicine"
                    })}
                </script>
            </Helmet>

            <HeroSection
                backgroundImage="/diagnostics_hero.jpg"
                title="The Diagnostics Portal"
                subtitle="Closing the Loop on Your Biology"
                overlay="linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.75) 100%)"
                textColor="#FFFFFF"
                subtitleColor="#20B2AA"
                textShadow="0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)"
                subtitleShadow="0 3px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.7)"
                subtitleWeight="700"
            >
                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    color: '#FFFFFF',
                    marginBottom: '2rem',
                    textShadow: '0 2px 10px rgba(0,0,0,0.8)'
                }}>
                    Standard blood work is designed to detect disease. Our protocol is designed to define optimisation.
                </p>
            </HeroSection>

            {/* Section 1: The Hook */}
            <section style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '4rem 2rem',
                color: 'var(--color-text)'
            }}>
                <p style={{
                    fontSize: '1.3rem',
                    lineHeight: 1.8,
                    marginBottom: '2rem',
                    fontWeight: 300
                }}>
                    Your doctor orders a metabolic panel. Fasting glucose: 98 mg/dL. HbA1c: 5.6%. Cholesterol: "A bit high, but nothing to worry about."
                </p>

                <p style={{
                    fontSize: '1.3rem',
                    lineHeight: 1.8,
                    marginBottom: '2rem',
                    fontWeight: 300
                }}>
                    You are told you are <strong>normal</strong>.
                </p>

                <div style={{
                    background: 'rgba(220, 38, 38, 0.1)',
                    borderLeft: '4px solid #DC2626',
                    padding: '2rem',
                    margin: '3rem 0',
                    borderRadius: '8px'
                }}>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: 1.7,
                        margin: 0,
                        fontWeight: 600
                    }}>
                        Normal is the average of a metabolically sick population. If you want average health, get average tests. If you want exceptional healthspan, you need an architectural audit.
                    </p>
                </div>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    marginTop: '2rem'
                }}>
                    Standard reference ranges are calibrated to detect disease, not optimisation. A fasting insulin of 12 mIU/L is "normal," but it is double the level associated with metabolic health. An ApoB of 90 mg/dL is "acceptable," but it represents significant cardiovascular risk decades before symptoms appear.
                </p>

                <p style={{
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    marginTop: '1.5rem'
                }}>
                    This page provides the framework for obtaining the data standard medicine ignores, and the clinical context to interpret it through the lens of longevity, not pathology.
                </p>
            </section>

            {/* Section 2: How to Obtain Your Data */}
            <section style={{
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
                            How to Obtain Your Data
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            color: 'var(--color-accent-teal)',
                            fontWeight: 600
                        }}>
                            The Independent Advisory Model
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <div style={{
                            background: 'rgba(32, 178, 170, 0.1)',
                            borderLeft: '4px solid var(--color-accent-teal)',
                            padding: '2rem',
                            margin: '2rem 0',
                            borderRadius: '8px'
                        }}>
                            <p style={{
                                margin: 0,
                                fontWeight: 600,
                                color: 'var(--color-accent-teal)',
                                marginBottom: '1rem',
                                fontSize: '1.2rem'
                            }}>
                                Transparency Statement: We Do Not Sell Tests
                            </p>
                            <p style={{ margin: 0 }}>
                                Empowervida is an <strong>independent clinical advisory</strong>. We do not profit from, sell, or receive commissions from laboratory testing services. This ensures our recommendations remain unbiased and focused solely on your biological optimisation.
                            </p>
                            <p style={{ margin: '1rem 0 0 0' }}>
                                Our value is in the <strong>interpretation</strong>, not the transaction.
                            </p>
                        </div>

                        <p style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
                            You have two pathways to obtain <strong>The Empowervida 5</strong> markers:
                        </p>

                        <h3 style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            marginTop: '3rem',
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            Pathway One: Direct to Consumer Testing
                        </h3>

                        <p style={{ marginBottom: '1.5rem' }}>
                            We suggest using reputable third party laboratories that allow you to order advanced markers without requiring a physician referral. These services are available in most regions and provide clinical grade accuracy.
                        </p>

                        <div style={{
                            background: '#F8F9FA',
                            borderRadius: '12px',
                            padding: '2rem',
                            margin: '2rem 0'
                        }}>
                            <h4 style={{
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                color: 'var(--color-text)'
                            }}>
                                Suggested Third Party Providers
                            </h4>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div>
                                    <p style={{
                                        fontWeight: 700,
                                        marginBottom: '0.5rem',
                                        color: 'var(--color-accent-teal)'
                                    }}>
                                        🇬🇧 United Kingdom
                                    </p>
                                    <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
                                        <strong>Medichecks</strong> - Offers comprehensive metabolic panels including fasting insulin and ApoB
                                    </p>
                                    <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
                                        <strong>Randox Health</strong> - Advanced cardiovascular and metabolic markers
                                    </p>
                                </div>

                                <div>
                                    <p style={{
                                        fontWeight: 700,
                                        marginBottom: '0.5rem',
                                        color: 'var(--color-accent-teal)'
                                    }}>
                                        🇺🇸 United States
                                    </p>
                                    <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
                                        <strong>OwnYourLabs</strong> - Direct to consumer metabolic and lipid panels
                                    </p>
                                    <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
                                        <strong>Quest Diagnostics</strong> - National laboratory network with physician reviewed options
                                    </p>
                                </div>

                                <div>
                                    <p style={{
                                        fontWeight: 700,
                                        marginBottom: '0.5rem',
                                        color: 'var(--color-accent-teal)'
                                    }}>
                                        🇦🇺 Australia
                                    </p>
                                    <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
                                        <strong>i-screen</strong> - Preventative health screening with advanced metabolic markers
                                    </p>
                                    <p style={{ margin: '0.5rem 0', fontSize: '1rem' }}>
                                        <strong>Australian Clinical Labs</strong> - Comprehensive pathology services
                                    </p>
                                </div>
                            </div>

                            <p style={{
                                marginTop: '1.5rem',
                                fontSize: '0.95rem',
                                fontStyle: 'italic',
                                color: 'var(--color-text-muted)'
                            }}>
                                Note: These are trusted options, not commercial partners. Empowervida receives no financial benefit from these recommendations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The GP Letter Template */}
            <section style={{
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
                            Pathway Two: The Collaborative Approach
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            color: '#667eea',
                            fontWeight: 600
                        }}>
                            Working With Your Primary Care Physician
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.8
                    }}>
                        <p style={{ marginBottom: '2rem' }}>
                            Some patients prefer to request advanced markers through their existing GP or primary care physician. Below is a professional letter template written in consultant style. You may copy and adapt this to request The Empowervida 5 markers.
                        </p>

                        <div style={{
                            background: '#F8F9FA',
                            borderRadius: '12px',
                            padding: '2.5rem',
                            margin: '2rem 0',
                            border: '2px solid #667eea'
                        }}>
                            <h4 style={{
                                fontSize: '1.2rem',
                                fontWeight: 700,
                                marginBottom: '1.5rem',
                                color: '#667eea'
                            }}>
                                📋 Copy This Letter Template
                            </h4>

                            <div style={{
                                background: '#FFFFFF',
                                padding: '2rem',
                                borderRadius: '8px',
                                fontFamily: 'Georgia, serif',
                                fontSize: '1rem',
                                lineHeight: 1.7,
                                color: '#1F2937'
                            }}>
                                <p style={{ marginBottom: '1rem' }}>Dear Dr [Doctor's Name],</p>

                                <p style={{ marginBottom: '1rem' }}>
                                    I am writing to request a set of advanced metabolic and cardiovascular markers as part of my proactive approach to healthspan optimisation. I understand these tests may not be routinely ordered, and I am willing to pay privately if they are not covered under standard NHS/insurance provisions.
                                </p>

                                <p style={{ marginBottom: '1rem' }}>
                                    The markers I am requesting are as follows:
                                </p>

                                <ul style={{ marginBottom: '1rem', paddingLeft: '2rem' }}>
                                    <li><strong>Fasting Insulin</strong> (to assess insulin sensitivity independent of glucose)</li>
                                    <li><strong>Apolipoprotein B (ApoB)</strong> (for accurate atherogenic particle count)</li>
                                    <li><strong>High Sensitivity C Reactive Protein (hsCRP)</strong> (to measure systemic inflammation)</li>
                                    <li><strong>Homocysteine</strong> (to assess methylation and cardiovascular risk)</li>
                                    <li><strong>Gamma Glutamyl Transferase (GGT)</strong> (to evaluate oxidative stress and liver function)</li>
                                </ul>

                                <p style={{ marginBottom: '1rem' }}>
                                    These tests align with emerging research in preventative cardiology and metabolic health, and are increasingly recognised as valuable markers for early intervention before standard risk factors become abnormal.
                                </p>

                                <p style={{ marginBottom: '1rem' }}>
                                    I would be grateful if you could arrange these tests at your earliest convenience. I am happy to discuss the rationale further if needed.
                                </p>

                                <p style={{ marginBottom: '0.5rem' }}>Kind regards,</p>
                                <p>[Your Name]</p>
                            </div>

                            <p style={{
                                marginTop: '1.5rem',
                                fontSize: '0.95rem',
                                fontStyle: 'italic',
                                color: 'var(--color-text-muted)'
                            }}>
                                Tip: Emphasise your willingness to pay privately. This removes the "cost to NHS" barrier and positions you as proactive rather than demanding.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4: The Decoder Table */}
            <section style={{
                padding: '6rem 2rem',
                background: '#FFFFFF'
            }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            The Empowervida Decoder
                        </h2>
                        <p style={{
                            fontSize: '1.3rem',
                            color: 'var(--color-accent-teal)',
                            fontWeight: 600
                        }}>
                            Interpreting Your Biological Audit
                        </p>
                    </div>

                    <div style={{
                        maxWidth: '1100px',
                        margin: '0 auto'
                    }}>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: 1.8,
                            marginBottom: '2rem',
                            textAlign: 'center'
                        }}>
                            The table below compares standard reference ranges with longevity optimised targets. This is where "normal" diverges from "optimal."
                        </p>

                        <div style={{
                            overflowX: 'auto',
                            margin: '2rem 0'
                        }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                background: '#F8F9FA',
                                borderRadius: '12px',
                                overflow: 'hidden'
                            }}>
                                <thead>
                                    <tr style={{ background: 'var(--color-accent-teal)', color: '#FFFFFF' }}>
                                        <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>Marker</th>
                                        <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>Standard "Normal"</th>
                                        <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>Empowervida Optimal</th>
                                        <th style={{ padding: '1.5rem', textAlign: 'left', fontWeight: 700 }}>The Clinical Why</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--color-accent-teal)' }}>Fasting Insulin</td>
                                        <td style={{ padding: '1.5rem' }}>&lt; 25 mIU/L</td>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: '#10B981' }}>&lt; 5 mIU/L</td>
                                        <td style={{ padding: '1.5rem', fontSize: '0.95rem' }}>Insulin rises years before glucose. Levels above 5 indicate early insulin resistance and compete with IDE enzyme degradation of amyloid beta (Alzheimer's risk).</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB', background: '#FFFFFF' }}>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--color-accent-teal)' }}>ApoB</td>
                                        <td style={{ padding: '1.5rem' }}>&lt; 100 mg/dL</td>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: '#10B981' }}>&lt; 60 mg/dL</td>
                                        <td style={{ padding: '1.5rem', fontSize: '0.95rem' }}>ApoB counts atherogenic particles directly. LDL cholesterol is an estimate. Every ApoB particle can penetrate arterial walls. Lower is always better.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--color-accent-teal)' }}>hsCRP</td>
                                        <td style={{ padding: '1.5rem' }}>&lt; 3.0 mg/L</td>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: '#10B981' }}>&lt; 0.5 mg/L</td>
                                        <td style={{ padding: '1.5rem', fontSize: '0.95rem' }}>Chronic low grade inflammation (&gt;1.0 mg/L) drives cardiovascular disease, neurodegeneration, and metabolic dysfunction. Target &lt;0.5 to extinguish the systemic fire.</td>
                                    </tr>
                                    <tr style={{ borderBottom: '1px solid #E5E7EB', background: '#FFFFFF' }}>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--color-accent-teal)' }}>Homocysteine</td>
                                        <td style={{ padding: '1.5rem' }}>&lt; 15 µmol/L</td>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: '#10B981' }}>&lt; 7 µmol/L</td>
                                        <td style={{ padding: '1.5rem', fontSize: '0.95rem' }}>Elevated homocysteine indicates impaired methylation (B vitamin deficiency) and is an independent cardiovascular risk factor. Optimal levels support DNA repair and neurotransmitter synthesis.</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: 'var(--color-accent-teal)' }}>GGT</td>
                                        <td style={{ padding: '1.5rem' }}>&lt; 60 U/L</td>
                                        <td style={{ padding: '1.5rem', fontWeight: 700, color: '#10B981' }}>&lt; 20 U/L</td>
                                        <td style={{ padding: '1.5rem', fontSize: '0.95rem' }}>GGT reflects oxidative stress and liver function. Levels above 20 U/L predict cardiovascular events independent of traditional risk factors. Target &lt;20 for metabolic clarity.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div style={{
                            background: 'rgba(255, 152, 0, 0.1)',
                            borderLeft: '4px solid #FF9800',
                            padding: '1.5rem',
                            margin: '3rem 0',
                            borderRadius: '8px'
                        }}>
                            <p style={{
                                margin: 0,
                                fontWeight: 700,
                                color: '#FF9800',
                                fontSize: '1.1rem',
                                marginBottom: '0.5rem'
                            }}>
                                The Diagnostic Gap
                            </p>
                            <p style={{ margin: 0, fontSize: '1rem', lineHeight: 1.6 }}>
                                Notice the variance between "normal" and "optimal." A fasting insulin of 12 mIU/L will be reported as "within range" by your GP. But it is 140% higher than the target associated with metabolic health. This is the diagnostic gap that standard medicine ignores.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5: The Bridge to Solutions */}
            <section style={{
                background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.05) 0%, rgba(0, 0, 0, 0) 100%)',
                padding: '6rem 2rem'
            }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 700,
                        marginBottom: '2rem',
                        color: 'var(--color-text)'
                    }}>
                        Data Without Action is Noise
                    </h2>

                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: 1.8,
                        marginBottom: '2rem'
                    }}>
                        Identifying a suboptimal marker is only the first step. If your biological audit reveals metabolic friction (elevated insulin), oxidative stress (elevated GGT), or systemic inflammation (elevated hsCRP), the solution involves two parallel pathways:
                    </p>

                    <div style={{
                        background: '#F8F9FA',
                        borderRadius: '12px',
                        padding: '2rem',
                        margin: '2rem 0',
                        textAlign: 'left'
                    }}>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            The Foundation (Non Negotiable)
                        </h3>
                        <ul style={{ paddingLeft: '2rem', fontSize: '1rem', lineHeight: 1.8 }}>
                            <li style={{ marginBottom: '0.75rem' }}><strong>Dietary intervention:</strong> Eliminate refined carbohydrates to lower insulin</li>
                            <li style={{ marginBottom: '0.75rem' }}><strong>Exercise physiology:</strong> Zone 2 cardio to build mitochondrial capacity</li>
                            <li style={{ marginBottom: '0.75rem' }}><strong>Sleep architecture:</strong> 7-9 hours to reduce systemic inflammation</li>
                        </ul>
                    </div>

                    <div style={{
                        background: '#F8F9FA',
                        borderRadius: '12px',
                        padding: '2rem',
                        margin: '2rem 0',
                        textAlign: 'left'
                    }}>
                        <h3 style={{
                            fontSize: '1.3rem',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--color-text)'
                        }}>
                            The Multiplier (After Foundation is Built)
                        </h3>
                        <p style={{ marginBottom: '1rem' }}>
                            Targeted nutrient protocols to accelerate correction of specific markers:
                        </p>
                        <ul style={{ paddingLeft: '2rem', fontSize: '1rem', lineHeight: 1.8 }}>
                            <li style={{ marginBottom: '0.75rem' }}>GlyNAC (Glycine + NAC) to restore glutathione and lower oxidative stress</li>
                            <li style={{ marginBottom: '0.75rem' }}>Methylated B vitamins to lower homocysteine</li>
                            <li style={{ marginBottom: '0.75rem' }}>Berberine or Metformin (where clinically appropriate) to improve insulin sensitivity</li>
                        </ul>
                    </div>

                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        marginBottom: '3rem',
                        fontStyle: 'italic'
                    }}>
                        The Empowervida approach is systematic: measure, intervene, remeasure. Biological optimisation is not guesswork. It is architecture.
                    </p>

                    <Link href="/shop" style={{
                        display: 'inline-block',
                        background: 'var(--color-accent-teal)',
                        color: '#FFFFFF',
                        padding: '1.25rem 2.5rem',
                        borderRadius: '8px',
                        textDecoration: 'none',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        fontSize: '1.1rem',
                        boxShadow: '0 4px 15px rgba(32, 178, 170, 0.3)',
                        transition: 'all 0.3s ease'
                    }}>
                        View Nutrient Protocols →
                    </Link>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default DiagnosticsPortal;
