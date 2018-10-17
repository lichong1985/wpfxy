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
var bj;
(function (bj) {
    var XingXing = (function (_super) {
        __extends(XingXing, _super);
        //rt 位置随机的类型 1 全图随机 2 x方向随机
        function XingXing(zl, rt) {
            var _this = _super.call(this, { mass: 1 }) || this;
            _this.ry = 900; //随机的y轴坐标
            _this.is_jiasu = false;
            _this.name = "xx1";
            _this.sf = Tools.GetRandomNum(5, 10) * 0.1;
            _this.tm = Tools.GetRandomNum(5, 10) * 0.1;
            _this.zl = zl;
            _this.w = Tools.getPhoneW();
            _this.h = Tools.getPhoneH();
            _this.rx = Tools.GetRandomNum(0, _this.w) + 1000;
            if (rt == 1) {
                _this.ry = Tools.GetRandomNum(0, _this.h) + 1000;
            }
            _this.initZidan();
            return _this;
        }
        XingXing.prototype.initZidan = function () {
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO] });
            this.addShape(box);
            box.collisionMask = GameConstant.XING_XING;
            box.collisionGroup = GameConstant.WO_JUN;
            this.bitmap = new egret.Bitmap(RES.getRes(this.name));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = this.sf;
            this.bitmap.scaleY = this.sf;
            this.bitmap.alpha = this.tm;
            this.displays = [this.bitmap];
            var p = Tools.egretTOp2(egret.Point.create(this.rx, this.ry));
            this.position = [p.x, p.y];
            this.velocity = [0, -this.zl];
        };
        //重新回到顶点
        XingXing.prototype.reTop = function () {
            this.rx = Tools.GetRandomNum(0, this.w) + 1000;
            this.ry = 900;
            var p = Tools.egretTOp2(egret.Point.create(this.rx, this.ry));
            this.position = [p.x, p.y];
        };
        XingXing.prototype.jiasu = function () {
            this.velocity = [0, -this.zl * 8];
            egret.log("++++++++++++++++++++");
        };
        XingXing.prototype.jiansu = function () {
            this.velocity = [0, -this.zl];
        };
        return XingXing;
    }(p2.Body));
    bj.XingXing = XingXing;
    __reflect(XingXing.prototype, "bj.XingXing");
})(bj || (bj = {}));
//# sourceMappingURL=XingXing.js.map