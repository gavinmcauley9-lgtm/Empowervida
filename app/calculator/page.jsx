import React from 'react';
import Calculator from '../../../src/pages/Calculator';

export const metadata = {
  title: 'Biological Age & Longevity Calculator | EMPOWERVIDA',
  description: 'Estimate your true biological age based on lifestyle factors and health markers. A physician-designed tool for longevity self-assessment.',
  alternates: {
    canonical: 'https://empowervida.com/calculator',
  },
  openGraph: {
    title: 'Biological Age & Longevity Calculator | EMPOWERVIDA',
    description: 'Estimate your true biological age based on lifestyle factors and health markers. A physician-designed tool for longevity self-assessment.',
    url: 'https://empowervida.com/calculator',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Calculator />;
}