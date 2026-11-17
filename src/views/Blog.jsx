"use client";

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { PUBLISHED_POSTS } from '../data/posts';
import SEO from '../components/SEO';

// Editorial categories are presentation metadata only. Article records, URLs and
// existing category values remain untouched until each article is reviewed.
const SECTIONS = [
  { id: 'brain', label: 'Brain Health & Ageing', intro: 'Memory, attention, mood and the ageing brain.' },
  { id: 'metabolic', label: 'Metabolic Health', intro: 'Blood sugar, insulin, inflammation and everyday metabolic health.' },
  { id: 'nutrition', label: 'Nutrition & Supplements', intro: 'Food, nutrients and a careful look at supplement research.' },
  { id: 'movement', label: 'Exercise & Performance', intro: 'Muscle, movement, strength and healthy ageing.' },
  { id: 'sleep', label: 'Sleep & Recovery', intro: 'Rest, stress, recovery and the rhythms that shape health.' },
  { id: 'emerging', label: 'Emerging Longevity Science', intro: 'Interesting early research, with the uncertainties made clear.' },
];

// Explicit assignments for the broad editorial stories. The remaining
// supplement-combination guides are deliberately grouped under Nutrition.
const EDITORIAL_ASSIGNMENTS = {
  'forest-bathing-biochemistry-shinrin-yoku': 'brain',
  'ice-bath-dopamine-stanford-research': 'sleep',
  'seed-oils-inflammation-fatigue-weight-gain': 'nutrition',
  'chronic-inflammation-symptoms-root-cause-fatigue-joint-pain': 'metabolic',
  'blood-sugar-spikes-normal-fasting-glucose-danger': 'metabolic',
  'sun-phobia-spf-vitamin-d-mood': 'nutrition',
  'focus-attention-deficit-natural-solutions': 'brain',
  'anxiety-inflammation-hidden-link-brain-on-fire': 'brain',
  'chronic-fatigue-brain-tires-before-body': 'sleep',
  'ageing-faster-than-friends-science-of-glycation': 'metabolic',
  'muscle-loss-after-40-sarcopenia': 'movement',
  'methylation-crisis-cells-cannot-turn-food-into-fuel': 'emerging',
  'insomnia-high-cortisol-tired-but-wired': 'sleep',
  'collagen-spinal-regeneration-l4-l5': 'emerging',
  'dying-to-sleep-stress-alcohol-apnea': 'sleep',
  'probiotics-failing-garden-fertilizer-metaphor': 'nutrition',
  'beyond-stimulants-physician-guide-adhd-supplements': 'brain',
};

function categoryFor(post) {
  const slug = String(post.slug || post.id || '').toLowerCase();
  if (EDITORIAL_ASSIGNMENTS[slug]) return EDITORIAL_ASSIGNMENTS[slug];
  // Fallbacks cover articles added after the initial editorial inventory.
  const title = String(post.title || '').toLowerCase();
  if (/sleep|insomnia|apnoea|apnea|circadian|recovery/.test(title)) return 'sleep';
  if (/muscle|sarcopenia|exercise|strength|training|performance/.test(title)) return 'movement';
  if (/alzheimer|dementia|memory|brain|adhd|cognit|neuro/.test(title) && !/take together/.test(title)) return 'brain';
  if (/insulin|blood sugar|glucose|metabolic|glycation|obesity/.test(title) && !/take together/.test(title)) return 'metabolic';
  if (/mitochondri|longevity|cellular ageing|senescen/.test(title) && !/take together/.test(title)) return 'emerging';
  return 'nutrition';
}

const articleUrl = (post) => `/blog/${post.slug || post.id}`;

function ArticleCard({ post, featured = false }) {
  return (
    <Link href={articleUrl(post)} className="ev-journal-card" style={{
      display: 'flex', flexDirection: 'column', overflow: 'hidden', textDecoration: 'none',
      color: 'inherit', background: '#fff', border: '1px solid #e2e8f0',
      borderRadius: 16, boxShadow: '0 5px 18px rgba(15,23,42,.045)'
    }}>
      {post.image && <img src={post.image} alt={post.imageAlt || post.title} loading={featured ? 'eager' : 'lazy'}
        style={{ width: '100%', height: featured ? 250 : 170, objectFit: 'cover' }} />}
      <div style={{ padding: '1.15rem 1.25rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '.55rem' }}>
        <span style={{ color: '#0d7779', fontSize: '.76rem', fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase' }}>
          {SECTIONS.find(section => section.id === categoryFor(post))?.label}
        </span>
        <h3 style={{ fontFamily: '"Manrope", sans-serif', fontSize: featured ? 'clamp(1.35rem, 2.5vw, 1.85rem)' : '1.12rem', lineHeight: 1.3, margin: 0 }}>
          {post.title}
        </h3>
        <p style={{ color: '#475569', lineHeight: 1.6, fontSize: '.93rem', margin: 0, flex: 1 }}>
          {post.excerpt}
        </p>
        <span style={{ color: '#0d7779', fontWeight: 700, fontSize: '.85rem', paddingTop: '.4rem' }}>Read article →</span>
      </div>
    </Link>
  );
}

export default function Blog() {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const posts = useMemo(() => PUBLISHED_POSTS.filter(post => post.slug || post.id), []);
  const grouped = useMemo(() => Object.fromEntries(SECTIONS.map(section => [
    section.id, posts.filter(post => categoryFor(post) === section.id)
  ])), [posts]);
  const featured = posts.find(post => !/take.together|supplement.*stack|physician.s.guide/i.test(String(post.slug || '') + ' ' + String(post.title || ''))) || posts[0];
  const archivePosts = activeCategory === 'all' ? posts : grouped[activeCategory] || [];

  return (
    <div style={{ background: '#f7fafb', color: '#142536', minHeight: '100vh', fontFamily: '"Inter", sans-serif' }}>
      <SEO title="The Journal | Health & Longevity | EmpowerVida"
        description="Explore physician-led stories on metabolic health, brain health, nutrition, movement, sleep and emerging longevity research."
        canonical="/blog" ogImage="/dna_bg_user.jpg"
        schemaData={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'The Journal — EmpowerVida', url: 'https://empowervida.com/blog' }} />
      <header style={{ background: 'linear-gradient(125deg, #102d3c, #176466)', color: 'white', padding: 'clamp(2.2rem, 5vw, 4rem) 1.25rem 2.5rem' }}>
        <div style={{ maxWidth: 1100, margin: 'auto' }}>
          <p style={{ fontSize: '.8rem', fontWeight: 700, letterSpacing: '.2em', textTransform: 'uppercase', color: '#b4e6df' }}>EmpowerVida / The Journal</p>
          <h1 style={{ fontFamily: '"Manrope", sans-serif', fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', lineHeight: 1.08, margin: '.8rem 0', color: '#ffffff' }}>Ideas for a longer, healthier life.</h1>
          <p style={{ maxWidth: 660, lineHeight: 1.65, fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#e0f2f1', marginBottom: 0 }}>
            The science of health and ageing, explained clearly. Curious about what might help. Careful about what the evidence actually shows.
          </p>
        </div>
      </header>
      <main style={{ maxWidth: 1100, margin: 'auto', padding: 'clamp(1.5rem, 4vw, 3rem) 1.1rem 4rem' }}>
        {featured && <section aria-labelledby="featured-heading" style={{ marginBottom: '2.5rem' }}>
          <h2 id="featured-heading" style={{ fontSize: '1.45rem', margin: '0 0 1rem' }}>Featured story</h2>
          <div style={{ maxWidth: 740 }}><ArticleCard post={featured} featured /></div>
        </section>}
        <section aria-labelledby="explore-heading">
          <h2 id="explore-heading" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '.4rem' }}>Explore by subject</h2>
          <p style={{ color: '#475569', margin: '0 0 1.5rem', lineHeight: 1.6 }}>Find a starting point that interests you. Every story is also available in the full archive.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))', gap: '1rem' }}>
            {SECTIONS.map(section => (
              <div key={section.id} style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 16, padding: '1.3rem' }}>
                <h3 style={{ margin: '0 0 .45rem', fontSize: '1.18rem', fontFamily: '"Manrope", sans-serif' }}>{section.label}</h3>
                <p style={{ color: '#526375', fontSize: '.91rem', lineHeight: 1.55, margin: '0 0 1rem' }}>{section.intro}</p>
                {grouped[section.id].length > 0 ? (
                  <>
                    <p style={{ color: '#64748b', fontSize: '.8rem', margin: '0 0 .7rem' }}>{grouped[section.id].length} articles</p>
                    {grouped[section.id].slice(0, 2).map(post => (
                      <Link key={post.slug || post.id} href={articleUrl(post)}
                        style={{ display: 'block', color: '#165f65', fontWeight: 650, lineHeight: 1.45, textDecoration: 'none', marginBottom: '.75rem', fontSize: '.92rem' }}>
                        {post.title} →
                      </Link>
                    ))}
                    <button type="button" onClick={() => { setActiveCategory(section.id); setArchiveOpen(true); }}
                      style={{ border: 0, background: 'transparent', color: '#0d7779', fontWeight: 750, padding: '.3rem 0', cursor: 'pointer' }}>
                      View all in this subject →
                    </button>
                  </>
                ) : <p style={{ fontSize: '.9rem', color: '#64748b' }}>More stories coming soon.</p>}
              </div>
            ))}
          </div>
        </section>
        <section id="journal-archive" aria-labelledby="archive-heading" style={{ marginTop: '3rem', borderTop: '1px solid #dbe4e9', paddingTop: '2rem' }}>
          <h2 id="archive-heading" style={{ fontSize: '1.6rem', marginBottom: '.5rem' }}>All articles</h2>
          <p style={{ color: '#526375', lineHeight: 1.6 }}>Prefer to browse everything? The full Journal archive is still here.</p>
          <button type="button" onClick={() => setArchiveOpen(open => !open)} aria-expanded={archiveOpen}
            style={{ background: '#145e64', color: '#fff', border: 0, borderRadius: 999, padding: '.85rem 1.4rem', cursor: 'pointer', fontWeight: 700 }}>
            {archiveOpen ? 'Hide article archive' : `Browse all ${posts.length} articles`}
          </button>
          {archiveOpen && <div style={{ paddingTop: '1.5rem' }}>
            <div aria-label="Filter archive by subject" style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              {[{ id: 'all', label: 'All subjects' }, ...SECTIONS].map(section => (
                <button type="button" key={section.id} onClick={() => setActiveCategory(section.id)}
                  aria-pressed={activeCategory === section.id}
                  style={{ border: '1px solid #cbd5e1', borderRadius: 999, padding: '.55rem .85rem', cursor: 'pointer', fontSize: '.83rem', fontWeight: 650,
                    background: activeCategory === section.id ? '#145e64' : 'white', color: activeCategory === section.id ? 'white' : '#334155' }}>
                  {section.label}
                </button>
              ))}
            </div>
            <p style={{ fontSize: '.85rem', color: '#64748b' }}>Showing {archivePosts.length} articles</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 265px), 1fr))', gap: '1rem' }}>
              {archivePosts.map(post => <ArticleCard key={post.slug || post.id} post={post} />)}
            </div>
          </div>}
        </section>
        <aside style={{ marginTop: '3rem', padding: '1.5rem', background: '#e9f3f2', borderRadius: 16 }}>
          <h2 style={{ fontSize: '1.2rem', margin: '0 0 .5rem' }}>Enjoy reading EmpowerVida?</h2>
          <p style={{ color: '#475569', lineHeight: 1.6, margin: '0 0 .75rem' }}>Get new stories and thoughtful updates on health and longevity.</p>
          <a href="https://drgavinmcauley.substack.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0d7779', fontWeight: 750 }}>Visit the newsletter →</a>
        </aside>
        <p style={{ color: '#64748b', fontSize: '.78rem', lineHeight: 1.6, marginTop: '1.5rem' }}>For general information only; not a substitute for personalised medical advice.</p>
      </main>
    </div>
  );
}
