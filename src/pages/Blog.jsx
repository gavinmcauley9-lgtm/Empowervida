import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { POSTS, CATEGORIES } from '../data/posts';

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredPosts = activeCategory === 'all'
        ? POSTS
        : POSTS.filter(post => post.category === activeCategory);

    return (
        <div style={{
            backgroundColor: '#000000',
            minHeight: '100vh',
            color: '#FFFFFF',
            fontFamily: '"Inter", sans-serif'
        }}>
            <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>

                <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: '3rem',
                        marginBottom: '1rem',
                        color: '#FFFFFF',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '-0.02em'
                    }}>
                        THE JOURNAL
                    </h1>
                    <p style={{
                        color: '#FF5F00',
                        fontSize: '1.2rem',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase'
                    }}>
                        High-signal protocols for the modern human.
                    </p>
                </header>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                    {/* Main Content Area */}
                    <main style={{ gridColumn: '1 / -1', '@media (min-width: 1024px)': { gridColumn: 'span 2' } }}>
                        {/* Category Filter */}
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                            <h3 style={{ color: '#FFFFFF', marginBottom: '1.5rem', borderBottom: '1px solid #C19A6B', paddingBottom: '0.5rem' }}>CATEGORIES</h3>
                            {CATEGORIES.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id)}
                                    style={{
                                        background: activeCategory === cat.id ? '#C19A6B' : 'transparent',
                                        color: activeCategory === cat.id ? '#0D2B1D' : '#E8E8E6',
                                        border: `1px solid ${activeCategory === cat.id ? '#C19A6B' : '#4A5D52'}`,
                                        padding: '0.5rem 1rem',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '0.85rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.05em',
                                        transition: 'all 0.2s ease',
                                        fontWeight: 600
                                    }}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Posts Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                            {filteredPosts.map(post => (
                                <Link to={`/blog/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <article style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #E8E8E6',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        padding: '2rem',
                                        transition: 'transform 0.2s ease, border-color 0.2s ease',
                                        cursor: 'pointer',
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-5px)';
                                            e.currentTarget.style.borderColor = '#C19A6B';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.borderColor = '#E8E8E6';
                                        }}
                                    >
                                        <p style={{ fontSize: '0.9rem', color: '#C19A6B', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{post.category} | {post.date}</p>
                                        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#0D2B1D' }}>{post.title}</h2>
                                        <p style={{ color: '#4A5D52', marginBottom: '1.5rem', flexGrow: 1 }}>{post.excerpt}</p>
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
                                backgroundColor: '#0D2B1D',
                                padding: '2rem',
                                border: '1px solid #FF5F00',
                                marginBottom: '2rem'
                            }}>
                                <h4 style={{
                                    fontSize: '1.2rem',
                                    marginBottom: '0.5rem',
                                    color: '#FFFFFF',
                                    textTransform: 'uppercase',
                                    fontWeight: 700
                                }}>
                                    Weekly Longevity Brief
                                </h4>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: '#CCCCCC',
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
                                        background: '#333333',
                                        border: '1px solid #555555',
                                        borderRadius: '2px',
                                        color: '#FFFFFF',
                                        marginBottom: '1rem',
                                        fontSize: '0.9rem'
                                    }}
                                />
                                <button className="btn-primary" style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    background: '#FF5F00',
                                    color: '#FFFFFF',
                                    border: 'none',
                                    padding: '0.8rem',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    cursor: 'pointer'
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
