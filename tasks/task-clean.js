// common dependencies
import gulp from 'gulp'
import config from './../config'

import del from 'del';

export default () => {
  return del.sync([
    config.assets.output,
    config.styles.output,
    config.scripts.output,
    config.html.output
  ]);
};
