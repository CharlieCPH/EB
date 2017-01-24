/*jshint globalstrict: true*/
/*global require*/
'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');

gulp.task('default', ['scss', 'compress', 'watch']);

gulp.task('scss', function () {
    gulp.src('./styles.scss')
        .pipe(sass())
        .pipe(concat('frontend.css'))
        .pipe(gulp.dest('./dist/'))
    ;
});

gulp.task('compress', function() {
    gulp.src('app.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});

var livereloadFiles = [
    'dist/frontend.css',
    'index.php',
    'app.js'
];

gulp.task('watch', function () {
    var server = livereload();
    gulp.watch('styles.scss', ['scss']);
    gulp.watch('app.js', ['compress']);
    gulp.watch(livereloadFiles, function (file) {
        server.changed(file.path);
    });
});
