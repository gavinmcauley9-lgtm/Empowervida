import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Privacy() {
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
        borderBottom: '3px solid var(--color-accent-teal)',
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

    const highlightBoxStyle = {
        background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.08) 0%, rgba(32, 178, 170, 0.03) 100%)',
        border: '2px solid var(--color-accent-teal)',
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
                title="Privacy Policy | EMPOWERVIDA"
                description="Privacy Policy for EmpowerVida - Your data protection rights, cookie usage, and how we handle your personal information in compliance with Australian Privacy Principles and GDPR."
                keywords="privacy policy, data protection, cookies, GDPR, Australian privacy act, personal information"
                canonical="/privacy"
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
                        Privacy Policy
                    </h1>
                    <p style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-muted)',
                        fontStyle: 'italic'
                    }}>
                        Your Health. Your Data. Your Control.
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
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--color-accent-teal)', marginBottom: '1rem' }}>
                        📋 Privacy at a Glance
                    </h3>
                    <ul style={{ ...listStyle, marginLeft: '1.5rem' }}>
                        <li><strong>We respect your privacy.</strong> We collect minimal data to provide you with a better experience.</li>
                        <li><strong>We don't sell your data.</strong> Never have, never will.</li>
                        <li><strong>You have rights.</strong> Access, delete, or export your data anytime.</li>
                        <li><strong>Cookies are optional.</strong> You can manage your cookie preferences at any time.</li>
                    </ul>
                </div>

                {/* Section 1: Introduction */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>1. Introduction</h2>
                    <p style={paragraphStyle}>
                        Welcome to <strong>EmpowerVida</strong>. This Privacy Policy explains how <strong>BGMED PTY LTD</strong> (ABN: 49 569 260 904) collects, uses, discloses, and protects your personal information when you visit our website <strong>empowervida.com</strong>.
                    </p>
                    <p style={paragraphStyle}>
                        We are committed to protecting your privacy and complying with:
                    </p>
                    <ul style={listStyle}>
                        <li>Australian Privacy Principles (APPs) under the <em>Privacy Act 1988 (Cth)</em></li>
                        <li>General Data Protection Regulation (GDPR) for European visitors</li>
                        <li>Other applicable privacy laws in your jurisdiction</li>
                    </ul>
                    <p style={paragraphStyle}>
                        By using this website, you agree to the collection and use of information in accordance with this policy.
                    </p>
                </section>

                {/* Section 2: Information We Collect */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>2. Information We Collect</h2>

                    <h3 style={subheadingStyle}>2.1 Information You Provide Directly</h3>
                    <p style={paragraphStyle}>
                        When you interact with our website, you may voluntarily provide:
                    </p>
                    <ul style={listStyle}>
                        <li><strong>Email Address:</strong> When you subscribe to our newsletter or contact us</li>
                        <li><strong>Name:</strong> When you sign up for updates or communicate with us</li>
                        <li><strong>Any information you include in messages or inquiries sent to us</strong></li>
                    </ul>

                    <h3 style={subheadingStyle}>2.2 Information Collected Automatically</h3>
                    <p style={paragraphStyle}>
                        When you visit our website, we may automatically collect:
                    </p>
                    <ul style={listStyle}>
                        <li><strong>Usage Data:</strong> Pages visited, time spent, links clicked</li>
                        <li><strong>Device Information:</strong> Browser type, operating system, device type</li>
                        <li><strong>IP Address:</strong> Your approximate geographic location</li>
                        <li><strong>Cookies and Tracking Technologies:</strong> See Section 5 below</li>
                    </ul>

                    <h3 style={subheadingStyle}>2.3 Information from Third Parties</h3>
                    <p style={paragraphStyle}>
                        We may receive information from third-party services such as:
                    </p>
                    <ul style={listStyle}>
                        <li><strong>Analytics Providers:</strong> Google Analytics, Facebook Pixel</li>
                        <li><strong>Affiliate Networks:</strong> When you click on affiliate links</li>
                    </ul>
                </section>

                {/* Section 3: How We Use Your Information */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>3. How We Use Your Information</h2>
                    <p style={paragraphStyle}>
                        We use the information we collect for the following purposes:
                    </p>
                    <ul style={listStyle}>
                        <li><strong>To provide and improve our services:</strong> Personalize content, improve website functionality</li>
                        <li><strong>To communicate with you:</strong> Send newsletters, updates, and respond to inquiries</li>
                        <li><strong>To analyze website usage:</strong> Understand how visitors use our site to improve user experience</li>
                        <li><strong>To comply with legal obligations:</strong> Respond to legal requests and prevent fraud</li>
                        <li><strong>To manage affiliate relationships:</strong> Track affiliate link clicks and commissions (no personal data sold to affiliates)</li>
                    </ul>
                </section>

                {/* Section 4: Legal Basis for Processing (GDPR) */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>4. Legal Basis for Processing (GDPR)</h2>
                    <p style={paragraphStyle}>
                        For visitors from the European Economic Area (EEA), we process your personal data based on:
                    </p>
                    <ul style={listStyle}>
                        <li><strong>Consent:</strong> You have given clear consent for us to process your data for a specific purpose (e.g., newsletter signup)</li>
                        <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate interests (e.g., improving our website) and does not override your rights</li>
                        <li><strong>Legal Obligation:</strong> Processing is necessary to comply with the law</li>
                    </ul>
                </section>

                {/* Section 5: Cookies and Tracking Technologies */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>5. Cookies and Tracking Technologies</h2>

                    <h3 style={subheadingStyle}>5.1 What Are Cookies?</h3>
                    <p style={paragraphStyle}>
                        Cookies are small text files stored on your device when you visit our website. They help us remember your preferences and understand how you use our site.
                    </p>

                    <h3 style={subheadingStyle}>5.2 Types of Cookies We Use</h3>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                            🔧 Essential Cookies (Required)
                        </h4>
                        <p style={paragraphStyle}>
                            These cookies are necessary for the website to function properly and cannot be disabled.
                        </p>
                        <ul style={listStyle}>
                            <li>Cookie consent preferences</li>
                            <li>Session management</li>
                        </ul>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
                            📊 Analytics Cookies (Optional)
                        </h4>
                        <p style={paragraphStyle}>
                            These cookies help us understand how visitors interact with our website.
                        </p>
                        <ul style={listStyle}>
                            <li><strong>Google Analytics:</strong> Tracks page views, visitor behaviour, and demographics</li>
                            <li><strong>Facebook Pixel:</strong> Tracks conversions and builds audiences for advertising</li>
                        </ul>
                    </div>

                    <h3 style={subheadingStyle}>5.3 Managing Your Cookie Preferences</h3>
                    <p style={paragraphStyle}>
                        You can manage your cookie preferences at any time by:
                    </p>
                    <ul style={listStyle}>
                        <li>Clicking the <strong>"Cookie Preferences"</strong> link in the footer of this website</li>
                        <li>Adjusting your browser settings to block or delete cookies</li>
                    </ul>
                    <div style={{ marginTop: '1.5rem' }}>
                        <button
                            onClick={() => window.dispatchEvent(new Event('openCookieSettings'))}
                            style={{
                                padding: '1rem 2rem',
                                background: 'var(--color-accent-teal)',
                                color: '#FFFFFF',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                boxShadow: '0 4px 15px rgba(32, 178, 170, 0.3)',
                                transition: 'all 0.2s ease'
                            }}
                            onMouseEnter={e => {
                                e.target.style.transform = 'translateY(-2px)';
                                e.target.style.boxShadow = '0 6px 20px rgba(32, 178, 170, 0.4)';
                            }}
                            onMouseLeave={e => {
                                e.target.style.transform = 'translateY(0)';
                                e.target.style.boxShadow = '0 4px 15px rgba(32, 178, 170, 0.3)';
                            }}
                        >
                            ⚙️ Manage Cookie Preferences
                        </button>
                    </div>
                </section>

                {/* Section 6: Third-Party Services */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>6. Third-Party Services</h2>
                    <p style={paragraphStyle}>
                        We use the following third-party services that may collect and process your data:
                    </p>

                    <h3 style={subheadingStyle}>6.1 Analytics</h3>
                    <ul style={listStyle}>
                        <li><strong>Google Analytics:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-teal)' }}>Privacy Policy</a></li>
                        <li><strong>Facebook Pixel:</strong> <a href="https://www.facebook.com/privacy/explanation" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-teal)' }}>Privacy Policy</a></li>
                    </ul>

                    <h3 style={subheadingStyle}>6.2 Email Services</h3>
                    <p style={paragraphStyle}>
                        We use an email service provider (to be specified) to manage our newsletter and email communications. Your email address will be stored securely by our provider.
                    </p>

                    <h3 style={subheadingStyle}>6.3 Affiliate Programs</h3>
                    <p style={paragraphStyle}>
                        Our website contains affiliate links to various third-party retailers. When you click on these links, the affiliate network may collect information about your visit. We do not share your personal information with affiliate partners. We may earn a commission if you make a purchase through these links, at no additional cost to you.
                    </p>
                </section>

                {/* Section 7: Data Sharing and Disclosure */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>7. Data Sharing and Disclosure</h2>
                    <p style={paragraphStyle}>
                        <strong>We do not sell your personal information to third parties.</strong>
                    </p>
                    <p style={paragraphStyle}>
                        We may share your information only in the following circumstances:
                    </p>
                    <ul style={listStyle}>
                        <li><strong>Service Providers:</strong> With trusted third-party providers who help us operate our website (e.g., hosting, analytics, email services)</li>
                        <li><strong>Legal Compliance:</strong> When required by law, court order, or government regulation</li>
                        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets</li>
                        <li><strong>With Your Consent:</strong> Any other disclosure will be made only with your explicit consent</li>
                    </ul>
                </section>

                {/* Section 8: Data Retention */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>8. Data Retention</h2>
                    <p style={paragraphStyle}>
                        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
                    </p>
                    <ul style={listStyle}>
                        <li><strong>Newsletter Subscribers:</strong> Until you unsubscribe or request deletion</li>
                        <li><strong>Analytics Data:</strong> Aggregated and anonymized data may be retained indefinitely for statistical purposes</li>
                        <li><strong>Cookie Data:</strong> As specified in each cookie's settings (typically 1-24 months)</li>
                    </ul>
                </section>

                {/* Section 9: Your Privacy Rights */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>9. Your Privacy Rights</h2>
                    <p style={paragraphStyle}>
                        Depending on your location, you have the following rights regarding your personal data:
                    </p>

                    <div style={highlightBoxStyle}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-accent-teal)', marginBottom: '1rem' }}>
                            🔐 Your Rights Include:
                        </h3>
                        <ul style={{ ...listStyle, marginLeft: '1.5rem' }}>
                            <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you</li>
                            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</li>
                            <li><strong>Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal data</li>
                            <li><strong>Right to Data Portability:</strong> Request your data in a structured, machine-readable format</li>
                            <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time (without affecting prior processing)</li>
                            <li><strong>Right to Lodge a Complaint:</strong> File a complaint with your local data protection authority</li>
                        </ul>
                    </div>

                    <h3 style={subheadingStyle}>9.1 How to Exercise Your Rights</h3>
                    <p style={paragraphStyle}>
                        To exercise any of these rights, please contact us at <a href="mailto:gavinmcauley9@gmail.com" style={{ color: 'var(--color-accent-teal)', fontWeight: '600' }}>gavinmcauley9@gmail.com</a>. We will respond to your request within 30 days.
                    </p>
                </section>

                {/* Section 10: Data Security */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>10. Data Security</h2>
                    <p style={paragraphStyle}>
                        We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
                    </p>
                    <ul style={listStyle}>
                        <li>Encryption of data in transit (HTTPS/SSL)</li>
                        <li>Secure hosting infrastructure</li>
                        <li>Regular security reviews and updates</li>
                        <li>Limited access to personal data by authorized personnel only</li>
                    </ul>
                    <p style={paragraphStyle}>
                        However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.
                    </p>
                </section>

                {/* Section 11: Children's Privacy */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>11. Children's Privacy</h2>
                    <p style={paragraphStyle}>
                        Our website is not intended for children under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal data, please contact us, and we will delete such information.
                    </p>
                </section>

                {/* Section 12: International Data Transfers */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>12. International Data Transfers</h2>
                    <p style={paragraphStyle}>
                        Your information may be transferred to and processed in countries other than Australia. These countries may have different data protection laws. When we transfer your data internationally, we ensure appropriate safeguards are in place, such as:
                    </p>
                    <ul style={listStyle}>
                        <li>Standard Contractual Clauses approved by the European Commission</li>
                        <li>Adequacy decisions by relevant authorities</li>
                        <li>Compliance with applicable privacy frameworks</li>
                    </ul>
                </section>

                {/* Section 13: Changes to This Policy */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>13. Changes to This Privacy Policy</h2>
                    <p style={paragraphStyle}>
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                    </p>
                    <ul style={listStyle}>
                        <li>Posting the updated policy on this page with a new "Last Updated" date</li>
                        <li>Sending an email notification (if you have subscribed to our newsletter)</li>
                    </ul>
                    <p style={paragraphStyle}>
                        We encourage you to review this Privacy Policy periodically.
                    </p>
                </section>

                {/* Section 14: Contact Information */}
                <section style={sectionStyle}>
                    <h2 style={headingStyle}>14. Contact Us</h2>
                    <p style={paragraphStyle}>
                        If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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

                {/* Back to Home CTA */}
                <div style={{ textAlign: 'center', marginTop: '4rem', paddingTop: '3rem', borderTop: '2px solid rgba(0,0,0,0.1)' }}>
                    <Link
                        to="/"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2.5rem',
                            background: 'var(--color-primary)',
                            color: '#FFFFFF',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontSize: '1.1rem',
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
