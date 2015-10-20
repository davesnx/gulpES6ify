import del from 'del';


export default (gulp, config) => {

  function clean () {
    return del([
      config.html.output,
      config.styles.output,
      config.scripts.output,
      config.assets.output
    ]);
  }

  gulp.task('clean', clean);

};
