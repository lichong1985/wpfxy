var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bar;
(function (bar) {
    var ZhongJianTiShiBar = (function () {
        function ZhongJianTiShiBar(scene) {
            this.y = 1030;
            this.pi = 20;
            this.x = Tools.getPhoneW() * 0.4 + 1000;
            this.y = Tools.getPhoneH() * 0.4 + 1000;
            this.scene = scene;
        }
        ZhongJianTiShiBar.prototype.setNumber = function (n) {
            this.w1 = new egret.Bitmap(RES.getRes("hh"));
            this.scene.addChildAt(this.w1, 100);
            this.w1.y = this.y;
            this.w1.x = this.x;
            this.y += 10;
            var s;
            var g;
            if (n >= 10) {
                s = n / 10;
                g = s % 10;
            }
            else {
                s = 0;
                g = n;
            }
            this.w2 = new egret.Bitmap(RES.getRes(s + ""));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.x + this.w1.width + this.w1.width * 0.5;
            this.w3 = new egret.Bitmap(RES.getRes(g + ""));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.x + this.w1.width + this.w1.width * 0.5 + this.w2.width + this.w2.width * 0.5;
            egret.Tween.get(this.w1).to({ alpha: 1 }, 2000).call(this.remove_set, this);
        };
        ZhongJianTiShiBar.prototype.remove_set = function () {
            this.scene.removeChild(this.w1);
            this.scene.removeChild(this.w2);
            this.scene.removeChild(this.w3);
        };
        return ZhongJianTiShiBar;
    }());
    bar.ZhongJianTiShiBar = ZhongJianTiShiBar;
    __reflect(ZhongJianTiShiBar.prototype, "bar.ZhongJianTiShiBar");
})(bar || (bar = {}));
//# sourceMappingURL=ZhongJianTiShiBar.js.map