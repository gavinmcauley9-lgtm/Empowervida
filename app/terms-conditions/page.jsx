import React from 'react';
import TermsConditions from '../../../src/pages/TermsConditions';

export const metadata = {
  title: 'Terms & Conditions | EMPOWERVIDA',
  description: 'EmpowerVida's terms and conditions of use. Educational content disclaimer and site usage policy.',
  alternates: {
    canonical: 'https://empowervida.com/terms-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | EMPOWERVIDA',
    description: 'EmpowerVida's terms and conditions of use. Educational content disclaimer and site usage policy.',
    url: 'https://empowervida.com/terms-conditions',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <TermsConditions />;
}