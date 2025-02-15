import { NextConfig } from 'next';
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ['img.freepik.com'],
  },
  reactStrictMode: false,
  experimental: {
    appDir: false,
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"], // Enforce file extensions
};


export default nextConfig;
