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
                        The Hierarchy of Health
                    </span>
                }
                subtitle="A practical, evidence-led approach to protecting healthspan — from daily foundations to emerging science."
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
                        Lasting health begins with the fundamentals. Emerging science can add intriguing possibilities, but it should never distract from what already works.
                    </p>
                    <a
                        href="#blueprint-signup"
                        
                        
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
                        EXPLORE THE BLUEPRINT
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
                        Stop Biohacking. Start Building.
                    </h2>
                    <p style={{
                        fontSize: '1.2rem',
                        lineHeight: 1.8,
                        color: '#555555',
                        fontWeight: 300
                    }}>
                        The most powerful changes are often the least glamorous: sleep, movement, nutrition and attention to established risk factors. New discoveries matter too — but only when we distinguish a compelling mechanism from a demonstrated human benefit.
                    </p>
                </div>
            </section>

            {/* Section 3: The 3 Phases */}
            <div style={{ backgroundColor: '#F9F9F9' }}>
                {/* Phase 1 */}
                <section style={{ padding: '6rem 2rem', borderBottom: '1px solid #E5E5E5' }}>
                    <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem' }}>
                                Phase 1
                            </span>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#000', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
                                THE FOUNDATION <br /> <span style={{ color: '#666', fontSize: '1.8rem', fontWeight: 400 }}>(The Non-Negotiables)</span>
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7 }}>
                                <strong style={{ color: '#000' }}>The Rule:</strong> Consistent routines can support sleep and energy. Start with realistic habits that fit your life.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7, marginTop: '1rem' }}>
                                <strong style={{ color: '#000' }}>The Approach:</strong>
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>1. Morning daylight:</strong> Getting outdoor light after waking can help reinforce circadian timing. There is no universal ten-minute prescription; timing and exposure depend on conditions.</li>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>2. Sleep:</strong> Most adults benefit from around 7–9 hours, with individual variation. Sleep supports memory, mood and metabolic health; brain-clearance research is promising but does not prove dementia prevention.</li>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>3. Regular movement:</strong> Aim towards at least 150 minutes of moderate aerobic activity weekly, alongside strength training when appropriate. A conversational pace is a useful starting point.</li>
                            </ul>
                            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#F1F1F1', borderLeft: '3px solid #000', fontSize: '0.9rem', color: '#555', fontStyle: 'italic' }}>
                                <strong>The Mechanism:</strong> Light-sensitive retinal pathways help synchronise the brain's circadian clock. Morning light can influence alertness and sleep timing, but the hormonal response is not a fixed 16-hour countdown.
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
                                THE FUEL <br /> <span style={{ color: '#666', fontSize: '1.8rem', fontWeight: 400 }}>(Metabolic Control)</span>
                            </h3>
                            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7 }}>
                                <strong style={{ color: '#000' }}>The Rule:</strong> Support metabolic health rather than trying to eliminate every normal rise in glucose.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: '#444', lineHeight: 1.7, marginTop: '1rem' }}>
                                <strong style={{ color: '#000' }}>The Approach:</strong>
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>1. Metabolic health:</strong> Prioritise dietary quality, physical activity and assessment of diabetes risk when appropriate. Glucose naturally rises after meals; not every rise is harmful.</li>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>2. Adequate protein:</strong> Support muscle maintenance with sufficient protein from a varied diet. Needs depend on body size, age, activity and medical conditions; a single high target is not suitable for everyone.</li>
                                <li style={{ marginBottom: '0.8rem', color: '#444' }}><strong>3. A sustainable eating rhythm:</strong> Some people find a consistent overnight eating break helpful. Time-restricted eating is optional, not proven to extend human lifespan, and may be unsuitable in some circumstances.</li>
                            </ul>
                            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#F1F1F1', borderLeft: '3px solid #000', fontSize: '0.9rem', color: '#555', fontStyle: 'italic' }}>
                                <strong>The Mechanism:</strong> Insulin resistance is associated with cardiometabolic disease and has been linked to cognitive decline in observational research. The idea of Alzheimer's disease as 'type 3 diabetes' is a research hypothesis, not an established diagnosis or proof that flattening glucose curves prevents dementia.
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
                                <strong style={{ color: '#000' }}>The Rule:</strong> Consider additional interventions only when there is a clear clinical reason or a realistic understanding of the evidence and uncertainty.
                            </p>
                            <div style={{ marginTop: '2rem' }}>
                                <div style={{ marginBottom: '1.5rem' }}>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#000' }}>Option A: Creatine Monohydrate</h4>
                                    <p style={{ fontSize: '1rem', color: '#555' }}>Creatine helps regenerate ATP through the phosphocreatine system. It has established benefits for some exercise outcomes; research into cognition is intriguing but does not yet show that routine supplementation prevents cognitive decline or neurodegeneration.</p>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#000' }}>Option B: Magnesium Bisglycinate</h4>
                                    <p style={{ fontSize: '1rem', color: '#555' }}>Magnesium is essential for normal neuromuscular function. Supplementation may be useful when intake is inadequate or deficiency is present, but magnesium bisglycinate has not been established as a reliable way to increase deep sleep or prevent neurodegeneration.</p>
                                </div>
                                <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: '#F1F1F1', borderLeft: '3px solid #000', fontSize: '0.9rem', color: '#555', fontStyle: 'italic' }}>
                                    <strong>The Mechanism:</strong> Phosphocreatine can donate phosphate to ADP to regenerate ATP. Magnesium participates in many cellular processes, including neuronal signalling. These mechanisms do not by themselves establish cognitive or longevity benefits from supplements.
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

            {/* Section: What a Sustainable Day Might Look Like */}
            <section style={{ padding: '6rem 2rem', backgroundColor: '#F9F9F9', borderTop: '1px solid #EDEDED' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#000', marginBottom: '3rem', textAlign: 'center', letterSpacing: '-0.02em' }}>
                        A Day In The Protocol
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {[
                            { time: 'MORNING', label: 'WAKE', detail: 'Get some daylight and hydrate according to your needs' },
                            { time: 'DAYTIME', label: 'MOVE', detail: 'Walk, cycle or choose another enjoyable activity' },
                            { time: 'DAYTIME', label: 'STRENGTH', detail: 'Include resistance exercise on suitable days' },
                            { time: 'MEALTIMES', label: 'FUEL', detail: 'Choose balanced meals with sufficient protein and fibre' },
                            { time: 'EVENING', label: 'WIND DOWN', detail: 'Keep a consistent routine where practical' },
                            { time: 'EVENING', label: 'RECOVER', detail: 'Make room for rest, connection and relaxation' },
                            { time: 'NIGHT', label: 'SLEEP', detail: 'Aim for a consistent, sufficient sleep opportunity' },
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
            <section id="blueprint-signup" style={{
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
                        Build the Foundations. Stay Curious.
                    </h2>
                    <p style={{
                        fontSize: '1.1rem',
                        color: '#555',
                        marginBottom: '3rem'
                    }}>
                        The science of longevity is evolving. Subscribe for clear, evidence-led explanations of what is established, what is promising, and what still needs testing.
                    </p>
                    <EmailCapture variant="inline" />
                </div>
            </section>


        </>
    );
};

export default EmpowerProtocol;
