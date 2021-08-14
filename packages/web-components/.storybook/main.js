/** @type import('@storybook/core-common').StorybookConfig */
module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  core: {
    builder: 'storybook-builder-vite',
  },
  /**
   * 
   * @param {import('vite').ResolvedConfig} config
   * @returns {import('vite').ResolvedConfig}
   */
  async viteFinal(config) {
    config.define = {
      'process.env' : {},
      'global': {},
    };
    return config;
  },
};
