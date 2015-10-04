import gulp from 'gulp';
import rsync from 'gulp-rsync';
import config from './../config';
import notificator from './libs/notificator';

const NOTIFICATION_MSG = 'deploying...';

export default () => {
  return gulp.src(config.html.output)
    .pipe(rsync(config.deploy))
    .pipe(notificator(NOTIFICATION_MSG));
};
