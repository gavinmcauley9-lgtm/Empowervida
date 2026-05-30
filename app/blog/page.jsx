import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { POSTS } from '../../src/data/posts';

export const metadata = {
  title: 'Clinical Insights & Longevity Protocols | EMPOWERVIDA',
  description: 'Evidence-based articles on metabolic health, mitochondrial efficiency, and cognitive optimization by Dr. Gavin McAuley.',
  alternates: {
    canonical: 'https://empowervida.com/blog',
  },
  openGraph: {
    title: 'Clinical Insights & Longevity Protocols | EMPOWERVIDA',
    description: 'Evidence-based articles on metabolic health, mitochondrial efficiency, and cognitive optimization by Dr. Gavin McAuley.',
    url: 'https://empowervida.com/blog',
    images: [{ url: 'https://empowervida.com/water_refraction.png' }],
  },
};

export default function BlogListing() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', padding: '4rem 2rem', color: 'var(--color-text)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--color-accent-teal)' }}>
          Clinical Insights
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
          Evidence-based articles on metabolic health, mitochondrial efficiency, and cognitive optimization.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {POSTS.map((post) => (
            <div key={post.slug || post.id} style={{
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              overflow: 'hidden',
              background: 'rgba(0,0,0,0.2)'
            }}>
              {post.image && (
                <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    sizes="(max-width: 768px) 100vw, 300px"
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
              )}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-accent-teal)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {post.category}
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{post.title}</h2>
                <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  {post.excerpt}
                </p>
                <Link 
                  href={`/blog/${post.slug || post.id}`} 
                  style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  Read Clinical Guide &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
