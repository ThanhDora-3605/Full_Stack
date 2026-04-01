import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/gioi-thieu",
        destination: "/about",
      },
    ];
  },
};

export default nextConfig;
