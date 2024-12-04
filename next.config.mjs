/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    images: {
        domains: ["images.unsplash.com", "img.clerk.com", "res.cloudinary.com"],
      },
};

export default nextConfig;
