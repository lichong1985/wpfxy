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
var bj;
(function (bj) {
    var BeiJingScene = (function (_super) {
        __extends(BeiJingScene, _super);
        function BeiJingScene() {
            var _this = _super.call(this) || this;
            _this.name_1 = "xx1";
            _this.name_2 = "xx2";
            _this.init();
            return _this;
        }
        BeiJingScene.prototype.init = function () {
        };
        return BeiJingScene;
    }(egret.DisplayObjectContainer));
    bj.BeiJingScene = BeiJingScene;
    __reflect(BeiJingScene.prototype, "bj.BeiJingScene");
})(bj || (bj = {}));
//# sourceMappingURL=BeiJingScene.js.map