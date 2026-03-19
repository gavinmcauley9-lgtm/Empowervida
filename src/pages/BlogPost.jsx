import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import SEO from '../components/SEO';
import EmailCapture from '../components/EmailCapture';
import { POSTS, CATEGORIES } from '../data/posts';

// Helper function to get related posts based on category and exclude current post
function getRelatedPosts(currentPost, allPosts, count = 3) {
  // First, try to get posts from the same category
  const sameCategoryPosts = allPosts.filter(
    p => p.category === currentPost.category && p.id !== currentPost.id
  );

  // Sort by date (most recent first) and take the first 'count' posts
  const sortedPosts = sameCategoryPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA;
  });

  // If we don't have enough same-category posts, fill with recent posts from other categories
  if (sortedPosts.length < count) {
    const otherPosts = allPosts
      .filter(p => p.id !== currentPost.id && !sameCategoryPosts.includes(p))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, count - sortedPosts.length);
    return [...sortedPosts, ...otherPosts];
  }

  return sortedPosts.slice(0, count);
}

export default function BlogPost() {
  const { slug } = useParams();
  // Look up by slug first, fall back to numeric id for backwards compatibility
  const post = POSTS.find(p => p.slug === slug) || POSTS.find(p => p.id.toString() === slug);

  // Get related posts for internal linking
  const relatedPosts = post ? getRelatedPosts(post, POSTS, 3) : [];

  // Auto-redirect numeric URLs to slug URLs (e.g., /blog/3 → /blog/brain-pills-that-work-vs-snake-oil)
  if (post && post.slug && slug !== post.slug) {
    return <Navigate to={`/blog/${post.slug}`} replace />;
  }

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '8rem', textAlign: 'center', backgroundColor: '#000000', minHeight: '100vh', color: '#FFFFFF' }}>
        <h1>Post not found (slug: {slug})</h1>
        <p>The requested article could not be located.</p>
        <Link to="/blog" style={{ color: '#FF5F00' }}>Back to Intel</Link>
      </div>
    );
  }

  const categoryLabel = CATEGORIES.find(c => c.id === post.category)?.label;

  // 1. Generate Table of Contents & Inject IDs
  const { headings, modifiedContent } = React.useMemo(() => {
    if (!post?.content) return { headings: [], modifiedContent: '' };

    const headingsList = [];
    const contentWithIds = post.content.replace(/<h2([^>]*)>(.*?)<\/h2>/g, (match, attrs, title) => {
      // Create slug from title
      const cleanTitle = title.replace(/<[^>]*>/g, '');
      const id = cleanTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      headingsList.push({ id, title: cleanTitle });
      return `<h2 id="${id}"${attrs}>${title}</h2>`;
    });

    return { headings: headingsList, modifiedContent: contentWithIds };
  }, [post]);

  // 2. Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://empowervida.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://empowervida.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://empowervida.com/blog/${post.slug || post.id}`
      }
    ]
  };

  // 3. Article Schema (Enhanced for E-E-A-T + Rich Results)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? `https://empowervida.com${post.image}` : "https://empowervida.com/empowervida_hero_logo.png",
    "datePublished": post.date,
    "dateModified": "2026-03-19",
    "lastReviewed": "2026-03-19",
    "author": {
      "@type": "Physician",
      "name": "Dr. Gavin McAuley, MBChB (MD equivalent)",
      "medicalSpecialty": "Longevity & Metabolic Health",
      "jobTitle": "GP & Longevity Specialist",
      "url": "https://empowervida.com/about",
      "sameAs": "https://www.linkedin.com/in/gavin-mcauley-62147151/",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Aberdeen",
        "url": "https://www.abdn.ac.uk/"
      }
    },
    "reviewedBy": {
      "@type": "Physician",
      "name": "Dr. Gavin McAuley, MBChB (MD equivalent)",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "University of Aberdeen"
      }
    },
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "patient"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EMPOWERVIDA",
      "url": "https://empowervida.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://empowervida.com/empowervida_hero_logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://empowervida.com/blog/${post.slug || post.id}`
    }
  };

  // 4. FAQ Schema — auto-generate from H2 headings for "People Also Ask" rich results
  const faqSchema = headings.length > 1 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": headings.slice(0, 5).map(h => ({
      "@type": "Question",
      "name": h.title.endsWith('?') ? h.title : `What is ${h.title}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": post.excerpt || post.title
      }
    }))
  } : null;

  return (
    <div style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh', color: 'var(--color-text)', fontFamily: '"Inter", sans-serif' }}>
      <div className="container" style={{ paddingTop: 'clamp(6rem, 10vw, 8rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', maxWidth: '900px' }}>
        <SEO
          title={`${post.title} | EMPOWERVIDA`}
          description={post.excerpt}
          keywords={`${post.category}, longevity, health optimization, ${post.title}`}
          canonical={`/blog/${post.slug || post.id}`}
          ogImage={post.image || '/empowervida_hero_logo.png'}
          ogType="article"
          author="Dr. Gavin McAuley"
          publishedTime={post.date}
          schemaData={[articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]}
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

          {/* Medical Verification Badge */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 0',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'var(--color-accent-teal)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px'
            }}>
              Dr
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--color-text)' }}>
                Dr. Gavin McAuley, MBChB (MD equivalent)
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-accent-teal)', fontWeight: 600 }}>
                ✓ Medically Reviewed Protocol
              </span>
            </div>
          </div>

          <div style={{
            width: '60px',
            height: '4px',
            background: 'var(--color-accent-orange)',
            marginBottom: '2rem'
          }}></div>

          <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2rem' }}>
            Published: {post.date} • <span style={{ color: 'var(--color-accent-teal)' }}>Last updated: March 2026</span> • Dr. Gavin
          </div>

          {post.image && (
            <div style={{ marginBottom: '3rem', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <img src={post.image} alt={post.title} loading="lazy" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          )}

          {/* Clinical Abstract / TLDR */}
          {post.excerpt && (
            <div style={{
              background: '#F8F9FA',
              borderLeft: '4px solid #20B2AA',
              padding: '1.5rem',
              margin: '0 0 2rem 0',
              borderRadius: '0 8px 8px 0',
              fontSize: '1.05rem',
              lineHeight: '1.6',
              color: '#374151',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
            }}>
              <h3 style={{
                margin: '0 0 0.5rem 0',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#20B2AA',
                fontWeight: 800
              }}>
                Clinical Abstract
              </h3>
              {post.excerpt}
            </div>
          )}

          {/* Table of Contents */}
          {headings.length > 0 && (
            <div style={{
              background: 'rgba(32, 178, 170, 0.05)',
              borderLeft: '4px solid var(--color-accent-teal)',
              padding: '1.5rem',
              borderRadius: '0 8px 8px 0',
              marginBottom: '3rem'
            }}>
              <h4 style={{
                margin: '0 0 1rem 0',
                color: 'var(--color-accent-teal)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontSize: '0.9rem'
              }}>
                Table of Contents
              </h4>
              <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                {headings.map(h => (
                  <li key={h.id} style={{ marginBottom: '0.5rem' }}>
                    <a
                      href={`#${h.id}`}
                      style={{
                        color: 'var(--color-text)',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        fontWeight: 500
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-teal)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--color-text)'}
                    >
                      {h.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div
            className="blog-content"
            style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text)' }}
            dangerouslySetInnerHTML={{ __html: modifiedContent }}
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
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: 'var(--color-text)', textTransform: 'uppercase' }}>Ready to Optimise?</h3>
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

        {/* Clinical References Accordion */}
        {post.references && (
          <div className="container" style={{ maxWidth: '900px', margin: '0 auto 4rem auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
            <details style={{ cursor: 'pointer', color: 'var(--color-text-muted)' }}>
              <summary style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '1rem',
                userSelect: 'none',
                outline: 'none'
              }}>
                🔬 Clinical References ({post.references.length})
              </summary>
              <ol style={{
                paddingLeft: '1.5rem',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)',
                lineHeight: '1.6',
                fontFamily: '"Inter", sans-serif'
              }}>
                {post.references.map((ref, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem' }}>
                    {ref.text} {ref.url && <a href={ref.url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent-teal)', textDecoration: 'none' }}>↗ Source</a>}
                  </li>
                ))}
              </ol>
            </details>
          </div>
        )}

        {/* EMAIL CAPTURE - After reading the post */}
        <EmailCapture variant="default" />

        {/* Medical Disclaimer */}
        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'rgba(107, 114, 128, 0.05)',
          borderRadius: '8px',
          border: '1px solid rgba(107, 114, 128, 0.1)'
        }}>
          <p style={{
            fontSize: '0.85rem',
            color: 'var(--color-text-muted)',
            lineHeight: '1.6',
            margin: 0,
            fontStyle: 'italic'
          }}>
            <strong>Medical Disclaimer:</strong> This article reflects the author's clinical experience and personal research. It is intended for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult your healthcare provider before starting any supplement regimen, especially if you have existing health conditions or take medications.
          </p>
        </div>

        {/* Related Posts Section - Internal Linking for SEO */}
        {relatedPosts.length > 0 && (
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
              Continue Reading
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
                    to={`/blog/${relatedPost.slug || relatedPost.id}`}
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
        )}

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
