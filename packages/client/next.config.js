/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'd1qek42f5a2sdm.cloudfront.net',
      'www.singlegrain.com',
      'openclipart.org',
      'img.icons8.com',
      'typof.com',
      'img.freepik.com',
      'media.istockphoto.com',
    ],
  },
};

module.exports = nextConfig;
