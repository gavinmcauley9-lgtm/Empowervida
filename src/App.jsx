import React, { Suspense, useEffect, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scene from './components/Scene';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import Breadcrumbs from './components/Breadcrumbs';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Diagnostics = lazy(() => import('./pages/Diagnostics'));
const AdvancedOptimization = lazy(() => import('./pages/AdvancedOptimization'));
const EnvironmentalDefense = lazy(() => import('./pages/EnvironmentalDefense'));
const Protocol = lazy(() => import('./pages/Protocol'));
const EngineRoom = lazy(() => import('./pages/EngineRoom'));
const Shop = lazy(() => import('./pages/Shop'));
const MitochondrialGuide = lazy(() => import('./pages/MitochondrialGuide'));
const LongevityGuide = lazy(() => import('./pages/LongevityGuide'));
const Privacy = lazy(() => import('./pages/Privacy'));
const AffiliateDisclaimer = lazy(() => import('./pages/AffiliateDisclaimer'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const InsulinStory = lazy(() => import('./pages/InsulinStory'));
const EmpowerProtocol = lazy(() => import('./pages/EmpowerProtocol'));
const DiagnosticsPortal = lazy(() => import('./pages/DiagnosticsPortal'));
const HeroCompare = lazy(() => import('./pages/HeroCompare'));

// Loading component for better UX during lazy load
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'var(--color-bg)'
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      border: '3px solid rgba(32, 178, 170, 0.2)',
      borderTop: '3px solid var(--color-accent-teal)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}></div>
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function AppContent() {
  const location = useLocation();
  const hideScene = true; // Disabled in favor of DNA helix pattern

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <main>
      {/* Skip to Content Link for Screen Readers */}
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          left: '-9999px',
          zIndex: 9999,
          padding: '1rem 2rem',
          background: 'var(--color-accent-teal)',
          color: '#FFFFFF',
          textDecoration: 'none',
          fontWeight: 700,
          borderRadius: '4px'
        }}
        onFocus={(e) => {
          e.target.style.left = '10px';
          e.target.style.top = '10px';
        }}
        onBlur={(e) => {
          e.target.style.left = '-9999px';
        }}
      >
        Skip to main content
      </a>

      {/* 3D Background Scene - Hidden on Longevity and Mitochondrial Guide pages */}
      {!hideScene && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
          <Scene />
          {/* Removed dark overlay for Clinical Light theme */}
        </div>
      )}

      <Navigation />
      <Breadcrumbs />

      <Suspense fallback={<PageLoader />}>
        <div id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/diagnostics" element={<Diagnostics />} />
            <Route path="/advanced-optimization" element={<AdvancedOptimization />} />
            <Route path="/environmental-defense" element={<EnvironmentalDefense />} />
            <Route path="/protocol" element={<Protocol />} />
            <Route path="/empower-protocol" element={<EmpowerProtocol />} />
            <Route path="/engine-room" element={<EngineRoom />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/mitochondrial-guide" element={<MitochondrialGuide />} />
            <Route path="/longevity" element={<LongevityGuide />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/affiliate-disclaimer" element={<AffiliateDisclaimer />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/insulin-story" element={<InsulinStory />} />
            <Route path="/diagnostics-portal" element={<DiagnosticsPortal />} />
            <Route path="/hero-compare" element={<HeroCompare />} />
          </Routes>
        </div>
      </Suspense>

      <CookieConsent />

      {/* Custom Cursor */}
      <Cursor />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
