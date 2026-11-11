"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import EmailCapture from '../components/EmailCapture';

const EmpowerProtocol = () => {
    return (
        <>

            {/* Section 1: The Hero */}
            <HeroSection
                backgroundImage="/dna_bg_user.jpg"
                overlay="linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, #FFFFFF 100%)"
                title={
                    <span style={{ color: '#000000', letterSpacing: '-0.03em' }}>
                        The EmpowerVida Protocol
                    </span>
                }
                subtitle="A practical framework for living better, for longer."
                textColor="#000000"
                subtitleColor="#555555"
                height="90vh"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    style={{ maxWidth: '600px', margin: '0 auto' }}
                >
                    <p style={{
                        fontSize: '1.25rem',
                        lineHeight: 1.6,
                        color: '#333333',
                        marginBottom: '2.5rem',
                        fontWeight: 400
                    }}>
                        Better health begins with the essentials: sleep, movement, nutrition and metabolic wellbeing. From there, we can explore the emerging science of longevity — with curiosity, optimism and a clear eye on the evidence.
                    </p>
                    <a
                        href="#foundation"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2.5rem',
                            backgroundColor: '#000000',
                            color: '#FFFFFF',
                            textDecoration: 'none',
                            fontWeight: 600,
                            borderRadius: '4px', // Minimalist
                            fontSize: '0.9rem',
                            letterSpacing: '0.05em',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#333333';
                            e.target.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#000000';
                            e.target.style.transform = 'translateY(0)';
                        }}
                    >
                        EXPLORE THE FRAMEWORK
                    </a>
                </motion.div>
            </HeroSection>

            {/* Section 2: The Philosophy */}
            <section style={{
                padding: '8rem 2rem',
                backgroundColor: '#FFFFFF',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 800,
                        color: '#000000',
                        marginBottom: '2rem',
                        letterSpacing: '-0.03em',
                        lineHeight: 1.1
                    }}>
                        Build the Foundations. Explore What’s Possible.
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: 1.8,
                        color: '#555555',
                        fontWeight: 300
                    }}>
                        It's tempting to start with the newest supplement or longevity breakthrough. But the strongest opportunities to improve health often begin with everyday habits. I created this framework to help make sense of what matters most, what looks promising, and where the science is still developing. Think of it as a guide to explore, not a prescription to follow.
                    </p>
                </div>
            </section>

            {/* Section 3: The 3 Phases */}
            <div style={{ backgroundColor: '#F9F9F9' }}>
                {/* Phase 1 */}
                <section id="foundation" style={{ padding: '6rem 2rem', borderBottom: '1px solid #E5E5E5' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem' }}>
                                Phase 1
                            </span>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#000', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                THE FOUNDATION <br /> <span style={{ color: '#666', fontSize: '1.8rem', fontWeight: 400 }}>(Where Better Health Begins)</span>
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7 }}>
                                <strong style={{ color: '#000' }}>The idea:</strong> Give your body a reliable rhythm. Consistent sleep, regular movement and daylight are powerful places to start.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7, marginTop: '1rem' }}>
                                <strong style={{ color: '#000' }}>Three practical starting points:</strong>
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>1. Morning daylight:</strong> Spend some time outdoors after waking, when practical. Daylight helps synchronise your body clock; there is no universal ten-minute rule, and you should never look directly at the sun.</li>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>2. Protect your sleep:</strong> Most adults benefit from around 7–9 hours a night. Sleep supports memory, mood and physical recovery. Researchers are also investigating how sleep influences the brain’s waste-clearance systems, although the implications for preventing dementia remain uncertain.</li>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>3. Move regularly:</strong> Aim towards at least 150 minutes of moderate-intensity activity each week, building up gradually. Brisk walking, cycling and swimming all count. Aerobic training can improve cardiovascular fitness and support metabolic and mitochondrial adaptations.</li>
                            </ul>
                            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#F1F1F1', borderLeft: '3px solid #000', fontSize: '0.9rem', color: '#555', fontStyle: 'italic' }}>
                                <strong>Why daylight matters:</strong> Light-sensitive cells in the retina send signals to the suprachiasmatic nucleus, the brain’s central circadian clock. This helps coordinate daily rhythms, including melatonin timing and the normal pattern of cortisol release. The response varies with light exposure, timing and individual biology.
                            </div>
                        </div>
                        {/* Visual for Phase 1 */}
                        <img
                            src="/protocol_cortisol_curve.png"
                            alt="Cortisol vs Melatonin Curve"
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '350px',
                                objectFit: 'contain',
                                mixBlendMode: 'multiply'
                            }}
                        />
                    </div>
                </section>

                {/* Phase 2 */}
                <section style={{ padding: '6rem 2rem', borderBottom: '1px solid #E5E5E5', backgroundColor: '#FFFFFF' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        {/* Visual for Phase 2 */}
                        <div style={{
                            order: 2, // Default order
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <img
                                src="/protocol_glucose_curve.png"
                                alt="Glucose Curve Graph"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '350px',
                                    objectFit: 'contain',
                                    mixBlendMode: 'multiply'
                                }}
                            />
                        </div>
                        <div style={{ order: 1 }}>
                            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem' }}>
                                Phase 2
                            </span>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#000', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                METABOLIC HEALTH <br /> <span style={{ color: '#666', fontSize: '1.8rem', fontWeight: 400 }}>(Fuel for the Long Term)</span>
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7 }}>
                                <strong style={{ color: '#000' }}>The idea:</strong> Supporting metabolic health is about more than chasing a perfectly flat glucose curve. Nutrition, movement and sleep all contribute to how the body uses and regulates energy.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7, marginTop: '1rem' }}>
                                <strong style={{ color: '#000' }}>Three practical areas to explore:</strong>
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>1. Glucose regulation:</strong> Build meals around fibre-rich foods, sufficient protein and minimally processed ingredients, and stay active. Blood glucose normally rises after eating; an occasional rise is not, by itself, evidence of metabolic disease.</li>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>2. Adequate protein:</strong> Protein supports muscle maintenance, recovery and healthy ageing. Requirements vary with age, activity, body size and medical circumstances; a single high target is not appropriate for everyone.</li>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>3. Meal timing:</strong> A consistent overnight break from eating may be a practical option for some people. Research into time-restricted eating is promising for certain metabolic outcomes, but it has not been shown to prevent dementia or extend human lifespan. Fasting is not suitable for everyone, particularly people at risk of hypoglycaemia.</li>
                            </ul>
                            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#F1F1F1', borderLeft: '3px solid #000', fontSize: '0.9rem', color: '#555', fontStyle: 'italic' }}>
                                <strong>The emerging science:</strong> Researchers are investigating how insulin signalling, insulin resistance and broader metabolic dysfunction may influence brain ageing and Alzheimer’s disease. The phrase “type 3 diabetes” is sometimes used to describe this hypothesis, but Alzheimer’s is not clinically classified as a form of diabetes. Improving metabolic health is worthwhile; whether particular glucose or fasting strategies prevent Alzheimer’s remains unproven.
                            </div>
                        </div>
                    </div>
                </section>

                {/* Phase 3 */}
                <section style={{ padding: '6rem 2rem' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem' }}>
                                Phase 3
                            </span>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#000', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                THE OPTIMIZATION <br /> <span style={{ color: '#666', fontSize: '1.8rem', fontWeight: 400 }}>(The Gap Fillers)</span>
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7 }}>
                                <strong style={{ color: '#000' }}>The Rule:</strong> Modern life and soil depletion create an "Energy Gap" that food alone cannot fix.
                            </p>
                            <div style={{ marginTop: '2rem' }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#000' }}>Option A: Creatine Monohydrate</h4>
                                    <p style={{ fontSize: '1rem', color: '#555' }}>Not just for gym rats. It recycles ATP in the brain, providing cognitive backup power during high-demand tasks.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#000' }}>Option B: Magnesium Bisglycinate</h4>
                                    <p style={{ fontSize: '1rem', color: '#555' }}>The nervous system's "off switch." Essential for cortisol regulation and achieving deep, restorative sleep.</p>
                                </div>
                                <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#F1F1F1', borderLeft: '3px solid #000', fontSize: '0.9rem', color: '#555', fontStyle: 'italic' }}>
                                    <strong>The Mechanism:</strong> Creatine acts as a phosphate donor, turning used energy (ADP) back into usable energy (ATP) for neurons. Magnesium regulates NMDA receptors to dampen excitotoxicity.
                                </div>
                            </div>
                        </div>
                        {/* Visual for Phase 3 */}
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src="/protocol_creatine.png"
                                alt="Creatine Molecule"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxHeight: '350px',
                                    objectFit: 'contain',
                                    mixBlendMode: 'multiply'
                                }}
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Section 4: The Soft Sell */}
            <section style={{
                padding: '8rem 2rem',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 700,
                        color: '#FFFFFF',
                        marginBottom: '1.5rem',
                        letterSpacing: '-0.03em'
                    }}>
                        Why We Only Sell "Level 3."
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        color: 'rgba(255,255,255,0.8)',
                        marginBottom: '3rem'
                    }}>
                        We don't sell sunlight or sleep because they must be earned. They are free, but they require discipline. But for "Optimization" (Phase 3), purity is critical. EMPOWERVIDA was created to provide clinical-grade, third-party tested tools for those seeking evidence-based options.
                    </p>
                    
                </div>
            </section>

            {/* Section: A Day In The Protocol */}
            <section style={{ padding: '6rem 2rem', backgroundColor: '#F9F9F9', borderTop: '1px solid #EDEDED' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#000', marginBottom: '3rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
                        A Day In The Protocol
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { time: '07:00', label: 'WAKE', detail: 'Sunlight + 500ml Water + Sea Salt' },
                            { time: '07:30', label: 'MOVE', detail: 'Zone 2 Walk (Fasted)' },
                            { time: '08:00', label: 'OPTIMISE', detail: 'Coffee + Creatine (as per individual needs)' },
                            { time: '13:00', label: 'FUEL', detail: 'First Meal (High Protein, Low Glycemic)' },
                            { time: '18:00', label: 'CLOSE', detail: 'Last food intake (Start Fast)' },
                            { time: '21:00', label: 'SHIELD', detail: 'Magnesium Bisglycinate (as per individual needs)' },
                            { time: '22:30', label: 'REST', detail: 'Sleep (Cool Room)' },
                        ].map((item, index) => (
                            <div key={index} style={{ borderLeft: '2px solid #000', paddingLeft: '1rem' }}>
                                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#999' }}>{item.time} | {item.label}</div>
                                <div style={{ fontSize: '1rem', color: '#000', marginTop: '0.3rem' }}>{item.detail}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: The Lead Magnet */}
            <section style={{
                padding: '6rem 2rem',
                backgroundColor: '#F5F5F7', // Apple light grey
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        color: '#000',
                        marginBottom: '1rem'
                    }}>
                        Execute The Protocol.
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#555',
                        marginBottom: '3rem'
                    }}>
                        "Knowing the science is easy. Doing it daily is hard." <br />
                        Subscribe to get the <strong>30-Day Brain Battery Blueprint</strong>, including a Printable Tracker and Shopping List.
                    </p>
                    <EmailCapture variant="inline" />
                </div>
            </section>


        </>
    );
};

export default EmpowerProtocol;
