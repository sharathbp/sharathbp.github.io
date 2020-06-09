const { src, dest, watch, series, parallel } = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')
const reload = browserSync.reload
const autoprefixer = require('gulp-autoprefixer')
var exec = require('child_process').exec

const files = {
  sassPath: './src/scss/**/*',
  jsPath: './src/js/**/*'
}

function sassTask() {
  return src(files.sassPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(dest('./public/css'))
    .pipe(browserSync.stream());
}

function browser() {
  browserSync.init({
    server: './',
    notify: false,
    open: false
  })
}

function webpack(cb){
  exec('webpack', function(err, stdout, sterr){
    console.log(stdout)
    console.log(stderr)
    cb(err)
  });
}

function watchTask() {
  watch(files.sassPath, sassTask)
  watch(files.jsPath, webpack)
  watch(['./public/**/*', './public/*', './!public/js/**/.#*js', './!public/css/.#*css', './*.html'])
    .on('change', reload)
}

exports.default = parallel(watchTask, browser)
