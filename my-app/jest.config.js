/** @type import('@jest/types/build/Config').InitialOptions */
module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest',
  },
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/$1',
    '@/(.*)$': '<rootDir>/$1',
  },
};
