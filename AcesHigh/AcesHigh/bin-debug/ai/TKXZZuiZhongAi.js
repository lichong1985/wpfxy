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
    var TKXZZuiZhongAi = (function (_super) {
        __extends(TKXZZuiZhongAi, _super);
        function TKXZZuiZhongAi(fc, mt, xz, mz, run_time, is_js) {
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
            //0速距离
            _this.zero_x_D = 0;
            _this.zero_y_D = 0;
            //阶段达成 
            _this.jd_dc_x = false;
            _this.jd_dc_y = false;
            _this.xb = true;
            _this.yb = true;
            //加减力次数
            _this.add_num_x = 5;
            _this.jian_num_x = 10;
            _this.add_num_y = 5;
            _this.jian_num_y = 10;
            _this.is_js = is_js;
            return _this;
            // egret.log("-------------------------------")
        }
        TKXZZuiZhongAi.prototype.init = function () {
            _super.prototype.init.call(this);
            this.x_jl = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            this.y_jl = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            if (this.x_jl == 0) {
                this.x_jl = 0.01;
            }
            if (this.y_jl == 0) {
                this.y_jl = 0.01;
            }
            var pi = 0;
            if (this.x_jl < this.y_jl) {
                pi = this.x_jl / this.y_jl;
                this.xs_x = this.xs * pi;
                this.xs_y = this.xs - this.xs_x;
            }
            else {
                pi = this.y_jl / this.x_jl;
                this.xs_y = this.xs * pi;
                this.xs_x = this.xs - this.xs_y;
            }
            if (this.x_jl < this.wu_cha) {
                this.xs_x = 0;
            }
            if (this.y_jl < this.wu_cha) {
                this.xs_y = 0;
            }
            egret.log("PPPPPPPPPPPPP:" + pi);
            this.gen_xin_wei_zhi();
        };
        //更新位置
        TKXZZuiZhongAi.prototype.gen_xin_wei_zhi = function () {
            var zz;
            //左上
            if (this.fc.position[0] > this.fc.toPoint.x && this.fc.position[1] < this.fc.toPoint.y) {
                zz = ai.WEI_ZHI.ZS;
            }
            //右下
            if (this.fc.position[0] < this.fc.toPoint.x && this.fc.position[1] > this.fc.toPoint.y) {
                zz = ai.WEI_ZHI.YX;
            }
            //左下
            if (this.fc.position[0] > this.fc.toPoint.x && this.fc.position[1] > this.fc.toPoint.y) {
                zz = ai.WEI_ZHI.ZX;
            }
            //右上
            if (this.fc.position[0] < this.fc.toPoint.x && this.fc.position[1] < this.fc.toPoint.y) {
                zz = ai.WEI_ZHI.YS;
            }
            //更新速度值
            if (this.wz != zz) {
                this.wz = zz;
                this.gen_xin_shu_ju();
            }
        };
        //根据位置的 四个方向的改变 跟新参数
        TKXZZuiZhongAi.prototype.gen_xin_shu_ju = function () {
            if (this.wz == ai.WEI_ZHI.ZS) {
                // this.x_su = -this.xs_x;
                // this.y_su = this.xs_y;
                this.x_su = -this.xs;
                this.y_su = this.xs;
            }
            if (this.wz == ai.WEI_ZHI.ZX) {
                // this.x_su = -this.xs_x;
                // this.y_su = -this.xs_y;
                this.x_su = -this.xs;
                this.y_su = -this.xs;
            }
            if (this.wz == ai.WEI_ZHI.YS) {
                // this.x_su = this.xs_x;
                // this.y_su = this.xs_y;
                this.x_su = this.xs;
                this.y_su = this.xs;
            }
            if (this.wz == ai.WEI_ZHI.YX) {
                // this.x_su = this.xs_x;
                // this.y_su = -this.xs_y;
                this.x_su = this.xs;
                this.y_su = -this.xs;
            }
            egret.log("SSSSSSSSSSSSSS:" + this.x_su + " -- " + this.y_su);
        };
        TKXZZuiZhongAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            // //距离目标点距离
            var jj_x = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            var jj_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            //力
            var x_li = this.x_su;
            var y_li = this.y_su;
            //-------------加速阶段----------------------------
            if (this.x_su > 0 && this.fc.velocity[0] >= this.x_su) {
                x_li = 0;
            }
            if (this.x_su < 0 && this.fc.velocity[0] <= this.x_su) {
                x_li = 0;
            }
            if (this.y_su > 0 && this.fc.velocity[1] >= this.y_su) {
                y_li = 0;
            }
            if (this.y_su < 0 && this.fc.velocity[1] <= this.y_su) {
                y_li = 0;
            }
            //------------------------减速阶段------------------
            //判断通过情况
            if (jj_x < this.wu_cha) {
                if (!this.da_cheng_x) {
                    this.jian_num_x = Math.abs(Math.round(this.fc.velocity[0] / (0.06 * this.xs)));
                }
                this.da_cheng_x = true;
            }
            if (jj_y < this.wu_cha) {
                if (!this.da_cheng_y) {
                    this.jian_num_y = Math.abs(Math.round(this.fc.velocity[1] / (0.06 * this.xs)));
                }
                this.da_cheng_y = true;
            }
            //减速数量减少
            if (this.da_cheng_x) {
                this.jian_num_x--;
                x_li = -this.x_su;
            }
            if (this.da_cheng_y) {
                this.jian_num_y--;
                y_li = -this.y_su;
            }
            // 减速器用光
            if (this.jian_num_x <= 0) {
                x_li = 0;
            }
            if (this.jian_num_y <= 0) {
                y_li = 0;
            }
            //----------------------------------------------------
            this.fc.force = [x_li, y_li];
            //----------------达成阶段--------------
            //判断是否到达目的地 并修改状态
            if (this.da_cheng_x && this.da_cheng_y) {
                this.upOver();
                return;
            }
        };
        return TKXZZuiZhongAi;
    }(ai.AiBase));
    ai.TKXZZuiZhongAi = TKXZZuiZhongAi;
    __reflect(TKXZZuiZhongAi.prototype, "ai.TKXZZuiZhongAi");
})(ai || (ai = {}));
//# sourceMappingURL=TKXZZuiZhongAi.js.map