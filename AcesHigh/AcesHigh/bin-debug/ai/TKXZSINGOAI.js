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
        //减速距离
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
            //初始化 减速参数
            _this.zong_ju_li_x = Math.abs(_this.fc.position[0] - _this.fc.toPoint.x);
            _this.zong_ju_li_y = Math.abs(_this.fc.position[1] - _this.fc.toPoint.y);
            // this.xs_x = (this.zong_ju_li_x / (this.zong_ju_li_x + this.zong_ju_li_y)) * this.xs
            // this.xs_y = (this.zong_ju_li_y / (this.zong_ju_li_x + this.zong_ju_li_y)) * this.xs;
            _this.xs_x = _this.xs;
            _this.xs_y = _this.xs;
            return _this;
            // egret.log(this.xs_x + " -- " + this.xs_y + " -- " + this.xs);
        }
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
            //速度达到
            // if (this.fc.velocity[0] >= this.xs) {
            //     this.x_type = 2;
            // }
            // if (this.fc.velocity[1] >= this.xs) {
            //     this.y_type = 2;
            // }
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
            //vt =v0 + at*1.8
            var mb_s = 0;
            if (this.mu_biao_wz_X == 1) {
                mb_s = -this.xs_x;
            }
            if (this.mu_biao_wz_X == 2) {
                mb_s = 0;
            }
            if (this.mu_biao_wz_X == 3) {
                mb_s = this.xs_x;
            }
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
            //vt =v0 + at*1.8
            var mb_s = 0;
            if (this.mu_biao_wz_Y == 1) {
                mb_s = -this.xs_y;
            }
            if (this.mu_biao_wz_Y == 2) {
                mb_s = 0;
            }
            if (this.mu_biao_wz_Y == 3) {
                mb_s = this.xs_y;
            }
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
            }
            //施加力
            this.fc.force = [this.force_x, this.force_y];
        };
        return TKZXSINGOAI;
    }(ai.AiBase));
    ai.TKZXSINGOAI = TKZXSINGOAI;
    __reflect(TKZXSINGOAI.prototype, "ai.TKZXSINGOAI");
})(ai || (ai = {}));
//# sourceMappingURL=TKXZSINGOAI.js.map