import browserSync from 'browser-sync';
import config from './../config';

export default () => {
 return browserSync.init({
    server: {
        baseDir: config.server.baseDir
    }
  });
};
