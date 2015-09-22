'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var lrserver = require('tiny-lr')();
var refresh = require('gulp-livereload');
var config = require('./../config');

var ecstatic = require('ecstatic');
var http = require('http');

refresh({ start:true });

module.exports = function() {
  http.createServer(ecstatic({ root: __dirname + '/../public' })).listen(config.server.port, function() {
    gutil.log(gutil.colors.cyan("static server") + " on " + gutil.colors.green("localhost:" + config.server.port));
  });

  lrserver.listen(config.server.livereloadport, function() {
    gutil.log(gutil.colors.cyan("livereload server") + " on " + gutil.colors.gray("localhost:" + config.server.livereloadport));
  });

};
