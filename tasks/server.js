import gulp from 'gulp';
import gutil from 'gulp-util';
import lrserver from 'tiny-lr';
import refresh from 'gulp-livereload';
import config from './../config';

import ecstatic from 'ecstatic';
import http from 'http';

refresh({ start:true });

export default () => {
  http.createServer(
    ecstatic({ root: __dirname + '/../public' }))
    .listen(config.server.port, () => {
      gutil.log(`${gutil.colors.cyan("static server")} on ${gutil.colors.green("localhost:" + config.server.port)}`);
    });

  lrserver().listen(config.server.livereloadport, () => {
    gutil.log(`${gutil.colors.cyan("livereload server")} on ${gutil.colors.gray("localhost:" + config.server.livereloadport)}`);
  });

};
