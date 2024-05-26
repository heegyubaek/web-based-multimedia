/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? 'https://heegyubaek.github.io/web-based-multimedia'
      : '',
  output: 'export',
};

module.exports = nextConfig;
