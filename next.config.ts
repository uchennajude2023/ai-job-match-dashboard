import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true, // Enables faster builds
  eslint: {
    ignoreDuringBuilds: true, // Prevents ESLint errors from stopping deployment
  }
};

export default nextConfig;
