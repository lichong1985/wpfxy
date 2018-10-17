var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bar;
(function (bar) {
    var HuiHeBar = (function () {
        function HuiHeBar(scene) {
            this.y = 1010;
            this.pi = 20;
            this.x = Tools.getPhoneW() * 0.01 + 1000;
            this.scene = scene;
            this.initUI();
        }
        HuiHeBar.prototype.initUI = function () {
            this.whh = new egret.Bitmap(RES.getRes("hh"));
            this.scene.addChildAt(this.whh, 100);
            this.whh.y = this.y;
            this.whh.x = this.x + this.pi * 0;
            this.y += 10;
            this.w1 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w1, 100);
            this.w1.y = this.y;
            this.w1.x = this.whh.width + this.x + this.whh.width * 0.5;
            this.w2 = new egret.Bitmap(RES.getRes("5"));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.whh.width + this.x + this.whh.width * 0.6 + 1 * this.w1.width;
            this.w3 = new egret.Bitmap(RES.getRes("sx"));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.whh.width + this.x + this.whh.width * 0.78 + 2 * this.w1.width;
            this.w4 = new egret.Bitmap(RES.getRes("5"));
            this.scene.addChildAt(this.w4, 100);
            this.w4.y = this.y;
            this.w4.x = this.whh.width + this.x + this.whh.width * 0.5 + 3 * this.w1.width;
            this.w5 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w5, 100);
            this.w5.y = this.y;
            this.w5.x = this.whh.width + this.x + this.whh.width * 0.6 + 4 * this.w1.width;
        };
        //设置数值
        HuiHeBar.prototype.setNumber = function (s) {
            if (s < 10) {
                this.w2.texture = RES.getRes(s + "");
                return;
            }
            var l1 = s / 10;
            var l2 = s % 10;
            this.w1.texture = RES.getRes(l1 + "");
            this.w2.texture = RES.getRes(l2 + "");
        };
        return HuiHeBar;
    }());
    bar.HuiHeBar = HuiHeBar;
    __reflect(HuiHeBar.prototype, "bar.HuiHeBar");
})(bar || (bar = {}));
//# sourceMappingURL=HuiHeBar.js.map