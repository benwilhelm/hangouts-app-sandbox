var gulp = require('gulp');
var gutil = require("gulp-util");

gulp.task('build', function(){
  gulp.src([
    `src/app.*`,
    `hangouts-logo.png`
  ])
  .pipe(gulp.dest('dist'))
})
