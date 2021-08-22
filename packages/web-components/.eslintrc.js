/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:tailwind/recommended',
    'next',
    'next/core-web-vitals',
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
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': [
      'off',
      {
        devDependencies: ['**/*.stories.tsx'],
      },
    ],
    'import/no-anonymous-default-export': 'off',
  },
  overrides: [
    {
      // Overwrite only test files
      files: ['test/**/*.*'],
      rules: {
        'max-lines-per-function': [
          'error',
          {
            max: 100,
          },
        ],
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true,
  },
};
