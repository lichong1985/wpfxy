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
    var LuoXuanWuqi = (function (_super) {
        __extends(LuoXuanWuqi, _super);
        function LuoXuanWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_7", wuqi.WUQI_TYPE.LUO_XUAN, fc) || this;
            _this.level = level;
            _this.cd = 5000;
            return _this;
        }
        LuoXuanWuqi.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, egret.Point.create(0, 0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0);
        };
        return LuoXuanWuqi;
    }(wuqi.WuQiBase));
    wjwq.LuoXuanWuqi = LuoXuanWuqi;
    __reflect(LuoXuanWuqi.prototype, "wjwq.LuoXuanWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=LuoXuanWuqi.js.map