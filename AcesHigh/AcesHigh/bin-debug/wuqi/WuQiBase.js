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
var wuqi;
(function (wuqi) {
    var WUQI_TYPE;
    (function (WUQI_TYPE) {
        WUQI_TYPE[WUQI_TYPE["PU_TONG"] = 0] = "PU_TONG";
        WUQI_TYPE[WUQI_TYPE["ZHI_SHE"] = 1] = "ZHI_SHE";
        WUQI_TYPE[WUQI_TYPE["JI_GUANG"] = 2] = "JI_GUANG";
        WUQI_TYPE[WUQI_TYPE["DAO_DAN"] = 3] = "DAO_DAN";
        WUQI_TYPE[WUQI_TYPE["DA_PAO"] = 4] = "DA_PAO";
        WUQI_TYPE[WUQI_TYPE["ZHI_DAO_JI_GUANG"] = 5] = "ZHI_DAO_JI_GUANG";
        WUQI_TYPE[WUQI_TYPE["CHUAN_JIA_DAN"] = 6] = "CHUAN_JIA_DAN";
        WUQI_TYPE[WUQI_TYPE["YUN_BAO_DAN"] = 7] = "YUN_BAO_DAN";
        WUQI_TYPE[WUQI_TYPE["DING_WEI"] = 8] = "DING_WEI";
        WUQI_TYPE[WUQI_TYPE["JIAN_SU"] = 9] = "JIAN_SU";
        WUQI_TYPE[WUQI_TYPE["KAI_HUA"] = 10] = "KAI_HUA";
    })(WUQI_TYPE = wuqi.WUQI_TYPE || (wuqi.WUQI_TYPE = {}));
    var WuQiBase = (function (_super) {
        __extends(WuQiBase, _super);
        function WuQiBase(mokaiPos, shType, name, wuqii_type, fc) {
            var _this = _super.call(this, mokaiPos, shType, name, fc) || this;
            //武器攻击cd 单位毫秒
            _this.cd = 1000;
            //时间标记 上一次攻击的时间
            _this.mark_time = 0;
            //速度
            _this.sudu = 5;
            _this.moKuaiType = mokuai.MO_KUAI_TYPE.WU_QI;
            _this.wuqi_type = wuqii_type;
            return _this;
        }
        WuQiBase.prototype.updata_wq = function (angel, suke, now) {
            _super.prototype.updata.call(this);
            if ((now - this.mark_time) > this.cd) {
                this.mark_time = now;
                this.fashe(angel, suke, now);
                return;
            }
        };
        WuQiBase.prototype.fashe = function (angel, suke, now) {
        };
        //送出子弹
        WuQiBase.prototype.diu = function (w_t, v, zy, angle) {
            // egret.log("DDDDDDDDDDDDDDDDDDDDDDDDDDD:" + w_t + " || (" + v.x + "," + v.y + ")  || " + zy);
            var zd;
            if (w_t == WUQI_TYPE.ZHI_SHE) {
                zd = new zidan.ZhiSheZhiDan(zy, 0.0001);
            }
            if (w_t == WUQI_TYPE.DING_WEI) {
                zd = new zidan.DingWeiZidan(zy, 0.0001);
            }
            if (w_t == WUQI_TYPE.JIAN_SU) {
                zd = new zidan.JianSuZiDan(zy, 0.0001);
            }
            if (w_t == WUQI_TYPE.KAI_HUA) {
                // zd = new zidan.KaiHuaZiDan(zy, 0.0001);
                zd = new zidan.GenZongZiDan(zy, 0.0001, this.fc.battle_scene.sk);
            }
            zd.angle = angle;
            this.fc.battle_scene.world.addBody(zd);
            this.fc.battle_scene.addChild(zd.bitmap);
            var p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            zd.position[0] = p.x;
            zd.position[1] = p.y;
            zd.velocity = [v.x, v.y];
        };
        return WuQiBase;
    }(mokuai.MoKuaiBase));
    wuqi.WuQiBase = WuQiBase;
    __reflect(WuQiBase.prototype, "wuqi.WuQiBase");
})(wuqi || (wuqi = {}));
//# sourceMappingURL=WuQiBase.js.map