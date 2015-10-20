import gulp from 'gulp';
import watch from 'gulp-watch';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import config from './../config';

import notificator from './libs/notificator';

const NOTIFICATION_MSG = 'assets...';

export default () => {
  return gulp.src(config.assets.all)
    .pipe(gulp.dest(config.assets.output))
    .pipe(browserSync.stream())
    .pipe(notificator(NOTIFICATION_MSG));
};
