import React from 'react';
import Diagnostics from '../../../src/pages/Diagnostics';

export const metadata = {
  title: 'Diagnostics | EMPOWERVIDA',
  description: 'Longevity and metabolic health optimization protocols.',
  alternates: {
    canonical: 'https://empowervida.com/diagnostics',
  }
};

export default function Page() {
  return <Diagnostics />;
}