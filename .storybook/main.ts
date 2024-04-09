import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
  webpackFinal(config) {
    config.resolve!.modules = [
      ...(config.resolve!.modules || []),
      path.resolve(__dirname, '../src/app/styles/variables.scss'),
    ];

    config.resolve!.plugins = [...(config.resolve!.plugins || []), new TsconfigPathsPlugin()];
    return config;
  },
};
export default config;
