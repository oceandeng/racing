/* 
* @Author: ocean
* @Date:   2015-07-06 16:09:56
* @Last Modified by:   ocean
* @Last Modified time: 2015-07-06 16:29:17
*/

'use strict';

var screenW,
    screenH;

$(function(){

  screenW = $("#score").width();
  (function(){
      var step = 2,
          end = 192;

      var canvas = document.querySelector("#prizebar");
      var ctx = canvas.getContext("2d");

      var w = screenW,
          h = 100;

      var one = 1,
          ten = 50,
          sixty = 120,
          hundred = 190,
          thousand = screenW - 40;

      var mark = new Image();

      canvas.width = w;
      canvas.height = h;

      mark.src = "images/mark.png";

      function reset(){
        ctx.fillStyle = "#fff";
        ctx.fillRect(0,0,w,h);
        ctx.fillStyle = "#999";
        ctx.fillRect(0, 60, w, 15);
      }

      function Progressbar(){
        this.widths = 0;

        this.draw = function(){
          ctx.fillStyle = "#009dd9";
          ctx.fillRect(0, 60, this.widths, 15);
          // 绘制mark
          ctx.drawImage(mark, this.widths - 5, 36, 10, 20);
          // 绘制刻度
          ctx.fillStyle = "#666"
          ctx.fillRect(10, 52, 1, 8);
          ctx.fillRect(ten, 52, 1, 8);
          ctx.fillRect(sixty, 52, 1, 8);
          ctx.fillRect(hundred, 52, 1, 8);
          ctx.fillRect(thousand, 52, 1, 8);
          // 绘制文字
          ctx.font = "10px Microsoft YaHei";
          ctx.fillStyle = "#666";
          // ctx.textBaseline="middle";
          ctx.fillText('1元', one, 90);
          ctx.fillText('10元', ten - 15, 90);
          ctx.fillText('60元', sixty - 15, 90);
          ctx.fillText('100元', hundred - 15, 90);
          ctx.fillText('1000元', thousand - 15, 90);
        }
      }

      var bar = new Progressbar();

      function draw(){
        bar.widths += step;
        if (bar.widths < end) {
            reset();
            bar.draw();
        }
      }

      function animloop(){
            draw();
            requestAnimationFrame(animloop);
      }

      animloop();
    })()

});