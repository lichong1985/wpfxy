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
var wjwq;
(function (wjwq) {
    var JiGuangWuqi = (function (_super) {
        __extends(JiGuangWuqi, _super);
        function JiGuangWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_3_png", wuqi.WUQI_TYPE.DAO_DAN, fc) || this;
            _this.result = new p2.RaycastResult();
            _this.rayClosest = new p2.Ray({
                mode: p2.Ray.ANY
            });
            _this.level = level;
            _this.cd = 150;
            return _this;
        }
        JiGuangWuqi.prototype.fashe = function (angel, suke, now) {
            var p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            this.rayClosest.from = [p.x, p.y];
            this.rayClosest.to = [p.x, 80];
            this.rayClosest.update();
            this.result.reset();
            this.fc.battle_scene.world.raycast(this.result, this.rayClosest);
        };
        return JiGuangWuqi;
    }(wuqi.WuQiBase));
    wjwq.JiGuangWuqi = JiGuangWuqi;
    __reflect(JiGuangWuqi.prototype, "wjwq.JiGuangWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=JiGuangWuqi.js.map