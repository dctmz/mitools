// 安装以下 npm 包
import alias from '@rollup/plugin-alias'; // alias 和 reslove 功能
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs'; // cjs => esm
import eslint from '@rollup/plugin-eslint';
import json from '@rollup/plugin-json'; // 支持在源码中直接引入json文件，不影响下面的
import { nodeResolve } from '@rollup/plugin-node-resolve'; // 解析 node_modules 中的模块
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import fs from 'fs';
import path from 'path';
import { RollupOptions } from 'rollup';
import clear from 'rollup-plugin-clear';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from 'rollup-plugin-terser';

import { author, name, version } from '../package.json';

const resolve = (...i: string[]) => path.resolve(__dirname, '..', ...i);

const NAME = 'index';
const banner =
  '/*!\n' +
  ` * ${name} v${version}\n` +
  ` * (c) 2021-${new Date().getFullYear()} ${author}\n` +
  ' * Released under the MIT License.\n' +
  ' */';

const isProd = process.env.NODE_ENV === 'production';

const input = fs
  .readdirSync('src/')
  .filter(i => i.includes('.ts'))
  .map(i => resolve('src', i));

/**
 * rollup 基础配置
 * @type {import('rollup').RollupOptions}
 */
const config: RollupOptions = {
  // 编译输入文件
  input,
  output: [
    // 生成*.d.ts文件
    {
      dir: 'lib',
      format: 'esm',
      plugins: [],
      name: NAME,
      banner,
    },
    {
      dir: 'lib',
      format: 'esm',
      plugins: [terser()],
      name: NAME,
      banner,
    },
  ],
  // 注意 plugin 的使用顺序
  plugins: [
    typescript({
      // 排除脚本和测试文件
      exclude: ['scripts/**', 'tests/**'],
    }),
    json(),
    clear({
      targets: ['lib'],
    }),
    nodePolyfills(),
    alias(),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      preventAssignment: true,
    }),
    nodeResolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts'],
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**'],
    }),
    babel({
      exclude: ['node_modules/**'],
      babelHelpers: 'bundled',
    }),
  ],
};
export default config;
