"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const GUIDE_LINKS = [
  { href: '/longevity', label: 'The Five Pillars of Longevity' },
  { href: '/mitochondrial-guide', label: 'Mitochondrial Health' },
  { href: '/insulin-story', label: 'The Insulin Story' },
  { href: '/environmental-defense', label: 'Environmental Defence' },
  { href: '/protocol', label: 'Exploring Longevity Science' },
];

const NEWSLETTER_URL = 'https://drgavinmcauley.substack.com';

export default function Navigation() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(null);
  const [expandedMobileGroup, setExpandedMobileGroup] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopOpen(null);
    setExpandedMobileGroup(null);
    navRef.current?.querySelectorAll('details[open]').forEach((item) => { item.open = false; });
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        setDesktopOpen(null);
        setExpandedMobileGroup(null);
        navRef.current?.querySelectorAll('details[open]').forEach((item) => { item.open = false; });
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => { if (navRef.current && !navRef.current.contains(event.target)) setDesktopOpen(null); };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  const isGuide = GUIDE_LINKS.some((item) => item.href === pathname);

  const menuLinks = (items) => items.map((item) => (
    <Link key={item.href} href={item.href} className="ev-nav-subitem" aria-current={pathname === item.href ? 'page' : undefined} onClick={() => { setMobileOpen(false); setDesktopOpen(null); }}>
      {item.label}
    </Link>
  ));

  return (
    <nav ref={navRef} className="ev-navigation" aria-label="Main navigation">
      <div className="ev-nav-inner">
        <Link href="/" className="ev-nav-brand" aria-label="EmpowerVida — Home" onClick={() => setMobileOpen(false)}>
          <span>EMPOWER</span><span className="ev-nav-accent">VIDA</span>
        </Link>

        <div className="ev-nav-desktop">
          <Link href="/blog" className="ev-nav-item" aria-current={pathname === '/blog' ? 'page' : undefined}>The Journal</Link>

          <div className="ev-nav-dropdown">
            <button type="button" className="ev-nav-item ev-nav-dropdown-button" aria-label="Longevity Guides menu" aria-expanded={desktopOpen === 'guides'} aria-controls="ev-desktop-guides" onClick={() => setDesktopOpen(v => v === 'guides' ? null : 'guides')}>Longevity Guides <span aria-hidden="true" className="ev-nav-chevron">⌄</span></button>
            {desktopOpen === 'guides' && <div id="ev-desktop-guides" className="ev-nav-popover">{menuLinks(GUIDE_LINKS)}</div>}
          </div>

          <Link href="/empower-protocol" className="ev-nav-item" aria-current={pathname === '/empower-protocol' ? 'page' : undefined}>The Blueprint</Link>

          <div className="ev-nav-dropdown ev-nav-more">
            <button type="button" className="ev-nav-item ev-nav-dropdown-button" aria-label="More pages menu" aria-expanded={desktopOpen === 'more'} aria-controls="ev-desktop-more" onClick={() => setDesktopOpen(v => v === 'more' ? null : 'more')}>More <span aria-hidden="true" className="ev-nav-chevron">⌄</span></button>
            {desktopOpen === 'more' && <div id="ev-desktop-more" className="ev-nav-popover ev-nav-popover-right">
              <Link href="/about" className="ev-nav-subitem">About</Link>
              <a href={NEWSLETTER_URL} className="ev-nav-subitem" target="_blank" rel="noopener noreferrer">Newsletter <span className="ev-external" aria-label="opens in a new tab">↗</span></a>
              <Link href="/contact" className="ev-nav-subitem">Contact</Link>
            </div>}
          </div>
        </div>

        <button type="button" className="ev-nav-toggle" aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} aria-controls="ev-mobile-menu" onClick={() => setMobileOpen((open) => !open)}>
          {mobileOpen ? <span aria-hidden="true">✕</span> : <span aria-hidden="true">☰</span>}
        </button>
      </div>

      <div id="ev-mobile-menu" className="ev-nav-mobile" hidden={!mobileOpen}>
        <Link href="/" className="ev-nav-mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/blog" className="ev-nav-mobile-link" onClick={() => setMobileOpen(false)}>The Journal</Link>
        <div className="ev-nav-mobile-group">
          <button type="button" className="ev-nav-mobile-group-toggle" aria-expanded={expandedMobileGroup === 'guides'} aria-controls="ev-mobile-guides" onClick={() => setExpandedMobileGroup((current) => current === 'guides' ? null : 'guides')}>
            Longevity Guides <span aria-hidden="true">{expandedMobileGroup === 'guides' ? '⌃' : '⌄'}</span>
          </button>
          <div id="ev-mobile-guides" className="ev-nav-mobile-subitems" hidden={expandedMobileGroup !== 'guides'}>{menuLinks(GUIDE_LINKS)}</div>
        </div>
        <Link href="/empower-protocol" className="ev-nav-mobile-link" onClick={() => setMobileOpen(false)}>The Blueprint</Link>
        </div>
        <div className="ev-nav-mobile-secondary">
          <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <a href={NEWSLETTER_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)}>Newsletter ↗</a>
          <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      </div>

      <style jsx global>{`
        .ev-navigation { position:fixed; top:0; left:0; width:100%; z-index:2000; background:rgba(255,255,255,.94); backdrop-filter:blur(14px); -webkit-backdrop-filter:blur(14px); border-bottom:1px solid rgba(0,0,0,.055); font-family:Inter,Arial,sans-serif; }
        .ev-nav-inner { max-width:1440px; margin:auto; min-height:76px; padding:0 clamp(18px,3vw,44px); display:flex; align-items:center; justify-content:space-between; gap:20px; }
        .ev-nav-brand { white-space:nowrap; color:var(--color-text,#1d1d1f); text-decoration:none; font-size:1.15rem; font-weight:750; letter-spacing:.11em; }
        .ev-nav-accent { color:var(--color-accent-teal,#148b81); }
        .ev-nav-desktop { display:flex; align-items:center; justify-content:flex-end; gap:clamp(12px,1.45vw,25px); }
        .ev-nav-item { color:var(--color-text-muted,#50565a); text-decoration:none; font-size:clamp(.72rem,.83vw,.86rem); font-weight:600; text-transform:uppercase; letter-spacing:.025em; white-space:nowrap; padding:12px 0; cursor:pointer; }
        .ev-nav-item:hover, .ev-nav-item[aria-current] { color:var(--color-primary,#16877f); }
        .ev-nav-dropdown { position:relative; }
        .ev-nav-dropdown-button { display:flex; align-items:center; gap:5px; border:0; background:transparent; font-family:inherit; }
        
        .ev-nav-chevron { font-size:1rem; line-height:1; }
        .ev-nav-popover { position:absolute; top:100%; left:0; min-width:260px; max-width:320px; padding:10px; border:1px solid rgba(0,0,0,.09); border-radius:14px; background:#fff; box-shadow:0 14px 35px rgba(0,0,0,.12); display:flex; flex-direction:column; gap:2px; }
        .ev-nav-popover-right { left:auto; right:0; min-width:180px; }
        .ev-nav-subitem { display:block; padding:11px 12px; color:#333b3d; text-decoration:none; font-size:.9rem; line-height:1.35; border-radius:8px; }
        .ev-nav-subitem:hover, .ev-nav-subitem:focus-visible, .ev-nav-subitem[aria-current="page"] { background:#eff7f5; color:#136d66; }
        .ev-nav-toggle { display:none; border:0; background:transparent; color:#25302f; font-size:1.5rem; cursor:pointer; padding:10px; }
        .ev-nav-mobile[hidden] { display:none !important; }
        .ev-nav-mobile { display:none; }
        .ev-navigation a:focus-visible, .ev-navigation button:focus-visible, .ev-navigation .ev-nav-dropdown-button:focus-visible { outline:2px solid #16877f; outline-offset:4px; }
        @media (max-width:1100px) {
          .ev-nav-desktop { display:none; }
          .ev-nav-toggle { display:block; }
          .ev-nav-inner { min-height:72px; }
          .ev-nav-mobile { display:block; position:fixed; top:72px; left:0; right:0; max-height:calc(100dvh - 72px); overflow-y:auto; overscroll-behavior:contain; background:#fff; border-top:1px solid #e9eeec; padding:12px clamp(20px,6vw,45px) 32px; box-shadow:0 18px 30px rgba(0,0,0,.1); }
          .ev-nav-mobile-link, .ev-nav-mobile-group-toggle { display:flex; align-items:center; justify-content:space-between; width:100%; padding:16px 0; font-size:1.03rem; font-weight:600; color:#25302f; text-decoration:none; border-bottom:1px solid #eef0ef; cursor:pointer; list-style:none; }
          .ev-nav-mobile-group-toggle { border-top:0; border-left:0; border-right:0; background:transparent; text-align:left; font-family:inherit; }
          .ev-nav-mobile-subitems[hidden] { display:none !important; }
          .ev-nav-mobile-subitems { padding:5px 0 10px 12px; }
          .ev-nav-mobile-subitems .ev-nav-subitem { padding:12px 8px; }
          .ev-nav-mobile-secondary { display:flex; flex-wrap:wrap; gap:18px; padding-top:24px; }
          .ev-nav-mobile-secondary a { color:#56605e; text-decoration:none; font-size:.92rem; }
        }
        @media (prefers-reduced-motion:reduce) { .ev-navigation * { scroll-behavior:auto !important; } }
      `}</style>
    </nav>
  );
}
