'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var refresh = require('gulp-livereload');
var lrserver = require('tiny-lr')();
var config = require('./../config');

var embedlr = require("gulp-embedlr");

module.exports = function() {
  gutil.log(gutil.colors.red('htmlifying...'));
  return gulp.src(config.all.views)
    .pipe(watch(config.all.views))
    .pipe(embedlr())
    .pipe(gulp.dest(config.output.directory))
    .pipe(refresh(lrserver));
};
