module.exports = {

  html: {
    input: 'src/',
    output:'public/',
    all:   'src/**/*.html'
  },
  image: {
    input: 'src/',
    output:'public/img',
    all:   'src/img/**/*'
  },
  script: {
    input: 'src/script/app.js',
    output:'public/script',
    all:   'src/script/**/*.js',
    public:'build.js'
  },
  style: {
    input: 'src/',
    output:'public/style',
    all:   'src/style/**/*.scss',
    public:'style.css'
  },
  server: {
    port: 1337,
    livereloadport: 35728
  },
  sassOptions: {
    outputStyle: 'compressed',
    sourcemap: true,
    verbose: true
  }

};
