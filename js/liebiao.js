$(function(){
	
	
	
	console.log(2)
	$.ajax({
		type:"get",
		url:"liebiao.json",
		async:true,
		success:function(data){
			console.log(data[1001]);
			for(var i in data){
				console.log(data[i].id);
				$(".liebiao").append('<li><div class="photo"><a href="xiangqing.html?id='+data[i].id+'"><img src="'+data[i].imgsrc[1]+'"/></a></div><div class="photo2"><a href="javascript:;"><img src="'+data[i].imgsrc[1]+'"/></a></div><div class="jiaqian">￥25</div><div class="jieshao1"><a href="javascript:;" title="'+data[i].imgsrc[1]+'">'+data[i].imgsrc[1]+'</a></div><div class="jieshao2"><a href="javascript:;" title="'+data[i].title+'">'+data[i].title+'</a></div><div class="tianjia"><div class="num"><span>1</span><a href="javascript:;" class="jia"></a><a href="javascript:;" class="jian"></a></div><div class="gouwu"><a href="javascript:;">加入购物车</a></div></div></li>');
				if(data[i].id<1020){
					$("#left").append('<ul><li><div class="tupian"><a href="javascript:;"><img src="'+data[i].imgsrc[1]+'"/></a></div><div class="jieshao"><a href="javascript:;">'+data[i].title+'</a></div><div class="jiage"><span>'+data[i].price+'</span></div><div class="dianjia"><a href="javascript:;">我们是好店啊</a></div></li></ul>');
				}
				
				
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		}
	});
	
})
