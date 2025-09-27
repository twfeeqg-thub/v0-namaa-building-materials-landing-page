/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // <-- النطاق الجديد والمسموح به
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
