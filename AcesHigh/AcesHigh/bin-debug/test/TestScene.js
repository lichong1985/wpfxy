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
        _this.initTest();
        _this.initGuanka();
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
    };
    TestScene.prototype.initBars = function () {
        this.dpBar = new bar.DunBar(this);
        this.hhBar = new bar.HuiHeBar(this);
        // this.gzBar = new bar.GuaZaiBar(this);
        this.timeBar = new bar.TimeBar(this);
        // this.djBar = new bar.DengJiBar(this);
        this.zzBar = new bar.ZhongJianTiShiBar(this);
    };
    TestScene.prototype.upSomeThing = function () {
        // egret.log("LLLLLLLLLLLLLLLLL:"+suiji.GetRandomNum(0, 11))
        _super.prototype.upSomeThing.call(this);
        this.timeBar.upup();
        if ((egret.getTimer() - this.up_mark) > this.up_jg) {
            if (this.bcgl.is_next) {
                this.bcgl.nextBo();
                this.bcgl.addFc(this);
            }
            this.bcgl.upSomeThing();
            this.up_mark = egret.getTimer();
        }
    };
    TestScene.instance = null;
    return TestScene;
}(scene.SceneBase));
__reflect(TestScene.prototype, "TestScene");
//# sourceMappingURL=TestScene.js.map