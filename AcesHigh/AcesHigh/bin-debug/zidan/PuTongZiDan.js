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
        function PuTongZiDan(zhenying, mass) {
            var _this = _super.call(this, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            return _this;
        }
        PuTongZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("lv_dian_png"));
            this.damping = 0;
            this.displays = [this.bitmap];
        };
        PuTongZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
        };
        return PuTongZiDan;
    }(zidan.ZiDanBase));
    zidan.PuTongZiDan = PuTongZiDan;
    __reflect(PuTongZiDan.prototype, "zidan.PuTongZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=PuTongZiDan.js.map