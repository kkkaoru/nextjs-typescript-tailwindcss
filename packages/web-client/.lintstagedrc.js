module.exports = {
  '*.{ts,tsx}': [
    'eslint --max-warnings=0 --fix --resolve-plugins-relative-to',
    'prettier -cw',
    'jest --passWithNoTests --findRelatedTests',
  ],
  '*.js': ['prettier -cw'],
};
