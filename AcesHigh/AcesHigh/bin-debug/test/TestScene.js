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
        _this.initTest();
        // this.initGuanka();
        _this.sjjl();
        _this.initShop();
        return _this;
    }
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
        var wp = egret.Point.create(1200, 1200);
        //背景
        var bg = new test.TestGrid(this);
        bg.x = 0;
        bg.y = 0;
        this.addChild(bg);
        var sk = new shuke.ShuKe(this);
        this.sk = sk;
        this.initBars();
        this.initBJG();
        this.gg = new egret.Bitmap(RES.getRes("gg"));
        this.fx = new egret.Bitmap(RES.getRes("fx"));
        this.shop = new egret.Bitmap(RES.getRes("shop"));
        this.mrlb = new egret.Bitmap(RES.getRes("mrlb"));
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
    };
    TestScene.prototype.initBJG = function () {
        this.hg = new bj.HongGuang(this);
    };
    TestScene.prototype.upSomeThing = function () {
        _super.prototype.upSomeThing.call(this);
        this.timeBar.upup();
        // if ((egret.getTimer() - this.up_mark) > this.up_jg) {
        //     if (this.bcgl.is_next) {
        //         this.bcgl.nextBo();
        //         this.bcgl.addFc(this);
        //     }
        //     this.bcgl.upSomeThing();
        //     this.up_mark = egret.getTimer();
        // }
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
    };
    //--------------------------------------商店相关----------------------------------------------
    //商店碰撞检测
    TestScene.prototype.upShop = function () {
        if (!this.move_point) {
            return;
        }
        var rect1 = this.sk.hx.getBounds();
        var rect2 = this.shop.getBounds();
        rect1.x = this.move_point.x;
        rect1.y = this.move_point.y;
        rect2.x = this.shop.x;
        rect2.y = this.shop.y;
        var sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_shop = true;
            //商店事件
        }
        else {
            this.is_shop = false;
        }
    };
    //幸运礼包
    TestScene.prototype.upMR = function () {
        if (!this.move_point) {
            return;
        }
        var rect1 = this.sk.hx.getBounds();
        var rect2 = this.mrlb.getBounds();
        rect1.x = this.move_point.x;
        rect1.y = this.move_point.y;
        rect2.x = this.mrlb.x;
        rect2.y = this.mrlb.y;
        var sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_jl = true;
            //商店每日礼包事件
        }
        else {
            this.is_jl = false;
        }
    };
    //观看视频 碰撞
    TestScene.prototype.upsp = function () {
        if (!this.move_point) {
            return;
        }
        var rect1 = this.sk.hx.getBounds();
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
        var rect1 = this.sk.hx.getBounds();
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
    //抖屏
    TestScene.prototype.dou_ping = function () {
        var x = this.x;
        var y = this.y;
        egret.Tween.get(this).to({ "x": x + 5, "y": y - 5 }, 50).to({ "x": x - 5, "y": y + 5 }, 50).to({ "x": x + 5, "y": y - 5 }, 50).to({ "x": x - 5, "y": y + 5 }, 50).call(this.gui_wei, this, [x, y]);
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
    TestScene.instance = null;
    return TestScene;
}(scene.SceneBase));
__reflect(TestScene.prototype, "TestScene");
//# sourceMappingURL=TestScene.js.map