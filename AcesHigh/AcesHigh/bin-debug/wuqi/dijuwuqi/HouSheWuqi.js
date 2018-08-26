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
    var HouSheWuqi = (function (_super) {
        __extends(HouSheWuqi, _super);
        function HouSheWuqi(moKuaiPost, shapeType, bitName, fc) {
            return _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DING_WEI) || this;
        }
        //射击
        HouSheWuqi.prototype.fashe = function (angel, suke, now) {
            var angle = this.fc.angle;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            var liliang = egret.Point.create(sx, sy);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return HouSheWuqi;
    }(djwq.DJWQBase));
    djwq.HouSheWuqi = HouSheWuqi;
    __reflect(HouSheWuqi.prototype, "djwq.HouSheWuqi");
})(djwq || (djwq = {}));
//# sourceMappingURL=HouSheWuqi.js.map