var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TestScene = (function (_super) {
    __extends(TestScene, _super);
    function TestScene() {
        var _this = _super.call(this) || this;
        _this.guanka = new Guanka(_this);
        //场景更新相关
        _this.up_jg = 1000;
        _this.up_mark = 0;
        //广告
        _this.gg = null;
        //分享
        _this.fx = null;
        //商店
        _this.shop = null;
        //媒体奖励
        _this.mrlb = null;
        //奖励类型  1 广告  2 分享  3新手礼包
        _this.jl_type = 0;
        //碰撞间隔
        _this.jg = 100;
        //碰撞标记
        _this.pzMark = 0;
        _this.mrNumber = 50;
        _this.meici = 111;
        _this.is_jia = true;
        _this.add = 0;
        //商店触发cd
        _this.shop_cd = 2000;
        //随机技能权重
        _this.jnqz = [0, 5, 9, 13, 16, 19, 21, 23, 25, 26];
        //上品价格
        _this.jiage = 1000;
        //是否处于选购商品状态
        _this.is_select = false;
        //等级文字提示
        _this.dji_1 = new egret.TextField();
        _this.dji_2 = new egret.TextField();
        _this.dji_3 = new egret.TextField();
        //ui碰撞判断
        _this.is_ui = false;
        _this.zhanqu_zi = new egret.TextField();
        _this.is_zhanqu = true; //是否可以进入战区
        _this.is_chuji = false;
        _this.initTest();
        // this.initGuanka();
        _this.sjjl();
        _this.initShop();
        _this.initzhanqu();
        return _this;
    }
    ;
    TestScene.getInstance = function () {
        if (TestScene.instance == null) {
            TestScene.instance = new TestScene();
        }
        return TestScene.instance;
    };
    TestScene.prototype.initGuanka = function () {
        this.bcgl = new guanqia.BoCiGuanLi(this);
    };
    TestScene.prototype.initTest = function () {
        //背景
        var bg = new test.TestGrid(this);
        bg.x = 0;
        bg.y = 0;
        // this.addChild(bg);
        var sk = new shuke.ShuKe(this);
        this.sk = sk;
        this.initBars();
        this.initBJG();
        this.gg = new egret.Bitmap(RES.getRes("gg"));
        this.fx = new egret.Bitmap(RES.getRes("fx"));
        this.shop = new egret.Bitmap(RES.getRes("shop"));
        this.mrlb = new egret.Bitmap(RES.getRes("mrlb"));
        // this.mrlb.anchorOffsetX = this.mrlb.width * 0.5;
        // this.mrlb.anchorOffsetY = this.mrlb.height * 0.5;
    };
    TestScene.prototype.initShop = function () {
        if (this.jl_type == 3) {
            this.mrlb.x = Tools.getPhoneW() * 0.15 + 1000;
            this.mrlb.y = Tools.getPhoneH() * 0.7 + 1000;
            this.addChild(this.mrlb);
        }
        if (this.jl_type == 2) {
            this.fx.x = Tools.getPhoneW() * 0.15 + 1000;
            this.fx.y = Tools.getPhoneH() * 0.7 + 1000;
            this.addChild(this.fx);
        }
        if (this.jl_type == 1) {
            this.gg.x = Tools.getPhoneW() * 0.15 + 1000;
            this.gg.y = Tools.getPhoneH() * 0.7 + 1000;
            this.addChild(this.gg);
        }
        this.jia_ge = new egret.TextField(); //故事背景
        this.jia_ge.textFlow = new Array({ text: "-1000", style: { "textColor": 0xFFFF6F, "size": 30 } });
        this.shop.x = Tools.getPhoneW() * 0.75 + 1000;
        this.shop.y = Tools.getPhoneH() * 0.71 + 1000;
        this.addChild(this.shop);
    };
    TestScene.prototype.initBars = function () {
        this.dpBar = new bar.DunBar(this);
        this.hhBar = new bar.HuiHeBar(this);
        // this.gzBar = new bar.GuaZaiBar(this);
        this.timeBar = new bar.TimeBar(this);
        // this.djBar = new bar.DengJiBar(this);
        this.zzBar = new bar.ZhongJianTiShiBar(this);
        this.jinBar = new bar.JinBiBar(this, user.UserInfo.all_number);
    };
    TestScene.prototype.initBJG = function () {
        this.hg = new bj.HongGuang(this);
    };
    //初始化战区线
    TestScene.prototype.initzhanqu = function () {
        this.zhanqu_xian = new egret.Shape();
        this.zhanqu_xian.graphics.lineStyle(1, 0x16FF69);
        this.zhanqu_xian.graphics.moveTo(1000, 1000 + Tools.getPhoneH() * 0.5);
        this.zhanqu_xian.graphics.lineTo(1000 + Tools.getPhoneW(), 1000 + Tools.getPhoneH() * 0.5);
        this.zhanqu_xian.graphics.endFill();
        this.addChild(this.zhanqu_xian);
        this.zhanqu_zi.textFlow = new Array({ text: "前往战区", style: { "textColor": 0x16FF69, "size": 20 } });
        this.zhanqu_zi.x = 1000 + Tools.getPhoneW() * 0.628;
        this.zhanqu_zi.y = 1000 + Tools.getPhoneH() * 0.47;
        this.addChild(this.zhanqu_zi);
        this.zhuanqu_tu = new egret.Bitmap(RES.getRes("zhanqu"));
        this.zhuanqu_tu.x = 1000 + Tools.getPhoneW() * 0.6;
        this.zhuanqu_tu.y = 1000 + Tools.getPhoneH() * 0.47;
        this.addChild(this.zhuanqu_tu);
    };
    TestScene.prototype.upSomeThing = function () {
        _super.prototype.upSomeThing.call(this);
        this.timeBar.upup();
        this.jinBar.updata();
        //开始游戏
        if (this.is_chuji) {
            if ((egret.getTimer() - this.up_mark) > this.up_jg) {
                if (this.bcgl.is_next) {
                    this.bcgl.nextBo();
                    this.bcgl.addFc(this);
                }
                this.bcgl.upSomeThing();
                this.up_mark = egret.getTimer();
            }
        }
        this.upShop();
        if (this.jl_type == 3) {
            this.upMR();
        }
        if (this.jl_type == 1) {
            this.upsp();
        }
        if (this.jl_type == 2) {
            this.upfx();
        }
        //更新武器ui碰撞检测
        if (!this.is_ui) {
            this.upUI();
        }
        //---------判断是否可以进入战区---------------
        if (this.is_zhanqu) {
            if (this.sk.zx.y < (1000 + Tools.getPhoneH() * 0.5)) {
                this.is_zhanqu = false;
                this.initGuanka();
                this.is_chuji = true;
                //各种ui往下划出
                if (this.shop.parent) {
                    egret.Tween.get(this.shop).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.shop]);
                }
                if (this.fx.parent) {
                    egret.Tween.get(this.fx).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.fx]);
                }
                if (this.mrlb.parent) {
                    egret.Tween.get(this.mrlb).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.mrlb]);
                }
                if (this.gg.parent) {
                    egret.Tween.get(this.gg).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.gg]);
                }
                if (this.zhanqu_xian.parent) {
                    egret.Tween.get(this.zhanqu_xian).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.zhanqu_xian]);
                }
                if (this.zhanqu_zi.parent) {
                    egret.Tween.get(this.zhanqu_zi).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.zhanqu_zi]);
                }
                if (this.zhuanqu_tu.parent) {
                    egret.Tween.get(this.zhuanqu_tu).to({ "y": 800 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.zhuanqu_tu]);
                }
            }
        }
    };
    TestScene.prototype.remUI = function (a) {
        if (a.parent) {
            this.removeChild(a);
        }
    };
    TestScene.prototype.upUI = function () {
        if (this.jia1) {
            if (this.jia1.parent) {
                var rect1_ = this.sk.zx.getBounds();
                rect1_.width = this.sk.zx.width * 3;
                rect1_.height = this.sk.zx.height * 3;
                var rect2 = this.jia1.getBounds();
                rect1_.x = this.move_point.x - this.sk.zx.width * 1.5;
                rect1_.y = this.move_point.y - this.sk.zx.height * 1.5;
                rect2.x = this.jia1.x;
                rect2.y = this.jia1.y;
                var sspp = rect1_.intersects(rect2);
                //碰撞检测
                if (sspp) {
                    this.dou_ping();
                    this.is_ui = true;
                    user.UserInfo.saveTianTi(this.zz[0]);
                    this.sk.upsuke(this.zz[0]);
                    this.moveLeve();
                    // this.jia1.alpha
                    egret.Tween.get(this.jia1).to({ "scaleX": 5, "scaleY": 5 }, 500).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia1]);
                    egret.Tween.get(this.jia2).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia2]);
                    egret.Tween.get(this.jia3).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia3]);
                    this.is_zhanqu = true;
                    return;
                }
            }
        }
        if (this.jia2) {
            if (this.jia2.parent) {
                var rect1_ = this.sk.zx.getBounds();
                rect1_.width = this.sk.zx.width * 3;
                rect1_.height = this.sk.zx.height * 3;
                var rect2 = this.jia2.getBounds();
                rect1_.x = this.move_point.x - this.sk.zx.width * 1.5;
                rect1_.y = this.move_point.y - this.sk.zx.height * 1.5;
                rect2.x = this.jia2.x;
                rect2.y = this.jia2.y;
                var sspp = rect1_.intersects(rect2);
                //碰撞检测
                if (sspp) {
                    this.dou_ping();
                    this.is_ui = true;
                    user.UserInfo.saveTianTi(this.zz[1]);
                    this.sk.upsuke(this.zz[1]);
                    this.moveLeve();
                    egret.Tween.get(this.jia2).to({ "scaleX": 5, "scaleY": 5, "alpha": 0 }, 500).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia2]);
                    egret.Tween.get(this.jia1).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia1]);
                    egret.Tween.get(this.jia3).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia3]);
                    this.is_zhanqu = true;
                    return;
                }
            }
        }
        if (this.jia3) {
            if (this.jia3.parent) {
                var rect1_ = this.sk.zx.getBounds();
                rect1_.width = this.sk.zx.width * 3;
                rect1_.height = this.sk.zx.height * 3;
                var rect2 = this.jia3.getBounds();
                rect1_.x = this.move_point.x - this.sk.zx.width * 1.5;
                rect1_.y = this.move_point.y - this.sk.zx.height * 1.5;
                rect2.x = this.jia3.x;
                rect2.y = this.jia3.y;
                var sspp = rect1_.intersects(rect2);
                //碰撞检测
                if (sspp) {
                    this.dou_ping();
                    this.is_ui = true;
                    user.UserInfo.saveTianTi(this.zz[2]);
                    this.sk.upsuke(this.zz[2]);
                    this.moveLeve();
                    egret.Tween.get(this.jia3).to({ "scaleX": 5, "scaleY": 5 }, 500).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia3]);
                    egret.Tween.get(this.jia2).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia2]);
                    egret.Tween.get(this.jia1).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia1]);
                    this.is_zhanqu = true;
                    return;
                }
            }
        }
    };
    //移除等级图标
    TestScene.prototype.moveLeve = function () {
        if (this.dji_1.parent) {
            this.removeChild(this.dji_1);
        }
        if (this.dji_2.parent) {
            this.removeChild(this.dji_2);
        }
        if (this.dji_3.parent) {
            this.removeChild(this.dji_3);
        }
    };
    //--------------------------------------商店相关----------------------------------------------
    //商店碰撞检测
    TestScene.prototype.upShop = function () {
        if (!this.move_point || this.is_select) {
            return;
        }
        var rect1_ = this.sk.zx.getBounds();
        rect1_.width = this.sk.zx.width * 3;
        rect1_.height = this.sk.zx.height * 3;
        var rect2 = this.shop.getBounds();
        rect1_.x = this.move_point.x - this.sk.zx.width * 1.5;
        rect1_.y = this.move_point.y - this.sk.zx.height * 1.5;
        rect2.x = this.shop.x;
        rect2.y = this.shop.y;
        var sspp = rect1_.intersects(rect2);
        if (sspp) {
            this.is_shop = true;
            //逻辑出发cd 
            if (egret.getTimer() > this.shop_cd) {
                this.shop_cd = egret.getTimer() + 1000;
                //如果钱够的话
                if (!this.is_select) {
                    if (this.jinBar.jianAllNumb(this.jiage)) {
                        this.zz = this.randomJN();
                        //生成ui
                        this.addUI(this.zz);
                        this.dou_ping();
                        this.is_select = true;
                        this.is_shop = false;
                        //飘钱
                        this.jia_ge.x = Tools.getPhoneW() * 0.75 + 1000;
                        this.jia_ge.y = Tools.getPhoneH() * 0.66 + 1000;
                        this.addChild(this.jia_ge);
                        egret.Tween.get(this.jia_ge).to({ "y": Tools.getPhoneH() * 0.65 + 1000, "alpha": 0 }, 1000).call(function (jia_ge) {
                            if (jia_ge.parent) {
                                jia_ge.parent.removeChild(jia_ge);
                            }
                        }, this, [this.jia_ge]);
                        //闪烁移除购物车
                        egret.Tween.get(this.shop).to({ "alpha": 0 }, 200).to({ "alpha": 1 }, 200).to({ "alpha": 0 }, 200).to({ "alpha": 1 }, 200).call(function (jia_ge) {
                            if (jia_ge.parent) {
                                jia_ge.parent.removeChild(jia_ge);
                            }
                        }, this, [this.shop]);
                        //战区锁
                        this.is_zhanqu = false;
                    }
                    else {
                        //飘钱
                        this.jia_ge.x = Tools.getPhoneW() * 0.75 + 1000;
                        this.jia_ge.y = Tools.getPhoneH() * 0.66 + 1000;
                        this.addChild(this.jia_ge);
                        egret.Tween.get(this.jia_ge).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 50).to({ "alpha": 1 }, 50).call(function (a) {
                            if (a.parent) {
                                a.parent.removeChild(a);
                            }
                        }, this, [this.jia_ge]);
                    }
                }
            }
            //商店事件
        }
        else {
            this.is_shop = false;
        }
    };
    TestScene.prototype.setUI = function (one, x, y) {
        one.anchorOffsetX = one.width * 0.5;
        one.anchorOffsetY = one.height * 0.5;
        one.x = x;
        one.y = y;
        one.scaleX = 2;
        one.scaleY = 2;
        this.addChild(one);
    };
    TestScene.prototype.getSE = function (n) {
        if (n == 1) {
            return 0xEDFFF9;
        }
        if (n == 2) {
            return 0x16FF69;
        }
        if (n == 3) {
            return 0x4F9DFF;
        }
        if (n == 4) {
            return 0x8223CC;
        }
        if (n >= 5) {
            return 0xFFFF6F;
        }
        return null;
    };
    //添加 武器选择ui
    TestScene.prototype.addUI = function (zz) {
        // 1:us_wq_1 | 2:us_wq_2 | 3:us_wq_4 | 4:us_wq_7 | 5:us_wq_6 | 6:us_wq_3 | 7:us_wq_5 | 8:us_wq_8 | 9:us_wq_9
        var lv1 = user.UserInfo.wuqi_shengji_tianti[zz[0]] + 1;
        var se = this.getSE(lv1);
        this.dji_1.textFlow = new Array({ text: "LV." + lv1, style: { "textColor": se, "size": 10 } });
        this.setUI(this.dji_1, (Tools.getPhoneW() * 0.25 + 1000), Tools.getPhoneH() * 0.52 + 1000);
        this.jia1 = new egret.Bitmap(RES.getRes(this.getuiName(zz[0])));
        this.setUI(this.jia1, (Tools.getPhoneW() * 0.25 + 1000), Tools.getPhoneH() * 0.55 + 1000);
        var lv2 = user.UserInfo.wuqi_shengji_tianti[zz[1]] + 1;
        se = this.getSE(lv2);
        this.dji_2.textFlow = new Array({ text: "LV." + lv2, style: { "textColor": se, "size": 10 } });
        this.setUI(this.dji_2, (Tools.getPhoneW() * 0.5 + 1000), Tools.getPhoneH() * 0.52 + 1000);
        this.jia2 = new egret.Bitmap(RES.getRes(this.getuiName(zz[1])));
        this.setUI(this.jia2, (Tools.getPhoneW() * 0.5 + 1000), Tools.getPhoneH() * 0.55 + 1000);
        var lv3 = user.UserInfo.wuqi_shengji_tianti[zz[2]] + 1;
        se = this.getSE(lv3);
        this.dji_3.textFlow = new Array({ text: "LV." + lv3, style: { "textColor": se, "size": 10 } });
        this.setUI(this.dji_3, (Tools.getPhoneW() * 0.75 + 1000), Tools.getPhoneH() * 0.52 + 1000);
        this.jia3 = new egret.Bitmap(RES.getRes(this.getuiName(zz[2])));
        this.setUI(this.jia3, (Tools.getPhoneW() * 0.75 + 1000), Tools.getPhoneH() * 0.55 + 1000);
    };
    //返回UI图标名称
    TestScene.prototype.getuiName = function (n) {
        if (n == 1) {
            return "us_wq_1";
        }
        if (n == 2) {
            return "us_wq_2";
        }
        if (n == 3) {
            return "us_wq_4";
        }
        if (n == 4) {
            return "us_wq_7";
        }
        if (n == 5) {
            return "us_wq_6";
        }
        if (n == 6) {
            return "us_wq_3";
        }
        if (n == 7) {
            return "us_wq_5";
        }
        if (n == 8) {
            return "us_wq_8";
        }
        if (n == 9) {
            return "us_wq_9";
        }
        return '';
    };
    //-------------------------------商店够买相关-----------------------------------------
    //随机升级技能
    TestScene.prototype.randomJN = function () {
        var zs = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
            for (;;) {
                var zz = Tools.GetRandomNum(1, user.UserInfo.getmax());
                if (zs[0] != zz && zs[1] != zz && zs[2] != zz) {
                    zs[i] = zz;
                    break;
                }
            }
        }
        return zs;
    };
    //---------------------------------------------------------------------------------
    //幸运礼包
    TestScene.prototype.upMR = function () {
        if (!this.move_point) {
            return;
        }
        if (this.mrNumber <= 0) {
            this.is_jl = false;
            if (this.mrlb.parent) {
                this.mrlb.parent.removeChild(this.mrlb);
            }
            return;
        }
        var rect1 = this.sk.zx.getBounds();
        var rect2 = this.mrlb.getBounds();
        rect1.x = this.move_point.x;
        rect1.y = this.move_point.y;
        rect2.x = this.mrlb.x;
        rect2.y = this.mrlb.y;
        var sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_jl = true;
            if (this.is_jia) {
                this.jiawu();
            }
            else {
                this.jianwu();
            }
            // if (this.add % 1 == 0) {
            this.mrNumber--;
            // egret.log("GGGGGGGGG:" + this.mrNumber);
            this.addjibi(this.mrlb.x + this.mrlb.width * 0.5, this.mrlb.y + this.mrlb.height * 0.5);
            // }
            // this.add++;
        }
        else {
            this.is_jl = false;
            this.x = -1000;
            this.y = -1000;
        }
    };
    //观看视频 碰撞
    TestScene.prototype.upsp = function () {
        if (!this.move_point) {
            return;
        }
        var rect1 = this.sk.zx.getBounds();
        var rect2 = this.gg.getBounds();
        rect1.x = this.move_point.x;
        rect1.y = this.move_point.y;
        rect2.x = this.gg.x;
        rect2.y = this.gg.y;
        var sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_jl = true;
            //观看广告事件
        }
        else {
            this.is_jl = false;
        }
    };
    //分享 碰撞
    TestScene.prototype.upfx = function () {
        if (!this.move_point) {
            return;
        }
        var rect1 = this.sk.zx.getBounds();
        var rect2 = this.fx.getBounds();
        rect1.x = this.move_point.x;
        rect1.y = this.move_point.y;
        rect2.x = this.fx.x;
        rect2.y = this.fx.y;
        var sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_jl = true;
            //分享事件
        }
        else {
            this.is_jl = false;
        }
    };
    //胖短是否可以出发碰撞
    TestScene.prototype.isPZ = function () {
        return (egret.getTimer() - this.pzMark) > this.jg;
    };
    //-------------------------------------------------------------------------------------
    //-----------------随机奖励----------------------------------------
    //随机奖励
    TestScene.prototype.sjjl = function () {
        var r = Tools.GetRandomNum(1, 25);
        if (r <= 10) {
            this.jl_type = 1;
            return;
        }
        if (r > 10 && r <= 20) {
            this.jl_type = 2;
            return;
        }
        this.jl_type = 3;
    };
    TestScene.prototype.jiawu = function () {
        this.x += 5;
        this.y -= 5;
        this.is_jia = false;
    };
    TestScene.prototype.jianwu = function () {
        this.x -= 5;
        this.y += 5;
        this.is_jia = true;
    };
    //抖屏
    TestScene.prototype.dou_ping = function () {
        var x = -1000;
        var y = -1000;
        egret.Tween.get(this).to({ "x": x + 5, "y": y - 5 }, 50).to({ "x": x - 5, "y": y + 5 }, 50).to({ "x": x + 5, "y": y - 5 }, 50).to({ "x": x - 5, "y": y + 5 }, 50).to({ "x": x + 5, "y": y - 5 }, 50).call(this.gui_wei, this, [x, y]);
    };
    //归位
    TestScene.prototype.gui_wei = function (x, y) {
        this.x = x;
        this.y = y;
    };
    //去掉光线
    TestScene.prototype.removeXin = function (shp) {
        if (shp.parent) {
            this.removeChild(shp);
        }
    };
    //添加金币图标
    TestScene.prototype.addjibi = function (x, y) {
        var xx = Tools.GetRandomNum(-50, 50);
        var yy = Tools.GetRandomNum(-50, 50);
        var jinbi = new egret.Bitmap(RES.getRes("jt"));
        jinbi.x = x + xx;
        jinbi.y = yy + y;
        jinbi.anchorOffsetX = jinbi.width * 0.5;
        jinbi.anchorOffsetY = jinbi.height * 0.5;
        jinbi.scaleX = 2;
        jinbi.scaleY = 2;
        this.addChild(jinbi);
        egret.Tween.get(jinbi).to({ "x": x + xx, "y": y + yy }, 500).to({ "x": Tools.getPhoneW() * 0.99 + 1000, "y": Tools.getPhoneH() * 0.02 + 1000, "scaleX": 0.8, "scaleY": 0.8 }, 700).call(this.dell, this, [jinbi]);
    };
    TestScene.prototype.dell = function (d) {
        if (d.parent) {
            d.parent.removeChild(d);
        }
        this.jinBar.addAllNumb(this.meici);
    };
    TestScene.instance = null;
    return TestScene;
}(scene.SceneBase));
__reflect(TestScene.prototype, "TestScene");
//# sourceMappingURL=TestScene.js.map