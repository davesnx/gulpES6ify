var gulp = require('gulp');
var task = require('./tasks/index');

gulp.task('sass', task.style);
gulp.task('bundle', task.bundle);
gulp.task('watchScript', task.watchBundle);

gulp.task('watch', ['sass', 'watchScript'], task.watch);
gulp.task('default', ['bundle', 'sass']);
