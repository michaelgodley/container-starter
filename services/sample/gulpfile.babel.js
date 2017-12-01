import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import eslint from 'gulp-eslint';
import nodemon from 'gulp-nodemon';

const paths = {
  srcDir: './src',
  allSrcJs: './src/**/*.js',
  gulpFile: './gulpfile.babel.js',
  libDir: './lib',
};

gulp.task('nodemon', ['build'], () => {
  nodemon({
    script: './lib',
    ext: 'js',
    watch: paths.srcDir,
    tasks: ['build'],
  })
    .on('restart', () => {
      console.log('Nodemon restarted!');
    });
});

gulp.task('lint', () =>
  gulp.src([
    paths.allSrcJs,
    paths.gulpFile,
  ])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError())
);

gulp.task('clean', () => del(paths.libDir));

gulp.task('build', ['clean'], () =>
  gulp.src(paths.allSrcJs)
      .pipe(babel())
      .pipe(gulp.dest(paths.libDir))
);

gulp.task('watch', () => {
  // gulp.watch(paths.allSrcJs, ['build']);
  gulp.watch(paths.allSrcJs);
});

gulp.task('default', ['watch', 'nodemon']);
