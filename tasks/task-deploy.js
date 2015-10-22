// common dependencies
import gulp from 'gulp'
import config from './../config'

import rsync from 'gulp-rsync';

export default () => {
    return gulp.src(config.html.output)
      .pipe(rsync(config.deploy))
      .pipe(notificator(config.deploy.message));
};
