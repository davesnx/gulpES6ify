// common dependencies
import gulp from 'gulp'
import config from './config'
import browserSync from 'browser-sync'

let server = () => {
  return browserSync.init({
    server: {
      baseDir: config.server.baseDir
    }
  });
};

export default server;
gulp.task('server', server);
