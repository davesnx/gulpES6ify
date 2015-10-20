import rsync from 'gulp-rsync';


export default (gulp, config, notificator) => {

  function deploy () {
    return gulp.src(config.html.output)
      .pipe(rsync(config.deploy))
      .pipe(notificator(config.deploy.message));
  }

  gulp.task('deploy', deploy);

};
