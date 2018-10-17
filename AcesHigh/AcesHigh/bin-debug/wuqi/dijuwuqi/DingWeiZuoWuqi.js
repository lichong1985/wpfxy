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
    var DingWeiZuoWuqi = (function (_super) {
        __extends(DingWeiZuoWuqi, _super);
        function DingWeiZuoWuqi(moKuaiPost, shapeType, bitName, fc) {
            return _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DING_WEI) || this;
        }
        //射击
        DingWeiZuoWuqi.prototype.fashe = function (angel, suke, now) {
            var angle = this.fc.angle + (-90 - 360) / 180 * Math.PI;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            // sy = sy * -1;
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return DingWeiZuoWuqi;
    }(djwq.DJWQBase));
    djwq.DingWeiZuoWuqi = DingWeiZuoWuqi;
    __reflect(DingWeiZuoWuqi.prototype, "djwq.DingWeiZuoWuqi");
})(djwq || (djwq = {}));
//# sourceMappingURL=DingWeiZuoWuqi.js.map