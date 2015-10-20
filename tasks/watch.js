import gulp from 'gulp';
import gutil from 'gulp-util';
import config from './../config';
import browserSync from 'browser-sync';

export default () => {
    gulp.watch(config.styles.all, ['styles', browserSync.reload]);
    gulp.watch(config.scripts.all, ['scripts', browserSync.reload]);
    gulp.watch(config.assets.all, ['assets', browserSync.reload]);
    gulp.watch(config.html.all, ['html', browserSync.reload]);
}
