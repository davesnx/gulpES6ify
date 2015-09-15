module.exports = {

  output: {
    directory: 'public/',
    script:    'build.js',
    style:     'style.css'
  },
  input: {
    directory: 'src/',
    script:    'script/app.js',
    style:     'style/app.scss'
  },
  all: {
    scripts: 'src/script/**/*.js',
    views:   'src/view/**/*.html',
    styles:  'src/style/*.scss'
  },
  sassOptions: {
      style:     'expanded',
      sourcemap: true,
      verbose: true
  }

};
