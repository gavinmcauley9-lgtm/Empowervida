import React from 'react';
import ThankYou from '../../src/views/ThankYou';

export const metadata = {
  title: 'Thank You — Welcome to EmpowerVida | EMPOWERVIDA',
  description: 'Thank you for joining the EmpowerVida community. Your longevity education journey starts here.',
  alternates: {
    canonical: 'https://empowervida.com/thank-you/',
  },
  openGraph: {
    title: 'Thank You — Welcome to EmpowerVida | EMPOWERVIDA',
    description: 'Thank you for joining the EmpowerVida community. Your longevity education journey starts here.',
    url: 'https://empowervida.com/thank-you',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ThankYou />;
}