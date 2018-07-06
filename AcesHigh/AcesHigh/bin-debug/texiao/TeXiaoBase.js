var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var texiao;
(function (texiao) {
    var TeXiaoBase = (function () {
        function TeXiaoBase(bit_name) {
            this.bit = new egret.Bitmap(RES.getRes(bit_name));
        }
        //执行特效
        TeXiaoBase.prototype.goto = function () {
        };
        return TeXiaoBase;
    }());
    texiao.TeXiaoBase = TeXiaoBase;
    __reflect(TeXiaoBase.prototype, "texiao.TeXiaoBase");
})(texiao || (texiao = {}));
//# sourceMappingURL=TeXiaoBase.js.map