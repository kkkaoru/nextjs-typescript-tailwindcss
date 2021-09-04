/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:tailwind/recommended',
    'plugin:@next/next/recommended',
    'plugin:@next/next/core-web-vitals',
    'plugin:jest/recommended',
    'prettier',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'max-lines': 'error',
    'max-depth': 'error',
    'max-lines-per-function': 'error',
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
};
