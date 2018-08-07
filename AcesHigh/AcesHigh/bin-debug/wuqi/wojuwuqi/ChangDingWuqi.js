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
    var ChangDingWuqi = (function (_super) {
        __extends(ChangDingWuqi, _super);
        function ChangDingWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_8", wuqi.WUQI_TYPE.CHANG_DING, fc) || this;
            _this.level = level;
            _this.cd = 2000;
            _this.sudu = 1;
            return _this;
        }
        ChangDingWuqi.prototype.fashe = function (angel, suke, now) {
            this.diu(this.wuqi_type, egret.Point.create(0, this.sudu), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.fc.angle);
        };
        return ChangDingWuqi;
    }(wuqi.WuQiBase));
    wjwq.ChangDingWuqi = ChangDingWuqi;
    __reflect(ChangDingWuqi.prototype, "wjwq.ChangDingWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=ChangDingWuqi.js.map