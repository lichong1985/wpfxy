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
    var DJSanDanZiDan = (function (_super) {
        __extends(DJSanDanZiDan, _super);
        function DJSanDanZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.bit_name = "op_wq_5";
            _this.is_updata = true;
            return _this;
        }
        DJSanDanZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("op_wq_5"));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        DJSanDanZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            // super.weiyi(this.bit_name);
        };
        return DJSanDanZiDan;
    }(zidan.ZiDanBase));
    zidan.DJSanDanZiDan = DJSanDanZiDan;
    __reflect(DJSanDanZiDan.prototype, "zidan.DJSanDanZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=DJSanDanZiDan.js.map