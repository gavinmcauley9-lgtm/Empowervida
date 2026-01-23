# 🦁 ORGANIC BEAST BLUEPRINT - EMPOWERVIDA
## The Complete SEO Domination Strategy

*Created: January 23, 2026*
*Goal: 10,000+ organic visitors/month within 12 months*

---

## 📊 CURRENT STATE ASSESSMENT

### What's Already Excellent ✅
| Area | Score | Status |
|------|-------|--------|
| Technical SEO Foundation | 95/100 | Sitemap, robots.txt, schema markup |
| E-E-A-T Signals | 90/100 | Physician author, medical credentials, MedicalWebPage schema |
| Content Volume | 85/100 | 80 blog posts, 3 pillar guides, 7 protocols |
| FAQ Schema | 90/100 | 15 FAQs across key pages |
| Mobile Responsiveness | 95/100 | Clamp typography, touch targets |
| Site Architecture | 85/100 | Clear hierarchy, logical navigation |

### Opportunities for Massive Growth 🚀
| Area | Current | Potential | Priority |
|------|---------|-----------|----------|
| **Image Optimization** | 20/100 | 90/100 | 🔴 HIGH |
| **Internal Linking** | 40/100 | 95/100 | 🔴 HIGH |
| **Backlink Profile** | 10/100 | 70/100 | 🔴 HIGH |
| **Content Depth (pSEO posts)** | 50/100 | 90/100 | 🟡 MEDIUM |
| **Featured Snippets** | 30/100 | 80/100 | 🟡 MEDIUM |
| **Core Web Vitals** | 60/100 | 95/100 | 🟡 MEDIUM |

---

## 🔴 HIGH PRIORITY OPTIMIZATIONS

### 1. IMAGE OPTIMIZATION (Est. Performance: 32 → 75+)

**Current Problem:**
- 147 images in `/public` folder
- Most are PNG format (500KB - 1MB each!)
- Hero images alone: ~50MB total
- This is DESTROYING your Core Web Vitals

**The Fix:**
```bash
# Convert all PNGs to WebP (60-80% smaller)
for file in public/*.png; do
  cwebp -q 80 "$file" -o "${file%.png}.webp"
done
```

**Specific Images to Convert First:**
| Image | Current Size | Est. WebP Size | Savings |
|-------|-------------|----------------|---------|
| home_hero_fade.png | 806 KB | ~80 KB | 90% |
| brain_sewage_glymphatic.png | 1 MB | ~100 KB | 90% |
| metabolic_state_3_gridlock.png | 1.1 MB | ~110 KB | 90% |
| mitochondrion_final.png | 1 MB | ~100 KB | 90% |

**Impact:** LCP drops from 17s → 3s, Performance score 32 → 75+

---

### 2. INTERNAL LINKING IMPLEMENTATION

**Current Problem:**
- Blog posts link to protocols ✅
- BUT protocols don't link to blog posts ❌
- Pillar guides don't cross-link ❌
- No "Related Posts" on blog pages ❌

**The Strategy (Already Documented):**
See `INTERNAL_LINKING_STRATEGY.md` - but key actions:

**a) Add Related Posts Component to BlogPost.jsx:**
```jsx
// Already exists but verify it's showing 3 related posts
{relatedPosts.length > 0 && (
  <RelatedPosts posts={relatedPosts} />
)}
```

**b) Protocol Page - Add Links to Each Stack:**
```jsx
// In Metabolic Stack section:
<p>
  Understand the science: <Link to="/insulin-story">The Insulin Story</Link>
</p>
<p>
  Related reading: <Link to="/blog/23">5 Signs of Insulin Resistance</Link>
</p>
```

**c) Cross-Link Pillar Guides:**
- Insulin Story → mentions Mitochondrial Guide
- Mitochondrial Guide → mentions Longevity Guide  
- Longevity Guide → mentions Insulin Story

**Impact:** +30% page authority distribution, +20% user engagement

---

### 3. BACKLINK BUILDING CAMPAIGN

**Current Status:** ~0 high-quality backlinks (critical weakness!)

**Phase 1: Foundation Backlinks (This Month)**

| Platform | Action | Link Type |
|----------|--------|-----------|
| LinkedIn | Create company page + articles | DoFollow |
| Crunchbase | Create company profile | DoFollow |
| Reddit | Participate in r/longevity, r/biohacking (NO spam!) | Referral |
| Medium | Republish top 3 blog posts with canonical | DoFollow |
| Substack | Launch newsletter with link back | DoFollow |

**Phase 2: Guest Posts (Month 2-3)**

Target sites for guest posts:
1. FoundMyFitness.com (Dr. Rhonda Patrick's site)
2. PeterAttiaMD.com (if they accept guests)
3. Examine.com (supplement science)
4. LongevityAdvice.com
5. Biohacker's Magazine

**Phase 3: HARO/Connectively (Ongoing)**

Sign up for Help A Reporter Out (HARO):
- Respond to health/longevity queries as Dr. Gavin McAuley
- Get quoted in major publications
- Huge authority boost

**Impact:** Domain Authority 0 → 20+ in 6 months

---

## 🟡 MEDIUM PRIORITY OPTIMIZATIONS

### 4. CONTENT DEPTH - EXPAND PROGRAMMATIC POSTS

**Current Problem:**
- 54 programmatic posts exist
- Many are thin (~120 words)
- Google may see these as low-value

**The Fix:**
Expand top 20 programmatic posts to 1,500+ words each:

**Priority Posts to Expand:**
1. Any post currently ranking (check GSC)
2. Posts targeting high-volume keywords
3. Posts about popular supplement combos

**Content Template:**
```markdown
## [Supplement A] + [Supplement B]: The Science

### What is [Supplement A]?
(300 words - mechanism, benefits, research)

### What is [Supplement B]?  
(300 words - mechanism, benefits, research)

### Why Combine Them?
(400 words - synergy explanation, clinical evidence)

### Dosing Protocol
(200 words - your physician recommendations)

### Who Should Take This Stack?
(200 words - ideal candidates, contraindications)

### Related Protocols
- Link to relevant protocol page
- Link to related blog posts
```

**Impact:** Programmatic pages become ranking assets instead of liabilities

---

### 5. FEATURED SNIPPET OPTIMIZATION

**Current Opportunity:**
Your FAQ schema is great, but you can also target direct Featured Snippets.

**How to Win Featured Snippets:**

**a) Definition Boxes (Position 0)**
Add "What is X?" sections to pillar guides:

```html
<div class="featured-snippet-bait">
  <h2>What is Insulin Resistance?</h2>
  <p><strong>Insulin resistance</strong> is a metabolic condition where 
  cells become less responsive to insulin, requiring the pancreas to 
  produce more insulin to maintain normal blood glucose levels. This 
  creates a state of hyperinsulinemia that precedes type 2 diabetes 
  by 10-15 years.</p>
</div>
```

**b) List Snippets**
Format key sections as numbered/bulleted lists:

```html
<h2>5 Signs of Insulin Resistance</h2>
<ol>
  <li><strong>Fatigue after meals</strong> - especially carb-heavy meals</li>
  <li><strong>Belly fat accumulation</strong> - apple-shaped body</li>
  ...
</ol>
```

**c) Table Snippets**
Add comparison tables:

```html
<h2>CoQ10 vs Ubiquinol: Which is Better?</h2>
<table>
  <tr><th>Feature</th><th>CoQ10</th><th>Ubiquinol</th></tr>
  <tr><td>Absorption</td><td>Lower</td><td>8x Higher</td></tr>
  ...
</table>
```

**Impact:** 5-10 Featured Snippets = 500+ extra clicks/month

---

### 6. CORE WEB VITALS - REMAINING FIXES

**a) Largest Contentful Paint (LCP) - Currently ~17s**
- Convert images to WebP ✅ (covered above)
- Add `loading="lazy"` to below-fold images
- Preload hero image: `<link rel="preload" as="image" href="/hero.webp">`

**b) Total Blocking Time (TBT) - Currently ~2s (improved!)**
- Already using code splitting ✅
- Consider moving non-critical JS to `defer`

**c) Cumulative Layout Shift (CLS) - Currently 0 ✅**
- Already excellent!
- Maintain by always setting image dimensions

**Impact:** Performance score 60 → 90+

---

## 🟢 ENHANCEMENT OPPORTUNITIES

### 7. VIDEO CONTENT (YouTube SEO)

**The Opportunity:**
Create 5-10 minute videos for top blog posts. YouTube is the #2 search engine!

**Video Topics:**
1. "The Insulin Story - Explained in 7 Minutes"
2. "Why Your Mitochondria Are Dying (And How to Fix It)"
3. "5 Signs of Insulin Resistance Your Doctor Misses"

**SEO Benefits:**
- Video embeds increase dwell time
- YouTube videos rank in Google
- Builds Dr. Gavin's personal brand
- Transcripts = more indexable content

---

### 8. PODCAST GUESTING

**Strategy:**
Get Dr. Gavin on longevity/health podcasts:

**Target Podcasts:**
1. The Huberman Lab (reach out via Stanford)
2. The Drive with Peter Attia
3. FoundMyFitness with Dr. Rhonda Patrick
4. Wellness Mama Podcast
5. Ben Greenfield Life

**Pitch Angle:**
"ER Physician reveals the metabolic dysfunction pattern he sees in 80% of patients"

**Impact:** Massive authority boost + backlinks + traffic

---

### 9. SCHEMA MARKUP EXPANSION

**Currently Have:**
- FAQ Schema ✅
- Breadcrumb Schema ✅
- MedicalWebPage Schema ✅
- Article Schema ✅

**Add:**
- **HowTo Schema** (for protocol pages)
- **Product Schema** (for shop items)
- **Review Schema** (add testimonials section)
- **LocalBusiness Schema** (if applicable)

---

### 10. CONTENT CALENDAR - NEW POSTS

**Recommended Posting Cadence:**
- 2 new blog posts/week (targeting long-tail keywords)
- 1 pillar guide update/month
- 1 new FAQ added/week

**Keyword Opportunities (from research):**

| Keyword | Volume | Difficulty | Priority |
|---------|--------|------------|----------|
| insulin resistance symptoms | 27,100 | 45 | HIGH |
| how to increase mitochondria | 1,900 | 30 | HIGH |
| nad supplement benefits | 8,100 | 40 | HIGH |
| berberine vs metformin | 12,100 | 35 | HIGH |
| what causes brain fog | 18,100 | 50 | MEDIUM |
| best longevity supplements | 2,400 | 55 | MEDIUM |

---

## 📅 90-DAY ACTION PLAN

### Week 1-2: Technical Foundation
- [ ] Convert top 20 images to WebP
- [ ] Update image references in code
- [ ] Deploy and test performance score
- [ ] Re-run Google PageSpeed Insights

### Week 3-4: Internal Linking
- [ ] Add Related Posts to all blog pages
- [ ] Add 3 internal links to Protocol page
- [ ] Cross-link all 3 pillar guides
- [ ] Add Diagnostics links from protocols

### Week 5-8: Backlink Campaign
- [ ] Create LinkedIn company page
- [ ] Create Crunchbase profile
- [ ] Launch Substack newsletter
- [ ] Republish 3 posts on Medium
- [ ] Submit to 3 health directories

### Week 9-12: Content Expansion
- [ ] Expand 10 programmatic posts to 1,500+ words
- [ ] Write 4 new blog posts (targeting keywords above)
- [ ] Add Featured Snippet formatting to pillar guides
- [ ] Create 1 YouTube video

---

## 📊 SUCCESS METRICS

| Metric | Current | 3 Month Goal | 6 Month Goal | 12 Month Goal |
|--------|---------|--------------|--------------|---------------|
| Organic Traffic | ~50/mo | 500/mo | 2,000/mo | 10,000/mo |
| Indexed Pages | 39 | 95 | 120 | 200 |
| Domain Authority | 0 | 10 | 20 | 35 |
| Ranking Keywords | ~20 | 100 | 300 | 1,000 |
| Featured Snippets | 0 | 3 | 10 | 25 |
| Backlinks | ~5 | 50 | 150 | 500 |

---

## 🎯 THE ONE THING THAT WILL MAKE THE BIGGEST DIFFERENCE

If you do ONLY ONE THING from this list:

### **Convert your images to WebP**

Why? Because:
1. It will 10x your performance score
2. Google rewards fast sites
3. Users stay longer on fast sites
4. It's a quick win (few hours of work)
5. Everything else compounds on top of good performance

---

## 🏆 THE UNFAIR ADVANTAGE

Your site has something most health sites DON'T have:

**A real physician with real credentials creating real content.**

This is your E-E-A-T superpower. Use it by:
1. Adding video content featuring Dr. Gavin
2. Getting podcast appearances
3. Publishing on medical platforms (e.g., Kevin MD)
4. Building a personal brand alongside the site

**Google is actively demoting AI-generated health content.**
**Your human-written, physician-authored content is GOLD.**

---

*Document created: January 23, 2026*
*Next review: February 23, 2026*
*Status: Ready for implementation*
