/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
    unoptimized: true,  // TEMPORARILY disable image optimization
  },
};

module.exports = nextConfig;
