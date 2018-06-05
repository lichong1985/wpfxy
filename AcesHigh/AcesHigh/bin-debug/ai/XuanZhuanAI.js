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
    /**
     * 旋转ai
     */
    var XuanZhuanAI = (function (_super) {
        __extends(XuanZhuanAI, _super);
        function XuanZhuanAI(fc, xs) {
            var _this = _super.call(this, fc) || this;
            _this.xs = xs;
            return _this;
        }
        XuanZhuanAI.prototype.doUpData = function (time) {
            if (!this.hang_up) {
                _super.prototype.doUpData.call(this, time);
                this.fc.angularVelocity = this.xs;
            }
        };
        return XuanZhuanAI;
    }(ai.AiBase));
    ai.XuanZhuanAI = XuanZhuanAI;
    __reflect(XuanZhuanAI.prototype, "ai.XuanZhuanAI");
})(ai || (ai = {}));
//# sourceMappingURL=XuanZhuanAI.js.map