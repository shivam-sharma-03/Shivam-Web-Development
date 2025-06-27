// next.config.ts

/** @type {import('next').NextConfig} */
const nextConfig = {
};

const isBundleAnalyzerEnabled = process.env.ANALYZE === 'true';

let config = nextConfig;

if (isBundleAnalyzerEnabled) {
  
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true, // It's true because the outer condition already checked it
  });
  config = withBundleAnalyzer(config);
}

module.exports = config;