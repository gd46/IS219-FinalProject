var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha');

gulp.task('jshint', function() {
    return gulp.src('./lib/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('mocha', function() {
    return gulp.src('./test/test.js')
        .pipe(mocha({
            reporter: 'nyan'
        }));
});

gulp.task('test', ['jshint', 'mocha']);
