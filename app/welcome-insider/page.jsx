import React from 'react';
import WelcomeInsider from '../../src/views/WelcomeInsider';

export const metadata = {
  title: 'Welcome, Insider — Your Clinical Longevity Resource | EMPOWERVIDA',
  description: 'Welcome to the EmpowerVida insider programme. Access exclusive physician-curated longevity protocols and clinical insights.',
  alternates: {
    canonical: 'https://empowervida.com/welcome-insider',
  },
  openGraph: {
    title: 'Welcome, Insider — Your Clinical Longevity Resource | EMPOWERVIDA',
    description: 'Welcome to the EmpowerVida insider programme. Access exclusive physician-curated longevity protocols and clinical insights.',
    url: 'https://empowervida.com/welcome-insider',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <WelcomeInsider />;
}