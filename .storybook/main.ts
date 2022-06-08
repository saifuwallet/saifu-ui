import * as path from 'path';
import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  core: { builder: '@storybook/builder-vite' },
  // other storybook options...,
  async viteFinal(config, options) {
    // modify and return config
    config.resolve = {
      alias: {
        '@': path.resolve('src'),
      },
    };
    return config;
  },
};

export default config;
