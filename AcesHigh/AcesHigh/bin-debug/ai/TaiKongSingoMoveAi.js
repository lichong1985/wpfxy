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
        function TaiKongSingoMoveAi(fc) {
            var _this = _super.call(this, fc) || this;
            //误差范围
            _this.wu_cha = 0.3;
            //减速距离
            _this.jian_su = 0.2;
            //纪录 始发位置 以及 总旅程
            _this.start_point = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            if (_this.fc.toPoint) {
                _this.jl_z = egret.Point.distance(_this.fc.toPoint, egret.Point.create(_this.fc.position[0], _this.fc.position[1]));
            }
            return _this;
        }
        TaiKongSingoMoveAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
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
                this.fc.ztj.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER;
                // this.fc.velocity = [0.001,0.0001];
                return;
            }
            //计算速度向量
            var xl = Tools.xiangliang(egret.Point.create(this.fc.position[0], this.fc.position[1]), this.fc.toPoint, 1.5);
            var pi = 1;
            //加速区
            if (js < 3) {
                pi = js / 3;
                if (pi < 0.3) {
                    pi = 0.3;
                }
            }
            //减速区域
            if (jl < 3) {
                pi = jl / 3;
            }
            var x = xl.x * pi;
            var y = xl.y * pi;
            this.fc.velocity = [x, y];
        };
        return TaiKongSingoMoveAi;
    }(ai.AiBase));
    ai.TaiKongSingoMoveAi = TaiKongSingoMoveAi;
    __reflect(TaiKongSingoMoveAi.prototype, "ai.TaiKongSingoMoveAi");
})(ai || (ai = {}));
//# sourceMappingURL=TaiKongSingoMoveAi.js.map