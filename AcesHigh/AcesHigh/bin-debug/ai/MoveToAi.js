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
    var MoveToAi = (function (_super) {
        __extends(MoveToAi, _super);
        function MoveToAi(fc, p2_points, is_loop) {
            var _this = _super.call(this, fc) || this;
            //是否变换目标
            _this.is_u = true;
            // 巡逻坐标节点 下标
            _this.point_index = 0;
            // public su_du: number = 1;
            //误差范围
            _this.wu_cha = 1;
            _this.points = p2_points;
            _this.is_loop = is_loop;
            _this.fc.p2_target = p2_points[0];
            return _this;
        }
        MoveToAi.prototype.doUpData = function (time) {
            if (!this.hang_up) {
                _super.prototype.doUpData.call(this, time);
                //计算 sk 与 宿主 之间的距离
                var jl = egret.Point.distance(egret.Point.create(this.points[this.point_index].x, this.points[this.point_index].y), egret.Point.create(this.fc.position[0], this.fc.position[1]));
                //在距离内 不施加动力
                if (jl < this.wu_cha) {
                    this.is_u = true;
                    this.point_index++;
                    if (this.point_index >= this.points.length) {
                        //是否为 循环巡逻
                        if (this.is_loop) {
                            this.point_index = 0;
                            this.fc.p2_target = this.points[this.point_index];
                            return;
                        }
                        else {
                            //挂起
                            this.hang_up = true;
                            //将目标清空
                            this.fc.p2_target = null;
                            return;
                        }
                    }
                    //设置新的目的地坐标
                    this.fc.p2_target = this.points[this.point_index];
                    return;
                }
                var x = void 0;
                var y = void 0;
                if (this.is_u) {
                    var angle = Math.atan2((this.suke.position[1] - this.fc.position[1]), (this.suke.position[0] - this.fc.position[0]));
                    //弹性版
                    this.rx = (this.points[this.point_index].x - this.fc.position[0]) * 0.1;
                    this.ry = (this.points[this.point_index].y - this.fc.position[1]) * 0.1;
                    this.is_u = false;
                }
                this.fc.velocity = [this.rx, this.ry];
            }
        };
        return MoveToAi;
    }(ai.AiBase));
    ai.MoveToAi = MoveToAi;
    __reflect(MoveToAi.prototype, "ai.MoveToAi");
})(ai || (ai = {}));
//# sourceMappingURL=MoveToAi.js.map