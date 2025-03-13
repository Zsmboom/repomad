/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false
  },
  assetPrefix: '/',
  basePath: '',
  
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.fischmacroo.com',
          },
        ],
        destination: 'https://fischmacroo.com/:path*',
        permanent: true,
      },
    ];
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin'
          }
        ]
      }
    ];
  }
}

module.exports = nextConfig 