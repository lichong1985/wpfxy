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
    //直射类武器
    var ZhiSheWuQi = (function (_super) {
        __extends(ZhiSheWuQi, _super);
        function ZhiSheWuQi(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.ZHI_SHE) || this;
            _this.cd = 200;
            return _this;
        }
        //射击
        ZhiSheWuQi.prototype.fashe = function (angel, suke, now) {
            var angle = Math.atan2((suke.position[1] - this.fc.position[1]), (suke.position[0] - this.fc.position[0])) + Math.PI * 0.5;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            if (suke.position[1] < this.fc.position[1]) {
                sy = sy * -1;
            }
            var xx = -(this.fc.position[0] - suke.position[0]);
            var xy = -(this.fc.position[1] - suke.position[1]);
            // let liliang = Tools.bilv(xx, xy, 5);
            var liliang = egret.Point.create(sx, sy);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return ZhiSheWuQi;
    }(djwq.DJWQBase));
    djwq.ZhiSheWuQi = ZhiSheWuQi;
    __reflect(ZhiSheWuQi.prototype, "djwq.ZhiSheWuQi");
})(djwq || (djwq = {}));
//# sourceMappingURL=ZhiSheWuQi.js.map