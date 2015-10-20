import gulp from 'gulp';
import del from 'del';
import config from './../config';

export default () => {
  return del([
    config.html.all,
    config.styles.all,
    config.scripts.all,
    config.assets.all
  ]);
};
