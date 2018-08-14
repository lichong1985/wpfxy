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
    var TestSameThingAi = (function (_super) {
        __extends(TestSameThingAi, _super);
        function TestSameThingAi(fc, mt, xz, mz, run_time, is_js) {
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
            _this.li_num = 20;
            _this.jian_num = 0;
            _this.is_guo = false;
            _this.is_js = is_js;
            _this.start_point = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.y_jl = _this.fc.position[1] - _this.fc.toPoint.y;
            _this.fc.damping = 0;
            _this.fc.mass = 1000;
            _this.mk = egret.getTimer();
            return _this;
        }
        TestSameThingAi.prototype.doUpData = function (time) {
            if (egret.getTimer() - this.mk < 2000) {
                return;
            }
            _super.prototype.doUpData.call(this, time);
            var x_li = 0;
            var y_li = -this.xs;
            var jl_y = this.start_point.y - this.fc.position[1];
            egret.log(jl_y + " -- " + this.fc.velocity[1] + " -- " + egret.getTimer() + " -- " + this.fc.damping);
            this.fc.force = [0, -2];
            // let sudu_cha: number = 0;
            // sudu_cha = Math.abs(Math.abs(this.fc.velocity[1]) - this.xs);
            // if (this.li_num > 0) {
            //     this.fc.force = [x_li, y_li];
            //     this.li_num--;
            // }
            // if (jl_y > this.y_jl && !this.is_guo) {
            //     this.is_guo = true;
            //     this.jian_num = Math.abs(Math.round(this.fc.velocity[1] / (0.06)));
            // }
            // if (jl_y > this.y_jl) {
            //     if (this.jian_num > 0) {
            //         this.fc.force = [x_li, 1];
            //         this.jian_num--;
            //     }
            // }
            // let jj_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
        };
        return TestSameThingAi;
    }(ai.AiBase));
    ai.TestSameThingAi = TestSameThingAi;
    __reflect(TestSameThingAi.prototype, "ai.TestSameThingAi");
})(ai || (ai = {}));
//# sourceMappingURL=TestSameThingAi.js.map