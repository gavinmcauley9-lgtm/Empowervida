import React from 'react';
import Shop from '../../../src/pages/Shop';

export const metadata = {
  title: 'Shop | EMPOWERVIDA',
  description: 'Longevity and metabolic health optimization protocols.',
  alternates: {
    canonical: 'https://empowervida.com/shop',
  }
};

export default function Page() {
  return <Shop />;
}