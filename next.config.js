/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false,path:false };

        return config;
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'crossriverstate.gov.ng',
            port: '',
            pathname: '',
          },
        ],}
}

module.exports = nextConfig
