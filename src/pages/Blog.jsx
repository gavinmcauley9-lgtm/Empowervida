import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { POSTS, CATEGORIES } from '../data/posts';
import SEO from '../components/SEO';

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredPosts = activeCategory === 'all'
        ? POSTS
        : POSTS.filter(post => post.category === activeCategory);
    // ... (rest of the file until the grid)

    // ... inside the return ...
    {/* Posts Grid - Skip first post (it's featured) */ }
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {filteredPosts.slice(1).map(post => (
            <Link
                key={post.id}
                to={`/blog/${post.id}`}
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'var(--color-bg)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    height: '100%',
                    cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 6px 25px rgba(32, 178, 170, 0.15)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                }}
            >
                {/* Thumbnail Image */}
                {post.image && (
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
                )}

                <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.category} | {post.date}</p>
                    <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--color-text)', lineHeight: '1.3', fontFamily: '"Manrope", sans-serif', fontWeight: 700 }}>{post.title}</h2>
                    <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1 }}>{post.excerpt}</p>
                    <div style={{ marginTop: '1.5rem', color: 'var(--color-accent-teal)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        READ PROTOCOL <span style={{ fontSize: '1.2em' }}>→</span>
                    </div>
                </div>
            </Link>
        ))}
    </div>

    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "The Journal - EMPOWERVIDA",
        "description": "Evidence-based longevity protocols and health optimization insights from Dr. Gavin McAuley.",
        "url": "https://empowervida.com/blog"
    };

    return (
        <div style={{
            backgroundColor: 'var(--color-bg)',
            minHeight: '100vh',
            color: 'var(--color-text)',
            fontFamily: '"Inter", sans-serif'
        }}>
            <SEO
                title="The Journal - Longevity & Health Optimization | EMPOWERVIDA"
                description="Evidence-based articles on mitochondrial health, brain optimization, cellular renewal, and longevity science. Written by Dr. Gavin McAuley."
                keywords="longevity blog, mitochondrial health articles, anti-aging science, brain health optimization, cellular health, supplement protocols, health journal"
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

            <div className="container" style={{ paddingBottom: '4rem' }}>

                {/* Featured Post - Hero Card */}
                {filteredPosts.length > 0 && (
                    <Link
                        to={`/blog/${filteredPosts[0].id}`}
                        style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            display: 'grid',
                            gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                            gap: '2rem',
                            padding: '2rem',
                            background: 'linear-gradient(135deg, rgba(0, 128, 128, 0.05) 0%, rgba(255,255,255,1) 100%)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            border: '2px solid var(--color-accent-teal)',
                            boxShadow: '0 8px 30px rgba(0, 128, 128, 0.15)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            marginBottom: '4rem',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 128, 128, 0.25)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 128, 128, 0.15)';
                        }}
                    >
                        {filteredPosts[0].image && (
                            <img
                                src={filteredPosts[0].image}
                                alt={filteredPosts[0].title}
                                loading="eager"
                                style={{
                                    width: '100%',
                                    height: '400px',
                                    objectFit: 'cover',
                                    borderRadius: '12px'
                                }}
                            />
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                            <div style={{ color: 'var(--color-accent-teal)', fontWeight: 700, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Read Article →
                            </div>
                        </div>
                    </Link>
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
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                            {filteredPosts.slice(1).map(post => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.id}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        display: 'block',
                                        height: '100%'
                                    }}
                                >
                                    <article
                                        style={{
                                            background: 'var(--color-bg)',
                                            borderRadius: '12px',
                                            overflow: 'hidden',
                                            border: '1px solid var(--color-border)',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.boxShadow = '0 6px 25px rgba(32, 178, 170, 0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
                                        }}
                                    >
                                        {/* Thumbnail Image */}
                                        {post.image && (
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
                                        )}

                                        <div style={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--color-accent-teal)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.category} | {post.date}</p>
                                            <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: 'var(--color-text)', lineHeight: '1.3', fontFamily: '"Manrope", sans-serif', fontWeight: 700 }}>{post.title}</h2>
                                            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', lineHeight: '1.6', flexGrow: 1 }}>{post.excerpt}</p>
                                            <div style={{ marginTop: '1.5rem', color: 'var(--color-accent-teal)', fontSize: '0.85rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                READ PROTOCOL <span style={{ fontSize: '1.2em' }}>→</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </main>

                    {/* Sidebar */}
                    <aside style={{ position: 'relative', minWidth: '300px' }}>
                        <div style={{ position: 'sticky', top: '2rem' }}>

                            {/* Email Capture */}
                            <div style={{
                                backgroundColor: 'var(--color-bg-alt)',
                                padding: '2rem',
                                border: '1px solid var(--color-border)',
                                borderRadius: '12px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                marginBottom: '2rem'
                            }}>
                                <h4 style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '0.5rem',
                                    color: 'var(--color-text)',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    fontFamily: '"Manrope", sans-serif'
                                }}>
                                    Weekly Longevity Brief
                                </h4>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--color-text-muted)',
                                    marginBottom: '1.5rem',
                                    lineHeight: 1.5
                                }}>
                                    5 minutes of science for 5 years of health. Join the Inner Circle.
                                </p>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: '#FFFFFF',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: '8px',
                                        color: 'var(--color-text)',
                                        marginBottom: '1rem',
                                        fontSize: '0.9rem'
                                    }}
                                />
                                <button className="btn-primary" style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    background: 'var(--color-accent-teal)',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    padding: '0.8rem',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem'
                                }}>
                                    Join the Inner Circle
                                </button>
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
