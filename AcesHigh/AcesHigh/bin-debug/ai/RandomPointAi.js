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
    var RANDOM_POINT;
    (function (RANDOM_POINT) {
        RANDOM_POINT[RANDOM_POINT["x"] = 0] = "x";
        RANDOM_POINT[RANDOM_POINT["y"] = 1] = "y";
        RANDOM_POINT[RANDOM_POINT["all"] = 2] = "all"; //左右方向
    })(RANDOM_POINT = ai.RANDOM_POINT || (ai.RANDOM_POINT = {}));
    var RandomPointAi = (function (_super) {
        __extends(RandomPointAi, _super);
        function RandomPointAi(fc, r, d_limit) {
            var _this = _super.call(this, fc) || this;
            _this.is_u = true;
            _this.d_limit = d_limit;
            _this.random_type = r;
            _this.r_point = _this.random_p();
            return _this;
        }
        RandomPointAi.prototype.doUpData = function (time) {
            //计算 sk 与 宿主 之间的距离
            var jl = egret.Point.distance(egret.Point.create(this.r_point.x, this.r_point.y), egret.Point.create(this.fc.position[0], this.fc.position[1]));
            egret.log("KKKKKKKKKKKKKK:" + jl);
            if (jl < 0.3) {
                this.r_point = this.random_p();
                this.is_u = true;
            }
            if (this.is_u) {
                var angle = Math.atan2((this.suke.position[1] - this.fc.position[1]), (this.suke.position[0] - this.fc.position[0]));
                //弹性版
                this.rx = (this.r_point.x - this.fc.position[0]) * 0.1;
                this.ry = (this.r_point.y - this.fc.position[1]) * 0.1;
                this.is_u = false;
            }
            this.fc.velocity = [this.rx, this.ry];
        };
        RandomPointAi.prototype.random_p = function () {
            var x = Math.random() * this.d_limit * 2 - this.d_limit;
            var y = Math.random() * this.d_limit * 2 - this.d_limit;
            if (this.random_type == RANDOM_POINT.x) {
                return egret.Point.create(this.fc.position[0] + x, this.fc.position[1]);
            }
            if (this.random_type == RANDOM_POINT.y) {
                return egret.Point.create(this.fc.position[0], this.fc.position[1] + y);
            }
            if (this.random_type == RANDOM_POINT.all) {
                return egret.Point.create(this.fc.position[0] + x, this.fc.position[1] + y);
            }
            return null;
        };
        return RandomPointAi;
    }(ai.AiBase));
    ai.RandomPointAi = RandomPointAi;
    __reflect(RandomPointAi.prototype, "ai.RandomPointAi");
})(ai || (ai = {}));
//# sourceMappingURL=RandomPointAi.js.map