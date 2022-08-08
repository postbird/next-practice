/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['gw.alipayobjects.com', 'image-component.nextjs.gallery'],
  },
};

module.exports = withLess({
  cssModules: true,
  lessLoaderOptions: {
    lessOptions: {
      javascriptEnabled: true,
    },
  },
  ...nextConfig,
});
