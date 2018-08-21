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
    var TKXZZZZZZB = (function (_super) {
        __extends(TKXZZZZZZB, _super);
        function TKXZZZZZZB(fc, mt, xz, mz, run_time, time_) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.x_jl = 0;
            _this.y_jl = 0;
            //误差范围
            _this.wu_cha = 0.3;
            //速度误差
            _this.sudu_wu_cha = 0.1;
            //当前相对与目标点的位置
            _this.wz = ai.WEI_ZHI.NN;
            //x方向上的速度
            _this.x_su = 0;
            //y方向上的速度
            _this.y_su = 0;
            _this.da_cheng_x = false;
            _this.da_cheng_y = false;
            // 1 p2 力= 3.27 A(加速度)
            _this.pi = 3.27;
            _this.time_ = time_;
            _this.start_point = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.x_jl = _this.fc.toPoint.x - _this.fc.position[0];
            _this.y_jl = _this.fc.toPoint.y - _this.fc.position[1];
            _this.x_su = _this.fc.velocity[0];
            _this.y_su = _this.fc.velocity[1];
            // // s= vt*1.8 + a*1.8*tt/2*1.8
            //a=(s-vt*1.8)/1.8*2/1.8/tt
            var xf = (_this.x_jl - _this.x_su * _this.time_ * 1.8) / (_this.time_ * _this.time_) / 1.62;
            var yf = (_this.y_jl - _this.y_su * _this.time_ * 1.8) / (_this.time_ * _this.time_) / 1.62;
            _this.x_fc = xf / _this.pi;
            _this.y_fc = yf / _this.pi;
            if (Math.abs(_this.fc.position[0] - _this.fc.toPoint.x) < 0.1) {
                // this.x_fc = 0;
                _this.da_cheng_x = true;
            }
            if (Math.abs(_this.fc.position[1] - _this.fc.toPoint.y) < 0.1) {
                // this.x_fc = 0;
                _this.da_cheng_y = true;
            }
            egret.log("???????????:" + _this.x_fc + " -- " + _this.y_fc + " | " + _this.x_su + " -- " + _this.y_su + " | " + _this.x_jl + " -- " + _this.y_jl);
            return _this;
        }
        TKXZZZZZZB.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //------------------判断通过情况-----------------------
            if (this.start_point.x > this.fc.toPoint.x) {
                if (this.fc.position[0] < this.fc.toPoint.x) {
                    this.da_cheng_x = true;
                    // egret.log("DDDDDDDDDDDDDDDD --- X1")
                }
            }
            else {
                if (this.fc.position[0] > this.fc.toPoint.x) {
                    this.da_cheng_x = true;
                    // egret.log("DDDDDDDDDDDDDDDD --- X2")
                }
            }
            if (this.start_point.y > this.fc.toPoint.y) {
                if (this.fc.position[1] < this.fc.toPoint.y) {
                    this.da_cheng_y = true;
                    // egret.log("DDDDDDDDDDDDDDDD --- Y1" + this.fc.position[0] + " ** " + this.fc.toPoint.y)
                }
            }
            else {
                if (this.fc.position[1] > this.fc.toPoint.y) {
                    this.da_cheng_y = true;
                    // egret.log("DDDDDDDDDDDDDDDD --- Y2")
                }
            }
            //------------------------加速----------------------------
            this.fc.force = [this.x_fc, this.y_fc];
            //----------------达成阶段--------------
            //判断是否到达目的地 并修改状态
            if (this.da_cheng_x && this.da_cheng_y) {
                egret.log("TTTTTTTTTTTTTTTTTTTTTTT");
                this.upOver();
                return;
            }
        };
        return TKXZZZZZZB;
    }(ai.AiBase));
    ai.TKXZZZZZZB = TKXZZZZZZB;
    __reflect(TKXZZZZZZB.prototype, "ai.TKXZZZZZZB");
})(ai || (ai = {}));
//# sourceMappingURL=TKXZZZZZB.js.map