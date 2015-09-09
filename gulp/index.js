var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

var config = require('config');
var consola = require('consola');

var bundler = browserify({
    entries:      ['./' + config.input.directory + '/' + config.input.script],
    debug:        true,
    transform:    [[babelify, {global: true}]],
    cache:        {},
    packageCache: {}
});

module.exports = {

	bundle: function() {
		console.log("lola???");
		console.log("");
		return bundler.bundle()
			.on('error', consola.error)
			.pipe(source(config.output.script))
			.pipe(buffer())
			.pipe(sourcemaps.init({loadMaps: true}))
			.pipe(sourcemaps.write())
			.pipe(gulp.dest(config.output.directory))
			.pipe(livereload());
	},

	watchBundle: function() {
		bundler = watchify(bundler);
		bundler.on('update', bundle);
		bundler.on('log', consola.log);
		return bundle();
	},

	style: function() {
		return sass(config.input.directory + '/' + config.input.style, config.sassOptions)
			.on('error', consola.error)
			.pipe(autoprefixer({map: {inline: true}}))
			.pipe(rename(config.output.style))
			.pipe(gulp.dest(config.output.directory))
			.pipe(livereload());
	},

	watch: function() {
		livereload.listen();
		var watches = config.watch;

		for (var task in watches) {
			var glob = watches[task];
			if (task == 'update') {
				gulp.watch(glob, livereload.changed);
			} else {
				gulp.watch(glob, [task]);
			}
		}
	}


}
