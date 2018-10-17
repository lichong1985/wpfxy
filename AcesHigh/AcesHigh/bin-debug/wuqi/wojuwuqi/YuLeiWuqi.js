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
            var _this = _super.call(this, mokaiPos, shType, "us_wq_6", wuqi.WUQI_TYPE.YU_LEI, fc) || this;
            _this.small_cd = 5000;
            _this.mark_small_time = 0;
            //每次发射的数量
            _this.shu_liang = 0;
            _this.shu_liang_mark = 5;
            _this.level = level;
            _this.cd = 800;
            _this.shu_liang_mark += level;
            _this.shu_liang = _this.shu_liang_mark;
            return _this;
        }
        YuLeiWuqi.prototype.fashe = function (angel, suke, now) {
            now = egret.getTimer();
            //发射鱼雷
            if ((now - this.mark_small_time) > this.small_cd) {
                if (this.shu_liang > 0) {
                    //发射子弹
                    _super.prototype.fashe.call(this, angel, suke, now);
                    this.diu(this.wuqi_type, egret.Point.create(0, 0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0);
                }
                else {
                    this.mark_small_time = now + this.small_cd;
                    this.shu_liang = this.shu_liang_mark;
                }
                this.shu_liang--;
            }
        };
        return YuLeiWuqi;
    }(wuqi.WuQiBase));
    wjwq.YuLeiWuqi = YuLeiWuqi;
    __reflect(YuLeiWuqi.prototype, "wjwq.YuLeiWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=YuLeiWuqi.js.map