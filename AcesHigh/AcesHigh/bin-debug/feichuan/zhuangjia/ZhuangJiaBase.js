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
    /**
     * 装甲 基类
     */
    var ZhuangJiaBase = (function (_super) {
        __extends(ZhuangJiaBase, _super);
        function ZhuangJiaBase(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, moKuaiPost, shapeType, bitName, fc) || this;
            _this.moKuaiType = mokuai.MO_KUAI_TYPE.ZHUANG_JIA;
            return _this;
        }
        return ZhuangJiaBase;
    }(mokuai.MoKuaiBase));
    zhuangjia.ZhuangJiaBase = ZhuangJiaBase;
    __reflect(ZhuangJiaBase.prototype, "zhuangjia.ZhuangJiaBase");
})(zhuangjia || (zhuangjia = {}));
//# sourceMappingURL=ZhuangJiaBase.js.map