import { useParams, Navigate } from 'react-router-dom';
import { POSTS } from '../data/posts';

/**
 * BlogPostRedirect - Redirects old numeric URLs (/blog/id/3) to slug-based URLs (/blog/brain-pills-that-work-vs-snake-oil)
 * This preserves SEO equity from any existing backlinks to numeric URLs.
 */
export default function BlogPostRedirect() {
  const { id } = useParams();
  const post = POSTS.find(p => p.id.toString() === id);

  if (post && post.slug) {
    return <Navigate to={`/blog/${post.slug}`} replace />;
  }

  // Fallback: if no post found or no slug, go to blog index
  return <Navigate to="/blog" replace />;
}
