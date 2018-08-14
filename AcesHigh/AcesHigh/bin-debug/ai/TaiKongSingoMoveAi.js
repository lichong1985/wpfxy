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
    var TaiKongSingoMoveAi = (function (_super) {
        __extends(TaiKongSingoMoveAi, _super);
        function TaiKongSingoMoveAi(fc, mt, xz, mz, run_time) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //误差范围
            _this.wu_cha = 0.3;
            //减速距离
            _this.jian_su = 0.2;
            _this.ty_f = 0.5;
            //纪录 始发位置 以及 总旅程
            _this.start_point = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            if (_this.fc.toPoint) {
                _this.jl_z = egret.Point.distance(_this.fc.toPoint, egret.Point.create(_this.fc.position[0], _this.fc.position[1])) * 0.5;
            }
            // this.fc.velocity = [0, 0];
            //标记开始时间
            _this.st_time = egret.getTimer();
            //设置执行时间 若果是 -1 则按最长（15秒）时间执行
            _this.run_time = run_time * 1000;
            if (run_time == -1) {
                _this.run_time = 15 * 1000;
            }
            return _this;
        }
        TaiKongSingoMoveAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //时间到
            if ((egret.getTimer() - this.st_time) > this.run_time) {
                this.upOver();
                return;
            }
            //判断飞船目的地
            if (!this.fc.toPoint) {
                return;
            }
            //实时距离 
            var jl = egret.Point.distance(this.fc.toPoint, egret.Point.create(this.fc.position[0], this.fc.position[1]));
            var js = egret.Point.distance(this.start_point, egret.Point.create(this.fc.position[0], this.fc.position[1]));
            //判断是否到达目的地 并修改状态
            if (jl < this.wu_cha) {
                this.fc.toPoint = null;
                this.fc.velocity = [0, 0];
                this.upOver();
                return;
            }
            //计算速度向量
            var xl = Tools.xiangliang(egret.Point.create(this.fc.position[0], this.fc.position[1]), this.fc.toPoint, this.xs);
            var pi = 1;
            if (js < this.jl_z) {
                var x = xl.x * pi;
                var y = xl.y * pi;
                this.fc.force = [x, y];
                this.fc.applyForceLocal([x, y], this.fc.position);
            }
            else {
                // pi = jl / this.jl_z;
                // if (pi < 0.1) {
                //     pi = 0.1;
                // }
                var x = xl.x * pi;
                var y = xl.y * pi;
                this.fc.force = [-x, -y];
                // this.fc.applyForceLocal([-x, -y], this.fc.position);
            }
        };
        return TaiKongSingoMoveAi;
    }(ai.AiBase));
    ai.TaiKongSingoMoveAi = TaiKongSingoMoveAi;
    __reflect(TaiKongSingoMoveAi.prototype, "ai.TaiKongSingoMoveAi");
})(ai || (ai = {}));
//# sourceMappingURL=TaiKongSingoMoveAi.js.map