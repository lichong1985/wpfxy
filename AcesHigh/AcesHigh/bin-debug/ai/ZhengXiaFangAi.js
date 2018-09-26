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
    var ZhengXiaFangAi = (function (_super) {
        __extends(ZhengXiaFangAi, _super);
        function ZhengXiaFangAi(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.xs = 4;
            //需要转到的角度
            _this.angle = 0;
            _this.xs_hu = 1;
            //飞船实际需要面准的部位
            _this.jian_tou = -Math.PI * 0.5;
            return _this;
        }
        ZhengXiaFangAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //角度测算
            this.angle = -Math.PI * 0.5;
            var jd = this.angle * 180 / Math.PI;
            if (this.angle < 0) {
                this.angle = Math.PI * 2 + this.angle;
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
            //方向计算
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
            if (jc > (Math.PI + Math.PI * 0.5)) {
                jc = Math.PI * 2 - jc;
            }
            var pi = jc / Math.PI;
            js = this.xs * pi;
            if (jc < 0.05) {
                this.fc.angularVelocity = 0;
                return;
            }
            this.fc.angularVelocity = this.xs_hu * js;
        };
        return ZhengXiaFangAi;
    }(ai.AiBase));
    ai.ZhengXiaFangAi = ZhengXiaFangAi;
    __reflect(ZhengXiaFangAi.prototype, "ai.ZhengXiaFangAi");
})(ai || (ai = {}));
//# sourceMappingURL=ZhengXiaFangAi.js.map