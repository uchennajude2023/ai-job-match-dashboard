import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true, // Prevents ESLint errors from stopping deployment
  },

  
};

export default nextConfig;

