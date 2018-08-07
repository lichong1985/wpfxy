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
    var SingoMoveToAi = (function (_super) {
        __extends(SingoMoveToAi, _super);
        function SingoMoveToAi(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //是否变换目标
            _this.is_u = true;
            // 巡逻坐标节点 下标
            _this.point_index = 0;
            // public su_du: number = 1;
            //误差范围
            _this.wu_cha = 1;
            return _this;
        }
        SingoMoveToAi.prototype.doUpData = function (time) {
            if (!this.fc.toPoint) {
                return;
            }
            _super.prototype.doUpData.call(this, time);
            //飞船与目标点之间的距离
            var jl = egret.Point.distance(this.fc.toPoint, egret.Point.create(this.fc.position[0], this.fc.position[1]));
            //到达后清楚 目标点标记
            if (jl < this.wu_cha) {
                this.fc.toPoint = null;
                this.upOver();
                return;
            }
            var xl = Tools.xiangliang(egret.Point.create(this.fc.position[0], this.fc.position[1]), this.fc.toPoint, 1);
            this.fc.velocity = [xl.x, xl.y];
        };
        return SingoMoveToAi;
    }(ai.AiBase));
    ai.SingoMoveToAi = SingoMoveToAi;
    __reflect(SingoMoveToAi.prototype, "ai.SingoMoveToAi");
})(ai || (ai = {}));
//# sourceMappingURL=SingoMoveToAi.js.map