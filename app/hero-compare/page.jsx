import React from 'react';
import HeroCompare from '../../src/pages/HeroCompare';

export const metadata = {
  title: 'Why EmpowerVida — The Difference That Matters | EMPOWERVIDA',
  description: "See how EmpowerVida's physician-designed protocols compare to generic supplement advice. Evidence over marketing.",
  alternates: {
    canonical: 'https://empowervida.com/hero-compare',
  },
  openGraph: {
    title: 'Why EmpowerVida — The Difference That Matters | EMPOWERVIDA',
    description: "See how EmpowerVida's physician-designed protocols compare to generic supplement advice. Evidence over marketing.",
    url: 'https://empowervida.com/hero-compare',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <HeroCompare />;
}