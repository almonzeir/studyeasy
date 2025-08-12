/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Keep it simple: serve images as-is (no domain headaches on Vercel)
    unoptimized: true,
    // (optional) if you later re-enable optimization, keep these:
    domains: ['upload.wikimedia.org', 'placehold.co'],
  },
};

module.exports = nextConfig;
