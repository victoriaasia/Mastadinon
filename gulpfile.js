'use strict';

const gulp = require('gulp'),
      clean = require('gulp-clean'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      concat = require('gulp-concat'),
      csso = require('gulp-csso'),
      rigger = require('gulp-rigger'),
      image = require('gulp-image'),
      sourcemaps = require('gulp-sourcemaps');

gulp.task('html', function() {
    return gulp.src(['src/*.html', 'src/**/*.html'])
        .pipe(rigger())
        .pipe(gulp.dest('dest'))
});


gulp.task('sass', function() {
  return gulp.src('src/css/*.*')
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
      .pipe(concat('styles.css'))
      .pipe(autoprefixer({
        browsers: [
          'last 2 versions',
          'ie 11',
          'iOS >= 8',
          'Safari >= 5'
        ],
        cascade: false
      }))
      .pipe(csso())
    .pipe(sourcemaps.write('maps'))
    .pipe(gulp.dest('dest/css'))
});

gulp.task('img', function() {
  return gulp.src(['src/img/*.*', 'src/img/**/*.*'])
    // .pipe(image())
    .pipe(gulp.dest('dest/img'))
});

gulp.task('js', function() {
  return gulp.src(['src/js/jquery.min.js', 'src/js/modernizr.js', 'src/js/script.js'])
    .pipe(concat('script.js'))
    .pipe(gulp.dest('dest/js'))
});

gulp.task('dev:watch', function() {
  gulp.watch(['src/*.html', 'src/**/*.html'], gulp.series('html'));
  gulp.watch('src/css/*.*', gulp.series('sass'));
  gulp.watch('src/img/*.*', gulp.series('img'));
  gulp.watch('src/js/*.*', gulp.series('js'));
});
