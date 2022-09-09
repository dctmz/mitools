import strip from '@rollup/plugin-strip';
import { RollupOptions } from 'rollup';
import filesize from 'rollup-plugin-filesize';

import baseConfig from './rollup.config.base';

const plugins = baseConfig.plugins || [];

const config: RollupOptions = {
  ...baseConfig,
  plugins: [
    ...plugins,
    strip({
      include: ['**/*.(js|ts)'],
      labels: ['unittest'],
    }),
    filesize(),
  ],
};

export default config;
