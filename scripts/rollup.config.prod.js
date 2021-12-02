import baseConfig from './rollup.config.base'
import filesize from 'rollup-plugin-filesize'
import strip from '@rollup/plugin-strip'

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
}
