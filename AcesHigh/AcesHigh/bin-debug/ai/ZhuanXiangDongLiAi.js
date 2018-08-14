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
    var ZhuanXiangDongLiAi = (function (_super) {
        __extends(ZhuanXiangDongLiAi, _super);
        function ZhuanXiangDongLiAi(fc, mt, xz, mz, run_time, is_js) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //误差范围
            _this.wu_cha = 0.3;
            //纪录 始发位置 以及 总旅程
            _this.start_point = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.x_jl = Math.abs(_this.start_point.x - _this.fc.toPoint.x);
            _this.y_jl = Math.abs(_this.start_point.y - _this.fc.toPoint.y);
            _this.is_js = is_js;
            return _this;
            // egret.log("更新——————————————————————————————————————————————————")
        }
        ZhuanXiangDongLiAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            var pi_x = 1;
            var pi_y = 1;
            //向左走 
            if (this.start_point.x > this.fc.toPoint.x) {
                pi_x *= -1;
            }
            //向下走 
            if (this.start_point.y > this.fc.toPoint.y) {
                pi_y *= -1;
            }
            //距离 出发点距离 
            var n_x = Math.abs(this.fc.position[0] - this.start_point.x);
            var n_y = Math.abs(this.fc.position[1] - this.start_point.y);
            //距离目标点距离
            var jj_x = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            var jj_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            var x_l = 0;
            var y_l = 0;
            //前半段加速-------------------------OK---------
            if (n_x < this.x_jl * 0.1) {
                x_l = this.xs * pi_x;
            }
            if (n_y < this.y_jl * 0.1) {
                y_l = this.xs * pi_y;
            }
            if (this.x_jl < this.wu_cha * 0.5) {
                x_l = 0;
            }
            if (this.y_jl < this.wu_cha * 0.5) {
                y_l = 0;
            }
            this.fc.force = [x_l, y_l];
            //----------------后半段减速区域-----------------待ok--------------
            if (this.is_js) {
                if (n_x >= this.x_jl * 0.9) {
                    x_l = -this.xs * pi_x;
                }
                if (n_y >= this.y_jl * 0.9) {
                    y_l = -this.xs * pi_y;
                }
                if (this.x_jl < this.wu_cha * 0.5) {
                    x_l = 0;
                }
                if (this.y_jl < this.wu_cha * 0.5) {
                    y_l = 0;
                }
                this.fc.force = [x_l, y_l];
            }
            //实时距离 
            var jl = egret.Point.distance(this.fc.toPoint, egret.Point.create(this.fc.position[0], this.fc.position[1]));
            egret.log("SSSSSSSSS:" + this.fc.velocity[0] + ":" + this.fc.velocity[1]);
            //判断是否到达目的地 并修改状态
            if (jj_x < this.wu_cha && jj_y < this.wu_cha) {
                egret.log("到达");
                this.upOver();
                return;
            }
        };
        return ZhuanXiangDongLiAi;
    }(ai.AiBase));
    ai.ZhuanXiangDongLiAi = ZhuanXiangDongLiAi;
    __reflect(ZhuanXiangDongLiAi.prototype, "ai.ZhuanXiangDongLiAi");
})(ai || (ai = {}));
//# sourceMappingURL=ZhuanXiangDongLiAi.js.map