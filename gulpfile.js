var gulp = require('gulp'),
    clean = require('gulp-clean'),
    imagemin = require('gulp-imagemin'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin'),
    autoPrefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify-es').default;

gulp.task('producao', ['copia-arquivos'], function(){
  gulp.start('otimiza-imagens');
});
gulp.task('copia-arquivos',['limpa-producao'], function(){
  return gulp.src([
    'dev/**/*',
    '!dev/manual_digital/',
    '!dev/manual_digital/*',
    '!dev/media/',
    '!dev/media/*',
  ])
  .pipe(gulp.dest('dist/'))
});
gulp.task('copia-odts', function(){
  return gulp.src([
    'dev/manual_digital/**/*'
  ])
  .pipe(gulp.dest('dist/manual_digital/'))
});
gulp.task('copia-videos',['copia-odts'], function(){
  return gulp.src([
    'dev/media/**/*'
  ])
  .pipe(gulp.dest('dist/media/'))
});
gulp.task('limpa-producao',function(){
  return gulp.src('dist')
      .pipe(clean());
});
gulp.task('otimiza-imagens', function(){
  gulp.src('dist/assets/img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/assets/img/'));
});

//Após a execução do Babel
gulp.task('usemin', function(){
  gulp.src('dist/**/*.html')
    .pipe(usemin({
      js: [uglify()],
      css: [autoPrefixer(),cssmin()]
    }))
    .pipe(gulp.dest('dist'));
  gulp.start('remove-arquivos');
});

gulp.task('remove-arquivos',['copia-videos'], function(){
  return gulp.src([
    '!dist/assets/css/blogger-sans.css',
    '!dist/assets/css/indulta-semi-sefif.css',
    '!dist/assets/css/neutra-text-tf-lightalt.css',
    '!dist/assets/css/rubik.css',
    '!dist/assets/css/varela-round.css',
    '!dist/assets/css/media_template.css',
    '!dist/assets/css/platform.css',
    '!dist/assets/js/platform.js',
    '!dist/assets/js/load-subtitles.js',
    '!dist/assets/js/libs/jquery-latest.min.js',
    'dist/assets/css/*.css',
    'dist/assets/js/application.js',
    'dist/assets/js/script.js',
    // 'dist/assets/js/**',
    'dist/*.js',
    '!dist/assets/js/'
  ]).pipe(clean());
});