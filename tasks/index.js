var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var sass = require('gulp-ruby-sass');
var eslint = require('eslint');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

var config = require('./../tasks/config');

var bundler = browserify({
    entries:      ['./' + config.input.directory + config.input.script],
    debug:        true,
    transform:    [[babelify, {global: true}]],
    cache:        {},
    packageCache: {}
});

var task = {};

task.script = function() {
	return bundler.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source(config.output.script))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.output.directory))
		.pipe(livereload());
};

task.watchScript = function() {
    livereload.listen();
		b = watchify(bundler);
		b.on('update', function() {
      console.log("UPDATING?");
      task.script();
		});
		b.on('log', gutil.log);
		return task.script();
};

task.style = function() {
	return sass(config.input.directory + config.input.style, config.sassOptions)
		.on('error', function(err) {
      return notify().write(err);
    })
		.pipe(autoprefixer({map: {inline: true}}))
		.pipe(rename(config.output.style))
		.pipe(gulp.dest(config.output.directory))
		.pipe(livereload());
};

// task.watch = function() {
// 	livereload.listen();
// 	var watches = [config.input.style];
//
// 	for (var task in watches) {
// 		var glob = watches[task];
// 		if (task == 'update') {
// 			gulp.watch(glob, livereload.changed);
// 		} else {
// 			gulp.watch(glob, [task]);
// 		}
// 	}
// };

module.exports = task;
