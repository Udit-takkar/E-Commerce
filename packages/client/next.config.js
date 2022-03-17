/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'd1qek42f5a2sdm.cloudfront.net',
    ],
  },
};

module.exports = nextConfig;
