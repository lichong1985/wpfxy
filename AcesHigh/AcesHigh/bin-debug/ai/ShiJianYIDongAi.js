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
            _this.start_pos = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.time_ = time_;
            _this.xs = xs;
            //初始化 减速参数
            _this.zong_ju_li_x = Math.abs(_this.fc.position[0] - _this.fc.toPoint.x);
            _this.zong_ju_li_y = Math.abs(_this.fc.position[1] - _this.fc.toPoint.y);
            _this.is_cs_jiansu = true;
            _this.mark_y = egret.getTimer();
            _this.jia_su_x();
            _this.jia_su_y();
            return _this;
        }
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
                egret.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:" + (egret.getTimer() - this.mark_y));
            }
            if (this.y_da_cheng) {
                this.y_type = 1;
                egret.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY:" + (egret.getTimer() - this.mark_y));
            }
        };
        //----------------------------减速---------------------------------------
        ShiJianYiDongAi.prototype.x_jian_su = function () {
            //f=ma1.8
            //Vt＝Vo+at 
            //Vt＝Vo+f/(m1.8)t 
            //-Vom1.8/t＝+f/(m1.8)t
            //
            var f = -this.fc.velocity[0] * this.fc.cs_mass * 1.8 / 0.5;
            if (f > 0 && this.force_x < f) {
                this.force_x = f;
            }
            if (f < 0 && this.force_x > f) {
                this.force_x = f;
            }
        };
        ShiJianYiDongAi.prototype.y_jian_su = function () {
            var f = -this.fc.velocity[1] * this.fc.cs_mass * 1.8 / 0.5;
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
            var mb_s = this.zong_ju_li_x;
            if (this.mu_biao_wz_X == 1) {
                mb_s = this.zong_ju_li_x * -1;
            }
            //S=(Vo+Vt)/2 *1.8*T
            //(s*2)/(t*1.8)-vo=vt
            // f*1.8=a*m;
            //vt=at
            //vt=f*1.8/m*t
            //f=vt*m/(1.8*t)
            var vt = (mb_s * 2) / (this.xs * 1.8) - this.fc.velocity[0];
            this.force_x = (vt * this.fc.cs_mass) / (1.8 * this.xs);
            egret.log("XXXXX:" + mb_s + " -- " + this.fc.velocity[0] + " -- " + vt + " -- " + this.force_x + " -- " + this.xs);
        };
        ShiJianYiDongAi.prototype.jia_su_y = function () {
            var mb_s = this.zong_ju_li_y;
            if (this.mu_biao_wz_Y == 1) {
                mb_s = this.zong_ju_li_y * -1;
            }
            var vt = (mb_s * 2) / (this.xs * 1.8) - this.fc.velocity[1];
            this.force_y = (vt * this.fc.cs_mass) / (1.8 * this.xs);
            egret.log("YYYYY:" + mb_s + " -- " + this.fc.velocity[1] + " -- " + vt + " -- " + this.force_y + " -- " + this.xs);
        };
        //-------------------------------------------------------------
        ShiJianYiDongAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            this.upType();
            if (time < 10000) {
                return;
            }
            //判断是否到达目的地 并修改状态
            if (this.x_da_cheng && this.y_da_cheng) {
                this.upOver();
                egret.log("TTTTTTTT:" + (time - this.mark_y));
                return;
            }
            if (this.x_type == 1) {
                // this.x_jian_su();
            }
            if (this.x_type == 2) {
                this.force_x = 0;
            }
            if (this.x_type == 3) {
                // this.jia_su_x();
            }
            if (this.y_type == 1) {
                // this.y_jian_su();
            }
            if (this.y_type == 2) {
                this.force_y = 0;
            }
            if (this.y_type == 3) {
                // this.jia_su_y();
            }
            //施加力
            this.fc.force = [this.force_x, this.force_y];
            // this.fc.velocity = [0, 1];
            // egret.log("YYY:" + this.force_x + " -- " + this.force_y + " || " + this.x_type + " -- " + this.y_type + " || " + this.mu_biao_wz_X + " -- " + this.mu_biao_wz_Y);
        };
        return ShiJianYiDongAi;
    }(ai.AiBase));
    ai.ShiJianYiDongAi = ShiJianYiDongAi;
    __reflect(ShiJianYiDongAi.prototype, "ai.ShiJianYiDongAi");
})(ai || (ai = {}));
//# sourceMappingURL=ShiJianYIDongAi.js.map