import React from 'react';
import PhenoAge from '../../src/views/PhenoAge';

export const metadata = {
  title: 'Biological Age Calculator — How Old Are Your Cells? | EMPOWERVIDA',
  description: 'Calculate your biological age and understand what it means for your longevity. Dr. Gavin McAuley explains epigenetic age clocks and how to turn back the cellular clock.',
  alternates: {
    canonical: 'https://empowervida.com/biological-age/',
  },
  openGraph: {
    title: 'Biological Age Calculator — How Old Are Your Cells? | EMPOWERVIDA',
    description: 'Calculate your biological age. Dr. Gavin McAuley explains epigenetic age clocks and how to turn back the cellular clock.',
    url: 'https://empowervida.com/biological-age/',
    images: [{ url: 'https://empowervida.com/biological_clock_reverse.png/', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <PhenoAge />;
}
