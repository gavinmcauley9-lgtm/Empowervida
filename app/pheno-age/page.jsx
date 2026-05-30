import React from 'react';
import PhenoAge from '../../../src/pages/PhenoAge';

export const metadata = {
  title: 'PhenoAge | EMPOWERVIDA',
  description: 'Longevity and metabolic health optimization protocols.',
  alternates: {
    canonical: 'https://empowervida.com/pheno-age',
  }
};

export default function Page() {
  return <PhenoAge />;
}