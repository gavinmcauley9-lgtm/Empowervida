"use client";

import React from 'react';
import Link from 'next/link';
import { POSTS, CATEGORIES } from '../data/posts';

export default function RelatedPosts({ currentPostId, currentCategory, count = 3, title = "Continue Reading" }) {
    // Helper function to get related posts
    const getRelatedPosts = () => {
        // Filter out current post if provided
        let availablePosts = currentPostId 
            ? POSTS.filter(p => p.id !== currentPostId && p.slug !== currentPostId) 
            : [...POSTS];

        let sortedPosts = [];

        // If category is provided, prioritize posts from that category
        if (currentCategory) {
            const sameCategoryPosts = availablePosts.filter(p => p.category === currentCategory);
            sortedPosts = sameCategoryPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
            
            // Fill with other categories if needed
            if (sortedPosts.length < count) {
                const otherPosts = availablePosts
                    .filter(p => p.category !== currentCategory)
                    .sort((a, b) => new Date(b.date) - new Date(a.date));
                sortedPosts = [...sortedPosts, ...otherPosts];
            }
        } else {
            // Just return the most recent posts
            sortedPosts = availablePosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        }

        return sortedPosts.slice(0, count);
    };

    const relatedPosts = getRelatedPosts();

    if (relatedPosts.length === 0) return null;

    return (
        <div style={{
            marginTop: '4rem',
            paddingTop: '3rem',
            borderTop: '1px solid rgba(0,0,0,0.1)'
        }}>
            <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: 'var(--color-text)',
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontFamily: '"Manrope", sans-serif'
            }}>
                {title}
            </h3>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1.5rem'
            }}>
                {relatedPosts.map(relatedPost => {
                    const relatedCategory = CATEGORIES.find(c => c.id === relatedPost.category);
                    return (
                        <Link
                            key={relatedPost.id}
                            href={`/blog/${relatedPost.slug || relatedPost.id}`}
                            style={{
                                display: 'block',
                                textDecoration: 'none',
                                background: 'rgba(255,255,255,0.8)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {relatedPost.image && (
                                <div style={{
                                    height: '120px',
                                    overflow: 'hidden'
                                }}>
                                    <img
                                        src={relatedPost.image}
                                        alt={relatedPost.title}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            )}
                            <div style={{ padding: '1rem' }}>
                                <span style={{
                                    fontSize: '0.7rem',
                                    fontWeight: 600,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-accent-teal)'
                                }}>
                                    {relatedCategory?.label || relatedPost.category}
                                </span>
                                <h4 style={{
                                    fontSize: '0.95rem',
                                    fontWeight: 700,
                                    color: 'var(--color-text)',
                                    margin: '0.5rem 0 0 0',
                                    lineHeight: 1.3,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden'
                                }}>
                                    {relatedPost.title}
                                </h4>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
