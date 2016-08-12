// gulpfile.js
var browserSync=require('browser-sync'),gulp=require('gulp');
var reload=browserSync.reload;
gulp.task('default',['server']);
gulp.task('server',function(){
  browserSync({server:{baseDir:'./'}});
  gulp.watch(['*.html','Resources/**/*.css','Resources/**/*.js'],{cwd:'./'},reload);
});
