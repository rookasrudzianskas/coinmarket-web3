/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'encrypted-tbn0.gstatic.com', 'cdn.sanity.io', 's2.coinmarketcap.com', 's3.coinmarketcap.com', 'cdn.sanity.io', 'encrypted-tbn0.gstatic.com'],
  }
}


module.exports = nextConfig

