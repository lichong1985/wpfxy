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
var wuqi;
(function (wuqi) {
    var PuTongDan = (function (_super) {
        __extends(PuTongDan, _super);
        function PuTongDan(mokaiPos, shType, wuqii_type, fc) {
            return _super.call(this, mokaiPos, shType, "us_wq_1_png", wuqii_type, fc) || this;
        }
        PuTongDan.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
            var zd = new zidan.PuTongZiDan(this.fc.battle_scene, GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0.0001);
            var p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            zd.position[0] = p.x;
            zd.position[1] = p.y;
            //画 重点
            var rx = Math.cos(this.fc.angle) * 0 + Math.sin(this.fc.angle) * this.sudu;
            var ry = -Math.sin(this.fc.angle) * 0 + Math.cos(this.fc.angle) * this.sudu;
            this.fc.battle_scene.world.addBody(zd);
            this.fc.battle_scene.addChild(zd.bitmap);
            zd.velocity = [rx, ry];
        };
        return PuTongDan;
    }(wuqi.WuQiBase));
    wuqi.PuTongDan = PuTongDan;
    __reflect(PuTongDan.prototype, "wuqi.PuTongDan");
})(wuqi || (wuqi = {}));
//# sourceMappingURL=PuTonWuQi.js.map