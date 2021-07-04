/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends : ['eslint-config-airbnb-typescript', 'plugin:tailwind/recommended', 'next', 'next/core-web-vitals', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'max-lines': 'error',
    'max-depth': 'error',
    'max-lines-per-function': 'error',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
}
