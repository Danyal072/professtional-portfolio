import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["img.freepik.com", "fps.cdnpk.net"],
  },
  
};
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default nextConfig;
