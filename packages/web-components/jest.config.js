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
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  moduleNameMapper: {
    '@web-components/(.*)$': '<rootDir>/src/$1',
  },
};
