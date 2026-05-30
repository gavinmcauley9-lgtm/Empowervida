import React from 'react';
import WelcomeInsider from '../../../src/pages/WelcomeInsider';

export const metadata = {
  title: 'WelcomeInsider | EMPOWERVIDA',
  description: 'Longevity and metabolic health optimization protocols.',
  alternates: {
    canonical: 'https://empowervida.com/welcome-insider',
  }
};

export default function Page() {
  return <WelcomeInsider />;
}