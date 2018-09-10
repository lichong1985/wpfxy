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
var djwq;
(function (djwq) {
    var JG_TYPE;
    (function (JG_TYPE) {
        JG_TYPE[JG_TYPE["WU"] = 0] = "WU";
        JG_TYPE[JG_TYPE["ZHAO"] = 1] = "ZHAO";
        JG_TYPE[JG_TYPE["GONG"] = 2] = "GONG";
        JG_TYPE[JG_TYPE["TIAO_ZHENG"] = 3] = "TIAO_ZHENG";
    })(JG_TYPE || (JG_TYPE = {}));
    //直射类武器
    var JiGuangWuqi = (function (_super) {
        __extends(JiGuangWuqi, _super);
        function JiGuangWuqi(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.JI_GUANG) || this;
            _this.result = new p2.RaycastResult();
            _this.rayClosest = new p2.Ray({
                mode: p2.Ray.CLOSEST
            });
            _this.hitPoint = p2.vec2.create();
            //射线宽度
            _this.kuan = 10;
            _this.kuan_mark = 0;
            _this.kuan_more = 20;
            //激光标记次数
            _this.hit_mark = 0;
            _this.is_hit = false;
            _this.shp = new egret.Shape();
            _this.rayClosest.collisionGroup = GameConstant.DI_JUN_ZIDAN;
            _this.rayClosest.collisionMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI;
            return _this;
        }
        JiGuangWuqi.prototype.updata = function () {
            //攻击
            if (this.hit_mark > 0 && this.kuan_mark <= 0) {
                this.is_hit = true;
                this.kuan_mark = 0;
                this.huizhikd(5, 0xffff00, 0.5);
                //清理
                egret.Tween.get(this.shp).to({ "alpha": 0.1 }, 600).call(this.clear, this);
                this.hit_mark = 0;
            }
            if (this.kuan_mark <= 0) {
                if (this.shp.parent && !this.is_hit) {
                    this.fc.battle_scene.removeChild(this.shp);
                }
                return;
            }
            var pi = this.kuan_mark / this.kuan_more;
            this.huizhikd(this.kuan * pi, 0xffff00, 0.5);
            this.kuan_mark--;
        };
        //射击
        JiGuangWuqi.prototype.fashe = function (angel, suke, now) {
            this.fc.battle_scene.addChild(this.shp);
            this.kuan_mark = this.kuan_more;
            this.is_hit = false;
            this.hit_mark = 0;
        };
        // 宽度  颜色  透明度
        JiGuangWuqi.prototype.huizhikd = function (kd, color, alpha) {
            // 计算碰撞点
            var p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            var angle = this.fc.angle;
            var sx = Math.sin(angle) * 20;
            var sy = Math.cos(angle) * 20;
            // sy = sy * -1;
            //无碰撞目标点
            var pTo = egret.Point.create(p.x + sx, p.y - sy);
            this.rayClosest.from = [p.x, p.y];
            this.rayClosest.to = [p.x + sx, p.y - sy];
            this.rayClosest.update();
            this.result.reset();
            this.fc.battle_scene.world.raycast(this.result, this.rayClosest);
            this.result.getHitPoint(this.hitPoint, this.rayClosest);
            // 2画线
            var egP;
            if (this.result.hasHit) {
                var dj = this.result.body;
                if (dj) {
                    egP = Tools.p2TOegretPoitn(egret.Point.create(this.hitPoint[0], this.hitPoint[1]));
                    this.hit_mark++;
                }
                else {
                    egP = Tools.p2TOegretPoitn(pTo);
                    this.hit_mark = 0;
                }
            }
            //清理
            this.shp.graphics.clear();
            //重绘
            this.shp.graphics.lineStyle(kd, color);
            this.shp.graphics.moveTo(this.x, this.y);
            this.shp.graphics.lineTo(egP.x, egP.y);
            this.shp.graphics.endFill();
            this.shp.alpha = alpha;
        };
        JiGuangWuqi.prototype.clear = function () {
            this.shp.graphics.clear();
            if (this.shp.parent)
                this.fc.battle_scene.removeChild(this.shp);
            this.is_hit = false;
        };
        return JiGuangWuqi;
    }(djwq.DJWQBase));
    djwq.JiGuangWuqi = JiGuangWuqi;
    __reflect(JiGuangWuqi.prototype, "djwq.JiGuangWuqi");
})(djwq || (djwq = {}));
//# sourceMappingURL=JiGuangWuqi.js.map