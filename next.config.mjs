/** @type {import('next').NextConfig} */
import withPWAInit from 'next-pwa';

// Note: This is a sample configuration. You may need to adjust it for your specific needs.
// Initialize the PWA plugin
const withPWA = withPWAInit({
    dest: 'public',
    register: true,
    skipWaiting: true,
    //disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
    disable: process.env.NODE_ENV === 'development', // Disable PWA in development mode
});

const nextConfig = {
    // Your existing Next.js config goes here
    reactStrictMode: true,
    images: {
        domains: ['i.pinimg.com'],
    },
};

export default withPWA(nextConfig);
