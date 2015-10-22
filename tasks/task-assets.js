// common dependencies
import gulp from 'gulp'
import gutil from 'gulp-util'
import notificator from './libs/notificator'
import config from './../config'
import browserSync from 'browser-sync'

export default () => {
  return gulp.src(config.assets.all)
    .pipe(gulp.dest(config.assets.output))
    .pipe(browserSync.stream())
    .pipe(notificator(config.assets.message));
};
