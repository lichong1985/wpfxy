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
    var DingWeiZidan = (function (_super) {
        __extends(DingWeiZidan, _super);
        function DingWeiZidan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.bit_name = "op_wq_2";
            return _this;
        }
        DingWeiZidan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("op_wq_2"));
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        DingWeiZidan.prototype.updata = function () {
            _super.prototype.updata.call(this);
        };
        return DingWeiZidan;
    }(zidan.ZiDanBase));
    zidan.DingWeiZidan = DingWeiZidan;
    __reflect(DingWeiZidan.prototype, "zidan.DingWeiZidan");
})(zidan || (zidan = {}));
//# sourceMappingURL=DingWeiZiDan.js.map