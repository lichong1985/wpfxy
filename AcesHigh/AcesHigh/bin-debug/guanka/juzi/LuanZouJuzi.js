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
var juzi;
(function (juzi) {
    //乱走句子
    var LuanZouJuzi = (function (_super) {
        __extends(LuanZouJuzi, _super);
        function LuanZouJuzi(nan_du) {
            return _super.call(this, nan_du) || this;
        }
        return LuanZouJuzi;
    }(juzi.JuZiGuanLi));
    juzi.LuanZouJuzi = LuanZouJuzi;
    __reflect(LuanZouJuzi.prototype, "juzi.LuanZouJuzi");
})(juzi || (juzi = {}));
//# sourceMappingURL=LuanZouJuzi.js.map