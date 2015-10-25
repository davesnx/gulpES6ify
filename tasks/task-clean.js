// common dependencies
import gulp from 'gulp'
import config from './config'

import del from 'del';

let clean = () => {
  return del.sync([
    config.assets.output,
    config.styles.output,
    config.scripts.output,
    config.html.output
  ]);
};

export default clean;
gulp.task('clean', clean);
