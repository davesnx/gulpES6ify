module.exports = {
  output: {
    directory: 'public',
    script:    'build.js',
    style:     'styles.css'
  },
  input: {
    directory: 'src',
    script:    'script/app.js',
    style:     'style/app.scss'
  },
  watch: {
    update: '**/*.php',
    style: this.input.directory + '/' + this.input.style.replace(/.+?\.(.+)$/, '**/*.$1')
  },
  sassOptions: {
      style:     'expanded',
      sourcemap: true,
      require:   'sass-globbing'
  }
}
