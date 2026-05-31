"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { POSTS } from '../data/posts';

/**
 * BlogPostRedirect — Redirects old numeric URLs (?id=3) to slug-based URLs (/blog/slug)
 * Preserves SEO equity from any existing backlinks to numeric blog IDs.
 * Uses URLSearchParams (inside useEffect) to avoid crashing during Next.js static build.
 */
export default function BlogPostRedirect() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id) {
      const post = POSTS.find(p => p.id.toString() === id);
      if (post?.slug) {
        router.replace(`/blog/${post.slug}`);
        return;
      }
    }
    // Fallback: no matching post found → go to blog index
    router.replace('/blog');
  }, [router]);

  // Static build sees this — redirect happens client-side via useEffect
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', color: 'var(--color-text-muted)' }}>
      <p>Redirecting…</p>
    </div>
  );
}
