import fs from 'fs';
import path from 'path';

// Unique, keyword-rich metadata for each page
const PAGE_METADATA = {
  'shop': {
    title: 'Clinical Supplement Shop — Longevity Stacks | EMPOWERVIDA',
    description: 'Physician-curated supplement stacks for longevity, brain health, metabolic optimization, and cellular energy. Recommended by Dr. Gavin McAuley.',
  },
  'diagnostics': {
    title: 'Longevity Biomarker Testing & Diagnostics | EMPOWERVIDA',
    description: 'Understand your metabolic and cellular health with evidence-based biomarker testing. Dr. Gavin McAuley explains which labs actually matter for longevity.',
  },
  'advanced-optimization': {
    title: 'Advanced Longevity Optimization Protocols | EMPOWERVIDA',
    description: 'Advanced cellular optimization strategies for high-performers. Go beyond foundational supplements with precision longevity interventions.',
  },
  'empower-protocol': {
    title: 'The EmpowerVida Protocol — Your Clinical Longevity Framework | EMPOWERVIDA',
    description: 'The complete EmpowerVida longevity framework. A physician-designed system for cellular resilience, metabolic health, and long-term vitality.',
  },
  'engine-room': {
    title: 'The Engine Room — Mitochondrial & Metabolic Deep Dive | EMPOWERVIDA',
    description: "Go deep on the science of cellular energy. A physician's guide to mitochondrial function, ATP synthesis, and metabolic resilience.",
  },
  'environmental-defense': {
    title: 'Environmental Defense — Detox & Cellular Protection | EMPOWERVIDA',
    description: 'Protect your cells from environmental toxins, heavy metals, and oxidative stress. Physician-designed detox and defence protocols.',
  },
  'mitochondrial-guide': {
    title: 'The Complete Mitochondrial Health Guide | EMPOWERVIDA',
    description: 'Everything you need to know about mitochondria: how they work, why they fail with age, and the evidence-based interventions that restore cellular energy.',
  },
  'calculator': {
    title: 'Biological Age & Longevity Calculator | EMPOWERVIDA',
    description: 'Estimate your true biological age based on lifestyle factors and health markers. A physician-designed tool for longevity self-assessment.',
  },
  'contact': {
    title: 'Contact Dr. Gavin McAuley | EMPOWERVIDA',
    description: 'Get in touch with the EmpowerVida team. Contact Dr. Gavin McAuley for educational enquiries, partnerships, or media requests.',
  },
  'longevity-guide': {
    title: 'The Complete Guide to Longevity Medicine | EMPOWERVIDA',
    description: 'A comprehensive physician-authored guide to longevity medicine: the science of ageing, hallmarks of cellular decline, and evidence-based interventions.',
  },
  'insulin-story': {
    title: 'The Insulin Resistance Story — Metabolic Health Explained | EMPOWERVIDA',
    description: 'How insulin resistance silently develops, why it accelerates ageing, and the clinical strategies that reverse metabolic dysfunction.',
  },
  'pheno-age': {
    title: 'PhenoAge — Measuring Your Biological Age | EMPOWERVIDA',
    description: 'Understand the PhenoAge algorithm and what your biological age means for longevity. A physician explains the science behind epigenetic age clocks.',
  },
  'diagnostics-portal': {
    title: 'Longevity Diagnostics Portal | EMPOWERVIDA',
    description: 'Access your personalised longevity diagnostics and biomarker tracking. Monitor the metrics that matter for long-term cellular health.',
  },
  'privacy': {
    title: 'Privacy Policy | EMPOWERVIDA',
    description: 'EmpowerVida\'s privacy policy. How we collect, use, and protect your personal information in compliance with data protection regulations.',
  },
  'terms-conditions': {
    title: 'Terms & Conditions | EMPOWERVIDA',
    description: 'EmpowerVida\'s terms and conditions of use. Educational content disclaimer and site usage policy.',
  },
  'affiliate-disclaimer': {
    title: 'Affiliate Disclaimer | EMPOWERVIDA',
    description: 'EmpowerVida\'s affiliate and commission disclosure. We only recommend products we genuinely use and trust.',
  },
  'thank-you': {
    title: 'Thank You — Welcome to EmpowerVida | EMPOWERVIDA',
    description: 'Thank you for joining the EmpowerVida community. Your longevity education journey starts here.',
  },
  'welcome-insider': {
    title: 'Welcome, Insider — Your Clinical Longevity Resource | EMPOWERVIDA',
    description: 'Welcome to the EmpowerVida insider programme. Access exclusive physician-curated longevity protocols and clinical insights.',
  },
  'links': {
    title: 'Dr. Gavin McAuley — Links & Resources | EMPOWERVIDA',
    description: 'All links for Dr. Gavin McAuley: EmpowerVida protocols, Substack newsletter, social media, and clinical longevity resources.',
  },
  'blog-post-redirect': {
    title: 'Clinical Insights — Article Redirect | EMPOWERVIDA',
    description: 'You are being redirected to a clinical insights article on EmpowerVida.',
  },
  'hero-compare': {
    title: 'Why EmpowerVida — The Difference That Matters | EMPOWERVIDA',
    description: 'See how EmpowerVida\'s physician-designed protocols compare to generic supplement advice. Evidence over marketing.',
  },
};

const APP_DIR = './app';

for (const [routeName, meta] of Object.entries(PAGE_METADATA)) {
  const filePath = path.join(APP_DIR, routeName, 'page.jsx');
  if (!fs.existsSync(filePath)) {
    console.log(`[SKIP] ${filePath} — not found`);
    continue;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Replace the generic description
  const oldDescription = `  description: 'Longevity and metabolic health optimization protocols.',`;
  if (!content.includes(oldDescription)) {
    console.log(`[SKIP] ${filePath} — description already updated`);
    continue;
  }

  // Build new metadata block
  const newMetadata = `  title: '${meta.title}',
  description: '${meta.description}',
  alternates: {
    canonical: 'https://empowervida.com/${routeName}',
  },
  openGraph: {
    title: '${meta.title}',
    description: '${meta.description}',
    url: 'https://empowervida.com/${routeName}',
    images: [{ url: 'https://empowervida.com/water_refraction.png', width: 1200, height: 630 }],
  },`;

  const oldBlock = `  title: '${routeName.charAt(0).toUpperCase() + routeName.slice(1).replace(/-([a-z])/g, (_, c) => c.toUpperCase())} | EMPOWERVIDA',\n  description: 'Longevity and metabolic health optimization protocols.',\n  alternates: {\n    canonical: 'https://empowervida.com/${routeName}',\n  }`;

  // More surgical replacement — just swap description and expand metadata
  content = content.replace(
    /  title: '.*?',\n  description: 'Longevity and metabolic health optimization protocols\.',\n  alternates: \{\n    canonical: '.*?',\n  \}/,
    newMetadata
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[Fixed] /${routeName}`);
}

console.log('--- Metadata fix complete ---');
