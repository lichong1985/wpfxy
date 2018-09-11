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
    var PaoTaiWuqi = (function (_super) {
        __extends(PaoTaiWuqi, _super);
        function PaoTaiWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_5", wuqi.WUQI_TYPE.DING_XIANG, fc) || this;
            _this.small_cd = 1000;
            _this.mark_small_time = 0;
            //每次发射的数量
            _this.shu_liang = 0;
            _this.shu_liang_mark = 5;
            _this.level = level;
            _this.shu_liang_mark = level;
            _this.cd = 200;
            _this.sudu = 9;
            return _this;
        }
        PaoTaiWuqi.prototype.fashe = function (angel, suke, now) {
            if ((now - this.mark_small_time) > this.small_cd) {
                if (this.shu_liang > 0) {
                    var zj = this.mark_tiaget();
                    if (zj) {
                        var angel_1 = this.getAngel(zj);
                        var liliang = this.getLiliang(zj, angel_1);
                        //发射子弹
                        this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.WO_JUN_ZIDAN, angel_1);
                    }
                    this.shu_liang--;
                }
                else {
                    this.mark_small_time = now + this.small_cd;
                    this.shu_liang = this.shu_liang_mark;
                }
            }
        };
        //计算角度
        PaoTaiWuqi.prototype.getAngel = function (zj) {
            return Math.atan2((zj.position[1] - this.fc.position[1]), (zj.position[0] - this.fc.position[0])) + Math.PI * 0.5;
        };
        //标记最近的飞船
        PaoTaiWuqi.prototype.mark_tiaget = function () {
            var zj;
            var jl = -1;
            for (var _i = 0, _a = this.fc.battle_scene.dijis; _i < _a.length; _i++) {
                var ff = _a[_i];
                if (!zj) {
                    zj = ff;
                    if (ff.hx) {
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
                return zj;
            }
            return null;
        };
        // 获取设计向量
        PaoTaiWuqi.prototype.getLiliang = function (zj, angle) {
            if (zj) {
                var sx = Math.sin(angle) * this.sudu;
                var sy = Math.cos(angle) * this.sudu;
                sy *= -1;
                var liliang = egret.Point.create(sx, sy);
                return liliang;
            }
            return null;
        };
        return PaoTaiWuqi;
    }(wuqi.WuQiBase));
    wjwq.PaoTaiWuqi = PaoTaiWuqi;
    __reflect(PaoTaiWuqi.prototype, "wjwq.PaoTaiWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=PaoTaiWuqi.js.map