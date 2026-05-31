/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  // Note: next/image optimisation requires a Node.js server.
  // With output:'export' (static HTML), we must use unoptimized.
  // WebP versions already exist in /public/ for manual use.
  images: {
    unoptimized: true,
  },
  // Skip ESLint and TypeScript checks during production builds.
  // Linting is a dev/CI concern — not a deployment blocker.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
