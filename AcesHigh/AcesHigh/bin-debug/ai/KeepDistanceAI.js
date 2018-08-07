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
     * 与sk保持 固定距离ai
     */
    var KeepDistanceAI = (function (_super) {
        __extends(KeepDistanceAI, _super);
        function KeepDistanceAI(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.xs = 1;
            return _this;
        }
        KeepDistanceAI.prototype.doUpData = function (time) {
            if (!this.hang_up) {
                //计算 sk 与 宿主 之间的距离
                var jl = egret.Point.distance(egret.Point.create(this.suke.position[0], this.suke.position[1]), egret.Point.create(this.fc.position[0], this.fc.position[1]));
                //在距离内 不施加动力
                if (jl < this.xs) {
                    return;
                }
                //距离外 根据 距离远近 添加 不同大小的动力
                var rx = (this.suke.position[0] - this.fc.position[0]) * 0.1;
                var ry = (this.suke.position[1] - this.fc.position[1]) * 0.1;
                this.fc.velocity = [rx, ry];
            }
        };
        return KeepDistanceAI;
    }(ai.AiBase));
    ai.KeepDistanceAI = KeepDistanceAI;
    __reflect(KeepDistanceAI.prototype, "ai.KeepDistanceAI");
})(ai || (ai = {}));
//# sourceMappingURL=KeepDistanceAI.js.map