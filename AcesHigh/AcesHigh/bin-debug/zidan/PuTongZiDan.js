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
    var PuTongZiDan = (function (_super) {
        __extends(PuTongZiDan, _super);
        function PuTongZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.collNumber = 1;
            _this.bit_name = "us_zd_1";
            _this.bitmap.anchorOffsetX = _this.bitmap.width * 0.5;
            _this.bitmap.anchorOffsetY = _this.bitmap.height * 0.5;
            _this.bitmap.scaleX = 0.4;
            _this.bitmap.scaleY = 0.4;
            _this.is_updata = true;
            return _this;
        }
        PuTongZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_1"));
            this.damping = 0;
            this.displays = [this.bitmap];
        };
        PuTongZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            _super.prototype.weiyi.call(this, "pt_wy");
        };
        PuTongZiDan.prototype.texiao = function () {
            this.bitmap.scaleX = 1;
            this.bitmap.scaleY = 1;
            this.bitmap.alpha = 0.8;
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(_super.prototype.dell, this, [this.bitmap]);
        };
        return PuTongZiDan;
    }(zidan.ZiDanBase));
    zidan.PuTongZiDan = PuTongZiDan;
    __reflect(PuTongZiDan.prototype, "zidan.PuTongZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=PuTongZiDan.js.map