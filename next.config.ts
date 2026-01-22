import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/personal-site' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/personal-site/' : ''
};

export default nextConfig;
