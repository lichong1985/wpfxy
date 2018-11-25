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
    var DingWeiWuqi = (function (_super) {
        __extends(DingWeiWuqi, _super);
        function DingWeiWuqi(moKuaiPost, shapeType, bitName, fc, fx) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DING_WEI) || this;
            _this.fx = 1;
            _this.fx = fx;
            _this.wq_numb = 1;
            return _this;
        }
        // 1 前  2 后 3左 4右
        //射击
        DingWeiWuqi.prototype.fashe = function (angel, suke, now) {
            var angle;
            if (this.fx == 1) {
                angle = this.fc.angle;
            }
            if (this.fx == 2) {
                angle = this.fc.angle + 180 / 180 * Math.PI;
            }
            if (this.fx == 3) {
                angle = this.fc.angle - 90 / 180 * Math.PI;
            }
            if (this.fx == 4) {
                angle = this.fc.angle + 90 / 180 * Math.PI;
            }
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return DingWeiWuqi;
    }(djwq.DJWQBase));
    djwq.DingWeiWuqi = DingWeiWuqi;
    __reflect(DingWeiWuqi.prototype, "djwq.DingWeiWuqi");
})(djwq || (djwq = {}));
//# sourceMappingURL=DingWeiWuqi.js.map