var gulp       = require('gulp');
var nodemon    = require('gulp-nodemon');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('gulp-browserify');
var uglify     = require('gulp-uglify');
var gulpif     = require('gulp-if');
var livereload = require('gulp-livereload');

var isProd     = process.env.NODE_ENV == 'production';

gulp.task('develop', function () {
  nodemon({script: './server.js', ext: 'js json', legacyWatch: true });
});

gulp.task('sass', function() {
  gulp.src('./public/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(gulpif(!isProd, sourcemaps.write()))
    .pipe(gulp.dest('./public/css'))
  ;
});

gulp.task('scripts', function() {
  gulp.src('lib/app.js')
    .pipe(browserify({
      insertGlobals : true,
      debug         : !isProd,
      transform     : ['reactify']
    }))
    .pipe(gulpif(isProd, uglify()))
    .pipe(gulp.dest('./public/javascripts'))
  ;
});

gulp.task('watch', function() {
  gulp.watch('./public/scss/**/*.scss', ['sass']);
  gulp.watch('./lib/**/*.js', ['scripts']);
});

gulp.task('default', ['develop', 'scripts', 'sass', 'watch']);
gulp.task('build', ['scripts', 'sass']);
