import React from 'react';
import Blog from '../../src/views/Blog';

export const metadata = {
  title: 'The Journal | Health & Longevity | EmpowerVida',
  description: 'Explore physician-led stories on metabolic health, brain health, nutrition, movement, sleep and emerging longevity research.',
  alternates: { canonical: 'https://empowervida.com/blog/' },
  openGraph: {
    title: 'The Journal | Health & Longevity | EmpowerVida',
    description: 'Explore evidence-led health and longevity writing from EmpowerVida.',
    url: 'https://empowervida.com/blog/',
    images: [{ url: 'https://empowervida.com/water_refraction.png' }],
  },
};

export default function BlogListing() {
  return <Blog />;
}
