import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/shop/:path*",
        destination: `${process.env.SHOP_DOMAIN}/shop/:path*`, // Proxy to the Shop app
      },
    ];
  },
};

export default nextConfig;
