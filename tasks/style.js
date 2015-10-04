import gulp from 'gulp';
import gutil from 'gulp-util';
import refresh from 'gulp-livereload';
import lrserver from 'tiny-lr';

import watch from 'gulp-watch';
import config from './../config';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';

import notificator from './libs/notificator';

const NOTIFICATION_MSG = 'sassifying...';

export default () => {
  return gulp.src(config.style.all)
    .pipe(watch(config.style.all))
    .pipe(sass(config.sassOptions))
    .pipe(sourcemaps.write())
    .on('error', gutil.log)
    .pipe(autoprefixer({map: {inline: true}}))
    .pipe(rename(config.style.public))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.style.output))
    .pipe(refresh(lrserver))
    .pipe(notificator(NOTIFICATION_MSG));
};
