"use client";

import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function AffiliateDisclaimer() {
    const lastUpdated = "December 17, 2025";

    const sectionStyle = {
        marginBottom: '3.5rem'
    };

    const headingStyle = {
        fontSize: '2rem',
        fontWeight: '700',
        color: 'var(--color-text)',
        marginBottom: '1.5rem',
        fontFamily: '"Manrope", sans-serif',
        borderBottom: '3px solid #FF5F00',
        paddingBottom: '0.5rem',
        display: 'inline-block'
    };

    const subheadingStyle = {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: 'var(--color-primary)',
        marginTop: '2rem',
        marginBottom: '1rem'
    };

    const paragraphStyle = {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: 'var(--color-text)',
        marginBottom: '1.5rem'
    };

    const listStyle = {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: 'var(--color-text)',
        marginLeft: '2rem',
        marginBottom: '1.5rem'
    };

    const highlightBoxStyle = {
        background: 'linear-gradient(135deg, rgba(255, 95, 0, 0.08) 0%, rgba(255, 95, 0, 0.03) 100%)',
        border: '2px solid #FF5F00',
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '2rem'
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-bg)',
            minHeight: '100vh',
            color: 'var(--color-text)',
            fontFamily: '"Inter", sans-serif',
            paddingTop: '120px'
        }}>
            <SEO
                title="Affiliate Disclaimer | EMPOWERVIDA"
                description="Affiliate Disclosure for EmpowerVida - Transparency about our affiliate relationships and how we earn commissions on recommended products."
                keywords="affiliate disclaimer, FTC disclosure, affiliate links, product recommendations, transparency"
                canonical="/affiliate-disclaimer"
            />

            <div className="container" style={{ maxWidth: '900px', paddingBottom: '6rem' }}>

                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: '800',
                        color: 'var(--color-text)',
                        marginBottom: '1rem',
                        fontFamily: '"Manrope", sans-serif'
                    }}>
                        Affiliate Disclaimer
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        fontStyle: 'italic'
                    }}>
                        Transparency in Every Recommendation
                    </p>
                    <p style={{
                        fontSize: '0.95rem',
                        color: 'var(--color-text-muted)',
                        marginTop: '1rem'
                    }}>
                        <strong>Last Updated:</strong> {lastUpdated}
                    </p>
                </div>

                {/* Quick Summary Box */}
                <div style={highlightBoxStyle}>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#FF5F00', marginBottom: '1rem' }}>
                        ⚠️ Full Transparency
                    </h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '0' }}>
                        <strong>EmpowerVida participates in affiliate programs.</strong> This means when you click on certain links and make a purchase, we may earn a commission <strong>at no extra cost to you</strong>. We only recommend products we genuinely believe in and that align with our evidence-based approach to health.
                    </p>
                </div>

                {/* Section 1: What Is an Affiliate Link? */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>1. What Is an Affiliate Link?</h2>
                    <p style={paragraphStyle}>
                        An affiliate link is a special tracking URL that allows us to earn a commission when you purchase a product through that link. These links help us:
                    </p>
                    <ul style={listStyle}>
                        <li>Keep this website running and create free, high-quality content</li>
                        <li>Continue researching and sharing evidence-based health protocols</li>
                        <li>Provide comprehensive guides and resources at no cost to you</li>
                    </ul>
                    <p style={paragraphStyle}>
                        <strong>Important:</strong> Using our affiliate links does <strong>not</strong> increase the price you pay. In many cases, we're able to negotiate exclusive discounts for our readers.
                    </p>
                </section>

                {/* Section 2: Our Commitment to Honesty */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>2. Our Commitment to Honesty</h2>

                    <div style={{
                        background: '#F5F5F7',
                        borderLeft: '4px solid var(--color-accent-teal)',
                        padding: '2rem',
                        borderRadius: '8px',
                        marginBottom: '2rem'
                    }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: '600', color: 'var(--color-text)', marginBottom: '1rem' }}>
                            Our Promise to You:
                        </p>
                        <ul style={{ ...listStyle, marginLeft: '1.5rem', marginBottom: '0' }}>
                            <li><strong>We recommend only products we personally use or have thoroughly researched</strong></li>
                            <li><strong>We prioritize your health over our commission</strong></li>
                            <li><strong>We disclose all affiliate relationships transparently</strong></li>
                            <li><strong>We provide honest, unbiased reviews and recommendations</strong></li>
                        </ul>
                    </div>

                    <p style={paragraphStyle}>
                        As a physician, Dr. Gavin takes his professional responsibility seriously. Every product recommendation is based on:
                    </p>
                    <ul style={listStyle}>
                        <li>Scientific evidence and clinical research</li>
                        <li>Personal experience and testing</li>
                        <li>Safety profile and quality standards</li>
                        <li>Value for money and effectiveness</li>
                    </ul>
                </section>

                {/* Section 3: Where We Use Affiliate Links */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>3. Where We Use Affiliate Links</h2>
                    <p style={paragraphStyle}>
                        We participate in various affiliate programs, and you may encounter affiliate links in the following areas:
                    </p>
                    <ul style={listStyle}>
                        <li><strong>Shop Page:</strong> Product recommendations for supplements, equipment, and health tools</li>
                        <li><strong>Blog Posts:</strong> When we mention specific products or resources</li>
                        <li><strong>Protocol Pages:</strong> When recommending supplements or testing services</li>
                        <li><strong>Email Newsletters:</strong> Occasional product recommendations</li>
                    </ul>
                </section>

                {/* Section 4: Affiliate Programs We Participate In */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>4. Affiliate Programs We Participate In</h2>
                    <p style={paragraphStyle}>
                        We currently participate in affiliate programs with various health and wellness retailers. These may include, but are not limited to:
                    </p>
                    <ul style={listStyle}>
                        <li>Supplement retailers and manufacturers</li>
                        <li>Health testing laboratories</li>
                        <li>Wellness product companies</li>
                        <li>Online health retailers</li>
                    </ul>
                    <p style={paragraphStyle}>
                        <strong>Note:</strong> Our affiliate partnerships may change over time as we discover better products and services for our community.
                    </p>
                </section>

                {/* Section 5: FTC Compliance */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>5. FTC Compliance</h2>
                    <p style={paragraphStyle}>
                        In accordance with the <strong>Federal Trade Commission (FTC)</strong> guidelines and similar consumer protection laws worldwide, we are required to disclose when we have a financial relationship with the companies whose products we recommend.
                    </p>
                    <p style={paragraphStyle}>
                        This disclaimer serves as full disclosure of our affiliate relationships. By using this website, you acknowledge that:
                    </p>
                    <ul style={listStyle}>
                        <li>We may earn commissions from purchases made through our affiliate links</li>
                        <li>These commissions do not influence our editorial integrity</li>
                        <li>Our recommendations are based on evidence and personal conviction, not commission rates</li>
                    </ul>
                </section>

                {/* Section 6: Your Choice */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>6. Your Choice</h2>
                    <p style={paragraphStyle}>
                        You are <strong>never</strong> obligated to purchase through our affiliate links. You can:
                    </p>
                    <ul style={listStyle}>
                        <li>Search for the product directly and buy from any retailer you prefer</li>
                        <li>Compare prices across multiple vendors</li>
                        <li>Use our recommendations as a starting point for your own research</li>
                    </ul>
                    <p style={paragraphStyle}>
                        However, if you choose to support us by using our affiliate links, we are deeply grateful. Your support allows us to continue creating free, evidence-based content for the health optimization community.
                    </p>
                </section>

                {/* Section 7: Product Quality and Safety */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>7. Product Quality and Safety</h2>
                    <p style={paragraphStyle}>
                        While we carefully vet every product we recommend, please note:
                    </p>
                    <ul style={listStyle}>
                        <li><strong>Individual results may vary:</strong> What works for one person may not work for another</li>
                        <li><strong>Consult your physician:</strong> Always speak with your healthcare provider before starting any new supplement or health protocol</li>
                        <li><strong>We are not responsible for third-party products:</strong> Product formulations, quality, and availability are controlled by the manufacturers and retailers, not by us</li>
                        <li><strong>Do your own research:</strong> We encourage you to research products independently and make informed decisions</li>
                    </ul>
                </section>

                {/* Section 8: Medical Disclaimer */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>8. Medical Disclaimer</h2>

                    <div style={{
                        background: 'rgba(255, 95, 0, 0.05)',
                        border: '2px solid #FF5F00',
                        borderRadius: '12px',
                        padding: '2rem',
                        marginBottom: '2rem'
                    }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '1rem' }}>
                            <strong>⚠️ Important:</strong> The content on this website is for <strong>educational and informational purposes only</strong> and does not constitute medical advice, diagnosis, or treatment.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '0' }}>
                            Dr. Gavin is a physician, but he is <strong>not your physician</strong>. Always seek the advice of your qualified healthcare provider before making any changes to your health regimen, including starting new supplements.
                        </p>
                    </div>
                </section>

                {/* Section 9: Amazon Associates Specific Disclosure */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>9. Amazon Associates Disclosure</h2>
                    <p style={paragraphStyle}>
                        <em>"As an Amazon Associate, we earn from qualifying purchases."</em>
                    </p>
                    <p style={paragraphStyle}>
                        This means that if you click on an Amazon link from our website and make a purchase, we may receive a small commission from Amazon. This is at no additional cost to you and helps support our content creation efforts.
                    </p>
                </section>

                {/* Section 10: Contact Us */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>10. Questions About Affiliate Links?</h2>
                    <p style={paragraphStyle}>
                        If you have any questions about our affiliate relationships or product recommendations, please don't hesitate to contact us:
                    </p>

                    <div style={{
                        background: '#F5F5F7',
                        border: '1px solid rgba(0,0,0,0.1)',
                        borderRadius: '12px',
                        padding: '2rem',
                        marginTop: '2rem'
                    }}>
                        <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--color-text)' }}>
                            <strong>BGMED PTY LTD</strong>
                        </p>
                        <p style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                            <strong>Email:</strong> <a href="mailto:gavinmcauley9@gmail.com" style={{ color: 'var(--color-accent-teal)', fontWeight: '600' }}>gavinmcauley9@gmail.com</a>
                        </p>
                    </div>
                </section>

                {/* Thank You Section */}
                <div style={{
                    textAlign: 'center',
                    padding: '3rem 2rem',
                    background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.05) 0%, rgba(32, 178, 170, 0.02) 100%)',
                    borderRadius: '12px',
                    marginTop: '3rem',
                    border: '1px solid rgba(32, 178, 170, 0.2)'
                }}>
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--color-text)', marginBottom: '1rem' }}>
                        Thank You for Your Support 🙏
                    </h3>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Your trust means everything to us. When you use our affiliate links, you're helping us continue our mission to provide evidence-based, accessible health information to everyone who needs it.
                    </p>
                </div>

                {/* Navigation Links */}
                <div style={{
                    textAlign: 'center',
                    marginTop: '4rem',
                    paddingTop: '3rem',
                    borderTop: '2px solid rgba(0,0,0,0.1)',
                    display: 'flex',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    <Link
                        href="/privacy"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2rem',
                            background: 'transparent',
                            color: 'var(--color-primary)',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            border: '2px solid var(--color-primary)',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => {
                            e.target.style.background = 'var(--color-primary)';
                            e.target.style.color = '#FFFFFF';
                        }}
                        onMouseLeave={e => {
                            e.target.style.background = 'transparent';
                            e.target.style.color = 'var(--color-primary)';
                        }}
                    >
                        View Privacy Policy
                    </Link>
                    <Link
                        href="/"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2.5rem',
                            background: 'var(--color-primary)',
                            color: '#FFFFFF',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            boxShadow: '0 4px 15px rgba(26, 60, 52, 0.2)',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={e => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(26, 60, 52, 0.3)';
                        }}
                        onMouseLeave={e => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(26, 60, 52, 0.2)';
                        }}
                    >
                        ← Back to Home
                    </Link>
                </div>

            </div>
        </div>
    );
}
