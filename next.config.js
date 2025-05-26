/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["moongose"]
  },
  // and the following to enable top-level await support for Webpack
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true
    };
    return config;
  },
}

module.exports = nextConfig
