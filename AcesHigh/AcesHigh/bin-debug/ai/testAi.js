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
    var testAi = (function (_super) {
        __extends(testAi, _super);
        function testAi(fc, mt, xz, mz, run_time, time_, xs) {
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
            _this.is_mark = true;
            _this.start_pos = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.time_ = time_;
            _this.xs = xs;
            //初始化 减速参数
            _this.zong_ju_li_x = 0;
            _this.zong_ju_li_y = 18;
            _this.is_cs_jiansu = true;
            _this.mark_y = _this.fc.position[1];
            _this.jia_su_x();
            _this.jia_su_y();
            return _this;
        }
        //------------------------加速------------------------------------
        testAi.prototype.jia_su_x = function () {
            var mb_s = this.zong_ju_li_x;
            if (this.mu_biao_wz_X == 1) {
                mb_s = this.zong_ju_li_x * -1;
            }
            //S=(Vo+Vt)/2 *1.8*T
            //(s*2)/(t*1.8)-vo=vt
            // f*1.8=a*m;
            //(vt-vo)=at
            //(vt-vo)=f*1.8/m*t
            //f=(vt-vo)*m/(1.8*t)
            var vt = (mb_s * 2) / (this.xs * 1.8) - this.fc.velocity[0];
            this.force_x = ((vt - this.fc.velocity[0]) * this.fc.cs_mass) / (1.8 * this.xs);
            egret.log("XXXXX:" + mb_s + " -- " + this.fc.velocity[0] + " -- " + vt + " -- " + this.force_x + " -- " + this.xs);
        };
        testAi.prototype.jia_su_y = function () {
            var mb_s = this.zong_ju_li_y;
            if (this.mu_biao_wz_Y == 1) {
                mb_s = this.zong_ju_li_y * -1;
            }
            var vt = (mb_s * 2) / (this.xs * 1.8) - (-5);
            this.force_y = ((vt - (-5)) * this.fc.cs_mass) / (1.8 * this.xs);
            egret.log("YYYYY:" + mb_s + " -- " + (-5) + " -- " + vt + " -- " + this.force_y + " -- " + this.xs);
        };
        //-------------------------------------------------------------
        testAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            if (time < 10000) {
                return;
            }
            if (this.is_mark) {
                this.fc.velocity = [0, -5];
                this.is_mark = false;
                egret.log("DDDD");
            }
            //施加力
            this.fc.force = [this.force_x, this.force_y];
            egret.log("CCCCC:" + time + " -- " + Math.abs(this.mark_y - this.fc.position[1]) + " -- " + this.fc.velocity[1]);
            // egret.log("YYY:" + this.force_x + " -- " + this.force_y + " || " + this.x_type + " -- " + this.y_type + " || " + this.mu_biao_wz_X + " -- " + this.mu_biao_wz_Y);
        };
        return testAi;
    }(ai.AiBase));
    ai.testAi = testAi;
    __reflect(testAi.prototype, "ai.testAi");
})(ai || (ai = {}));
//# sourceMappingURL=testAi.js.map