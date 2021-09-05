const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['web-components']);

/** @type import('next/dist/server/config-shared').NextConfig*/
const config = {
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = withPlugins([withTM], config);
