import React from 'react';
import LongevityGuide from '../../src/views/LongevityGuide';

export const metadata = {
  title: 'Longevity Medicine — The Science of Living Longer, Better | EMPOWERVIDA',
  description: 'Explore the science of longevity medicine. Dr. Gavin McAuley explains the hallmarks of ageing, cellular decline, and evidence-based interventions to extend healthspan.',
  alternates: {
    canonical: 'https://empowervida.com/longevity/',
  },
  openGraph: {
    title: 'Longevity Medicine — The Science of Living Longer, Better | EMPOWERVIDA',
    description: 'Explore the science of longevity medicine. Dr. Gavin McAuley explains the hallmarks of ageing and evidence-based interventions to extend healthspan.',
    url: 'https://empowervida.com/longevity',
    images: [{ url: 'https://empowervida.com/longevity_hero_cinematic_1764666029631.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <LongevityGuide />;
}
