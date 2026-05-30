import React from 'react';
import Home from '../src/pages/Home';

export const metadata = {
  title: 'EMPOWERVIDA | Longevity & Metabolic Optimization',
  description: 'Evidence-based protocols for cellular resilience and longevity by Dr. Gavin McAuley.',
  alternates: {
    canonical: 'https://empowervida.com',
  }
};

export default function Page() {
  return <Home />;
}