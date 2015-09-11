var gulp = require("gulp");
var browserSync = require('browser-sync');

gulp.task('server', function () {
  browserSync({
    port: 9000,
    server: {
      baseDir: './dist'
    }
  });
});