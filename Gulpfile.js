var gulp = require('gulp');
var task = require('./tasks/index');

gulp.task('sass', task.style);
gulp.task('script', task.script);

gulp.task('listener', task.watchScript);

gulp.task('watch', ['sass', 'listener'], task.watch);
gulp.task('default', ['watch']);
