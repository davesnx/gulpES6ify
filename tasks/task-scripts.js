// common dependencies
import gulp from 'gulp'
import gutil from 'gulp-util'
import notificator from './libs/notificator'
import config from './../config'
import browserSync from 'browser-sync'

import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import watchify from 'watchify';
import browserify from 'browserify';
import babelify from 'babelify';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';

let bundler = browserify({
    entries: ['./' + config.scripts.input],
    debug: true,
    sourceMapRelative: config.scripts.public,
    transform: [[babelify, { global: true }]],
    cache: {},
    packageCache: {},
    fullPaths: true
});

var w = watchify(bundler);

var bundleJS = () => {
  return bundler.bundle()
    .on('error', (err) => {
        gutil.log(err.message);
        browserSync.notify(err.message, 3000);
        this.emit('end');
    })
    .pipe(source(config.scripts.public))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    // .pipe(uglify())
    // .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scripts.output))
    .pipe(browserSync.stream())
    .pipe(notificator(config.scripts.message));
};

w.on('update', bundleJS);
w.on('log', gutil.log);

export default bundleJS;
