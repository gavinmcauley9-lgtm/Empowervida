import React from 'react';
import Image from 'next/image';
import { PUBLISHED_POSTS } from '../../../src/data/posts';
import { notFound } from 'next/navigation';

// 1. Generate Static Params (SSG)
// This tells Next.js at build time exactly which URLs to pre-render as static HTML files.
export async function generateStaticParams() {
  return PUBLISHED_POSTS.map((post) => ({
    slug: post.slug || post.id.toString(),
  }));
}

// 2. Dynamic Metadata Generation
// This automatically injects the perfect Title, Description, and OpenGraph tags into the HTML <head>
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = PUBLISHED_POSTS.find((p) => p.slug === slug || p.id.toString() === slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.seoTitle || `${post.title} | EMPOWERVIDA Clinical Insights`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `https://empowervida.com/blog/${slug}/`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://empowervida.com/blog/${post.slug || slug}/`,
      type: 'article',
      publishedTime: post.date,
      images: [
        {
          url: post.image ? `https://empowervida.com${post.image}` : 'https://empowervida.com/water_refraction.png',
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
  };
}

// 3. The Server Component
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = PUBLISHED_POSTS.find((p) => p.slug === slug || p.id.toString() === slug);

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
    <article
      className="blog-article"
      style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)', paddingBottom: '4.5rem' }}
    >
      {/* Inject JSON-LD Schema directly into the server HTML */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* Hero Header */}
      <header className="blog-article-hero">
        {post.image && (
          <Image 
            src={post.image} 
            alt={post.imageAlt || post.title} 
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', opacity: 0.68 }} 
          />
        )}
        <div className="blog-article-hero-overlay">
          <div className="blog-article-shell">
            <span className="blog-article-category">
              {post.category}
            </span>
            <h1 className="blog-article-title">
              {post.title}
            </h1>
          </div>
        </div>
      </header>

      {/* ── AUTHOR BYLINE ── E-E-A-T signal for Google */}
      <div className="blog-article-shell blog-article-byline-wrap">
        <div className="blog-article-byline-card">
          {/* Author photo */}
          <div className="blog-article-byline-avatar">
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
            <p className="blog-article-byline-bio">
              16 years in Emergency Medicine &amp; General Practice · Clinical focus: Longevity &amp; Metabolic Health
            </p>
            <div className="blog-article-byline-meta">
              <span>📅 Published: {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <a href="/about" className="blog-article-byline-link">
                Meet Dr. Gavin →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="blog-article-shell blog-article-body">
        <div 
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        {/* ── REFERENCES ── if post has them */}
        {post.references && post.references.length > 0 && (
          <section className="blog-article-references" aria-labelledby="clinical-references-heading">
            <h2 id="clinical-references-heading" className="blog-article-references-title">
              Clinical References
            </h2>
            <ol className="blog-article-references-list">
              {post.references.map((ref, i) => (
                <li key={i} className="blog-article-references-item">
                  {ref.url ? (
                    <a href={ref.url} target="_blank" rel="noopener noreferrer">
                      {ref.text}
                    </a>
                  ) : ref.text || ref}
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* ── MEDICAL DISCLAIMER ── required for Google E-E-A-T on health content */}
        <div className="blog-article-disclaimer">
          <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.4rem' }}>
            ⚕️ Medical Disclaimer
          </strong>
          This article is written for educational purposes by a licensed physician (MBChB). 
          It does not constitute medical advice, diagnosis, or treatment. Always consult 
          your own doctor before starting any supplement protocol, particularly if you 
          have underlying health conditions or take prescribed medications.
        </div>
      </div>
    </article>
  );
}
