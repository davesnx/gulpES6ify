'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var refresh = require('gulp-livereload');
var lrserver = require('tiny-lr')();
var config = require('./../config');

module.exports = function() {
  gutil.log(gutil.colors.yellow('images...'));
  return gulp.src(config.image.all)
    .pipe(watch(config.image.all))
    .pipe(gulp.dest(config.image.output))
    .pipe(refresh(lrserver));
};
