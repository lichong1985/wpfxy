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
var zhuangjia;
(function (zhuangjia) {
    var PuTongZhuangJia = (function (_super) {
        __extends(PuTongZhuangJia, _super);
        function PuTongZhuangJia(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, moKuaiPost, shapeType, bitName, fc) || this;
            _this.markNumber = 3;
            _this.hp = 0; //装甲血量
            return _this;
        }
        PuTongZhuangJia.prototype.Defense = function () {
            this.markNumber--;
            if (this.markNumber <= 0) {
                return false;
            }
            return true;
        };
        return PuTongZhuangJia;
    }(zhuangjia.ZhuangJiaBase));
    zhuangjia.PuTongZhuangJia = PuTongZhuangJia;
    __reflect(PuTongZhuangJia.prototype, "zhuangjia.PuTongZhuangJia");
})(zhuangjia || (zhuangjia = {}));
//# sourceMappingURL=PuTongZhuangJia.js.map