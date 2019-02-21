"use strict";

// Load Plugins
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat-util');
const cp = require('child_process');
const cssnano = require('cssnano');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
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
      .pipe(concat.header('<style>'))
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
  return cp.spawn("webpack", {
    stderr: "inherit"
  });
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
  gulp.watch('assets/js/wufoo.js', webpack);
}

// Tasks
gulp.task("critical", critical);
gulp.task("wufoo", wufoo);
gulp.task("webpack", webpack);

// Run Watch as default
gulp.task('watch', watchFiles);

// Build
gulp.task('build', gulp.series(['critical','wufoo']));