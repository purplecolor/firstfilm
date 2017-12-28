$(function(){
	$(".btn").click(function(){
		$.ajax({
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			type:"get",
			dataType:"json",
	
			data:{
				status:"register",
				userID:$("#user").val(),
				password:$("#psw").val()
			},
			success:function(data){
				console.log(data);
				
					if(data==0){
						$("#user").css({"background":"red"});
						console.log(5)
					}
					if(data==1){
						location.href="denglu.html";
						console.log(9)
					}

			}
		});
console.log(9)
	})








//
//	$.getJSON("http://datainfo.duapp.com/shopdata/userinfo.php",{status:$("#user").val(),userID:$("#user").val(),password:$("#psw").val()},function(data){
//		
//			$(".btn").click(function(){
//				console.log(0);
////				if(data==0){
////					$("#user").css({"background":"red"});
////					console.log(5)
////				}
////				if(data==1){
////					location.href="homepage.html";
////				}
//			})
//
//	})
	
	
	
})
