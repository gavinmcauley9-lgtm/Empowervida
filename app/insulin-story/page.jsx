import React from 'react';
import InsulinStory from '../../../src/pages/InsulinStory';

export const metadata = {
  title: 'The Insulin Resistance Story — Metabolic Health Explained | EMPOWERVIDA',
  description: 'How insulin resistance silently develops, why it accelerates ageing, and the clinical strategies that reverse metabolic dysfunction.',
  alternates: {
    canonical: 'https://empowervida.com/insulin-story',
  },
  openGraph: {
    title: 'The Insulin Resistance Story — Metabolic Health Explained | EMPOWERVIDA',
    description: 'How insulin resistance silently develops, why it accelerates ageing, and the clinical strategies that reverse metabolic dysfunction.',
    url: 'https://empowervida.com/insulin-story',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <InsulinStory />;
}