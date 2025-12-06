import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scene from './components/Scene';
import Cursor from './components/Cursor';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Diagnostics from './pages/Diagnostics';
import AdvancedOptimization from './pages/AdvancedOptimization';
import EnvironmentalDefense from './pages/EnvironmentalDefense';
import Protocol from './pages/Protocol';
import EngineRoom from './pages/EngineRoom';
import Shop from './pages/Shop';
import MitochondrialGuide from './pages/MitochondrialGuide';
import LongevityGuide from './pages/LongevityGuide';

import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  const hideScene = location.pathname === '/longevity';

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
      {/* 3D Background Scene - Hidden on Longevity page */}
      {!hideScene && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
          <Scene />
          {/* Removed dark overlay for Clinical Light theme */}
        </div>
      )}

      <Navigation />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
          <Route path="/advanced-optimization" element={<AdvancedOptimization />} />
          <Route path="/environmental-defense" element={<EnvironmentalDefense />} />
          <Route path="/protocol" element={<Protocol />} />
          <Route path="/engine-room" element={<EngineRoom />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/mitochondrial-guide" element={<MitochondrialGuide />} />
          <Route path="/longevity" element={<LongevityGuide />} />
        </Routes>
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
