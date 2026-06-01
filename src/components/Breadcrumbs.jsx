"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
    const location = usePathname();
    const pathnames = (location || '').split('/').filter(x => x);

    // Map paths to readable names
    const pathNameMap = {
        'blog': 'The Journal',
        'protocol': 'Protocols',
        'diagnostics': 'The Diagnostics',
        'environmental-defense': 'The Elements',
        'mitochondrial-guide': 'Mitochondrial Health',
        'longevity': 'Longevity Blueprint',
        'insulin-story': 'The Insulin Story',
        'shop': 'Shop',
        'about': 'About',
        'privacy': 'Privacy Policy',
        'terms': 'Terms & Conditions',
        'affiliate-disclaimer': 'Affiliate Disclaimer'
    };

    // Don't show breadcrumbs on homepage
    if (pathnames.length === 0) return null;

    // Breadcrumb Schema for SEO
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
            ...pathnames.map((name, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": pathNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1),
                "item": `https://empowervida.com/${pathnames.slice(0, index + 1).join('/')}`
            }))
        ]
    };

    return (
        <>
            {/* Add Schema */}
            <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
            </script>

            {/* Breadcrumb UI */}
            <nav
                aria-label="Breadcrumb"
                style={{
                    padding: '1rem 2rem',
                    backgroundColor: 'var(--color-bg-alt)',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    fontSize: '0.9rem'
                }}
            >
                <div
                    className="container"
                    style={{
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '0.5rem'
                    }}
                >
                    {/* Home Link */}
                    <Link
                        href="/"
                        style={{
                            color: 'var(--color-text-muted)',
                            textDecoration: 'none',
                            transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={e => e.target.style.color = 'var(--color-accent-teal)'}
                        onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
                    >
                        Home
                    </Link>

                    {/* Breadcrumb Trail */}
                    {pathnames.map((name, index) => {
                        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        const displayName = pathNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1);

                        return (
                            <React.Fragment key={routeTo}>
                                <span style={{ color: 'var(--color-text-muted)', margin: '0 0.25rem' }}>
                                    /
                                </span>
                                {isLast ? (
                                    <span
                                        style={{
                                            color: 'var(--color-text)',
                                            fontWeight: '600'
                                        }}
                                        aria-current="page"
                                    >
                                        {displayName}
                                    </span>
                                ) : (
                                    <Link
                                        href={routeTo}
                                        style={{
                                            color: 'var(--color-text-muted)',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s ease'
                                        }}
                                        onMouseEnter={e => e.target.style.color = 'var(--color-accent-teal)'}
                                        onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
                                    >
                                        {displayName}
                                    </Link>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

export default Breadcrumbs;
