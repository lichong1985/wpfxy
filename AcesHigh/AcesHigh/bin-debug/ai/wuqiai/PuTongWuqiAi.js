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
    var PuTongWuqiAi = (function (_super) {
        __extends(PuTongWuqiAi, _super);
        function PuTongWuqiAi(fc, mt, xz, mz, wuqiInfo) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //大间隔标记
            _this.da_ge_mark = 0;
            //小间隔标记
            _this.xiao_ge_mark = 0;
            //射几次数标记
            _this.da_num_mark = 0;
            _this.xiao_num_mark = 0;
            _this.is_xiao = false;
            _this.wuqiInfo = wuqiInfo;
            return _this;
            // this.da_ge_mark = egret.getTimer();
            // this.xiao_ge_mark = egret.getTimer();
        }
        PuTongWuqiAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            if ((time - this.da_ge_mark) > this.wuqiInfo.da_jian_ge && this.da_num_mark < this.wuqiInfo.da_num) {
                //目标达成结束
                if (this.da_num_mark <= this.wuqiInfo.da_num) {
                    this.is_xiao = true;
                }
                this.da_ge_mark = time;
                this.da_num_mark++;
            }
            this.sheji(time);
        };
        //射击
        PuTongWuqiAi.prototype.sheji = function (time) {
            if (this.xiao_num_mark >= this.wuqiInfo.xiao_num) {
                this.is_xiao = false;
                this.xiao_num_mark = 0;
            }
            // egret.log((time - this.xiao_ge_mark) + " -- " + this.xiao_num_mark + " -- " + this.is_xiao + " -- " + this.wuqiInfo.xiao_jian_ge + " -- " + this.da_num_mark)
            if ((time - this.xiao_ge_mark) > this.wuqiInfo.xiao_jian_ge && this.xiao_num_mark < this.wuqiInfo.xiao_num && this.is_xiao) {
                //射击
                for (var _i = 0, _a = this.fc.pt_wuqiList; _i < _a.length; _i++) {
                    var w = _a[_i];
                    //发射
                    w.sudu = this.wuqiInfo.she_su;
                    w.fashe(null, null, time);
                }
                this.xiao_num_mark++;
                this.xiao_ge_mark = time;
            }
        };
        return PuTongWuqiAi;
    }(ai.AiBase));
    ai.PuTongWuqiAi = PuTongWuqiAi;
    __reflect(PuTongWuqiAi.prototype, "ai.PuTongWuqiAi");
})(ai || (ai = {}));
//# sourceMappingURL=PuTongWuqiAi.js.map