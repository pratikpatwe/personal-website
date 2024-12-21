/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BUILD_ID: Date.now().toString(),
  },
}

module.exports = nextConfig