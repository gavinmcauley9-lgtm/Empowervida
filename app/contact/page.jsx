import React from 'react';
import Contact from '../../src/pages/Contact';

export const metadata = {
  title: 'Contact Dr. Gavin McAuley | EMPOWERVIDA',
  description: 'Get in touch with the EmpowerVida team. Contact Dr. Gavin McAuley for educational enquiries, partnerships, or media requests.',
  alternates: {
    canonical: 'https://empowervida.com/contact',
  },
  openGraph: {
    title: 'Contact Dr. Gavin McAuley | EMPOWERVIDA',
    description: 'Get in touch with the EmpowerVida team. Contact Dr. Gavin McAuley for educational enquiries, partnerships, or media requests.',
    url: 'https://empowervida.com/contact',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Contact />;
}