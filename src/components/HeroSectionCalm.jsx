import React from 'react';
import './HeroSectionCalm.css';

const HeroSectionCalm = () => {
    return (
        <section className="hero-calm-section">
            {/* Background Pattern */}
            <div className="hero-calm-bg-pattern">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#cbd5e1" />
                </svg>
            </div>

            <div className="hero-calm-container">

                {/* The "Trust Badge" */}
                <span className="hero-calm-badge">
                    Evidence-based care. Delivered with human attention.
                </span>

                {/* H1 Headline */}
                <h1 className="hero-calm-title">
                    You don't need to <span className="hero-calm-italic">push harder</span> to feel better.
                </h1>

                {/* H2 Subheadline */}
                <p className="hero-calm-subtitle">
                    Calm, evidence-based support for energy, health, and longevity — guided by a doctor who listens, not just a protocol that demands more.
                </p>

                {/* Safety Reinforcement */}
                <p className="hero-calm-safety-text">
                    NO HYPE. NO OVERWHELM. JUST STEADY SCIENCE.
                </p>

                {/* CTAs */}
                <div className="hero-calm-cta-group">
                    {/* Primary Button */}
                    <a href="#" className="hero-calm-btn-primary">
                        Get the Free Starter Checklist
                    </a>

                    {/* Secondary Link */}
                    <a href="#how-we-work" className="hero-calm-btn-secondary">
                        Learn how we work <span className="hero-calm-arrow">→</span>
                    </a>
                </div>

                {/* Doctor Identity / Social Proof */}
                <div className="hero-calm-footer">
                    <div className="hero-calm-avatar-group">
                        <div className="hero-calm-avatar">G</div>
                        <div className="hero-calm-avatar">P</div>
                    </div>
                    <div className="hero-calm-doctor-label">
                        Led by <strong>Dr. Gavin McAuley</strong> <span>|</span> GP & Longevity Physician
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSectionCalm;
