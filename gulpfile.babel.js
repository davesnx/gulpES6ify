import gulp from 'gulp';
import config from './tasks/config';

import html from './tasks/html.js';
import scripts from './tasks/scripts.js';
import server from './tasks/server.js';
import styles from './tasks/styles.js';
import assets from './tasks/assets.js';
import watch from './tasks/watch.js';
import deploy from './tasks/deploy.js';
import clean from './tasks/clean.js';

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('html', html);
gulp.task('assets', assets);
gulp.task('server', server);
gulp.task('watch', watch);
gulp.task('deploy', deploy); // beta
gulp.task('clean', clean);

gulp.task('build', ['clean', 'html', 'assets', 'scripts', 'styles']);
gulp.task('default', ['clean', 'scripts', 'styles', 'assets', 'html', 'server', 'watch']);
