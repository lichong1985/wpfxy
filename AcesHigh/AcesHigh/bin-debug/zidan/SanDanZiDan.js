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
var zidan;
(function (zidan) {
    var SanDanZiDan = (function (_super) {
        __extends(SanDanZiDan, _super);
        function SanDanZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.bit_name = "us_zd_2";
            _this.is_updata = true;
            return _this;
        }
        SanDanZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_2"));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        SanDanZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            _super.prototype.weiyi.call(this, "us_zd_2_wy");
        };
        SanDanZiDan.prototype.texiao = function () {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8;
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(_super.prototype.dell, this, [this.bitmap]);
        };
        return SanDanZiDan;
    }(zidan.ZiDanBase));
    zidan.SanDanZiDan = SanDanZiDan;
    __reflect(SanDanZiDan.prototype, "zidan.SanDanZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=SanDanZiDan.js.map