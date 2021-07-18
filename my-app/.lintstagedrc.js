module.exports = {
  '*.ts': ['eslint --max-warnings=0 --fix', 'prettier -cw'],
  '*.js': ['prettier -cw'],
};
