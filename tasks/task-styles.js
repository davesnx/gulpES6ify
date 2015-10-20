import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';


export default (gulp, gutil, config, notificator, browserSync) => {

  function styles () {
    return gulp.src(config.styles.all)
      .pipe(sass(config.styles.sassOptions))
      .pipe(sourcemaps.write())
      .on('error', gutil.log)
      .pipe(autoprefixer(config.styles.prefixOptions))
      .pipe(rename(config.styles.public))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest(config.styles.output))
      .pipe(browserSync.stream())
      .pipe(notificator(config.styles.message));
  }

  gulp.task('styles', styles);

};
