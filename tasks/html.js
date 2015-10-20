import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from './../config';

import notificator from './libs/notificator';

const NOTIFICATION_MSG = 'htmlifying...';

export default () => {
  return gulp.src(config.html.all)
    .pipe(gulp.dest(config.html.output))
    .pipe(browserSync.stream())
    .pipe(notificator(NOTIFICATION_MSG));
};
