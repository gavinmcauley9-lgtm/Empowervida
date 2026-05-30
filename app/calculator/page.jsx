import React from 'react';
import Calculator from '../../../src/pages/Calculator';

export const metadata = {
  title: 'Calculator | EMPOWERVIDA',
  description: 'Longevity and metabolic health optimization protocols.',
  alternates: {
    canonical: 'https://empowervida.com/calculator',
  }
};

export default function Page() {
  return <Calculator />;
}