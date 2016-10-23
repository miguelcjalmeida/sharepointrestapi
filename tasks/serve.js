var gulp = require('gulp');
var bsync = require('browser-sync').create();


gulp.task('serve', () => {
    bsync.init({
        server : {
            baseDir : './samples'
        }
    })
})

