const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    ghostMode: false,
    open: false,
    server: './src/',
    port: 3050,
  });
  gulp.watch([
    'src/**/*',
  ]).on('change', browserSync.reload);
});
