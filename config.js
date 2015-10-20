export default {
  info: 'gulpES6ify',
  html: {
    input: 'src/',
    output:'public/',
    all:   'src/**/*.html'
  },
  assets: {
    input: 'src/',
    output:'public/assets',
    all:   'src/assets/**/*'
  },
  scripts: {
    input: 'src/scripts/app.js',
    output:'public/scripts',
    all:   'src/scripts/**/*.js',
    public:'build.js'
  },
  styles: {
    input: 'src/',
    output:'public/styles',
    all:   'src/styles/**/*.scss',
    public:'style.css',
    sassOptions: {
      outputStyle: 'compressed',
      sourcemap: true,
      verbose: true
    },
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
    }
  }
};
