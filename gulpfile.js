var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');

//js 프로젝트 소스파일
var jsfiles = ['src/js/app.js'];

gulp.task('concat:js', function() {
  return gulp.src(jsfiles)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('temp/'));
});

gulp.task('copy:html', function() {
  return gulp.src('src/*.html')
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/'));
});

// no librarys
// NOT USED
gulp.task('copy:lib', function() {
  return gulp.src('src/lib/**/*')
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('minify:js', function() {
  return gulp.src('temp/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('minify:css', function() {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('dist/css'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 3001
  });
});


gulp.task('copy', ['copy:html']);
gulp.task('build', ['concat:js', 'copy', 'minify:css', 'minify:js']);
gulp.task('server', ['connect'])
gulp.task('default', ['build', 'watch', 'server']);
