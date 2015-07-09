/* 
* @Author: ocean
* @Date:   2015-07-06 16:09:56
* @Last Modified by:   ocean
* @Last Modified time: 2015-07-08 18:13:08
*/

'use strict';

var screenW,
    screenH;

$(function(){

  screenW = $("#score").width();
  progressbar(122);

});

function progressbar(end){
  var step = 3;
  // end = 122;

  var canvas = document.querySelector("#prizebar");
  var ctx = canvas.getContext("2d");

  var w = screenW*2,
      h = 100*2;

  var one = 1*2,
      ten = 50*2,
      sixty = 120*2,
      hundred = 190*2,
      thousand = screenW*2 - 80;

  var mark = new Image();

  canvas.width = w;
  canvas.height = h;
  canvas.style.width = w/2 + "px";
  canvas.style.height = h/2 +"px";

  mark.src = "images/mark.png";

  function reset(){
    ctx.fillStyle = "#fff";
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = "#999";
    ctx.fillRect(0, 80, w, 30);
  }

  function Progressbar(){
    this.widths = 0;

    this.draw = function(){
      ctx.fillStyle = "#009dd9";
      ctx.fillRect(0, 80, this.widths, 30);
      // 绘制mark
      ctx.drawImage(mark, this.widths - 10, 36, 20, 40);
      // 绘制刻度
      ctx.fillStyle = "#666";
      ctx.fillRect(10, 62, 2, 18);
      ctx.fillRect(ten, 62, 2, 18);
      ctx.fillRect(sixty, 62, 2, 18);
      ctx.fillRect(hundred, 62, 2, 18);
      ctx.fillRect(thousand, 62, 2, 18);
      // 绘制文字
      ctx.font = "24px Microsoft YaHei";
      ctx.fillStyle = "#666";
      // ctx.textBaseline="middle";
      ctx.fillText('1元', one, 140);
      ctx.fillText('10元', ten - 15, 140);
      ctx.fillText('60元', sixty - 15, 140);
      ctx.fillText('100元', hundred - 15, 140);
      ctx.fillText('1000元', thousand - 15, 140);
    }
  }

  var bar = new Progressbar();

  function draw(){
    bar.widths += step;
    if (bar.widths < end*2) {
        reset();
        bar.draw();
    }
  }

  function animloop(){
        draw();
        requestAnimationFrame(animloop);
  }

  animloop();
}