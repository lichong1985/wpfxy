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
    var HuaXingAi = (function (_super) {
        __extends(HuaXingAi, _super);
        function HuaXingAi(fc, mt, mz, gj, xs) {
            var _this = _super.call(this, fc, mt, mz, gj) || this;
            _this.mark = 0;
            _this.xs = xs;
            _this.mark = egret.getTimer();
            _this.fc.angularDamping = 0.5;
            return _this;
        }
        HuaXingAi.prototype.doUpData = function (time) {
            // if (egret.getTimer() - this.mark > this.xs * 1000) {
            //     this.upOver();
            //     this.fc.angularDamping = 0;
            // }
        };
        return HuaXingAi;
    }(ai.AiBase));
    ai.HuaXingAi = HuaXingAi;
    __reflect(HuaXingAi.prototype, "ai.HuaXingAi");
})(ai || (ai = {}));
//# sourceMappingURL=HuaXiangAi.js.map