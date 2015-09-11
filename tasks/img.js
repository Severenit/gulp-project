var gulp = require('gulp');

gulp.task('img', function() {
  gulp.src('./app/img/**/*')
    .pipe(gulp.dest('./dist/img/'));
});