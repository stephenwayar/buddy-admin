/** @type {import('next').NextConfig} */

const nextConfig = {
  // Enables React's Strict Mode to help identify potential issues
  reactStrictMode: true,

  // Register public environment variables 
  env: {
    BASE_URL: process.env.BASE_URL,
    ENCRYPTION_KEY: process.env.ENCRYPTION_KEY
  },

  // Defines asynchronous redirects
  async redirects() {
    return [
      {
        source: '/', // Redirect requests from the root URL
        permanent: true, // Indicates this is a permanent redirect (status 308)
        destination: '/auth/login', // Target location for the redirect
      },
    ];
  },
};

export default nextConfig;