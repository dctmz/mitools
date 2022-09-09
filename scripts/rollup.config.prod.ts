import strip from '@rollup/plugin-strip';
import { RollupOptions } from 'rollup';
import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

import baseConfig from './rollup.config.base';

const plugins = baseConfig.plugins || [];

const config: RollupOptions = {
  ...baseConfig,
  plugins: [
    ...plugins,
    terser(),
    strip({
      include: ['**/*.(js|ts)'],
      labels: ['unittest'],
    }),
    filesize(),
  ],
};

export default config;
