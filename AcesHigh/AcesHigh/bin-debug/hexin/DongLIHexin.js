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
var mokuai;
(function (mokuai) {
    /**
     * 飞船动力核心
     */
    var DongLiHeXin = (function (_super) {
        __extends(DongLiHeXin, _super);
        function DongLiHeXin(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, moKuaiPost, shapeType, bitName, fc) || this;
            _this.moKuaiType = mokuai.MO_KUAI_TYPE.HE_XIN;
            return _this;
        }
        return DongLiHeXin;
    }(mokuai.MoKuaiBase));
    mokuai.DongLiHeXin = DongLiHeXin;
    __reflect(DongLiHeXin.prototype, "mokuai.DongLiHeXin");
})(mokuai || (mokuai = {}));
//# sourceMappingURL=DongLIHexin.js.map