$(function(){

	var str=location.search;

	var id=str.split("=")[1];

	var img=$(".photo img");

	


	$.ajax({
		type:"get",
		url:"liebiao.json",
		async:true,
		success:function(data){
//			img[0].src=str[id].imgsrc[0];
//			for(var i=0;i<img.length;i++){
//				img[i+1].src=str[id].imgsrc[i];
//			}			
			$(".photo").append('<img src="'+data[id].imgsrc[0]+'" alt="" /><div class="xiaotu"><a href="" class="zuo"></a><img src="'+data[id].imgsrc[0]+'" alt="" /><img src="'+data[id].imgsrc[1]+'" alt="" /><img src="'+data[id].imgsrc[2]+'" alt="" /><img src="'+data[id].imgsrc[3]+'" alt="" /><img src="'+data[id].imgsrc[4]+'" alt="" /><a href="" class="you"></a></div><p><a href="">收藏商品</a></p>')
			$(".yanse").append('<span>颜&nbsp;&nbsp;色</span><a href=""><img src="'+data[id].imgsrc[0]+'" alt="" class="caonima"/></a><a href=""><img src="'+data[id].imgsrc[1]+'" alt="" class="caonima"/></a><a href=""><img src="'+data[id].imgsrc[2]+'" alt="" class="caonima"/></a><a href=""><img src="'+data[id].imgsrc[3]+'" alt="" class="caonima"/></a><a href=""><img src="'+data[id].imgsrc[4]+'" alt="" class="caonima"/></a>')
			$(".oul").append('<a href="javascript:;" class="tianjia" data-id="'+data[id].id+'"></a>')
			console.log(data[id].id);
			
			
			
			
			
			
				//存cookie
			function getCookie(name) {
				var str = document.cookie;
				var arr = str.split("; ");
				for(var i = 0; i < arr.length; i++) {
					var arr1 = arr[i].split("=");
					if(arr1[0] == name) {
						return arr1[1];
					}
				}
			}
			function setCookie(name, value, n) {
				var oDate = new Date();
				oDate.setDate(oDate.getDate() + n);
				document.cookie = name + "=" + value + ";expires=" + oDate;
			}
			function removeCookie(name) {
				setCookie(name, 1, -1);
			}
			
			
			
			var obj={};
			if(getCookie("cart")){
				//cookie取值取的是字符串，字符串转对象的方法是JSON.parse()
				var obj = JSON.parse(getCookie("cart"));
			}else{
				var obj = {};
			}

			$(".zero").html(obj[id]);
			
			
			$(".jia").click(function(){
				var val=$(".geshu").val();
				val++;
				$(".geshu").val(val);
				//console.log(val)
			})	
			$(".jian").click(function(){
				var val=$(".geshu").val();
				if(val==0){
					val=0
				}else{
					val--;
					$(".geshu").val(val);
					//console.log(val)
				}
				
			})
//			$(".geshu").val(val);
			$(".tianjia").click(function(){
				console.log($(".geshu").val());
				var val=$(".geshu").val()
				var id=this.getAttribute("data-id");
				if(!obj[id]){
					obj[id]=parseInt(val);
				}else{
					obj[id]+=parseInt(val);
				}
				
				var str=JSON.stringify(obj);
				setCookie("cart",str,7);


				$(".zero").html(obj[id]);
				
			})
		}
	});
	

	
	
	
	


})
