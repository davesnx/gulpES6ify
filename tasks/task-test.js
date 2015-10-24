// common dependencies
import gulp from 'gulp'
import config from './../config'

import mocha from 'gulp-mocha'

let test = () => {
  return gulp.src(config.scripts.tests.input, {read: false})
    .pipe(mocha({reporter: 'nyan'}));
};

export default test;
gulp.task('test', test);
