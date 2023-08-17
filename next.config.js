// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    reactRemoveProperties: true,
    // removeConsole: {
    //   exclude: ['error'],
    // },
  },
  poweredByHeader: false,
  // experimental: {
  //   typedRoutes: true,
  // },
};

module.exports = nextConfig;
