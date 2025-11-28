import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function About() {
    return (
        <div style={{
            backgroundImage: 'url(/dna_white_bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh',
            color: 'var(--color-text)',
            fontFamily: '"Inter", sans-serif'
        }}>
            <Helmet>
                <title>About Dr. Gavin | Medicine 3.0</title>
                <meta name="description" content="Why a Board-Certified Family Physician started an anonymous longevity clinic. Bridging the gap between standard care and optimal health." />
            </Helmet>

            <div className="container" style={{ paddingTop: '8rem', paddingBottom: '0' }}>
                {/* Hero Section */}
                <section style={{ marginBottom: '8rem', textAlign: 'center' }}>
                    <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: '1.1', marginBottom: '1.5rem', color: 'var(--color-text)', fontWeight: '800' }}>
                        Beyond the <span style={{ color: 'var(--color-accent-teal)' }}>15-Minute</span> Consult.
                    </h1>
                    <p style={{ fontSize: '1.5rem', color: 'var(--color-text)', maxWidth: '700px', margin: '0 auto', fontWeight: '500' }}>
                        Why a Family Medicine Physician started an anonymous longevity clinic.
                    </p>
                </section>

                {/* Section 1: The Problem */}
                <section style={{ marginBottom: '8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)', fontWeight: '700' }}>The Problem</h2>
                        <div style={{ width: '50px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '2rem' }}></div>
                    </div>
                    <div>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            In my clinic, I see 30 patients a day. I treat infections, manage diabetes, and prescribe blood pressure medication. I am good at saving lives. But modern medicine is <strong>reactive</strong>. We wait for the engine to break before we fix it.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginTop: '1.5rem' }}>
                            I started this platform to do what I cannot do in a 15-minute insurance slot: <strong>Teach you how to prevent the breakdown in the first place.</strong>
                        </p>
                    </div>
                </section>

                {/* Section 2: The Philosophy */}
                <section style={{ marginBottom: '8rem', background: 'rgba(255,255,255,0.8)', padding: '4rem', borderRadius: '16px', border: '1px solid var(--color-border)', backdropFilter: 'blur(10px)' }}>
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)', fontWeight: '700' }}>The Gap Between "Normal" and "Optimal"</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            When your lab results come back "normal," it just means you aren't dying. It doesn't mean you are thriving. My goal is to bridge the gap between standard clinical care and the cutting edge of longevity science. We focus on <strong>mitochondrial health</strong>, <strong>metabolic flexibility</strong>, and <strong>cognitive resilience</strong>.
                        </p>
                    </div>
                </section>

                {/* Section 3: Why Faceless? */}
                <section style={{ marginBottom: '8rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ order: 2 }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--color-text)', fontWeight: '700' }}>Science &gt; Celebrity</h2>
                        <div style={{ width: '50px', height: '4px', background: 'var(--color-accent-teal)', marginBottom: '2rem' }}></div>
                    </div>
                    <div style={{ order: 1 }}>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            We live in the age of the "Influencer Doctor." It is easy to get distracted by personalities. I have chosen to keep this platform faceless because I want the focus to remain strictly on the <strong>protocols</strong>, the <strong>data</strong>, and the <strong>physiology</strong>.
                        </p>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--color-text)', marginTop: '1.5rem' }}>
                            This isn't about me; it's about your biology.
                        </p>
                    </div>
                </section>

                {/* Section 4: Credentials */}
                <section style={{ marginBottom: '8rem', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', color: 'var(--color-text)', fontWeight: '700' }}>Credentials</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {[
                            'Board-Certified Family Physician',
                            'Active Clinical Practice',
                            'Evidence-Based Approach'
                        ].map((cred, index) => (
                            <div key={index} style={{
                                padding: '1.5rem 2rem',
                                border: '2px solid var(--color-accent-teal)',
                                borderRadius: '50px',
                                color: 'var(--color-accent-teal)',
                                fontWeight: '700',
                                fontSize: '1.1rem',
                                background: 'rgba(255,255,255,0.5)'
                            }}>
                                {cred}
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer CTA - Clinical White */}
            <section style={{ textAlign: 'center', padding: '6rem 2rem', background: 'var(--color-bg)', color: 'var(--color-text)', borderTop: '1px solid var(--color-border)' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--color-text)', fontWeight: '700' }}>Join the Inner Circle</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                    Get the protocols before they hit the mainstream.
                </p>
                <form style={{ display: 'flex', gap: '1rem', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        style={{
                            flex: 1,
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--color-border)',
                            background: 'var(--color-bg-alt)',
                            color: 'var(--color-text)'
                        }}
                    />
                    <button className="btn-primary" style={{ border: 'none' }}>Subscribe</button>
                </form>
            </section>
        </div>
    );
}
