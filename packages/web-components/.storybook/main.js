/** @type import('@storybook/core-common').StorybookConfig */
module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-viewport',
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    // https://storybook.js.org/addons/@storybook/addon-postcss#:~:text=postcss%208%2B
    {
      name: '@storybook/addon-postcss',
      // ('@storybook/addon-postcss/dist')
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  /**
   * @param {import('vite').ResolvedConfig} config
   * @returns {import('vite').ResolvedConfig}
   */
  async viteFinal(config) {
    config.define = {
      'process.env': {},
      global: {},
    };
    // ESbuild is not supported jsx automatic runtime.
    // https://github.com/evanw/esbuild/issues/334
    /** @type {import('vite').ESBuildOptions} */
    config.esbuild = {
      jsxInject: `import React from 'react';`,
    };
    config.resolve.alias = [
      {
        find: '@/',
        replacement: `${__dirname}/../`,
      },
    ];
    return config;
  },
};
