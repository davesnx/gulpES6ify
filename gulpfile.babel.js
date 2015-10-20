import gulp from 'gulp';
import gutil from 'gulp-util';
import config from './config';
import browserSync from 'browser-sync';
import notificator from './tasks/libs/notificator';

// Using require for passing the common dependences...
require('./tasks/task-html.js')(gulp, config, notificator, browserSync);
require('./tasks/task-scripts.js')(gulp, gutil, config, notificator, browserSync);
require('./tasks/task-server.js')(gulp, config, browserSync);
require('./tasks/task-styles.js')(gulp, gutil, config, notificator, browserSync);
require('./tasks/task-assets.js')(gulp, config, notificator);
require('./tasks/task-deploy.js')(gulp, config, notificator);
require('./tasks/task-clean.js')(gulp, config);

gulp.watch(config.styles.all, ['styles', browserSync.reload]);
gulp.watch(config.scripts.all, ['scripts', browserSync.reload]);
gulp.watch(config.assets.all, ['assets', browserSync.reload]);
gulp.watch(config.html.all, ['html', browserSync.reload]);

gulp.task('build', ['clean', 'html', 'assets', 'scripts', 'styles']);
gulp.task('default', ['clean', 'html', 'assets', 'scripts', 'styles', 'server']);
