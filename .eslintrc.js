module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': [
      ('off'),
      { target: 'any' },
    ],
    'import/extensions': [
      'never',
    ],
  },
};
