var gulp = require('gulp');

gulp.task('default', [
    'bower',
    'libs',
    'compass',
    'img',
    'jade',
    'js',
    'server',
    'watch'
]);