/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/Asragen' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
