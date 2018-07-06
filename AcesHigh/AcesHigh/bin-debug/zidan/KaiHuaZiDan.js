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
    var KaiHuaZiDan = (function (_super) {
        __extends(KaiHuaZiDan, _super);
        function KaiHuaZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.is_updata = true;
            _this.bit_name = "1-5_png";
            return _this;
        }
        KaiHuaZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("1-5_png"));
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        KaiHuaZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            this.force = [0, -0.0001];
        };
        return KaiHuaZiDan;
    }(zidan.ZiDanBase));
    zidan.KaiHuaZiDan = KaiHuaZiDan;
    __reflect(KaiHuaZiDan.prototype, "zidan.KaiHuaZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=KaiHuaZiDan.js.map