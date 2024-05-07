/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/v1/expenses/:path*', // Match any route under /api/v1/expenses
        destination: 'http://localhost:5000/api/v1/expenses/:path*', // Proxy to your backend server
      },
    ];
  },
};

export default nextConfig;
