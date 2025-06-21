
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
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
        {
        protocol: 'https',
        hostname: 'ghushineindia.com',
        port: '',        
        pathname: '/**', 
      },
    ],
    
  },
  allowedDevOrigins: [
    'https://6000-firebase-studio-1750158748599.cluster-fdkw7vjj7bgguspe3fbbc25tra.cloudworkstations.dev',
  ],
  experimental: {
    // Any other experimental flags would go here
  },

};

export default nextConfig;
