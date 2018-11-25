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
var zy;
(function (zy) {
    var ziyeMi = (function (_super) {
        __extends(ziyeMi, _super);
        function ziyeMi(z) {
            var _this = _super.call(this) || this;
            _this.width = Tools.getPhoneW();
            _this.height = Tools.getPhoneH();
            _this.z = z;
            _this.x = 0;
            _this.y = 0;
            return _this;
        }
        return ziyeMi;
    }(egret.DisplayObjectContainer));
    zy.ziyeMi = ziyeMi;
    __reflect(ziyeMi.prototype, "zy.ziyeMi");
})(zy || (zy = {}));
//# sourceMappingURL=ziyeMi.js.map