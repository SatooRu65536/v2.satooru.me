/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    additionalData: '@import "@/styles/variable.scss";\n@import "@/styles/responsive.scss";',
  },
};

export default nextConfig;
