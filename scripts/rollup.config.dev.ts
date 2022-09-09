import { RollupOptions } from 'rollup';

// import livereload from 'rollup-plugin-livereload';
// import serve from 'rollup-plugin-serve';
import baseConfig from './rollup.config.base';

const plugins = baseConfig.plugins || [];

const config: RollupOptions = {
  ...baseConfig,
  plugins: [
    ...plugins,
    // serve({
    //   port: 8080,
    //   contentBase: ['lib', 'examples/html'],
    //   openPage: 'index.html',
    // }),
    // livereload({
    //   watch: ['lib', 'examples/html'],
    // }),
  ],
};

export default config;
