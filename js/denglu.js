$(function(){
	$(".jiaotu1").click(function(){
		$(".denglu").css({"display":"none"});
		$("#saoma").css({"display":"block"})
	});
	$(".jiaotu").click(function(){
		$(".denglu").css({"display":"block"});
		$("#saoma").css({"display":"none"})
	});
	$(".btn").click(function(){
		console.log(1);
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			type:"get",		
			async:true,
			dataType:"json",
			data:{
				status:"login",
				userID:$(".txt").val(),
				password:$(".psw").val()
			},
			success:function(data){
				console.log(data);
				if(data==0){
					$(".txt").css({"background":"red"});
				}else if(data==2){
					$(".psw").css({"background":"red"});
				}else{
					location.href="homepage.html";
				}
			}
		})
	})
	
	
	
	
	
	
})
