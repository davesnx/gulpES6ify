'use strict';

var gulp = require('gulp');
var task = require('./tasks/index');

gulp.task('style', task.style);
gulp.task('script', task.script);
gulp.task('html', task.html);

gulp.task('serve', task.serve);
gulp.task('watch', task.watch);

gulp.task('build', ['html', 'script', 'style']);
gulp.task('default', ['script', 'style', 'html', 'serve', 'watch']);
