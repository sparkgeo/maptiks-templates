const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', () => {
  browserSync.init({
    ghostMode: false,
    open: false,
    server: './dist/',
  });
  gulp.watch([
    'dist/**/*',
  ]).on('change', browserSync.reload);
});
