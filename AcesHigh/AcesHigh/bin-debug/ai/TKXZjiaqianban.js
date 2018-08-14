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
    var TKXZjiaqianban = (function (_super) {
        __extends(TKXZjiaqianban, _super);
        function TKXZjiaqianban(fc, mt, xz, mz, run_time, is_js) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //误差范围
            _this.wu_cha = 0.3;
            //速度误差
            _this.sudu_wu_cha = 0.1;
            //当前相对与目标点的位置
            _this.wz = ai.WEI_ZHI.NN;
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
            _this.add_num = 10;
            _this.jian_num = 10;
            _this.is_js = is_js;
            return _this;
        }
        //更新位置
        TKXZjiaqianban.prototype.gen_xin_wei_zhi = function () {
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
        TKXZjiaqianban.prototype.gen_xin_shu_ju = function () {
            if (this.wz == ai.WEI_ZHI.ZS) {
                this.x_su = -this.xs;
                this.y_su = this.xs;
            }
            if (this.wz == ai.WEI_ZHI.ZX) {
                this.x_su = -this.xs;
                this.y_su = -this.xs;
            }
            if (this.wz == ai.WEI_ZHI.YS) {
                this.x_su = this.xs;
                this.y_su = this.xs;
            }
            if (this.wz == ai.WEI_ZHI.YX) {
                this.x_su = this.xs;
                this.y_su = -this.xs;
            }
        };
        TKXZjiaqianban.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //位置更新
            this.gen_xin_wei_zhi();
            //距离目标点距离
            var jj_x = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            var jj_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            //标记减速距离
            if (Math.abs(this.fc.velocity[0]) < this.sudu_wu_cha && this.da_cheng_x) {
                this.jd_dc_x = true;
                // egret.log("xxxxx000000:" + this.fc.velocity[0] + " -- " + this.x_su)
            }
            if (Math.abs(this.fc.velocity[1]) < this.sudu_wu_cha && this.da_cheng_x) {
                this.jd_dc_y = true;
                // egret.log("yyyyy000000:" + this.fc.velocity[1] + " -- " + this.y_su)
            }
            //力
            var x_li = 0;
            var y_li = 0;
            //误差
            var w_x = false;
            var w_y = false;
            if (jj_x < this.wu_cha) {
                w_x = true;
            }
            if (jj_y < this.wu_cha) {
                w_y = true;
            }
            //计算 力的方向
            if (this.fc.velocity[0] > this.x_su && Math.abs(this.fc.velocity[0] - this.x_su) > this.sudu_wu_cha && !w_x) {
                x_li = -this.xs;
            }
            if (this.fc.velocity[0] < this.x_su && Math.abs(this.x_su - this.fc.velocity[0]) > this.sudu_wu_cha && !w_x) {
                x_li = this.xs;
            }
            if (this.fc.velocity[1] > this.y_su && Math.abs(this.fc.velocity[1] - this.y_su) > this.sudu_wu_cha && !w_y) {
                y_li = -this.xs;
            }
            if (this.fc.velocity[1] < this.y_su && Math.abs(this.y_su - this.fc.velocity[1]) > this.sudu_wu_cha && !w_y) {
                y_li = this.xs;
            }
            //判断通过情况
            if (jj_x < this.wu_cha) {
                this.da_cheng_x = true;
                if (this.xb) {
                    // egret.log("XXXX")
                    this.xb = false;
                }
                egret.log("xxxxx000000:" + this.fc.velocity[0] + " -- " + this.x_su);
            }
            if (jj_y < this.wu_cha) {
                this.da_cheng_y = true;
                if (this.yb) {
                    // egret.log("YYYY")
                    this.yb = false;
                }
                egret.log("yyyyy000000:" + this.fc.velocity[1] + " -- " + this.y_su);
            }
            //--------------------------------------------------------------
            //判断是否到达目的地 并修改状态
            if (this.da_cheng_x && this.da_cheng_y) {
                egret.log("到达");
                this.upOver();
                return;
            }
            //施加动力
            this.fc.force = [x_li, y_li];
        };
        return TKXZjiaqianban;
    }(ai.AiBase));
    ai.TKXZjiaqianban = TKXZjiaqianban;
    __reflect(TKXZjiaqianban.prototype, "ai.TKXZjiaqianban");
})(ai || (ai = {}));
//# sourceMappingURL=TKXZjiaqianban.js.map