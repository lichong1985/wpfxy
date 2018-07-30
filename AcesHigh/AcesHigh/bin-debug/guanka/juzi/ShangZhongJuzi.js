var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var juzi;
(function (juzi) {
    //上中结构句子
    var ShangZhongJuzi = (function () {
        function ShangZhongJuzi() {
        }
        //初始化随机的飞机
        ShangZhongJuzi.prototype.initFC = function () {
        };
        return ShangZhongJuzi;
    }());
    juzi.ShangZhongJuzi = ShangZhongJuzi;
    __reflect(ShangZhongJuzi.prototype, "juzi.ShangZhongJuzi");
})(juzi || (juzi = {}));
//# sourceMappingURL=ShangZhongJuzi.js.map