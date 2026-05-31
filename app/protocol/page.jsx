import React from 'react';
import Protocol from '../../src/views/Protocol';

export const metadata = {
  title: 'The 7 Master Longevity Protocols — Clinical Supplement Stacks | EMPOWERVIDA',
  description: 'Physician-designed supplement protocols for longevity, brain fog, energy, gut health, sleep & metabolic health. Evidence-based stacks with exact clinical dosing by Dr. Gavin McAuley.',
  keywords: 'longevity supplement protocol, brain fog supplements, gut health protocol, sleep supplements, metabolic health, mitochondrial support, NAD+ protocol',
  alternates: {
    canonical: 'https://empowervida.com/protocol',
  },
  openGraph: {
    title: 'The 7 Master Longevity Protocols — Clinical Supplement Stacks | EMPOWERVIDA',
    description: 'Physician-designed supplement protocols for longevity, brain fog, energy, gut health, sleep & metabolic health.',
    url: 'https://empowervida.com/protocol',
    images: [{ url: 'https://empowervida.com/protocol_hero_fire_v2.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Protocol />;
}