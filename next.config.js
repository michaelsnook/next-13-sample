/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    domains: [
      'michaelsnook.com',
      'snook.pub',
      'i.imgur.com',
      'i.picsum.photos',
      'hmpueymmlhhphzvebjku.supabase.co',
    ],
  },
}

module.exports = nextConfig
