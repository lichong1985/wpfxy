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
    var ShiJianYiDongAi = (function (_super) {
        __extends(ShiJianYiDongAi, _super);
        function ShiJianYiDongAi(fc, mt, xz, mz, run_time, time_, xs) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //减速次数上线
            _this.jian_su_num = 20;
            //减速标记
            _this.jian_su_x_mark = 0;
            _this.jian_su_y_mark = 0;
            //力量对速度的印象
            _this.jian_su_li_pi = 5 * 1.8;
            //实际作用力
            _this.jian_su_li = 5;
            //达成
            _this.x_da_cheng = false;
            _this.y_da_cheng = false;
            //作用力
            _this.force_x = 0;
            _this.force_y = 0;
            //总距离
            _this.zong_ju_li_x = 0;
            _this.zong_ju_li_y = 0;
            _this.yp = 0;
            _this.cs_y = 0;
            _this.start_pos = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.time_ = time_;
            _this.xs = xs;
            _this.max_time = xs * 1000;
            //初始化 减速参数
            _this.zong_ju_li_x = Math.abs(_this.fc.position[0] - _this.fc.toPoint.x);
            _this.zong_ju_li_y = Math.abs(_this.fc.position[1] - _this.fc.toPoint.y);
            _this.mark_y = egret.getTimer();
            _this.max_force = _this.fc.cs_mass * 1; //( 力与质量 1：1)
            return _this;
            //公式 
            //S=V(初)*T-1/2at^2
            //Vt＝Vo+at 
            //f1.8=ma
            //a=(f*1.8)/m
            //f=(m*a)/1.8
        }
        //----------------------------初始减速----------------------------------
        ShiJianYiDongAi.prototype.cs_jansu_x = function () {
            if (this.mu_biao_wz_X == 1 && this.fc.velocity[0] < 0) {
                return;
            }
            if (this.mu_biao_wz_X == 3 && this.fc.velocity[0] > 0) {
                return;
            }
            if (Math.abs(this.fc.velocity[0]) < 0.01) {
                return;
            }
            // egret.log("XXXXXXJJJJJJJJJJJ")
            this.x_jian_su();
        };
        ShiJianYiDongAi.prototype.cs_jansu_y = function () {
            if (this.mu_biao_wz_Y == 1 && this.fc.velocity[1] < 0) {
                return;
            }
            if (this.mu_biao_wz_Y == 3 && this.fc.velocity[1] > 0) {
                return;
            }
            if (Math.abs(this.fc.velocity[1]) < 0.01) {
                return;
            }
            // egret.log("YYYYYYYYYJJJJJJJJJJJ")
            this.y_jian_su();
        };
        //------------------------------------------------------------------
        //更新状态
        ShiJianYiDongAi.prototype.upType = function () {
            //位置达到
            if (!this.x_da_cheng) {
                this.x_da_cheng = this.is_x_over();
                this.x_type = 3;
            }
            if (!this.y_da_cheng) {
                this.y_da_cheng = this.is_y_over();
                this.y_type = 3;
            }
            if (this.x_da_cheng) {
                this.x_type = 1;
                // egret.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:" + (egret.getTimer() - this.mark_y));
            }
            if (this.y_da_cheng) {
                this.y_type = 1;
                // egret.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY:" + (egret.getTimer() - this.mark_y));
            }
        };
        //----------------------------减速---------------------------------------
        ShiJianYiDongAi.prototype.x_jian_su = function () {
            var a = -this.fc.velocity[0] * 2;
            var f = (this.fc.cs_mass * a) / 1.8;
            if (f > 0 && this.force_x < f) {
                this.force_x = f;
            }
            if (f < 0 && this.force_x > f) {
                this.force_x = f;
            }
        };
        ShiJianYiDongAi.prototype.y_jian_su = function () {
            var a = -this.fc.velocity[1] * 2;
            var f = (this.fc.cs_mass * a) / 1.8;
            if (f > 0 && this.force_y < f) {
                this.force_y = f;
            }
            if (f < 0 && this.force_y > f) {
                this.force_y = f;
            }
        };
        //----------------------------------------------------------------
        //------------------------加速------------------------------------
        ShiJianYiDongAi.prototype.jia_su_x = function () {
            var s = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            var v = this.fc.velocity[0];
            var t = (this.max_time - (egret.getTimer() - this.mark_y)) / 1000;
            var m = this.fc.cs_mass;
            if (this.mu_biao_wz_X == 1) {
                s = this.zong_ju_li_x * -1;
            }
            //S*1.8=V*T+1/2at^2
            //((s*1.8)-v*t)*2/(t*t)=a
            //f1.8=ma
            //a=(f*1.8)/m
            //f=(m*a)/1.8
            var a = ((s * 1.8) - v * t) * 2 / (t * t);
            var f = (a * m) / 1.8;
            this.force_x = f;
        };
        ShiJianYiDongAi.prototype.jia_su_y = function () {
            var s = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            var v = this.fc.velocity[1];
            var t = (this.max_time - (egret.getTimer() - this.mark_y)) / 1000;
            var m = this.fc.cs_mass;
            if (this.mu_biao_wz_Y == 1) {
                s = this.zong_ju_li_y * -1;
            }
            var a = ((s * 1.8) - v * t) * 2 / (t * t);
            var f = (a * m) / 1.8;
            this.force_y = f;
        };
        //-------------------------------------------------------------
        ShiJianYiDongAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            this.upType();
            // if (time < 10000) {
            //     this.mark_y = time;
            //     return;
            // }
            //判断是否到达目的地 并修改状态
            if (this.x_da_cheng && this.y_da_cheng) {
                this.upOver();
                return;
            }
            if (this.x_type == 1) {
                this.x_jian_su();
            }
            if (this.x_type == 2) {
                this.force_x = 0;
            }
            //先减速再加速
            if (this.x_type == 3) {
                this.jia_su_x();
                this.cs_jansu_x();
            }
            if (this.y_type == 1) {
                this.y_jian_su();
            }
            if (this.y_type == 2) {
                this.force_y = 0;
            }
            //先减速再加速
            if (this.y_type == 3) {
                this.jia_su_y();
                this.cs_jansu_y();
            }
            var vx = this.fc.velocity[0];
            var vy = this.fc.velocity[1];
            if (vx > 0 && vx > 5) {
                vx = 5;
                this.force_x = 0;
            }
            if (vx < 0 && vx < -5) {
                vx = -5;
                this.force_x = 0;
            }
            if (vy > 0 && vy > 5) {
                vy = 5;
                this.force_y = 0;
            }
            if (vy < 0 && vy < -5) {
                vy = -5;
                this.force_y = 0;
            }
            this.fc.velocity = [vx, vy];
            //施加力
            this.fc.force = [this.force_x, this.force_y];
        };
        return ShiJianYiDongAi;
    }(ai.AiBase));
    ai.ShiJianYiDongAi = ShiJianYiDongAi;
    __reflect(ShiJianYiDongAi.prototype, "ai.ShiJianYiDongAi");
})(ai || (ai = {}));
//# sourceMappingURL=ShiJianYIDongAi.js.map