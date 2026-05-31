import React from 'react';
import EngineRoom from '../../src/pages/EngineRoom';

export const metadata = {
  title: 'The Engine Room — Mitochondrial & Metabolic Deep Dive | EMPOWERVIDA',
  description: "Go deep on the science of cellular energy. A physician's guide to mitochondrial function, ATP synthesis, and metabolic resilience.",
  alternates: {
    canonical: 'https://empowervida.com/engine-room',
  },
  openGraph: {
    title: 'The Engine Room — Mitochondrial & Metabolic Deep Dive | EMPOWERVIDA',
    description: "Go deep on the science of cellular energy. A physician's guide to mitochondrial function, ATP synthesis, and metabolic resilience.",
    url: 'https://empowervida.com/engine-room',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <EngineRoom />;
}