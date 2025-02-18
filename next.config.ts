import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fjpa2-1.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
