var browserify = require('browserify');
var gulp = require('gulp');
var tsify = require('tsify');
var source = require('vinyl-source-stream');
var rename = require('gulp-rename');
var buffer = require('vinyl-buffer')
var babelify = require('babelify');
var uglify = require('gulp-uglify');

module.exports = gulp.task('build', ['clean'], () => {
    return browserify({
        entries: './src/main.ts',
        standalone: 'SPRepo',
        debug : true,
    })
        .plugin(tsify).transform('babelify', { extensions: ['.ts'] })
        .bundle()
        .pipe(source('sprestrepo.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./samples/js'));
})