var
  gulp = require('gulp'),
  connect = require('gulp-connect'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  gulpif = require('gulp-if'),
  lazypipe = require('lazypipe'),
  header = require('gulp-header'),
  sourcemaps = require('gulp-sourcemaps'),
  prefix = require('gulp-path-prefix'),

  imagemin = require('gulp-imagemin'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  jade = require('gulp-jade'),
  templatecache = require('gulp-angular-templatecache'),
  cdnizer = require("gulp-cdnizer"),

  pkg = require('./package.json');

var banner = [
  '/**',
  ' ** <%= pkg.name %> - <%= pkg.description %>',
  ' ** @author <%= pkg.author %>',
  ' ** @version v<%= pkg.version %>',
  ' **/',
  ''
].join('\n');

var build = false;
var dest = 'dist';
// var prefixUrl = 'http://interactive.ekstrabladet.dk/features/2015-hiroshima/' + dest;
var prefixUrl = 'http://php.ekstrabladet.dk/redaktionelt/udvikling/features/2015-hiroshima/' + dest;

var ngcache = lazypipe()
  .pipe(rename, {dirname: '/'})
  .pipe(templatecache, {standalone: true})
  .pipe(gulp.dest, dest);
  var cdn = lazypipe()
    .pipe(cdnizer, [
      {
        file: 'bootstrap/dist/css/bootstrap.css',
        cdn: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'
      },
      {
        file: 'angular/angular.js',
        cdn: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.4.1/angular.min.js'
      }
    ]);

/* Dom */
gulp.task('dom', function () {
  return gulp.src('src/index.html')
    .pipe(gulp.dest(dest))
    .pipe(connect.reload());
});

gulp.task('directives', function () {
  return gulp.src('src/directives/**/*.html')
    .pipe(gulp.dest(dest + '/directives'))
    .pipe(connect.reload());
});


gulp.task('partials', function () {
  return gulp.src('src/partials/**/*.html')
    .pipe(gulp.dest(dest + '/partials'))
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
  return gulp.src('src/scripts/**/*.js')
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
  gulp.watch('src/**/*.jade', ['dom']);
  gulp.watch('src/directives/*.html', ['directives']);
  gulp.watch('src/partials/*.html', ['partials']);

  gulp.watch('src/images/**', ['images']);
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
});
/* Default task */
gulp.task('default', ['connect', 'dom','directives','partials', 'images', 'styles', 'scripts', 'watch']);

gulp.task('build', function () {
  build = true;

  del(dest);
  return gulp.start('dom', 'images', 'styles', 'scripts');
});
