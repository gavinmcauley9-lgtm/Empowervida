import React from 'react';
import EmpowerProtocol from '../../src/views/EmpowerProtocol';

export const metadata = {
  title: 'The EmpowerVida Protocol — Your Clinical Longevity Framework | EMPOWERVIDA',
  description: 'The complete EmpowerVida longevity framework. A physician-designed system for cellular resilience, metabolic health, and long-term vitality.',
  alternates: {
    canonical: 'https://empowervida.com/empower-protocol/',
  },
  openGraph: {
    title: 'The EmpowerVida Protocol — Your Clinical Longevity Framework | EMPOWERVIDA',
    description: 'The complete EmpowerVida longevity framework. A physician-designed system for cellular resilience, metabolic health, and long-term vitality.',
    url: 'https://empowervida.com/empower-protocol',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <EmpowerProtocol />;
}