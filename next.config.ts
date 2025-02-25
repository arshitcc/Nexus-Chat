import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "3ankeip757.ufs.sh",
        port: "",
        pathname: "/**",
      }
    ]
  }
};

export default nextConfig;
