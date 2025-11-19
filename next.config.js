// Disable Turbopack and force Webpack

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Force Webpack and silence turbopack warnings
  experimental: {},
  turbopack: {},
};

module.exports = nextConfig;
