'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var lrserver = require('tiny-lr')();
var refresh = require('gulp-livereload');
var config = require('./../config');

var ecstatic = require('ecstatic');
var http = require('http');

var LIVERELOADPORT = 35728;
var SERVERPORT = 1337;

refresh({ start:true });

module.exports = function() {
  http.createServer(ecstatic({ root: __dirname + '/../public' })).listen(SERVERPORT, function() {
    gutil.log(gutil.colors.cyan("static server") + " on " + gutil.colors.green("localhost:" + SERVERPORT));
  });

  lrserver.listen(LIVERELOADPORT, function() {
    gutil.log(gutil.colors.cyan("livereload server") + " on " + gutil.colors.gray("localhost:" + LIVERELOADPORT));
  });

};
