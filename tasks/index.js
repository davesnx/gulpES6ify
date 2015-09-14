'use strict';

var http = require('http');
var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var sass = require('gulp-ruby-sass');
var eslint = require('eslint');
var express = require('express');
var livereload = require('connect-livereload');
var autoprefixer = require('gulp-autoprefixer');
var lrserver = require('tiny-lr')();
var refresh = require('gulp-livereload');
var rename = require('gulp-rename');

var config = require('./../tasks/config');
var livereloadport = 35729;
var serverport = 5001;

var bundler = watchify(browserify({
    entries: ['./' + config.input.directory + config.input.script],
    debug: true,
    transform: [[babelify, {global: true}]]
}));

b.on('update', task.script);
b.on('log', gutil.log);

var task = {};

task.script = function() {
	return bundler.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source(config.output.script))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.output.directory))
		.pipe(refresh(lrserver));
};

task.style = function() {
	return sass(config.input.directory + config.input.style, config.sassOptions)
		.on('error', gutil.log)
		.pipe(autoprefixer({map: {inline: true}}))
		.pipe(rename(config.output.style))
		.pipe(gulp.dest(config.output.directory))
		.pipe(refresh(lrserver));
};

task.html = function() {
  gulp.src(config.input.allView)
    .pipe(gulp.dest(config.ouput.directory))
    .pipe(refresh(lrserver));
};

task.watch = function() {
  gulp.watch(config.all.styles, function() {
    gulp.run('style');
  });
  gulp.watch(config.all.scripts, function() {
    gulp.run('script');
  });
  gulp.watch(config.all.views, function () {
    gulp.run('html');
  });
};

task.serve = function() {
  http.createServer(ecstatic({ root: __dirname + '/public' })).listen(serverport);
  lrserver.listen(livereloadport);
};

module.exports = task;
