import gulp from 'gulp';
import gutil from 'gulp-util';
import browserSync from 'browser-sync'

import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import sourcemaps from 'gulp-sourcemaps';
import watchify from 'watchify';
import babelify from 'babelify';
import browserify from 'browserify';

import config from './../config';
import notificator from './libs/notificator';

const NOTIFICATION_MSG = 'watchifying...';

var bundler = browserify({
    entries: ['./' + config.scripts.input],
    debug: true,
    transform: [[babelify, {global: true}]],
    cache: {},
    packageCache: {},
    fullPaths: true
});

var w = watchify(bundler);

var bundleJS = () => {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.scripts.public))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.scripts.output))
    .pipe(browserSync.stream())
    .pipe(notificator(NOTIFICATION_MSG));
};

w.on('update', bundleJS);
w.on('log', gutil.log);

export default bundleJS;
