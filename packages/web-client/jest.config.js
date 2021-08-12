/** @type import('@jest/types/build/Config').InitialOptions */
module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      '@swc/jest',
      {
        /** @type import('@swc/core/types').JscConfig */
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/$1',
    '@/(.*)$': '<rootDir>/$1',
  },
};
