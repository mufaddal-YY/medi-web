/** @type {import('next').NextConfig} */
const nextConfig = {

  // output: "export",

  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },

  images: {
    domains: ["lh3.googleusercontent.com"],
  },

  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
