import gulp from 'gulp';
import babel from 'gulp-babel';
import mergeStream from 'merge-stream';

gulp.task('build', () => {
  return mergeStream(
      gulp.src('src/**/*.js').pipe(babel()),
      gulp.src(['package.json', 'LICENSE', 'README.md'])
    ).pipe(gulp.dest('dist'));
});