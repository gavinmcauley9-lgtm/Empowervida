import React from 'react';
import MitochondrialGuide from '../../src/views/MitochondrialGuide';

export const metadata = {
  title: 'The Complete Mitochondrial Health Guide | EMPOWERVIDA',
  description: 'A physician-authored, evidence-led guide to mitochondrial energy, ageing, exercise and what human research really says about supplements.',
  alternates: {
    canonical: 'https://empowervida.com/mitochondrial-guide/',
  },
  openGraph: {
    title: 'The Complete Mitochondrial Health Guide | EMPOWERVIDA',
    description: 'A physician-authored, evidence-led guide to mitochondrial energy, ageing, exercise and what human research really says about supplements.',
    url: 'https://empowervida.com/mitochondrial-guide/',
    images: [{ url: 'https://empowervida.com/mitochondrion_hero_cinematic_1764586685814.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <MitochondrialGuide />;
}