/* 
* @Author: ocean
* @Date:   2015-07-09 15:08:54
* @Last Modified by:   ocean
* @Last Modified time: 2015-07-10 18:35:08
*/

'use strict';

// 全局滚动
var wrapScroll;

function wraploaded () {
	wrapScroll = new IScroll('#wrapper', {
		probeType: 3,
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true,
		bounce: false
	});
}

document.addEventListener('touchmove', function (e){e.preventDefault()}, false);

// 弹层滚动
$(function(){
	wraploaded();

	var toprule = {
			scrollbars: true,
			hideScrollbar: false,
			mouseWheel: true,
			interactiveScrollbars: true,
			shrinkScrollbars: 'scale',
			// fadeScrollbars: true,
			bounce: false
	}

	var ajaxPage = {
			probeType: 2,
			scrollbars: true,
			mouseWheel: true,  
			fadeScrollbars: true,
			bounce:true,
			interactiveScrollbars:true,
			shrinkScrollbars:'scale',
			click: true ,
			keyBindings:true,
			momentum:true
	}

	// 上拉加载
	// var pullDownEl, 
	// 	pullDownL;  
   	var pullUpEl, 
		pullUpL;  
	var Downcount = 0 ,
		Upcount = 0;  
		var loadingStep = 0;//加载状态0默认，1显示加载状态，2执行加载数据，只有当为0时才能再次加载，这是防止过快拉动刷新  

	function pullUpAction(myScroll) {//上拉事件
		setTimeout(function() {
		    var el, li, i;
		    el = $('#add');
		    for (i = 0; i < 3; i++) {
		        li = $("<li></li>");
		        Upcount++;
		        li.text('new Add ' + Upcount + " ！");
		        el.append(li);
		    }
		    pullUpEl.removeClass('loading');
		    pullUpL.html('上拉显示更多...');
		    pullUpEl['class'] = pullUpEl.attr('class');
		    pullUpEl.attr('class','').hide();
		    myScroll.refresh();
		    loadingStep = 0;
		}, 1000);
	}

	$('#rule-btn').on('tap', function(){dialogFn('rulebox', toprule)});
	$('#how-btn').on('tap', function(){dialogFn('howbox', toprule)});

	$('#ranking').on('tap', function(){dialogFn('rankingbox', ajaxPage, true)});

	function dialogFn(name, obj, ajaxFn) {
		var html = $('.'+ name +'').html(),
			path = 'images/close.png';

		Dialog({
			'id': name,
			'type': 'popup',
			'lock':true,
			'width':'80%',
			'height': '80%',
			'closeImg': path,
			'animation':'animated bounceIn',
			'onReady': function(){
				var myScroll;

				(function(){
					pullUpEl = $('#pullUp');  
			        pullUpL = pullUpEl.find('.pullUpLabel');  
			        pullUpEl['class'] = pullUpEl.attr('class');  
			        pullUpEl.attr('class','').hide();  
					
					myScroll = new IScroll('#'+ name +'', obj);
				})();

				if(ajaxFn){
			        //滚动时
			        myScroll.on('scroll', function(){
			            if(loadingStep == 0 && !pullUpEl.attr('class').match('flip|loading')){
				            if (this.y < (this.maxScrollY - 5)) {
				                //上拉刷新效果
				                pullUpEl.attr('class',pullUpEl['class'])
				                pullUpEl.show();
				                myScroll.refresh();
				                pullUpEl.addClass('flip');
				                pullUpL.html('准备刷新...');
				                loadingStep = 1;
				            }
			            }
			        });
			        //滚动完毕  
			        myScroll.on('scrollEnd',function(){
			            if(loadingStep == 1){
				            if (pullUpEl.attr('class').match('flip|loading')) {
				                    pullUpEl.removeClass('flip').addClass('loading');
				                pullUpL.html('Loading...');
				                loadingStep = 2;
				                    pullUpAction(myScroll);
				            }
			            }
			        }); 
				}
			}
		});
	}

	$('#beginbtn').on('tap', function(){
		location.href = $(this).attr('data-href');
	})
});

$(function(){

	var demo = new CountUp("scoreNum", 0, 660, 0, 2);
	demo.start();
})