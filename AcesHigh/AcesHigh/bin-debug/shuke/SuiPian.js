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
var shuke;
(function (shuke) {
    var SuiPian = (function (_super) {
        __extends(SuiPian, _super);
        function SuiPian(name, pp) {
            var _this = _super.call(this, RES.getRes(name)) || this;
            //角度
            _this.degree = 0;
            //半径
            _this.radius = 0;
            _this.m = 0;
            _this.t = 0;
            _this.pp = pp;
            _this.x = pp.x;
            _this.y = pp.y;
            _this.init();
            return _this;
        }
        SuiPian.prototype.init = function () {
            this.anchorOffsetX = this.width * 0.5;
            this.anchorOffsetY = this.height * 0.5;
            //缩放
            var scale = Tools.GetRandomNum(1, 3);
            this.scaleX = scale;
            this.scaleY = scale;
            this.radius = Tools.GetRandomNum(50, 200);
            this.degree = Tools.GetRandomNum(1, 360);
            this.t = Tools.GetRandomNum(30, 100);
            this.pt = egret.Point.polar(this.radius, this.degree * Math.PI / 180);
            this.alpha = 0.5;
        };
        SuiPian.prototype.too = function () {
            egret.Tween.get(this).to({ "x": this.x + this.pt.x, "y": this.y + this.pt.y }, 200).call(this.zhuan, this);
        };
        //转
        SuiPian.prototype.zhuan = function () {
            this.m++;
            if (this.m >= 20) {
                this.dell();
                return;
            }
            this.degree += 5;
            this.pt = egret.Point.polar(this.radius, this.degree * Math.PI / 180);
            egret.Tween.get(this).to({ "x": this.pp.x + this.pt.x, "y": this.pp.y + this.pt.y }, this.t).call(this.zhuan, this);
        };
        //移除缓动动画
        SuiPian.prototype.dell = function () {
            if (this.parent) {
                var p = this.parent;
                p.removeChild(this);
            }
        };
        return SuiPian;
    }(egret.Bitmap));
    shuke.SuiPian = SuiPian;
    __reflect(SuiPian.prototype, "shuke.SuiPian");
})(shuke || (shuke = {}));
//# sourceMappingURL=SuiPian.js.map