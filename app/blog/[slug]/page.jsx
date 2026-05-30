import React from 'react';
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
    "dateModified": post.date,
    "author": {
      "@type": "Physician",
      "name": "Dr. Gavin McAuley",
      "url": "https://empowervida.com/about"
    },
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "EmpowerVida",
      "logo": {
        "@type": "ImageObject",
        "url": "https://empowervida.com/empowervida_hero_logo.png"
      }
    },
    "description": post.excerpt
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
          <img 
            src={post.image} 
            alt={post.title} 
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} 
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
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
              Published: {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div style={{ maxWidth: '800px', margin: '4rem auto', padding: '0 2rem' }}>
        <div 
          className="blog-content"
          style={{ fontSize: '1.2rem', lineHeight: '1.8' }}
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </div>
  );
}
