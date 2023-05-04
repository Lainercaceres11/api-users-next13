/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "reqres.in",
      },
    ],
  },
}

module.exports = nextConfig
