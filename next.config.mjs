/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Whitelist urls for the app to use
        domains: ["github.com"]
    }
};

export default nextConfig;
