'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var refresh = require('gulp-livereload');
var lrserver = require('tiny-lr')();
var config = require('./../config');

var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');
var babelify = require('babelify');
var browserify = require('browserify');

var bundler = browserify({
    entries: ['./' + config.input.directory + config.input.script],
    debug: true,
    transform: [[babelify, {global: true}]],
    cache: {},
    packageCache: {},
    fullPaths: true
});

var w = watchify(bundler);

refresh({ start:true });

var scriptTask = function() {
  gutil.log(gutil.colors.yellow('watchifying...'));
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.output.script))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.output.directory))
    .pipe(refresh(lrserver));
};

w.on('update', scriptTask);
w.on('log', gutil.log);

module.exports = scriptTask;
