/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["cdn.weatherapi.com"]
  },
}

module.exports = nextConfig
