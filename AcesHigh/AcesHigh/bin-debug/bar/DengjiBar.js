var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bar;
(function (bar) {
    var DengJiBar = (function () {
        function DengJiBar(scene) {
            this.y = 1070;
            this.pi = 20;
            this.x = Tools.getPhoneW() * 0.01 + 1000;
            this.scene = scene;
            this.initUI();
        }
        DengJiBar.prototype.initUI = function () {
            this.w1 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w1, 100);
            this.w1.y = this.y;
            this.w1.x = this.x + this.pi * 0;
            this.w2 = new egret.Bitmap(RES.getRes("1"));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.x + this.pi * 1;
            this.w3 = new egret.Bitmap(RES.getRes("he"));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.x + this.pi * 2;
            this.w4 = new egret.Bitmap(RES.getRes("xin"));
            this.scene.addChildAt(this.w4, 100);
            this.w4.y = this.y;
            this.w4.x = this.x + this.pi * 3;
            this.w5 = new egret.Bitmap(RES.getRes("deng"));
            this.scene.addChildAt(this.w5, 100);
            this.w5.y = this.y;
            this.w5.x = this.x + this.pi * 4;
            this.w6 = new egret.Bitmap(RES.getRes("jb"));
            this.scene.addChildAt(this.w6, 100);
            this.w6.y = this.y;
            this.w6.x = this.x + this.pi * 5;
        };
        return DengJiBar;
    }());
    bar.DengJiBar = DengJiBar;
    __reflect(DengJiBar.prototype, "bar.DengJiBar");
})(bar || (bar = {}));
//# sourceMappingURL=DengjiBar.js.map