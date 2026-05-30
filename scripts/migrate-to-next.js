import fs from 'fs';
import path from 'path';

const SRC_PAGES_DIR = './src/pages';
const SRC_COMP_DIR = './src/components';
const APP_DIR = './app';

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add "use client" if not present
  if (!content.includes('"use client"') && !content.includes("'use client'")) {
    content = '"use client";\n\n' + content;
  }

  // Handle react-router-dom imports
  content = content.replace(/import\s*\{([^}]*)\}\s*from\s*['"]react-router-dom['"];/g, (match, importsStr) => {
    const imports = importsStr.split(',').map(s => s.trim()).filter(Boolean);
    const hasLink = imports.includes('Link');
    const otherImports = imports.filter(i => i !== 'Link');
    
    let result = '';
    if (hasLink) result += "import Link from 'next/link';\n";
    if (otherImports.length > 0) {
      const mappedImports = otherImports.map(i => {
        if (i === 'useNavigate') return 'useRouter';
        if (i === 'useLocation') return 'usePathname';
        return i;
      });
      result += `import { ${mappedImports.join(', ')} } from 'next/navigation';\n`;
    }
    return result.trim();
  });

  // Replace hooks
  content = content.replace(/useNavigate\(\)/g, 'useRouter()');
  content = content.replace(/useLocation\(\)/g, 'usePathname()');

  // Replace Link props
  content = content.replace(/<Link([^>]*?)to=/g, '<Link$1href=');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`[Modified] ${filePath}`);
  }
}

function traverseDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      traverseDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

// 1. Refactor all components
console.log('--- Phase 1: Refactoring Components ---');
traverseDirectory(SRC_PAGES_DIR);
traverseDirectory(SRC_COMP_DIR);

// 2. Generate Routes
console.log('--- Phase 2: Generating Routes ---');
const pages = fs.readdirSync(SRC_PAGES_DIR).filter(f => f.endsWith('.jsx'));

const SKIP_PAGES = ['About.jsx', 'Blog.jsx', 'BlogPost.jsx'];

for (const page of pages) {
  if (SKIP_PAGES.includes(page)) continue;

  const componentName = page.replace('.jsx', '');
  
  if (componentName === 'Home') {
    // Update app/page.jsx
    const appPagePath = path.join(APP_DIR, 'page.jsx');
    const content = `
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
    `.trim();
    fs.writeFileSync(appPagePath, content, 'utf8');
    console.log(`[Created Route] / (Home)`);
  } else {
    // Other routes
    const routeName = componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    const routeDir = path.join(APP_DIR, routeName);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    
    const appPagePath = path.join(routeDir, 'page.jsx');
    const content = `
import React from 'react';
import ${componentName} from '../../../src/pages/${componentName}';

export const metadata = {
  title: '${componentName} | EMPOWERVIDA',
  description: 'Longevity and metabolic health optimization protocols.',
  alternates: {
    canonical: 'https://empowervida.com/${routeName}',
  }
};

export default function Page() {
  return <${componentName} />;
}
    `.trim();
    fs.writeFileSync(appPagePath, content, 'utf8');
    console.log(`[Created Route] /${routeName}`);
  }
}

console.log('--- Complete ---');
