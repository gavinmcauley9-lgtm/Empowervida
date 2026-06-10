import React from 'react';
import Diagnostics from '../../src/views/Diagnostics';

export const metadata = {
  title: 'Longevity Biomarker Testing & Diagnostics | EMPOWERVIDA',
  description: 'Understand your metabolic and cellular health with evidence-based biomarker testing. Dr. Gavin McAuley explains which labs actually matter for longevity.',
  alternates: {
    canonical: 'https://empowervida.com/diagnostics/',
  },
  openGraph: {
    title: 'Longevity Biomarker Testing & Diagnostics | EMPOWERVIDA',
    description: 'Understand your metabolic and cellular health with evidence-based biomarker testing. Dr. Gavin McAuley explains which labs actually matter for longevity.',
    url: 'https://empowervida.com/diagnostics/',
    images: [{ url: 'https://empowervida.com/water_refraction.png/', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Diagnostics />;
}