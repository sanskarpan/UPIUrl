/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Enable type checking during build
    ignoreBuildErrors: false,
  },
  eslint: {
    // Run ESLint during builds
    ignoreDuringBuilds: false,
  },
  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-qr-code'],
  },
  // Redirects for legacy URLs
  async redirects() {
    return [
      {
        source: '/pay',
        destination: '/',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
