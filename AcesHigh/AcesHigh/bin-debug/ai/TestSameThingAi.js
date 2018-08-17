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
        function TestSameThingAi(fc, mt, xz, mz, run_time, time_) {
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
            _this.add_num = 2;
            _this.lase_t = 0;
            _this.start_point = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.y_jl = _this.fc.position[1] - _this.fc.toPoint.y;
            _this.fc.damping = 0;
            _this.fc.mass = 1000;
            // this.fc.velocity = [0, -1];
            _this.mk = egret.getTimer();
            _this.y20 = _this.y_jl * 0.2;
            // // s= vt*1.8 + a*1.8*tt/2*1.8
            //s*1.8=v*t
            var v = (_this.y_jl - _this.y20) * 1.8 / time_;
            egret.log("JJJJJJJJJJJJJJJJJJJJJJJJJ:" + _this.y_jl);
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
            if (this.add_num > 0) {
                this.fc.force = [0, -1];
                this.add_num--;
            }
            var now = egret.getTimer();
            egret.log(jl_y + " -- " + this.fc.velocity[1] + " -- " + egret.getTimer() + " -- " + this.fc.damping + " -- " + this.fc.mass + " ** " + (now - this.lase_t));
            this.lase_t = now;
            // this.fc.velocity = [0, -2];
            // 1.6739997863769531 -- - 1.7999992370605469 -- 4421 -- 0 -- 1000 
            //6.587993621826172 -- - 3.5999975204467773 -- 5421 -- 0 -- 1000
            //14.741992950439453 -- - 5.399995803833008 -- 6421 -- 0 -- 1000 
            // s= （vt*1.8 + a*1.8*tt/2）*1.8 
            // 8.16  13.07 
            //  let pi = 0;
            // if (this.fc.velocity[0] > 0) {
            //     pi = -1;
            // }
            // if (this.fc.velocity[0] < 0) {
            //     pi = 1;
            // }
            // if (Math.abs(this.fc.velocity[0]) > this.jian_su_li_pi) {
            //     this.force_x = this.jian_su_li * pi;
            //     return;
            // }
            // 
            // this.force_x = Math.abs(this.fc.velocity[0]) / this.jian_su_li_pi * pi;
        };
        return TestSameThingAi;
    }(ai.AiBase));
    ai.TestSameThingAi = TestSameThingAi;
    __reflect(TestSameThingAi.prototype, "ai.TestSameThingAi");
})(ai || (ai = {}));
//# sourceMappingURL=TestSameThingAi.js.map