// common dependencies
import gulp from 'gulp'
import config from './config'

import mocha from 'gulp-mocha'

let test = () => {
  return gulp.src(config.scripts.tests.input, {read: false})
    .pipe(mocha())
    .once('error', function (err) {
        console.log(err);
        process.exit(1);
    })
    .once('end', function () {
        process.exit('end');
    });
};

export default test;
gulp.task('test', test);
