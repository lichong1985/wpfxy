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
            _this.collNumber = 1;
            _this.bit_name = "us_zd_7_png";
            _this.is_updata = true;
            _this.sheng_ming_zhou_qi = 10000;
            _this.initPT();
            _this.sheng_ming_zhou_qi = 1000 * 60;
            return _this;
        }
        LuoXuanZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_7_png"));
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.displays = [this.bitmap];
            this.angularDamping = 0;
        };
        //约束
        LuoXuanZiDan.prototype.yue_shu = function () {
            var constraint1 = new p2.DistanceConstraint(this.scene.sk, this);
            this.scene.world.addConstraint(constraint1);
            constraint1.upperLimitEnabled = true;
            constraint1.lowerLimitEnabled = true;
            constraint1.upperLimit = 3;
            constraint1.lowerLimit = 3;
            this.yueShulist.push(constraint1);
        };
        LuoXuanZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            var angle = (Math.atan2((this.scene.sk.position[1] - this.position[1]), (this.scene.sk.position[0] - this.position[0])) + Math.PI * 0.5) - (90 * Math.PI / 180);
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            this.angle = angle;
            this.velocity = [sx, sy];
        };
        return LuoXuanZiDan;
    }(zidan.ZiDanBase));
    zidan.LuoXuanZiDan = LuoXuanZiDan;
    __reflect(LuoXuanZiDan.prototype, "zidan.LuoXuanZiDan");
})(zidan || (zidan = {}));
//# sourceMappingURL=LuoXuanZiDan.js.map