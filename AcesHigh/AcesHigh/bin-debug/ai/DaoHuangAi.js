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
        function DaoHuangAi(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //角速度
            _this.xs = 2;
            _this.is_chick = false; //是否完成
            _this.is_upFX = true; //是否更新旋转方向
            _this.angle = 0;
            _this.xs_hu = 1;
            _this.jian_tou = -Math.PI * 0.5;
            return _this;
        }
        DaoHuangAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //判断飞船目的地
            if (!this.fc.toPoint) {
                return;
            }
            //角度测算
            if (this.is_upFX) {
                this.angle = Math.atan2((this.fc.toPoint.y - this.fc.position[1]), (this.fc.toPoint.x - this.fc.position[0]));
                this.angle = this.angle % (Math.PI * 2);
                if (this.angle < 0) {
                    this.angle = Math.PI * 2 + this.angle;
                }
            }
            var fcAng = this.fc.angle + this.jian_tou;
            //规范化角度数值
            fcAng = fcAng % (Math.PI * 2);
            if (fcAng < 0) {
                fcAng = Math.PI * 2 + fcAng;
            }
            var js = this.xs;
            //角度差距
            var jc = Math.abs(fcAng - this.angle);
            jc = jc % (Math.PI * 2);
            //方向计算
            if (this.is_upFX) {
                if (fcAng >= this.angle) {
                    if (jc > Math.PI) {
                        this.xs_hu = 1;
                    }
                    else {
                        this.xs_hu = -1;
                    }
                }
                if (fcAng < this.angle) {
                    if (jc > Math.PI) {
                        this.xs_hu = -1;
                    }
                    else {
                        this.xs_hu = 1;
                    }
                }
                this.is_upFX = false;
            }
            var pi = jc / Math.PI;
            js = this.xs * pi;
            if (jc < 0.05) {
                this.fc.angularVelocity = 0;
                if (!this.is_chick) {
                    this.upOver();
                }
                return;
            }
            this.fc.angularVelocity = this.xs_hu * js;
        };
        return DaoHuangAi;
    }(ai.AiBase));
    ai.DaoHuangAi = DaoHuangAi;
    __reflect(DaoHuangAi.prototype, "ai.DaoHuangAi");
})(ai || (ai = {}));
//# sourceMappingURL=DaoHuangAi.js.map