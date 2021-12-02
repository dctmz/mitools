import strip from '@rollup/plugin-strip';
import filesize from 'rollup-plugin-filesize';

import baseConfig from './rollup.config.base';

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    strip({
      include: ['**/*.(js|ts)'],
      labels: ['unittest'],
    }),
    filesize(),
  ],
};
