import { POSTS } from '../src/data/posts';

export default function sitemap() {
  const DOMAIN = 'https://empowervida.com';

  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/diagnostics',
    '/advanced-optimization',
    '/environmental-defense',
    '/protocol',
    '/empower-protocol',
    '/engine-room',
    '/shop',
    '/mitochondrial-guide',
    '/longevity',
    '/calculator',
    '/biological-age',
    '/diagnostics-portal'
  ].map((route) => ({
    url: `${DOMAIN}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicRoutes = POSTS.map((post) => ({
    url: `${DOMAIN}/blog/${post.slug || post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
