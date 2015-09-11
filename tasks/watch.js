var gulp = require("gulp");
var browserSync = require('browser-sync');

gulp.task('watch', function () {
  gulp.watch('./app/scss/**/*.scss', ['compass']);
  gulp.watch('./app/**/*.jade', ['jade']);
  gulp.watch('./app/img/**/*', ['img']);
  gulp.watch('./app/libs/**/*', ['libs']);
  gulp.watch([
    './app/**/*.html'
  ]).on('change', browserSync.reload);
});