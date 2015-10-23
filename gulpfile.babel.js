import gulp from 'gulp';
import gutil from 'gulp-util';
import config from './config';
import browserSync from 'browser-sync';
import notificator from './tasks/libs/notificator';

import html from './tasks/task-html.js';
import scripts from './tasks/task-scripts.js';
import server from './tasks/task-server.js';
import styles from './tasks/task-styles.js';
import assets from './tasks/task-assets.js';
import deploy from './tasks/task-deploy.js';
import clean from './tasks/task-clean.js';
import watch from './tasks/task-watch.js';

gulp.task('html', html);
gulp.task('scripts', scripts);
gulp.task('server', server);
gulp.task('styles', styles);
gulp.task('assets', assets);
gulp.task('deploy', deploy);
gulp.task('clean', clean);
gulp.task('watch', watch);

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
    'styles'
    ]
);
