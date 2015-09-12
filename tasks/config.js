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
  watch: {
    style: null
  },
  sassOptions: {
      style:     'expanded',
      sourcemap: true,
      verbose: true
  }
  
};
