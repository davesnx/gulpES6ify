// common dependencies
import gulp from 'gulp'
import gutil from 'gulp-util'
import notificator from './libs/notificator'
import config from './config'
import browserSync from 'browser-sync'

const assets = () => {
  return gulp.src(config.assets.all)
    .pipe(gulp.dest(config.assets.output))
    .pipe(browserSync.stream())
    .pipe(notificator(config.assets.message));
};

export default assets;
gulp.task('assets', assets);
