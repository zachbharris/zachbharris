/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{ appDir: true },
  reactStrictMode: false,
  images: {
    domains: ['example.s3.us-west-2.amazonaws.com'],
  }
  };
  
  module.exports = nextConfig;