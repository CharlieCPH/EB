/*jshint globalstrict: true*/
/*global require*/
'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var sass = require('gulp-sass');

gulp.task('default', ['scss', 'compress', 'analytics', 'dom','watch']);

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
        .pipe(gulp.dest('./dist/'));
});
gulp.task('dom', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('analytics', function() {
    gulp.src('analytics.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

var livereloadFiles = [
    'dist/frontend.css',
    'index.html',
    'app.js',
    'analytics.js'
];

gulp.task('watch', function () {
    var server = livereload();
    gulp.watch('styles.scss', ['scss']);
    gulp.watch('index.html', ['dom']);
    gulp.watch('app.js', ['compress']);
    // gulp.watch('analytics.js',['compress']);
    gulp.watch(livereloadFiles, function (file) {
        server.changed(file.path);
    });
});
