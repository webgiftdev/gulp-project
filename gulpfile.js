/* Stratakis Stavros https://webgift.dev - https://webgift.gr */

import gulp from 'gulp';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import webp from 'imagemin-webp';
import ext_replace from 'gulp-ext-replace';
import minifyCss from 'gulp-clean-css';
import minify from 'gulp-minify';
import htmlmin from 'gulp-htmlmin';
import beautify from 'gulp-jsbeautifier';
import {deleteAsync} from 'del';
//import concat from 'gulp-concat'; // Uncomment the line to combine all files into one


/* Convert images to WebP */
gulp.task('exportWebP', function() {
  let src = "./exportWebP/images/*.+(png|jpg|gif)";
  let dest = "./exportWebP";

  return gulp.src(src)
    .pipe(imagemin([
        webp({quality: 80})
    ]))
    .pipe(ext_replace(".webp"))
    .pipe(gulp.dest(dest));
});


/* Minify PNG, JPEG, GIF, SVG and WebP images */
gulp.task('minifyImages', function() {
  let src = "./minifyImages/images/*.+(png|jpg|gif|svg|webp)";
  let dest = "./minifyImages";

  return gulp.src(src)
    .pipe(imagemin([
        gifsicle({interlaced: true}), //Well done
        mozjpeg({quality: 80, progressive: true}), //Nice
        optipng({ optimizationLevel: 3 }), //Nice
        svgo({ // Nice
          plugins: [
            {
              name: 'removeViewBox',
              active: true
            },
            {
              name: 'cleanupIDs',
              active: false
            }
          ]
        }),
        webp({quality: 75}) //Don't like
      ]))
    .pipe(gulp.dest(dest));
});


/* Minify CSS task */
gulp.task('minifyCSS', function () {
  let src = "./minifyCSS/unminified/*.css";
  let dest = "./minifyCSS";

    return gulp.src(src)
        .pipe(minifyCss())
        //.pipe(concat('main.min.css')) // Uncomment the line to combine all files into one
   .pipe(gulp.dest(dest));
});


/* Minify JS task */
gulp.task('minifyJS', function () {
  let src = "./minifyJS/unminified/*.js";
  let dest = "./minifyJS";

    return gulp.src(src)
        .pipe(minify({ext: { min: '.js'}, noSource: true}))
        //.pipe(concat('main.min.js')) // Uncomment the line to combine all files into one
    .pipe(gulp.dest(dest));
});


/* Minify HTML task */
gulp.task('minifyHTML', function () {
  let src = "./minifyHTML/unminified/*.html";
  let dest = "./minifyHTML";

    return gulp.src(src)
        .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(dest));
});


/* Beautify CSS, JS and HTML task*/
gulp.task('beautify', function () {
  let src = "./beautify/files/*.+(css|js|html)";
  let dest = "./beautify";

    return gulp.src(src)
        .pipe(beautify())
   .pipe(gulp.dest(dest));
});


/* Clean all files from folders */
gulp.task('clean', function() {
  return deleteAsync([
      'exportWebP/*',
      'exportWebP/images/*',
      '!exportWebP/images',
      'minifyImages/*',
      'minifyImages/images/*',
      '!minifyImages/images',
      'minifyCSS/*',
      'minifyCSS/unminified/*',
      '!minifyCSS/unminified',
      'minifyJS/*',
      'minifyJS/unminified/*',
      '!minifyJS/unminified',
      'minifyHTML/*',
      'minifyHTML/unminified/*',
      '!minifyHTML/unminified',
      'beautify/*',
      'beautify/files/*',
      '!beautify/files'
    ]);
});