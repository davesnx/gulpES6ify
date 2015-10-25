// common dependencies
import gulp from 'gulp'
import gutil from 'gulp-util'
import notificator from './libs/notificator'
import config from './config'
import browserSync from 'browser-sync'

import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';

let styles = () => {
  return gulp.src(config.styles.all)
    .pipe(sourcemaps.init())
    .pipe(sass(config.styles.sassOptions))
    .on('error', gutil.log)
    .pipe(sourcemaps.write())
    .pipe(autoprefixer(config.styles.prefixOptions))
    .pipe(rename(config.styles.public))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.styles.output))
    .pipe(browserSync.stream())
    .pipe(notificator(config.styles.message));
};

export default styles;
gulp.task('styles', styles);
