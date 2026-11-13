import React from 'react';
import Protocol from '../../src/views/Protocol';

export const metadata = {
  title: 'Seven Areas of Longevity Science | EMPOWERVIDA',
  description: 'Explore seven areas of longevity science, including metabolic health, sleep, cognition and gut health. Evidence-informed education, not personalised treatment advice.',
  keywords: 'longevity science, metabolic health, sleep and recovery, cognitive health, gut health, evidence-informed health education',
  alternates: {
    canonical: 'https://empowervida.com/protocol/',
  },
  openGraph: {
    title: 'Seven Areas of Longevity Science | EMPOWERVIDA',
    description: 'Explore evidence-informed longevity topics, including metabolic health, sleep, cognition, energy and gut health.',
    url: 'https://empowervida.com/protocol/',
    images: [{ url: 'https://empowervida.com/protocol_hero_fire_v2.jpg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Protocol />;
}