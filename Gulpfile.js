'use strict';

var gulp = require('gulp');
var config = require('./config');

var html = require('./tasks/html.js');
var script = require('./tasks/script.js');
var server = require('./tasks/server.js');
var style = require('./tasks/style.js');

gulp.task('style', style);
gulp.task('script', script);
gulp.task('html', html);
gulp.task('server', server);

gulp.task('build', ['html', 'script', 'style']);
gulp.task('default', ['script', 'style', 'html', 'server']);
