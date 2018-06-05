var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var zhuangtaiji;
(function (zhuangtaiji) {
    var ZhuangTaiJiBase = (function () {
        function ZhuangTaiJiBase() {
        }
        //进步器
        ZhuangTaiJiBase.prototype.upStep = function (time) {
        };
        return ZhuangTaiJiBase;
    }());
    zhuangtaiji.ZhuangTaiJiBase = ZhuangTaiJiBase;
    __reflect(ZhuangTaiJiBase.prototype, "zhuangtaiji.ZhuangTaiJiBase");
})(zhuangtaiji || (zhuangtaiji = {}));
//# sourceMappingURL=ZhuangTaiJi.js.map