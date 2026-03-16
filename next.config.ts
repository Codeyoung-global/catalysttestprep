import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-assets.codeyoung.com",
        pathname: "/mentorProfiles/**",
      },
    ],
  },
};

export default nextConfig;
