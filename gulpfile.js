var gulp = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('test', function() {
    return gulp.src('./lib/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});
