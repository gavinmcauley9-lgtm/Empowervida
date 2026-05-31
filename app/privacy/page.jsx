import React from 'react';
import Privacy from '../../src/pages/Privacy';

export const metadata = {
  title: 'Privacy Policy | EMPOWERVIDA',
  description: "EmpowerVida's privacy policy. How we collect, use, and protect your personal information in compliance with data protection regulations.",
  alternates: {
    canonical: 'https://empowervida.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | EMPOWERVIDA',
    description: "EmpowerVida's privacy policy. How we collect, use, and protect your personal information in compliance with data protection regulations.",
    url: 'https://empowervida.com/privacy',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <Privacy />;
}