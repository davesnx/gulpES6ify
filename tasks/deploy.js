'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var rsync = require('gulp-rsync');
var config = require('./../config');

module.exports = function() {
  gutil.log(gutil.colors.yellow('deploying...'));
  return gulp.src(config.html.output)
    .pipe(rsync(config.deploy));
};
