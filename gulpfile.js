'use strict';

// Load Plugins
const autoprefixer = require('autoprefixer');
const cache = require('gulp-cache');
const concat = require('gulp-concat-util');
const cp = require('child_process');
const cssnano = require('cssnano');
const gm = require('gulp-gm');
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPNGquant = require('imagemin-pngquant');
const imageminSVGo = require('imagemin-svgo');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass');

// Critical CSS
function critical() {
  const plugins = [autoprefixer({browsers: ['> 5%']}), cssnano()];
  return gulp
      .src('assets/css/critical.scss')
      .pipe(plumber())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(plugins))
      // wrap with style tags
      .pipe(concat.header(`<style nonce="generateHash">`))
      .pipe(concat.footer('</style>'))
      // convert it to an include file
      .pipe(
        rename({
          basename: 'critical',
          extname: '.html',
        })
      )
      // insert file
      .pipe(gulp.dest('layouts/partials'))
}

// Wufoo CSS
function wufoo() {
  const plugins = [autoprefixer({browsers: ['> 5%']}), cssnano()];
  return gulp
      .src('assets/css/wufoo.scss')
      .pipe(plumber())
      .pipe(sass().on('error', sass.logError))
      .pipe(postcss(plugins))
      // insert file
      .pipe(gulp.dest('static/css'))
}

// Run Webpack
function webpack() {
  return cp.spawn('webpack', {
    err: true,
    stderr: true,
    stdout: true
  });
}

// Image Conversion
function convert() {
  return gulp
    .src(['assets/img/*.jpg','assets/img/*.png'])
    .pipe(plumber())
    .pipe(
      gm(function(gmfile) {
        return gmfile.setFormat('webp');
      })
    )
    .pipe(gulp.dest('assets/img'));
}

// Image Optimization
function optimize() {
  return gulp
    .src(['assets/img/*.jpg','assets/img/*.png','assets/img/*.svg'])
    .pipe(plumber())
    .pipe(
      cache(
        imagemin({
          use: [
            imageminMozjpeg({
              quality: 80
            }),
            imageminPNGquant({
              quality: [0.3, 0.5]
            }),
            imageminSVGo({
              removeViewBox: true
            })
          ]
        })
      )
    )
    .pipe(gulp.dest('assets/img'));
}

// Minify
function minify() {
  return gulp
  .src(['public/**/*.html'])
  .pipe(plumber())
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulp.dest('public'));
}

// Replace
function clean() {
  return gulp
  .src(['public/**/*.html'])
  .pipe(plumber())
  .pipe(replace(/<p><(div|section|h1|h2|h3|h4|ul|li|img|figure|picture)(.*?)>/g, '<$1$2>'))
  .pipe(replace(/<.(div|section|h1|h2|h3|h4|ul|li|img|figure|picture)><.p>/g, '<$1>'))
  .pipe(gulp.dest('public'));
}

// Watch asset folder for changes
function watchFiles() {
  gulp.watch('assets/css/common.scss', critical);
  gulp.watch('assets/css/critical.scss', critical);
  gulp.watch('assets/css/extends.scss', critical);
  gulp.watch('assets/css/fonts.scss', critical);
  gulp.watch('assets/css/mixins.scss', critical);
  gulp.watch('assets/css/reset.scss', critical);
  gulp.watch('assets/css/variables.scss', critical);
  gulp.watch('assets/css/wufoo.scss', wufoo);
  gulp.watch('assets/js/download.js', webpack);
  gulp.watch('assets/js/header.js', webpack);
  gulp.watch('assets/js/lazy.js', webpack);
  gulp.watch('assets/js/webp.js', webpack);
  gulp.watch('assets/js/wufoo.js', webpack);
}

// Tasks
gulp.task('critical', critical);
gulp.task('wufoo', wufoo);
gulp.task('webpack', webpack);
gulp.task('convert', convert);
gulp.task('optimize', optimize);
gulp.task('minify', minify);
gulp.task('clean', clean);
gulp.task('hugo-clean', gulp.series(['minify', 'clean']));

// Run Watch as default
gulp.task('watch', watchFiles);

// Build
gulp.task('build', gulp.series(['critical', 'wufoo','optimize', 'webpack']));