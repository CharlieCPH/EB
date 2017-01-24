var
  gulp = require('gulp'),
  connect = require('gulp-connect'),
  concat = require('gulp-concat'),
  header = require('gulp-header'),
  sourcemaps = require('gulp-sourcemaps'),
  imagemin = require('gulp-imagemin'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),

  pkg = require('./package.json');

var banner = [
  '/**',
  ' ** <%= pkg.name %> - <%= pkg.description %>',
  ' ** @author <%= pkg.author %>',
  ' ** @version v<%= pkg.version %>',
  ' **/',
  ''
].join('\n');

var dest = 'dist';

/* Dom */
gulp.task('dom', function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});

/* Images */
gulp.task('images', function () {
  return gulp.src('src/images/**')
    .pipe(imagemin())
    .pipe(gulp.dest(dest + '/img'));
});

/* Styles */
gulp.task('styles', function () {
  return gulp.src('src/styles/app.scss')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.css'))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifycss())
    .pipe(header(banner, {
      pkg : pkg
    }))
    .pipe(sourcemaps.write('./sourcemaps'))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});

/* Scripts */
gulp.task('scripts', function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(sourcemaps.write('./sourcemaps'))
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});

/* Server */
gulp.task('connect', function () {
  return connect.server({
    root: [dest, 'node_modules'],
    port: 9000,
    livereload: true
  });
});

/* Watch task */
gulp.task('watch', function () {
  gulp.watch('src/index.html', ['dom']);
  gulp.watch('src/images/**', ['images']);
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/**/*.js', ['scripts']);
});
/* Default task */
gulp.task('default', ['connect', 'dom', 'images', 'styles', 'scripts', 'watch']);
