

export default (gulp, config, notificator, browserSync) => {

  function html () {
    return gulp.src(config.html.all)
      .pipe(gulp.dest(config.html.output))
      .pipe(browserSync.stream())
      .pipe(notificator(config.html.message));
  }

  gulp.task('html', html);

};
