/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    domains: ['via.placeholder.com'],
  },
  experimental: {
    optimizeCss: true,
  },
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig

