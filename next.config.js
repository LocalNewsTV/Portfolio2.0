/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/LocalNewsTV.github.io/' : '',
  images: {
    unoptimized: true,
    domains: ["cdn.weatherapi.com"]
  },
}

module.exports = nextConfig
