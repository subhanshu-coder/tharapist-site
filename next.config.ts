import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/tharapist-site",
  assetPrefix: "/tharapist-site/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;