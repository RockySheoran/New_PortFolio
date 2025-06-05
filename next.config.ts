import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://drive.google.com/file/d/1HnXHz9wnndM5M2djZnhbw11qvx407CvP/view?usp=drive_link')],
     domains: ['drive.google.com'],
  },
   typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
    dirs: ['pages', 'utils']
  },
};

export default nextConfig;
