import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sc04.alicdn.com',
      },
    ],
  },
};

export default nextConfig;
