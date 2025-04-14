/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "link.trustwallet.com",
      },
    ],
  },
};

export default nextConfig;
