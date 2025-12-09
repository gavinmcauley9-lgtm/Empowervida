import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { POSTS, CATEGORIES } from '../data/posts';

export default function BlogPost() {
  const { id } = useParams();
  // Use loose equality or string conversion to be safe
  const post = POSTS.find(p => p.id.toString() === id);

  console.log('BlogPost Debug:', { id, found: !!post });

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '8rem', textAlign: 'center', backgroundColor: '#000000', minHeight: '100vh', color: '#FFFFFF' }}>
        <h1>Post not found (ID: {id})</h1>
        <p>The requested article could not be located.</p>
        <Link to="/blog" style={{ color: '#FF5F00' }}>Back to Intel</Link>
      </div>
    );
  }

  const categoryLabel = CATEGORIES.find(c => c.id === post.category)?.label;

  // Article Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? `https://empowervida.com${post.image}` : "https://empowervida.com/hero_dna_botanical_1764284832727.png",
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": "Dr. Gavin McAuley",
      "jobTitle": "Physician & Longevity Specialist"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EMPOWERVIDA",
      "logo": {
        "@type": "ImageObject",
        "url": "https://empowervida.com/hero_dna_botanical_1764284832727.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://empowervida.com/blog/${post.id}`
    }
  };

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)', fontFamily: '"Inter", sans-serif' }}>
      <div className="container" style={{ paddingTop: 'clamp(6rem, 10vw, 8rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', maxWidth: '900px' }}>
        <SEO
          title={`${post.title} | EMPOWERVIDA`}
          description={post.excerpt}
          keywords={`${post.category}, longevity, health optimization, ${post.title}`}
          canonical={`/blog/${post.id}`}
          ogImage={post.image || '/hero_dna_botanical.png'}
          ogType="article"
          author="Dr. Gavin McAuley"
          schemaData={articleSchema}
        />

        <Link to="/blog" style={{
          display: 'inline-block',
          marginBottom: '2rem',
          color: 'var(--color-text-muted)',
          fontSize: '0.85rem',
          textDecoration: 'none',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          transition: 'color 0.2s ease',
        }}
          onMouseEnter={(e) => e.target.style.color = 'var(--color-primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}
        >
          ← BACK TO BLUEPRINT
        </Link>

        <div style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          padding: 'clamp(1.5rem, 4vw, 3rem)',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}>
          <div style={{
            color: 'var(--color-accent-teal)',
            fontWeight: '600',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            marginBottom: '1rem'
          }}>
            {post.category === 'all' ? 'General' : categoryLabel}
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            marginBottom: '2rem',
            lineHeight: '1.2',
            color: 'var(--color-text)',
            fontFamily: '"Manrope", sans-serif',
            fontWeight: 800
          }}>
            {post.title}
          </h1>

          <div style={{
            width: '60px',
            height: '4px',
            background: 'var(--color-accent-orange)',
            marginBottom: '2rem'
          }}></div>

          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>
            {post.date} • Dr. Gavin
          </div>

          {post.image && (
            <div style={{ marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <img src={post.image} alt={post.title} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          )}

          <div
            className="blog-content"
            style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text)' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.cta && (
            <div style={{
              marginTop: '4rem',
              textAlign: 'center',
              padding: '3rem',
              background: 'var(--color-bg-alt)',
              borderRadius: '12px',
              border: '1px solid var(--color-border)'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--color-text)', textTransform: 'uppercase' }}>Ready to Optimize?</h3>
              <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>Take the next step in your health journey.</p>
              <Link to={post.cta.link} className="btn-primary" style={{
                display: 'inline-block',
                textDecoration: 'none',
                fontSize: '1rem',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                background: 'var(--color-accent-orange)',
                color: '#FFFFFF',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {post.cta.text}
              </Link>
            </div>
          )}

        </div>

        <style>{`
          .blog-content h2 {
            color: var(--color-text);
            font-size: clamp(1.5rem, 4vw, 1.8rem);
            margin-top: 3.5rem;
            margin-bottom: 1.5rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            text-transform: none;
            font-family: 'Manrope', sans-serif;
          }
          .blog-content h3 {
            color: var(--color-text);
            font-size: clamp(1.2rem, 3.5vw, 1.4rem);
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
            font-family: 'Manrope', sans-serif;
          }
          .blog-content p {
            margin-bottom: 1.8rem;
            color: var(--color-text);
            font-size: clamp(1rem, 2vw, 1.125rem);
            line-height: 1.8;
          }
          .blog-content ul, .blog-content ol {
            margin-bottom: 2rem;
            padding-left: 1.5rem;
            color: var(--color-text);
            font-size: clamp(1rem, 2vw, 1.125rem);
          }
          .blog-content li {
            margin-bottom: 0.8rem;
            line-height: 1.8;
          }
          .blog-content strong {
            color: var(--color-text-hero);
            font-weight: 700;
          }
          .blog-content a {
            color: var(--color-accent-teal);
            text-decoration: underline;
            word-break: break-word;
          }
          /* Highlight Box Style */
          .blog-content blockquote {
            background: var(--color-bg-alt);
            color: var(--color-text);
            border-left: 4px solid var(--color-accent-orange);
            padding: 1.5rem;
            margin: 2.5rem 0;
            font-style: normal;
            border-radius: 0 8px 8px 0;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          }
          .blog-content blockquote p {
            margin-bottom: 0;
          }
          /* Mobile-specific optimizations */
          @media (max-width: 768px) {
            .blog-content h2 {
              margin-top: 2.5rem;
              margin-bottom: 1rem;
            }
            .blog-content h3 {
              margin-top: 2rem;
              margin-bottom: 0.75rem;
            }
            .blog-content p {
              margin-bottom: 1.5rem;
            }
            .blog-content ul, .blog-content ol {
              padding-left: 1.25rem;
              margin-bottom: 1.5rem;
            }
            .blog-content blockquote {
              padding: 1.25rem;
              margin: 2rem -1rem;
              border-radius: 0 8px 8px 0;
            }
            /* Ensure images don't overflow */
            .blog-content img {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
            }
            /* Make divs with inline styles responsive */
            .blog-content div[style*="padding"] {
              padding: 1.25rem !important;
            }
            .blog-content div[style*="margin"] {
              margin-left: 0 !important;
              margin-right: 0 !important;
            }
          }
          /* Ensure all images are responsive */
          .blog-content img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 2rem auto;
            border-radius: 12px;
          }
          /* Make tables responsive */
          .blog-content table {
            width: 100%;
            overflow-x: auto;
            display: block;
          }
        `}</style>
      </div>
    </div >
  );
}
