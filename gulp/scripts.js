
var gulp = require('gulp');
var webpack = require('webpack');


gulp.task('scripts', function(){
  webpack(require('../webpack.config.js'), function(err, stats){
  if(err){
    console.log(err.toString());
  }
    console.log(stats.toString());
  })
});
