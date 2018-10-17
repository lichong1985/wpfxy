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
    var TKZXSINGOAI = (function (_super) {
        __extends(TKZXSINGOAI, _super);
        function TKZXSINGOAI(fc, mt, xz, mz, run_time, time_, xs) {
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
            _this.start_pos = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.time_ = time_;
            _this.xs = xs;
            _this.max_force = _this.fc.cs_mass;
            // egret.log(this.xs_x + " -- " + this.xs_y + " -- " + this.xs);
            //f * 1.8=a * m;
            //S/1.8=Vt^2+a(t^2)/2
            //s/1.8=xs^2+(f*1.8)/m*(t^2)/2
            _this.upType();
            egret.log("TTTTTTTTTTTTT:" + _this.getMaxTimeX() + " -- " + _this.getMaxTimeY());
            return _this;
        }
        //获取 x 方向 末速度
        TKZXSINGOAI.prototype.getVtX = function () {
            var mb_s = 0;
            if (this.mu_biao_wz_X == 1) {
                mb_s = -this.xs;
            }
            if (this.mu_biao_wz_X == 2) {
                mb_s = 0;
            }
            if (this.mu_biao_wz_X == 3) {
                mb_s = this.xs;
            }
            return mb_s;
        };
        //获取 y 方向 末速度 
        TKZXSINGOAI.prototype.getVtY = function () {
            var mb_s = 0;
            if (this.mu_biao_wz_Y == 1) {
                mb_s = -this.xs;
            }
            if (this.mu_biao_wz_Y == 2) {
                mb_s = 0;
            }
            if (this.mu_biao_wz_Y == 3) {
                mb_s = this.xs;
            }
            return mb_s;
        };
        //获取 x方向 最大 行使时间
        TKZXSINGOAI.prototype.getMaxTimeX = function () {
            //f * 1.8=a * m;
            //S/1.8=Vt^2+a(t^2)/2
            //s/1.8=xs^2+(f*1.8)/m*(t^2)/2
            //2*m*(s/1.8-this.xs*this.xs)/(f*1.8)=t*t
            //math.sqrt(9)
            var s = this.getZJLX();
            egret.log("TTTXXXXXX:" + -1351.9998901649758 / 304.2);
            var z = (2 * this.fc.cs_mass * (s / 1.8 - this.xs * this.xs)) / (this.max_force * 1.8);
            var t = Math.sqrt(z);
            return t;
        };
        // 获取 y 方向 最大  行使时间
        TKZXSINGOAI.prototype.getMaxTimeY = function () {
            var s = this.getZJLY();
            var z = (2 * this.fc.cs_mass * (s / 1.8 - this.xs * this.xs)) / (this.max_force * 1.8);
            var t = Math.sqrt(z);
            return t;
        };
        //当前距离目标距离 x
        TKZXSINGOAI.prototype.getZJLX = function () {
            return Math.abs(this.fc.position[0] - this.fc.toPoint.x);
        };
        //当前距离目标距离 y
        TKZXSINGOAI.prototype.getZJLY = function () {
            return Math.abs(this.fc.position[1] - this.fc.toPoint.y);
        };
        //更新状态
        TKZXSINGOAI.prototype.upType = function () {
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
            }
            if (this.y_da_cheng) {
                this.y_type = 1;
            }
        };
        //----------------------------减速---------------------------------------
        TKZXSINGOAI.prototype.x_jian_su = function () {
            //vt =v0 + FT*1.8  2=0.5秒
            var f = -this.fc.velocity[0] / 1.8 / (1 / this.xs);
            if (f > 0 && this.force_x < f) {
                this.force_x = f;
            }
            if (f < 0 && this.force_x > f) {
                this.force_x = f;
            }
        };
        TKZXSINGOAI.prototype.y_jian_su = function () {
            var f = -this.fc.velocity[1] / 1.8 / (1 / this.xs);
            if (f > 0 && this.force_y < f) {
                this.force_y = f;
            }
            if (f < 0 && this.force_y > f) {
                this.force_y = f;
            }
        };
        //----------------------------------------------------------------
        //------------------------加速------------------------------------
        TKZXSINGOAI.prototype.jia_su_x = function () {
            //vt=at
            //vt=f*1.8/m*t
            //f=vt*m/(1.8*t)
            var mb_s = this.getVtX();
            var vt = this.fc.velocity[0] + this.force_x * 1.8;
            if (mb_s > 0 && vt >= mb_s) {
                this.force_x = 0;
                return;
            }
            if (mb_s < 0 && vt <= mb_s) {
                this.force_x = 0;
                return;
            }
            this.force_x = (mb_s - this.fc.velocity[0]);
        };
        TKZXSINGOAI.prototype.jia_su_y = function () {
            var mb_s = this.getVtY();
            var vt = this.fc.velocity[1] + this.force_y * 1.8;
            if (mb_s > 0 && vt >= mb_s) {
                this.force_y = 0;
                return;
            }
            if (mb_s < 0 && vt <= mb_s) {
                this.force_y = 0;
                return;
            }
            this.force_y = (mb_s - this.fc.velocity[1]);
        };
        //-------------------------------------------------------------
        TKZXSINGOAI.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            this.upType();
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
            if (this.x_type == 3) {
                this.jia_su_x();
            }
            if (this.y_type == 1) {
                this.y_jian_su();
            }
            if (this.y_type == 2) {
                this.force_y = 0;
            }
            if (this.y_type == 3) {
                this.jia_su_y();
                //施加力
                this.fc.force = [this.force_x, this.force_y];
            }
        };
        return TKZXSINGOAI;
    }(ai.AiBase));
    ai.TKZXSINGOAI = TKZXSINGOAI;
    __reflect(TKZXSINGOAI.prototype, "ai.TKZXSINGOAI");
})(ai || (ai = {}));
//# sourceMappingURL=TKXZSINGOAI.js.map