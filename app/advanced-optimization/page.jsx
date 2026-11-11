import React from 'react';
import AdvancedOptimization from '../../src/views/AdvancedOptimization';

export const metadata = {
  title: 'Advanced Diagnostics: Which Longevity Tests Matter? | EMPOWERVIDA',
  description: 'An evidence-led guide to longevity clinic testing: established prevention, selective investigations and emerging biomarkers.',
  alternates: {
    canonical: 'https://empowervida.com/advanced-optimization/',
  },
  openGraph: {
    title: 'Advanced Diagnostics: Which Longevity Tests Matter? | EMPOWERVIDA',
    description: 'An evidence-led guide to longevity clinic testing: established prevention, selective investigations and emerging biomarkers.',
    url: 'https://empowervida.com/advanced-optimization/',
    images: [{ url: 'https://empowervida.com/tier3_hero_user.webp', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <AdvancedOptimization />;
}