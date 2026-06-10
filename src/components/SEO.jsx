import { Helmet } from 'react-helmet-async';

/**
 * SEO Component — Injects per-page <head> metadata via react-helmet-async.
 *
 * This is the CANONICAL source of SEO tags for the Vite + prerender build.
 * A previous migration attempt to Next.js gutted this file, which caused
 * 43 pages to lose their canonical tags and be flagged as duplicates by Google.
 *
 * DO NOT replace this with a no-op stub again unless the Next.js migration
 * is fully completed AND prerender.js is removed.
 */
const SEO = ({
  title = 'EMPOWERVIDA - Longevity, Prescribed | Evidence-Based Health Optimization',
  description = 'Evidence-based longevity protocols prescribed by Dr. Gavin McAuley. Optimize your healthspan with clinically-backed supplements, diagnostics, and lifestyle strategies.',
  keywords = 'longevity, health optimization, supplements, evidence-based medicine',
  canonical,
  ogImage = '/empowervida_hero_logo.png',
  ogType = 'website',
  author = 'Dr. Gavin McAuley',
  publishedTime,
  schemaData = [],
}) => {
  const siteUrl = 'https://empowervida.com';
  const fullCanonical = canonical
    ? `${siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : siteUrl;
  const fullOgImage = ogImage?.startsWith('http')
    ? ogImage
    : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Canonical URL — Critical for avoiding duplicate content flags */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="EMPOWERVIDA" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Article-specific meta */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {author && <meta property="article:author" content={author} />}

      {/* Structured Data (JSON-LD) */}
      {schemaData.map((schema, i) =>
        schema ? (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ) : null
      )}
    </Helmet>
  );
};

export default SEO;
