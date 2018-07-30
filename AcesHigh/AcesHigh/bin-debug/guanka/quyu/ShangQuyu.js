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
var quyu;
(function (quyu) {
    var ShangQuyu = (function (_super) {
        __extends(ShangQuyu, _super);
        function ShangQuyu() {
            var _this = _super.call(this) || this;
            //可以在上部区域实用的类型
            _this.FCS = [guanqia.FC_TYPE.CHUAN_DUI, guanqia.FC_TYPE.KUAN_TI, guanqia.FC_TYPE.NAI_DA, guanqia.FC_TYPE.TONG_YONG];
            return _this;
        }
        ShangQuyu.prototype.initFc = function () {
            _super.prototype.initFc.call(this);
            var i = suiji.GetRandomNum(0, FC_Console.all_list.length);
        };
        return ShangQuyu;
    }(quyu.QuYu));
    quyu.ShangQuyu = ShangQuyu;
    __reflect(ShangQuyu.prototype, "quyu.ShangQuyu");
})(quyu || (quyu = {}));
//# sourceMappingURL=ShangQuyu.js.map