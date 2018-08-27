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
    var MiaoZhun = (function (_super) {
        __extends(MiaoZhun, _super);
        function MiaoZhun(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //角速度
            _this.xs = 4;
            //需要转到的角度
            _this.angle = 0;
            _this.xs_hu = 1;
            //飞船实际需要面准的部位
            _this.jian_tou = -Math.PI * 0.5;
            return _this;
        }
        MiaoZhun.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //角度测算
            this.angle = Math.atan2((this.fc.battle_scene.sk.position[1] - this.fc.position[1]), (this.fc.battle_scene.sk.position[0] - this.fc.position[0]));
            this.angle = this.angle % (Math.PI * 2);
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
            var m = 0;
            // if (fcAng > (Math.PI + Math.PI * 0.5) && this.angle < Math.PI * 0.5) {
            //     m = Math.PI * 2 - fcAng + this.angle
            // }
            // if (this.angle > (Math.PI + Math.PI * 0.5) && fcAng < Math.PI * 0.5) {
            //     m = Math.PI * 2 - this.angle + fcAng
            // }
            egret.log("FFF：" + jc + " -- " + m + " -- " + fcAng + " -- " + this.angle);
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
            // if (fcAng > (Math.PI + Math.PI * 0.5) && this.angle < Math.PI * 0.5) {
            //     this.xs_hu = -1;
            // }
            // if (this.angle > (Math.PI + Math.PI * 0.5) && fcAng < Math.PI * 0.5) {
            //     this.xs_hu = 1;
            // }
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
        return MiaoZhun;
    }(ai.AiBase));
    ai.MiaoZhun = MiaoZhun;
    __reflect(MiaoZhun.prototype, "ai.MiaoZhun");
})(ai || (ai = {}));
//# sourceMappingURL=MiaoZhunAi.js.map