//三个形参：obj：要运动的对象，json：需要变化的属性和变化的终值，fn：链式运动
function startMove(obj, json, fn) {
	//清除当前对象上的定时器，惯用方法，开启一个定时器之前，先清除该对象上之前的定时器
	clearInterval(obj.timer);
	//开启定时器
	obj.timer = setInterval(function() {
		
		var flag = true; //这个变量不是一开始就定义的，为什么定义需要考虑有多个属性值的变化，每一次定时器开启时，假设所有的属性都达到了目标值
		//但是需要验证假设真实性

		for(var attr in json) { //遍历json，改变需要变化的属性的属性值

			if(attr == "opacity") { //透明度的处理和像素的处理不一样，需要区分开
				//Math.round避免出现小数计算误差
				var iCur = Math.round(parseFloat(getStyle(obj, "opacity") * 100));//为了和filter值保持一致，所以乘100
				
			} else {
				var iCur = parseInt(getStyle(obj, attr));//普通的像素取值
			}

			var iTarget = json[attr];//目标值

			var iSpeed = (iTarget - iCur) / 8; //控制运动速度

			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);//正负值的处理情况不一样

			if(attr == "opacity") {
				obj.style.opacity = (iCur + iSpeed) / 100;
				obj.style.filter = "alpha(opacity=" + (iCur + iSpeed) + ")";
			} else {
				obj.style[attr] = iCur + iSpeed + "px";
			}

			if(iCur != iTarget) {
				flag = false; //只要有一个不满足，清除定时器就不执行
			}

		}

		//当json里的所有的属性都达到目标值时，才清除定时器
		if(flag) {
			clearInterval(obj.timer);
			if(fn) { //如果有第三个参数，表示需要链式调用
				fn();
			}
		}

	}, 30);

}

function getStyle(obj, attr) {
	
	if(obj.currentStyle) {
		return obj.currentStyle[attr];
	}
	return getComputedStyle(obj, null)[attr];
}