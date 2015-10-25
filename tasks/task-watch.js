// common dependencies
import gulp from 'gulp'
import config from './config'
import browserSync from 'browser-sync'

let watch = () => {
    gulp.watch(config.styles.all, ['styles', browserSync.reload]);
    gulp.watch(config.scripts.all, ['scripts', browserSync.reload]);
    gulp.watch(config.assets.all, ['assets', browserSync.reload]);
    gulp.watch(config.html.all, ['html', browserSync.reload]);
};

export default watch;
gulp.task('watch', watch);
