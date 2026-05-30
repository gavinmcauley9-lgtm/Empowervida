"use client";

import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

export default function TermsConditions() {
    const lastUpdated = "December 17, 2025";

    const sectionStyle = {
        marginBottom: '4rem'
    };

    const headingStyle = {
        fontSize: '2rem',
        fontWeight: '700',
        color: 'var(--color-text)',
        marginBottom: '1.5rem',
        fontFamily: '"Manrope", sans-serif',
        borderBottom: '3px solid var(--color-primary)',
        paddingBottom: '0.5rem',
        display: 'inline-block'
    };

    const subheadingStyle = {
        fontSize: '1.4rem',
        fontWeight: '600',
        color: 'var(--color-primary)',
        marginTop: '2.5rem',
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

    const criticalBoxStyle = {
        background: 'linear-gradient(135deg, rgba(255, 95, 0, 0.1) 0%, rgba(255, 95, 0, 0.05) 100%)',
        border: '3px solid #FF5F00',
        borderRadius: '12px',
        padding: '2.5rem',
        marginBottom: '2.5rem'
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
                title="Terms and Conditions | EMPOWERVIDA"
                description="Terms and Conditions for EmpowerVida - Legal terms of use, medical disclaimer, governing law, and user responsibilities for accessing our health education content."
                keywords="terms and conditions, terms of service, medical disclaimer, legal terms, health education, user agreement"
                canonical="/terms"
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
                        Terms & Conditions
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        fontStyle: 'italic'
                    }}>
                        Legal Terms for Using This Website
                    </p>
                    <p style={{
                        fontSize: '0.95rem',
                        color: 'var(--color-text-muted)',
                        marginTop: '1rem'
                    }}>
                        <strong>Last Updated:</strong> {lastUpdated}
                    </p>
                </div>

                {/* CRITICAL MEDICAL DISCLAIMER - TOP */}
                <div style={criticalBoxStyle}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#FF5F00', marginBottom: '1.5rem', textAlign: 'center' }}>
                        ⚠️ CRITICAL MEDICAL DISCLAIMER
                    </h2>
                    <div style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                        <p style={{ marginBottom: '1rem', fontWeight: '600' }}>
                            <strong>READ THIS CAREFULLY BEFORE USING THIS WEBSITE:</strong>
                        </p>
                        <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem' }}>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <strong>Dr. Gavin McAuley is a physician, but he is NOT YOUR physician.</strong>
                            </li>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <strong>This website provides educational content only and does NOT constitute medical advice, diagnosis, or treatment.</strong>
                            </li>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <strong>No doctor-patient relationship is formed by using this website.</strong>
                            </li>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <strong>Dr. Gavin cannot and does not assess you medically through this website.</strong>
                            </li>
                            <li style={{ marginBottom: '0.75rem' }}>
                                <strong>ALWAYS consult YOUR OWN qualified healthcare provider before making any health decisions or starting any supplement, diet, or exercise program.</strong>
                            </li>
                        </ul>
                        <p style={{ marginTop: '1.5rem', fontSize: '1.1rem', fontStyle: 'italic', textAlign: 'center' }}>
                            By using this website, you acknowledge that you understand and agree to these terms.
                        </p>
                    </div>
                </div>

                {/* Section 1: Agreement to Terms */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>1. Agreement to Terms</h2>
                    <p style={paragraphStyle}>
                        Welcome to <strong>EmpowerVida</strong> ("Website", "Site", "we", "us", or "our"). By accessing or using this website, you ("User", "you", or "your") agree to be bound by these Terms and Conditions ("Terms").
                    </p>
                    <p style={paragraphStyle}>
                        <strong>If you do not agree to these Terms, you must not access or use this Website.</strong>
                    </p>
                    <p style={paragraphStyle}>
                        These Terms constitute a legally binding agreement between you and <strong>BGMED PTY LTD</strong> (ABN: 49 569 260 904), the owner and operator of this Website.
                    </p>
                </section>

                {/* Section 2: Purpose of Website */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>2. Purpose of This Website</h2>
                    <p style={paragraphStyle}>
                        EmpowerVida is an <strong>educational resource</strong> designed to:
                    </p>
                    <ul style={listStyle}>
                        <li>Provide evidence-based health and wellness information</li>
                        <li>Empower individuals to make more informed decisions about their health</li>
                        <li>Share Dr. Gavin's personal journey and clinical insights</li>
                        <li>Recommend products and protocols based on scientific research</li>
                    </ul>
                    <p style={paragraphStyle}>
                        <strong>This Website is NOT intended to:</strong>
                    </p>
                    <ul style={listStyle}>
                        <li>Replace professional medical advice, diagnosis, or treatment</li>
                        <li>Establish a doctor-patient relationship</li>
                        <li>Provide individualized medical assessments or treatment plans</li>
                        <li>Serve as a substitute for consultation with your own healthcare provider</li>
                    </ul>
                </section>

                {/* Section 3: NO DOCTOR-PATIENT RELATIONSHIP */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>3. No Doctor-Patient Relationship</h2>

                    <div style={{
                        background: 'rgba(255, 95, 0, 0.05)',
                        borderLeft: '4px solid #FF5F00',
                        padding: '2rem',
                        borderRadius: '8px',
                        marginBottom: '2rem'
                    }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: '700', color: '#FF5F00', marginBottom: '1rem' }}>
                            IMPORTANT: No Medical Relationship Exists
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)' }}>
                            <strong>Using this Website does NOT create a doctor-patient relationship between you and Dr. Gavin McAuley or BGMED PTY LTD.</strong>
                        </p>
                    </div>

                    <p style={paragraphStyle}>
                        While Dr. Gavin is a physician, he:
                    </p>
                    <ul style={listStyle}>
                        <li><strong>Cannot</strong> and <strong>does not</strong> provide medical advice specific to your individual health situation through this Website</li>
                        <li><strong>Cannot</strong> assess, diagnose, or treat you medically via this Website</li>
                        <li><strong>Cannot</strong> prescribe medications or treatments to you</li>
                        <li><strong>Is NOT your physician</strong> and does not assume any responsibility for your medical care</li>
                    </ul>

                    <p style={paragraphStyle}>
                        <strong>Medical assessment and diagnosis MUST be performed by YOUR OWN qualified healthcare provider</strong> who has:
                    </p>
                    <ul style={listStyle}>
                        <li>Examined you in person</li>
                        <li>Reviewed your complete medical history</li>
                        <li>Conducted appropriate diagnostic testing</li>
                        <li>Established a formal doctor-patient relationship with you</li>
                    </ul>
                </section>

                {/* Section 4: Your Responsibility */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>4. Your Responsibility</h2>
                    <p style={paragraphStyle}>
                        By using this Website, you acknowledge and agree that:
                    </p>
                    <ul style={listStyle}>
                        <li>You are responsible for your own health decisions</li>
                        <li>You will <strong>consult with YOUR OWN qualified healthcare provider</strong> before:
                            <ul style={{ marginLeft: '2rem', marginTop: '0.5rem' }}>
                                <li>Starting any new supplement, medication, or health protocol</li>
                                <li>Making changes to your current treatment plan</li>
                                <li>Beginning any diet, exercise, or lifestyle modification</li>
                                <li>Stopping or altering any prescribed medications</li>
                            </ul>
                        </li>
                        <li>You understand that information on this Website is general in nature and may not apply to your specific situation</li>
                        <li>You will not rely solely on information from this Website for medical decisions</li>
                        <li>You will seek immediate medical attention for any medical emergencies</li>
                    </ul>
                </section>

                {/* Section 5: Medical Disclaimer */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>5. Medical Disclaimer</h2>
                    <p style={paragraphStyle}>
                        <strong>The content on this Website is for educational and informational purposes only.</strong> It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                    </p>

                    <h3 style={subheadingStyle}>5.1 No Guarantees or Warranties</h3>
                    <p style={paragraphStyle}>
                        We make no guarantees, representations, or warranties regarding:
                    </p>
                    <ul style={listStyle}>
                        <li>The accuracy, completeness, or timeliness of information on this Website</li>
                        <li>The results you may or may not achieve from following any protocols or recommendations</li>
                        <li>The safety or effectiveness of any products, supplements, or treatments mentioned</li>
                    </ul>

                    <h3 style={subheadingStyle}>5.2 Individual Results Vary</h3>
                    <p style={paragraphStyle}>
                        Health outcomes are highly individual and depend on numerous factors including genetics, lifestyle, existing health conditions, and adherence to protocols. <strong>Results experienced by Dr. Gavin or others may not be typical and should not be expected.</strong>
                    </p>

                    <h3 style={subheadingStyle}>5.3 Not FDA Evaluated</h3>
                    <p style={paragraphStyle}>
                        Statements regarding dietary supplements and health protocols have not been evaluated by the Food and Drug Administration (FDA) or Therapeutic Goods Administration (TGA). Products are not intended to diagnose, treat, cure, or prevent any disease.
                    </p>
                </section>

                {/* Section 6: Use of Website */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>6. Acceptable Use</h2>
                    <p style={paragraphStyle}>
                        You agree to use this Website only for lawful purposes and in accordance with these Terms. You agree NOT to:
                    </p>
                    <ul style={listStyle}>
                        <li>Use the Website in any way that violates applicable laws or regulations</li>
                        <li>Reproduce, distribute, or publicly display content without written permission</li>
                        <li>Attempt to gain unauthorized access to the Website or its systems</li>
                        <li>Engage in any conduct that restricts or inhibits anyone's use of the Website</li>
                        <li>Use automated systems (bots, scrapers) to access the Website without permission</li>
                        <li>Misrepresent your affiliation with any person or entity</li>
                    </ul>
                </section>

                {/* Section 7: Intellectual Property */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>7. Intellectual Property Rights</h2>
                    <p style={paragraphStyle}>
                        All content on this Website, including but not limited to text, graphics, logos, images, videos, and software, is the property of <strong>BGMED PTY LTD</strong> or its content suppliers and is protected by Australian and international copyright, trademark, and other intellectual property laws.
                    </p>
                    <p style={paragraphStyle}>
                        You may not:
                    </p>
                    <ul style={listStyle}>
                        <li>Copy, reproduce, distribute, or create derivative works without written permission</li>
                        <li>Use our content for commercial purposes without authorization</li>
                        <li>Remove or alter any copyright, trademark, or proprietary notices</li>
                    </ul>
                    <p style={paragraphStyle}>
                        You may share links to our content and quote brief excerpts with proper attribution for non-commercial, educational purposes.
                    </p>
                </section>

                {/* Section 8: Third-Party Links and Products */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>8. Third-Party Links and Products</h2>
                    <p style={paragraphStyle}>
                        This Website may contain links to third-party websites and affiliate links to products. We are not responsible for:
                    </p>
                    <ul style={listStyle}>
                        <li>The content, accuracy, or practices of third-party websites</li>
                        <li>The quality, safety, or effectiveness of third-party products</li>
                        <li>Any transactions you conduct with third parties</li>
                    </ul>
                    <p style={paragraphStyle}>
                        We recommend you read the terms and privacy policies of any third-party websites you visit. See our <Link href="/affiliate-disclaimer" style={{ color: 'var(--color-accent-teal)', fontWeight: '600' }}>Affiliate Disclaimer</Link> for more information.
                    </p>
                </section>

                {/* Section 9: Limitation of Liability */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>9. Limitation of Liability</h2>

                    <div style={{
                        background: '#F5F5F7',
                        border: '2px solid rgba(0,0,0,0.1)',
                        borderRadius: '12px',
                        padding: '2rem',
                        marginBottom: '2rem'
                    }}>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)', fontWeight: '600' }}>
                            TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                        </p>
                    </div>

                    <p style={paragraphStyle}>
                        <strong>BGMED PTY LTD</strong>, its directors, employees, and affiliates shall NOT be liable for:
                    </p>
                    <ul style={listStyle}>
                        <li>Any direct, indirect, incidental, consequential, or special damages arising from your use of this Website</li>
                        <li>Any health complications, injuries, or adverse effects resulting from following information on this Website</li>
                        <li>Any loss of profits, data, or business opportunities</li>
                        <li>Any damages arising from third-party products or services accessed through this Website</li>
                    </ul>

                    <p style={paragraphStyle}>
                        <strong>You assume full responsibility for your use of this Website and any actions you take based on information provided.</strong>
                    </p>
                </section>

                {/* Section 10: Indemnification */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>10. Indemnification</h2>
                    <p style={paragraphStyle}>
                        You agree to indemnify, defend, and hold harmless <strong>BGMED PTY LTD</strong>, Dr. Gavin McAuley, and their respective officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:
                    </p>
                    <ul style={listStyle}>
                        <li>Your use of the Website</li>
                        <li>Your violation of these Terms</li>
                        <li>Your violation of any rights of another person or entity</li>
                        <li>Any health decisions you make based on Website content</li>
                    </ul>
                </section>

                {/* Section 11: GOVERNING LAW AND JURISDICTION */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>11. Governing Law and Jurisdiction</h2>

                    <div style={{
                        background: 'linear-gradient(135deg, rgba(26, 60, 52, 0.08) 0%, rgba(26, 60, 52, 0.03) 100%)',
                        border: '2px solid var(--color-primary)',
                        borderRadius: '12px',
                        padding: '2rem',
                        marginBottom: '2rem'
                    }}>
                        <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                            ⚖️ Jurisdiction and Legal Disputes
                        </h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text)', marginBottom: '0' }}>
                            These Terms and your use of this Website shall be governed by and construed in accordance with the laws of <strong>Western Australia, Australia</strong>, without regard to its conflict of law provisions.
                        </p>
                    </div>

                    <p style={paragraphStyle}>
                        <strong>Any legal action or proceeding arising out of or relating to these Terms or the Website shall be instituted exclusively in the courts of Western Australia, Australia.</strong>
                    </p>
                    <p style={paragraphStyle}>
                        You irrevocably consent and submit to the exclusive jurisdiction of such courts in any such action or proceeding and waive any objection to the venue in such courts.
                    </p>
                </section>

                {/* Section 12: Changes to Terms */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>12. Changes to These Terms</h2>
                    <p style={paragraphStyle}>
                        We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on this page with an updated "Last Updated" date.
                    </p>
                    <p style={paragraphStyle}>
                        Your continued use of the Website after any changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.
                    </p>
                </section>

                {/* Section 13: Severability */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>13. Severability</h2>
                    <p style={paragraphStyle}>
                        If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                    </p>
                </section>

                {/* Section 14: Entire Agreement */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>14. Entire Agreement</h2>
                    <p style={paragraphStyle}>
                        These Terms, together with our <Link href="/privacy" style={{ color: 'var(--color-accent-teal)', fontWeight: '600' }}>Privacy Policy</Link> and <Link href="/affiliate-disclaimer" style={{ color: 'var(--color-accent-teal)', fontWeight: '600' }}>Affiliate Disclaimer</Link>, constitute the entire agreement between you and BGMED PTY LTD regarding your use of this Website.
                    </p>
                </section>

                {/* Section 15: Contact Information */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>15. Contact Us</h2>
                    <p style={paragraphStyle}>
                        If you have questions about these Terms and Conditions, please contact us:
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
                            <strong>ABN:</strong> 49 569 260 904
                        </p>
                        <p style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                            <strong>Email:</strong> <a href="mailto:gavinmcauley9@gmail.com" style={{ color: 'var(--color-accent-teal)', fontWeight: '600' }}>gavinmcauley9@gmail.com</a>
                        </p>
                        <p style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                            <strong>Location:</strong> Australind, Western Australia 6233
                        </p>
                    </div>
                </section>

                {/* Final Acknowledgment */}
                <div style={{
                    ...criticalBoxStyle,
                    marginTop: '4rem'
                }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#FF5F00', marginBottom: '1rem', textAlign: 'center' }}>
                        By Using This Website, You Acknowledge:
                    </h3>
                    <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', marginLeft: '1.5rem', color: 'var(--color-text)' }}>
                        <li>You have read and understood these Terms and Conditions</li>
                        <li>You agree to be bound by these Terms</li>
                        <li>You understand this is an educational website, not a source of medical advice</li>
                        <li>You will consult your own healthcare provider for medical decisions</li>
                        <li>Any legal disputes will be resolved under Western Australian law</li>
                    </ul>
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
                        Privacy Policy
                    </Link>
                    <Link
                        href="/affiliate-disclaimer"
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
                        Affiliate Disclaimer
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
