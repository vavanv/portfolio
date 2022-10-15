/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['scontent.fyyz1-2.fna.fbcdn.net'],
  },
};

module.exports = nextConfig;
