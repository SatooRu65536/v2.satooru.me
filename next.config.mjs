/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  sassOptions: {
    additionalData: '@use "@/styles/variable.scss" as var;',
  },
};

export default nextConfig;
