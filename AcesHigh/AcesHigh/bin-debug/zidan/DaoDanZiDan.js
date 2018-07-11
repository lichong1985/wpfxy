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
    var DaoDanZiDan = (function (_super) {
        __extends(DaoDanZiDan, _super);
        function DaoDanZiDan(scene, zhenying, mass, fc) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN) || this;
            //跟踪弹生效时间
            _this.gz_time = 10000;
            _this.sudu = 5;
            //导弹启动时间
            _this.qi_dong = 300;
            _this.initPT();
            _this.is_updata = true;
            _this.damping = 0;
            _this.fc = fc;
            _this.bit_name = "us_zd_3_png";
            _this.sudu = 8;
            return _this;
        }
        DaoDanZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_3_png"));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        DaoDanZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            if ((egret.getTimer() - this.mark_time) > this.gz_time) {
                this.is_updata = false;
                return;
            }
            if (!this.fc) {
                return;
            }
            if ((egret.getTimer() - this.mark_time) < this.qi_dong) {
                this.velocity = [0, 3];
                _super.prototype.weiyi.call(this, this.bit_name);
                return;
            }
            var angle = Math.atan2((this.fc.position[1] - this.position[1]), (this.fc.position[0] - this.position[0])) + Math.PI * 0.5;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            this.angle = angle;
            this.velocity = [sx, sy];
            _super.prototype.weiyi.call(this, this.bit_name);
        };
        DaoDanZiDan.prototype.texiao = function () {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8;
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(_super.prototype.dell, this, [this.bitmap]);
        };
        return DaoDanZiDan;
    }(zidan.ZiDanBase));
    zidan.DaoDanZiDan = DaoDanZiDan;
    __reflect(DaoDanZiDan.prototype, "zidan.DaoDanZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=DaoDanZiDan.js.map