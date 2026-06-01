import React from 'react';
import Image from 'next/image';
import { POSTS } from '../../../src/data/posts';
import { notFound } from 'next/navigation';

// 1. Generate Static Params (SSG)
// This tells Next.js at build time exactly which URLs to pre-render as static HTML files.
export async function generateStaticParams() {
  return POSTS.map((post) => ({
    slug: post.slug || post.id.toString(),
  }));
}

// 2. Dynamic Metadata Generation
// This automatically injects the perfect Title, Description, and OpenGraph tags into the HTML <head>
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug || p.id.toString() === slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | EMPOWERVIDA Clinical Insights`,
    description: post.excerpt,
    alternates: {
      canonical: `https://empowervida.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://empowervida.com/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.image ? `https://empowervida.com${post.image}` : 'https://empowervida.com/water_refraction.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

// 3. The Server Component
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug || p.id.toString() === slug);

  if (!post) {
    notFound();
  }

  // Generate dynamic Article Schema for E-E-A-T
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    "headline": post.title,
    "image": post.image ? [`https://empowervida.com${post.image}`] : [],
    "datePublished": post.date,
    // dateModified — use a dedicated field if it exists, else fall back to datePublished
    "dateModified": post.dateModified || post.date,
    "author": {
      "@type": "Physician",
      "name": "Dr. Gavin McAuley",
      "url": "https://empowervida.com/about",
      "sameAs": [
        "https://www.linkedin.com/in/gavin-mcauley-62147151/",
        "https://drgavinmcauley.substack.com"
      ],
      "image": "https://empowervida.com/dr-gavin-mcauley.jpg"
    },
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "EmpowerVida",
      "logo": {
        "@type": "ImageObject",
        "url": "https://empowervida.com/empowervida_hero_logo.png"
      }
    },
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://empowervida.com/blog/${slug}`
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)', paddingBottom: '4rem' }}>
      {/* Inject JSON-LD Schema directly into the server HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Hero Header */}
      <div style={{ position: 'relative', height: '50vh', width: '100%', overflow: 'hidden' }}>
        {post.image && (
          <Image 
            src={post.image} 
            alt={post.title} 
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.7 }} 
          />
        )}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: '4rem 2rem',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.9))'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span style={{ color: 'var(--color-accent-teal)', textTransform: 'uppercase', fontWeight: 'bold' }}>
              {post.category}
            </span>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', margin: '1rem 0' }}>
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── AUTHOR BYLINE ── E-E-A-T signal for Google */}
      <div style={{ maxWidth: '800px', margin: '2.5rem auto 0', padding: '0 2rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1.25rem',
          padding: '1.25rem 1.5rem',
          borderRadius: '12px',
          border: '1px solid rgba(32, 178, 170, 0.25)',
          background: 'rgba(32, 178, 170, 0.04)',
          marginBottom: '2rem'
        }}>
          {/* Author photo */}
          <div style={{
            position: 'relative',
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            border: '2px solid var(--color-accent-teal)'
          }}>
            <Image
              src="/dr-gavin-mcauley.jpg"
              alt="Dr. Gavin McAuley"
              fill
              sizes="64px"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>

          {/* Author info */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--color-text)' }}>
                Dr. Gavin McAuley
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: '700',
                color: 'var(--color-accent-teal)',
                background: 'rgba(32,178,170,0.1)',
                padding: '0.2rem 0.6rem',
                borderRadius: '20px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                MBChB · Physician
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: '0.25rem 0 0', lineHeight: '1.4' }}>
              16 years in Emergency Medicine &amp; General Practice · Clinical focus: Longevity &amp; Metabolic Health
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.4rem', fontSize: '0.8rem', color: 'var(--color-text-muted)', flexWrap: 'wrap' }}>
              <span>📅 Published: {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <a href="/about" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none', fontWeight: '600' }}>
                Meet Dr. Gavin →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
        <div 
          className="blog-content"
          style={{ fontSize: '1.2rem', lineHeight: '1.8' }}
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* ── REFERENCES ── if post has them */}
        {post.references && post.references.length > 0 && (
          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '2px solid rgba(32,178,170,0.2)'
          }}>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1.25rem', color: 'var(--color-text)' }}>
              Clinical References
            </h2>
            <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {post.references.map((ref, i) => (
                <li key={i} style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>
                  {ref.url ? (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer"
                      style={{ color: 'var(--color-accent-teal)', textDecoration: 'underline' }}>
                      {ref.text}
                    </a>
                  ) : ref.text || ref}
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* ── MEDICAL DISCLAIMER ── required for Google E-E-A-T on health content */}
        <div style={{
          marginTop: '3rem',
          padding: '1.25rem 1.5rem',
          borderRadius: '10px',
          background: 'rgba(255, 152, 0, 0.06)',
          borderLeft: '4px solid #FF9800',
          fontSize: '0.85rem',
          color: 'var(--color-text-muted)',
          lineHeight: '1.6'
        }}>
          <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.4rem' }}>
            ⚕️ Medical Disclaimer
          </strong>
          This article is written for educational purposes by a licensed physician (MBChB). 
          It does not constitute medical advice, diagnosis, or treatment. Always consult 
          your own doctor before starting any supplement protocol, particularly if you 
          have underlying health conditions or take prescribed medications.
        </div>
      </div>
    </div>
  );
}
