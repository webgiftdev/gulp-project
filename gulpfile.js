/* Stratakis Stavros https://webgift.dev - https://webgift.gr */

import gulp from 'gulp';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import webp from 'imagemin-webp';
import extReplace from 'gulp-ext-replace';
import minifyCss from 'gulp-clean-css';
import minify from 'gulp-minify';
import htmlmin from 'gulp-htmlmin';
import beautify from 'gulp-jsbeautifier';
import {deleteAsync} from 'del';
//import concat from 'gulp-concat';


/* Convert images to WebP */
gulp.task('exportWebP', function() {
  let src = "./exportWebP/images/*.+(png|jpg|gif)";
  let dest = "./exportWebP";

  return gulp.src(src)
    .pipe(imagemin([
        webp({quality: 80})
    ]))
    .pipe(extReplace(".webp"))
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
        //.pipe(concat('template.min.css')) //Combine all files into one file
   .pipe(gulp.dest(dest));
});


/* Minify JS task */
gulp.task('minifyJS', function () {
  let src = "./minifyJS/unminified/*.js";
  let dest = "./minifyJS";

    return gulp.src(src)
        .pipe(minify({ext: { min: '.js'}, noSource: true}))
        //.pipe(concat('main.min.js')) //Combine all files into one file
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
      '!exportWebP/images/readme.md',
      'minifyImages/*',
      'minifyImages/images/*',
      '!minifyImages/images',
      '!minifyImages/images/readme.md',
      'minifyCSS/*',
      'minifyCSS/unminified/*',
      '!minifyCSS/unminified',
      '!minifyCSS/unminified/readme.md',
      'minifyJS/*',
      'minifyJS/unminified/*',
      '!minifyJS/unminified',
      '!minifyJS/unminified/readme.md',
      'minifyHTML/*',
      'minifyHTML/unminified/*',
      '!minifyHTML/unminified',
      '!minifyHTML/unminified/readme.md',
      'beautify/*',
      'beautify/files/*',
      '!beautify/files',
      '!beautify/files/readme.md',
    ]);
});