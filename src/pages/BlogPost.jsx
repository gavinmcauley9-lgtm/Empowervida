import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { POSTS, CATEGORIES } from '../data/posts';

export default function BlogPost() {
  const { id } = useParams();
  const post = POSTS.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '8rem', textAlign: 'center', backgroundColor: '#000000', minHeight: '100vh', color: '#FFFFFF' }}>
        <h1>Post not found</h1>
        <Link to="/blog" style={{ color: '#FF5F00' }}>Back to Intel</Link>
      </div>
    );
  }

  const categoryLabel = CATEGORIES.find(c => c.id === post.category)?.label;

  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: '#E0E0E0', fontFamily: '"Inter", sans-serif' }}>
      <div className="container" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '900px' }}>
        <Helmet>
          <title>{post.title} | Medicine 3.0</title>
          <meta name="description" content={post.excerpt} />
        </Helmet>

        <Link to="/blog" style={{
          display: 'inline-block',
          marginBottom: '2rem',
          color: '#FFFFFF',
          fontSize: '0.85rem',
          textDecoration: 'none',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          transition: 'color 0.2s ease'
        }}
          onMouseEnter={(e) => e.target.style.color = '#FF5F00'}
          onMouseLeave={(e) => e.target.style.color = '#FFFFFF'}
        >
          ← BACK TO INTEL
        </Link>

        {/* Journal Card Container */}
        <div style={{
          background: '#1A1A1A',
          borderRadius: '4px',
          padding: '4rem',
          border: '1px solid #333333'
        }}>

          <header style={{ marginBottom: '3rem', borderBottom: '1px solid #333333', paddingBottom: '2rem' }}>
            <div style={{
              color: '#FF5F00',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              fontWeight: '700',
              marginBottom: '1rem',
              letterSpacing: '0.1em'
            }}>
              {categoryLabel}
            </div>
            <h1 style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: '1.2',
              marginBottom: '1rem',
              color: '#FFFFFF',
              fontWeight: 800,
              letterSpacing: '-0.02em'
            }}>
              {post.title}
            </h1>
            <div style={{ color: '#888888', fontSize: '0.9rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {post.date} • Dr. Gavin
            </div>
          </header>

          {post.image && (
            <div style={{ marginBottom: '3rem', borderRadius: '4px', overflow: 'hidden', border: '1px solid #333333' }}>
              <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          )}

          <article
            className="blog-content"
            style={{ lineHeight: '1.8', fontSize: '1.125rem', color: '#E0E0E0' }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {post.cta && (
            <div style={{
              marginTop: '4rem',
              textAlign: 'center',
              padding: '3rem',
              background: '#000000',
              borderRadius: '4px',
              border: '1px solid #FF5F00'
            }}>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: '#FFFFFF', textTransform: 'uppercase' }}>Ready to Optimize?</h3>
              <p style={{ marginBottom: '2rem', color: '#CCCCCC' }}>Take the next step in your health journey.</p>
              <Link to={post.cta.link} className="btn-primary" style={{
                display: 'inline-block',
                textDecoration: 'none',
                fontSize: '1rem',
                padding: '1rem 2.5rem',
                borderRadius: '2px',
                background: '#FF5F00',
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
            color: #FFFFFF;
            font-size: 1.8rem;
            margin-top: 3.5rem;
            margin-bottom: 1.5rem;
            font-weight: 700;
            letter-spacing: -0.02em;
            text-transform: uppercase;
          }
          .blog-content h3 {
            color: #FFFFFF;
            font-size: 1.4rem;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          .blog-content p {
            margin-bottom: 1.8rem;
            color: #E0E0E0;
          }
          .blog-content ul, .blog-content ol {
            margin-bottom: 2rem;
            padding-left: 1.5rem;
            color: #E0E0E0;
          }
          .blog-content li {
            margin-bottom: 0.8rem;
          }
          .blog-content strong {
            color: #FFFFFF;
            font-weight: 700;
          }
          .blog-content a {
            color: #FF5F00;
            text-decoration: underline;
          }
          /* Highlight Box Style */
          .blog-content blockquote {
            background: #000000;
            color: #FFFFFF;
            border-left: 4px solid #FF5F00;
            padding: 2rem;
            margin: 2.5rem 0;
            font-style: normal;
            border-radius: 0 4px 4px 0;
          }
          .blog-content blockquote p {
            margin-bottom: 0;
          }
        `}</style>
      </div>
    </div>
  );
}
