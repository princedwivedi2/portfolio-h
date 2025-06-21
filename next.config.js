/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // Enable SWC minification for better performance
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Add transpiler for framer-motion
  transpilePackages: ['framer-motion'],
  // Explicitly set the output mode to ensure ESM compatibility
  output: 'standalone',
};

module.exports = nextConfig;
