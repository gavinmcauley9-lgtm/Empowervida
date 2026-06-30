"use client";

import React, { useState } from 'react';
import { trackNewsletterSignup } from '../utils/analytics';

const KIT_FORM_ACTION = 'https://app.kit.com/forms/9596301/subscriptions';

/**
 * BlogInlineCTA — A compact, attention-grabbing email capture 
 * designed to sit INSIDE blog post content (between H2 sections).
 * 
 * Email-only field for maximum conversion rate.
 * Styled to feel native to the article flow but visually distinct.
 */
const BlogInlineCTA = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || status === 'loading') return;

        setStatus('loading');

        try {
            await fetch(KIT_FORM_ACTION, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    email_address: email,
                }).toString(),
            });

            setStatus('success');
            setEmail('');
            trackNewsletterSignup('blog_inline_cta');
        } catch (err) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div style={{
                margin: '2.5rem 0',
                padding: '1.5rem 2rem',
                background: 'linear-gradient(135deg, rgba(32, 178, 170, 0.08) 0%, rgba(32, 178, 170, 0.15) 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(32, 178, 170, 0.25)',
                textAlign: 'center',
            }}>
                <p style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#0f766e',
                    margin: 0,
                }}>
                    ✅ You&apos;re in — check your inbox for Dr. Gavin&apos;s first email.
                </p>
            </div>
        );
    }

    return (
        <div style={{
            margin: '2.5rem 0',
            padding: '1.75rem 2rem',
            background: 'linear-gradient(135deg, #f0fdfa 0%, #e6f7f5 100%)',
            borderRadius: '12px',
            border: '2px solid #20B2AA',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Subtle accent bar */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #20B2AA, #FF4500)',
            }} />

            <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                marginBottom: '0.75rem',
            }}>
                <span style={{ fontSize: '1.3rem', lineHeight: 1 }}>📬</span>
                <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#1A3C34',
                    margin: 0,
                    lineHeight: 1.3,
                    fontFamily: '"Manrope", sans-serif',
                }}>
                    Enjoying this article? Get Dr. Gavin&apos;s weekly research brief — free.
                </h3>
            </div>

            <p style={{
                fontSize: '0.9rem',
                color: '#4A5568',
                margin: '0 0 1rem 0',
                lineHeight: 1.5,
            }}>
                Join 1,000+ readers getting physician-curated insights on longevity, metabolic health, and supplement science. No spam, unsubscribe anytime.
            </p>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    gap: '0.5rem',
                    flexWrap: 'wrap',
                }}
            >
                <input
                    type="email"
                    name="email_address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    aria-label="Email address for newsletter signup"
                    style={{
                        flex: '1 1 220px',
                        padding: '0.75rem 1rem',
                        fontSize: '0.95rem',
                        borderRadius: '8px',
                        border: '1.5px solid rgba(32, 178, 170, 0.3)',
                        background: '#FFFFFF',
                        color: '#1A3C34',
                        outline: 'none',
                        minWidth: '0',
                        transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => {
                        e.target.style.borderColor = '#20B2AA';
                        e.target.style.boxShadow = '0 0 0 3px rgba(32, 178, 170, 0.12)';
                    }}
                    onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(32, 178, 170, 0.3)';
                        e.target.style.boxShadow = 'none';
                    }}
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                        flex: '0 0 auto',
                        padding: '0.75rem 1.5rem',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        borderRadius: '8px',
                        border: 'none',
                        background: status === 'loading' ? '#94a3b8' : '#FF4500',
                        color: 'white',
                        cursor: status === 'loading' ? 'wait' : 'pointer',
                        boxShadow: '0 4px 12px rgba(255, 69, 0, 0.25)',
                        transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                        whiteSpace: 'nowrap',
                        letterSpacing: '0.02em',
                    }}
                    onMouseOver={(e) => {
                        if (status !== 'loading') {
                            e.target.style.transform = 'translateY(-1px)';
                            e.target.style.boxShadow = '0 6px 16px rgba(255, 69, 0, 0.35)';
                        }
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 12px rgba(255, 69, 0, 0.25)';
                    }}
                >
                    {status === 'loading' ? 'Joining...' : 'Subscribe Free →'}
                </button>
            </form>

            {status === 'error' && (
                <p style={{
                    color: '#DC2626',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    margin: '0.75rem 0 0 0',
                }}>
                    Something went wrong. Please try again.
                </p>
            )}
        </div>
    );
};

export default BlogInlineCTA;
