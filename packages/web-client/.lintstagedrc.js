module.exports = {
  '*.ts': ['eslint --max-warnings=0 --fix', 'prettier -cw', 'jest --passWithNoTests --findRelatedTests'],
  '*.js': ['prettier -cw'],
};
