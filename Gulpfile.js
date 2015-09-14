'use strict';

var gulp = require('gulp');
var task = require('./tasks/index');

gulp.task('style', task.style);
gulp.task('script', task.script);
gulp.task('html', task.html);
gulp.task('serve', task.serve);

gulp.task('build', ['html', 'script', 'style']);
gulp.task('dev', ['script', 'html', 'serve']);
gulp.task('default', ['script', 'style', 'html', 'serve']);
