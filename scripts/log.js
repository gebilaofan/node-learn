const chalk = require('chalk');

const log = (message) => {
  console.log(chalk.blue(message));
};
const warn = (message) => {
  console.warn(chalk.yellow(message));
};
const error = (message) => {
  console.error(chalk.red(message));
};

module.exports = {
  log,
  warn,
  error,
};
