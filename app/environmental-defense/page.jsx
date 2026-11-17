import React from 'react';
import EnvironmentalDefense from '../../src/views/EnvironmentalDefense';

export const metadata = {
  title: 'The Invisible Environment | Environmental Health Guide | EmpowerVida',
  description: 'Explore the evidence on air pollution, drinking water, microplastics, light and everyday exposures — with practical advice and proportionate risk assessment.',
  alternates: {
    canonical: 'https://empowervida.com/environmental-defense/',
  },
  openGraph: {
    title: 'The Invisible Environment | Environmental Health Guide | EmpowerVida',
    description: 'Explore the evidence on air pollution, drinking water, microplastics, light and everyday exposures — with practical advice and proportionate risk assessment.',
    url: 'https://empowervida.com/environmental-defense/',
    images: [{ url: 'https://empowervida.com/hero_dna_botanical.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <EnvironmentalDefense />;
}