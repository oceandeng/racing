(function(e) {
/****************************************************************
// 锁APP屏
*****************************************************************/
    document.addEventListener('touchmove', function (e){e.preventDefault()}, false);

/****************************************************************
// 游戏开始
*****************************************************************/
    function t() {
        function t() {
            var e = R.createImage("images/road.png"),
                t = e.width,
                n = e.height;
            s.drawImage(e, 0, 0, t, n)
        }

        function n() {
            e("#guidePanel").hide(),
            b.init(),
            b.start()
        }

        t(),
        R.loadImage(h.gameImg, function() {
            e("#gamePanel").on("touchstart", function() {
                n(),
                n = function() {}
            })
        })
    }
/****************************************************************
// 舞台全屏渲染 绘制公路和开始页面
*****************************************************************/
    function n() {
        function n() {
            var t = e(window).width(),
                n = e(window).height();

            c = n < 576 ? n : 576,
            l = t < 320 ? t : 320,
            // c = n,
            // l = t,
            e(i).attr({
                height: c,
                width: l
            });
        }
        R.loadImage(h.loadImg, t), 
        n();
        var r = e(i).parent();
        e(window).on("resize", n)
    }
/****************************************************************
// 定义初始变量  及模块功能
*****************************************************************/
    var r = {},
        i = document.getElementById("stage"),
        s = i.getContext("2d"),
        o = document.getElementById("score"),
        u = e(window).width(),
        a = e(window).height(),
        f = "ontouchend" in document,
        roadLevel = 1,
        gameCount = 120,
        l,
        c,
        h = {
            loadImg: ["images/road.png", "images/start.png"],
            gameImg: ["images/car-two.png", "images/car-one.png", "images/gril.png", "images/lady-boy.png", "images/score-bg.png", "images/heart.png"]
        },
/****************************************************************
// 设置 COOKIE -- P
*****************************************************************/
        // p = function() {
        //     function t() {
        //         var t = Math.random(),
        //             n = Math.random(),
        //             r = Math.random(),
        //             i = (new Date).getTime();
        //         return e.md5(i + "" + t * n * r)
        //     }

        //     function n() {
        //         var n;
        //         try {
        //             return n = e.cookie.get(s), n ? (r(n, !1, !0, !0), n) : (n = localStorage.getItem(i), n ? (r(n, !0, !1, !0), n) : (n = sessionStorage.getItem(i), n ? (r(n, !0, !0, !1), n) : (n = t(), r(n, !0, !0, !0), n)))
        //         } catch (o) {
        //             return n = t(), r(n, !0, !0, !0), n
        //         }
        //     }

        //     function r(t, n, r, o) {
        //         n && e.cookie.set(s, t, {
        //             expires: 31536e6
        //         }), r && localStorage.setItem(i, t), o && sessionStorage.setItem(i, t)
        //     }
        //     var i = "carmeizi/user",
        //         s = "carmeizi";
        //     return n()
        // }(),
/****************************************************************
// 绘制汽车模块 -- D
*****************************************************************/
        d = function() {
            function e(e, t) {
                n.lastX = n.x,
                n.lastY = n.y,
                n.x = e - n.width / 2,
                n.y = t - n.height / 2,
                n.x = n.x > l - n.width ? l - n.width : n.x,
                n.x = n.x < 0 ? 0 : n.x,
                n.y = n.y > c - n.height ? c - n.height : n.y,
                n.y = n.y < 0 ? 0 : n.y
            }

            function t(e) {
                if (!n.status) return;
                s.drawImage(b.time % 20 > 15 ? n.model : n.model2, n.x, n.y, n.width, n.height)
            }
            var n = {};
            return n.init = function() {
                n.x,
                n.y,
                n.lastX,
                n.lastY,
                n.status = !0,
                n.model = R.createImage("images/car-two.png"),
                n.model2 = R.createImage("images/car-one.png"),
                n.width = l / 480 * n.model.width,
                n.height = n.width / n.model.width * n.model.height
            },
            n.move = e,
            n.moving = t,
            n
        }(),
/****************************************************************
// 障碍物模块  -- V
*****************************************************************/
        v = function() {
            function e(e) {
                this.type = e,
                this.height = 0,
                this.width = 0,
                this.maxSpeed = 0,
                this.status = !0;
                switch (e) {
                    case 1:
                        this.score = 1,
                        this.maxSpeed = 15;
                        break;
                    case 2:
                        this.score = 0,
                        this.maxSpeed = 25
                }
                var t = ["images/gril.png", "images/lady-boy.png"];
                this.modelImg = t[this.type - 1],
                this.model = R.createImage(this.modelImg),
                this.width = l / 480 * this.model.width,
                this.height = this.width / this.model.width * this.model.height,
                this.x = Math.random() * (l - this.width),
                this.y = -this.height;
                var n = b.time / 800 > 100 ? 100 : b.time / 800;
                this.speed = Math.random() * (n - 1) + 5,
                this.speed = this.speed < .5 ? Math.random() * .5 + .5 : this.speed,
                this.speed = this.speed > this.maxSpeed ? this.maxSpeed : this.speed
            }

            function t(t) {
                return new e(t)
            }
            var n = {},
                r = n.planes = [],
                i = n.planesNum = 0;
            n.planes,
            e.prototype.show = function() {
                s.drawImage(this.model, this.x, this.y, this.width, this.height)
            },
            e.prototype.die = function() {
                var e = this.type;
                b.score += this.score,
                this.status = !1
            };
            var o = n.addSome = function() {
                if (b.time % 30 != 0) return;
                i == 36 && (i = 0),
                i++;
                switch (!0) {
                    case i % Math.floor(Math.random() * 3) == 0:
                        n.planes.push(t(2));
                        break;
                    default:
                        n.planes.push(t(1))
                }
            };
            return n.scrolling = function() {
                function e(e) {
                    var t = [e.x, e.y],
                        n = [e.x + e.width, e.y + e.height],
                        r = [d.x + 16, d.y + 10],
                        i = [d.x + d.width - 16, d.y + d.height - 26],
                        s = [Math.max(t[0], r[0]), Math.max(t[1], r[1])],
                        o = [Math.min(n[0], i[0]), Math.min(n[1], i[1])];
                    return s[0] < o[0] && s[1] < o[1] ? !0 : !1
                }
                o();
                var t = n.planes.length;
                for (var r = t; r--;) {
                    var i = n.planes[r];
                    if (i.y > c || i.status == 0) {
                        n.planes.splice(r, 1);
                        continue
                    }
                    // i = gril 图片
                    i.show(),
                    e(i) && (i.type == "1" ? m.showheart() : b.stop(), i.die()),
                    i.y = i.y + i.speed;
                }
            }, n
        }(),
/****************************************************************
// 倒计时模块 countDown
*****************************************************************/      
        countDown = function(){
            var timer = null;
            var count = {
                start: function(){
                    timer = setInterval(function(){
                        b.gameTime -= 1;
                        if(b.gameTime == 0){
                            b.timeoutFn()
                        }
                    }, 1000);
                },
                doUpdate: function(){
                    e('#time').html(b.gameTime)
                },
                clear: function(){
                    clearInterval(timer);
                }
            }
            return count.init = function(){
                b.gameTime = gameCount;
                this.clear();
            },
            count
        }(),
/****************************************************************
// 得分模块 -- M
*****************************************************************/
        m = function() {
            var t = {};
            return t.format = function(e) {
                return function(t, n) {
                    return n = n || 5,
                           0 >= (n -= t.toString().length) ? t : (e[n] || (e[n] = Array(n + 1).join(0))) + t
                }
            }([]),
            t.showheart = function() {
                e(".heart").removeClass("hearthot").addClass("hearthot"),
                setTimeout(function() {
                    e(".heart").removeClass("hearthot")
                }, 200)
            },
            t.show = function() {
                e(".score-wrap").show()
            },
            t
        }(),
/****************************************************************
// 游戏结束页面模块  -- G
*****************************************************************/
        g = function() {
            var t = e("#resultPanel"),
                n = function() {
                    var n = "click";
                    f && (n = "touchstart"),
                    t.find(".replay").on(n, function() {
                        b.init(),
                        b.start()
                    }),
                    t.find(".share").on(n, function() {
                        t.find(".weixin-share").show().one(n, function() {
                            e(this).hide()
                        }),
                        gConfig.wxData.desc = e(this).data("desc").replace(/\{x\}/ig, b.score) || ""
                    }),
                    t.find(".lottery").on(n, function() {
                        y.open()
                    })
                },
                r = {
                    show: function() {
                        t.show(),
                        r.showScore()
                    },
                    hide: function() {
                        t.hide(),
                        gConfig.wxData.desc = ""
                    },
                    showScore: function() {
                        var e = 1,
                            n = b.score;
                        n === 0 ? e = 1 : n < 10 ? e = 2 : e = 3;
                        var r = t.find("#scoreBoard").show().find(".score-" + e);
                        y.hide(),
                        t.find("#scoreBoard .score-result").hide(),
                        r.show(),
                        e < 3 ? t.find("#scoreBoard .rank").show() : (t.find("#scoreBoard .rank").hide(), y.preLoad()),
                        r.find(".tips span").html(n)
                    },
                    wxHide: function() {
                        t.find(".weixin-share").hide()
                    }
                };
            return n(), r
        }(),
/****************************************************************
// 游戏奖励页面模块 -- Y
*****************************************************************/
        y = function() {
            var t = null,
                n = e("#prize"),
                r, 
                i = {
                    preLoad: function() {
                        e.ajax({
                            type: "GET",
                            url: gConfig.sApi,
                            timeout: 2e4,
                            dataType: "jsonp",
                            jsonp: "jscallback",
                            data: {
                                // mid: p,
                                active: gConfig.activeId
                            },
                            success: function(e) {
                                t = e.data || {}
                            },
                            error: function() {
                                t = {}
                            }
                        })
                    },
                    open: function() {
                        var e = 100,
                            n = setInterval(function() {
                                if (t || !e) {
                                    e--, clearInterval(n);
                                    try {
                                        t.drawtype && t.info1 ? i.showPrize(t.drawtype, t.info1) : i.showDefault(parseInt(Math.random() * 1002, 10) % 2 + 1)
                                    } catch (r) {
                                        i.showDefault(parseInt(Math.random() * 1002, 10) % 2 + 1)
                                    }
                                }
                            }, 10)
                    },
                    hide: function() {
                        n.hide()
                    },
                    // showDefault: function(t) {
                    //     var r = ["images/safety.png", "images/taohua.png"],
                    //         i;
                    //     t %= r.length, e("#prizeResult").hide(), n.show().find(".prize-default").show().find(".random-prize").attr("src", r[t]), i = n.find(".prize-default .share").attr("data-desc").split("|"), n.find(".prize-default .share").data("desc", i[t % i.length])
                    // },
                    // showPrize: function(t, i) {
                    //     var s = ["images/piao.png", "images/qi.png", "images/helmet.png"],
                    //         o = ["\u65b9\u7a0b\u5f0f\u5927\u5956\u8d5b\u95e8\u7968", "\u8d5b\u9053\u72c2\u98d9\u4f53\u9a8c\u7279\u6743","\u8d5b\u8f66\u6fc0\u60c5\u4f53\u9a8c\u8d44\u683c"],
                    //         u;
                    //     t = (3 - t) % s.length, n.show().find(".prize-default").hide(), e("#prizeResult").show().find(".prize-content").find("p span").html(o[t]).end().find("img").attr("src", s[t]).end().find(".yards span").html(i), e("#prizeResult .scroll-rst").removeAttr("style"), r ? r.scrollTo(0, 0) : r = new IScroll("#prizeResult")
                    // }
                };
            return i
        }();
    window.prize = y;
/****************************************************************
// 公路对象 -- B
*****************************************************************/
    var b = new Best.Game({
            FPS: 60,
            score: 0,
            time: 0,
            bgImg: R.createImage("images/road.png"),
            bgScrollTime: 0,
            gameTime : gameCount,
            initGraphicContext: function() {
                this.canvas = document.getElementById("stage"),
                this.context = this.canvas.getContext("2d")
            },
            onInit: function() {
                d.init(),
                countDown.init(),
                countDown.start()
            },
            onStart: function() {
                this.scene = this.getScene(0),
                this.scene.init(this),
                this.scene.enter()
            },
            getScene: function(e) {
                var t = w[e];
                return t
            },
            bgScroll: function() {
                var e = this.bgImg.height,
                    t = this.bgImg.width;
                this.bgScrollTime += 12 + ((this.time + this.time * .9) / 1e3 > roadLevel ? 2 : (this.time + this.time * .9) / 5e3),
                this.bgScrollTime > e && (this.bgScrollTime = 0),
                s.drawImage(this.bgImg, 0, this.bgScrollTime - e, t, e),
                s.drawImage(this.bgImg, 0, this.bgScrollTime, t, e),
                countDown.doUpdate()
            },
            onStop: function() {
                e("#gameoverPanel").show(),
                setTimeout(function() {
                    g.show(),
                    e("#gameoverPanel").hide()
                }, 1e3)
            },
            onTimeout: function() {
                e("#timeoutPanel").show(),
                setTimeout(function(){
                    g.show(),
                    e("#timeoutPanel").hide()
                }, 1e3);
            }
        }),
        w = {};
/****************************************************************
// 游戏控制 -- T
*****************************************************************/
    (function() {
        var t = new Best.Scene({
            id: 0,
            init: function(t) {
                this.game = t,
                e(i).addClass("playing"),
                m.show(),
                this.initEvent()
            },
            initEvent: function() {
                this.clear(),
                d.move(e(i).width() / 2, e(i).height()),
                i = e(i);
                if (f) {
                    var t = function(e) {
                        e.preventDefault();
                        var t = e.targetTouches[0],
                            n = t.pageX - i.offset().left,
                            r = t.pageY - i.offset().top;
                        d.move(n, r)
                    };
                    i.get(0).removeEventListener("touchmove", t),
                    i.get(0).addEventListener("touchmove", t, !1)
                } else i.off("mousemove").on("mousemove", function(e) {
                    var t = e.clientX - i.offset().left,
                        n = e.clientY - i.offset().top;
                    d.move(t, n)
                })
            },
            clear: function() {
                this.game.time = 0,
                this.game.score = 0,
                this.game.bgScrollTime = 0,
                d.status = !0,
                v.planes = [],
                v.planesNum = 0,
                o.innerHTML = m.format(this.game.score),
                g.hide()
            },
            enter: function() {},
            update: function() {
                this.game.time++,
                this.game.bgScroll(),
                v.scrolling(),
                d.moving(this.game.time),
                o.innerHTML = m.format(this.game.score)
            },
            handleInput: function() {},
            render: function() {}
        });
        w[t.id] = t
    })(),
    n()
})(Zepto);