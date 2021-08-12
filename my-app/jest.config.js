/** @type import('@jest/types/build/Config').InitialOptions */
module.exports = {
  roots: ['<rootDir>'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '~/(.*)$': '<rootDir>/$1',
    '@/(.*)$': '<rootDir>/$1',
  },
};
