window.onload=function(){
	var oul=document.getElementById("lunbo-photo");
	console.log(oul);
	var lunbo=oul.children;
	var i=0;
	setInterval(function(){
		i++;
		if(i==lunbo.length){
			i=1;
			oul.style.left=0;
		}
		startMove(oul,{"left":-800*i});
	},2000)
}


