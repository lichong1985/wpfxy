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
    var GenZhongWuqi = (function (_super) {
        __extends(GenZhongWuqi, _super);
        function GenZhongWuqi(moKuaiPost, shapeType, bitName, fc, fx) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.GEN_ZHONG) || this;
            _this.small_cd = 2000;
            _this.mark_small_time = 0;
            //每次发射的数量
            _this.shu_liang = 0;
            _this.shu_liang_mark = 5;
            _this.fx = 1;
            _this.shu_liang_mark = 5;
            _this.shu_liang = _this.shu_liang_mark;
            _this.sudu = 1.2;
            _this.fx = fx;
            _this.wq_numb = 3;
            return _this;
        }
        // 1 前  2 后 3左 4右
        //射击
        GenZhongWuqi.prototype.fashe = function (angel, suke, now) {
            var angle;
            if (this.fx == 1 || this.fx == 2) {
                angle = this.fc.angle;
            }
            if (this.fx == 3) {
                angle = this.fc.angle + (-90 - 360) / 180 * Math.PI;
            }
            if (this.fx == 4) {
                angle = this.fc.angle + (90 - 360) / 180 * Math.PI;
            }
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            if (this.fx == 1) {
                sy = sy * -1;
            }
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return GenZhongWuqi;
    }(djwq.DJWQBase));
    djwq.GenZhongWuqi = GenZhongWuqi;
    __reflect(GenZhongWuqi.prototype, "djwq.GenZhongWuqi");
})(djwq || (djwq = {}));
//# sourceMappingURL=GenZhongWuqi.js.map