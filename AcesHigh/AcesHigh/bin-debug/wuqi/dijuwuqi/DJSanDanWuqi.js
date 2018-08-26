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
var djwq;
(function (djwq) {
    var DJSanDanWuqi = (function (_super) {
        __extends(DJSanDanWuqi, _super);
        function DJSanDanWuqi(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DING_WEI) || this;
            _this.A0 = 0 * Math.PI / 180;
            _this.A5 = 5 * Math.PI / 180;
            _this.A10 = 10 * Math.PI / 180;
            _this.FA5 = -5 * Math.PI / 180;
            _this.FA10 = -10 * Math.PI / 180;
            return _this;
        }
        //射击
        DJSanDanWuqi.prototype.fashe = function (angel, suke, now) {
            var angle = this.fc.angle;
            this.diu(this.wuqi_type, this.getLiLiang(angel), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            angle += this.A5;
            this.diu(this.wuqi_type, this.getLiLiang(angel), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            angle += this.FA5;
            this.diu(this.wuqi_type, this.getLiLiang(angel), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            angle += this.A10;
            this.diu(this.wuqi_type, this.getLiLiang(angel), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            angle += this.FA10;
            this.diu(this.wuqi_type, this.getLiLiang(angel), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        DJSanDanWuqi.prototype.getLiLiang = function (angle) {
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            return egret.Point.create(sx, sy);
        };
        return DJSanDanWuqi;
    }(djwq.DJWQBase));
    djwq.DJSanDanWuqi = DJSanDanWuqi;
    __reflect(DJSanDanWuqi.prototype, "djwq.DJSanDanWuqi");
})(djwq || (djwq = {}));
//# sourceMappingURL=DJSanDanWuqi.js.map