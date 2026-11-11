import React from 'react';
import InsulinStory from '../../src/views/InsulinStory';

export const metadata = {
  title: 'The Insulin Story: Insulin, Metabolic Health and Ageing | EMPOWERVIDA',
  description: 'Understand insulin resistance, how it relates to metabolic health, and evidence-based ways to reduce long-term health risks.',
  alternates: {
    canonical: 'https://empowervida.com/insulin-story/',
  },
  openGraph: {
    title: 'The Insulin Story: Insulin, Metabolic Health and Ageing | EMPOWERVIDA',
    description: 'Understand insulin resistance, how it relates to metabolic health, and evidence-based ways to reduce long-term health risks.',
    url: 'https://empowervida.com/insulin-story/',
    images: [{ url: 'https://empowervida.com/hero_cell_energy.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <InsulinStory />;
}