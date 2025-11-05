/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      'via.placeholder.com',
      'images.unsplash.com',
      'source.unsplash.com',
      'images.pexels.com',
      'cdn.pixabay.com',
    ],
    remotePatterns: [
      { protocol: 'https', hostname: 'via.placeholder.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'cdn.pixabay.com' },
    ],
  },
};

module.exports = nextConfig;

