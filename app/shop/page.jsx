import React from 'react';
import Shop from '../../src/views/Shop';

export const metadata = {
  title: 'Clinical Supplement Shop — Longevity Stacks | EMPOWERVIDA',
  description: 'Physician-curated supplement stacks for longevity, brain health, metabolic optimization, and cellular energy. Recommended by Dr. Gavin McAuley.',
  alternates: {
    canonical: 'https://empowervida.com/shop/',
  },
  openGraph: {
    title: 'Clinical Supplement Shop — Longevity Stacks | EMPOWERVIDA',
    description: 'Physician-curated supplement stacks for longevity, brain health, metabolic optimization, and cellular energy. Recommended by Dr. Gavin McAuley.',
    url: 'https://empowervida.com/shop/',
    images: [{ url: 'https://empowervida.com/water_refraction.png/', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Shop />;
}