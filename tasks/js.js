var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('js', function() {
  gulp.src('./app/js/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(reload({stream: true}));
});