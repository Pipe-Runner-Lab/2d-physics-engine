module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'import/prefer-default-export': 'off',
    "@typescript-eslint/no-namespace": "off",
    'no-console': 'off'
  },
  ignorePatterns: ['.eslintrc.js']
};