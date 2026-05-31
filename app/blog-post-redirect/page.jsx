import React from 'react';
import BlogPostRedirect from '../../src/pages/BlogPostRedirect';

export const metadata = {
  title: 'Clinical Insights — Article Redirect | EMPOWERVIDA',
  description: 'You are being redirected to a clinical insights article on EmpowerVida.',
  alternates: {
    canonical: 'https://empowervida.com/blog-post-redirect',
  },
  openGraph: {
    title: 'Clinical Insights — Article Redirect | EMPOWERVIDA',
    description: 'You are being redirected to a clinical insights article on EmpowerVida.',
    url: 'https://empowervida.com/blog-post-redirect',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <BlogPostRedirect />;
}