"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PUBLISHED_POSTS, CATEGORIES } from '../data/posts';
import SEO from '../components/SEO';

export default function Blog() {
    const navigate = useRouter();
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredPosts = activeCategory === 'all'
        ? PUBLISHED_POSTS
        : PUBLISHED_POSTS.filter(post => post.category === activeCategory);


    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "The Journal - EMPOWERVIDA",
        "description": "Evidence-based longevity protocols and health optimization insights from Dr. Gavin McAuley.",
        "url": "https://empowervida.com/blog"
    };

    return (
        <div style={{
            background: 'linear-gradient(to bottom, #FFFFFF 0%, rgba(241, 245, 249, 0.7) 8%, #F1F5F9 15%)',
            minHeight: '100vh',
            color: 'var(--color-text)',
            fontFamily: '"Inter", sans-serif'
        }}>
            <SEO
                title="The Journal - Longevity & Health Optimization | EMPOWERVIDA"
                description="Evidence-based articles on mitochondrial health, brain optimization, cellular renewal, and longevity science. Written by Dr. Gavin McAuley."
                keywords="longevity blog, mitochondrial health articles, anti-ageing science, brain health optimization, cellular health, supplement protocols, health journal"
                canonical="/blog"
                ogImage="/dna_bg_user.jpg"
                schemaData={collectionSchema}
            />
            {/* Hero Section */}
            <section style={{
                position: 'relative',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 2rem',
                overflow: 'hidden',
                marginBottom: '4rem'
            }}>
                {/* Background Image */}
                <div className="ken-burns-active" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/dna_bg_user.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.8
                }}></div>

                {/* Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.6) 50%, #FFFFFF 100%)',
                    zIndex: 1
                }}></div>

                <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }} data-aos="fade-up">
                    <h1 style={{
                        fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                        marginBottom: '1rem',
                        color: 'var(--color-text)',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em',
                        fontFamily: '"Manrope", sans-serif'
                    }}>
                        THE JOURNAL
                    </h1>
                    <p style={{
                        color: 'var(--color-accent-teal)',
                        fontSize: '1.2rem',
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        High-signal protocols for the modern human.
                    </p>
                </div>
            </section>

            <div className="container" style={{ paddingBottom: '4rem', position: 'relative', zIndex: 101 }}>

                {/* Featured Post - Hero Card */}
                {filteredPosts.length > 0 && (
                    <a
                        href={`/blog/${filteredPosts[0].slug || filteredPosts[0].id}`}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)',
                            gap: '2rem',
                            background: '#FFFFFF',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            marginBottom: '4rem',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                        }}
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        {filteredPosts[0].image && (
                            <div style={{
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                minHeight: '400px',
                                position: 'relative'
                            }}>
                                <img
                                    src={filteredPosts[0].image}
                                    alt={filteredPosts[0].title}
                                    loading="eager"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '12px',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0
                                    }}
                                />
                            </div>
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem' }}>
                            <div style={{
                                display: 'inline-block',
                                background: 'var(--color-accent-teal)',
                                color: '#FFFFFF',
                                padding: '0.5rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                marginBottom: '1rem',
                                width: 'fit-content'
                            }}>
                                Featured
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                                {filteredPosts[0].category} | {filteredPosts[0].date}
                            </p>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-text)', lineHeight: '1.2', fontFamily: '"Manrope", sans-serif', fontWeight: 800 }}>
                                {filteredPosts[0].title}
                            </h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                {filteredPosts[0].excerpt}
                            </p>
                            <span
                                style={{ display: 'inline-block', color: 'var(--color-accent-teal)', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', textDecoration: 'none' }}
                            >
                                Read Article →
                            </span>
                        </div>
                    </a>
                )}

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                    {/* Main Content Area */}
                    <main style={{ gridColumn: '1 / -1', '@media (min-width: 1024px)': { gridColumn: 'span 2' } }}>
                        {/* Category Filter */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                            <h3 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>CATEGORIES</h3>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    style={{
                                        background: activeCategory === cat.id ? 'var(--color-accent-teal)' : 'transparent',
                                        color: activeCategory === cat.id ? '#FFFFFF' : 'var(--color-text-muted)',
                                        border: 'none',
                                        borderRadius: '20px',
                                        padding: '0.5rem 1.5rem',
                                        cursor: 'pointer',
                                        fontSize: '0.9rem',
                                        fontWeight: activeCategory === cat.id ? 600 : 400,
                                        transition: 'all 0.3s ease',
                                        boxShadow: activeCategory === cat.id ? '0 4px 12px rgba(32, 178, 170, 0.2)' : 'none',
                                    }}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Posts Grid - Skip first post (it's featured) */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                            gap: '2rem',
                            position: 'relative',
                            zIndex: 99999
                        }}>
                            {filteredPosts.slice(1).map(post => (
                                <a
                                    key={post.id}
                                    href={`/blog/${post.slug || post.id}`}
                                    className="protocol-card"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        background: '#FFFFFF',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        border: '1px solid var(--color-border)',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        height: '100%',
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        color: 'inherit'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = '0 6px 25px rgba(32, 178, 170, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                                    }}
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    {/* Thumbnail Image */}
                                    {post.image && (
                                        <div style={{ display: 'block', width: '100%' }}>
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                loading="lazy"
                                                style={{
                                                    width: '100%',
                                                    height: '200px',
                                                    objectFit: 'cover'
                                                }}
                                            />
                                        </div>
                                    )}

                                    <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.category} | {post.date}</p>

                                        <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--color-text)', lineHeight: '1.3', fontFamily: '"Manrope", sans-serif', fontWeight: 700 }}>{post.title}</h2>

                                        <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1 }}>{post.excerpt}</p>
                                        <div style={{ marginTop: '1.5rem', color: 'var(--color-accent-teal)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ display: 'inline-block', color: 'inherit', textDecoration: 'none' }}>
                                                READ PROTOCOL <span style={{ fontSize: '1.2em' }}>→</span>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside style={{ position: 'relative', minWidth: '300px' }}>
                        <div style={{ position: 'sticky', top: '2rem' }}>

                            {/* Email Capture */}
                            <div style={{
                                backgroundColor: 'var(--color-bg-alt)',
                                padding: '1rem',
                                border: '1px solid var(--color-border)',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                marginBottom: '2rem',
                                overflow: 'hidden'
                            }}>
                                <iframe 
                                    src="https://drgavinmcauley.substack.com/embed" 
                                    width="100%" 
                                    height="320" 
                                    style={{ border: 'none', background: 'white', borderRadius: '8px' }} 
                                    frameBorder="0" 
                                    scrolling="no"
                                    title="Weekly Longevity Brief"
                                ></iframe>
                            </div>

                            {/* Disclaimer */}
                            <div style={{
                                fontSize: '0.75rem',
                                color: '#666666',
                                lineHeight: '1.5',
                                fontStyle: 'italic'
                            }}>
                                <strong>Disclaimer:</strong> The content on this site is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider before starting any new protocol.
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </div>
    );
}
