const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const minify = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();
 
sass.compiler = require('node-sass');

function styles() {
  return gulp.src('./src/scss/main.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(minify({
    level: 2
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./build/css/'))
  .pipe(browserSync.stream())
}

function scripts() {
  return gulp.src('./src/js/**/*.js')
  .pipe(uglify({
    toplevel: true
  }))
  .pipe(gulp.dest('./build/js'))
  .pipe(browserSync.stream())
}

function images() {
  return gulp.src('./src/img/**/*')
  .pipe(imagemin([
    imagemin.gifsicle({interlaced: true}),
    imagemin.jpegtran({progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
    imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
    })
  ]))
  .pipe(gulp.dest('./build/img'))
}

function watch() {
  browserSync.init({
    server: "./"
  });

  gulp.watch('./src/scss/**/*.scss', styles);
  gulp.watch('./src/js/**/*.js', scripts);
  gulp.watch('./*.html').on('change', browserSync.reload);
}

function cleanBuild() {
  return del(['build/*']);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('img', images);
gulp.task('watch', watch);

gulp.task('build', gulp.series(cleanBuild, gulp.parallel(styles, scripts, images)));
gulp.task('dev', gulp.series('build', watch));