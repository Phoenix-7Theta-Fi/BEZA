
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        pathname: '/random/**', // Made pathname more specific
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // This remains general as redirected paths vary
      }
    ],
  },
};

export default nextConfig;
