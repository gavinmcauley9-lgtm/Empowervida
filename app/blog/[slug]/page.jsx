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

  // Apply the editorial reading treatment only to articles already reviewed.
  const editorialReadingLayout = [
    'sun-phobia-spf-vitamin-d-mood',
    'chronic-inflammation-symptoms-root-cause-fatigue-joint-pain',
    'seed-oils-inflammation-fatigue-weight-gain',
    'blood-sugar-spikes-normal-fasting-glucose-danger',
    'forest-bathing-biochemistry-shinrin-yoku',
  ].includes(post.slug) || /taurine/i.test(post.title);

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
      
      {/* Shared, accessible hero for every article: stable contrast and responsive type. */}
      <header className="article-hero" style={{ position: 'relative', width: '100%', isolation: 'isolate', overflow: 'hidden', backgroundColor: '#14352f' }}>
        {post.image && (
          <Image
            src={post.image}
            alt={post.imageAlt || post.title}
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center', zIndex: -2 }}
          />
        )}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: -1,
          background: 'linear-gradient(90deg, rgba(5,24,23,0.88) 0%, rgba(5,24,23,0.74) 58%, rgba(5,24,23,0.58) 100%)'
        }} />
        <div className="article-hero-inner" style={{ maxWidth: '960px', width: '100%', margin: '0 auto', position: 'relative' }}>
          <span style={{
            display: 'inline-block', color: '#FFFFFF', backgroundColor: '#116E65',
            padding: '0.45rem 0.75rem', borderRadius: '5px', textTransform: 'uppercase',
            fontWeight: 800, letterSpacing: '0.09em', fontSize: '0.8rem', lineHeight: 1.5
          }}>
            {post.category}
          </span>
          <h1 className="article-hero-title" style={{ color: '#FFFFFF', margin: '1.25rem 0 0', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.13, overflowWrap: 'break-word' }}>
            {post.title}
          </h1>
        </div>
      </header>
      <style>{`
        .article-hero { min-height: 340px; display: flex; align-items: flex-end; }
        .article-hero-inner { padding: clamp(5rem, 9vw, 7rem) 2rem clamp(2rem, 4vw, 3.5rem); }
        .article-hero-title { font-size: clamp(2rem, 3.3vw, 3.15rem); max-width: 900px; }
        @media (max-width: 600px) {
          .article-hero { min-height: 300px; }
          .article-hero-inner { padding: 5rem 1.25rem 2rem; }
          .article-hero-title { font-size: clamp(1.75rem, 7vw, 2.4rem); }
        }
      `}</style>

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
        <style>{`
          .blog-content a {
            color: var(--color-accent-teal);
            text-decoration: underline;
            display: inline !important;
            min-height: 0 !important;
            min-width: 0 !important;
            word-break: break-word;
          }
          ${editorialReadingLayout ? `
            .blog-content.editorial-reading { font-size: clamp(1.06rem, 1.5vw, 1.18rem); line-height: 1.85; }
            .blog-content.editorial-reading > p { margin: 0 0 1.55em !important; }
            .blog-content.editorial-reading > h2 { margin: 2.5em 0 0.8em !important; line-height: 1.24 !important; font-size: clamp(1.55rem, 2.5vw, 2rem) !important; }
            .blog-content.editorial-reading > h3 { margin: 2.1em 0 0.7em !important; line-height: 1.3 !important; }
            .blog-content.editorial-reading > ul, .blog-content.editorial-reading > ol { margin: 1.25rem 0 2rem !important; padding-left: 1.5rem; }
            .blog-content.editorial-reading li { margin-bottom: 0.75rem; }
            .blog-content.editorial-reading img { max-width: 100%; height: auto; border-radius: 12px; }
            .blog-content.editorial-reading > figure, .blog-content.editorial-reading > div:has(> img) { margin: 2.5rem 0 !important; }
            @media (max-width: 600px) {
              .blog-content.editorial-reading { font-size: 1.05rem; line-height: 1.8; }
              .blog-content.editorial-reading > h2 { margin-top: 2rem !important; }
            }
          ` : ''}
        `}</style>
        <div 
          className={editorialReadingLayout ? "blog-content editorial-reading" : "blog-content"}
          style={{ fontSize: editorialReadingLayout ? undefined : '1.2rem', lineHeight: editorialReadingLayout ? undefined : '1.8' }}
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
