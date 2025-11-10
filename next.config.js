/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp'],
    domains: ['via.placeholder.com', 'images.unsplash.com'],
    unoptimized: true,
  },
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig

