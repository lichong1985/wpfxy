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
    var JianSuWuqi = (function (_super) {
        __extends(JianSuWuqi, _super);
        function JianSuWuqi(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.JIAN_SU) || this;
            _this.sudu = 25;
            _this.wq_numb = 4;
            return _this;
        }
        //射击
        JianSuWuqi.prototype.fashe = function (angel, suke, now) {
            var angle = this.fc.angle;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            var xx = -(this.fc.position[0] - suke.position[0]);
            var xy = -(this.fc.position[1] - suke.position[1]);
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return JianSuWuqi;
    }(djwq.DJWQBase));
    djwq.JianSuWuqi = JianSuWuqi;
    __reflect(JianSuWuqi.prototype, "djwq.JianSuWuqi");
})(djwq || (djwq = {}));
//# sourceMappingURL=JianSuWuqi.js.map