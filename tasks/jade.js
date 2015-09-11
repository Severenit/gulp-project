var gulp = require('gulp');
var prettify = require('gulp-prettify');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('jade', function() {
  gulp.src('./app/**/*.jade')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }}))
    .pipe(jade())
    .pipe(prettify({indent_size: 2}))
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream: true}));
});