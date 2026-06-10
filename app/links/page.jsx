import React from 'react';
import Links from '../../src/views/Links';

export const metadata = {
  title: 'Dr. Gavin McAuley — Links & Resources | EMPOWERVIDA',
  description: 'All links for Dr. Gavin McAuley: EmpowerVida protocols, Substack newsletter, social media, and clinical longevity resources.',
  alternates: {
    canonical: 'https://empowervida.com/links/',
  },
  openGraph: {
    title: 'Dr. Gavin McAuley — Links & Resources | EMPOWERVIDA',
    description: 'All links for Dr. Gavin McAuley: EmpowerVida protocols, Substack newsletter, social media, and clinical longevity resources.',
    url: 'https://empowervida.com/links/',
    images: [{ url: 'https://empowervida.com/water_refraction.png/', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Links />;
}