import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';

const EnvironmentalDefense = () => {
    const layers = [
        {
            id: 'hydration',
            title: 'LAYER 1: HYDRATION DEFENSE',
            subtitle: 'The Water Filter',
            problem: 'Tap water is a chemical cocktail of chlorine, fluoride, heavy metals, and pharmaceutical residue. Bottled water is a source of obesogenic microplastics.',
            solution: 'A Reverse Osmosis (RO) system with remineralization. It is the only way to guarantee zero-contaminant hydration.',
            buttonText: 'VIEW RECOMMENDED FILTER >',
            link: '#'
        },
        {
            id: 'air',
            title: 'LAYER 2: AIR QUALITY',
            subtitle: 'The HEPA Shield',
            problem: 'Indoor air is often 5x more polluted than outdoor air. Dust, mold spores, VOCs from furniture, and PM2.5 particles bypass your lungs\' defenses and enter your bloodstream, driving systemic inflammation.',
            solution: 'A Medical-Grade H13 HEPA Air Purifier running 24/7 in your bedroom. This is non-negotiable for sleep quality.',
            buttonText: 'VIEW RECOMMENDED PURIFIER >',
            link: '#'
        },
        {
            id: 'light',
            title: 'LAYER 3: LIGHT MANAGEMENT',
            subtitle: 'The Circadian Armor',
            problem: 'Junk light is junk food for your eyes. Artificial blue light after dark suppresses melatonin, destroys sleep architecture, and disrupts mitochondrial function.',
            solution: 'High-quality Blue Light Blocking glasses for evening use (sunset to sleep).',
            buttonText: 'VIEW OPTICAL GEAR >',
            link: '#'
        }
    ];

    return (
        <div style={{
            backgroundColor: '#000000',
            color: '#FFFFFF',
            minHeight: '100vh',
            fontFamily: '"Inter", sans-serif'
        }}>
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '6rem 2rem',
                overflow: 'hidden'
            }}>
                {/* Background Image */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/environmental_defense_header.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.4,
                    zIndex: 0
                }}></div>

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, #000000 100%)',
                    zIndex: 1
                }}></div>

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '1000px', width: '100%' }}>
                    <Reveal width="100%">
                        <h1 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: 800,
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            textTransform: 'uppercase',
                            textAlign: 'center'
                        }}>
                            GEAR: <span style={{ color: '#FF5F00' }}>Environmental Defense Protocol</span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: 400,
                            color: '#FFFFFF',
                            marginBottom: '2rem',
                            fontFamily: 'monospace',
                            textAlign: 'center'
                        }}>
                            You Cannot Supplement Your Way Out of a Toxic Environment.
                        </h2>
                    </Reveal>

                    <Reveal width="100%" delay={0.4}>
                        <p style={{
                            fontSize: '1.25rem',
                            color: '#AAAAAA',
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                            textAlign: 'center'
                        }}>
                            You can take all the CoQ10 in the world, but if you are drinking microplastics and breathing PM2.5 particles, your inflammation will never drop. Supplements build the engine; Gear protects the chassis. This is the hardware required to shield your biology.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Physician's Veto Block */}
            <section style={{ padding: '2rem 2rem', maxWidth: '1000px', margin: '0 auto 4rem' }}>
                <div style={{
                    backgroundColor: '#1A1A1A',
                    borderLeft: '6px solid #FF5F00',
                    padding: '2rem',
                    borderRadius: '0 4px 4px 0'
                }}>
                    <h3 style={{
                        color: '#FFFFFF',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        letterSpacing: '0.05em'
                    }}>
                        The Selection Protocol
                    </h3>
                    <p style={{
                        color: '#E0E0E0',
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        marginBottom: '1rem'
                    }}>
                        The wellness market is flooded with ineffective, mass-produced hardware. I have spent years filtering through manufacturers to find the 'Clinical Grade' minority. The products below are hand-picked for durability, filtration efficacy, and biological impact. These are premium tools for a premium outcome.
                    </p>
                    <p style={{
                        color: '#FF5F00',
                        fontWeight: 700,
                        margin: 0,
                        textAlign: 'right'
                    }}>
                        - Dr. Gavin
                    </p>
                </div>
            </section>

            {/* Main Content - The 3 Layers */}
            <section style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gap: '4rem' }}>
                    {layers.map((layer, index) => (
                        <Reveal key={layer.id} width="100%" delay={index * 0.1}>
                            <div style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                padding: '3rem',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '3rem',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <h3 style={{
                                        fontSize: '0.9rem',
                                        color: '#FF5F00',
                                        letterSpacing: '0.1em',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase'
                                    }}>
                                        {layer.title}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                                        {/* Verification Seal */}
                                        <img
                                            src="/physician_verified_seal.jpg"
                                            alt="Physician Verified Seal"
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                borderRadius: '50%',
                                                objectFit: 'cover',
                                                flexShrink: 0,
                                                border: '2px solid #333'
                                            }}
                                        />
                                        <h2 style={{
                                            fontSize: '2.5rem',
                                            fontWeight: 700,
                                            color: '#FFFFFF',
                                            margin: 0,
                                            textTransform: 'uppercase',
                                            lineHeight: 1.1
                                        }}>
                                            {layer.subtitle}
                                        </h2>
                                    </div>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <h4 style={{ color: '#888888', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>The Problem:</h4>
                                        <p style={{ fontSize: '1.1rem', color: '#CCCCCC', lineHeight: 1.6 }}>
                                            {layer.problem}
                                        </p>
                                    </div>

                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h4 style={{ color: '#888888', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>The Solution:</h4>
                                        <p style={{ fontSize: '1.1rem', color: '#FFFFFF', lineHeight: 1.6, borderLeft: '3px solid #FF5F00', paddingLeft: '1rem' }}>
                                            {layer.solution}
                                        </p>
                                    </div>

                                    <a href={layer.link} className="btn-primary" style={{
                                        display: 'inline-block',
                                        textDecoration: 'none',
                                        textAlign: 'center'
                                    }}>
                                        {layer.buttonText}
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* Footer / Disclaimer */}
            <section style={{
                padding: '4rem 2rem',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                background: '#050505',
                marginTop: '4rem'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{
                        fontSize: '0.85rem',
                        color: '#666666',
                        fontStyle: 'italic',
                        margin: 0,
                        lineHeight: 1.6
                    }}>
                        Medical Disclaimer: The products recommended here are based on engineering standards for filtration and light blocking. However, this is not medical advice. Consult with a healthcare professional before making significant changes to your environment or lifestyle.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default EnvironmentalDefense;
