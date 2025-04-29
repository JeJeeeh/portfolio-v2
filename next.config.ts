import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export mode
  trailingSlash: true, // Ensures URL ends with a slash (e.g., /about/ instead of /about)
  images: {
    unoptimized: true, // Disables image optimization (necessary for static export)
  },
};

export default nextConfig;
