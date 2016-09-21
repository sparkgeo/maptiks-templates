const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    ghostMode: false,
    open: false,
    server: './dist/',
    port: 3050,
  });
  gulp.watch([
    'dist/**/*',
  ]).on('change', browserSync.reload);
});
