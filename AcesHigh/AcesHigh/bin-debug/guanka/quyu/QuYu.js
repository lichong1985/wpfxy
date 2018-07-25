var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var quyu;
(function (quyu) {
    var QuYu = (function () {
        function QuYu() {
        }
        //初始化飞船
        QuYu.prototype.initFc = function () {
        };
        return QuYu;
    }());
    quyu.QuYu = QuYu;
    __reflect(QuYu.prototype, "quyu.QuYu");
})(quyu || (quyu = {}));
//# sourceMappingURL=QuYu.js.map