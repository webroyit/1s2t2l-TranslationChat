/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Whitelist urls for the app to use
        domains: ["github.com", "lh3.googleusercontent.com"]
    }
};

export default nextConfig;
