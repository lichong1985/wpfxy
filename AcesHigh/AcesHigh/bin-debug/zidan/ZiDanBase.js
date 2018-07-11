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
        function ZiDanBase(scene, zhenying, mass, wqt) {
            var _this = _super.call(this, { mass: mass }) || this;
            //尾翼cd
            _this.wyCD = 25;
            _this.wyMark = 0;
            _this.is_updata = false;
            //碰撞次数
            _this.collNumber = 1;
            //攻击力
            _this.hitNumber = 1;
            //是否是第一次碰撞
            _this.is_first = true;
            //发射标记时间
            _this.mark_time = egret.getTimer();
            //生命周期
            _this.sheng_ming_zhou_qi = 10000;
            //是否添加的移除列表
            _this.isAddRem = false;
            _this.zhenying = zhenying;
            _this.wqt = wqt;
            _this.scene = scene;
            _this.yueShulist = new Array();
            _this.initColl();
            _this.initZidan();
            return _this;
        }
        ZiDanBase.prototype.initZidan = function () {
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO] });
            this.addShape(box);
            box.collisionMask = this.collMask;
            box.collisionGroup = this.collGroup;
        };
        //约束
        ZiDanBase.prototype.yue_shu = function () {
        };
        //初始化碰撞参数
        ZiDanBase.prototype.initColl = function () {
            if (this.zhenying == GameConstant.ZHEN_YING.WO_JUN_ZIDAN) {
                this.collGroup = GameConstant.WO_JUN_ZIDAN;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.DI_JUN_ZIDAN) {
                this.collGroup = GameConstant.DI_JUN_ZIDAN;
                this.collMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                this.collGroup = GameConstant.ZHONG_LI;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN | GameConstant.WO_JUN_ZIDAN | GameConstant.DI_JUN_ZIDAN;
            }
        };
        ZiDanBase.prototype.texiao = function () {
            this.dell(this.bitmap);
        };
        //移除特效
        ZiDanBase.prototype.removeTeXiao = function () {
            this.addRemove();
        };
        ZiDanBase.prototype.addRemove = function () {
            this.scene.ovzRemoveZiDanBodyList.push(this);
        };
        //移除缓动动画
        ZiDanBase.prototype.dell = function (DD) {
            if (DD) {
                if (DD.parent) {
                    egret.Tween.removeTweens(DD);
                    this.scene.removeChild(DD);
                }
            }
            DD = null;
        };
        //移除约束
        ZiDanBase.prototype.removeYueShu = function () {
            if (this.yueShulist.length <= 0) {
                return;
            }
            var size = this.yueShulist.length;
            for (var i = 0; i < size; i++) {
                var ys = this.yueShulist.pop();
                this.scene.world.removeConstraint(ys);
            }
        };
        ZiDanBase.prototype.updata = function () {
        };
        //添加尾翼
        ZiDanBase.prototype.weiyi = function (name) {
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
            b.scaleX = 0.3;
            b.scaleY = 0.3;
            this.scene.addChild(b);
            b.alpha = 0.5;
            egret.Tween.get(b).to({ "scaleX": 0.3, "scaleY": 0.3 }, 110).call(this.dell, this, [b]);
        };
        return ZiDanBase;
    }(p2.Body));
    zidan.ZiDanBase = ZiDanBase;
    __reflect(ZiDanBase.prototype, "zidan.ZiDanBase");
})(zidan || (zidan = {}));
//# sourceMappingURL=ZiDanBase.js.map