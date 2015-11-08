// common dependencies
import gulp from 'gulp'
import config from './config'

import babel from 'gulp-babel'
import mocha from 'gulp-mocha'

const test = () => {
  return gulp.src(config.scripts.tests.input, {read: false})
    .pipe(babel({
      modules: 'amd'
    }))
    .pipe(mocha({ reporter: 'spec' }));
};

export default test;
gulp.task('test', test);
