// common dependencies
import gulp from 'gulp'
import config from './../config'
import browserSync from 'browser-sync'

export default () => {
  return browserSync.init({
    server: {
      baseDir: config.server.baseDir
    }
  });
};
