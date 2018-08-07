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
            var _this = _super.call(this, mokaiPos, shType, "us_wq_4", wuqi.WUQI_TYPE.DAO_DAN, fc) || this;
            _this.result = new p2.RaycastResult();
            _this.rayClosest = new p2.Ray({
                mode: p2.Ray.CLOSEST
            });
            _this.hitPoint = p2.vec2.create();
            _this.level = level;
            _this.cd = 2000;
            _this.rayClosest.collisionGroup = GameConstant.WO_JUN_ZIDAN;
            _this.rayClosest.collisionMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;
            return _this;
        }
        JiGuangWuqi.prototype.fashe = function (angel, suke, now) {
            var p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            this.rayClosest.from = [p.x, p.y];
            this.rayClosest.to = [p.x, 80];
            this.rayClosest.update();
            this.result.reset();
            this.fc.battle_scene.world.raycast(this.result, this.rayClosest);
            this.result.getHitPoint(this.hitPoint, this.rayClosest);
            if (this.result.hasHit) {
                var dj = this.result.body;
                var p_1 = Tools.p2TOegretPoitn(egret.Point.create(this.hitPoint[0], this.hitPoint[1]));
                if (dj) {
                    dj.checkCollision(p_1.x, p_1.y, 1);
                }
                else {
                    p_1.y *= -1;
                }
                var shp = new egret.Shape();
                shp.graphics.lineStyle(10, 0xffff00);
                shp.graphics.moveTo(this.x, this.y);
                shp.graphics.lineTo(p_1.x, p_1.y);
                shp.graphics.endFill();
                shp.alpha = 0.5;
                this.fc.battle_scene.addChild(shp);
                var ff = this.fc;
                egret.Tween.get(shp).to({ "alpha": 0.1 }, 600).call(this.removeXin, this, [shp]);
            }
        };
        //去掉激光线
        JiGuangWuqi.prototype.removeXin = function (shp) {
            if (shp.parent) {
                this.fc.battle_scene.removeChild(shp);
            }
        };
        //溅射伤害 
        JiGuangWuqi.prototype.jianse = function () {
        };
        return JiGuangWuqi;
    }(wuqi.WuQiBase));
    wjwq.JiGuangWuqi = JiGuangWuqi;
    __reflect(JiGuangWuqi.prototype, "wjwq.JiGuangWuqi");
})(wjwq || (wjwq = {}));
//# sourceMappingURL=JiGuangWuqi.js.map