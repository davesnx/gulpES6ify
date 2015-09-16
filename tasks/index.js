'use strict';

var http = require('http');
var gulp = require('gulp');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var embedlr = require("gulp-embedlr");
var lrserver = require('tiny-lr')();
var refresh = require('gulp-livereload');
var ecstatic = require('ecstatic');
 
var config = require('./../tasks/config');
var livereloadport = 35728;
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

refresh({ start:true });

var task = {};

task.script = function() {
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

task.style = function() {
  gutil.log(gutil.colors.magenta('sassifying...'));
  return sass(config.input.directory + config.input.style, config.sassOptions)
    .on('error', gutil.log)
    .pipe(autoprefixer({map: {inline: true}}))
    .pipe(rename(config.output.style))
    .pipe(gulp.dest(config.output.directory))
    .pipe(refresh(lrserver));
};

task.html = function() {
  gutil.log(gutil.colors.red('htmlifying...'));
  return gulp.src(config.all.views)
    .pipe(watch(config.all.views))
    .pipe(embedlr())
    .pipe(gulp.dest(config.output.directory))
    .pipe(refresh(lrserver));
};

task.serve = function() {
  http.createServer(ecstatic({ root: __dirname + '/../public' })).listen(serverport, function() {
    gutil.log(gutil.colors.cyan("static server") + " on " + gutil.colors.green("localhost:" + serverport));
  });

  lrserver.listen(livereloadport, function() {
    gutil.log(gutil.colors.cyan("livereload server") + " on " + gutil.colors.gray("localhost:" + livereloadport));
  });

};

w.on('update', task.script);
w.on('log', gutil.log);

module.exports = task;
