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
    var SanDanWuqi = (function (_super) {
        __extends(SanDanWuqi, _super);
        function SanDanWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_2", wuqi.WUQI_TYPE.SAN_DAN, fc) || this;
            _this.A0 = 0 * Math.PI / 180;
            _this.A5 = 5 * Math.PI / 180;
            _this.A10 = 10 * Math.PI / 180;
            _this.A15 = 15 * Math.PI / 180;
            _this.FA5 = -5 * Math.PI / 180;
            _this.FA10 = -10 * Math.PI / 180;
            _this.FA15 = -15 * Math.PI / 180;
            _this.level = level;
            _this.cd = 2000;
            return _this;
        }
        SanDanWuqi.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
            if (this.level >= 1) {
                this.diu(this.wuqi_type, this.getLiliang(this.A5), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A5);
                this.diu(this.wuqi_type, this.getLiliang(this.FA5), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.FA5);
            }
            if (this.level >= 3) {
                // this.diu(this.wuqi_type, this.getLiliang(this.A0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A0);
                this.diu(this.wuqi_type, this.getLiliang(this.A10), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A10);
                this.diu(this.wuqi_type, this.getLiliang(this.FA10), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.FA10);
            }
            if (this.level >= 5) {
                this.diu(this.wuqi_type, this.getLiliang(this.A0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A0);
                this.diu(this.wuqi_type, this.getLiliang(this.A15), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A15);
                this.diu(this.wuqi_type, this.getLiliang(this.FA15), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.FA15);
            }
        };
        SanDanWuqi.prototype.getLiliang = function (angel) {
            return egret.Point.create(Math.sin(-angel) * this.sudu, Math.cos(-angel) * this.sudu);
        };
        return SanDanWuqi;
    }(wuqi.WuQiBase));
    wjwq.SanDanWuqi = SanDanWuqi;
    __reflect(SanDanWuqi.prototype, "wjwq.SanDanWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=SanDanWuqi.js.map