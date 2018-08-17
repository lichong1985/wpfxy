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
        function TKXZZuiZhongAi(fc, mt, xz, mz, run_time, time_, next_pos) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            // 加速时间  
            _this.jia_su_time = 500;
            //加速次数
            _this.add_su_num = 20;
            _this.time_ = time_;
            _this.next_pos = next_pos;
            return _this;
            // // s= vt*1.8 + a*1.8*tt/2*1.8\
            //s*1.8=v*t;
        }
        TKXZZuiZhongAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //----------------------------------------------------
            this.fc.force = [0, 0];
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