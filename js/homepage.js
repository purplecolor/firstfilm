$(function(){
	
	
	$(".dl").click(function(){
		location.href="denglu.html";
	});
	$(".ze").click(function(){
		location.href="zhuce.html";
	});
//头部搜索框
		var osousuo=$(".sousuo");
		var asousuo=$("#sousuo");
		var oul=$("#sousuo-lie");
		osousuo.focus(function(){
			console.log("aaa");
			var oscript=document.createElement("script");
			oscript.src="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+osousuo.value+"&cb=aaa";
			document.body.appendChild(oscript);
			console.log(oscript);
			document.body.removeChild(oscript);
			console.log(oul);
			function aaa(data){
				data=data.s;
				var str="";
				for(var i=0;i<data.length;i++){
					str+="<li>"+data[i]+"</li>";
				}
				oul.innerHTML = str;
			}
		})
		
//导航一级目录
//<div><img class="nav-img"><p class="nav-p">生鲜食品、冷藏冷冻</p></div>
	$.ajax({
		type:"get",
		url:"nav-right.json",
		async:true,
		success:function(data){
			for(var i=0;i<data.length;i++){
				$("#nav-right").append("<div class='navright-yiji'><p class='nav-p'><img class='nav-img' src='"+data[i].img+"'><a href='liebiao.html'>"+data[i].word+"</a></p></div>");
			}
		}
	});
//导航二级
	$.ajax({
		type:"get",
		url:"new_file.json",
		async:true,
		success:function(data){
			$("#nav-right div").append("<div class='nav-erji'></div>");
			$odiv=$("#nav-right .navright-yiji .nav-erji");
			for(var i=0;i<data["data"].length;i++){
				if(data["data"][i].length>0){
					for(var j=0;j<data["data"][i].length;j++){
						$odiv.append("<ul class='erji-title'>"+data.data[i][j].showName+"</ul>");
						if(data["data"][i][j].child.length>0){
							for(var k=0;k<data["data"][i][j]["child"].length;k++){
								$("#nav-right div ul").append("<li class='erji-name'><a href='liebiao.html'>"+data.data[i][j].child[k].showName+"</a></li>");
							}
						}
					}
				}
			}
		}
	});
//轮播
	$.ajax({
		type:"get",
		url:"lunbo.json",
		async:true,
		success:function(data){
			for(var i=0;i<data.length;i++){			

				$("#lunbo-photo").append("<li><a href='http://sale.feiniu.com/activity-239158074995555.html?tp=www.0.1004.4.1514016143720o3p6'><img src="+data[i].img+ "></a></li>");
				$("#nav .nav").append("<li></li>");
			}
			var list=$("#lunbo-photo li"); 
			
		var banner=$("#banner-wrap");
		var navli=$("#nav li");
		var onav=$("#nav");
		var arr=["#f09f2c","#ff8901","#ffc0db","#01ae52","#fdced8","#be2597","#0ebd9e","#ee9e2d"];
		var index=0
		list.eq(0).fadeIn().siblings().fadeOut();
		navli.eq(index).css({"background":"white"}).siblings().css({"background":"none"});
		clearInterval(timer);
		var timer=setInterval(function(){
			index++;
			if(index==list.length){
				index=0;
			}
			
			list.eq(index).fadeIn(function(){
				banner.css({"background":arr[index]});
			}).siblings().fadeOut();
			navli.eq(index).css({"background":"white"}).siblings().css({"background":"none"});
		},2000);
		for(let i=0;i<navli.length;i++){
			navli.eq(i).mouseover(function(){
				clearInterval(timer);
				list.eq(i).fadeIn(function(){
					banner.css({"background":arr[i]});
				}).siblings().fadeOut();
					

					navli.eq(i).css({"background":"white"}).siblings().css({"background":"none"});
			})
			navli.eq(i).mouseleave(function(){
				clearInterval(timer);
				timer=null;
				index=i;
				var timer=setInterval(function(){
					index++;
					if(index==list.length){
						index=0;
					}
					list.eq(index).fadeIn(function(){
						banner.css({"background":arr[index]});
					}).siblings().fadeOut();
					navli.eq(index).css({"background":"white"}).siblings().css({"background":"none"});
				},2000);
			})
				
		}
		}
	});

//头图.....
	$.ajax({
		type:"get",
		url:"bianjiao.json",
		async:true,
		success:function(data){
//头图
//			console.log(data[0].titleimage[0].img);
			for(var i=0;i<3;i++){
				$("#titleimage").append("<a href='liebiao.html'><img src="+data[0].titleimage[i].img+"/></a>");
			};
//夹缝图
//console.log(data[1].jiatubig)
			$("#aritcle-image1").append("<a href='liebiao.html'><img src="+data[1].jiatubig+"/></a>");
//楼梯间
//一楼
//console.log(data[2].loutijian[0].yilou[0].floornav.length);
			$("#one-floor .biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].biaoming+"</span>");
			for(var i=0;i<data[2].loutijian[0].yilou[0].floornav.length;i++){
				$("#one-floor .floor-nav").append("<li><a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].floornav[i].one+"</a><span></span></li>");
			};
			for(var i=0;i<data[2].loutijian[0].yilou[0].nav1.length;i++){
				$(".nav-1").append("<p><a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].nav1[i].one+">></a></p>")
			};
			for(var i=0;i<data[2].loutijian[0].yilou[0].nav2.length;i++){
				$(".nav-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].nav2[i].o+"</a>")
			};
			
//nav1 与nav2 写反了
			for(var i=0;i<data[2].loutijian[0].yilou[0].louceng[0].navone.length;i++){
				$(".f2-nav-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[1].navone[i].one+"</a>");
				$(".f3-nav-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[2].navone[i].one+"</a>");
				$(".f4-nav-2-1-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[3].navone[i].one+"</a>");
				$(".f4-nav-2-2-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[3].navone[i].one+"</a>");
				$(".f5-nav-2-1-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[4].navone[i].one+"</a>");
				$(".f5-nav-2-2-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[4].navone[i].one+"</a>");
				$(".f6-nav-2-1-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[5].navone[i].one+"</a>");
				$(".f6-nav-2-2-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[5].navone[i].one+"</a>");
				$(".f7-nav-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[6].navone[i].one+"</a>");
				$(".f8-nav-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[7].navone[i].one+"</a>");
				$(".f9-nav-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[8].navone[i].one+"</a>");
				$(".f10-nav-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[9].navone[i].one+"</a>");
				$(".f11-nav-2").append("<a href='liebiao.html'>"+data[2].loutijian[0].yilou[0].louceng[10].navone[i].one+"</a>");
				
			}
			
//货物类
			for(var i=0;i<data[2].loutijian[0].yilou[0].huowuone.length;i++){
				if(data[2].loutijian[0].yilou[0].huowuone[i].f1){
					$(".huowu-lei").append("<a href='liebiao.html'><img class='kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f1+"'></a>");
				}
				if(data[2].loutijian[0].yilou[0].huowuone[i].f3){
					$(".f3-huowu-lei").append("<a href='liebiao.html'><img class='f3-kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f3+"'></a>");
				}
			}
			
			for(var i=0;i<data[2].loutijian[0].yilou[0].huowulei.length;i++){
				
				if(data[2].loutijian[0].yilou[0].huowulei[i].f1){
					$(".huowu-lei").append("<a href='liebiao.html'><img class='kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[i].f1+"'></a>");
				}
				
			};
			for(var i=0;i<data[2].loutijian[0].yilou[0].huowulei.length;i++){
				
				if(data[2].loutijian[0].yilou[0].huowulei[i].f3){
					$(".f3-huowu-lei").append("<a href='liebiao.html'><img class='f3-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[i].f3+"'></a>");
				}
				
			};
			for(var i=0;i<data[2].loutijian[0].yilou[0].kuangthree.length;i++){
				
				if(data[2].loutijian[0].yilou[0].kuangthree[i].f1){
					$(".huowu-lei").append("<a href='liebiao.html'><img class='kuangthree' src='"+data[2].loutijian[0].yilou[0].kuangthree[i].f1+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].kuangthree[i].f3){
					$(".f3-huowu-lei").append("<a href='liebiao.html'><img class='f3-kuangthree' src='"+data[2].loutijian[0].yilou[0].kuangthree[i].f3+"'></a>");
				}
				
			};
			for(var i=0;i<data[2].loutijian[0].yilou[0].kuangfour.length;i++){
				
				if(data[2].loutijian[0].yilou[0].kuangfour[i].f1){
					$(".huowu-lei").append("<a href='liebiao.html'><img class='kuangfour' src='"+data[2].loutijian[0].yilou[0].kuangfour[i].f1+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].kuangfour[i].f3){
					$(".f3-huowu-lei").append("<a href='liebiao.html'><img class='f3-kuangfour' src='"+data[2].loutijian[0].yilou[0].kuangfour[i].f3+"'></a>");
				}
			};
//货物类2、8、9、10、11
			for(var i=0;i<1;i++){
				

				$(".f2-huowu-lei").append("<a href='liebiao.html'><img class='f2-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[0].f2+"'></a>");
				$(".f8-huowu-lei").append("<a href='liebiao.html'><img class='f8-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[0].f8+"'></a>");
				$(".f9-huowu-lei").append("<a href='liebiao.html'><img class='f9-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[0].f9+"'></a>");
				$(".f10-huowu-lei").append("<a href='liebiao.html'><img class='f10-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[0].f10+"'></a>");
				$(".f11-huowu-lei").append("<a href='liebiao.html'><img class='f11-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[0].f11+"'></a>");
				$(".f7-huowu-lei").append("<a href='liebiao.html'><img class='f7-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[0].f7+"'></a>");
				
			};
			

			for(var i=0;i<data[2].loutijian[0].yilou[0].huowuone.length;i++){
				if(data[2].loutijian[0].yilou[0].huowuone[i].f2){
					$(".f2-huowu-lei").append("<a href='liebiao.html'><img class='f2-kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f2+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].huowuone[i].f8){
					$(".f8-huowu-lei").append("<a href='liebiao.html'><img class='f8-kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f8+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].huowuone[i].f9){
					$(".f9-huowu-lei").append("<a href='liebiao.html'><img class='f9-kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f9+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].huowuone[i].f10){
					$(".f10-huowu-lei").append("<a href='liebiao.html'><img class='f10-kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f10+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].huowuone[i].f11){
					$(".f11-huowu-lei").append("<a href='liebiao.html'><img class='f11-kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f11+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].huowuone[i].f7){
					$(".f7-huowu-lei").append("<a href='liebiao.html'><img class='f7-kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f7+"'></a>");
				}
			};
			for(var i=1;i<data[2].loutijian[0].yilou[0].huowulei.length;i++){
				if(data[2].loutijian[0].yilou[0].huowulei[i].f2){
					$(".f2-huowu-lei").append("<a href='liebiao.html'><img class='f2-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[i].f2+"'></a>")
				};
				if(data[2].loutijian[0].yilou[0].huowulei[i].f8){
					$(".f8-huowu-lei").append("<a href='liebiao.html'><img class='f8-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[i].f8+"'></a>")
				};
				if(data[2].loutijian[0].yilou[0].huowulei[i].f9){
					$(".f9-huowu-lei").append("<a href='liebiao.html'><img class='f9-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[i].f9+"'></a>")
				}
				if(data[2].loutijian[0].yilou[0].huowulei[i].f10){
					$(".f10-huowu-lei").append("<a href='liebiao.html'><img class='f10-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[i].f10+"'></a>")
				}
				if(data[2].loutijian[0].yilou[0].huowulei[i].f11){
					$(".f11-huowu-lei").append("<a href='liebiao.html'><img class='f11-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[i].f11+"'></a>")
				};
				if(data[2].loutijian[0].yilou[0].huowulei[i].f7){
					$(".f7-huowu-lei").append("<a href='liebiao.html'><img class='f7-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[i].f7+"'></a>")
				}
				
			};
			
			
			for(var i=0;i<data[2].loutijian[0].yilou[0].kuangfour.length;i++){
				if(data[2].loutijian[0].yilou[0].kuangfour[i].f2){
					$(".f2-huowu-lei").append("<a href='liebiao.html'><img class='f2-kuangfour' src='"+data[2].loutijian[0].yilou[0].kuangfour[i].f2+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].kuangfour[i].f8){
					$(".f8-huowu-lei").append("<a href='liebiao.html'><img class='f8-kuangfour' src='"+data[2].loutijian[0].yilou[0].kuangfour[i].f8+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].kuangfour[i].f9){
					$(".f9-huowu-lei").append("<a href='liebiao.html'><img class='f9-kuangfour' src='"+data[2].loutijian[0].yilou[0].kuangfour[i].f9+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].kuangfour[i].f10){
					$(".f10-huowu-lei").append("<a href='liebiao.html'><img class='f10-kuangfour' src='"+data[2].loutijian[0].yilou[0].kuangfour[i].f10+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].kuangfour[i].f11){
					$(".f11-huowu-lei").append("<a href='liebiao.html'><img class='f11-kuangfour' src='"+data[2].loutijian[0].yilou[0].kuangfour[i].f11+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].kuangfour[i].f7){
					$(".f7-huowu-lei").append("<a href='liebiao.html'><img class='f7-kuangfour' src='"+data[2].loutijian[0].yilou[0].kuangfour[i].f7+"'></a>");
				};
				
			};
//货物类4，6		
			for(var i=0;i<8;i++){
				$(".f6-huowu-lei").append("<a href='liebiao.html'><img class='f6-kuangtwo'src='"+data[2].loutijian[0].yilou[0].huowulei[0].f6+"'></a>");
				$(".f4-huowu-lei").append("<a href='liebiao.html'><img class='f4-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[0].f4+"'></a>")
			};
			for(var i=0;i<data[2].loutijian[0].yilou[0].huowuone.length;i++){
				if(data[2].loutijian[0].yilou[0].huowuone[i].f6){
					$(".f6-huowu-lei").append("<a href='liebiao.html'><img class='f6-kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f6+"'></a>");
				};
				if(data[2].loutijian[0].yilou[0].huowuone[i].f4){
					$(".f4-huowu-lei").append("<a href='liebiao.html'><img class='f4-kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f4+"'></a>");
				};
			};
			for(var i=8;i<data[2].loutijian[0].yilou[0].huowulei.length;i++){
				$(".f6-huowu-lei").append("<a href='liebiao.html'><img class='f6-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[0].f6+"'></a>");
				
				$(".f4-huowu-lei").append("<a href='liebiao.html'><img class='f4-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[0].f4+"'></a>");
				
			}
			
//货物类5
		for(var i=0;i<data[2].loutijian[0].yilou[0].huowuone.length;i++){
			console.log(2)
			if(data[2].loutijian[0].yilou[0].huowuone[i].f5){
				$(".f5-huowu-lei").append("<a href='liebiao.html'><img class='f5-kuangone' src='"+data[2].loutijian[0].yilou[0].huowuone[i].f5+"'></a>");
			}
		};
		for(var i=0;i<data[2].loutijian[0].yilou[0].huowulei.length;i++){
			console.log(2)
			if(data[2].loutijian[0].yilou[0].huowulei[i].f5){
				$(".f5-huowu-lei").append("<a href='liebiao.html'><img class='f5-kuangtwo' src='"+data[2].loutijian[0].yilou[0].huowulei[i].f5+"'></a>");
			}
		};
		for(var i=0;i<data[2].loutijian[0].yilou[0].kuangthree.length;i++){
			console.log(2)
			if(data[2].loutijian[0].yilou[0].kuangthree[i].f5){
				$(".f5-huowu-lei").append("<a href='liebiao.html'><img class='f5-kuangthree' src='"+data[2].loutijian[0].yilou[0].kuangthree[i].f5+"'></a>");
			}
		}
			
			
			
			
			for(var i=0;i<data[2].loutijian[0].yilou[0].louceng[0].floor.length;i++){
				$(".f2-floor-nav").append("<a href='liebiao.html'><li>"+data[2].loutijian[0].yilou[0].louceng[1].floor[i].one+"</li></a>");
				$(".f3-floor-nav").append("<a href='liebiao.html'><li>"+data[2].loutijian[0].yilou[0].louceng[2].floor[i].one+"</li></a>");
				$(".f4-floor-nav").append("<a href='liebiao.html'><li>"+data[2].loutijian[0].yilou[0].louceng[3].floor[i].one+"</li></a>");
				$(".f5-floor-nav").append("<a href='liebiao.html'><li>"+data[2].loutijian[0].yilou[0].louceng[4].floor[i].one+"</li></a>");
				$(".f6-floor-nav").append("<a href='liebiao.html'><li>"+data[2].loutijian[0].yilou[0].louceng[5].floor[i].one+"</li></a>");
				$(".f7-floor-nav").append("<a href='liebiao.html'><li>"+data[2].loutijian[0].yilou[0].louceng[6].floor[i].one+"</li></a>");
				$(".f8-floor-nav").append("<a href='liebiao.html'><li>"+data[2].loutijian[0].yilou[0].louceng[7].floor[i].one+"</li></a>");
				$(".f9-floor-nav").append("<a href='liebiao.html'><li>"+data[2].loutijian[0].yilou[0].louceng[8].floor[i].one+"</li></a>");
				$(".f10-floor-nav").append("<a href='liebiao.html'><li>"+data[2].loutijian[0].yilou[0].louceng[9].floor[i].one+"</li></a>");
				$(".f11-floor-nav").append("<a href='liebiao.html'><li>"+data[2].loutijian[0].yilou[0].louceng[10].floor[i].one+"</li></a>");
				
			}
//标题与标明
			$(".f2-biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].louceng[1].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].louceng[1].biaoming+"</span>");
			$(".f3-biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].louceng[2].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].louceng[2].biaoming+"</span>");
			$(".f4-biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].louceng[3].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].louceng[3].biaoming+"</span>");
			$(".f5-biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].louceng[4].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].louceng[4].biaoming+"</span>");
			$(".f6-biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].louceng[5].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].louceng[5].biaoming+"</span>");
			$(".f7-biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].louceng[6].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].louceng[6].biaoming+"</span>");
			$(".f8-biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].louceng[7].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].louceng[7].biaoming+"</span>");
			$(".f9-biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].louceng[8].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].louceng[8].biaoming+"</span>");
			$(".f10-biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].louceng[9].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].louceng[9].biaoming+"</span>");
			$(".f11-biaoti").append("<span class='loubiao'>"+data[2].loutijian[0].yilou[0].louceng[10].biaoti+"</span><span class='biaoming'>"+data[2].loutijian[0].yilou[0].louceng[10].biaoming+"</span>");
			
//夹图
	for(var i=0;i<data[3].jiatu.length;i++){
		$(".jiatu-nav").append('<li><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f1+'"></a><span class="jiatu-xian"></span></li>');
		$(".f2-jiatu-nav").append('<li><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f2+'"></a><span class="jiatu-xian"></span></li>');
		$(".f3-jiatu-nav").append('<li><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f3+'"></a><span class="jiatu-xian"></span></li>');
		$(".f4-jiatu-nav").append('<li><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f4+'"></a><span class="jiatu-xian"></span></li>');
		$(".f5-jiatu-nav").append('<li><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f5+'"></a><span class="jiatu-xian"></span></li>');
		$(".f6-jiatu-nav").append('<li><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f6+'"></a><span class="jiatu-xian"></span></li>');
		$(".f7-jiatu-nav").append('<li><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f7+'"></a><span class="jiatu-xian"></span></li>');
		$(".f8-jiatu-nav").append('<li><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f8+'"></a><span class="jiatu-xian"></span></li>');
		$(".f9-jiatu-nav").append('<li><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f9+'"></a><span class="jiatu-xian"></span></li>');
		$(".f10-jiatu-nav").append('<li><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f10+'"></a><span class="jiatu-xian"></span></li>');
		$("#f11-jiatu-nav").append('<li class="f11li"><a href="liebiao.html" ><img src="'+data[3].jiatu[i].f11+'"></a><span class="jiatu-xian"></span></li>');

	}
//配送售后	
	for(var i=0;i<data[4].fuwu.length;i++){
		if(data[4].fuwu[i].one){
			$(".one").append("<li><a href='liebiao.html'>"+data[4].fuwu[i].one+"</a></li>");
		};
		if(data[4].fuwu[i].two){
			$(".two").append("<li><a href='liebiao.html'>"+data[4].fuwu[i].two+"</a></li>");
		};
		if(data[4].fuwu[i].three){
			$(".three").append("<li><a href='liebiao.html'>"+data[4].fuwu[i].three+"</a></li>");
		};
		if(data[4].fuwu[i].four){
			$(".four").append("<li><a href='liebiao.html'>"+data[4].fuwu[i].four+"</a></li>");
		};
		if(data[4].fuwu[i].five){
			$(".five").append("<li><a href='liebiao.html'>"+data[4].fuwu[i].five+"</a></li>");
		}
		
	}
//底部信息

	
	
	
	
	
			
		}
	})


	
	
	
	
	
	
	
	


			
})




