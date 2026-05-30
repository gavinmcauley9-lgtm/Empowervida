import React from 'react';
import EnvironmentalDefense from '../../../src/pages/EnvironmentalDefense';

export const metadata = {
  title: 'Environmental Defense — Detox & Cellular Protection | EMPOWERVIDA',
  description: 'Protect your cells from environmental toxins, heavy metals, and oxidative stress. Physician-designed detox and defence protocols.',
  alternates: {
    canonical: 'https://empowervida.com/environmental-defense',
  },
  openGraph: {
    title: 'Environmental Defense — Detox & Cellular Protection | EMPOWERVIDA',
    description: 'Protect your cells from environmental toxins, heavy metals, and oxidative stress. Physician-designed detox and defence protocols.',
    url: 'https://empowervida.com/environmental-defense',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <EnvironmentalDefense />;
}