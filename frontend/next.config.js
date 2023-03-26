/** @type {import('next').NextConfig} */
const dns = require('dns')

dns.setDefaultResultOrder('ipv4first')
const nextConfig = {
  images: {
    domains: ['165.22.255.85'],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  env: {
    // For Docker Containers to communicate
    // NEXT_PUBLIC_STRAPI_API_URL: 'http://backend:1338/api',
    // For local development without Docker
    NEXT_PUBLIC_STRAPI_API_URL: 'http://165.22.255.85:1338/api',
    NEXT_PUBLIC_STRAPI_URL: 'http://165.22.255.85:1338',
    NEXT_PUBLIC_SITE_URL: 'http://165.22.255.85:3000',
  },
}

module.exports = nextConfig
