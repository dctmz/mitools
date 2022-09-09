module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint', 'simple-import-sort', 'import'], //定义了该eslint文件所依赖的插件
  rules: {
    'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    'import/first': 'error',
    // 'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
};
