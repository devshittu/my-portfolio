/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'dummyimage.com',
        port: '',
        pathname: '/**/*',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Add this line
        port: '',
        pathname: '/**/*',
      },
    ],
  },

  // Enable standalone output for Docker
  output: 'standalone',
  // Add this to silence the Turbopack error
  turbopack: {},
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimizer.forEach((minimizer) => {
        if (minimizer.constructor.name === 'TerserPlugin') {
          minimizer.options.exclude = /node_modules|\.min\.js/;
        }
      });
    }
    return config;
  },
};

module.exports = nextConfig;
