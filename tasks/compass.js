var gulp = require('gulp');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var minifyCSS = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var csso = require('gulp-csso');
var urlAdjuster = require('gulp-css-url-adjuster');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('compass', function() {
  gulp.src('./app/scss/**/*.scss')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
      }}))
    .pipe(sourcemaps.init())
    .pipe(compass({
      config_file: './config.rb',
      sass: './app/scss',
      css: './app/scss'
    }))
    .pipe(urlAdjuster({
      replace:  ['/app/img','/img']
    }))
    .pipe(minifyCSS({compatibility: 'ie8'}))
    .pipe(rename('style.min.css'))
    .pipe(csso())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({stream: true}));
});