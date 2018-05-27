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
        _this.initTest();
        return _this;
    }
    TestScene.prototype.initTest = function () {
        var wp = egret.Point.create(1200, 1200);
        //背景
        var bg = new test.TestGrid();
        bg.x = 0;
        bg.y = 0;
        this.addChild(bg);
        var fc = new test.TestFeiChuan(this);
        this.dijis.push(fc);
        var sk = new shuke.ShuKe(this);
        this.sk = sk;
    };
    return TestScene;
}(scene.SceneBase));
__reflect(TestScene.prototype, "TestScene");
//# sourceMappingURL=TestScene.js.map