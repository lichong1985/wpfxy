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
    var JuZhenJidui = (function (_super) {
        __extends(JuZhenJidui, _super);
        function JuZhenJidui(battle_scends, info, cs_pos) {
            var _this = this;
            egret.log("JJJJJJJJJJJJJJJJJJJJJJJDDDDDDDDDDDDDDDDDDDDDD:" + info.width * info.height);
            _this = _super.call(this, battle_scends, cs_pos, GameConstant.ZHEN_YING.DI_JUN, info.height * info.width) || this;
            _this.fc_type = feichuan.FC_TYPE.DIJI;
            _this.initJson(info);
            _this.initTestFchuan();
            return _this;
        }
        //做一个 飞船
        JuZhenJidui.prototype.initTestFchuan = function () {
            this.angularDamping = 0;
            this.mass = this.W * this.H * 5;
            this.damping = 0;
        };
        return JuZhenJidui;
    }(feichuan.FeiChuanBase));
    feichuan.JuZhenJidui = JuZhenJidui;
    __reflect(JuZhenJidui.prototype, "feichuan.JuZhenJidui");
})(feichuan || (feichuan = {}));
//# sourceMappingURL=JuZhenJidui.js.map