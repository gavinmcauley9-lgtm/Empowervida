import React from 'react';
import HeroCompare from '../../../src/pages/HeroCompare';

export const metadata = {
  title: 'HeroCompare | EMPOWERVIDA',
  description: 'Longevity and metabolic health optimization protocols.',
  alternates: {
    canonical: 'https://empowervida.com/hero-compare',
  }
};

export default function Page() {
  return <HeroCompare />;
}