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
        this.nowBo = 0;
        this.nowHeiHe = 0;
        this.allHeiHe = this.guanka.bos[this.nowBo].length;
    };
    TestScene.prototype.initTest = function () {
        var wp = egret.Point.create(1200, 1200);
        //背景
        var bg = new test.TestGrid();
        bg.x = 0;
        bg.y = 0;
        this.addChild(bg);
        var sk = new shuke.ShuKe(this);
        this.sk = sk;
        // let fc = new feichuan.XiaoBing(this, egret.Point.create(1200, 1300), egret.Point.create(1500, 800), "6_1_json")
        // let fc: test.TestFeiChuan = new test.TestFeiChuan(this);
        // this.dijis.push(fc)
    };
    TestScene.prototype.upSomeThing = function () {
        _super.prototype.upSomeThing.call(this);
        // //刚刚开场
        if (this.add_hh_fc) {
            //重置
            this.add_hh_fc = false;
            for (var i = 0; i < this.guanka.bos[this.nowBo][this.nowHeiHe].length; i++) {
                //添加飞船到战场
                var fc = new feichuan.XiaoBing(this, this.guanka.bos[this.nowBo][this.nowHeiHe][i].nowP, this.guanka.bos[this.nowBo][this.nowHeiHe][i].toP, this.guanka.bos[this.nowBo][this.nowHeiHe][i].sName);
                // fc.addAI(new ai.MiaoZhun(fc, 0.5));
                // fc.addAI(new ai.ZuoYouLuanDongAI(fc));
                // fc.damping = 0.5;
                this.dijis.push(fc);
            }
            this.lastFeiJi = this.guanka.bos[this.nowBo][this.nowHeiHe].length;
            //回合数增加
            this.nowHeiHe++;
            //如果回合数移除则 波数增加 并且重置回合数
            if (this.nowHeiHe >= this.guanka.bos[this.nowBo].length) {
                this.nowBo++;
                this.nowHeiHe = 0;
            }
        }
        //本回合飞机都打没了
        if (this.lastFeiJi <= 0) {
            this.add_hh_fc = true;
        }
    };
    TestScene.instance = null;
    return TestScene;
}(scene.SceneBase));
__reflect(TestScene.prototype, "TestScene");
//# sourceMappingURL=TestScene.js.map