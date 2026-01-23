import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: process.env.NODE_ENV === "production" ? "/personal-site" : "",
    output: "export",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
