module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'], //定义了该eslint文件所依赖的插件
  rules: {},
  extends: [], //定义文件继承的子规范
}
