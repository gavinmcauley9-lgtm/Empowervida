import React from 'react';
import Protocol from '../../src/views/Protocol';

export const metadata = {
  title: 'Seven Areas of Longevity Science — Evidence-Led Guide | EMPOWERVIDA',
  description: 'Explore seven areas of healthy-ageing science, from brain health and energy to sleep and metabolic health. An evidence-led educational guide to lifestyle foundations and emerging research.',
  keywords: 'longevity supplement protocol, brain fog supplements, gut health protocol, sleep supplements, metabolic health, mitochondrial support, NAD+ protocol',
  alternates: {
    canonical: 'https://empowervida.com/protocol/',
  },
  openGraph: {
    title: 'Seven Areas of Longevity Science — Evidence-Led Guide | EMPOWERVIDA',
    description: 'Explore seven areas of healthy-ageing science, with practical lifestyle foundations, promising research and clear evidence limitations.',
    url: 'https://empowervida.com/protocol/',
    images: [{ url: 'https://empowervida.com/protocol_hero_fire_v2.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Protocol />;
}