var gulp = require('gulp');
var watch = require('gulp-watch');
// var browserSync = require('browser-sync').create();

gulp.task('watch', function () {

    // browserSync.init({
    //     server : {
    //         baseDir: "views"
    //     }
    // });
    //
    // watch('./views/layouts/layouts.handlebars', function () {
    //     browserSync.reload();
    // });
    //
    // // watch('./app/assets/styles/**/*.css', function () {
    // //     gulp.start('cssInject');
    // // });
    //
    // watch('./app/assets/scripts/**/*.js', function () {
    //     gulp.start('scriptsRefresh');
    // });

    watch('./public/js/**/*.js', function () {
        gulp.start('scripts');
    });

});

// gulp.task('cssInject',['styles'], function () {
//     return gulp.src('./app/temp/styles/styles.css')
//         .pipe(browserSync.stream());
// });
//
// gulp.task('scriptsRefresh',['scripts'], function () {
//     browserSync.reload();
// })