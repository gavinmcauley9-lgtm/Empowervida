import React from 'react';
import MitochondrialGuide from '../../src/views/MitochondrialGuide';

export const metadata = {
  title: 'The Complete Mitochondrial Health Guide | EMPOWERVIDA',
  description: 'Everything you need to know about mitochondria: how they work, why they fail with age, and the evidence-based interventions that restore cellular energy.',
  alternates: {
    canonical: 'https://empowervida.com/mitochondrial-guide/',
  },
  openGraph: {
    title: 'The Complete Mitochondrial Health Guide | EMPOWERVIDA',
    description: 'Everything you need to know about mitochondria: how they work, why they fail with age, and the evidence-based interventions that restore cellular energy.',
    url: 'https://empowervida.com/mitochondrial-guide/',
    images: [{ url: 'https://empowervida.com/water_refraction.png/', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <MitochondrialGuide />;
}