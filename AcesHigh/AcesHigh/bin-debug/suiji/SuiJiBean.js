var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var suiji;
(function (suiji) {
    var ShuiJiBean = (function () {
        function ShuiJiBean() {
        }
        return ShuiJiBean;
    }());
    suiji.ShuiJiBean = ShuiJiBean;
    __reflect(ShuiJiBean.prototype, "suiji.ShuiJiBean");
})(suiji || (suiji = {}));
//# sourceMappingURL=SuiJiBean.js.map