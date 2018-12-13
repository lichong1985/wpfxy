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
            //螺旋角度
            _this.lx = 0;
            //连击次数
            _this.lianji = 1;
            _this.lianji_mark = 1;
            //伤害相关
            _this.hit = 5;
            //升级特效显示次数
            _this.sj_number = 0;
            _this.jia_hao = 100;
            _this.moKuaiType = mokuai.MO_KUAI_TYPE.WU_QI;
            _this.wuqi_type = wuqii_type;
            // this.tx = new egret.Bitmap(RES.getRes(name));
            // this.tx.anchorOffsetX = this.width * 0.5;
            // this.tx.anchorOffsetY = this.height * 0.5;
            _this.lianji_mark = _this.lianji;
            return _this;
        }
        WuQiBase.prototype.updata_wq = function (angel, suke, now) {
            this.updata();
            this.lx += 0.1;
            if ((now - this.mark_time) > this.cd && this.fc.zhenying == GameConstant.ZHEN_YING.WO_JUN) {
                // this.mark_time = now;
                this.fashe(angel, suke, now);
                return;
            }
        };
        WuQiBase.prototype.updata = function () {
            if (egret.getTimer() > this.jia_hao) {
                this.jia_hao = egret.getTimer() + 100;
                if (this.sj_number > 0) {
                    this.shengjiTexiao();
                }
            }
        };
        WuQiBase.prototype.fashe = function (angel, suke, now) {
            this.fasheTeXiao();
            this.mark_time += 200;
            this.lianji_mark--;
            if (this.lianji_mark <= 0) {
                this.mark_time = now;
                this.lianji_mark = this.lianji;
            }
        };
        //发射特效
        WuQiBase.prototype.fasheTeXiao = function () {
            var tw = egret.Tween.get(this);
            tw.to({ "scaleX": 2.2, "scaleY": 2.2, "alpha": 0.8 }, 100).call(this.huizhi);
        };
        //升级特效
        WuQiBase.prototype.shengjiTexiao = function () {
            var name = "";
            if (this.level == 1) {
                name = "bai_j";
            }
            if (this.level == 2) {
                name = "lv_j";
            }
            if (this.level == 3) {
                name = "lan_j";
            }
            if (this.level == 4) {
                name = "zi_j";
            }
            if (this.level >= 5) {
                name = "cheng_j";
            }
            var jia = new egret.Bitmap(RES.getRes(name));
            jia.anchorOffsetX = jia.width * 0.5;
            jia.anchorOffsetY = jia.height * 0.5;
            jia.x = this.x;
            jia.y = this.y;
            this.fc.battle_scene.addChild(jia);
            jia.scaleX;
            egret.Tween.get(jia).to({ "alpha": 0, "scaleX": 3, "scaleY": 3 }, 1000).call(function (j) {
                if (j.parent) {
                    j.parent.removeChild(j);
                }
            }, this, [jia]);
            this.sj_number--;
        };
        //特效回执
        WuQiBase.prototype.huizhi = function () {
            this.scaleX = 1;
            this.scaleY = 1;
            this.alpha = 1;
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
            zd.hitNumber = this.hit;
            zd.yue_shu();
            return zd;
        };
        return WuQiBase;
    }(mokuai.MoKuaiBase));
    wuqi.WuQiBase = WuQiBase;
    __reflect(WuQiBase.prototype, "wuqi.WuQiBase");
})(wuqi || (wuqi = {}));
//# sourceMappingURL=WuQiBase.js.map