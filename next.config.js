/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
    unoptimized: true,  // TEMPORARILY disable image optimization
  },
  turbopack: {
    root: __dirname, // ensures Next.js uses the project folder as the workspace root
  },
};

module.exports = nextConfig;
