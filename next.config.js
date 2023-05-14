/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push('supports-color');
    return config;
  },
    images: {
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '3000',
              pathname: '/**',
            },
            {
              protocol: 'http',
              hostname: 'localhost',
              port: '5000',
              pathname: '/**',
            }
          ],
    },

    
}

module.exports = nextConfig
