import gulp from 'gulp';
import gutil from 'gulp-util';
import refresh from 'gulp-livereload';
import * as lrserver from 'tiny-lr';

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
    entries: ['./' + config.script.input],
    debug: true,
    transform: [[babelify, {global: true}]],
    cache: {},
    packageCache: {},
    fullPaths: true
});

var w = watchify(bundler);

refresh({ start:true });

var scriptTask = () => {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.script.public))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.script.output))
    .pipe(refresh(lrserver))
    .pipe(notificator(NOTIFICATION_MSG));
};

w.on('update', scriptTask);
w.on('log', gutil.log);

export default scriptTask;
