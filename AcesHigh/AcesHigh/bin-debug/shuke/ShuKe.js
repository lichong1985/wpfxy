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
var shuke;
(function (shuke) {
    var ShuKe = (function (_super) {
        __extends(ShuKe, _super);
        function ShuKe(battle_scene) {
            var _this = _super.call(this, battle_scene, egret.Point.create(scene.scene_anch_x + 640 * 0.5, 2100), GameConstant.ZHEN_YING.WO_JUN) || this;
            _this.fc_type = feichuan.FC_TYPE.SUKE;
            _this.initSuKe();
            return _this;
        }
        //初始化云图
        ShuKe.prototype.initYunTU = function () {
            this.yun_tu =
                [
                    [1, 2, 2, 2, 3],
                ];
        };
        ShuKe.prototype.initSuKe = function () {
            this.initYunTU();
            this.initPro(this.yun_tu);
        };
        ShuKe.prototype.updataPos = function () {
            _super.prototype.updataPos.call(this);
        };
        return ShuKe;
    }(feichuan.FeiChuanBase));
    shuke.ShuKe = ShuKe;
    __reflect(ShuKe.prototype, "shuke.ShuKe");
})(shuke || (shuke = {}));
//# sourceMappingURL=ShuKe.js.map