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
    var ZhiSheZhiDan = (function (_super) {
        __extends(ZhiSheZhiDan, _super);
        function ZhiSheZhiDan(zhenying, mass) {
            var _this = _super.call(this, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            return _this;
        }
        ZhiSheZhiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("lv_dian_png"));
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        ZhiSheZhiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
        };
        return ZhiSheZhiDan;
    }(zidan.ZiDanBase));
    zidan.ZhiSheZhiDan = ZhiSheZhiDan;
    __reflect(ZhiSheZhiDan.prototype, "zidan.ZhiSheZhiDan");
})(zidan || (zidan = {}));
