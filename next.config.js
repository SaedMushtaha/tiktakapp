/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["yt3.ggpht.com", "lh3.googleusercontent.com", "www.seekpng.com"],
  },
};

module.exports = nextConfig;
