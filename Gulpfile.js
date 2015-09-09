var gulp = require('gulp');
var index = require('gulp/index.js');

gulp.task('style', index.style);
gulp.task('script', index.bundle);
gulp.task('watchScript', index.watchBundle);

gulp.task('watch', ['style', 'watchScript'], index.watch);
gulp.task('default', ['script', 'style']);
