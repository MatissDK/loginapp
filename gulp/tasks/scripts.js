const gulp = require('gulp');
const webpack = require('webpack');

gulp.task('scripts', function (callback) {
    webpack(require('../../webpack.config.js'),function () {
        console.log('webpack is done');
        // if(error){
        //     console.log(toString(error));
        // }
        // console.log('TEST');
        // console.log(toString(stats));
        callback();
    });
});