/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.outdooredge.com',
        port: '',
        pathname: '/cdn/shop/products/**',
      },
    ],
  },
}

module.exports = nextConfig
