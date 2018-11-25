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
    var BeiJing = (function (_super) {
        __extends(BeiJing, _super);
        function BeiJing() {
            var _this = _super.call(this) || this;
            _this.drawGrid();
            return _this;
        }
        BeiJing.prototype.drawGrid = function () {
            this.graphics.beginFill(0x000000);
            this.graphics.drawRect(0, 0, Tools.getPhoneW(), Tools.getPhoneH());
            this.graphics.endFill();
        };
        return BeiJing;
    }(egret.Sprite));
    zy.BeiJing = BeiJing;
    __reflect(BeiJing.prototype, "zy.BeiJing");
})(zy || (zy = {}));
//# sourceMappingURL=BeiJing.js.map