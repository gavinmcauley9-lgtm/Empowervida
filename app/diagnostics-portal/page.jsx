import React from 'react';
import DiagnosticsPortal from '../../../src/pages/DiagnosticsPortal';

export const metadata = {
  title: 'DiagnosticsPortal | EMPOWERVIDA',
  description: 'Longevity and metabolic health optimization protocols.',
  alternates: {
    canonical: 'https://empowervida.com/diagnostics-portal',
  }
};

export default function Page() {
  return <DiagnosticsPortal />;
}