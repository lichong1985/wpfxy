var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bj;
(function (bj) {
    var HongGuang = (function () {
        function HongGuang(scene) {
            this.scene = scene;
        }
        HongGuang.prototype.init = function () {
            // this.shp = new egret.Shape();
            // this.shp.graphics.beginFill(0XD71139, 1);
            // // this.shp.graphics.drawRect(1000, 1000, Tools.getPhoneW() + 1000, Tools.getPhoneH() + 1000);
            // this.shp.graphics.drawRect(1000, 1000, 1100, 1100);
            // this.shp.graphics.endFill();
            // // this.shp.alpha = 0.5;
            // this.scene.addChildAt(this.shp, 101);
        };
        HongGuang.prototype.jizhong = function () {
            // this.shp.alpha = 0.5;
            // egret.Tween.get(this.shp).to({ "alpha": 0 }, 100);
            var shp = new egret.Shape();
            shp.graphics.beginFill(0XD71139, 1);
            shp.graphics.drawRect(1000, 1000, 1100, 1100);
            shp.graphics.endFill();
            shp.alpha = 0.3;
            this.scene.addChild(shp);
            egret.Tween.get(shp).to({ "alpha": 0 }, 500).call(this.dell, this, [shp]);
        };
        //移除缓动动画
        HongGuang.prototype.dell = function (DD) {
            if (DD) {
                if (DD.parent) {
                    egret.Tween.removeTweens(DD);
                    this.scene.removeChild(DD);
                }
            }
            DD = null;
        };
        return HongGuang;
    }());
    bj.HongGuang = HongGuang;
    __reflect(HongGuang.prototype, "bj.HongGuang");
})(bj || (bj = {}));
//# sourceMappingURL=HongGuang.js.map