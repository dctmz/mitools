import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';

import baseConfig from './rollup.config.base';

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    serve({
      port: 8080,
      contentBase: ['dist', 'examples/html'],
      openPage: 'index.html',
    }),
    livereload({
      watch: ['dist', 'examples/html'],
    }),
  ],
};
