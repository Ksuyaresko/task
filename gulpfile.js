'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    imagemin = require('gulp-imagemin'),
    mainBowerFiles = require('gulp-main-bower-files'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    gulpFilter = require('gulp-filter'),
    browserSync = require('browser-sync').create(),
    twig = require('gulp-twig'),
    sourcemaps = require('gulp-sourcemaps');


//CSS
gulp.task('sass', function(){
  gulp.src('frontend/style/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/style/'))
});

//JS
gulp.task('js', function () {
    gulp.src('frontend/js/*.js')
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/js'))
});

//images
gulp.task('image', () =>
    gulp.src('frontend/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/images'))
);

//fonts
gulp.task('font', function() {
    gulp.src('frontend/font/**')
    .pipe(gulp.dest('public/font/'))
});

//video
gulp.task('video', function() {
    gulp.src('frontend/video/**')
    .pipe(gulp.dest('public/video/'))
});

//bower
gulp.task('main-bower-files', function() {
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles('**/*.js'))
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/libs'));
});

//twig
gulp.task('compile', function () {
    return gulp.src('view/index.twig')
        .pipe(twig({
            data: {
                title: 'Gulp and Twig',
                benefits: [
                    'Fast',
                    'Flexible',
                    'Secure'
                ]
            }
        }))
        .pipe(gulp.dest('public/'));
});

gulp.task('serve', function() {
    browserSync.init({
        server: "public"
    });    
    gulp.watch("./public/*.html").on('change', browserSync.reload);
    gulp.watch("./public/**/.css").on('change', browserSync.reload);
});

//WATCH
gulp.task('watch', function() {
    gulp.watch('frontend/style/**/*.scss', ['sass']);
    gulp.watch('view/*.twig', ['compile']);
    gulp.watch('frontend/js/*.js', ['js']);
});

gulp.task('default', ['sass', 'image', 'compile', 'main-bower-files', 'js', 'font', 'video', 'serve', 'watch']);