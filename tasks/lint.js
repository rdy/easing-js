import gulp from 'gulp';
import eslint from 'gulp-eslint';

gulp.task('lint', () => {
  return gulp.src(['gulpfile.babel.js', 'src/**/*.js'], {base: '.'})
    .pipe(eslint())
    .pipe(eslint.format('stylish'))
    .pipe(eslint.failOnError())
});