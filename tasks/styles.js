import gulp from 'gulp';
import gutil from 'gulp-util';
import browserSync from 'browser-sync';

import config from './../config';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';

import notificator from './libs/notificator';

const NOTIFICATION_MSG = 'sassifying...';

export default () => {
  return gulp.src(config.styles.all)
    .pipe(sass(config.styles.sassOptions))
    .pipe(sourcemaps.write())
    .on('error', gutil.log)
    .pipe(autoprefixer(config.styles.prefixOptions))
    .pipe(rename(config.styles.public))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.styles.output))
    .pipe(browserSync.stream())
    .pipe(notificator(NOTIFICATION_MSG));
};
