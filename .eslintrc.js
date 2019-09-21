module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    '@typescript-eslint',
  ],
  rules: {
    quotes: [2, 'single'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'always'],
  },
}
