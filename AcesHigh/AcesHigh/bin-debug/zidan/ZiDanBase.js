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
    var ZiDanBase = (function (_super) {
        __extends(ZiDanBase, _super);
        function ZiDanBase(zhenying, mass, wqt) {
            var _this = _super.call(this, { mass: mass }) || this;
            _this.is_kick = true;
            _this.is_coll = true;
            _this.zhenying = zhenying;
            _this.wqt = wqt;
            _this.initColl();
            _this.initZidan();
            return _this;
        }
        ZiDanBase.prototype.initZidan = function () {
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            this.addShape(box);
            box.collisionMask = this.collMask;
            box.collisionGroup = this.collGroup;
        };
        //初始化碰撞参数
        ZiDanBase.prototype.initColl = function () {
            if (this.zhenying == GameConstant.ZHEN_YING.WO_JUN) {
                this.collGroup = GameConstant.WO_JUN;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.DI_JUN) {
                this.collGroup = GameConstant.DI_JUN;
                this.collMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                this.collGroup = GameConstant.ZHONG_LI;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN;
            }
        };
        ZiDanBase.prototype.updata = function () {
        };
        return ZiDanBase;
    }(p2.Body));
    zidan.ZiDanBase = ZiDanBase;
    __reflect(ZiDanBase.prototype, "zidan.ZiDanBase");
})(zidan || (zidan = {}));
//# sourceMappingURL=ZiDanBase.js.map