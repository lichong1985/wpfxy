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
var zidan;
(function (zidan) {
    var GenZongZiDan = (function (_super) {
        __extends(GenZongZiDan, _super);
        function GenZongZiDan(scene, zhenying, mass, suke) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            //跟踪弹生效时间
            _this.gz_time = 10000;
            _this.sudu = 2;
            _this.initPT();
            _this.is_updata = true;
            _this.damping = 0;
            _this.suke = suke;
            _this.bit_name = "op_wq_3";
            return _this;
        }
        GenZongZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("op_wq_3"));
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        GenZongZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            if ((egret.getTimer() - this.mark_time) > this.gz_time) {
                this.is_updata = false;
                return;
            }
            var angle = Math.atan2((this.suke.position[1] - this.position[1]), (this.suke.position[0] - this.position[0])) + Math.PI * 0.5;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            this.angle = angle;
            this.velocity = [sx, sy];
        };
        return GenZongZiDan;
    }(zidan.ZiDanBase));
    zidan.GenZongZiDan = GenZongZiDan;
    __reflect(GenZongZiDan.prototype, "zidan.GenZongZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=GenZongZiDan.js.map