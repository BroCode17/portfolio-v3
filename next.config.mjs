/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  // compiler: {
  //   // Enables the styled-components SWC transform
  //   styledComponents: true
  // }
  webpack: (config) =>{
    config.resolve.alias.canvas = false;
    return config
  }
};

export default nextConfig;
