"use client";

import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = 'EMPOWERVIDA - Longevity, Prescribed',
    description = 'Evidence-based longevity protocols engineered by Dr. Gavin McAuley. Clinical-grade supplements and personalized health optimization for vitality, clarity, and cellular renewal.',
    keywords = 'longevity protocol, mitochondrial supplements, brain fog treatment, cellular health, anti-ageing supplements, evidence-based wellness, personalized health optimization',
    canonical = '',
    ogImage = '/empowervida_hero_logo.png',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    author = 'Dr. Gavin McAuley',
    publishedTime = null,
    schemaData = null,
}) => {
    const siteUrl = typeof window !== 'undefined' ? window.location.origin : 'https://empowervida.com';
    const fullUrl = canonical ? `${siteUrl}${canonical}` : (typeof window !== 'undefined' ? window.location.href : siteUrl);
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:site_name" content="EMPOWERVIDA" />
            {publishedTime && <meta property="article:published_time" content={new Date(publishedTime).toISOString()} />}

            {/* Twitter */}
            <meta property="twitter:card" content={twitterCard} />
            <meta property="twitter:site" content="@GavinMcAuleyMD" />
            <meta property="twitter:creator" content="@GavinMcAuleyMD" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImageUrl} />

            {/* Structured Data (JSON-LD) */}
            {schemaData && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
