module.exports = {
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:storybook/recommended',
  ],
  plugins: ['import-access'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    //varを禁止
    'no-var': 'error',
    //早期リターンさせる
    'no-else-return': 'error',
    //厳密等価演算子使用させる
    eqeqeq: ['error', 'smart'],
    // import が先頭に来るようにする
    'import/first': 'error',
    // 最後のimportの後に空行を追加
    'import/newline-after-import': 'error',
    // import順を指定
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'always',
      },
    ],
    // 親ディレクトリからのimportを禁止
    'no-restricted-imports': [
      'error',
      {
        patterns: ['../**'],
      },
    ],
    // export をカプセル化
    'import-access/jsdoc': ['error'],
  },
};
