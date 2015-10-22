// common dependencies
import gulp from 'gulp'
import gutil from 'gulp-util'
import notificator from './libs/notificator'
import config from './../config'
import browserSync from 'browser-sync'

export default () => {
  return gulp.src(config.html.all)
    .pipe(gulp.dest(config.html.output))
    .pipe(browserSync.stream())
    .pipe(notificator(config.html.message));
};
