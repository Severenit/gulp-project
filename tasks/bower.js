var gulp = require('gulp');
var concat = require('gulp-concat');
var bc = './bower_components/';

gulp.task('bower', function() {

  gulp.src(bc + 'jquery/dist/jquery.js')
    .pipe(gulp.dest('./app/libs/jquery/'));

  gulp.src([bc + 'angular/angular.js',
      //bc + 'angular-animate/angular-animate.js',
      //bc + 'angular-cookies/angular-cookies.js',
      //bc + 'angular-i18n/angular-locale_ru-ru.js',
      //bc + 'angular-loader/angular-loader.js',
      //bc + 'angular-resource/angular-resource.js',
      //bc + 'angular-route/angular-route.js',
      //bc + 'angular-sanitize/angular-sanitize.js',
      //bc + 'angular-touch/angular-touch.js',
      //bc + 'firebase/firebase.js',
      //bc + 'angularfire/dist/angularfire.js',
    ])
    .pipe(concat('angular.concat.js'))
    .pipe(gulp.dest('./app/libs/angular/'));

});