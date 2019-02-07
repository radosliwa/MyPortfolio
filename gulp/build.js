var gulp = require('gulp');
var imageMin = require('gulp-imagemin');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();

gulp.task('previewDocs', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'docs'
    }
  });
});

gulp.task('delDocs', function() {
  return del('./docs');
});



gulp.task('optimizePics', ['delDocs'], function() {
  return gulp.src('./app/assets/img/**/*')
    .pipe(imageMin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest('./docs/assets/img'));
});

gulp.task('useminStart', ['delDocs'], function() {
  gulp.start('usemin');
});

gulp.task('usemin', ['styles', 'scripts'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function() {
        return rev()
      }, function() {
        return cssnano()
      }],
      js: [function() {
        return rev()
      }, function() {
        return uglify()
      }]
    }))
    .pipe(gulp.dest('./docs'));
});
/* ^ "retrun" to make sure rev finishes before next function begins*/

gulp.task('build', ['delDocs', 'optimizePics', 'useminStart']);