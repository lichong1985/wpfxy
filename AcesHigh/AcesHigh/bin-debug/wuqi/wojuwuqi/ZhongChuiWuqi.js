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
    var ZhongChuiWuqi = (function (_super) {
        __extends(ZhongChuiWuqi, _super);
        function ZhongChuiWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_9", wuqi.WUQI_TYPE.ZHONG_CHUI, fc) || this;
            _this.level = level;
            _this.cd = 2000;
            return _this;
        }
        ZhongChuiWuqi.prototype.fashe = function (angel, suke, now) {
            this.diu(this.wuqi_type, egret.Point.create(0, this.sudu), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.fc.angle);
        };
        return ZhongChuiWuqi;
    }(wuqi.WuQiBase));
    wjwq.ZhongChuiWuqi = ZhongChuiWuqi;
    __reflect(ZhongChuiWuqi.prototype, "wjwq.ZhongChuiWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=ZhongChuiWuqi.js.map