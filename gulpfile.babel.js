import gulp from 'gulp';
import config from './config';

import html from './tasks/html.js';
import script from './tasks/script.js';
import server from './tasks/server.js';
import style from './tasks/style.js';
import image from './tasks/image.js';
import deploy from './tasks/deploy.js';

gulp.task('style', style);
gulp.task('script', script);
gulp.task('html', html);
gulp.task('image', image);
gulp.task('server', server);
gulp.task('deploy', deploy); // it's beta

gulp.task('build', ['html', 'image', 'script', 'style']);
gulp.task('default', ['script', 'style', 'image', 'html', 'server']);
