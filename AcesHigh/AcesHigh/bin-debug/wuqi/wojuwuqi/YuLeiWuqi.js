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
var wjwq;
(function (wjwq) {
    var YuLeiWuqi = (function (_super) {
        __extends(YuLeiWuqi, _super);
        function YuLeiWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_6_png", wuqi.WUQI_TYPE.YU_LEI, fc) || this;
            _this.level = level;
            _this.cd = 1000;
            if (level == 1) {
                _this.cd = 3000;
            }
            if (level == 2) {
                _this.cd = 2500;
            }
            if (level == 3) {
                _this.cd = 2000;
            }
            if (level == 4) {
                _this.cd = 1500;
            }
            if (level == 1) {
                _this.cd = 1000;
            }
            return _this;
        }
        YuLeiWuqi.prototype.fashe = function (angel, suke, now) {
            //发射鱼雷
            this.diu(this.wuqi_type, egret.Point.create(0, 0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0);
        };
        return YuLeiWuqi;
    }(wuqi.WuQiBase));
    wjwq.YuLeiWuqi = YuLeiWuqi;
    __reflect(YuLeiWuqi.prototype, "wjwq.YuLeiWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=YuLeiWuqi.js.map