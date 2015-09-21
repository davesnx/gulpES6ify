'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var refresh = require('gulp-livereload');
var lrserver = require('tiny-lr')();
var watch = require('gulp-watch');
var config = require('./../config');

var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');

module.exports = function() {
  gutil.log(gutil.colors.magenta('sassifying...'));
  return gulp.src(config.all.styles)
    .pipe(watch(config.all.styles))
    .pipe(sass(config.sassOptions))
    .pipe(sourcemaps.write())
    .on('error', gutil.log)
    .pipe(autoprefixer({map: {inline: true}}))
    .pipe(rename(config.output.style))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.output.directory))
    .pipe(refresh(lrserver));
};
