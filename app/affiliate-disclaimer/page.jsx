import React from 'react';
import AffiliateDisclaimer from '../../src/pages/AffiliateDisclaimer';

export const metadata = {
  title: 'Affiliate Disclaimer | EMPOWERVIDA',
  description: "EmpowerVida's affiliate and commission disclosure. We only recommend products we genuinely use and trust.",
  alternates: {
    canonical: 'https://empowervida.com/affiliate-disclaimer',
  },
  openGraph: {
    title: 'Affiliate Disclaimer | EMPOWERVIDA',
    description: "EmpowerVida's affiliate and commission disclosure. We only recommend products we genuinely use and trust.",
    url: 'https://empowervida.com/affiliate-disclaimer',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <AffiliateDisclaimer />;
}