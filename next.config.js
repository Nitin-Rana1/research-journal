// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ['firebasestorage.googleapis.com', 'lh3.googleusercontent.com'],
//   },
// }

// module.exports = nextConfig

//pwa version
const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA({
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["firebasestorage.googleapis.com", "lh3.googleusercontent.com"],
  },
});
