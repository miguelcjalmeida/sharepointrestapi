var gulp = require('gulp');
var del = require('del');

gulp.task('clean', () => {
    del(['./dist/*.*', './samples/js/*.*'])
})