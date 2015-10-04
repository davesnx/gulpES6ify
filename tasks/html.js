import gulp from 'gulp';
import watch from 'gulp-watch';
import refresh from 'gulp-livereload';
import * as lrserver from 'tiny-lr';
import config from './../config';
import embedlr from "gulp-embedlr";

import notificator from './libs/notificator';

const NOTIFICATION_MSG = 'htmlifying...';

export default () => {
  return gulp.src(config.html.all)
    .pipe(watch(config.html.all))
    .pipe(embedlr())
    .pipe(gulp.dest(config.html.output))
    .pipe(refresh(lrserver))
    .pipe(notificator(NOTIFICATION_MSG));
};
