var gulp=require("gulp");
var sass=require("gulp-sass");
gulp.task("hello",function(){
	console.log("hello world");
});
gulp.task("copy-homepage",function(){
	return gulp.src("homepage.html").pipe(gulp.dest("dist"));
});
gulp.task("sass",function(){
	gulp.src("scss/homepage.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
	gulp.src("scss/homepage.scss").pipe(sass()).pipe(gulp.dest("css"));
});
gulp.task("watch",function(){
	gulp.watch("scss/homepage.scss",["sass"]);
	gulp.watch("homepage.html",["copy-homepage"]);
})

