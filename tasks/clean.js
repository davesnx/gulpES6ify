import gulp from 'gulp';
import del from 'del';
import config from './../config';

export default () => {
  return del([
    config.html.output,
    config.styles.output,
    config.scripts.output,
    config.assets.output
  ]);
};
