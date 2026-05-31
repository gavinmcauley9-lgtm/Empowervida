"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const EngineRoom = () => {
    const cards = [
        {
            title: "Acetyl-L-Carnitine",
            subtitle: "The Fuel Injector",
            mechanism: "The shuttle that transports fatty acids into the mitochondria to be burned.",
            nuance: "We use the Acetyl form because it crosses the blood-brain barrier to support cognitive energy.",
            link: "https://amzn.to/3XTdwbX" // Assuming generic search or reusing a link if known, using placeholder or Protocol link for now. User said "View Source", I'll use a generic # or the protocol link if I can find it. I'll use the Creatine link as a placeholder or just # for now since I don't have all specific links for these exact new items except what's in Protocol. Actually, I'll use the Protocol links where they match (Creatine, CoQ10, Magnesium). For others, I'll use a placeholder.
        },
        {
            title: "CoQ10 Ubiquinol",
            subtitle: "The Engine Oil",
            mechanism: "A critical component of the Electron Transport Chain. Without it, the assembly line stops.",
            nuance: "Must be Ubiquinol (active form), not Ubiquinone. Statin drugs deplete this rapidly.",
            link: "https://amzn.to/44kS03A" // Matches Protocol
        },
        {
            title: "Magnesium Malate/Glycinate",
            subtitle: "The Stabilizer",
            mechanism: "ATP must bind to a magnesium ion to be biologically active (Mg-ATP).",
            nuance: "Malate is preferred for energy (Krebs cycle); Glycinate is preferred for sleep.",
            link: "https://amzn.to/3M5OSCl" // Matches Protocol
        },
        {
            title: "Creatine Monohydrate",
            subtitle: "The Buffer",
            mechanism: "Recycles used energy (ADP) back into usable energy (ATP) rapidly.",
            nuance: "Not just for muscles. It is the primary energy buffer for the brain during high-demand tasks.",
            link: "https://amzn.to/3XTdwbX" // Matches Protocol
        },
        {
            title: "NAC",
            subtitle: "The Exhaust System",
            mechanism: "Mitochondria produce toxic exhaust (free radicals). NAC builds Glutathione to scrub this waste.",
            nuance: "Supports protection of the machinery from oxidative stress during energy production.",
            link: "#" // Placeholder
        },
        {
            title: "Urolithin A",
            subtitle: "The Recycler",
            mechanism: "Triggers Mitophagy: the process of identifying old, broken engines and recycling them.",
            nuance: "Hard to get from diet (pomegranates) in clinical doses. Supplementation is key for longevity.",
            link: "#" // Placeholder
        }
    ];

    const bVitamins = [
        { name: "B1 (Thiamine)", role: "The Spark" },
        { name: "B2 (Riboflavin)", role: "FAD precursor" },
        { name: "B3 (Niacin)", role: "NAD+ precursor" }
    ];

    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            {/* Fixed Background */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: -1,
                backgroundImage: 'url(/mitochondrion_final.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.6)' // Darken for readability
                }}></div>
            </div>

            {/* Scrolling Content */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                paddingTop: '100px',
                paddingBottom: '100px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '40vh' // Spacing for scrollytelling feel
            }}>

                {/* Title Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{
                        textAlign: 'center',
                        color: '#FFFFFF',
                        marginBottom: '10vh'
                    }}
                >
                    <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '1rem', color: '#FFFFFF' }}>
                        The Engine Room
                    </h1>
                    <p style={{ fontSize: '1.5rem', fontWeight: 300, maxWidth: '600px', margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}>
                        Inside the Mitochondria: The source of all biological energy.
                    </p>
                </motion.div>

                {/* Glass Cards */}
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-100px" }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.35)', // Highly Translucent
                            backdropFilter: 'blur(20px)',
                            borderRadius: '24px',
                            padding: '3rem',
                            maxWidth: '600px',
                            width: '90%',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            color: '#1D1D1F' // Deep Charcoal Text
                        }}
                    >
                        <div style={{ color: 'var(--color-primary)', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
                            {card.subtitle}
                        </div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.1', color: '#000000' }}>
                            {card.title}
                        </h2>

                        <div style={{ marginBottom: '1.5rem' }}>
                            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Mechanism:</strong>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{card.mechanism}</p>
                        </div>

                        <div style={{ marginBottom: '2rem', background: 'rgba(0,0,0,0.03)', padding: '1rem', borderRadius: '12px' }}>
                            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1rem', color: '#000000' }}>The Nuance:</strong>
                            <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: 0, fontStyle: 'italic', color: '#444' }}>"{card.nuance}"</p>
                        </div>

                        <a href={card.link} className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                            View Source
                        </a>
                    </motion.div>
                ))}

            </div>

            {/* Bottom Section: B-Vitamin Spark Plugs */}
            <div style={{
                position: 'relative',
                zIndex: 2,
                background: '#FFFFFF',
                padding: '6rem 2rem',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#000000' }}>The Spark Plugs (Co-Factors)</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {bVitamins.map((vitamin, index) => (
                            <div key={index} style={{
                                background: '#F5F5F7',
                                padding: '2rem',
                                borderRadius: '16px',
                                minWidth: '200px',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{vitamin.name}</h3>
                                <p style={{ margin: 0, fontWeight: 600, color: '#1D1D1F' }}>{vitamin.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineRoom;
