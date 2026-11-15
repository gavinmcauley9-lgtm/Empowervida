"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';

const EnvironmentalDefense = () => {
    const layers = [
        {
            id: 'hydration',
            title: 'LAYER 1: HYDRATION DEFENSE',
            subtitle: 'The Water Filter',
            problem: 'Tap water may contain chlorine, fluoride, heavy metals, and pharmaceutical residue. Bottled water can be a source of microplastics, which are an area of growing research concern.',
            solution: 'A Reverse Osmosis (RO) system with remineralization. RO can reduce many dissolved contaminants, but no filter guarantees contaminant-free water. Select and maintain a certified system based on local water quality.',
            buttonText: 'VIEW RECOMMENDED FILTER >',
            link: '#'
        },
        {
            id: 'air',
            title: 'LAYER 2: AIR QUALITY',
            subtitle: 'The HEPA Shield',
            problem: 'Indoor air can contain particles, allergens and volatile compounds. Exposure varies by building, ventilation and outdoor conditions.',
            solution: 'A correctly sized HEPA air cleaner may reduce airborne particles. Ventilation and controlling pollution sources are also important.',
            buttonText: 'VIEW RECOMMENDED PURIFIER >',
            link: '#'
        },
        {
            id: 'light',
            title: 'LAYER 3: LIGHT MANAGEMENT',
            subtitle: 'The Circadian Armor',
            problem: 'Artificial blue light after dark may suppress melatonin production, potentially disrupting sleep architecture and affecting mitochondrial function.',
            solution: 'Reduce bright light before bed and keep a consistent sleep schedule. Evidence for blue-light-blocking glasses is mixed.',
            buttonText: 'VIEW OPTICAL LIFESTYLE >',
            link: '#'
        }
    ];

    return (
        <div style={{
            backgroundColor: 'var(--color-bg)',
            color: 'var(--color-text)',
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
                    backgroundImage: 'url(/hero_dna_botanical.png)',
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
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, #FFFFFF 100%)',
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
                            textAlign: 'center',
                            color: 'var(--color-text)'
                        }}>
                            LIFESTYLE: <span style={{ color: 'var(--color-accent-teal)' }}>Environmental Defense Protocol</span>
                        </h1>
                    </Reveal>

                    <Reveal width="100%" delay={0.2}>
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: 400,
                            color: 'var(--color-text-muted)',
                            marginBottom: '2rem',
                            fontFamily: '"Manrope", sans-serif',
                            textAlign: 'center'
                        }}>
                            You Cannot Supplement Your Way Out of a Toxic Environment.
                        </h2>
                    </Reveal>

                    <Reveal width="100%" delay={0.4}>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--color-text-muted)',
                            maxWidth: '800px',
                            margin: '0 auto',
                            lineHeight: 1.6,
                            textAlign: 'center'
                        }}>
                            Air quality, drinking water and light exposure deserve attention alongside sleep, nutrition and exercise. The most useful changes depend on your environment.
                        </p>
                    </Reveal>
                </div>
            </section>

            {/* Physician's Veto Block */}
            <section style={{ padding: '2rem 2rem', maxWidth: '1000px', margin: '0 auto 4rem' }}>
                <div style={{
                    backgroundColor: 'var(--color-bg-alt)',
                    borderLeft: '6px solid var(--color-accent-orange)',
                    padding: '2rem',
                    borderRadius: '0 4px 4px 0',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}>
                    <h3 style={{
                        color: 'var(--color-text)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                        letterSpacing: '0.05em'
                    }}>
                        The Selection Protocol
                    </h3>
                    <p style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        marginBottom: '1rem'
                    }}>
                        The wellness market is flooded with ineffective, mass-produced hardware. The options below are general educational information, not product endorsements or purchasing recommendations.
                    </p>
                    <p style={{
                        color: 'var(--color-accent-orange)',
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
                                background: 'var(--color-bg)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '16px',
                                padding: 'clamp(1.1rem, 4vw, 3rem)',
                                minWidth: 0,
                                width: '100%',
                                boxSizing: 'border-box',
                                display: 'grid',
                                gridTemplateColumns: 'minmax(0, 1fr)',
                                gap: '1.25rem',
                                alignItems: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)';
                                    e.currentTarget.style.boxShadow = '0 12px 30px rgba(32, 178, 170, 0.15)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                }}
                            >
                                <div style={{ minWidth: 0, overflowWrap: 'anywhere' }}>
                                    <h3 style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-accent-orange)',
                                        letterSpacing: '0.1em',
                                        marginBottom: '0.5rem',
                                        textTransform: 'uppercase'
                                    }}>
                                        {layer.title}
                                    </h3>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
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
                                                border: '2px solid var(--color-border)'
                                            }}
                                        />
                                        <h2 style={{
                                            fontSize: 'clamp(1.5rem, 5.5vw, 2.5rem)',
                                            fontWeight: 700,
                                            color: 'var(--color-text)',
                                            margin: 0,
                                            textTransform: 'uppercase',
                                            lineHeight: 1.1
                                        }}>
                                            {layer.subtitle}
                                        </h2>
                                    </div>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <h4 style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>The Problem:</h4>
                                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                                            {layer.problem}
                                        </p>
                                    </div>

                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h4 style={{ color: 'var(--color-text-muted)', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>The Solution:</h4>
                                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', lineHeight: 1.6, borderLeft: '3px solid var(--color-accent-orange)', paddingLeft: '1rem' }}>
                                            {layer.solution}
                                        </p>
                                    </div>
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
                borderTop: '1px solid var(--color-border)',
                background: 'var(--color-bg)',
                marginTop: '4rem'
            }}>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-text-muted)',
                        fontStyle: 'italic',
                        margin: 0,
                        lineHeight: 1.6
                    }}>
                        Medical Disclaimer: This guide provides general educational information, not personalised medical advice or product endorsements.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default EnvironmentalDefense;
