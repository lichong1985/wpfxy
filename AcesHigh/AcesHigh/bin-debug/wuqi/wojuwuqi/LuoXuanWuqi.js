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
            _this.zd1 = null;
            _this.zd2 = null;
            _this.zd3 = null;
            _this.zd4 = null;
            _this.zd5 = null;
            //当前螺旋子弹的数量
            _this.zd_number = 0;
            _this.level = level;
            _this.cd = 5000;
            return _this;
        }
        LuoXuanWuqi.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
            if (this.level < 3 && this.zd_number == 3) {
                return;
            }
            if (this.level < 5 && this.zd_number == 4) {
                return;
            }
            if (this.zd_number == 5) {
                return;
            }
            var zd = this.diu(this.wuqi_type, egret.Point.create(0, 0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0);
            //添加子弹
            this.addZD(zd);
        };
        LuoXuanWuqi.prototype.removeZD = function (n) {
            this.zd_number--;
            if (n == 1) {
                this.zd1 = null;
            }
            if (n == 2) {
                this.zd2 = null;
            }
            if (n == 3) {
                this.zd3 = null;
            }
            if (n == 4) {
                this.zd4 = null;
            }
            if (n == 5) {
                this.zd5 = null;
            }
        };
        //添加子弹
        LuoXuanWuqi.prototype.addZD = function (zd) {
            this.zd_number++;
            if (this.zd1 == null) {
                this.zd1 = zd;
                this.zd1.hao_ma = 1;
                this.zd1.wu = this;
                this.zd1.wz = 0;
                return;
            }
            if (this.zd2 == null) {
                this.zd2 = zd;
                this.zd2.hao_ma = 2;
                this.zd2.wu = this;
                this.zd2.wz = this.getAngle();
                return;
            }
            if (this.zd3 == null) {
                this.zd3 = zd;
                this.zd3.hao_ma = 3;
                this.zd3.wu = this;
                this.zd3.wz = this.getAngle() * 2;
                return;
            }
            if (this.level >= 3) {
                if (this.zd4 == null) {
                    this.zd4 = zd;
                    this.zd4.hao_ma = 4;
                    this.zd4.wu = this;
                    this.zd4.wz = this.getAngle() * 3;
                    return;
                }
            }
            if (this.level == 5) {
                if (this.zd5 == null) {
                    this.zd5 = zd;
                    this.zd5.hao_ma = 5;
                    this.zd5.wu = this;
                    this.zd5.wz = this.getAngle() * 4;
                    return;
                }
            }
        };
        LuoXuanWuqi.prototype.getAngle = function () {
            if (this.level >= 3 && this.level < 5) {
                return Math.PI * 2 / 4;
            }
            if (this.level == 5) {
                return Math.PI * 2 / 5;
            }
            return Math.PI * 2 / 3;
        };
        return LuoXuanWuqi;
    }(wuqi.WuQiBase));
    wjwq.LuoXuanWuqi = LuoXuanWuqi;
    __reflect(LuoXuanWuqi.prototype, "wjwq.LuoXuanWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=LuoXuanWuqi.js.map