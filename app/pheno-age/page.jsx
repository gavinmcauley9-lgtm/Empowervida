import React from 'react';
import PhenoAge from '../../src/views/PhenoAge';

export const metadata = {
  title: 'PhenoAge — Measuring Your Biological Age | EMPOWERVIDA',
  description: 'Understand the PhenoAge algorithm and what your biological age means for longevity. A physician explains the science behind epigenetic age clocks.',
  alternates: {
    canonical: 'https://empowervida.com/pheno-age/',
  },
  openGraph: {
    title: 'PhenoAge — Measuring Your Biological Age | EMPOWERVIDA',
    description: 'Understand the PhenoAge algorithm and what your biological age means for longevity. A physician explains the science behind epigenetic age clocks.',
    url: 'https://empowervida.com/pheno-age',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <PhenoAge />;
}