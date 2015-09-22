'use strict';

var gulp = require('gulp');
var config = require('./config');

var html = require('./tasks/html.js');
var script = require('./tasks/script.js');
var server = require('./tasks/server.js');
var style = require('./tasks/style.js');
var image = require('./tasks/image.js');
var deploy = require('./tasks/deploy.js');

gulp.task('style', style);
gulp.task('script', script);
gulp.task('html', html);
gulp.task('image', image);
gulp.task('server', server);
gulp.task('deploy', deploy); // it's beta

gulp.task('build', ['html', 'image', 'script', 'style']);
gulp.task('default', ['script', 'style', 'image', 'html', 'server']);
