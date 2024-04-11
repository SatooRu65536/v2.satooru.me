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
};

export default nextConfig;
