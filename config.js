export default {
  info: 'gulpES6ify',
  html: {
    input: 'src/',
    output:'public/',
    all:   'src/**/*.html',
    message: 'htmlifying...'
  },
  assets: {
    input: 'src/',
    output:'public/assets',
    all:   'src/assets/**/*',
    message: 'assets...'
  },
  scripts: {
    input: 'src/scripts/app.js',
    output:'public/scripts',
    all:   'src/scripts/**/*.js',
    public:'build.js',
    map: 'build.js.map',
    message: 'watchifying...'
  },
  styles: {
    input: 'src/',
    output:'public/styles',
    all:   'src/styles/**/*.scss',
    public:'style.css',
    message: 'sassifying...',
    sassOptions: {
      outputStyle: 'compressed',
      sourcemap: true,
      verbose: true
    },
    prefixOptions: {
      map: { inline: true },
      browsers: [
        'last 2 version',
        'safari 5',
        'ie 9',
        'opera 12.1',
        'ios 6',
        'android 4'
      ]
    }
  },
  server: {
    baseDir: './public'
  },
  deploy: {
    src: 'public' + '/**',
    options: {
      destination: '~/path/to/my/website/root/',
      root: 'production',
      hostname: 'mydomain.com',
      username: 'user',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    },
    message: 'deploying...'
  }
};
