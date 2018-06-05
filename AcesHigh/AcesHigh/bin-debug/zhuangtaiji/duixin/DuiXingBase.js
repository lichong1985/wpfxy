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
var duixing;
(function (duixing) {
    var DuiXingBase = (function (_super) {
        __extends(DuiXingBase, _super);
        function DuiXingBase() {
            return _super.call(this) || this;
        }
        return DuiXingBase;
    }(zhuangtaiji.ZhuangTaiJiBase));
    duixing.DuiXingBase = DuiXingBase;
    __reflect(DuiXingBase.prototype, "duixing.DuiXingBase");
})(duixing || (duixing = {}));
//# sourceMappingURL=DuiXingBase.js.map