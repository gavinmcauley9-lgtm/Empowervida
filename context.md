# Empowervida — Project Context

> **Last updated:** 2026-06-06
> **Status:** Live site, active content & SEO work
> **Owner:** Dr Gavin McAuley
> **Live URL:** empowervida.com

---

## Project Overview

**Empowervida** is a health and longevity education website targeting Australians (and global audience) interested in evidence-based wellness, supplementation, and longevity science. The site features educational blog content, diagnostic tools, supplement protocols, and a curated shop — all authored from the perspective of a practicing medical doctor.

**Target audience:** Health-conscious adults 35-65, interested in longevity, biohacking, and evidence-based supplementation.

**Tech stack:** React (Vite), vanilla CSS, Netlify hosting, Kit (email marketing), Substack (newsletter cross-posting).

---

## Architecture

### Frontend — React + Vite SPA
- **Framework:** React via Vite (`vite.config.js`)
- **Styling:** Vanilla CSS (`src/index.css`)
- **Routing:** React Router (defined in `App.jsx`)
- **Hosting:** Netlify (`netlify.toml`)
- **Content:** Blog posts stored as structured data in `src/data/`

### Content Strategy
- Blog articles on supplements, longevity, diagnostics
- Substack newsletter cross-posting
- Pinterest visual content pipeline
- Kit email automation (lead magnets, welcome sequences)
- SEO-first approach with programmatic content generation

---

## File Map

### Core Application
| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app with routing |
| `src/main.jsx` | React entry point |
| `src/index.css` | Global styles |
| `src/views/` | 26 page components (Home, Blog, Shop, Protocol, etc.) |
| `src/components/` | Reusable UI components |
| `src/data/` | Blog post data, supplement data |

### Key Pages
| View | Purpose |
|------|---------|
| `Home.jsx` | Landing page |
| `Blog.jsx` | Blog listing with search/filter |
| `BlogPost.jsx` | Individual blog post renderer |
| `Shop.jsx` | Curated supplement shop (affiliate) |
| `Protocol.jsx` | Supplement protocol guide |
| `Diagnostics.jsx` / `DiagnosticsPortal.jsx` | Health diagnostic tools |
| `Calculator.jsx` | Health calculators |
| `PhenoAge.jsx` | Biological age calculator |
| `InsulinStory.jsx` | Educational content on insulin/metabolism |
| `MitochondrialGuide.jsx` | Mitochondrial health deep-dive |
| `LongevityGuide.jsx` | Longevity science overview |

### Strategy & Planning Documents
| File | Purpose |
|------|---------|
| `COMPLETE_SEO_SUMMARY.md` | Comprehensive SEO audit and action plan |
| `SEO_PREMARKETING_PLAN.md` | Pre-launch SEO strategy |
| `ORGANIC_BEAST_BLUEPRINT.md` | Organic traffic growth blueprint |
| `PROGRAMMATIC_SEO_GUIDE.md` | Guide for programmatic content at scale |
| `INTERNAL_LINKING_STRATEGY.md` | Internal link architecture |
| `META_DESCRIPTION_GUIDE.md` | Meta description templates and best practices |
| `PINTEREST_POSTING_SCHEDULE.md` | Pinterest content calendar |
| `EMPOWERVIDA_CONTENT_STANDARDS.md` | Voice, tone, and AHPRA compliance standards |
| `GAVIN_VOICE_PROFILE.md` | Dr McAuley's writing voice profile for AI content |
| `FISETIN_CONTENT_PLAN.md` | Content plan for fisetin supplement coverage |

### Content Pieces (Substack / Blog)
| File | Purpose |
|------|---------|
| `SUBSTACK_LAUNCH_POST.md` | Newsletter launch post |
| `SUBSTACK_COQ10_POST.md` | CoQ10 deep-dive article |
| `SUBSTACK_MULTIVITAMIN_POST.md` | Multivitamin analysis |
| `SUBSTACK_TYPE3_DIABETES.md` | Type 3 diabetes / brain health |
| `BLOG_POST_BIOLOGICAL_AGE.md` | Biological age testing guide |

### Utility Scripts
| File | Purpose |
|------|---------|
| `audit_links.cjs` | Broken link checker |
| `audit_citations.cjs` | Citation validity checker |
| `fix_british_english.cjs` | British → Australian English converter |
| `convert-images.cjs` | Image format optimization |
| `expand_blogs.cjs` | Blog post content expansion tool |
| `generate_supplement_posts.js` | Programmatic supplement post generator |

### Config
| File | Purpose |
|------|---------|
| `netlify.toml` | Netlify deployment config (redirects, headers) |
| `package.json` | Node dependencies |
| `vite.config.js` | Vite build config |

---

## Key Design Decisions

| Decision | Rationale |
|----------|-----------|
| **Vite + React SPA** | Fast build, hot reload, modern tooling |
| **Vanilla CSS over Tailwind** | Maximum control over design system, no utility class bloat |
| **Netlify hosting** | Free tier, automatic deploys from Git, built-in CDN |
| **AHPRA compliance** | All medical content includes appropriate disclaimers — Australian healthcare advertising regulations |
| **Affiliate model** | Revenue via curated supplement shop (iHerb, Amazon AU) — no direct product sales |
| **Dr voice profile** | AI-generated content follows documented voice profile to maintain authenticity |
| **British/Australian English** | Consistent use of Australian English spelling across all content |

---

## Current State

- **Site:** Live and deployed on Netlify
- **Content:** 40+ blog posts, multiple Substack articles
- **SEO:** Multiple audits completed, internal linking strategy implemented
- **Email:** Kit integration with lead magnets and welcome sequences
- **Performance:** Image optimization pass completed (WebP conversion)
- **Compliance:** AHPRA disclaimer audit completed

---

## Next Steps

1. [ ] Continue blog content pipeline (fisetin, NMN, quercetin)
2. [ ] Pinterest content schedule execution
3. [ ] Substack growth — cross-posting workflow
4. [ ] Programmatic SEO — supplement combination pages at scale
5. [ ] Performance monitoring — Core Web Vitals
6. [ ] Email funnel optimization — lead magnet conversion tracking
