const { src, dest, watch, task } = require('gulp')


//build directory

var buildDirecotry = [
  'src/index.html',
  'src/css/**/*.*',
  'src/img/**/*.*',
  'src/js/**/*.*',
  'src/fonts/**/*.*'
];


task('buildsite', function () {
  return src(buildDirecotry, { base: './src' })
    .pipe(dest('dist'));
});

 



 
exports.buildsite = task('buildsite');