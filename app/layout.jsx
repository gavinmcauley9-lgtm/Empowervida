import React from 'react';
import '../src/index.css'; // Assuming Tailwind is configured here

export const metadata = {
  title: 'EMPOWERVIDA — Longevity Protocols by Dr. Gavin McAuley',
  description: 'Physician-designed longevity protocols for brain fog, chronic fatigue, and cellular ageing. Clinical insights by Dr. Gavin McAuley, MBChB.',
  openGraph: {
    title: 'EMPOWERVIDA — Longevity Protocols by Dr. Gavin McAuley',
    description: 'Physician-designed longevity protocols for brain fog, chronic fatigue, and cellular ageing. Clinical insights by Dr. Gavin McAuley, MBChB.',
    url: 'https://empowervida.com/',
    siteName: 'EmpowerVida',
    images: [
      {
        url: 'https://empowervida.com/empowervida_hero_logo.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMPOWERVIDA — Longevity Protocols by Dr. Gavin McAuley',
    description: 'Physician-designed longevity protocols for brain fog, chronic fatigue, and cellular ageing.',
    images: ['https://empowervida.com/empowervida_hero_logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#008080" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KT0YQ12H33"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KT0YQ12H33', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
