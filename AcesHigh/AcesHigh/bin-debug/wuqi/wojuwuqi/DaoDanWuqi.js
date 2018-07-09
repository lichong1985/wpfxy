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
    var DaoDanWuqi = (function (_super) {
        __extends(DaoDanWuqi, _super);
        function DaoDanWuqi(mokaiPos, shType, name, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, name, wuqi.WUQI_TYPE.DAO_DAN, fc) || this;
            _this.small_cd = 2000;
            _this.mark_small_time = 0;
            //每次发射的数量
            _this.shu_liang = 0;
            _this.shu_liang_mark = 5;
            _this.level = level;
            _this.shu_liang_mark = level;
            _this.cd = 150;
            return _this;
        }
        DaoDanWuqi.prototype.fashe = function (angel, suke, now) {
            if ((now - this.mark_small_time) > this.small_cd) {
                if (this.shu_liang > 0) {
                    var angle = this.fc.angle;
                    var liliang = egret.Point.create(0, this.sudu);
                    if (this.mark_tiaget()) {
                        this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.WO_JUN_ZIDAN, angle);
                    }
                    this.shu_liang--;
                }
                else {
                    this.mark_small_time = now + this.small_cd;
                    this.shu_liang = this.shu_liang_mark;
                }
            }
        };
        //标记最近的飞船
        DaoDanWuqi.prototype.mark_tiaget = function () {
            var zj;
            var jl = -1;
            for (var _i = 0, _a = this.fc.battle_scene.dijis; _i < _a.length; _i++) {
                var ff = _a[_i];
                if (!zj) {
                    zj = ff;
                    if (ff) {
                        jl = egret.Point.distance(egret.Point.create(ff.hx.x, ff.hx.y), egret.Point.create(this.fc.hx.x, this.fc.hx.y));
                    }
                    continue;
                }
                //根据 距离判断先打哪个飞机
                var ju_li = egret.Point.distance(egret.Point.create(ff.hx.x, ff.hx.y), egret.Point.create(this.fc.hx.x, this.fc.hx.y));
                if (ju_li < jl) {
                    zj = ff;
                }
            }
            if (zj) {
                this.tiaget_fc = zj;
                return true;
            }
            return false;
        };
        return DaoDanWuqi;
    }(wuqi.WuQiBase));
    wjwq.DaoDanWuqi = DaoDanWuqi;
    __reflect(DaoDanWuqi.prototype, "wjwq.DaoDanWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=DaoDanWuqi.js.map