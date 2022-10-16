/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['scontent.fyyz1-2.fna.fbcdn.net', 'media-exp1.licdn.com'],
  },
};

module.exports = nextConfig;
