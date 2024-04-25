/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    additionalData: `
      @import "@/styles/variable.scss";
      @import "@/styles/responsive.scss";
    `,
  },
  experimental: {
    runtime: 'edge',
  },
};

export default nextConfig;
