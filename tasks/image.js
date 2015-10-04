import gulp from 'gulp';
import watch from 'gulp-watch';
import notify from 'gulp-notify';
import refresh from 'gulp-livereload';
import * as lrserver from 'tiny-lr';
import config from './../config';

import notificator from './libs/notificator';

const NOTIFICATION_MSG = 'images...';

export default () => {
  return gulp.src(config.image.all)
    .pipe(watch(config.image.all))
    .pipe(gulp.dest(config.image.output))
    .pipe(refresh(lrserver))
    .pipe(notificator(NOTIFICATION_MSG));
};
