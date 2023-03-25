/** @type {import('next').NextConfig} */
const dns = require('dns')

dns.setDefaultResultOrder('ipv4first')
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: 'http://backend:1338/api',
    NEXT_PUBLIC_STRAPI_URL: 'http://localhost:1338',
    NEXT_PUBLIC_SITE_URL: 'http://localhost:3000',
  },
}

module.exports = nextConfig
