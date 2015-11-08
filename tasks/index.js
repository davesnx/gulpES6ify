import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('.', { recurse: false })

gulp.task('build', [
    'clean',
    'html',
    'assets',
    'scripts',
    'styles'
    ]
);

gulp.task('default', [
    'server',
    'html',
    'assets',
    'scripts',
    'styles',
    'watch'
    ]
);
