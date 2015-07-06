/* 
* @Author: ocean
* @Date:   2015-07-06 16:11:13
* @Last Modified by:   ocean
* @Last Modified time: 2015-07-06 16:12:19
*/

'use strict';

var ua = window.navigator.userAgent.toLowerCase();

var oTools = {
    // 版本检测
	isAndroid: /android/i.test(ua),
	isIOS: /iphone|ipad|ipod/i.test(ua),
	isWechat: /MicroMessenger/i.test(ua),
    // 检测是否支持 touch 事件
    clickEvent: "ontouchstart" in document.documentElement ? "touchstart" : "click",
}

//html5 动画
window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function(callback) {
            return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
        };
})();