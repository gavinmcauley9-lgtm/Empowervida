import React from 'react';
import DiagnosticsPortal from '../../../src/pages/DiagnosticsPortal';

export const metadata = {
  title: 'Longevity Diagnostics Portal | EMPOWERVIDA',
  description: 'Access your personalised longevity diagnostics and biomarker tracking. Monitor the metrics that matter for long-term cellular health.',
  alternates: {
    canonical: 'https://empowervida.com/diagnostics-portal',
  },
  openGraph: {
    title: 'Longevity Diagnostics Portal | EMPOWERVIDA',
    description: 'Access your personalised longevity diagnostics and biomarker tracking. Monitor the metrics that matter for long-term cellular health.',
    url: 'https://empowervida.com/diagnostics-portal',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <DiagnosticsPortal />;
}