import React from 'react';
import LongevityGuide from '../../../src/pages/LongevityGuide';

export const metadata = {
  title: 'The Complete Guide to Longevity Medicine | EMPOWERVIDA',
  description: 'A comprehensive physician-authored guide to longevity medicine: the science of ageing, hallmarks of cellular decline, and evidence-based interventions.',
  alternates: {
    canonical: 'https://empowervida.com/longevity-guide',
  },
  openGraph: {
    title: 'The Complete Guide to Longevity Medicine | EMPOWERVIDA',
    description: 'A comprehensive physician-authored guide to longevity medicine: the science of ageing, hallmarks of cellular decline, and evidence-based interventions.',
    url: 'https://empowervida.com/longevity-guide',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <LongevityGuide />;
}