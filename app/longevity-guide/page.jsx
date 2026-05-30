import React from 'react';
import LongevityGuide from '../../../src/pages/LongevityGuide';

export const metadata = {
  title: 'LongevityGuide | EMPOWERVIDA',
  description: 'Longevity and metabolic health optimization protocols.',
  alternates: {
    canonical: 'https://empowervida.com/longevity-guide',
  }
};

export default function Page() {
  return <LongevityGuide />;
}