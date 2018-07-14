var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var bean;
(function (bean) {
    var HitBean = (function () {
        function HitBean(mk, hitNumb) {
            this.mk = mk;
            this.hitNumb = hitNumb;
        }
        return HitBean;
    }());
    bean.HitBean = HitBean;
    __reflect(HitBean.prototype, "bean.HitBean");
})(bean || (bean = {}));
//# sourceMappingURL=HitBean.js.map