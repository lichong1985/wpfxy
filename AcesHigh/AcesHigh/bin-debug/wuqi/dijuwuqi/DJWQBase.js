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
var djwq;
(function (djwq) {
    var DJWQBase = (function (_super) {
        __extends(DJWQBase, _super);
        function DJWQBase(suzhu, moKuaiPost, shapeType, bitName, w_t) {
            var _this = _super.call(this, moKuaiPost, shapeType, bitName, w_t, suzhu) || this;
            _this.cd = 5000;
            return _this;
        }
        //射击
        DJWQBase.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
        };
        return DJWQBase;
    }(wuqi.WuQiBase));
    djwq.DJWQBase = DJWQBase;
    __reflect(DJWQBase.prototype, "djwq.DJWQBase");
})(djwq || (djwq = {}));
//# sourceMappingURL=DJWQBase.js.map