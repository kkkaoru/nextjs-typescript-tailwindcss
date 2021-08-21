/** @type import('@jest/types/build/Config').InitialOptions */
module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
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
    '~/(.*)$': '<rootDir>/src/$1',
    '@/(.*)$': '<rootDir>/src/$1',
  },
};
