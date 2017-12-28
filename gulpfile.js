var gulp=require("gulp");
var sass=require("gulp-sass");
gulp.task("hello",function(){
	console.log("hello world");
});
gulp.task("copy-homepage",function(){
	gulp.src("homepage.html").pipe(gulp.dest("dist"));
	gulp.src("denglu.html").pipe(gulp.dest("dist"));
	gulp.src("zhuce.html").pipe(gulp.dest("dist"));
	
});
gulp.task("copy-denglu",function(){
	gulp.src("denglu.html").pipe(gulp.dest("dist"));
	gulp.src("zhuce.html").pipe(gulp.dest("dist"));
	gulp.src("xiangqing.html").pipe(gulp.dest("dist"));
	gulp.src("liebiao.html").pipe(gulp.dest("dist"));
});
gulp.task('img',function(){
 	return gulp.src('img/**/*').pipe(gulp.dest('dist/img')) 
});
gulp.task("sass",function(){
	gulp.src("scss/homepage.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
	gulp.src("scss/homepage.scss").pipe(sass()).pipe(gulp.dest("css"));
	gulp.src("scss/denglu.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
	gulp.src("scss/denglu.scss").pipe(sass()).pipe(gulp.dest("css"));
	gulp.src("scss/zhuce.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
	gulp.src("scss/zhuce.scss").pipe(sass()).pipe(gulp.dest("css"));
	gulp.src("scss/xiangqing.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
	gulp.src("scss/xiangqing.scss").pipe(sass()).pipe(gulp.dest("css"));
	gulp.src("scss/liebiao.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
	gulp.src("scss/liebiao.scss").pipe(sass()).pipe(gulp.dest("css"));
	
});
gulp.task("watch",function(){
	gulp.watch("scss/homepage.scss",["sass"]);
	gulp.watch("scss/denglu.scss",["sass"]);
	gulp.watch("scss/zhuce.scss",["sass"]);
	gulp.watch("scss/xiangqing.scss",["sass"]);
	gulp.watch("scss/liebiao.scss",["sass"]);
	gulp.watch("homepage.html",["copy-homepage"]);
	gulp.watch("img/**/*",["img"]);
	gulp.watch("denglu.html",["copy-denglu"]);
	gulp.watch("xiangqing.html",["copy-denglu"])
	gulp.watch("liebiao.html",["copy-denglu"])
})

