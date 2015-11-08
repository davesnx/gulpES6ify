// common dependencies
import gulp from 'gulp'
import config from './config'
import browserSync from 'browser-sync'

const server = () => {
  return browserSync.init({
    server: {
      baseDir: config.server.baseDir
    }
  });
};

export default server;
gulp.task('server', server);
