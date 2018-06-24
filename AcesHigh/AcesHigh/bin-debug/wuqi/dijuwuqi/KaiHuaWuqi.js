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
    //直射类武器
    var KaiHuaWuqi = (function (_super) {
        __extends(KaiHuaWuqi, _super);
        function KaiHuaWuqi(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.KAI_HUA) || this;
            _this.small_cd = 2000;
            _this.mark_small_time = 0;
            //每次发射的数量
            _this.shu_liang = 0;
            _this.shu_liang_mark = 5;
            _this.cd = 500;
            _this.shu_liang_mark = 5;
            _this.shu_liang = _this.shu_liang_mark;
            _this.sudu = 1.2;
            return _this;
        }
        //射击
        KaiHuaWuqi.prototype.fashe = function (angel, suke, now) {
            if ((now - this.mark_small_time) > this.small_cd) {
                if (this.shu_liang > 0) {
                    var angle = this.fc.angle;
                    var liliang = egret.Point.create(0, this.sudu);
                    this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
                    this.shu_liang--;
                }
                else {
                    this.mark_small_time = now + this.small_cd;
                    this.shu_liang = this.shu_liang_mark;
                }
            }
        };
        return KaiHuaWuqi;
    }(djwq.DJWQBase));
    djwq.KaiHuaWuqi = KaiHuaWuqi;
    __reflect(KaiHuaWuqi.prototype, "djwq.KaiHuaWuqi");
})(djwq || (djwq = {}));
//# sourceMappingURL=KaiHuaWuqi.js.map