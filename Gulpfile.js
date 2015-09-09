var gulp = require('gulp');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
// var errorMap = require('errorMap.js');

function compile(watch) {
  var bundler = watchify(
                  browserify(
                    './src/app.js',
                    { debug: true }
                  ).transform(babel)
                );

  function rebundle() {
    bundler.bundle()
      .on('error', function(err) {
        console.error(err); this.emit('end');
      })
      .pipe(source('build.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('Bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watch() {
  return compile(true);
}

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);
