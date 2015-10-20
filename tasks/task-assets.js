import browserSync from 'browser-sync';


export default (gulp, config, notificator) => {

  function assets () {
    return gulp.src(config.assets.all)
      .pipe(gulp.dest(config.assets.output))
      .pipe(browserSync.stream())
      .pipe(notificator(config.assets.message));
  };

  gulp.task('assets', assets);
};
