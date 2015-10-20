

export default (gulp, config, browserSync) => {

  function server () {
    return browserSync.init({
      server: {
        baseDir: config.server.baseDir
      }
    });
  }

  gulp.task('server', server);

};
