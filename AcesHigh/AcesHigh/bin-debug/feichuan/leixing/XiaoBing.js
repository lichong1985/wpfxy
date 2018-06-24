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
var feichuan;
(function (feichuan) {
    var XiaoBing = (function (_super) {
        __extends(XiaoBing, _super);
        function XiaoBing(battle_scends, addPoint, toPoint, jName) {
            var _this = _super.call(this, battle_scends, addPoint, GameConstant.ZHEN_YING.DI_JUN) || this;
            _this.fc_type = feichuan.FC_TYPE.DIJI;
            _this.initJson(jName);
            _this.initTestFchuan();
            _this.toPoint = Tools.egretTOp2(toPoint);
            return _this;
        }
        //做一个 飞船
        XiaoBing.prototype.initTestFchuan = function () {
            this.angularDamping = 0.6;
            this.mass = 100;
            this.damping = 0.5;
        };
        return XiaoBing;
    }(feichuan.FeiChuanBase));
    feichuan.XiaoBing = XiaoBing;
    __reflect(XiaoBing.prototype, "feichuan.XiaoBing");
})(feichuan || (feichuan = {}));
//# sourceMappingURL=XiaoBing.js.map