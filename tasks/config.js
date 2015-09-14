'use strict';

module.exports = {

  output: {
    directory: 'public/',
    script:    'build.js',
    style:     'styles.css'
  },
  input: {
    directory: 'src/',
    script:    'script/app.js',
    style:     'style/app.scss'
  },
  all: {
    scripts: 'script/**/*.js',
    views:   'view/**/*.html',
    styles:  'style/**/*.scss'
  },
  sassOptions: {
      style:     'expanded',
      sourcemap: true,
      verbose: true
  },
  watchifyOps: {
    debug: true
  }

};
