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
    var LuoXuanZiDan = (function (_super) {
        __extends(LuoXuanZiDan, _super);
        function LuoXuanZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.YU_LEI) || this;
            _this.sudu = 5;
            //号码
            _this.hao_ma = 0;
            _this.collNumber = 1;
            _this.bit_name = "us_zd_7";
            _this.is_updata = true;
            _this.sheng_ming_zhou_qi = 10000;
            _this.initPT();
            _this.sheng_ming_zhou_qi = 1000 * 60;
            return _this;
        }
        LuoXuanZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_7"));
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.displays = [this.bitmap];
            this.angularDamping = 0;
        };
        //约束
        LuoXuanZiDan.prototype.yue_shu = function () {
            // let constraint1 = new p2.DistanceConstraint(this.scene.sk, this);
            // this.scene.world.addConstraint(constraint1);
            // constraint1.upperLimitEnabled = true;
            // constraint1.lowerLimitEnabled = true;
            // constraint1.upperLimit = 3;
            // constraint1.lowerLimit = 3;
            // this.yueShulist.push(constraint1);
        };
        LuoXuanZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            if (this.hao_ma == 0) {
                return;
            }
            if (this.wu == null) {
                return;
            }
            var angle = this.wz + this.wu.lx;
            var sx = Math.sin(angle) * 3;
            var sy = Math.cos(angle) * 3;
            this.position[0] = this.scene.sk.position[0] + sx;
            this.position[1] = this.scene.sk.position[1] + sy;
            this.weiyi("us_zd_7");
        };
        LuoXuanZiDan.prototype.weiyi = function (name) {
            if (egret.getTimer() - this.wyMark < this.wyCD && this.bitmap != null) {
                return;
            }
            this.wyMark = egret.getTimer();
            var b = new egret.Bitmap(RES.getRes(name));
            b.anchorOffsetX = this.bitmap.width * 0.5;
            b.anchorOffsetY = this.bitmap.height * 0.5;
            b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = this.bitmap.x;
            b.y = this.bitmap.y;
            b.scaleX = 0.6;
            b.scaleY = 0.6;
            this.scene.addChild(b);
            b.alpha = 0.5;
            egret.Tween.get(b).to({ "alpha": 0.1 }, 200).call(this.dell, this, [b]);
        };
        return LuoXuanZiDan;
    }(zidan.ZiDanBase));
    zidan.LuoXuanZiDan = LuoXuanZiDan;
    __reflect(LuoXuanZiDan.prototype, "zidan.LuoXuanZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=LuoXuanZiDan.js.map