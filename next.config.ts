import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    basePath: '/personal-site',
    assetPrefix: '/personal-site/'
};

export default nextConfig;
