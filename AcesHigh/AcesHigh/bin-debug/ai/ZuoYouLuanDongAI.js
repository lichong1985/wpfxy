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
    var ZuoYouLuanDongAI = (function (_super) {
        __extends(ZuoYouLuanDongAI, _super);
        function ZuoYouLuanDongAI(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //是否抵达
            _this.is_get = true;
            //速度
            _this.v = 1;
            return _this;
        }
        /**
         * 边界位置
         *  左右 ： 20 - 32
         *  上下 ： 60 - 37
         */
        ZuoYouLuanDongAI.prototype.doUpData = function (time) {
            //满足条件重新随机
            if (this.is_get || this.fc.velocity[0] < 0.5) {
                this.target_point = egret.Point.create(this.getRandomX(), this.fc.position[1]);
                if (this.target_point.x > this.fc.position[0]) {
                    this.fc.velocity = [this.v, 0];
                }
                else {
                    this.fc.velocity = [-this.v, 0];
                }
                this.is_get = false;
                return;
            }
            //查看是否到达指定位置
            var jl = egret.Point.distance(egret.Point.create(this.fc.position[0], this.fc.position[1]), this.target_point);
            if (jl < 0.5) {
                this.is_get = true;
            }
        };
        //获取随机坐标点
        ZuoYouLuanDongAI.prototype.getRandomX = function () {
            var x = Math.random() * (32 - 20) + 20;
            return x;
        };
        return ZuoYouLuanDongAI;
    }(ai.AiBase));
    ai.ZuoYouLuanDongAI = ZuoYouLuanDongAI;
    __reflect(ZuoYouLuanDongAI.prototype, "ai.ZuoYouLuanDongAI");
})(ai || (ai = {}));
//# sourceMappingURL=ZuoYouLuanDongAI.js.map