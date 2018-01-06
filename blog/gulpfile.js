var gulp = require('gulp');
var exec = require('child_process').exec;
var shell = require('gulp-shell');
var runSequence = require('run-sequence');//将任务同步化

// 使用node的子进程进行启动
// gulp.task('api', function() {
//   exec("node ./api/bin/www", function(err) {
//     if (err) {
//       console.log(err)
//     }else{
//       console.log("ok")
//     }
//   });
  
  
// });
// gulp.task('back', function() {
//   exec("webpack-dev-server --open --inline --progress --config ./blog_back/build/webpack.dev.conf.js", function(err,data) {
//     console.log(data)
//   // exec("cd", function(err) {
//     if (err) {
//       console.log(err)
//     }else{
//       console.log("ok")
//     }
//   });
// });

// 使用gulp-shell进行操作
gulp.task('_api', shell.task(['node bin/www'],{cwd:process.cwd()+"/api"}));

gulp.task('_back', shell.task(["webpack-dev-server --open --inline --progress --config build/webpack.dev.conf.js"],{cwd:process.cwd()+"/blog_back"}));

gulp.task('_front', shell.task(["webpack-dev-server --open --inline --progress --config build/webpack.dev.conf.js"],{cwd:process.cwd()+"/blog_front"}));

gulp.task('front',['_api','_front'],function() {
  
 });

gulp.task('default',['_api','_back',"_front"],function() {
 
});