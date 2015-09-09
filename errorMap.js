var gutil = require('gulp-util');
var chalk = require('chalk');

function mapError(err) {
  if (err.fileName) {
    gutil.log(chalk.red(err.name) + ': ' +
    chalk.yellow(err.fileName.replace(__dirname + '/src/js/', '')) + ': Line ' +
    chalk.magenta(err.lineNumber) + ' & Column ' +
    chalk.magenta(err.columnNumber || err.column) + ': ' +
    chalk.blue(err.description));
  } else {
    gutil.log(chalk.red(err.name) + ': ' +
    chalk.yellow(err.message));
  }
  this.end();
}

module.exports = mapError;
