/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    additionalData: '@use "@/styles/variable.scss" as var;\n@import "@/styles/responsive.scss";',
  },
};

export default nextConfig;
