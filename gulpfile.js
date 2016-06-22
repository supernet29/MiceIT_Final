var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');
var gulpUtil = require('gulp-util');

//js 프로젝트 소스파일
var jsfiles = ['src/js/app.js'];

gulp.task('copy:html', function() {
  return gulp.src('src/*.html')
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy:lib', function() {
  return gulp.src('src/lib/**/*')
    .pipe(gulp.dest('dist/lib'));
});

gulp.task('minify:js', function() {
	return gulp.src('src/js/*.js')
		.pipe(gulp.dest('temp'))
		.pipe(uglify().on('error', gulpUtil.log))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('minify:css', function() {
  return gulp.src('src/css/*.css')
		.pipe(cleanCSS())
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 3000
  });
});

gulp.task('copy', ['copy:html', 'copy:lib']);
gulp.task('build', ['copy', 'minify:css', 'minify:js']);
gulp.task('server', ['connect'])
gulp.task('default', ['build', 'watch', 'server']);

