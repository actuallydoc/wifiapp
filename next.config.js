/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/disable',
        destination: 'http://192.168.1.8/disable',
      },
      {
        source: '/enable',
        destination: 'http://192.168.1.8/enable',
      },
      {
        source: '/status',
        destination: 'http://192.168.1.8/status',
      }
    ]
  },
}

module.exports = nextConfig
