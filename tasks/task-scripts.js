import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import watchify from 'watchify';
import browserify from 'babelify';
import babelify from 'babelify';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';


export default (gulp, gutil, config, notificator, browserSync) => {

  let scripts = () => {

    let bundler = browserify({
        entries: ['./' + config.scripts.input],
        debug: true,
        transform: [[babelify, { global: true }]],
        cache: {},
        packageCache: {},
        fullPaths: true
    });

    let w = watchify(bundler);

    w.on('update', scripts);
    w.on('log', gutil.log);

    return bundler.bundle()
      .on('error', gutil.log.bind(gutil, 'Browserify Error'))
      .pipe(source(config.scripts.public))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest(config.scripts.output))
      .pipe(browserSync.stream())
      .pipe(notificator(config.scripts.message));
  };

  gulp.task('scripts', scripts);

};
