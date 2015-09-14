'use strict';

var http = require('http');
var gulp = require('gulp');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var sass = require('gulp-ruby-sass');
var eslint = require('eslint');
var express = require('express');
var livereload = require('connect-livereload');
var autoprefixer = require('gulp-autoprefixer');
var lrserver = require('tiny-lr')();
var embedlr = require("gulp-embedlr");
var refresh = require('gulp-livereload');
var rename = require('gulp-rename');
var ecstatic = require('ecstatic');

var config = require('./../tasks/config');
var livereloadport = 35729;
var serverport = 1337;

var bundler = browserify({
    entries: ['./' + config.input.directory + config.input.script],
    debug: true,
    transform: [[babelify, {global: true}]],
    cache: {},
    packageCache: {},
    fullPaths: true
});

var w = watchify(bundler);

var task = {};

task.script = function() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .on('data', function() {
      gutil.log(gutil.colors.yellow('watchifying...'));
    })
    .pipe(source(config.output.script))
    .pipe(watch(config.output.script))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.output.directory))
    .pipe(refresh(lrserver));
};

task.style = function() {
  return sass(config.input.directory + config.input.style, config.sassOptions)
    .pipe(watch(config.input.directory + config.input.style))
    .on('error', gutil.log)
    .on('data', function() {
      gutil.log(gutil.colors.magenta('sassing...'));
    })
    .pipe(autoprefixer({map: {inline: true}}))
    .pipe(rename(config.output.style))
    .pipe(gulp.dest(config.output.directory))
    .pipe(refresh(lrserver));
};

task.html = function() {
  return gulp.src(config.all.views)
    .pipe(watch(config.all.views))
    .on('data', function() {
      gutil.log(gutil.colors.blue('htmling...'));
    })
    .pipe(embedlr())
    .pipe(gulp.dest(config.output.directory))
    .pipe(refresh(lrserver));
};

task.serve = function() {
  http.createServer(ecstatic({ root: __dirname + '/../public' })).listen(serverport);
  lrserver.listen(livereloadport);
};

w.on('update', task.script);
w.on('log', gutil.log);

module.exports = task;
