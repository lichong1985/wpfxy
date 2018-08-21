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
    //原地等待 ai
    var YuanDiAi = (function (_super) {
        __extends(YuanDiAi, _super);
        function YuanDiAi(fc, mt, xz, mz, xs) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.init_time = 0;
            _this.xs = xs;
            _this.init_time = egret.getTimer();
            return _this;
        }
        //
        YuanDiAi.prototype.doUpData = function (time) {
            if ((time - this.init_time) > this.xs * 1000) {
                this.upOver();
            }
            //vt =v0 + at*1.8
            var fx = -this.fc.velocity[0] / 1.8 / 0.5;
            var fy = -this.fc.velocity[1] / 1.8 / 0.5;
            // egret.log("HHHHHHHHHHHHHHH:" + fx + " -- " + fy);
            this.fc.force = [fx, fy];
        };
        return YuanDiAi;
    }(ai.AiBase));
    ai.YuanDiAi = YuanDiAi;
    __reflect(YuanDiAi.prototype, "ai.YuanDiAi");
})(ai || (ai = {}));
//# sourceMappingURL=YuanDiAi.js.map