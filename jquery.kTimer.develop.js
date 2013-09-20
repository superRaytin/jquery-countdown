/*
 * =========== 【倒计时】插件可设置参数及默认值 ===========
 * format : 'hh : mm : ss', // 时间显示格式，支持HTML标签
 * endTime : '2012/12/31 23:59:59', // 结束时间
 * fromNowOn : 0, // 从当前时间起之后的时间段，单位分钟
 * callback: function(){} // 回调
 * ====================================
 * 插件版本：V 1.1
 * @作者:柳裟
 * QQ:1599538531
 * 2012-06-13
 * ====================================
 * 2013-05-06 倒计时增加可设置往后时间段
 * 2013-05-06 增加时间结束时回调
 * 2013-05-06 时间格式hh小时可不选
*/
;(function($){
	var kTimerFormat = function(time, format){
		var o = {
			"M+" : time.getMonth() + 1, //month
			"d+" : time.getDate(),    //day
			"h+" : time.getHours(),   //hour
			"m+" : time.getMinutes(), //minute
			"s+" : time.getSeconds(), //second
			"q+" : Math.floor((time.getMonth() + 3) / 3), //quarter
			"S" : time.getMilliseconds() //millisecond
		};

		if(/(y+)/.test(format)){
			format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
		};

		for(var k in o){
			if(new RegExp("(" + k + ")").test(format))
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		};
		return format;
	};
	
	$.fn.kTimer = function(option){
		var obj = $(this);
		if( !obj.length ){ return obj };

		// 默认参数
		var defaults = {
			format : 'hh : mm : ss', // 时间显示格式
			endTime : '2012/12/31 23:59:59', // 结束时间
			fromNowOn : 0, // 从当前时间起之后的时间段，单位分钟
			callback: function(){} // 回调
		};
		var opt = $.extend({},defaults,option),
				matdd = /(dd){1}/,
				mathh = /(hh){1}/,
				matmm = /(mm){1}/,
				matss = /(ss){1}/,
				mat = /[^d]*(?:dd)*[^h]*(?:hh)*[^m]*(?:mm)+[^s]*(?:ss)+/;

		// 格式不对返回
		if( !mat.test(opt.format) ){ return };

		var timer = 0; // 计时器
		
		if(opt.fromNowOn && opt.fromNowOn !== 0){
			var now = new Date();
			var endTime = kTimerFormat(new Date(), 'yyyy/MM/dd hh:mm:ss');
			opt.endTime = endTime.replace(/:([^:]+):/, function(str, a){
				return ':'+(parseInt(a.length == 2 && a.charAt(0) == '0' ? a.charAt(1) : a) + opt.fromNowOn)+':';
			});
		}

		// 写入剩余时间
		var writeTime = function(){
			var time = calculation( new Date(),opt.endTime );

			if(!time){
				opt.callback();
				clearInterval(timer);
				return;
			}

			var theMat = opt.format.replace(matdd,time.d).replace(mathh,time.h).replace(matmm,time.m).replace(matss,time.s);
			obj.html( theMat );
		};
		timer = setInterval( writeTime,1000 );

		// 计算剩余时间
		function calculation( start,end ){
			var theTime = Date.parse(end) - Date.parse(start);
			return theTime >= 0 ? {
				d : Math.floor( theTime / (1000 * 60 * 60 * 24) ),
				h : Math.floor( theTime / (1000 * 60 * 60) % 24 ),
				m : Math.floor( theTime / (1000 * 60) % 60 ),
				s : Math.floor( theTime / 1000 % 60 )
			} : false;
		};
	};
})(jQuery);