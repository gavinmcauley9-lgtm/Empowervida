import React from 'react';
import Protocol from '../../src/views/Protocol';

export const metadata = {
  title: 'The Seven Areas of Longevity Science | EmpowerVida',
  description: 'Explore seven areas of healthy ageing, separating established medical priorities from promising research into brain, metabolic, mitochondrial and gut health.',
  keywords: 'longevity science, healthy ageing, cognitive health, metabolic health, sleep and recovery, evidence-led health',
  alternates: {
    canonical: 'https://empowervida.com/protocol/',
  },
  openGraph: {
    title: 'The Seven Areas of Longevity Science | EmpowerVida',
    description: 'Explore seven areas of healthy ageing, from cognitive and metabolic health to sleep and recovery.',
    url: 'https://empowervida.com/protocol/',
    images: [{ url: 'https://empowervida.com/protocol_hero_fire_v2.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Protocol />;
}