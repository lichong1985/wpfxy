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
     * 实时瞄准 ai
     */
    var ShiShiMiaoZhunAi = (function (_super) {
        __extends(ShiShiMiaoZhunAi, _super);
        function ShiShiMiaoZhunAi(fc) {
            return _super.call(this, fc) || this;
        }
        ShiShiMiaoZhunAi.prototype.doUpData = function (time) {
            if (!this.hang_up) {
                _super.prototype.doUpData.call(this, time);
                var angle = Math.atan2((this.suke.position[1] - this.fc.position[1]), (this.suke.position[0] - this.fc.position[0])) + Math.PI * 0.5;
                this.fc.angle = angle;
            }
        };
        return ShiShiMiaoZhunAi;
    }(ai.AiBase));
    ai.ShiShiMiaoZhunAi = ShiShiMiaoZhunAi;
    __reflect(ShiShiMiaoZhunAi.prototype, "ai.ShiShiMiaoZhunAi");
})(ai || (ai = {}));
//# sourceMappingURL=ShiShiMiaoZhun.js.map