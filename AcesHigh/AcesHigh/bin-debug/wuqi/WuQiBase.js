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
        WUQI_TYPE[WUQI_TYPE["GEN_ZHONG"] = 11] = "GEN_ZHONG";
        WUQI_TYPE[WUQI_TYPE["SAN_DAN"] = 12] = "SAN_DAN";
        WUQI_TYPE[WUQI_TYPE["SHE_XIAN"] = 13] = "SHE_XIAN";
        WUQI_TYPE[WUQI_TYPE["DING_XIANG"] = 14] = "DING_XIANG";
        WUQI_TYPE[WUQI_TYPE["YU_LEI"] = 15] = "YU_LEI";
        WUQI_TYPE[WUQI_TYPE["LUO_XUAN"] = 16] = "LUO_XUAN";
        WUQI_TYPE[WUQI_TYPE["CHANG_DING"] = 17] = "CHANG_DING";
        WUQI_TYPE[WUQI_TYPE["ZHONG_CHUI"] = 18] = "ZHONG_CHUI";
        WUQI_TYPE[WUQI_TYPE["DJ_SAN_DAN"] = 19] = "DJ_SAN_DAN";
    })(WUQI_TYPE = wuqi.WUQI_TYPE || (wuqi.WUQI_TYPE = {}));
    var WuQiBase = (function (_super) {
        __extends(WuQiBase, _super);
        function WuQiBase(mokaiPos, shType, name, wuqii_type, fc) {
            var _this = _super.call(this, mokaiPos, shType, name, fc) || this;
            //武器攻击cd 单位毫秒
            _this.cd = 2000;
            //时间标记 上一次攻击的时间
            _this.mark_time = 0;
            //速度
            _this.sudu = 5;
            //武器等级
            _this.level = 1;
            _this.moKuaiType = mokuai.MO_KUAI_TYPE.WU_QI;
            _this.wuqi_type = wuqii_type;
            return _this;
        }
        WuQiBase.prototype.updata_wq = function (angel, suke, now) {
            this.updata();
            if ((now - this.mark_time) > this.cd && this.fc.zhenying == GameConstant.ZHEN_YING.WO_JUN) {
                this.mark_time = now;
                this.fashe(angel, suke, now);
                return;
            }
        };
        WuQiBase.prototype.updata = function () {
        };
        WuQiBase.prototype.fashe = function (angel, suke, now) {
        };
        //送出子弹
        WuQiBase.prototype.diu = function (w_t, v, zy, angle) {
            var zd;
            if (w_t == WUQI_TYPE.ZHI_SHE) {
                zd = new zidan.ZhiSheZhiDan(this.fc.battle_scene, zy, 0.001);
            }
            if (w_t == WUQI_TYPE.DING_WEI) {
                zd = new zidan.DingWeiZidan(this.fc.battle_scene, zy, 0.0001);
            }
            if (w_t == WUQI_TYPE.JIAN_SU) {
                zd = new zidan.JianSuZiDan(this.fc.battle_scene, zy, 0.0001);
            }
            if (w_t == WUQI_TYPE.KAI_HUA) {
                zd = new zidan.KaiHuaZiDan(this.fc.battle_scene, zy, 0.0001);
            }
            if (w_t == WUQI_TYPE.GEN_ZHONG) {
                zd = new zidan.GenZongZiDan(this.fc.battle_scene, zy, 0.0001, this.fc.battle_scene.sk);
            }
            if (w_t == wuqi.WUQI_TYPE.SAN_DAN) {
                zd = new zidan.SanDanZiDan(this.fc.battle_scene, zy, 0.0001);
            }
            if (w_t == wuqi.WUQI_TYPE.DAO_DAN) {
                zd = new zidan.DaoDanZiDan(this.fc.battle_scene, zy, 0.0001, this.tiaget_fc);
            }
            if (w_t == wuqi.WUQI_TYPE.DING_XIANG) {
                zd = new zidan.DingXiangZiDan(this.fc.battle_scene, zy, 0.0001);
            }
            if (w_t == wuqi.WUQI_TYPE.YU_LEI) {
                zd = new zidan.YuLeiZiDan(this.fc.battle_scene, zy, 0.0001);
            }
            if (w_t == wuqi.WUQI_TYPE.LUO_XUAN) {
                zd = new zidan.LuoXuanZiDan(this.fc.battle_scene, zy, 0.0001);
            }
            if (w_t == wuqi.WUQI_TYPE.CHANG_DING) {
                zd = new zidan.ChangDingZiDan(this.fc.battle_scene, zy, 0.0001, this.level);
            }
            if (w_t == wuqi.WUQI_TYPE.ZHONG_CHUI) {
                zd = new zidan.ZhongChuiZiDan(this.fc.battle_scene, zy, 0.0001, this.level);
            }
            if (w_t == wuqi.WUQI_TYPE.DJ_SAN_DAN) {
                zd = new zidan.DJSanDanZiDan(this.fc.battle_scene, zy, 0.0001);
            }
            zd.angle = angle;
            this.fc.battle_scene.world.addBody(zd);
            this.fc.battle_scene.addChild(zd.bitmap);
            var p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            zd.position[0] = p.x;
            zd.position[1] = p.y;
            zd.velocity = [v.x, v.y];
            zd.yue_shu();
        };
        return WuQiBase;
    }(mokuai.MoKuaiBase));
    wuqi.WuQiBase = WuQiBase;
    __reflect(WuQiBase.prototype, "wuqi.WuQiBase");
})(wuqi || (wuqi = {}));
//# sourceMappingURL=WuQiBase.js.map