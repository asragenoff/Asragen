import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Asragen',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
