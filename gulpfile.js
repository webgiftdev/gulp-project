import gulp from 'gulp';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import webp from 'imagemin-webp';
import extReplace from 'gulp-ext-replace';
import minifyCss from 'gulp-clean-css';
import minify from 'gulp-minify';
import htmlmin from 'gulp-htmlmin';
import beautify from 'gulp-jsbeautifier';


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


/* Minify Images file PNG, JPEG, GIF, SVG and WebP */
gulp.task('minifyImages', function() {
  let src = "./minifyImages/images/*.+(png|jpg|gif|svg|webp)";
  let dest = "./minifyImages";

  return gulp.src(src)
    .pipe(imagemin([
        gifsicle({interlaced: true}), //GIF OMG
        mozjpeg({quality: 80, progressive: true}), //Perfect minify
        optipng({ optimizationLevel: 3 }), //Perfect minify
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
        webp({quality: 75}) //Not Good
      ]))
    .pipe(gulp.dest(dest));
});


gulp.task('minifyCSS', function () {
  let src = "./minifyCSS/unminified/*.css";
  let dest = "./minifyCSS";

    return gulp.src(src)
        .pipe(minifyCss())
        //.pipe(concat('stylesheet.css')) //in case that we need to combine all in one file
   .pipe(gulp.dest(dest));
});


gulp.task('minifyJS', function () {
  let src = "./minifyJS/unminified/*.js";
  let dest = "./minifyJS";

    return gulp.src(src)
        .pipe(minify({ext: { min: '.js'}, noSource: true}))
        //.pipe(concat('bundle.js'))
    .pipe(gulp.dest(dest));
});


gulp.task('minifyHTML', function () {
  let src = "./minifyHTML/unminified/*.html";
  let dest = "./minifyHTML";

    return gulp.src(src)
        .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(dest));
});


gulp.task('beautify', function () {
  let src = "./beautify/files/*.+(css|js|html)";
  let dest = "./beautify";

    return gulp.src(src)
        .pipe(beautify())
   .pipe(gulp.dest(dest));
});

