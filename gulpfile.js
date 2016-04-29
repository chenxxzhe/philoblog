'use strict';
var gulp = require('gulp'),
    refresh = require('gulp-refresh'),
    concat = require('gulp-concat'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    // rename = require('gulp-rename'),
    cssClean = require('gulp-clean-css');
    // imagemin = require('gulp-imagemin'),
    // pngquant = require('imagemin-pngquant'),
    // htmlmin = require('gulp-htmlmin');

gulp.task('move', function(){
	return	gulp.src('blogJekyll/_site/**/*.*', {base:'blogJekyll/_site'})
		.pipe(gulp.dest('dist'));
});

gulp.task('jshint', ['move'], function(){
	return gulp.src('dist/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('minijs', ['move','jshint'], function(){
	return gulp.src('dist/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js/'));
});

gulp.task('minicss', ['move'], function(){
	return gulp.src('dist/css/*.css')
		.pipe(cssClean())
		.pipe(gulp.dest('dist/css/'));
});

// gulp.task('minihtml', ['move'], function(){
//   return gulp.src('dist/**/*.html',{base:'dist'})
//     .pipe(htmlmin({collapseWhitespace: true}))
//     .pipe(gulp.dest('dist'))

// });

// gulp.task('miniimg', ['move'], function(){
// 	return gulp.src('dist/assets/*.png')
// 		.pipe(imagemin({
// 			progressive: true,
// 			use: [pngquant()]
// 		}))
// 		.pipe(gulp.dest('dist/assets/'));
// });

gulp.task('build', ['move', 'minicss', 'minijs', 'jshint', ]);

gulp.task('default', function(){
  gulp.src('blogJekyll/_site/**/*.*')
    .pipe(refresh());
});



gulp.task('refresh', function(){
  refresh.listen();
  gulp.watch('blogJekyll/_site/**/*.*', function(){
  	gulp.src('blogJekyll/_site/**/*.*')
    .pipe(refresh());
  });
});
