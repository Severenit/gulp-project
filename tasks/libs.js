var gulp = require('gulp');

gulp.task('libs', function() {
  gulp.src('./app/libs/**/*')
    .pipe(gulp.dest('./dist/libs/'));
});