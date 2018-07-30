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
var ai;
(function (ai) {
    var DaoHuangAi = (function (_super) {
        __extends(DaoHuangAi, _super);
        function DaoHuangAi(fc) {
            var _this = _super.call(this, fc) || this;
            //角速度
            _this.xs = 1;
            _this.is_chick = false; //是否完成
            _this.is_upFX = true; //是否更新旋转方向
            return _this;
        }
        DaoHuangAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //判断飞船目的地
            if (!this.fc.toPoint) {
                return;
            }
            var angle = Math.atan2((this.fc.toPoint.y - this.fc.position[1]), (this.fc.toPoint.x - this.fc.position[0])) + Math.PI * 0.5;
            var zx = (Math.PI + 1.57);
            var js = this.xs;
            //画重点
            if (this.fc.angle > zx) {
                this.fc.angle = this.fc.angle - 2 * Math.PI;
            }
            //连续画重点
            if (this.fc.angle < -Math.PI * 0.5) {
                this.fc.angle = zx;
            }
            //角度差距
            var jc = Math.abs(this.fc.angle - angle);
            //转向递减
            if (jc < 1) {
                js = this.xs * jc;
                if (js < 0.1) {
                    js = 0.1;
                }
            }
            if (jc < 0.1) {
                this.fc.angularVelocity = 0;
                if (!this.is_chick) {
                    this.fc.ztj.mT = zhuangtaiji.ZT_TYPE.MIAO_ZHUN_OVER;
                    this.is_chick = true;
                }
                this.is_upFX = true;
                return;
            }
            if (angle >= 0 && this.fc.angle >= 0) {
                if (Math.abs(angle - this.fc.angle) < Math.PI) {
                    if (angle < this.fc.angle) {
                        this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                    }
                    else {
                        this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                    }
                }
                else {
                    if (angle < this.fc.angle) {
                        this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                    }
                    else {
                        this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                    }
                }
            }
            if (angle < 0 && this.fc.angle >= 0) {
                if (Math.abs(angle) + this.fc.angle < Math.PI) {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                }
                else {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                }
            }
            if (this.fc.angle < 0 && angle >= 0) {
                if (Math.abs(angle) + this.fc.angle < Math.PI) {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                }
                else {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                }
            }
            if (this.fc.angle < 0 && angle < 0) {
                if (this.fc.angle < angle) {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                }
                else {
                    this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                }
            }
            if (this.is_upFX) {
                //顺时针
                if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Clockwise) {
                    this.fc.angularVelocity = -js;
                }
                if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Anti_clockwise) {
                    this.fc.angularVelocity = js;
                }
                this.is_upFX = false;
            }
        };
        return DaoHuangAi;
    }(ai.AiBase));
    ai.DaoHuangAi = DaoHuangAi;
    __reflect(DaoHuangAi.prototype, "ai.DaoHuangAi");
})(ai || (ai = {}));
//# sourceMappingURL=DaoHuangAi.js.map