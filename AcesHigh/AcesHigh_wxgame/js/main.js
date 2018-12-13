var egret = window.egret;var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var mokuai;
(function (mokuai) {
    // 约束方向枚举
    var ConstraintDirect;
    (function (ConstraintDirect) {
        ConstraintDirect[ConstraintDirect["TOP"] = 0] = "TOP";
        ConstraintDirect[ConstraintDirect["BOTTOM"] = 1] = "BOTTOM";
        ConstraintDirect[ConstraintDirect["LEFT"] = 2] = "LEFT";
        ConstraintDirect[ConstraintDirect["RIGHT"] = 3] = "RIGHT";
    })(ConstraintDirect = mokuai.ConstraintDirect || (mokuai.ConstraintDirect = {}));
    //模块体积类型
    var BODY_SHAPE_TYPE;
    (function (BODY_SHAPE_TYPE) {
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["NANO"] = 0] = "NANO";
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["SIMPLE"] = 1] = "SIMPLE";
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["FF"] = 2] = "FF";
        BODY_SHAPE_TYPE[BODY_SHAPE_TYPE["NN"] = 3] = "NN"; //3乘3
    })(BODY_SHAPE_TYPE = mokuai.BODY_SHAPE_TYPE || (mokuai.BODY_SHAPE_TYPE = {}));
    //模块类型
    var MO_KUAI_TYPE;
    (function (MO_KUAI_TYPE) {
        MO_KUAI_TYPE[MO_KUAI_TYPE["HE_XIN"] = 0] = "HE_XIN";
        MO_KUAI_TYPE[MO_KUAI_TYPE["ZHUANG_JIA"] = 1] = "ZHUANG_JIA";
        MO_KUAI_TYPE[MO_KUAI_TYPE["WU_QI"] = 2] = "WU_QI";
        MO_KUAI_TYPE[MO_KUAI_TYPE["CAN_HAI"] = 3] = "CAN_HAI"; //残骸
    })(MO_KUAI_TYPE = mokuai.MO_KUAI_TYPE || (mokuai.MO_KUAI_TYPE = {}));
    //体型与尺寸
    mokuai.SIMPLE_SIZE = 16;
    mokuai.FF_SIZE = 16 * 2;
    mokuai.NN_SIZE = 16 * 3;
    mokuai.NANO_SIZE_PH = 8 / 50;
    mokuai.SIMPLE_SIZE_PH = 16 / 50;
    mokuai.FF_SIZE_PH = 16 * 2 / 50;
    mokuai.NN_SIZE_PH = 16 * 3 / 50;
    mokuai.M_SIZE = [mokuai.SIMPLE_SIZE, mokuai.FF_SIZE, mokuai.NN_SIZE];
    mokuai.M_SIZE_PH = [mokuai.NANO_SIZE_PH, mokuai.SIMPLE_SIZE_PH, mokuai.FF_SIZE_PH, mokuai.NN_SIZE_PH];
    //模块基类  
    var MoKuaiBase = (function (_super) {
        __extends(MoKuaiBase, _super);
        function MoKuaiBase(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, RES.getRes(bitName)) || this;
            /**
             * 队列标记
             */
            _this.mark_number = -1;
            //是否冲herd中移除
            _this.rm_herd = false;
            //-------------------------------------装甲等级相关------------------------------------------------
            //模块当前等级
            _this.mk_level = 1;
            //当前等级剩余耐打次数
            _this.dk_now = 1;
            //总血量
            _this.all_dk = 0;
            //pi标记
            _this.pi_mark = 1;
            //武器号  渐变用的
            _this.wq_numb = 0;
            //-----------------------------------------------------------------------------------------
            //相对距离
            _this.relativeDistance = egret.Point.create(0, 0);
            //---------------------掉落相关
            //是否是掉落模块
            _this.is_diao_luo = false;
            _this.shapeType = shapeType;
            _this.moKuaiPost = moKuaiPost;
            // this.bodySize = bodySize;
            _this.fc = fc;
            _this.bitName = bitName;
            //初始化锚点
            _this.initAnch();
            return _this;
            //初始化相对距离
            // this.initRelativeDis();
            // 更新模块位置
            // this.UpdataPosition(wroldPointAch);
        }
        //初始化锚点
        MoKuaiBase.prototype.initAnch = function () {
            this.anchorOffsetX = this.width * 0.5;
            this.anchorOffsetY = this.height * 0.5;
        };
        /**
         * 初始化模块位置
         */
        MoKuaiBase.prototype.UpdataPosition = function (p) {
            this.x = p.x + this.relativeDistance.x;
            this.y = p.y + this.relativeDistance.y;
        };
        MoKuaiBase.prototype.updata = function () {
        };
        //模块碰撞检测
        MoKuaiBase.prototype.coll = function (hit) {
            this.dk_now = this.dk_now - hit;
            if (this.dk_now <= 0) {
                //已经被销毁
                return true;
            }
            var now_pi = this.dk_now / this.all_dk;
            var rgb = { "r": 0, "g": 0, "b": 0 };
            if (this.moKuaiType == MO_KUAI_TYPE.ZHUANG_JIA) {
                rgb = mokuai.getRGB_PT(1 - now_pi, this.mk_level);
            }
            if (this.moKuaiType == MO_KUAI_TYPE.CAN_HAI) {
                rgb = mokuai.getRGB_CH(1 - now_pi, this.mk_level);
            }
            if (this.moKuaiType == MO_KUAI_TYPE.WU_QI) {
                rgb = mokuai.getRGB_WQ(1 - now_pi, this.wq_numb);
            }
            //变色
            var colorMatrix = [
                1, 0, 0, 0, rgb.r,
                0, 1, 0, 0, rgb.g,
                0, 0, 1, 0, rgb.b,
                0, 0, 0, 1, 0
            ];
            var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
            this.filters = [colorFlilter];
            return false;
        };
        //设置装甲等级
        MoKuaiBase.prototype.setMkLevel = function (level) {
            this.mk_level = level;
            this.dk_now = level * 5;
            this.all_dk = this.dk_now;
        };
        //移除缓动动画
        MoKuaiBase.prototype.dell = function (DD) {
            if (DD.parent) {
                this.fc.battle_scene.removeChild(DD);
            }
            DD = null;
        };
        MoKuaiBase.prototype.jihui_texiao = function () {
            this.zjsp();
            this.zjsp();
            this.zjsp();
        };
        //装甲碎片粒子
        MoKuaiBase.prototype.zjsp = function () {
            var b = new egret.Bitmap(RES.getRes(this.bitName));
            b.x = this.x;
            b.y = this.y;
            this.fc.battle_scene.addChild(b);
            b.anchorOffsetX = b.width * 0.5;
            b.anchorOffsetY = b.height * 0.5;
            //缩放
            var scale = Tools.GetRandomNum(1, 3) * 0.1;
            b.scaleX = scale;
            b.scaleY = scale;
            var r = 100;
            var x = Tools.GetRandomNum(-r, r);
            var y = Tools.GetRandomNum(-r, r);
            var t = Tools.GetRandomNum(100, 600);
            egret.Tween.get(b).to({ "x": this.x + x, "y": this.y + y }, t).call(this.dell, this, [b]);
        };
        return MoKuaiBase;
    }(egret.Bitmap));
    mokuai.MoKuaiBase = MoKuaiBase;
    __reflect(MoKuaiBase.prototype, "mokuai.MoKuaiBase");
})(mokuai || (mokuai = {}));
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
var zhuangtaiji;
(function (zhuangtaiji) {
    var ZT_TYPE;
    (function (ZT_TYPE) {
        ZT_TYPE[ZT_TYPE["SINGO_MOVE_ING"] = 0] = "SINGO_MOVE_ING";
        ZT_TYPE[ZT_TYPE["SINGO_MOVE_OVER"] = 1] = "SINGO_MOVE_OVER";
        ZT_TYPE[ZT_TYPE["JIAN_SI_MOVE_ING"] = 2] = "JIAN_SI_MOVE_ING";
        ZT_TYPE[ZT_TYPE["JIAN_SI_MOVE_OVER"] = 3] = "JIAN_SI_MOVE_OVER";
        ZT_TYPE[ZT_TYPE["XUAN_ZHUAN"] = 4] = "XUAN_ZHUAN";
        ZT_TYPE[ZT_TYPE["XUAN_ZHUAN_OVER"] = 5] = "XUAN_ZHUAN_OVER";
        ZT_TYPE[ZT_TYPE["MIAO_ZHUN_SK"] = 6] = "MIAO_ZHUN_SK";
        ZT_TYPE[ZT_TYPE["MIAO_ZHUN_SK_OVER"] = 7] = "MIAO_ZHUN_SK_OVER";
        ZT_TYPE[ZT_TYPE["YUN_DONG_DAO_HANG_ING"] = 8] = "YUN_DONG_DAO_HANG_ING";
        ZT_TYPE[ZT_TYPE["DAO_HANG"] = 9] = "DAO_HANG";
        ZT_TYPE[ZT_TYPE["DAO_HANG_OVER"] = 10] = "DAO_HANG_OVER";
        ZT_TYPE[ZT_TYPE["PU_TONG_GONG_JI"] = 11] = "PU_TONG_GONG_JI";
        ZT_TYPE[ZT_TYPE["PU_TONG_GONG_JI_OVER"] = 12] = "PU_TONG_GONG_JI_OVER";
        ZT_TYPE[ZT_TYPE["NULL_T"] = 13] = "NULL_T";
        ZT_TYPE[ZT_TYPE["YUAN_TI_DENG_DAI_ING"] = 14] = "YUAN_TI_DENG_DAI_ING";
        ZT_TYPE[ZT_TYPE["YUAN_TI_DENG_DAI_OVER"] = 15] = "YUAN_TI_DENG_DAI_OVER";
        ZT_TYPE[ZT_TYPE["PU_TONG_WU_QI_ING"] = 16] = "PU_TONG_WU_QI_ING";
        ZT_TYPE[ZT_TYPE["PU_TONG_WU_QI_OVER"] = 17] = "PU_TONG_WU_QI_OVER";
        ZT_TYPE[ZT_TYPE["STOP_SHOOT_NOW"] = 18] = "STOP_SHOOT_NOW";
        ZT_TYPE[ZT_TYPE["NO_THING"] = 19] = "NO_THING";
        ZT_TYPE[ZT_TYPE["HUA_XING_ING"] = 20] = "HUA_XING_ING";
        ZT_TYPE[ZT_TYPE["HUA_XING_OVER"] = 21] = "HUA_XING_OVER";
        ZT_TYPE[ZT_TYPE["XUAN_ZHUAN_JIAN_ING"] = 22] = "XUAN_ZHUAN_JIAN_ING";
        ZT_TYPE[ZT_TYPE["ZHENG_XIA_FANG_ING"] = 23] = "ZHENG_XIA_FANG_ING";
    })(ZT_TYPE = zhuangtaiji.ZT_TYPE || (zhuangtaiji.ZT_TYPE = {}));
    var ZhuangTaiJiBase = (function () {
        function ZhuangTaiJiBase() {
        }
        //进步器
        ZhuangTaiJiBase.prototype.upStep = function (time) {
            this.markTime = time;
        };
        //休眠 单位秒
        ZhuangTaiJiBase.prototype.sleep = function (t) {
            this.sleep_long = this.markTime + t * 1000;
        };
        //判断是否是休眠状态
        ZhuangTaiJiBase.prototype.isSleep = function () {
            if (this.markTime < this.sleep_long) {
                return true;
            }
            return false;
        };
        return ZhuangTaiJiBase;
    }());
    zhuangtaiji.ZhuangTaiJiBase = ZhuangTaiJiBase;
    __reflect(ZhuangTaiJiBase.prototype, "zhuangtaiji.ZhuangTaiJiBase");
})(zhuangtaiji || (zhuangtaiji = {}));
var scene;
(function (scene) {
    //战斗场景宽
    scene.battle_sceneW = 4000;
    //战斗场景高
    scene.battle_sceneH = 4000;
    //场景加载位置
    scene.scene_anch_x = 1000;
    scene.scene_anch_y = 1000;
    //场景位移限制
    scene.scene_wy_limit = 200;
    //位移生效百分比
    scene.scene_wy_bfb = 0.2;
    //物理世界 屏幕范围
    scene.p2_zuo = 10;
    scene.p2_shang = 60;
    scene.p2_you = 45;
    scene.p2_xia = 37;
    var SceneBase = (function (_super) {
        __extends(SceneBase, _super);
        function SceneBase() {
            var _this = _super.call(this) || this;
            // 物理世界坐标位移 
            _this.p2_wy_x = 0;
            _this.p2_wy_y = 0;
            //-----------guanka-------------------------
            //当前进行到第几波
            _this.nowBo = 0;
            //当前第几回合
            _this.nowHeiHe = 0;
            //当前波总回合数量
            _this.allHeiHe = 0;
            //当前回合 剩余的 飞机数量
            _this.lastFeiJi = 0;
            //是否可以添加回合内的飞机
            _this.add_hh_fc = true;
            _this.number = 0;
            //是否加速
            _this.is_jiasu = false;
            _this.xxList = new Array();
            _this.tick = 0;
            //---------------位移锚点-----------------------
            //左减 右加
            _this.mao_x = 0;
            //下减 上加
            _this.mao_y = 0;
            //是否与商店图标发生碰撞
            _this.is_shop = false;
            _this.is_jl = false;
            //触控移动的坐标点
            _this.move_point = null;
            _this._distance = new egret.Point();
            _this._skP = new egret.Point();
            _this.init();
            _this.initcoll();
            return _this;
        }
        SceneBase.prototype.init = function () {
            this.width = scene.battle_sceneW;
            this.height = scene.battle_sceneH;
            this.world = new p2.World();
            // this.world.sleepMode = p2.World.BODY_SLEEPING;
            this.world.gravity = [0, 0];
            this.addShuKeListener();
            this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
            this.dijis = new Array();
            this.removeZiDanBodyList = new Array();
            this.ovzRemoveZiDanBodyList = new Array();
            this.shouShangFeiChuanList = new Array();
            this.canHais = new Array();
            this.zidanList = new Array();
            this.removeDLList = new Array();
            this.removeXXList = new Array();
            // this.dpBar = new bar.DunBar(this);
        };
        //创建碰撞检测函数
        SceneBase.prototype.initcoll = function () {
            var s = this;
            this.world.on('beginContact', function (evt) {
                //--------------掉落道具------------------
                if (evt.bodyA instanceof diaoluo.DiaoLuo) {
                    var dl = evt.bodyA;
                    var sk = evt.bodyB;
                    dl.collNum--;
                    if (dl.collNum == 0) {
                        s.removeDLList.push(dl);
                    }
                }
                if (evt.bodyB instanceof diaoluo.DiaoLuo) {
                    var dl = evt.bodyB;
                    var sk = evt.bodyA;
                    dl.collNum--;
                    if (dl.collNum == 0) {
                        s.removeDLList.push(dl);
                    }
                }
                //-----------------------子弹与 地方碰撞----------------
                //根据碰撞次数 减少耐久
                if (evt.bodyB instanceof zidan.ZiDanBase || evt.bodyA instanceof zidan.ZiDanBase) {
                    var m = evt.bodyB instanceof zidan.ZiDanBase ? evt.bodyB : evt.bodyA;
                    var zd = m;
                    zd.collNumber--;
                }
                if (evt.bodyB instanceof feichuan.FeiChuanBase || evt.bodyA instanceof feichuan.FeiChuanBase) {
                    var m = evt.bodyB instanceof feichuan.FeiChuanBase ? evt.bodyB : evt.bodyA;
                    var oh = evt.bodyB instanceof feichuan.FeiChuanBase ? evt.bodyA : evt.bodyB;
                    var ogzd = oh;
                    var fc = m;
                    //敌机
                    if (fc.zhenying == GameConstant.ZHEN_YING.DI_JUN || fc.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                        if (oh instanceof zidan.ZiDanBase) {
                            //检测碰撞点 并且标记好在循环外删除
                            if (ogzd.is_first) {
                                var mk = fc.jia_ce_peng_zhuang_dian(oh.displays[0].x, oh.displays[0].y);
                                fc.shang_hai(mk, ogzd.hitNumber);
                                //长钉 
                                if (ogzd instanceof zidan.ChangDingZiDan) {
                                    var cd = ogzd;
                                    cd.chuan_jia(mk, fc);
                                }
                                //重锤
                                if (ogzd instanceof zidan.ZhongChuiZiDan) {
                                    var cd = ogzd;
                                    cd.chuan_jia(mk, fc);
                                }
                                //鱼雷
                                if (ogzd instanceof zidan.YuLeiZiDan) {
                                    var cd = ogzd;
                                    cd.chuan_jia(mk, fc);
                                }
                                ogzd.is_first = false;
                            }
                        }
                    }
                    //苏克
                    if (fc.zhenying == GameConstant.ZHEN_YING.WO_JUN) {
                        var sk = fc;
                        if (ogzd.is_first) {
                            sk.bei_da();
                            ogzd.is_first = false;
                        }
                    }
                    //只有当 碰撞参数等于0的时候才添加到 删除列表
                    if (ogzd.collNumber == 0) {
                        s.removeZiDanBodyList.push(ogzd);
                    }
                }
                //------------------------------------------------------
            });
        };
        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        SceneBase.prototype.onEnterFrame = function () {
            this.chackColl();
            this.chackFeiChuan();
            var t = this.tick % 2;
            // if (t == 1) {
            this.p2Updata();
            //     this.tick = t;
            // }
            this.upSomeThing();
            this.updataIsInWorld();
            this.updataWuQi();
            this.jiasu();
            // this.updataCH();
            // this.tick++;
        };
        //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
        //xingxing加速相关
        SceneBase.prototype.updataXX = function () {
            var s = this.xxList.length;
            for (var i = 0; i < s; i++) {
                if (this.is_jiasu) {
                    this.xxList[i].jiasu();
                }
                else {
                    this.xxList[i].jiansu();
                }
            }
        };
        //残骸加速
        // public updataCH() {
        //     if (this.is_jiasu) {
        //         for (let ch of this.canHais) {
        //             ch.velocity = [0, -10];
        //         }
        //     }
        // }
        //刷新子弹
        SceneBase.prototype.updataZidan = function () {
            for (var _i = 0, _a = this.zidanList; _i < _a.length; _i++) {
                var zd = _a[_i];
                if (zd.is_updata) {
                    zd.updata();
                }
            }
        };
        //更新飞船武器
        SceneBase.prototype.updataWuQi = function () {
            var now = egret.getTimer();
            for (var _i = 0, _a = this.dijis; _i < _a.length; _i++) {
                var fc = _a[_i];
                var i = 0;
                if (fc.wuqiList.length > 0) {
                    for (var _b = 0, _c = fc.wuqiList; _b < _c.length; _b++) {
                        var wq = _c[_b];
                        if (wq) {
                            i++;
                            wq.updata_wq(fc.angle, this.sk, now);
                        }
                    }
                }
            }
        };
        //检测场景内的残骸列表 是否在有效区域内
        SceneBase.prototype.updataIsInWorld = function () {
            for (var _i = 0, _a = this.canHais; _i < _a.length; _i++) {
                var fc = _a[_i];
                //如果是残骸的话检测 坐标 并且删除
                if (fc.position[1] < 30) {
                    this.removeTheFcInTheGame(fc);
                }
            }
        };
        SceneBase.prototype.upSomeThing = function () {
        };
        /**
         * 物理世界循环外 删除子弹
         */
        SceneBase.prototype.chackColl = function () {
            //子弹
            var size = this.removeZiDanBodyList.length;
            for (var i = 0; i < size; i++) {
                var m = this.removeZiDanBodyList.pop();
                if (!m) {
                    continue;
                }
                var zd = m;
                //没有碰撞次数后删除子弹
                if (zd.collNumber <= 0) {
                    var d = zd.displays[0];
                    if (d) {
                        if (d.parent) {
                            zd.texiao();
                            // this.removeChild(d);
                        }
                    }
                    if (zd instanceof zidan.LuoXuanZiDan) {
                        var lx = zd;
                        lx.wu.removeZD(lx.hao_ma);
                    }
                    //移除约束
                    zd.removeYueShu();
                    this.world.removeBody(zd);
                    zd = null;
                }
            }
            //子弹
            size = this.ovzRemoveZiDanBodyList.length;
            for (var i = 0; i < size; i++) {
                var m = this.ovzRemoveZiDanBodyList.pop();
                if (!m) {
                    continue;
                }
                var zd = m;
                //没有碰撞次数后删除子弹
                var d = zd.displays[0];
                if (d) {
                    if (d.parent) {
                        this.removeChild(d);
                    }
                }
                if (zd instanceof zidan.LuoXuanZiDan) {
                    var lx = zd;
                    lx.wu.removeZD(lx.hao_ma);
                }
                //移除约束
                zd.removeYueShu();
                this.world.removeBody(zd);
                zd = null;
            }
            //掉落道具
            size = this.removeDLList.length;
            for (var i = 0; i < size; i++) {
                var dl = this.removeDLList.pop();
                if (!dl) {
                    continue;
                }
                //添加道具
                this.sk.addMoKuai(dl);
                var d = dl.displays[0];
                if (d) {
                    if (d.parent) {
                        this.removeChild(d);
                    }
                }
                this.world.removeBody(dl);
                dl = null;
            }
        };
        //检测飞船
        SceneBase.prototype.chackFeiChuan = function () {
            //遍历受伤飞船列表
            for (var i = 0; i < this.shouShangFeiChuanList.length; i++) {
                var f = this.shouShangFeiChuanList.pop();
                //遍历受伤模块
                for (var j = 0; j < f.removeMoKuai.length; j++) {
                    var m = f.removeMoKuai.pop();
                    //移除小方块 颜色以及 形状
                    f.removeShape(m.boxShape);
                    this.removeChild(m);
                    f.mokuai_size--;
                    //查看该模块是否掉落道具
                    if (m.is_diao_luo) {
                        this.diao_luo_dao_ju(m);
                    }
                }
                //掉落检测
                if (!GameConstant.chackMoKuaiNumber(f)) {
                    return;
                }
                GameConstant.diaoluo(f);
                //判断飞船是否被清除
                if (f) {
                    if (f.mokuai_size > 0) {
                        f.fenJie();
                    }
                }
            }
        };
        SceneBase.prototype.setJiaSu = function () {
            this.jiasu_time = egret.getTimer() + 5 * 1000;
        };
        //星空加速
        SceneBase.prototype.jiasu = function () {
            if (this.jiasu_time > egret.getTimer()) {
                if (!this.is_jiasu) {
                    this.is_jiasu = true;
                    //加速
                    this.updataXX();
                }
            }
            else {
                if (this.is_jiasu) {
                    this.is_jiasu = false;
                    this.updataXX();
                }
            }
        };
        SceneBase.prototype.p2Updata = function () {
            //进入 物理引擎前 计算偏移量
            this.updataSKNow();
            this.world.step(60 / 1000);
            var l = this.world.bodies.length;
            for (var i = 0; i < l; i++) {
                var boxBody = this.world.bodies[i];
                //添加偏移量
                if (this.sk_p2_now && !(boxBody instanceof shuke.ShuKe)) {
                    boxBody.position[0] = boxBody.position[0] + this.sk_p2_now.x;
                    boxBody.position[1] = boxBody.position[1] + this.sk_p2_now.y;
                }
                if (boxBody instanceof shuke.ShuKe) {
                    var i_1 = boxBody;
                    for (var _i = 0, _a = i_1.wuqiList; _i < _a.length; _i++) {
                        var wq = _a[_i];
                        wq.updata_wq(boxBody.angle, this.sk, egret.getTimer());
                    }
                }
                //掉落控制
                if (boxBody instanceof diaoluo.DiaoLuo) {
                    var dl = boxBody;
                    dl.updata();
                    //todo删除
                }
                //移除星星
                if (boxBody instanceof bj.XingXing) {
                    var xx = boxBody;
                    if (xx.position[1] < (scene.battle_sceneH - (1000 + Tools.getPhoneH())) / Physics.factor) {
                        xx.reTop();
                    }
                }
                if (boxBody instanceof zidan.ZiDanBase) {
                    var zd = boxBody;
                    if (zd.is_updata) {
                        zd.updata();
                    }
                    //c超出边界移除子弹
                    if (zd.position[1] > scene.p2_shang) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    if (zd.position[1] < scene.p2_xia) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    if (zd.position[0] > scene.p2_you) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    if (zd.position[0] < scene.p2_zuo) {
                        this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    //超过15秒删除
                    if ((egret.getTimer() - zd.mark_time) > zd.sheng_ming_zhou_qi) {
                        if (!zd.isAddRem) {
                            zd.isAddRem = true;
                            zd.removeTeXiao();
                        }
                        // this.ovzRemoveZiDanBodyList.push(zd);
                    }
                    //速度==0
                    if (zd.velocity[0] == 0 && zd.velocity[1] == 0) {
                        // this.ovzRemoveZiDanBodyList.push(zd);
                    }
                }
                if (boxBody instanceof canhai.CanHai) {
                    var ch = boxBody;
                    if (this.is_jiasu) {
                        ch.velocity = [0, -5];
                    }
                }
                if (boxBody instanceof shuke.ShuKe) {
                    boxBody.velocity = [0, 0];
                }
                if (boxBody instanceof feichuan.FeiChuanBase) {
                    var i_2 = boxBody;
                    i_2.updataSomeThing();
                    continue;
                }
                var box = boxBody.displays[0];
                if (box) {
                    var p = Tools.p2TOegretPoitn(egret.Point.create(boxBody.position[0], boxBody.position[1]));
                    box.x = p.x;
                    box.y = p.y;
                    box.rotation = 360 - boxBody.angle * 180 / Math.PI;
                }
            }
            //退出物理引擎后 需要标记偏移量
            this.updataSKBefor();
        };
        //设置 sk上一帧坐标
        SceneBase.prototype.updataSKBefor = function () {
            if (this.sk_p2_befor) {
                this.sk_p2_befor.x = this.sk.position[0];
                this.sk_p2_befor.y = this.sk.position[1];
                return;
            }
            this.sk_p2_befor = egret.Point.create(this.sk.position[0], this.sk.position[1]);
        };
        //设置 sk 当前坐标偏移
        SceneBase.prototype.updataSKNow = function () {
            if (!this.sk_p2_befor) {
                return;
            }
            if (!this.sk_p2_now) {
                this.sk_p2_now = egret.Point.create(0, 0);
            }
            this.sk_p2_now.x = (this.sk_p2_befor.x - this.sk.position[0]) * 0.05;
            this.sk_p2_now.y = (this.sk_p2_befor.y - this.sk.position[1]) * 0.05;
        };
        //掉落道具
        SceneBase.prototype.diao_luo_dao_ju = function (mk) {
            var dl = new diaoluo.DiaoLuo(this, mk.diao_luo_type, mk.dl_lv, Tools.egretTOp2(egret.Point.create(mk.x, mk.y)), mk.dl_wq_type);
            this.world.addBody(dl);
            this.addChild(dl.displays[0]);
            dl.loop();
        };
        //---------------------------------触控相关-------------------------------------
        SceneBase.prototype.addShuKeListener = function () {
            this.touchEnabled = true;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
        };
        SceneBase.prototype.mouseUp = function (evt) {
            this.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        };
        SceneBase.prototype.mouseDown = function (evt) {
            this._distance.x = evt.stageX;
            this._distance.y = evt.stageY;
            this._skP.x = this.sk.position[0];
            this._skP.y = this.sk.position[1];
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        };
        SceneBase.prototype.mouseMove = function (evt) {
            var pp = egret.Point.create((evt.stageX - this._distance.x) / Physics.factor, -(evt.stageY - this._distance.y) / Physics.factor);
            this.move_point = Tools.p2TOegretPoitn(egret.Point.create(this._skP.x + pp.x, this._skP.y + pp.y));
            if (!this.is_shop && !this.is_jl) {
                this.sk.position[0] = this._skP.x + pp.x;
                this.sk.position[1] = this._skP.y + pp.y;
            }
        };
        //根据suke的位置 移动战斗场景
        SceneBase.prototype.weiyi = function (pp) {
            //左上角 
            var min_w = scene.scene_anch_x - scene.scene_wy_limit;
            var min_h = scene.scene_anch_y - scene.scene_wy_limit;
            //右下角
            var max_w = scene.scene_anch_x + scene.scene_wy_limit + this.stage.stageWidth;
            var max_h = scene.scene_anch_y + scene.scene_wy_limit + this.stage.stageHeight;
            //屏幕宽高
            var pw = this.stage.stageWidth * 0.5;
            var ph = this.stage.stageHeight * 0.5;
            //中心
            var c_x = scene.scene_anch_x + pw;
            var c_y = scene.scene_anch_y + ph;
            //左上角x 坐标
            var zs_x = 0;
            if (pp.x < c_x) {
                zs_x = this.x + (c_x - pp.x);
                zs_x = zs_x > max_w ? max_w : zs_x;
                this.x = zs_x;
            }
            if (pp.x > scene.scene_anch_x + pw) {
            }
        };
        //-----------------------------------------------------------------------
        //适用于已经被测底打光的 飞船
        SceneBase.prototype.removeTheFcInTheGame = function (fc) {
            //从敌机列表中
            if (fc.fc_type == feichuan.FC_TYPE.DIJI) {
                var inx = this.dijis.indexOf(fc, 0);
                if (inx > -1) {
                    this.dijis.splice(inx, 1);
                }
            }
            //从残骸列表中
            if (fc.fc_type == feichuan.FC_TYPE.CANHAI) {
                var inx = this.canHais.indexOf(fc);
                this.canHais.splice(inx);
            }
            var size = fc.moKuaiList.length;
            this.world.removeBody(fc);
            for (var j = 0; j < size; j++) {
                var m = fc.moKuaiList[j].length;
                for (var i = 0; i < m; i++) {
                    if (fc.moKuaiList[j][i]) {
                        this.removeChild(fc.moKuaiList[j][i]);
                    }
                    fc.moKuaiList[j][i] = null;
                }
            }
            fc = null;
        };
        return SceneBase;
    }(egret.DisplayObjectContainer));
    scene.SceneBase = SceneBase;
    __reflect(SceneBase.prototype, "scene.SceneBase");
})(scene || (scene = {}));
var zhuangjia;
(function (zhuangjia) {
    /**
     * 装甲 基类
     */
    var ZhuangJiaBase = (function (_super) {
        __extends(ZhuangJiaBase, _super);
        function ZhuangJiaBase(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, moKuaiPost, shapeType, bitName, fc) || this;
            _this.moKuaiType = mokuai.MO_KUAI_TYPE.ZHUANG_JIA;
            return _this;
        }
        return ZhuangJiaBase;
    }(mokuai.MoKuaiBase));
    zhuangjia.ZhuangJiaBase = ZhuangJiaBase;
    __reflect(ZhuangJiaBase.prototype, "zhuangjia.ZhuangJiaBase");
})(zhuangjia || (zhuangjia = {}));
var juzi;
(function (juzi) {
    var JU_ZI_TYPE;
    (function (JU_ZI_TYPE) {
        JU_ZI_TYPE[JU_ZI_TYPE["SZ"] = 0] = "SZ";
        JU_ZI_TYPE[JU_ZI_TYPE["ZX"] = 1] = "ZX";
        JU_ZI_TYPE[JU_ZI_TYPE["SX"] = 2] = "SX";
        JU_ZI_TYPE[JU_ZI_TYPE["ZY"] = 3] = "ZY";
        JU_ZI_TYPE[JU_ZI_TYPE["LX"] = 4] = "LX";
        JU_ZI_TYPE[JU_ZI_TYPE["SB"] = 5] = "SB";
        JU_ZI_TYPE[JU_ZI_TYPE["DJ"] = 6] = "DJ";
        JU_ZI_TYPE[JU_ZI_TYPE["SJXL"] = 7] = "SJXL";
        JU_ZI_TYPE[JU_ZI_TYPE["SXD"] = 8] = "SXD";
        JU_ZI_TYPE[JU_ZI_TYPE["SEWZ"] = 9] = "SEWZ";
        JU_ZI_TYPE[JU_ZI_TYPE["SJ"] = 10] = "SJ";
    })(JU_ZI_TYPE = juzi.JU_ZI_TYPE || (juzi.JU_ZI_TYPE = {}));
    juzi.JUZIList = [JU_ZI_TYPE.SZ, JU_ZI_TYPE.ZX, JU_ZI_TYPE.SX, JU_ZI_TYPE.ZY, JU_ZI_TYPE.LX, JU_ZI_TYPE.SB, JU_ZI_TYPE.DJ, JU_ZI_TYPE.SJXL, JU_ZI_TYPE.SXD, JU_ZI_TYPE.SEWZ, JU_ZI_TYPE.SJ];
    var JuZiGuanLi = (function () {
        function JuZiGuanLi(nan_du) {
            //全地图可以放下  每个 格子大小约等于一个 飞机的方块 
            this.MAX_NUMBER = 30 * 50;
            this.fc_list = new Array();
            this.fc_info_list = new Array();
            //句子难度系数 1-5
            this.nan_du = 1;
            //当前句子 是否通过
            this.is_next = false;
            this.nan_du = nan_du;
        }
        //初始化飞机 数量
        JuZiGuanLi.prototype.randomNum = function () {
            return suiji.GetRandomNum(1, 5);
        };
        //获取随机飞船信息
        JuZiGuanLi.prototype.getandomFc = function () {
            var i = suiji.GetRandomNum(0, (FC_Console.all_list.length - 1));
            return FC_Console.all_list[i];
        };
        // 初始化飞船信息
        JuZiGuanLi.prototype.initFcInfo = function () {
            var num = this.randomNum();
            num += 1;
            // num = 1;
            for (var i = 0; i < num; i++) {
                var info = this.getandomFc();
                this.fc_info_list.push(this.getandomFc());
            }
        };
        //刷新相关
        JuZiGuanLi.prototype.upSomeThing = function () {
        };
        //添加飞机到 战场
        JuZiGuanLi.prototype.addFc = function (scene) {
            for (var _i = 0, _a = this.fc_info_list; _i < _a.length; _i++) {
                var info = _a[_i];
                info.reRandomPos();
                var fc = new feichuan.XiaoBing(scene, info);
                scene.dijis.push(fc);
            }
        };
        return JuZiGuanLi;
    }());
    juzi.JuZiGuanLi = JuZiGuanLi;
    __reflect(JuZiGuanLi.prototype, "juzi.JuZiGuanLi");
})(juzi || (juzi = {}));
var quyu;
(function (quyu) {
    var QuYu = (function () {
        function QuYu() {
            //飞船列表
            this.fc_list = new Array();
        }
        //初始化飞船
        QuYu.prototype.initFc = function () {
        };
        return QuYu;
    }());
    quyu.QuYu = QuYu;
    __reflect(QuYu.prototype, "quyu.QuYu");
})(quyu || (quyu = {}));
var ai;
(function (ai) {
    var AI_TYPE;
    (function (AI_TYPE) {
        AI_TYPE[AI_TYPE["xuan_zhuan"] = 0] = "xuan_zhuan";
        AI_TYPE[AI_TYPE["miao_zhun"] = 1] = "miao_zhun";
    })(AI_TYPE = ai.AI_TYPE || (ai.AI_TYPE = {}));
    //位置
    var WEI_ZHI;
    (function (WEI_ZHI) {
        WEI_ZHI[WEI_ZHI["ZS"] = 0] = "ZS";
        WEI_ZHI[WEI_ZHI["ZX"] = 1] = "ZX";
        WEI_ZHI[WEI_ZHI["YS"] = 2] = "YS";
        WEI_ZHI[WEI_ZHI["YX"] = 3] = "YX";
        WEI_ZHI[WEI_ZHI["NN"] = 4] = "NN";
    })(WEI_ZHI = ai.WEI_ZHI || (ai.WEI_ZHI = {}));
    //转向
    var ZHUAN_XIANG;
    (function (ZHUAN_XIANG) {
        ZHUAN_XIANG[ZHUAN_XIANG["Clockwise"] = 0] = "Clockwise";
        ZHUAN_XIANG[ZHUAN_XIANG["Anti_clockwise"] = 1] = "Anti_clockwise";
    })(ZHUAN_XIANG = ai.ZHUAN_XIANG || (ai.ZHUAN_XIANG = {}));
    var AiBase = (function () {
        function AiBase(fc, mT, mZ, gj) {
            //是否停止ai
            this.hang_up = false;
            //单次状态 持续时间
            this.jian_ge = 10 * 1000;
            //误差
            this.wu_cha = 0.2;
            this.fc = fc;
            this.sceneConsole = fc.battle_scene;
            this.suke = this.sceneConsole.sk;
            this.mT_over = mT;
            this.gj_over = gj;
            this.mZ_over = mZ;
            this.time_mark = egret.getTimer();
            this.mu_biao_wz_X = this.js_wz(this.fc.position[0], this.fc.toPoint.x);
            this.mu_biao_wz_Y = this.js_wz(this.fc.position[1], this.fc.toPoint.y);
        }
        AiBase.prototype.init = function () {
        };
        //目标 相对 你的位置
        AiBase.prototype.js_wz = function (you, to) {
            if (to > you) {
                if ((to - you) < 0.25) {
                    return 2;
                }
                return 3;
            }
            if (you > to) {
                if ((you - to) < 0.25) {
                    return 2;
                }
                return 1;
            }
            return 2;
        };
        AiBase.prototype.updata_ai = function (now) {
            //到时没有达成任务 退出
            if ((egret.getTimer() - this.time_mark) > this.jian_ge) {
                // this.upOver();
            }
            this.doUpData(now);
        };
        //场景刷新器
        AiBase.prototype.doUpData = function (time) {
        };
        AiBase.prototype.upOver = function () {
            if (this.mT_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.mT = this.mT_over;
            }
            if (this.gj_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.gjT = this.gj_over;
            }
            if (this.mZ_over != zhuangtaiji.ZT_TYPE.NO_THING) {
                this.fc.ztj.mzT = this.mZ_over;
            }
        };
        //---------------判断是否到达目的地----------------
        AiBase.prototype.is_x_over = function () {
            //左边
            // if (this.mu_biao_wz_X == 1 && Math.abs(this.fc.position[0] - this.fc.toPoint.x) < this.wu_cha) {
            if (this.mu_biao_wz_X == 1 && this.fc.position[0] < this.fc.toPoint.x) {
                return true;
            }
            //中
            if (this.mu_biao_wz_X == 2) {
                return true;
            }
            //右
            if (this.mu_biao_wz_X == 3 && this.fc.position[0] > this.fc.toPoint.x) {
                return true;
            }
            return false;
        };
        AiBase.prototype.is_y_over = function () {
            //下边
            if (this.mu_biao_wz_Y == 1 && this.fc.position[1] < this.fc.toPoint.y) {
                return true;
            }
            //中
            if (this.mu_biao_wz_Y == 2) {
                return true;
            }
            //上
            if (this.mu_biao_wz_Y == 3 && this.fc.position[1] > this.fc.toPoint.y) {
                return true;
            }
            return false;
        };
        //返回  x方向 动力系数
        AiBase.prototype.getXS_X = function () {
            return 0;
        };
        //返回 Y  方向动力系数
        AiBase.prototype.getXS_Y = function () {
            return 0;
        };
        return AiBase;
    }());
    ai.AiBase = AiBase;
    __reflect(AiBase.prototype, "ai.AiBase");
})(ai || (ai = {}));
var texiao;
(function (texiao) {
    var TeXiaoBase = (function () {
        function TeXiaoBase(bit_name) {
            this.bit = new egret.Bitmap(RES.getRes(bit_name));
        }
        //执行特效
        TeXiaoBase.prototype.goto = function () {
        };
        return TeXiaoBase;
    }());
    texiao.TeXiaoBase = TeXiaoBase;
    __reflect(TeXiaoBase.prototype, "texiao.TeXiaoBase");
})(texiao || (texiao = {}));
var feichuan;
(function (feichuan) {
    var FC_TYPE;
    (function (FC_TYPE) {
        FC_TYPE[FC_TYPE["SUKE"] = 0] = "SUKE";
        FC_TYPE[FC_TYPE["DIJI"] = 1] = "DIJI";
        FC_TYPE[FC_TYPE["CANHAI"] = 2] = "CANHAI";
    })(FC_TYPE = feichuan.FC_TYPE || (feichuan.FC_TYPE = {}));
    /**
     * 飞船基础类
     */
    var FeiChuanBase = (function (_super) {
        __extends(FeiChuanBase, _super);
        //TODO: 通过配置文件来加载
        function FeiChuanBase(battle_scene, egretWorldPoint, zhenying, mass_, nan_du) {
            var _this = 
            // super()
            _super.call(this, { mass: mass_ }) || this;
            /**
             * 武器列表
             */
            _this.wuqiList = new Array();
            _this.pt1_wuqiList = new Array();
            _this.pt2_wuqiList = new Array();
            _this.pt3_wuqiList = new Array();
            _this.pth_wuqiList = new Array();
            _this.ptz_wuqiList = new Array();
            _this.pty_wuqiList = new Array();
            _this.jg1_wuqiList = new Array();
            _this.jg2_wuqiList = new Array();
            _this.jg3_wuqiList = new Array();
            _this.jg4_wuqiList = new Array();
            _this.gz1_wuqiList = new Array();
            _this.gzz_wuqiList = new Array();
            _this.gzy_wuqiList = new Array();
            _this.gzh_wuqiList = new Array();
            _this.js1_wuqiList = new Array();
            _this.sd1_wuqiList = new Array();
            _this.sd2_wuqiList = new Array();
            _this.sdh_wuqiList = new Array();
            _this.sdz_wuqiList = new Array();
            _this.sdy_wuqiList = new Array();
            //当前模块数量
            _this.mokuai_size = 0;
            //初始质量'
            _this.cs_mass = 0;
            //++++++++++++++++++++++++++++++++++++++++++++++++++++
            //难度 1 ~ 11  飞船难度 从1 到 11 级别
            _this.nan_du = 1;
            _this.wq_b = 1;
            _this.cs_mass = mass_;
            _this.nan_du = nan_du;
            //核心列表
            _this.heXinList = new Array();
            //装甲列表
            _this.zhuangJaList = new Array();
            //ai 列表 
            _this.ais = new Array();
            _this.egretWorldPoint = egretWorldPoint;
            _this.battle_scene = battle_scene;
            _this.zhenying = zhenying;
            _this.initPhPost();
            _this.initColl();
            return _this;
        }
        //初始化飞船
        FeiChuanBase.prototype.initJson = function (info) {
            //读取飞船的宽高
            this.W = info.width;
            this.H = info.height;
            this.initList(this.H, this.W);
            var data = info.data;
            //初始化模块
            this.moKuaiList = new Array(this.H);
            var i = 0;
            for (var h = 0; h < this.H; h++) {
                this.moKuaiList[h] = new Array(this.W);
                for (var w = 0; w < this.W; w++) {
                    //读取节点信息
                    if (data[i] == 0) {
                        i++;
                        continue;
                    }
                    var bitName = info.tiles[data[i] - 1];
                    var hx = void 0;
                    //----------------------------------敌军直射武器-------------------------------------------
                    if (bitName == "op_wq_1") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 1);
                        this.wuqiList.push(hx);
                        this.pt1_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_1_1") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 1);
                        this.wuqiList.push(hx);
                        this.pt1_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_1_2") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 1);
                        this.wuqiList.push(hx);
                        this.pt2_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_1_3") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 1);
                        this.wuqiList.push(hx);
                        this.pt3_wuqiList.push(hx);
                    }
                    //普通后射
                    if (bitName == "op_wq_1_h") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 2);
                        this.wuqiList.push(hx);
                        this.pth_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_1_z") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 3);
                        this.wuqiList.push(hx);
                        this.ptz_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_1_y") {
                        hx = new djwq.DingWeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_1", this, 4);
                        this.wuqiList.push(hx);
                        this.pty_wuqiList.push(hx);
                    }
                    //-------------------------------------激光------------------------------------------------
                    if (bitName == "op_wq_2") {
                        hx = new djwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_2", this);
                        this.wuqiList.push(hx);
                        this.jg1_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_2_1") {
                        hx = new djwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_2", this);
                        this.wuqiList.push(hx);
                        this.jg1_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_2_2") {
                        hx = new djwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_2", this);
                        this.wuqiList.push(hx);
                        this.jg2_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_2_3") {
                        hx = new djwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_2", this);
                        this.wuqiList.push(hx);
                        this.jg3_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_2_4") {
                        hx = new djwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_2", this);
                        this.wuqiList.push(hx);
                        this.jg4_wuqiList.push(hx);
                    }
                    //---------------------------------------敌军跟踪武器-----------------------------------------------
                    if (bitName == "op_wq_3") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_3", this, 1);
                        this.wuqiList.push(hx);
                        this.gz1_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_3_1") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_3", this, 1);
                        this.wuqiList.push(hx);
                        this.gz1_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_3_z") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_3", this, 3);
                        this.wuqiList.push(hx);
                        this.gzz_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_3_y") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_3", this, 4);
                        this.wuqiList.push(hx);
                        this.gzy_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_3_h") {
                        hx = new djwq.GenZhongWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_3", this, 4);
                        this.wuqiList.push(hx);
                        this.gzh_wuqiList.push(hx);
                    }
                    //----------------------------------------敌军减速武器-----------------------------------------------
                    if (bitName == "op_wq_4_1") {
                        hx = new djwq.JianSuWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_4", this);
                        this.wuqiList.push(hx);
                        this.js1_wuqiList.push(hx);
                    }
                    //--------------------------------敌军散弹 ------------------------------------------------
                    if (bitName == "op_wq_5_1") {
                        hx = new djwq.DJSanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_5", this, 1);
                        this.wuqiList.push(hx);
                        this.sd1_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_5_2") {
                        hx = new djwq.DJSanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_5", this, 1);
                        this.wuqiList.push(hx);
                        this.sd2_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_5_h") {
                        hx = new djwq.DJSanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_5", this, 2);
                        this.wuqiList.push(hx);
                        this.sdh_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_5_z") {
                        hx = new djwq.DJSanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_5", this, 3);
                        this.wuqiList.push(hx);
                        this.sdz_wuqiList.push(hx);
                    }
                    if (bitName == "op_wq_5_y") {
                        hx = new djwq.DJSanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_wq_5", this, 4);
                        this.wuqiList.push(hx);
                        this.sdy_wuqiList.push(hx);
                    }
                    if (hx) {
                        hx.setMkLevel(this.nan_du);
                    }
                    //----------------装甲-------------------------------------------------------------------------
                    if (bitName == "op_hx_hx" || bitName == "op_hx_ss" || bitName == "op_hx_zj") {
                        this.hx = new mokuai.DongLiHeXin(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, bitName, this);
                        hx = this.hx;
                    }
                    if (bitName == "op_zj_pt_level_2") {
                        hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this.getZJname(2), this);
                        hx.setMkLevel(this.getZJLevel(2));
                    }
                    if (bitName == "op_zj_pt_level_1") {
                        hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this.getZJname(1), this);
                        hx.setMkLevel(this.getZJLevel(1));
                    }
                    // egret.log("??? --" + data[i] + ":" + bitName);
                    //掉落随机
                    this.suiji_dl(hx);
                    var hpp = Physics.getRelativeDistance(egret.Point.create(this.W, this.H), egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
                    var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
                    box.collisionGroup = this.collGroup;
                    box.collisionMask = this.collMask;
                    this.addShape(box, [hpp.x, hpp.y]);
                    this.moKuaiList[h][w] = hx;
                    hx.boxShape = box;
                    if (hx instanceof mokuai.DongLiHeXin) {
                        this.battle_scene.addChildAt(hx, 100);
                    }
                    else {
                        this.battle_scene.addChildAt(hx, 1);
                    }
                    this.mokuai_size++;
                    i++;
                }
            }
            this.battle_scene.world.addBody(this);
        };
        //根据难度 返回装甲名称
        FeiChuanBase.prototype.getZJname = function (level) {
            if (this.nan_du == 1) {
                return "op_zj_pt_level_1";
            }
            if (this.nan_du == 2) {
                if (level == 1) {
                    return "op_zj_pt_level_1";
                }
                if (level == 2) {
                    return "op_zj_pt_level_2";
                }
            }
            if (this.nan_du == 3) {
                return "op_zj_pt_level_2";
            }
            if (this.nan_du == 4) {
                if (level == 1) {
                    return "op_zj_pt_level_2";
                }
                if (level == 2) {
                    return "op_zj_pt_level_3";
                }
            }
            if (this.nan_du == 5) {
                return "op_zj_pt_level_3";
            }
            if (this.nan_du == 6) {
                if (level == 1) {
                    return "op_zj_pt_level_3";
                }
                if (level == 2) {
                    return "op_zj_pt_level_4";
                }
            }
            if (this.nan_du == 7) {
                return "op_zj_pt_level_4";
            }
            if (this.nan_du == 8) {
                if (level == 1) {
                    return "op_zj_pt_level_4";
                }
                if (level == 2) {
                    return "op_zj_pt_level_5";
                }
            }
            if (this.nan_du == 9) {
                return "op_zj_pt_level_5";
            }
            if (this.nan_du == 10) {
                if (level == 1) {
                    return "op_zj_pt_level_5";
                }
                if (level == 2) {
                    return "op_zj_pt_level_6";
                }
            }
            if (this.nan_du == 11) {
                return "op_zj_pt_level_6";
            }
            return null;
        };
        FeiChuanBase.prototype.getZJLevel = function (level) {
            if (this.nan_du == 1) {
                return 1;
            }
            if (this.nan_du == 2) {
                if (level == 1) {
                    return 1;
                }
                if (level == 2) {
                    return 2;
                }
            }
            if (this.nan_du == 3) {
                return 3;
            }
            if (this.nan_du == 4) {
                if (level == 1) {
                    return 3;
                }
                if (level == 2) {
                    return 4;
                }
            }
            if (this.nan_du == 5) {
                return 5;
            }
            if (this.nan_du == 6) {
                if (level == 1) {
                    return 5;
                }
                if (level == 2) {
                    return 6;
                }
            }
            if (this.nan_du == 7) {
                return 7;
            }
            if (this.nan_du == 8) {
                if (level == 1) {
                    return 7;
                }
                if (level == 2) {
                    return 8;
                }
            }
            if (this.nan_du == 9) {
                return 9;
            }
            if (this.nan_du == 10) {
                if (level == 1) {
                    return 9;
                }
                if (level == 2) {
                    return 10;
                }
            }
            if (this.nan_du == 11) {
                return 11;
            }
            return null;
        };
        //随机掉落
        FeiChuanBase.prototype.suiji_dl = function (hx) {
            var is = suiji.isDiaoLuoMoKuai();
            hx.is_diao_luo = is;
            //不掉落退出
            if (!is) {
                return;
            }
            hx.diao_luo_type = suiji.suiji_yanse();
            if (hx.diao_luo_type == suiji.SJ_YAN_SE.WU_QI) {
                hx.dl_wq_type = suiji.suiji_wuqi();
            }
            if (hx.diao_luo_type == suiji.SJ_YAN_SE.ZHUANG_JIA) {
                hx.dl_lv = 5;
                return;
            }
            hx.dl_lv = suiji.suiji_level(hx.diao_luo_type);
        };
        //初始化碰撞参数
        FeiChuanBase.prototype.initColl = function () {
            if (this.zhenying == GameConstant.ZHEN_YING.WO_JUN) {
                this.collGroup = GameConstant.WO_JUN;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.DI_JUN_ZIDAN | GameConstant.DIAO_LUO;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.DI_JUN) {
                this.collGroup = GameConstant.DI_JUN;
                this.collMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN_ZIDAN | GameConstant.DI_JUN;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
                this.collGroup = GameConstant.ZHONG_LI;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN | GameConstant.WO_JUN_ZIDAN | GameConstant.DI_JUN_ZIDAN;
            }
        };
        //设置物理世界坐标 
        FeiChuanBase.prototype.initPhPost = function () {
            var g2p = Tools.gridTop2(this.egretWorldPoint.x, this.egretWorldPoint.y);
            this.position[0] = g2p.x;
            this.position[1] = g2p.y;
            this.beforToPoint = g2p;
        };
        //更新目标点
        FeiChuanBase.prototype.upToPoint = function (pos) {
            if (this.toPoint != null) {
                this.beforToPoint = this.toPoint;
            }
            this.toPoint = pos;
        };
        FeiChuanBase.prototype.initList = function (h, w) {
            this.moKuaiList = new Array();
            for (var i = 0; i < h; i++) {
                this.moKuaiList.push(new Array(w));
            }
            this.wuqiList = new Array();
            this.removeMoKuai = new Array();
        };
        FeiChuanBase.prototype.updataFenJie = function () {
            this.fen_jie = new Array();
            for (var i = 0; i < 10; i++) {
                this.fen_jie.push([]);
            }
        };
        //更新坐标以及角度
        FeiChuanBase.prototype.updataPos = function () {
            var h = this.moKuaiList.length;
            var w = this.moKuaiList[0].length;
            if (this instanceof shuke.ShuKe) {
                this.angle = 0;
            }
            for (var i = 0; i < h; i++) {
                for (var j = 0; j < w; j++) {
                    if (!this.moKuaiList[i][j]) {
                        continue;
                    }
                    var boxBody = this.moKuaiList[i][j].boxShape;
                    var dis = this.moKuaiList[i][j];
                    var an = Math.PI / 180 * 360 - this.angle;
                    // let an: number = this.angle;
                    /**
                     *     |-
                     *  R= | cos(a)     sin(a)
                     *     | -sin(a)    cos(a)
                     *     |-
                     */
                    var rx = Math.cos(an) * boxBody.position[0] + Math.sin(an) * boxBody.position[1];
                    var ry = -Math.sin(an) * boxBody.position[0] + Math.cos(an) * boxBody.position[1];
                    var p = Tools.p2TOegretPoitn(egret.Point.create(rx + this.position[0], ry + this.position[1]));
                    dis.x = p.x;
                    dis.y = p.y;
                    dis.markPoint = p;
                    dis.rotation = 360 - this.angle * 180 / Math.PI;
                }
            }
        };
        FeiChuanBase.prototype.updataSomeThing = function () {
            this.updataPos();
            this.updataAI();
            this.updataZTJ();
            // this.updataJiGuang();
        };
        //更新激光
        // public updataJiGuang() {
        //     for (let wq of this.wuqiList) {
        //         if (wq instanceof wjwq.JiGuangWuqi) {
        //         }
        //     }
        // }
        FeiChuanBase.prototype.updataZTJ = function () {
            if (this.ztj) {
                this.ztj.upStep(egret.getTimer());
            }
        };
        //更新ai
        FeiChuanBase.prototype.updataAI = function () {
            // for (let a of this.ais) {
            //     a.updata_ai(egret.getTimer());
            // }
            //移动
            if (this.moveAI) {
                this.moveAI.updata_ai(egret.getTimer());
            }
            //攻击
            if (this.gjAI) {
                this.gjAI.updata_ai(egret.getTimer());
            }
            //瞄准
            if (this.mzAI) {
                this.mzAI.updata_ai(egret.getTimer());
            }
        };
        FeiChuanBase.prototype.getMokWorldpos = function (p) {
            var an = Math.PI / 180 * 360 - this.angle;
            var rx = Math.cos(an) * p.x + Math.sin(an) * p.y;
            var ry = -Math.sin(an) * p.x + Math.cos(an) * p.y;
            return egret.Point.create(rx + this.position[0], ry + this.position[1]);
        };
        /**
         * 初始化 配置文件
         */
        FeiChuanBase.prototype.initPro = function (yun_tu, wqs) {
            var s = egret.Point.create(yun_tu[0].length, yun_tu.length);
            this.initList(yun_tu.length, yun_tu[0].length);
            for (var h = 0; h < yun_tu.length; h++) {
                for (var w = 0; w < yun_tu[0].length; w++) {
                    this.initMokuai(yun_tu[h][w], h, w, s, wqs);
                }
            }
            this.battle_scene.world.addBody(this);
        };
        //创建模块
        FeiChuanBase.prototype.initMokuai = function (type, h, w, chang_kuan, wqs) {
            var hx;
            if (type == 0) {
                return;
            }
            if (wqs[this.wq_b] == 0) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_5", this);
                var hpp = Physics.getRelativeDistance(chang_kuan, egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
                var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
                box.collisionGroup = this.collGroup;
                box.collisionMask = this.collMask;
                this.addShape(box, [hpp.x, hpp.y]);
                hx.boxShape = box;
                this.battle_scene.addChildAt(hx, 1);
                this.moKuaiList[h][w] = hx;
            }
            else {
                hx = this.initSKWuQi(this.wq_b, w, h, wqs[this.wq_b], chang_kuan);
            }
            if (this.wq_b == 5) {
                this.zx = hx;
            }
            this.mokuai_size++;
            this.wq_b++;
        };
        FeiChuanBase.prototype.initSKWuQi = function (wqb, w, h, level, chang_kuan) {
            egret.log(w + " -- " + h);
            var hx;
            if (wqb == 1) {
                hx = new wuqi.PuTongDan(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                var wq = hx;
                this.wuqiList.push(wq);
            }
            if (wqb == 2) {
                hx = new wjwq.SanDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                var wq = hx;
                this.wuqiList.push(wq);
            }
            if (wqb == 3) {
                hx = new wjwq.JiGuangWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                var wq = hx;
                this.wuqiList.push(wq);
            }
            if (wqb == 4) {
                hx = new wjwq.LuoXuanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                var wq = hx;
                this.wuqiList.push(wq);
            }
            if (wqb == 5) {
                hx = new wjwq.YuLeiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                var wq = hx;
                this.wuqiList.push(wq);
            }
            if (wqb == 6) {
                hx = new wjwq.DaoDanWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                var wq = hx;
                this.wuqiList.push(wq);
                this.dd = hx;
            }
            if (wqb == 7) {
                hx = new wjwq.PaoTaiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                var wq = hx;
                this.wuqiList.push(wq);
                this.pt = hx;
            }
            if (wqb == 8) {
                hx = new wjwq.ChangDingWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                var wq = hx;
                this.wuqiList.push(wq);
            }
            if (wqb == 9) {
                hx = new wjwq.ZhongChuiWuqi(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, level);
                var wq = hx;
                this.wuqiList.push(wq);
            }
            var hpp = Physics.getRelativeDistance(chang_kuan, egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            box.collisionGroup = this.collGroup;
            box.collisionMask = this.collMask;
            this.addShape(box, [hpp.x, hpp.y]);
            hx.boxShape = box;
            this.battle_scene.addChildAt(hx, 1);
            this.moKuaiList[h][w] = hx;
            return hx;
        };
        //碰撞点检测
        FeiChuanBase.prototype.jia_ce_peng_zhuang_dian = function (x, y) {
            var xw = 1000;
            var yh = 1000;
            var zm;
            //遍历个个节点 检测 是否被碰撞
            for (var h = 0; h < this.moKuaiList.length; h++) {
                for (var w = 0; w < this.moKuaiList[h].length; w++) {
                    var z = this.moKuaiList[h][w];
                    if (z) {
                        var c1 = Math.abs(z.x - x);
                        var c2 = Math.abs(z.y - y);
                        if ((c1 + c2) < (xw + yh)) {
                            xw = c1;
                            yh = c2;
                            zm = z;
                        }
                    }
                }
            }
            return zm;
        };
        //检测飞船碰撞点 将飞船上的碰撞点 标记 并且纪录到 删除列表里  在循环外删除
        FeiChuanBase.prototype.checkCollision = function (x, y, hitNumber) {
            var zm = this.jia_ce_peng_zhuang_dian(x, y);
            //如果没有找到碰撞点
            //装甲受伤处理
            this.shang_hai(zm, hitNumber);
        };
        //装甲受伤处理
        FeiChuanBase.prototype.shang_hai = function (zm, hitNumber) {
            if (!zm) {
                return;
            }
            // 模块碰撞 检测
            if (zm.coll(hitNumber)) {
                //将节点标记  之后在碰撞循环外清空
                this.moKuaiList[zm.moKuaiPost.y][zm.moKuaiPost.x] = null;
                //将飞船添加到受伤飞船列表
                this.battle_scene.shouShangFeiChuanList.push(this);
                //将需要移除的模块添加到列表
                this.removeMoKuai.push(zm);
                //如果该模块是 核心 则整体删除
                if (zm instanceof mokuai.DongLiHeXin) {
                    this.hx = null;
                    //减少每回合总飞机的 标记数量
                    this.battle_scene.lastFeiJi--;
                }
                //如果是武器类型
                if (zm.moKuaiType == mokuai.MO_KUAI_TYPE.WU_QI) {
                    this.removeWuQi(zm);
                }
                zm.jihui_texiao();
            }
        };
        //删除模块
        FeiChuanBase.prototype.dellMokuai = function () {
            for (var i = 0; i < this.removeMoKuai.length; i++) {
                var n = this.removeMoKuai.pop();
                this.moKuaiList[n.moKuaiPost.y][n.moKuaiPost.x] = null;
                this.removeShape(n.boxShape);
                this.battle_scene.removeChild(n);
            }
        };
        //分解船体创建新船体
        FeiChuanBase.prototype.fenJie = function () {
            var h = this.fen_jie.length;
            for (var i = 0; i < h; i++) {
                var ch = this.fen_jie.pop();
                var w = ch.length;
                //默认十乘十 检测每个维度 是否有东西
                var b = false;
                for (var _i = 0, ch_1 = ch; _i < ch_1.length; _i++) {
                    var m = ch_1[_i];
                    if (m) {
                        b = true;
                    }
                }
                if (b) {
                    var chhf = new canhai.CanHai(this, ch);
                    this.battle_scene.canHais.push(chhf);
                }
            }
        };
        //添加ai
        FeiChuanBase.prototype.addAI = function (ai) {
            this.ais.push(ai);
        };
        //移除武器
        FeiChuanBase.prototype.removeWuQi = function (wq) {
            if (wq instanceof djwq.JiGuangWuqi) {
                var jg = wq;
                jg.remove_();
            }
            var inx = this.wuqiList.indexOf(wq);
            this.wuqiList.splice(inx, 1);
            inx = this.pt1_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.pt1_wuqiList.splice(inx, 1);
            }
            inx = this.pt2_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.pt2_wuqiList.splice(inx, 1);
            }
            inx = this.pt3_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.pt3_wuqiList.splice(inx, 1);
            }
            inx = this.pth_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.pth_wuqiList.splice(inx, 1);
            }
            inx = this.ptz_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.ptz_wuqiList.splice(inx, 1);
            }
            inx = this.pty_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.pty_wuqiList.splice(inx, 1);
            }
            inx = this.jg1_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.jg1_wuqiList.splice(inx, 1);
            }
            inx = this.jg2_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.jg2_wuqiList.splice(inx, 1);
            }
            inx = this.jg3_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.jg3_wuqiList.splice(inx, 1);
            }
            inx = this.jg4_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.jg4_wuqiList.splice(inx, 1);
            }
            inx = this.gz1_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.gz1_wuqiList.splice(inx, 1);
            }
            inx = this.gzz_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.gzz_wuqiList.splice(inx, 1);
            }
            inx = this.gzy_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.gzy_wuqiList.splice(inx, 1);
            }
            inx = this.gzh_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.gzh_wuqiList.splice(inx, 1);
            }
            inx = this.js1_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.js1_wuqiList.splice(inx, 1);
            }
            inx = this.sd1_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.sd1_wuqiList.splice(inx, 1);
            }
            inx = this.sd2_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.sd2_wuqiList.splice(inx, 1);
            }
            inx = this.sdh_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.sdh_wuqiList.splice(inx, 1);
            }
            inx = this.sdz_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.sdz_wuqiList.splice(inx, 1);
            }
            inx = this.sdy_wuqiList.indexOf(wq);
            if (inx >= 0) {
                this.sdy_wuqiList.splice(inx, 1);
            }
        };
        FeiChuanBase.prototype.ji_guang_peng_zhuang = function (x, y) {
        };
        FeiChuanBase.prototype.reLoadToPoint = function (grid) {
            this.toPoint = Tools.gridTop2(grid.x, grid.y);
        };
        return FeiChuanBase;
    }(p2.Body));
    feichuan.FeiChuanBase = FeiChuanBase;
    __reflect(FeiChuanBase.prototype, "feichuan.FeiChuanBase");
})(feichuan || (feichuan = {}));
var djwq;
(function (djwq) {
    var DJWQBase = (function (_super) {
        __extends(DJWQBase, _super);
        function DJWQBase(suzhu, moKuaiPost, shapeType, bitName, w_t) {
            var _this = _super.call(this, moKuaiPost, shapeType, bitName, w_t, suzhu) || this;
            _this.cd = 5000;
            return _this;
        }
        //射击
        DJWQBase.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
        };
        return DJWQBase;
    }(wuqi.WuQiBase));
    djwq.DJWQBase = DJWQBase;
    __reflect(DJWQBase.prototype, "djwq.DJWQBase");
})(djwq || (djwq = {}));
var zidan;
(function (zidan) {
    var ZiDanBase = (function (_super) {
        __extends(ZiDanBase, _super);
        function ZiDanBase(scene, zhenying, mass, wqt) {
            var _this = _super.call(this, { mass: mass }) || this;
            //尾翼cd
            _this.wyCD = 15;
            _this.wyMark = 0;
            _this.is_updata = false;
            //碰撞次数
            _this.collNumber = 1;
            //攻击力
            _this.hitNumber = 1;
            //是否是第一次碰撞
            _this.is_first = true;
            //发射标记时间
            _this.mark_time = egret.getTimer();
            //生命周期
            _this.sheng_ming_zhou_qi = 10000;
            //是否添加的移除列表
            _this.isAddRem = false;
            _this.zhenying = zhenying;
            _this.wqt = wqt;
            _this.scene = scene;
            _this.yueShulist = new Array();
            _this.initColl();
            _this.initZidan();
            return _this;
        }
        ZiDanBase.prototype.initZidan = function () {
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO] });
            this.addShape(box);
            box.collisionMask = this.collMask;
            box.collisionGroup = this.collGroup;
        };
        //约束
        ZiDanBase.prototype.yue_shu = function () {
        };
        //初始化碰撞参数
        ZiDanBase.prototype.initColl = function () {
            if (this.zhenying == GameConstant.ZHEN_YING.WO_JUN_ZIDAN) {
                this.collGroup = GameConstant.WO_JUN_ZIDAN;
                this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;
            }
            if (this.zhenying == GameConstant.ZHEN_YING.DI_JUN_ZIDAN) {
                this.collGroup = GameConstant.DI_JUN_ZIDAN;
                this.collMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI;
            }
            // if (this.zhenying == GameConstant.ZHEN_YING.ZHONG_LI) {
            //     this.collGroup = GameConstant.ZHONG_LI;
            //     this.collMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI | GameConstant.WO_JUN | GameConstant.WO_JUN_ZIDAN | GameConstant.DI_JUN_ZIDAN;
            // }
        };
        ZiDanBase.prototype.texiao = function () {
            this.dell(this.bitmap);
        };
        //移除特效（超时时移除）
        ZiDanBase.prototype.removeTeXiao = function () {
            this.addRemove();
        };
        ZiDanBase.prototype.addRemove = function () {
            this.scene.ovzRemoveZiDanBodyList.push(this);
        };
        //移除缓动动画
        ZiDanBase.prototype.dell = function (DD) {
            if (DD) {
                if (DD.parent) {
                    egret.Tween.removeTweens(DD);
                    this.scene.removeChild(DD);
                }
            }
            DD = null;
        };
        //移除约束(所有子弹删除的时候 都要尝试)
        ZiDanBase.prototype.removeYueShu = function () {
            if (this.yueShulist.length <= 0) {
                return;
            }
            var size = this.yueShulist.length;
            for (var i = 0; i < size; i++) {
                var ys = this.yueShulist.pop();
                this.scene.world.removeConstraint(ys);
            }
        };
        ZiDanBase.prototype.updata = function () {
        };
        //添加尾翼
        ZiDanBase.prototype.weiyi = function (name) {
            if (egret.getTimer() - this.wyMark < this.wyCD && this.bitmap != null) {
                return;
            }
            this.wyMark = egret.getTimer();
            var b = new egret.Bitmap(RES.getRes(name));
            b.anchorOffsetX = this.bitmap.width * 0.5;
            b.anchorOffsetY = this.bitmap.height * 0.5;
            b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = this.bitmap.x;
            b.y = this.bitmap.y;
            b.scaleX = 0.4;
            b.scaleY = 0.5;
            this.scene.addChild(b);
            b.alpha = 0.5;
            egret.Tween.get(b).to({ "alpha": 0.1 }, 110).call(this.dell, this, [b]);
        };
        //检测 节点是否可以被击中
        ZiDanBase.prototype.chickThePost = function (x, y, fc) {
            if (x < 0) {
                return;
            }
            if (y < 0) {
                return;
            }
            if (x >= fc.moKuaiList[0].length) {
                return;
            }
            if (y >= fc.moKuaiList.length) {
                return;
            }
            fc.shang_hai(fc.moKuaiList[y][x], this.hitNumber);
        };
        return ZiDanBase;
    }(p2.Body));
    zidan.ZiDanBase = ZiDanBase;
    __reflect(ZiDanBase.prototype, "zidan.ZiDanBase");
})(zidan || (zidan = {}));
var fjztj;
(function (fjztj) {
    //飞机状态机
    var FjZTJ = (function (_super) {
        __extends(FjZTJ, _super);
        function FjZTJ() {
            var _this = _super.call(this) || this;
            //标记当前路点
            _this.step_mark = 0;
            //有限状态机 列表
            _this.zt_list = new Array();
            //是否循环
            _this.is_loop = true;
            //已经循环过
            _this.looped = false;
            return _this;
        }
        //进步器
        FjZTJ.prototype.upStep = function (time) {
            _super.prototype.upStep.call(this, time);
        };
        //添加有限状态机 因子
        FjZTJ.prototype.addInfo = function (info) {
            this.zt_list.push(info);
        };
        FjZTJ.prototype.nextStep = function (sleep_time) {
            this.sleep(sleep_time);
            //清空
            this.fc.moveAI = null;
            this.fc.mzAI = null;
            this.fc.gjAI = null;
            //0 检查
            if (this.step_mark >= this.zt_list.length) {
                this.mT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.gjT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.info = null;
                return;
            }
            //1 设置 
            this.info = this.zt_list[this.step_mark];
            //过滤不参与循环的设置
            while (!this.info.is_loop && this.looped) {
                this.step_mark++;
                this.info = this.zt_list[this.step_mark];
            }
            // egret.log(">>>>>>>>>>>>>>:" + this.info.mb + " -- " + this.info.is_loop + "||" + Tools.getPhoneW() + " -- " + Tools.getPhoneH());
            this.mT = this.info.mT;
            this.mzT = this.info.mZ;
            this.gjT = this.info.gjT;
            this.fc.upToPoint(this.info.pos);
            // this.fc.damping = this.info.zn;
            //2 更新
            this.step_mark++;
            if (this.step_mark >= this.zt_list.length && this.is_loop) {
                this.step_mark = 0;
                this.looped = true;
            }
        };
        //返回下一个 节点信息
        FjZTJ.prototype.getNextInfo = function () {
            if (this.step_mark < this.zt_list.length) {
                return this.zt_list[(this.step_mark + 1)];
            }
            if (this.step_mark >= this.zt_list.length && this.is_loop) {
                return this.zt_list[0];
            }
            if (this.step_mark >= this.zt_list.length && !this.is_loop) {
                return null;
            }
        };
        return FjZTJ;
    }(zhuangtaiji.ZhuangTaiJiBase));
    fjztj.FjZTJ = FjZTJ;
    __reflect(FjZTJ.prototype, "fjztj.FjZTJ");
})(fjztj || (fjztj = {}));
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
var ai;
(function (ai) {
    var SingoMoveToAi = (function (_super) {
        __extends(SingoMoveToAi, _super);
        function SingoMoveToAi(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //是否变换目标
            _this.is_u = true;
            // 巡逻坐标节点 下标
            _this.point_index = 0;
            // public su_du: number = 1;
            //误差范围
            _this.wu_cha = 1;
            return _this;
        }
        SingoMoveToAi.prototype.doUpData = function (time) {
            if (!this.fc.toPoint) {
                return;
            }
            _super.prototype.doUpData.call(this, time);
            //飞船与目标点之间的距离
            var jl = egret.Point.distance(this.fc.toPoint, egret.Point.create(this.fc.position[0], this.fc.position[1]));
            //到达后清楚 目标点标记
            if (jl < this.wu_cha) {
                this.fc.toPoint = null;
                this.upOver();
                return;
            }
            var xl = Tools.xiangliang(egret.Point.create(this.fc.position[0], this.fc.position[1]), this.fc.toPoint, 1);
            this.fc.velocity = [xl.x, xl.y];
        };
        return SingoMoveToAi;
    }(ai.AiBase));
    ai.SingoMoveToAi = SingoMoveToAi;
    __reflect(SingoMoveToAi.prototype, "ai.SingoMoveToAi");
})(ai || (ai = {}));
var ai;
(function (ai) {
    var testAi = (function (_super) {
        __extends(testAi, _super);
        function testAi(fc, mt, xz, mz, run_time, time_, xs) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //减速次数上线
            _this.jian_su_num = 20;
            //减速标记
            _this.jian_su_x_mark = 0;
            _this.jian_su_y_mark = 0;
            //力量对速度的印象
            _this.jian_su_li_pi = 5 * 1.8;
            //实际作用力
            _this.jian_su_li = 5;
            //达成
            _this.x_da_cheng = false;
            _this.y_da_cheng = false;
            //作用力
            _this.force_x = 0;
            _this.force_y = 0;
            //总距离
            _this.zong_ju_li_x = 0;
            _this.zong_ju_li_y = 0;
            _this.is_mark = true;
            _this.start_pos = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.time_ = time_;
            _this.xs = xs;
            //初始化 减速参数
            _this.zong_ju_li_x = 0;
            _this.zong_ju_li_y = 18;
            _this.is_cs_jiansu = true;
            _this.mark_y = _this.fc.position[1];
            _this.jia_su_x();
            _this.jia_su_y();
            return _this;
        }
        //------------------------加速------------------------------------
        testAi.prototype.jia_su_x = function () {
            var mb_s = this.zong_ju_li_x;
            if (this.mu_biao_wz_X == 1) {
                mb_s = this.zong_ju_li_x * -1;
            }
            //S=(Vo+Vt)/2 *1.8*T
            //(s*2)/(t*1.8)-vo=vt
            // f*1.8=a*m;
            //(vt-vo)=at
            //(vt-vo)=f*1.8/m*t
            //f=(vt-vo)*m/(1.8*t)
            var vt = (mb_s * 2) / (this.xs * 1.8) - this.fc.velocity[0];
            this.force_x = ((vt - this.fc.velocity[0]) * this.fc.cs_mass) / (1.8 * this.xs);
        };
        testAi.prototype.jia_su_y = function () {
            var mb_s = this.zong_ju_li_y;
            if (this.mu_biao_wz_Y == 1) {
                mb_s = this.zong_ju_li_y * -1;
            }
            var vt = (mb_s * 2) / (this.xs * 1.8) - this.fc.velocity[1];
            this.force_y = ((vt - this.fc.velocity[1]) * this.fc.cs_mass) / (1.8 * this.xs);
        };
        //-------------------------------------------------------------
        testAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            if (time < 10000) {
                return;
            }
            if (this.is_mark) {
                this.fc.velocity = [0, -5];
                this.is_mark = false;
                egret.log("DDDD");
            }
            //施加力
            this.fc.force = [this.force_x, this.force_y];
            egret.log("CCCCC:" + time + " -- " + Math.abs(this.mark_y - this.fc.position[1]) + " -- " + this.fc.velocity[1]);
            // egret.log("YYY:" + this.force_x + " -- " + this.force_y + " || " + this.x_type + " -- " + this.y_type + " || " + this.mu_biao_wz_X + " -- " + this.mu_biao_wz_Y);
        };
        return testAi;
    }(ai.AiBase));
    ai.testAi = testAi;
    __reflect(testAi.prototype, "ai.testAi");
})(ai || (ai = {}));
var ai;
(function (ai) {
    var TKZXSINGOAI = (function (_super) {
        __extends(TKZXSINGOAI, _super);
        function TKZXSINGOAI(fc, mt, xz, mz, run_time, time_, xs) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //减速次数上线
            _this.jian_su_num = 20;
            //减速标记
            _this.jian_su_x_mark = 0;
            _this.jian_su_y_mark = 0;
            //力量对速度的印象
            _this.jian_su_li_pi = 5 * 1.8;
            //实际作用力
            _this.jian_su_li = 5;
            //达成
            _this.x_da_cheng = false;
            _this.y_da_cheng = false;
            //作用力
            _this.force_x = 0;
            _this.force_y = 0;
            //总距离
            _this.zong_ju_li_x = 0;
            _this.zong_ju_li_y = 0;
            _this.start_pos = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.time_ = time_;
            _this.xs = xs;
            _this.max_force = _this.fc.cs_mass;
            // egret.log(this.xs_x + " -- " + this.xs_y + " -- " + this.xs);
            //f * 1.8=a * m;
            //S/1.8=Vt^2+a(t^2)/2
            //s/1.8=xs^2+(f*1.8)/m*(t^2)/2
            _this.upType();
            egret.log("TTTTTTTTTTTTT:" + _this.getMaxTimeX() + " -- " + _this.getMaxTimeY());
            return _this;
        }
        //获取 x 方向 末速度
        TKZXSINGOAI.prototype.getVtX = function () {
            var mb_s = 0;
            if (this.mu_biao_wz_X == 1) {
                mb_s = -this.xs;
            }
            if (this.mu_biao_wz_X == 2) {
                mb_s = 0;
            }
            if (this.mu_biao_wz_X == 3) {
                mb_s = this.xs;
            }
            return mb_s;
        };
        //获取 y 方向 末速度 
        TKZXSINGOAI.prototype.getVtY = function () {
            var mb_s = 0;
            if (this.mu_biao_wz_Y == 1) {
                mb_s = -this.xs;
            }
            if (this.mu_biao_wz_Y == 2) {
                mb_s = 0;
            }
            if (this.mu_biao_wz_Y == 3) {
                mb_s = this.xs;
            }
            return mb_s;
        };
        //获取 x方向 最大 行使时间
        TKZXSINGOAI.prototype.getMaxTimeX = function () {
            //f * 1.8=a * m;
            //S/1.8=Vt^2+a(t^2)/2
            //s/1.8=xs^2+(f*1.8)/m*(t^2)/2
            //2*m*(s/1.8-this.xs*this.xs)/(f*1.8)=t*t
            //math.sqrt(9)
            var s = this.getZJLX();
            egret.log("TTTXXXXXX:" + -1351.9998901649758 / 304.2);
            var z = (2 * this.fc.cs_mass * (s / 1.8 - this.xs * this.xs)) / (this.max_force * 1.8);
            var t = Math.sqrt(z);
            return t;
        };
        // 获取 y 方向 最大  行使时间
        TKZXSINGOAI.prototype.getMaxTimeY = function () {
            var s = this.getZJLY();
            var z = (2 * this.fc.cs_mass * (s / 1.8 - this.xs * this.xs)) / (this.max_force * 1.8);
            var t = Math.sqrt(z);
            return t;
        };
        //当前距离目标距离 x
        TKZXSINGOAI.prototype.getZJLX = function () {
            return Math.abs(this.fc.position[0] - this.fc.toPoint.x);
        };
        //当前距离目标距离 y
        TKZXSINGOAI.prototype.getZJLY = function () {
            return Math.abs(this.fc.position[1] - this.fc.toPoint.y);
        };
        //更新状态
        TKZXSINGOAI.prototype.upType = function () {
            //位置达到
            if (!this.x_da_cheng) {
                this.x_da_cheng = this.is_x_over();
                this.x_type = 3;
            }
            if (!this.y_da_cheng) {
                this.y_da_cheng = this.is_y_over();
                this.y_type = 3;
            }
            if (this.x_da_cheng) {
                this.x_type = 1;
            }
            if (this.y_da_cheng) {
                this.y_type = 1;
            }
        };
        //----------------------------减速---------------------------------------
        TKZXSINGOAI.prototype.x_jian_su = function () {
            //vt =v0 + FT*1.8  2=0.5秒
            var f = -this.fc.velocity[0] / 1.8 / (1 / this.xs);
            if (f > 0 && this.force_x < f) {
                this.force_x = f;
            }
            if (f < 0 && this.force_x > f) {
                this.force_x = f;
            }
        };
        TKZXSINGOAI.prototype.y_jian_su = function () {
            var f = -this.fc.velocity[1] / 1.8 / (1 / this.xs);
            if (f > 0 && this.force_y < f) {
                this.force_y = f;
            }
            if (f < 0 && this.force_y > f) {
                this.force_y = f;
            }
        };
        //----------------------------------------------------------------
        //------------------------加速------------------------------------
        TKZXSINGOAI.prototype.jia_su_x = function () {
            //vt=at
            //vt=f*1.8/m*t
            //f=vt*m/(1.8*t)
            var mb_s = this.getVtX();
            var vt = this.fc.velocity[0] + this.force_x * 1.8;
            if (mb_s > 0 && vt >= mb_s) {
                this.force_x = 0;
                return;
            }
            if (mb_s < 0 && vt <= mb_s) {
                this.force_x = 0;
                return;
            }
            this.force_x = (mb_s - this.fc.velocity[0]);
        };
        TKZXSINGOAI.prototype.jia_su_y = function () {
            var mb_s = this.getVtY();
            var vt = this.fc.velocity[1] + this.force_y * 1.8;
            if (mb_s > 0 && vt >= mb_s) {
                this.force_y = 0;
                return;
            }
            if (mb_s < 0 && vt <= mb_s) {
                this.force_y = 0;
                return;
            }
            this.force_y = (mb_s - this.fc.velocity[1]);
        };
        //-------------------------------------------------------------
        TKZXSINGOAI.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            this.upType();
            //判断是否到达目的地 并修改状态
            if (this.x_da_cheng && this.y_da_cheng) {
                this.upOver();
                return;
            }
            if (this.x_type == 1) {
                this.x_jian_su();
            }
            if (this.x_type == 2) {
                this.force_x = 0;
            }
            if (this.x_type == 3) {
                this.jia_su_x();
            }
            if (this.y_type == 1) {
                this.y_jian_su();
            }
            if (this.y_type == 2) {
                this.force_y = 0;
            }
            if (this.y_type == 3) {
                this.jia_su_y();
                //施加力
                this.fc.force = [this.force_x, this.force_y];
            }
        };
        return TKZXSINGOAI;
    }(ai.AiBase));
    ai.TKZXSINGOAI = TKZXSINGOAI;
    __reflect(TKZXSINGOAI.prototype, "ai.TKZXSINGOAI");
})(ai || (ai = {}));
var ai;
(function (ai) {
    /**
     * 旋转ai
     */
    var XuanZhuanAI = (function (_super) {
        __extends(XuanZhuanAI, _super);
        function XuanZhuanAI(fc, mt, xz, mz) {
            return _super.call(this, fc, mt, xz, mz) || this;
        }
        XuanZhuanAI.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            this.fc.angularVelocity = this.xs;
        };
        return XuanZhuanAI;
    }(ai.AiBase));
    ai.XuanZhuanAI = XuanZhuanAI;
    __reflect(XuanZhuanAI.prototype, "ai.XuanZhuanAI");
})(ai || (ai = {}));
var ai;
(function (ai) {
    var XuanZhuanJian = (function (_super) {
        __extends(XuanZhuanJian, _super);
        function XuanZhuanJian(fc, xs) {
            var _this = _super.call(this, fc, null, null, null) || this;
            _this.fc.angularDamping = xs;
            return _this;
        }
        return XuanZhuanJian;
    }(ai.AiBase));
    ai.XuanZhuanJian = XuanZhuanJian;
    __reflect(XuanZhuanJian.prototype, "ai.XuanZhuanJian");
})(ai || (ai = {}));
var ai;
(function (ai) {
    //原地等待 ai
    var YuanDiAi = (function (_super) {
        __extends(YuanDiAi, _super);
        function YuanDiAi(fc, mt, xz, mz, xs) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.init_time = 0;
            _this.xs = xs;
            _this.init_time = egret.getTimer();
            return _this;
        }
        //
        YuanDiAi.prototype.doUpData = function (time) {
            if ((time - this.init_time) > this.xs * 1000) {
                this.upOver();
            }
            //vt =v0 + at*1.8
            var fx = -this.fc.velocity[0] / 1.8 / 0.5;
            var fy = -this.fc.velocity[1] / 1.8 / 0.5;
            // egret.log("HHHHHHHHHHHHHHH:" + fx + " -- " + fy);
            this.fc.force = [fx, fy];
        };
        return YuanDiAi;
    }(ai.AiBase));
    ai.YuanDiAi = YuanDiAi;
    __reflect(YuanDiAi.prototype, "ai.YuanDiAi");
})(ai || (ai = {}));
var ai;
(function (ai) {
    var ZhengXiaFangAi = (function (_super) {
        __extends(ZhengXiaFangAi, _super);
        function ZhengXiaFangAi(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.xs = 4;
            //需要转到的角度
            _this.angle = 0;
            _this.xs_hu = 1;
            //飞船实际需要面准的部位
            _this.jian_tou = -Math.PI * 0.5;
            return _this;
        }
        ZhengXiaFangAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //角度测算
            this.angle = -Math.PI * 0.5;
            var jd = this.angle * 180 / Math.PI;
            if (this.angle < 0) {
                this.angle = Math.PI * 2 + this.angle;
            }
            var fcAng = this.fc.angle + this.jian_tou;
            //规范化角度数值
            fcAng = fcAng % (Math.PI * 2);
            if (fcAng < 0) {
                fcAng = Math.PI * 2 + fcAng;
            }
            var js = this.xs;
            //角度差距
            var jc = Math.abs(fcAng - this.angle);
            //方向计算
            if (fcAng >= this.angle) {
                if (jc > Math.PI) {
                    this.xs_hu = 1;
                }
                else {
                    this.xs_hu = -1;
                }
            }
            if (fcAng < this.angle) {
                if (jc > Math.PI) {
                    this.xs_hu = -1;
                }
                else {
                    this.xs_hu = 1;
                }
            }
            if (jc > (Math.PI + Math.PI * 0.5)) {
                jc = Math.PI * 2 - jc;
            }
            var pi = jc / Math.PI;
            js = this.xs * pi;
            if (jc < 0.05) {
                this.fc.angularVelocity = 0;
                return;
            }
            this.fc.angularVelocity = this.xs_hu * js;
        };
        return ZhengXiaFangAi;
    }(ai.AiBase));
    ai.ZhengXiaFangAi = ZhengXiaFangAi;
    __reflect(ZhengXiaFangAi.prototype, "ai.ZhengXiaFangAi");
})(ai || (ai = {}));
var ai;
(function (ai) {
    var ZhuanXiang = (function (_super) {
        __extends(ZhuanXiang, _super);
        function ZhuanXiang(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.xs = 0.5;
            _this.fc.angularDamping = 0.9;
            return _this;
        }
        //场景刷新器
        ZhuanXiang.prototype.doUpData = function (time) {
            if (!this.hang_up) {
                if (this.fc.p2_target) {
                    var angle = Math.atan2((this.fc.p2_target.y - this.fc.position[1]), (this.fc.p2_target.x - this.fc.position[0])) + Math.PI * 0.5;
                    var zx = (Math.PI + 1.57);
                    //画重点
                    if (this.fc.angle > zx) {
                        this.fc.angle = this.fc.angle - 2 * Math.PI;
                    }
                    //连续画重点
                    if (this.fc.angle < -Math.PI * 0.5) {
                        this.fc.angle = zx;
                    }
                    if (angle >= 0 && this.fc.angle >= 0) {
                        if (Math.abs(angle - this.fc.angle) < Math.PI) {
                            if (angle < this.fc.angle) {
                                this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                            }
                            else {
                                this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                            }
                        }
                        else {
                            if (angle < this.fc.angle) {
                                this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                            }
                            else {
                                this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                            }
                        }
                    }
                    if (angle < 0 && this.fc.angle >= 0) {
                        if (Math.abs(angle) + this.fc.angle < Math.PI) {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                        }
                        else {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                        }
                    }
                    if (this.fc.angle < 0 && angle >= 0) {
                        if (Math.abs(angle) + this.fc.angle < Math.PI) {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                        }
                        else {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                        }
                    }
                    if (this.fc.angle < 0 && angle < 0) {
                        if (this.fc.angle < angle) {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Anti_clockwise;
                        }
                        else {
                            this.xuan_zhuan_fang_xiang = ai.ZHUAN_XIANG.Clockwise;
                        }
                    }
                    // //是否处于悬停状态
                    //顺时针
                    if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Clockwise) {
                        if (Math.abs(this.fc.angle - angle) > 0.1) {
                            this.fc.angularVelocity = -this.xs;
                        }
                    }
                    if (this.xuan_zhuan_fang_xiang == ai.ZHUAN_XIANG.Anti_clockwise) {
                        if (Math.abs(this.fc.angle - angle) > 0.1) {
                            this.fc.angularVelocity = this.xs;
                        }
                    }
                    // egret.log("AAAAAAAAAAAAAAA:" + this.fc.angle + "___" + angle + "___" + this.xuan_zhuan_fang_xiang);
                }
            }
        };
        return ZhuanXiang;
    }(ai.AiBase));
    ai.ZhuanXiang = ZhuanXiang;
    __reflect(ZhuanXiang.prototype, "ai.ZhuanXiang");
})(ai || (ai = {}));
var ai;
(function (ai) {
    var ZhuanXiangDongLiAi = (function (_super) {
        __extends(ZhuanXiangDongLiAi, _super);
        function ZhuanXiangDongLiAi(fc, mt, xz, mz, run_time, is_js) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //误差范围
            _this.wu_cha = 0.3;
            //纪录 始发位置 以及 总旅程
            _this.start_point = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.x_jl = Math.abs(_this.start_point.x - _this.fc.toPoint.x);
            _this.y_jl = Math.abs(_this.start_point.y - _this.fc.toPoint.y);
            _this.is_js = is_js;
            return _this;
            // egret.log("更新——————————————————————————————————————————————————")
        }
        ZhuanXiangDongLiAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            var pi_x = 1;
            var pi_y = 1;
            //向左走 
            if (this.start_point.x > this.fc.toPoint.x) {
                pi_x *= -1;
            }
            //向下走 
            if (this.start_point.y > this.fc.toPoint.y) {
                pi_y *= -1;
            }
            //距离 出发点距离 
            var n_x = Math.abs(this.fc.position[0] - this.start_point.x);
            var n_y = Math.abs(this.fc.position[1] - this.start_point.y);
            //距离目标点距离
            var jj_x = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            var jj_y = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            var x_l = 0;
            var y_l = 0;
            //前半段加速-------------------------OK---------
            if (n_x < this.x_jl * 0.1) {
                x_l = this.xs * pi_x;
            }
            if (n_y < this.y_jl * 0.1) {
                y_l = this.xs * pi_y;
            }
            if (this.x_jl < this.wu_cha * 0.5) {
                x_l = 0;
            }
            if (this.y_jl < this.wu_cha * 0.5) {
                y_l = 0;
            }
            this.fc.force = [x_l, y_l];
            //----------------后半段减速区域-----------------待ok--------------
            if (this.is_js) {
                if (n_x >= this.x_jl * 0.9) {
                    x_l = -this.xs * pi_x;
                }
                if (n_y >= this.y_jl * 0.9) {
                    y_l = -this.xs * pi_y;
                }
                if (this.x_jl < this.wu_cha * 0.5) {
                    x_l = 0;
                }
                if (this.y_jl < this.wu_cha * 0.5) {
                    y_l = 0;
                }
                this.fc.force = [x_l, y_l];
            }
            //实时距离 
            var jl = egret.Point.distance(this.fc.toPoint, egret.Point.create(this.fc.position[0], this.fc.position[1]));
            egret.log("SSSSSSSSS:" + this.fc.velocity[0] + ":" + this.fc.velocity[1]);
            //判断是否到达目的地 并修改状态
            if (jj_x < this.wu_cha && jj_y < this.wu_cha) {
                egret.log("到达");
                this.upOver();
                return;
            }
        };
        return ZhuanXiangDongLiAi;
    }(ai.AiBase));
    ai.ZhuanXiangDongLiAi = ZhuanXiangDongLiAi;
    __reflect(ZhuanXiangDongLiAi.prototype, "ai.ZhuanXiangDongLiAi");
})(ai || (ai = {}));
var ai;
(function (ai) {
    var ZuoYouLuanDongAI = (function (_super) {
        __extends(ZuoYouLuanDongAI, _super);
        function ZuoYouLuanDongAI(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //是否抵达
            _this.is_get = true;
            //速度
            _this.v = 1;
            return _this;
        }
        /**
         * 边界位置
         *  左右 ： 20 - 32
         *  上下 ： 60 - 37
         */
        ZuoYouLuanDongAI.prototype.doUpData = function (time) {
            //满足条件重新随机
            if (this.is_get || this.fc.velocity[0] < 0.5) {
                this.target_point = egret.Point.create(this.getRandomX(), this.fc.position[1]);
                if (this.target_point.x > this.fc.position[0]) {
                    this.fc.velocity = [this.v, 0];
                }
                else {
                    this.fc.velocity = [-this.v, 0];
                }
                this.is_get = false;
                return;
            }
            //查看是否到达指定位置
            var jl = egret.Point.distance(egret.Point.create(this.fc.position[0], this.fc.position[1]), this.target_point);
            if (jl < 0.5) {
                this.is_get = true;
            }
        };
        //获取随机坐标点
        ZuoYouLuanDongAI.prototype.getRandomX = function () {
            var x = Math.random() * (32 - 20) + 20;
            return x;
        };
        return ZuoYouLuanDongAI;
    }(ai.AiBase));
    ai.ZuoYouLuanDongAI = ZuoYouLuanDongAI;
    __reflect(ZuoYouLuanDongAI.prototype, "ai.ZuoYouLuanDongAI");
})(ai || (ai = {}));
var ai;
(function (ai) {
    var PuTongWuqiAi = (function (_super) {
        __extends(PuTongWuqiAi, _super);
        //射几次数标记
        function PuTongWuqiAi(fc, mt, xz, mz, wuqiInfo) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.wuqiInfo = wuqiInfo;
            for (var _i = 0, _a = _this.wuqiInfo; _i < _a.length; _i++) {
                var info = _a[_i];
                info.initCD();
            }
            return _this;
            // egret.log("CCCCCCCCCCCC")
        }
        PuTongWuqiAi.prototype.doUpData = function (time) {
            time = egret.getTimer();
            _super.prototype.doUpData.call(this, time);
            // let size = this.wuqiInfo.length;
            for (var _i = 0, _a = this.wuqiInfo; _i < _a.length; _i++) {
                var info = _a[_i];
                // egret.log("TTTTTTTT:" + (time) + " -- " + info.da_ge_mark + " -- " + info.wq_type + " | " + info.da_num_mark + " -- " + info.da_num);
                if ((time - info.da_ge_mark) > info.da_jian_ge && info.da_num_mark < info.da_num) {
                    //目标达成结束
                    if (info.da_num_mark <= info.da_num) {
                        info.is_xiao = true;
                    }
                    info.da_ge_mark = time;
                    info.da_num_mark++;
                }
                this.sheji(time, info);
            }
        };
        //射击  h6  z7  y8
        PuTongWuqiAi.prototype.sheji = function (time, info) {
            if (info.xiao_num_mark >= info.xiao_num) {
                info.is_xiao = false;
                info.xiao_num_mark = 0;
            }
            var wuqiList;
            if (info.wq_type == 1) {
                wuqiList = this.fc.pt1_wuqiList;
            }
            if (info.wq_type == 12) {
                wuqiList = this.fc.pt2_wuqiList;
            }
            if (info.wq_type == 13) {
                wuqiList = this.fc.pt3_wuqiList;
            }
            if (info.wq_type == 16) {
                wuqiList = this.fc.pth_wuqiList;
            }
            if (info.wq_type == 17) {
                wuqiList = this.fc.ptz_wuqiList;
            }
            if (info.wq_type == 18) {
                wuqiList = this.fc.pty_wuqiList;
            }
            if (info.wq_type == 2) {
                wuqiList = this.fc.jg1_wuqiList;
            }
            if (info.wq_type == 22) {
                wuqiList = this.fc.jg2_wuqiList;
            }
            if (info.wq_type == 23) {
                wuqiList = this.fc.jg3_wuqiList;
            }
            if (info.wq_type == 24) {
                wuqiList = this.fc.jg4_wuqiList;
            }
            if (info.wq_type == 3) {
                wuqiList = this.fc.gz1_wuqiList;
            }
            if (info.wq_type == 36) {
                wuqiList = this.fc.gzh_wuqiList;
            }
            if (info.wq_type == 37) {
                wuqiList = this.fc.gzz_wuqiList;
            }
            if (info.wq_type == 38) {
                wuqiList = this.fc.gzy_wuqiList;
            }
            if (info.wq_type == 4) {
                wuqiList = this.fc.js1_wuqiList;
            }
            if (info.wq_type == 5) {
                wuqiList = this.fc.sd1_wuqiList;
            }
            if (info.wq_type == 52) {
                wuqiList = this.fc.sd2_wuqiList;
            }
            if (info.wq_type == 56) {
                wuqiList = this.fc.sdh_wuqiList;
            }
            if (info.wq_type == 57) {
                wuqiList = this.fc.sdz_wuqiList;
            }
            if (info.wq_type == 58) {
                wuqiList = this.fc.sdy_wuqiList;
            }
            // egret.log("info.wq_type:" + info.wq_type);
            // egret.log("SSSSSSSSS:" + (time - info.xiao_ge_mark) + " -- " + info.xiao_num_mark + " -- " + info.xiao_num + " -- " + info.is_xiao);
            if ((time - info.xiao_ge_mark) > info.xiao_jian_ge && info.xiao_num_mark < info.xiao_num && info.is_xiao) {
                //射击
                for (var _i = 0, wuqiList_1 = wuqiList; _i < wuqiList_1.length; _i++) {
                    var w = wuqiList_1[_i];
                    //发射
                    w.sudu = info.she_su;
                    w.fashe(null, null, time);
                }
                info.xiao_num_mark++;
                info.xiao_ge_mark = time;
            }
        };
        return PuTongWuqiAi;
    }(ai.AiBase));
    ai.PuTongWuqiAi = PuTongWuqiAi;
    __reflect(PuTongWuqiAi.prototype, "ai.PuTongWuqiAi");
})(ai || (ai = {}));
var bar;
(function (bar) {
    var DengJiBar = (function () {
        function DengJiBar(scene) {
            this.y = 1070;
            this.pi = 20;
            this.x = Tools.getPhoneW() * 0.01 + 1000;
            this.scene = scene;
            this.initUI();
        }
        DengJiBar.prototype.initUI = function () {
            this.w1 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w1, 100);
            this.w1.y = this.y;
            this.w1.x = this.x + this.pi * 0;
            this.w2 = new egret.Bitmap(RES.getRes("1"));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.x + this.pi * 1;
            this.w3 = new egret.Bitmap(RES.getRes("he"));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.x + this.pi * 2;
            this.w4 = new egret.Bitmap(RES.getRes("xin"));
            this.scene.addChildAt(this.w4, 100);
            this.w4.y = this.y;
            this.w4.x = this.x + this.pi * 3;
            this.w5 = new egret.Bitmap(RES.getRes("deng"));
            this.scene.addChildAt(this.w5, 100);
            this.w5.y = this.y;
            this.w5.x = this.x + this.pi * 4;
            this.w6 = new egret.Bitmap(RES.getRes("jb"));
            this.scene.addChildAt(this.w6, 100);
            this.w6.y = this.y;
            this.w6.x = this.x + this.pi * 5;
        };
        return DengJiBar;
    }());
    bar.DengJiBar = DengJiBar;
    __reflect(DengJiBar.prototype, "bar.DengJiBar");
})(bar || (bar = {}));
var bar;
(function (bar) {
    //  盾牌
    var DunBar = (function () {
        function DunBar(scene) {
            //当前盾牌数量
            this.d_number = 1;
            this.scene = scene;
            this.init();
        }
        DunBar.prototype.init = function () {
            // this.dun_1 = new egret.Bitmap(RES.getRes("dp"));
            // this.scene.addChildAt(this.dun_1, 100);
            // this.dun_1.x = Tools.getPhoneW() * 0.8 + 1000;
            // this.dun_1.y = 1010;
            // this.dun_2 = new egret.Bitmap(RES.getRes("dp"));
            // this.scene.addChildAt(this.dun_2, 100);
            // this.dun_2.x = Tools.getPhoneW() * 0.85 + 1000;
            // this.dun_2.y = 1010;
            // this.dun_3 = new egret.Bitmap(RES.getRes("dp"));
            // this.scene.addChildAt(this.dun_3, 100);
            // this.dun_3.x = Tools.getPhoneW() * 0.9 + 1000;
            // this.dun_3.y = 1010;
        };
        //减血
        DunBar.prototype.jian = function () {
            // egret.Tween.get(target,{loop:true}).to({ alpha: 0}, 200).to({ alpha: 1}, 200);
            this.d_number--;
            if (this.d_number <= 0) {
                this.d_number = 0;
                this.scene.sk.sui_lie();
            }
            //第一个盾牌变红闪烁
            if (this.d_number == 2 && this.dun_1.alpha != 0) {
                this.dun_1.texture = RES.getRes("dp_h");
                egret.Tween.get(this.dun_1).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100);
                return;
            }
            if (this.d_number == 1 && this.dun_2.alpha != 0) {
                this.dun_2.texture = RES.getRes("dp_h");
                egret.Tween.get(this.dun_2).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100);
                return;
            }
            // if (this.d_number == 0 && this.dun_3.alpha != 0) {
            //     this.dun_3.texture = RES.getRes("dp_h");
            //     egret.Tween.get(this.dun_3).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100);
            //     return;
            // }
        };
        //加血
        DunBar.prototype.jia = function () {
            if (this.d_number == 3) {
                return;
            }
            if (this.d_number == 2) {
                this.dun_1.texture = RES.getRes("dp_b");
                egret.Tween.get(this.dun_1).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).call(this.huan, this, [1]);
                this.d_number++;
                return;
            }
            if (this.d_number == 1) {
                this.dun_2.texture = RES.getRes("dp_b");
                egret.Tween.get(this.dun_2).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).to({ alpha: 0 }, 100).to({ alpha: 1 }, 100).call(this.huan, this, [2]);
                this.d_number++;
                return;
            }
        };
        DunBar.prototype.huan = function (d) {
            if (d == 1) {
                this.dun_1.texture = RES.getRes("dp");
            }
            if (d == 2) {
                this.dun_2.texture = RES.getRes("dp");
            }
            if (d == 3) {
                this.dun_3.texture = RES.getRes("dp");
            }
        };
        return DunBar;
    }());
    bar.DunBar = DunBar;
    __reflect(DunBar.prototype, "bar.DunBar");
})(bar || (bar = {}));
var bar;
(function (bar) {
    var GuaZaiBar = (function () {
        function GuaZaiBar(scene) {
            this.y = 1030;
            this.pi = 20;
            this.x = Tools.getPhoneW() * 0.01 + 1000;
            this.scene = scene;
            this.initUI();
        }
        GuaZaiBar.prototype.initUI = function () {
            this.w1 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w1, 100);
            this.w1.y = this.y;
            this.w1.x = this.x + this.pi * 0;
            this.w2 = new egret.Bitmap(RES.getRes("1"));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.x + this.pi * 1;
            this.w3 = new egret.Bitmap(RES.getRes("sx"));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.x + this.pi * 2;
            this.w4 = new egret.Bitmap(RES.getRes("1"));
            this.scene.addChildAt(this.w4, 100);
            this.w4.y = this.y;
            this.w4.x = this.x + this.pi * 3;
            this.w5 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w5, 100);
            this.w5.y = this.y;
            this.w5.x = this.x + this.pi * 4;
            this.w6 = new egret.Bitmap(RES.getRes("gua"));
            this.scene.addChildAt(this.w6, 100);
            this.w6.y = this.y;
            this.w6.x = this.x + this.pi * 5;
            this.w7 = new egret.Bitmap(RES.getRes("zai"));
            this.scene.addChildAt(this.w7, 100);
            this.w7.y = this.y;
            this.w7.x = this.x + this.pi * 6;
        };
        //设置数值
        GuaZaiBar.prototype.setNumber = function (s) {
            if (s < 10) {
                this.w2.texture = RES.getRes(s + "");
                return;
            }
            var l1 = s / 10;
            var l2 = s % 10;
            this.w1.texture = RES.getRes(l1 + "");
            this.w2.texture = RES.getRes(l2 + "");
        };
        return GuaZaiBar;
    }());
    bar.GuaZaiBar = GuaZaiBar;
    __reflect(GuaZaiBar.prototype, "bar.GuaZaiBar");
})(bar || (bar = {}));
var bar;
(function (bar) {
    var HuiHeBar = (function () {
        function HuiHeBar(scene) {
            this.y = 1010;
            this.pi = 20;
            this.x = Tools.getPhoneW() * 0.01 + 1000;
            this.scene = scene;
            this.initUI();
        }
        HuiHeBar.prototype.initUI = function () {
            this.whh = new egret.Bitmap(RES.getRes("hh"));
            this.scene.addChildAt(this.whh, 100);
            this.whh.y = this.y;
            this.whh.x = this.x + this.pi * 0;
            this.y += 10;
            this.w1 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w1, 100);
            this.w1.y = this.y;
            this.w1.x = this.whh.width + this.x + this.whh.width * 0.5;
            this.w2 = new egret.Bitmap(RES.getRes("5"));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.whh.width + this.x + this.whh.width * 0.6 + 1 * this.w1.width;
            this.w3 = new egret.Bitmap(RES.getRes("sx"));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.whh.width + this.x + this.whh.width * 0.78 + 2 * this.w1.width;
            this.w4 = new egret.Bitmap(RES.getRes("5"));
            this.scene.addChildAt(this.w4, 100);
            this.w4.y = this.y;
            this.w4.x = this.whh.width + this.x + this.whh.width * 0.5 + 3 * this.w1.width;
            this.w5 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w5, 100);
            this.w5.y = this.y;
            this.w5.x = this.whh.width + this.x + this.whh.width * 0.6 + 4 * this.w1.width;
        };
        //设置数值
        HuiHeBar.prototype.setNumber = function (s) {
            if (s < 10) {
                this.w2.texture = RES.getRes(s + "");
                return;
            }
            var l1 = s / 10;
            var l2 = s % 10;
            this.w1.texture = RES.getRes(l1 + "");
            this.w2.texture = RES.getRes(l2 + "");
        };
        return HuiHeBar;
    }());
    bar.HuiHeBar = HuiHeBar;
    __reflect(HuiHeBar.prototype, "bar.HuiHeBar");
})(bar || (bar = {}));
var bar;
(function (bar) {
    var JinBiBar = (function () {
        function JinBiBar(scene, all) {
            //当前所有的数
            this.all_number = 17865;
            //是否需要变更
            this.is_chang = false;
            //  红色RGB
            this.hong = [251, 17, 57];
            //白色RGB
            this.white = [237, 255, 249];
            //个个位置对应的数
            this.ge_numb = 0;
            this.shi_numb = 0;
            this.bai_numb = 0;
            this.qian_numb = 0;
            this.wan_numb = 0;
            this.ge_numb_old = 0;
            this.shi_numb_old = 0;
            this.bai_numb_old = 0;
            this.qian_numb_old = 0;
            this.wan_numb_old = 0;
            this.ge_mark = 1;
            this.shi_mark = 1;
            this.bai_mark = 1;
            this.qian_mark = 1;
            this.wan_mark = 1;
            this.is_ge = false;
            this.is_shi = false;
            this.is_bai = false;
            this.is_qian = false;
            this.is_wan = false;
            this.scene = scene;
            this.all_number = all;
            this.renumber();
            this.initNumber();
        }
        JinBiBar.prototype.initNumber = function () {
            this.ge = new egret.Bitmap(RES.getRes(this.ge_numb + ""));
            this.shi = new egret.Bitmap(RES.getRes(this.shi_numb + ""));
            this.bai = new egret.Bitmap(RES.getRes(this.bai_numb + ""));
            this.qian = new egret.Bitmap(RES.getRes(this.qian_numb + ""));
            this.wan = new egret.Bitmap(RES.getRes(this.wan_numb + ""));
            this.jing = new egret.Bitmap(RES.getRes("jt"));
            this.ge.y = Tools.getPhoneH() * 0.02 + 1000;
            this.shi.y = Tools.getPhoneH() * 0.02 + 1000;
            this.bai.y = Tools.getPhoneH() * 0.02 + 1000;
            this.qian.y = Tools.getPhoneH() * 0.02 + 1000;
            this.wan.y = Tools.getPhoneH() * 0.02 + 1000;
            this.jing.y = Tools.getPhoneH() * 0.02 + 1000;
            this.wan.x = Tools.getPhoneW() * 0.4 + 1000;
            this.qian.x = Tools.getPhoneW() * 0.43 + 1000;
            this.bai.x = Tools.getPhoneW() * 0.46 + 1000;
            this.shi.x = Tools.getPhoneW() * 0.49 + 1000;
            this.ge.x = Tools.getPhoneW() * 0.52 + 1000;
            this.jing.x = Tools.getPhoneW() * 0.55 + 1000;
            this.scene.addChild(this.ge);
            this.scene.addChild(this.shi);
            this.scene.addChild(this.bai);
            this.scene.addChild(this.qian);
            this.scene.addChild(this.wan);
            this.scene.addChild(this.jing);
        };
        //刷新数字
        JinBiBar.prototype.renumber = function () {
            this.wan_numb = Math.floor(this.all_number / 10000);
            this.qian_numb = Math.floor(this.all_number % 10000 / 1000);
            this.bai_numb = Math.floor(this.all_number % 1000 / 100);
            this.shi_numb = Math.floor(this.all_number % 100 / 10);
            this.ge_numb = Math.floor(this.all_number % 10);
            this.is_chang = true;
            this.is_ge = true;
            this.is_shi = true;
            this.is_bai = true;
            this.is_qian = true;
            this.is_wan = true;
        };
        //加钱
        JinBiBar.prototype.addAllNumb = function (n) {
            this.all_number += n;
            user.UserInfo.saveJinBi(this.all_number);
            this.renumber();
        };
        //减钱
        JinBiBar.prototype.jianAllNumb = function (n) {
            if (this.all_number < n) {
                //TODO 特效 
                this.texiao();
                return false;
            }
            this.all_number -= n;
            user.UserInfo.saveJinBi(this.all_number);
            this.renumber();
            return true;
        };
        //特效
        JinBiBar.prototype.texiao = function () {
            egret.Tween.get(this.ge).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50);
            egret.Tween.get(this.shi).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50);
            egret.Tween.get(this.bai).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50);
            egret.Tween.get(this.qian).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50);
            egret.Tween.get(this.wan).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50).to({ "scaleX": 2, "scaleY": 2 }, 50).to({ "scaleX": 1, "scaleY": 1 }, 50);
        };
        //刷新数字
        JinBiBar.prototype.updata = function () {
            // if (!this.is_chang) {
            //     return;
            // }
            // this.is_chang = false;
            if (this.is_ge)
                this.upge();
            if (this.is_shi)
                this.upshi();
            if (this.is_bai)
                this.upbai();
            if (this.is_qian)
                this.upqian();
            if (this.is_wan)
                this.upwan();
        };
        //更新个位数
        JinBiBar.prototype.upge = function () {
            //不变 退出
            if (this.ge_numb == this.ge_numb_old && this.ge_mark == 0) {
                this.ge_mark = 1;
                this.is_ge = false;
                return;
            }
            if (this.ge_numb == this.ge_numb_old) {
                this.ge_mark--;
            }
            this.ge_numb_old++;
            this.ge_numb_old = this.ge_numb_old % 10;
            this.ge.texture = RES.getRes(this.ge_numb_old + "");
            egret.Tween.get(this.ge).to({ "scaleY": 1.5 }, 50).to({ "scaleY": 1 }, 50);
        };
        //更新十位数
        JinBiBar.prototype.upshi = function () {
            //不变 退出
            if (this.shi_numb == this.shi_numb_old && this.shi_mark == 0) {
                this.shi_mark = 1;
                this.is_shi = false;
                return;
            }
            if (this.shi_numb == this.shi_numb_old) {
                this.shi_mark--;
            }
            this.shi_numb_old++;
            this.shi_numb_old = this.shi_numb_old % 10;
            this.shi.texture = RES.getRes(this.shi_numb_old + "");
            egret.Tween.get(this.shi).to({ "scaleY": 1.5 }, 50).to({ "scaleY": 1 }, 50);
        };
        //更新白位数
        JinBiBar.prototype.upbai = function () {
            //不变 退出
            if (this.bai_numb == this.bai_numb_old && this.bai_mark == 0) {
                this.bai_mark = 1;
                this.is_bai = false;
                return;
            }
            if (this.bai_numb == this.bai_numb_old) {
                this.bai_mark--;
            }
            this.bai_numb_old++;
            this.bai_numb_old = this.bai_numb_old % 10;
            this.bai.texture = RES.getRes(this.bai_numb_old + "");
            egret.Tween.get(this.bai).to({ "scaleY": 1.5 }, 50).to({ "scaleY": 1 }, 50);
        };
        //更新白位数
        JinBiBar.prototype.upqian = function () {
            //不变 退出
            if (this.qian_numb == this.qian_numb_old && this.qian_mark == 0) {
                this.qian_mark = 1;
                this.is_qian = false;
                return;
            }
            if (this.qian_numb == this.qian_numb_old) {
                this.qian_mark--;
            }
            this.qian_numb_old++;
            this.qian_numb_old = this.qian_numb_old % 10;
            this.qian.texture = RES.getRes(this.qian_numb_old + "");
            egret.Tween.get(this.qian).to({ "scaleY": 1.5 }, 50).to({ "scaleY": 1 }, 50);
        };
        //更新白位数
        JinBiBar.prototype.upwan = function () {
            //不变 退出
            if (this.wan_numb == this.wan_numb_old && this.wan_mark == 0) {
                this.wan_mark = 1;
                this.is_wan = false;
                return;
            }
            if (this.wan_numb == this.wan_numb_old) {
                this.wan_mark--;
            }
            this.wan_numb_old++;
            this.wan_numb_old = this.wan_numb_old % 10;
            this.wan.texture = RES.getRes(this.wan_numb_old + "");
            egret.Tween.get(this.wan).to({ "scaleY": 1.5 }, 50).to({ "scaleY": 1 }, 50);
        };
        return JinBiBar;
    }());
    bar.JinBiBar = JinBiBar;
    __reflect(JinBiBar.prototype, "bar.JinBiBar");
})(bar || (bar = {}));
var bar;
(function (bar) {
    var TimeBar = (function () {
        function TimeBar(scene) {
            this.y = 1050;
            this.pi = 20;
            //当前剩余时间
            this.now_time = 0;
            //标记时间
            this.mark_time = 0;
            this.x = Tools.getPhoneW() * 0.01 + 1000;
            this.scene = scene;
            this.initUI();
        }
        TimeBar.prototype.initUI = function () {
            this.wz = new egret.Bitmap(RES.getRes("z"));
            this.scene.addChildAt(this.wz, 100);
            this.wz.y = this.y;
            this.wz.x = this.x + this.pi * 0;
            this.y += 10;
            this.w2 = new egret.Bitmap(RES.getRes("1"));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.wz.width + this.x + this.wz.width * 0.5;
            this.w3 = new egret.Bitmap(RES.getRes("sd"));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.wz.width + this.x + this.wz.width * 0.6 + 1 * this.w2.width;
            this.w4 = new egret.Bitmap(RES.getRes("5"));
            this.scene.addChildAt(this.w4, 100);
            this.w4.y = this.y;
            this.w4.x = this.wz.width + this.x + this.wz.width * 0.5 + 2 * this.w2.width;
            this.w5 = new egret.Bitmap(RES.getRes("0"));
            this.scene.addChildAt(this.w5, 100);
            this.w5.y = this.y;
            this.w5.x = this.wz.width + this.x + this.wz.width * 0.6 + 3 * this.w2.width;
        };
        //设置数值
        TimeBar.prototype.setNumber = function (s) {
            if (s < 0) {
                return;
            }
            var l2 = Math.floor(s / 60);
            var m = s % 60;
            var l5 = Math.floor(m / 10);
            var l6 = m % 10;
            this.w2.texture = RES.getRes(l2 + "");
            this.w4.texture = RES.getRes(l5 + "");
            this.w5.texture = RES.getRes(l6 + "");
        };
        //设置标记时间
        TimeBar.prototype.setMark = function (s) {
            this.mark_time = s;
            this.now_time = this.mark_time - egret.getTimer();
        };
        //更新秒表
        TimeBar.prototype.upup = function () {
            var n = this.mark_time - egret.getTimer();
            if (this.now_time - n > 1000) {
                this.now_time = n;
                this.setNumber(Math.floor(this.now_time / 1000));
            }
        };
        return TimeBar;
    }());
    bar.TimeBar = TimeBar;
    __reflect(TimeBar.prototype, "bar.TimeBar");
})(bar || (bar = {}));
var bar;
(function (bar) {
    var ZhongJianTiShiBar = (function () {
        function ZhongJianTiShiBar(scene) {
            this.y = 1030;
            this.pi = 20;
            this.x = Tools.getPhoneW() * 0.4 + 1000;
            this.y = Tools.getPhoneH() * 0.4 + 1000;
            this.scene = scene;
        }
        ZhongJianTiShiBar.prototype.setNumber = function (n) {
            this.w1 = new egret.Bitmap(RES.getRes("hh"));
            this.scene.addChildAt(this.w1, 100);
            this.w1.y = this.y;
            this.w1.x = this.x;
            this.y += 10;
            var s;
            var g;
            if (n >= 10) {
                s = n / 10;
                g = s % 10;
            }
            else {
                s = 0;
                g = n;
            }
            this.w2 = new egret.Bitmap(RES.getRes(s + ""));
            this.scene.addChildAt(this.w2, 100);
            this.w2.y = this.y;
            this.w2.x = this.x + this.w1.width + this.w1.width * 0.5;
            this.w3 = new egret.Bitmap(RES.getRes(g + ""));
            this.scene.addChildAt(this.w3, 100);
            this.w3.y = this.y;
            this.w3.x = this.x + this.w1.width + this.w1.width * 0.5 + this.w2.width + this.w2.width * 0.5;
            egret.Tween.get(this.w1).to({ alpha: 1 }, 2000).call(this.remove_set, this);
        };
        ZhongJianTiShiBar.prototype.remove_set = function () {
            this.scene.removeChild(this.w1);
            this.scene.removeChild(this.w2);
            this.scene.removeChild(this.w3);
        };
        return ZhongJianTiShiBar;
    }());
    bar.ZhongJianTiShiBar = ZhongJianTiShiBar;
    __reflect(ZhongJianTiShiBar.prototype, "bar.ZhongJianTiShiBar");
})(bar || (bar = {}));
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
var bj;
(function (bj) {
    var HongGuang = (function () {
        function HongGuang(scene) {
            this.scene = scene;
        }
        HongGuang.prototype.init = function () {
            // this.shp = new egret.Shape();
            // this.shp.graphics.beginFill(0XD71139, 1);
            // // this.shp.graphics.drawRect(1000, 1000, Tools.getPhoneW() + 1000, Tools.getPhoneH() + 1000);
            // this.shp.graphics.drawRect(1000, 1000, 1100, 1100);
            // this.shp.graphics.endFill();
            // // this.shp.alpha = 0.5;
            // this.scene.addChildAt(this.shp, 101);
        };
        HongGuang.prototype.jizhong = function () {
            // this.shp.alpha = 0.5;
            // egret.Tween.get(this.shp).to({ "alpha": 0 }, 100);
            var shp = new egret.Shape();
            shp.graphics.beginFill(0XD71139, 1);
            shp.graphics.drawRect(1000, 1000, 1100, 1100);
            shp.graphics.endFill();
            shp.alpha = 0.3;
            this.scene.addChild(shp);
            egret.Tween.get(shp).to({ "alpha": 0 }, 500).call(this.dell, this, [shp]);
        };
        //移除缓动动画
        HongGuang.prototype.dell = function (DD) {
            if (DD) {
                if (DD.parent) {
                    egret.Tween.removeTweens(DD);
                    this.scene.removeChild(DD);
                }
            }
            DD = null;
        };
        return HongGuang;
    }());
    bj.HongGuang = HongGuang;
    __reflect(HongGuang.prototype, "bj.HongGuang");
})(bj || (bj = {}));
var bj;
(function (bj) {
    var XingXing = (function (_super) {
        __extends(XingXing, _super);
        //rt 位置随机的类型 1 全图随机 2 x方向随机
        function XingXing(zl, rt) {
            var _this = _super.call(this, { mass: 1 }) || this;
            _this.ry = 900; //随机的y轴坐标
            _this.is_jiasu = false;
            _this.name = "xx1";
            _this.sf = Tools.GetRandomNum(5, 10) * 0.1;
            _this.tm = Tools.GetRandomNum(5, 10) * 0.1;
            _this.zl = zl;
            _this.w = Tools.getPhoneW();
            _this.h = Tools.getPhoneH();
            _this.rx = Tools.GetRandomNum(0, _this.w) + 1000;
            if (rt == 1) {
                _this.ry = Tools.GetRandomNum(0, _this.h) + 1000;
            }
            _this.initZidan();
            return _this;
        }
        XingXing.prototype.initZidan = function () {
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO] });
            this.addShape(box);
            box.collisionMask = GameConstant.XING_XING;
            box.collisionGroup = GameConstant.WO_JUN;
            this.bitmap = new egret.Bitmap(RES.getRes(this.name));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = this.sf;
            this.bitmap.scaleY = this.sf;
            this.bitmap.alpha = this.tm;
            this.displays = [this.bitmap];
            var p = Tools.egretTOp2(egret.Point.create(this.rx, this.ry));
            this.position = [p.x, p.y];
            this.velocity = [0, -this.zl];
        };
        //重新回到顶点
        XingXing.prototype.reTop = function () {
            this.rx = Tools.GetRandomNum(0, this.w) + 1000;
            this.ry = 900;
            var p = Tools.egretTOp2(egret.Point.create(this.rx, this.ry));
            this.position = [p.x, p.y];
        };
        XingXing.prototype.jiasu = function () {
            this.velocity = [0, -this.zl * 8];
            // egret.log("++++++++++++++++++++")
        };
        XingXing.prototype.jiansu = function () {
            this.velocity = [0, -this.zl];
        };
        return XingXing;
    }(p2.Body));
    bj.XingXing = XingXing;
    __reflect(XingXing.prototype, "bj.XingXing");
})(bj || (bj = {}));
var canhai;
(function (canhai) {
    var CanHai = (function (_super) {
        __extends(CanHai, _super);
        function CanHai(zhuji, yuntu) {
            var _this = _super.call(this, zhuji.battle_scene, egret.Point.create(500, 500), GameConstant.ZHEN_YING.ZHONG_LI, 1, 1) || this;
            _this.fc_type = feichuan.FC_TYPE.CANHAI;
            _this.yuntu = yuntu;
            _this.zhuji = zhuji;
            _this.initCanhai();
            return _this;
            // this.zhenying = GameConstant.ZHONG_LI
        }
        //初始化残骸
        CanHai.prototype.initCanhai = function () {
            var ly = 100;
            var lx = 100;
            var hx = 0;
            var hy = 0;
            for (var _i = 0, _a = this.yuntu; _i < _a.length; _i++) {
                var p = _a[_i];
                if (p) {
                    if (p.moKuaiPost.x < lx) {
                        lx = p.moKuaiPost.x;
                    }
                    if (p.moKuaiPost.y < ly) {
                        ly = p.moKuaiPost.y;
                    }
                    if (p.moKuaiPost.x > hx) {
                        hx = p.moKuaiPost.x;
                    }
                    if (p.moKuaiPost.y > hy) {
                        hy = p.moKuaiPost.y;
                    }
                }
            }
            var hm = hy - ly + 1;
            var wm = hx - lx + 1;
            var yt = new Array();
            for (var h = 0; h <= hm; h++) {
                yt[h] = new Array();
                for (var w = 0; w <= wm; w++) {
                    yt[h].push(0);
                }
            }
            for (var _b = 0, _c = this.yuntu; _b < _c.length; _b++) {
                var p = _c[_b];
                yt[p.moKuaiPost.y - ly][p.moKuaiPost.x - lx] = p.mk_level;
            }
            this.initChanHai(yt);
            //初始化中心坐标
            var m = this.yuntu[0];
            var o = this.moKuaiList[m.moKuaiPost.y - ly][m.moKuaiPost.x - lx];
            var an = Math.PI / 180 * 360 - this.zhuji.angle;
            /**
            *     |-
            *  R= | cos(a)     sin(a)
            *     | -sin(a)    cos(a)
            *     |-
            */
            var rx = Math.cos(an) * (m.boxShape.position[0] - o.boxShape.position[0]) + Math.sin(an) * (m.boxShape.position[1] - o.boxShape.position[1]);
            var ry = -Math.sin(an) * (m.boxShape.position[0] - o.boxShape.position[0]) + Math.cos(an) * (m.boxShape.position[1] - o.boxShape.position[1]);
            this.position[0] = (this.zhuji.position[0] + rx);
            this.position[1] = (this.zhuji.position[1] + ry);
            this.angle = this.zhuji.angle;
        };
        CanHai.prototype.initChanHai = function (yun_tu) {
            var s = egret.Point.create(yun_tu[0].length, yun_tu.length);
            this.initList(yun_tu.length, yun_tu[0].length);
            for (var h = 0; h < yun_tu.length; h++) {
                for (var w = 0; w < yun_tu[0].length; w++) {
                    this.initMK(yun_tu[h][w], h, w, s);
                }
            }
            this.battle_scene.world.addBody(this);
        };
        CanHai.prototype.initMK = function (level, h, w, chang_kuan) {
            var hx;
            if (level < 5) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_1_ch", this);
                hx.setMkLevel(1);
            }
            if (level > 4 && level < 9) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_2_ch", this);
                hx.setMkLevel(2);
            }
            if (level > 8) {
                hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(w, h), mokuai.BODY_SHAPE_TYPE.SIMPLE, "op_zj_pt_ch_level_3_ch", this);
                hx.setMkLevel(3);
            }
            hx.moKuaiType = mokuai.MO_KUAI_TYPE.CAN_HAI;
            if (level == 0) {
                return;
            }
            var hpp = Physics.getRelativeDistance(chang_kuan, egret.Point.create(w, h), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            box.collisionGroup = this.collGroup;
            box.collisionMask = this.collMask;
            this.addShape(box, [hpp.x, hpp.y]);
            this.moKuaiList[h][w] = hx;
            hx.boxShape = box;
            this.battle_scene.addChildAt(hx, 1);
            this.mokuai_size++;
        };
        CanHai.prototype.updataSomeThing = function () {
            _super.prototype.updataSomeThing.call(this);
        };
        return CanHai;
    }(feichuan.FeiChuanBase));
    canhai.CanHai = CanHai;
    __reflect(CanHai.prototype, "canhai.CanHai");
})(canhai || (canhai = {}));
var GameConstant;
(function (GameConstant) {
    //阵营
    var ZHEN_YING;
    (function (ZHEN_YING) {
        ZHEN_YING[ZHEN_YING["WO_JUN"] = 0] = "WO_JUN";
        ZHEN_YING[ZHEN_YING["DI_JUN"] = 1] = "DI_JUN";
        ZHEN_YING[ZHEN_YING["ZHONG_LI"] = 2] = "ZHONG_LI";
        ZHEN_YING[ZHEN_YING["WO_JUN_ZIDAN"] = 3] = "WO_JUN_ZIDAN";
        ZHEN_YING[ZHEN_YING["DI_JUN_ZIDAN"] = 4] = "DI_JUN_ZIDAN";
        ZHEN_YING[ZHEN_YING["DIAO_LUO"] = 5] = "DIAO_LUO";
    })(ZHEN_YING = GameConstant.ZHEN_YING || (GameConstant.ZHEN_YING = {}));
    //碰撞组
    GameConstant.XING_XING = Math.pow(2, 0); //不与任何组碰撞˝
    GameConstant.WO_JUN = Math.pow(2, 1);
    GameConstant.DI_JUN = Math.pow(2, 2);
    GameConstant.ZHONG_LI = Math.pow(2, 3);
    GameConstant.WO_JUN_ZIDAN = Math.pow(2, 4);
    GameConstant.DI_JUN_ZIDAN = Math.pow(2, 5);
    GameConstant.DIAO_LUO = Math.pow(2, 6);
    GameConstant.mark = 0;
    function diaoluo(fc) {
        //将飞船分解列表 清空
        fc.updataFenJie();
        var map = fc.moKuaiList;
        GameConstant.mark = 0;
        var hx;
        //普通飞船
        if (fc.fc_type == feichuan.FC_TYPE.DIJI) {
            hx = fc.hx;
            //标记核心
            if (hx) {
                hx.mark_number = GameConstant.mark;
            }
        }
        //残骸
        if (fc.fc_type == feichuan.FC_TYPE.CANHAI) {
            hx = markCanHai(fc);
        }
        //拓扑
        tuopu(map, hx, fc);
        // 染色 删除
        dell(map, fc);
        //如果敌机被击毁移除敌机
        if (fc.fc_type == feichuan.FC_TYPE.DIJI) {
            if (fc.hx == null) {
                fc.battle_scene.removeTheFcInTheGame(fc);
            }
        }
    }
    GameConstant.diaoluo = diaoluo;
    //标记残骸 虚拟核心
    function markCanHai(fc) {
        for (var i = 0; i < fc.moKuaiList.length; i++) {
            for (var j = 0; j < fc.moKuaiList[i].length; j++) {
                if (fc.moKuaiList[i][j]) {
                    fc.moKuaiList[i][j].mark_number = GameConstant.mark;
                    return fc.moKuaiList[i][j];
                }
            }
        }
    }
    //删除掉落
    function dellDiaoluo(fc, mark) {
        for (var i = 1; i < mark; i++) {
        }
    }
    //飞船矩阵拓扑
    function tuopu(map, hx, fc) {
        if (!hx) {
            //将所有节点标记为 1
            for (var h = 0; h < map.length; h++) {
                for (var w = 0; w < map[h].length; w++) {
                    if (map[h][w]) {
                        map[h][w].mark_number = 1;
                    }
                }
            }
            return;
        }
        GameConstant.hearList = new Array();
        GameConstant.hearList.push(hx);
        //主题 抽离出来
        while (GameConstant.hearList.length > 0) {
            zhixing(map, GameConstant.hearList.shift(), fc);
        }
        //残骸
        for (var i = 0; i < 10; i++) {
            if (!hasMark(map, fc)) {
                break;
            }
        }
    }
    function dell(map, fc) {
        for (var h = 0; h < map.length; h++) {
            for (var w = 0; w < map[h].length; w++) {
                if (map[h][w]) {
                    //将船体模块添加到分解列表 并从船体上删除
                    if (map[h][w].mark_number > 0) {
                        //如果是武器 则移除
                        if (map[h][w] instanceof wuqi.WuQiBase) {
                            fc.removeWuQi(map[h][w]);
                        }
                        //如果有道具需要掉落
                        if (map[h][w].is_diao_luo) {
                            fc.battle_scene.diao_luo_dao_ju(map[h][w]);
                        }
                        fc.fen_jie[map[h][w].mark_number].push(map[h][w]);
                        fc.removeShape(map[h][w].boxShape);
                        fc.battle_scene.removeChild(map[h][w]);
                        map[h][w] = null;
                        continue;
                    }
                    //重新标记
                    map[h][w].mark_number = -1;
                }
            }
        }
    }
    function hasMark(map, fc) {
        GameConstant.mark++;
        GameConstant.hearList = new Array();
        var b = false;
        for (var h = 0; h < map.length; h++) {
            for (var w = 0; w < map[h].length; w++) {
                if (map[h][w] && map[h][w].mark_number == -1) {
                    map[h][w].mark_number = GameConstant.mark;
                    GameConstant.hearList.push(map[h][w]);
                    b = true;
                    break;
                }
            }
            if (b) {
                break;
            }
        }
        while (GameConstant.hearList.length > 0) {
            zhixing(map, GameConstant.hearList.shift(), fc);
        }
        return b;
    }
    //做标记  当前herd节点的 拓扑
    function zhixing(map, jd, fc) {
        var w = jd.moKuaiPost.x;
        var h = jd.moKuaiPost.y;
        var hh;
        var ww;
        //上
        hh = h - 1;
        ww = w;
        hhww(map, GameConstant.mark, hh, ww, fc);
        //下
        hh = h + 1;
        ww = w;
        hhww(map, GameConstant.mark, hh, ww, fc);
        //左
        hh = h;
        ww = w - 1;
        hhww(map, GameConstant.mark, hh, ww, fc);
        //右
        hh = h;
        ww = w + 1;
        hhww(map, GameConstant.mark, hh, ww, fc);
    }
    function hhww(map, mark, hh, ww, fc) {
        if (hh >= 0 &&
            ww >= 0 &&
            hh < map.length &&
            ww < map[0].length) {
            if (map[hh][ww] && map[hh][ww].mark_number == -1) {
                map[hh][ww].mark_number = mark;
                //将拓扑加入herd列表
                GameConstant.hearList.push(map[hh][ww]);
            }
        }
    }
    //检测飞船模块数量 并删除
    function chackMoKuaiNumber(fc) {
        var is_save = false;
        for (var h = 0; h < fc.moKuaiList.length; h++) {
            for (var w = 0; w < fc.moKuaiList[h].length; w++) {
                if (fc.moKuaiList[h][w]) {
                    is_save = true;
                }
            }
        }
        if (!is_save) {
            fc.battle_scene.removeTheFcInTheGame(fc);
            return false;
        }
        return true;
    }
    GameConstant.chackMoKuaiNumber = chackMoKuaiNumber;
})(GameConstant || (GameConstant = {}));
var bean;
(function (bean) {
    var HitBean = (function () {
        function HitBean(mk, hitNumb) {
            this.mk = mk;
            this.hitNumb = hitNumb;
        }
        return HitBean;
    }());
    bean.HitBean = HitBean;
    __reflect(HitBean.prototype, "bean.HitBean");
})(bean || (bean = {}));
var diaoluo;
(function (diaoluo) {
    var DiaoLuo = (function (_super) {
        __extends(DiaoLuo, _super);
        function DiaoLuo(scene, dl_type, lv, pot, wq_type) {
            var _this = _super.call(this, { mass: 1 }) || this;
            //阵营掉落
            _this.zhenying = GameConstant.ZHEN_YING.DIAO_LUO;
            //碰撞数量
            _this.collNum = 1;
            _this.scene = scene;
            _this.dl_type = dl_type;
            _this.lv = lv;
            if (dl_type == suiji.SJ_YAN_SE.WU_QI) {
                _this.wq_type = wq_type;
            }
            _this.position[0] = pot.x;
            _this.position[1] = pot.y;
            _this.initColl();
            _this.init();
            _this.bitmap.anchorOffsetX = _this.bitmap.width * 0.5;
            _this.bitmap.anchorOffsetY = _this.bitmap.height * 0.5;
            return _this;
        }
        DiaoLuo.prototype.init = function () {
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.NANO] });
            this.addShape(box);
            box.collisionMask = this.collMask;
            box.collisionGroup = this.collGroup;
            //掉落燃料
            if (this.dl_type == suiji.SJ_YAN_SE.RAN_LIAO) {
                if (this.lv == 1) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op__dl_rl_1_dl"));
                    this.name1 = "op__dl_rl_1_dl";
                    this.name2 = "op_dl_rl_1_s_dl";
                }
                if (this.lv == 2) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op__dl_rl_2_dl"));
                    this.name1 = "op__dl_rl_2_dl";
                    this.name2 = "op_dl_rl_2_s_dl";
                }
                if (this.lv == 3) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op__dl_rl_3_dl"));
                    this.name1 = "op__dl_rl_3_dl";
                    this.name2 = "op_dl_rl_3_s_dl";
                }
            }
            //武器
            if (this.dl_type == suiji.SJ_YAN_SE.WU_QI) {
                //普通武器
                if (this.wq_type == wuqi.WUQI_TYPE.PU_TONG) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_1"));
                    this.name1 = "op_dl_wq_1";
                    this.name2 = "op_dl_wq_1_s";
                }
                //散弹
                if (this.wq_type == wuqi.WUQI_TYPE.SAN_DAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_2"));
                    this.name1 = "op_dl_wq_2";
                    this.name2 = "op_dl_wq_2_s";
                }
                //导弹
                if (this.wq_type == wuqi.WUQI_TYPE.DAO_DAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_3"));
                    this.name1 = "op_dl_wq_3";
                    this.name2 = "op_dl_wq_3_s";
                }
                //射线
                if (this.wq_type == wuqi.WUQI_TYPE.SHE_XIAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_4"));
                    this.name1 = "op_dl_wq_4";
                    this.name2 = "op_dl_wq_4_s";
                }
                //定向
                if (this.wq_type == wuqi.WUQI_TYPE.DING_XIANG) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_5"));
                    this.name1 = "op_dl_wq_5";
                    this.name2 = "op_dl_wq_5_s";
                }
                //鱼雷
                if (this.wq_type == wuqi.WUQI_TYPE.YU_LEI) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_6"));
                    this.name1 = "op_dl_wq_6";
                    this.name2 = "op_dl_wq_6_s";
                }
                //螺旋
                if (this.wq_type == wuqi.WUQI_TYPE.LUO_XUAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_7"));
                    this.name1 = "op_dl_wq_7";
                    this.name2 = "op_dl_wq_7_s";
                }
                //长钉
                if (this.wq_type == wuqi.WUQI_TYPE.CHANG_DING) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_8"));
                    this.name1 = "op_dl_wq_8";
                    this.name2 = "op_dl_wq_8_s";
                }
                //重锤
                if (this.wq_type == wuqi.WUQI_TYPE.ZHONG_CHUI) {
                    this.bitmap = new egret.Bitmap(RES.getRes("op_dl_wq_9"));
                    this.name1 = "op_dl_wq_9";
                    this.name2 = "op_dl_wq_9_s";
                }
            }
            //装甲
            if (this.dl_type == suiji.SJ_YAN_SE.ZHUANG_JIA) {
                // if (this.lv == 1) {
                //     this.bitmap = new egret.Bitmap(RES.getRes("op_dl_zj_level_1_dl"));
                //     this.name1 = "op_dl_zj_level_1_dl";
                //     this.name2 = "op_dl_zj_level_1_s_dl";
                // }
                // if (this.lv == 2) {
                //     this.bitmap = new egret.Bitmap(RES.getRes("op_dl_zj_level_2_dl"));
                //     this.name1 = "op_dl_zj_level_2_dl";
                //     this.name2 = "op_dl_zj_level_2_s_dl";
                // }
                // if (this.lv == 3) {
                //     this.bitmap = new egret.Bitmap(RES.getRes("op_dl_zj_level_3_dl"));
                //     this.name1 = "op_dl_zj_level_3_dl";
                //     this.name2 = "op_dl_zj_level_3_s_dl";
                // }
                // if (this.lv == 4) {
                //     this.bitmap = new egret.Bitmap(RES.getRes("op_dl_zj_level_4_dl"));
                //     this.name1 = "op_dl_zj_level_4_dl";
                //     this.name2 = "op_dl_zj_level_4_s_dl";
                // }
                // if (this.lv == 5) {
                this.bitmap = new egret.Bitmap(RES.getRes("op_dl_zj_level_5_dl"));
                this.name1 = "op_dl_zj_level_5_dl";
                this.name2 = "op_dl_zj_level_5_s_dl";
                // }
            }
            this.displays = [this.bitmap];
        };
        //初始化碰撞参数
        DiaoLuo.prototype.initColl = function () {
            this.collGroup = GameConstant.DIAO_LUO;
            this.collMask = GameConstant.WO_JUN;
        };
        //
        DiaoLuo.prototype.updata = function () {
            this.velocity = [0, -1];
        };
        //循环特效
        DiaoLuo.prototype.loop = function () {
            this.tw = egret.Tween.get(this.bitmap, { loop: true });
            this.tw.to({ "alpha": 0.8 }, 300).call(this.upBit, this, [this.name2]).to({ "alpha": 0.8 }, 300).call(this.upBit, this, [this.name1]);
        };
        DiaoLuo.prototype.upBit = function (name) {
            this.bitmap.texture = RES.getRes(name);
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
        };
        return DiaoLuo;
    }(p2.Body));
    diaoluo.DiaoLuo = DiaoLuo;
    __reflect(DiaoLuo.prototype, "diaoluo.DiaoLuo");
})(diaoluo || (diaoluo = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._distance = new egret.Point();
        return _this;
    }
    Main.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        egret.lifecycle.addLifecycleListener(function (context) {
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.loadResource();
    };
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.stage.removeChild(loadingView)];
                    case 3:
                        _a.sent();
                        this.addTestScene();
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //添加测试场景
    Main.prototype.addTestScene = function () {
        //初始化所有飞船
        var fc_list = RES.getRes("all_fc_json");
        for (var _i = 0, fc_list_1 = fc_list; _i < fc_list_1.length; _i++) {
            var fc = fc_list_1[_i];
            var info = new feichuan.FeiChuanInfo();
            info.data = fc.layers[0].data;
            info.fc_type = fc.layers[0].fc_type;
            info.file_name = fc.layers[0].file_name;
            info.height = fc.layers[0].height;
            info.is_gen_zong = fc.layers[0].is_gen_zong;
            info.is_ji_guang = fc.layers[0].is_ji_guang;
            info.is_ju_zhen = fc.layers[0].is_ju_zhen;
            info.is_san_dan = fc.layers[0].is_san_dan;
            info.is_wei_bu = fc.layers[0].is_wei_bu;
            info.ti_ji = fc.layers[0].ti_ji;
            info.width = fc.layers[0].width;
            info.wu_qi_nan_du = fc.layers[0].wu_qi_nan_du;
            info.wu_qi_shu_liang = fc.layers[0].wu_qi_shu_liang;
            info.zhuang_jia_nan_du = fc.layers[0].zhuang_jia_nan_du;
            var size = fc.tiles.length;
            info.tiles = new Array(size);
            //图片
            for (var i = 0; i < size; i++) {
                info.tiles[i] = fc.tiles[i].image.split(".")[0];
            }
            FC_Console.addFcInfo(info);
        }
        this.testSen = TestScene.getInstance();
        this.stage.addChild(this.testSen);
        this.testSen.x = -scene.scene_anch_x;
        this.testSen.y = -scene.scene_anch_y;
        // let a: egret.Bitmap = new egret.Bitmap(RES.getRes("shop"));
        // a.x = 100;
        // a.y = 100;
        // this.stage.addChild(a);
    };
    return Main;
}(eui.UILayer));
__reflect(Main.prototype, "Main");
var FC_Console;
(function (FC_Console) {
    //按体积区分
    FC_Console.boss_list = new Array();
    FC_Console.da_list = new Array();
    FC_Console.zhong_list = new Array();
    FC_Console.xiao_list = new Array();
    FC_Console.wei_list = new Array();
    //所有飞船
    FC_Console.all_list = new Array();
    //按飞船形状 飞船类型 1.宽体 2.纵向 3.旋转 4.正面耐打 5.通用
    FC_Console.kuan_list = new Array();
    FC_Console.zong_list = new Array();
    FC_Console.xuan_list = new Array();
    FC_Console.nai_list = new Array();
    FC_Console.tong_list = new Array();
    //跟类型 与飞机名字 返回飞机信息
    function getInfoByName(type, name) {
        var list;
        //微型
        if (type == 1) {
            list = FC_Console.wei_list;
        }
        //小型
        if (type == 2) {
            list = FC_Console.xiao_list;
        }
        //中型
        if (type == 3) {
            list = FC_Console.zhong_list;
        }
        //大型
        if (type == 4) {
            list = FC_Console.da_list;
        }
        //boss级别
        if (type == 5) {
            list = FC_Console.boss_list;
        }
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var info = list_1[_i];
            if (info.file_name == name) {
                return info;
            }
        }
        return null;
    }
    FC_Console.getInfoByName = getInfoByName;
    function addFcInfo(info) {
        if (info.ti_ji == 5) {
            FC_Console.boss_list.push(info);
        }
        if (info.ti_ji == 4) {
            FC_Console.da_list.push(info);
        }
        if (info.ti_ji == 3) {
            FC_Console.zhong_list.push(info);
        }
        if (info.ti_ji == 2) {
            FC_Console.xiao_list.push(info);
        }
        if (info.ti_ji == 1) {
            FC_Console.wei_list.push(info);
        }
        if (info.fc_type == 1) {
            FC_Console.kuan_list.push(info);
        }
        if (info.fc_type == 2) {
            FC_Console.zong_list.push(info);
        }
        if (info.fc_type == 3) {
            FC_Console.xuan_list.push(info);
        }
        if (info.fc_type == 4) {
            FC_Console.nai_list.push(info);
        }
        if (info.fc_type == 5) {
            FC_Console.tong_list.push(info);
        }
        FC_Console.all_list.push(info);
    }
    FC_Console.addFcInfo = addFcInfo;
})(FC_Console || (FC_Console = {}));
var feichuan;
(function (feichuan) {
    var FeiChuanInfo = (function () {
        function FeiChuanInfo() {
        }
        // public getGW(): number {
        //     return parseInt(this.width / 2.5);
        // }
        //重置坐标
        FeiChuanInfo.prototype.reRandomPos = function () {
            this.random_cs_Pos();
            this.random_target();
        };
        //随机目标点
        FeiChuanInfo.prototype.random_target = function () {
            var x;
            var y;
            x = suiji.GetRandomNum(0, 30);
            y = suiji.GetRandomNum(0, 50);
            this.target_pos = egret.Point.create(x, y);
        };
        //随机出生点
        FeiChuanInfo.prototype.random_cs_Pos = function () {
            var fx = suiji.randomFangXiang();
            var x;
            var y;
            //上
            if (fx == 1) {
                x = suiji.GetRandomNum(-5, 35);
                y = suiji.GetRandomNum(-5, -1);
            }
            //下
            if (fx == 2) {
                x = suiji.GetRandomNum(-5, 35);
                y = suiji.GetRandomNum(51, 55);
            }
            //左
            if (fx == 3) {
                x = suiji.GetRandomNum(-5, -1);
                y = suiji.GetRandomNum(0, 50);
            }
            //右
            if (fx == 4) {
                x = suiji.GetRandomNum(31, 35);
                y = suiji.GetRandomNum(0, 50);
            }
            this.chu_sheng_pos = egret.Point.create(x, y);
        };
        return FeiChuanInfo;
    }());
    feichuan.FeiChuanInfo = FeiChuanInfo;
    __reflect(FeiChuanInfo.prototype, "feichuan.FeiChuanInfo");
})(feichuan || (feichuan = {}));
var feichuan;
(function (feichuan) {
    var JuZhenJidui = (function (_super) {
        __extends(JuZhenJidui, _super);
        function JuZhenJidui(battle_scends, info, cs_pos, nan_du) {
            var _this = _super.call(this, battle_scends, cs_pos, GameConstant.ZHEN_YING.DI_JUN, info.ti_ji, nan_du) || this;
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
var feichuan;
(function (feichuan) {
    var XiaoBing = (function (_super) {
        __extends(XiaoBing, _super);
        function XiaoBing(battle_scends, info) {
            var _this = _super.call(this, battle_scends, info.chu_sheng_pos, GameConstant.ZHEN_YING.DI_JUN, info.ti_ji, 1) || this;
            _this.fc_type = feichuan.FC_TYPE.DIJI;
            _this.initJson(info);
            _this.initTestFchuan();
            _this.toPoint = Tools.gridTop2(info.target_pos.x, info.target_pos.y);
            _this.ztj = new fjztj.XBZhuangtaiji(_this);
            return _this;
        }
        //做一个 飞船
        XiaoBing.prototype.initTestFchuan = function () {
            this.angularDamping = 0;
            this.mass = this.W * this.H * 5;
            this.damping = 0;
        };
        return XiaoBing;
    }(feichuan.FeiChuanBase));
    feichuan.XiaoBing = XiaoBing;
    __reflect(XiaoBing.prototype, "feichuan.XiaoBing");
})(feichuan || (feichuan = {}));
var mokuai;
(function (mokuai) {
    //普通装甲
    mokuai.lv_1 = { "r": 236, "g": 255, "b": 249 };
    mokuai.lv_2 = { "r": 168, "g": 174, "b": 159 };
    mokuai.lv_3 = { "r": 129, "g": 146, "b": 179 };
    mokuai.lv_4 = { "r": 14, "g": 84, "b": 158 };
    mokuai.lv_5 = { "r": 31, "g": 100, "b": 99 };
    mokuai.lv_6 = { "r": 32, "g": 89, "b": 68 };
    var lvs = [null, mokuai.lv_1, mokuai.lv_2, mokuai.lv_2, mokuai.lv_3, mokuai.lv_3, mokuai.lv_4, mokuai.lv_4, mokuai.lv_5, mokuai.lv_5, mokuai.lv_6, mokuai.lv_6];
    //残骸
    mokuai.lv_1_ch = { "r": 233, "g": 104, "b": 6 };
    mokuai.lv_2_ch = { "r": 235, "g": 59, "b": 7 };
    mokuai.lv_3_ch = { "r": 174, "g": 27, "b": 4 };
    var lvs_ch = [null, mokuai.lv_1_ch, mokuai.lv_2_ch, mokuai.lv_3_ch];
    //武器
    mokuai.wq_1 = { "r": 33, "g": 255, "b": 105 };
    mokuai.wq_2 = { "r": 79, "g": 157, "b": 255 };
    mokuai.wq_3 = { "r": 33, "g": 255, "b": 105 };
    mokuai.wq_4 = { "r": 101, "g": 255, "b": 173 };
    mokuai.wq_5 = { "r": 130, "g": 35, "b": 204 };
    var wqs = [null, mokuai.wq_1, mokuai.wq_2, mokuai.wq_3, mokuai.wq_4, mokuai.wq_5];
    //返回普通装甲渐变色
    function getRGB_PT(pi, level) {
        var base = lvs[level];
        var r = Math.floor(Math.abs(mokuai.lv_1.r - base.r) * pi) + base.r;
        var g = Math.floor(Math.abs(mokuai.lv_1.g - base.g) * pi) + base.g;
        var b = Math.floor(Math.abs(mokuai.lv_1.b - base.b) * pi) + base.b;
        return { "r": r, "g": g, "b": b };
    }
    mokuai.getRGB_PT = getRGB_PT;
    //返回残骸装甲渐变色
    function getRGB_CH(pi, level) {
        var base = lvs_ch[level];
        var r = Math.floor(Math.abs(mokuai.lv_1_ch.r - base.r) * pi) + base.r;
        var g = Math.floor(Math.abs(mokuai.lv_1_ch.g - base.g) * pi) + base.g;
        var b = Math.floor(Math.abs(mokuai.lv_1_ch.b - base.b) * pi) + base.b;
        return { "r": r, "g": g, "b": b };
    }
    mokuai.getRGB_CH = getRGB_CH;
    //返回武器渐变色
    function getRGB_WQ(pi, level) {
        var base = wqs[level];
        var r = Math.floor(Math.abs(mokuai.lv_1_ch.r - base.r) * pi) + base.r;
        var g = Math.floor(Math.abs(mokuai.lv_1_ch.g - base.g) * pi) + base.g;
        var b = Math.floor(Math.abs(mokuai.lv_1_ch.b - base.b) * pi) + base.b;
        return { "r": r, "g": g, "b": b };
    }
    mokuai.getRGB_WQ = getRGB_WQ;
})(mokuai || (mokuai = {}));
var DebugPlatform = (function () {
    function DebugPlatform() {
    }
    DebugPlatform.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { nickName: "username" }];
            });
        });
    };
    DebugPlatform.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return DebugPlatform;
}());
__reflect(DebugPlatform.prototype, "DebugPlatform", ["Platform"]);
if (!window.platform) {
    window.platform = new DebugPlatform();
}
var zhuangjia;
(function (zhuangjia) {
    var PuTongZhuangJia = (function (_super) {
        __extends(PuTongZhuangJia, _super);
        function PuTongZhuangJia(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, moKuaiPost, shapeType, bitName, fc) || this;
            _this.markNumber = 3;
            _this.hp = 0; //装甲血量
            return _this;
        }
        PuTongZhuangJia.prototype.Defense = function () {
            this.markNumber--;
            if (this.markNumber <= 0) {
                return false;
            }
            return true;
        };
        return PuTongZhuangJia;
    }(zhuangjia.ZhuangJiaBase));
    zhuangjia.PuTongZhuangJia = PuTongZhuangJia;
    __reflect(PuTongZhuangJia.prototype, "zhuangjia.PuTongZhuangJia");
})(zhuangjia || (zhuangjia = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var ThemeAdapter = (function () {
    function ThemeAdapter() {
    }
    /**
     * 解析主题
     * @param url 待解析的主题url
     * @param onSuccess 解析完成回调函数，示例：compFunc(e:egret.Event):void;
     * @param onError 解析失败回调函数，示例：errorFunc():void;
     * @param thisObject 回调的this引用
     */
    ThemeAdapter.prototype.getTheme = function (url, onSuccess, onError, thisObject) {
        function onResGet(e) {
            onSuccess.call(thisObject, e);
        }
        function onResError(e) {
            if (e.resItem.url == url) {
                RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
                onError.call(thisObject);
            }
        }
        if (typeof generateEUI !== 'undefined') {
            egret.callLater(function () {
                onSuccess.call(thisObject, generateEUI);
            }, this);
        }
        else {
            RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, onResError, null);
            RES.getResByUrl(url, onResGet, this, RES.ResourceItem.TYPE_TEXT);
        }
    };
    return ThemeAdapter;
}());
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var guanqia;
(function (guanqia) {
    var FC_TYPE;
    (function (FC_TYPE) {
        FC_TYPE[FC_TYPE["KUAN_TI"] = 0] = "KUAN_TI";
        FC_TYPE[FC_TYPE["XUAN_ZHUAN"] = 1] = "XUAN_ZHUAN";
        FC_TYPE[FC_TYPE["YIN_SHEN"] = 2] = "YIN_SHEN";
        FC_TYPE[FC_TYPE["NAI_DA"] = 3] = "NAI_DA";
        FC_TYPE[FC_TYPE["ZONG_XING"] = 4] = "ZONG_XING";
        FC_TYPE[FC_TYPE["CHUAN_DUI"] = 5] = "CHUAN_DUI";
        FC_TYPE[FC_TYPE["TONG_YONG"] = 6] = "TONG_YONG";
    })(FC_TYPE = guanqia.FC_TYPE || (guanqia.FC_TYPE = {}));
    var BoCiGuanLi = (function () {
        function BoCiGuanLi(scene) {
            //当前波次
            this.bociNum = 0;
            //是否进行下一个关卡
            this.is_next = true;
            this.scene = scene;
            this.bc_now = new boci.BoCi(this.scene);
        }
        //下一波
        BoCiGuanLi.prototype.nextBo = function () {
            this.is_next = false;
            this.bociNum++;
            //1 
            // this.bc_now = new boci.BoCi(this.scene);
            this.bc_now.next();
        };
        BoCiGuanLi.prototype.addFc = function (scene) {
            this.bc_now.jz.addFc(scene);
        };
        //随机相关
        BoCiGuanLi.prototype.upSomeThing = function () {
            // egret.log("IS_NNNNNNN:" + this.scene.dijis.length);
            if (this.scene.dijis.length <= 0) {
                this.is_next = true;
            }
            if (this.bc_now.jz.is_next) {
                this.is_next = true;
            }
        };
        return BoCiGuanLi;
    }());
    guanqia.BoCiGuanLi = BoCiGuanLi;
    __reflect(BoCiGuanLi.prototype, "guanqia.BoCiGuanLi");
})(guanqia || (guanqia = {}));
var Guanka = (function () {
    function Guanka(scene) {
        this.scene = scene;
        this.init();
    }
    Guanka.prototype.init = function () {
        this.bos = [
            [
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 15), sName: "1_1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 15), sName: "1_2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_9_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_9_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_1_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_2_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_3_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_4_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_5_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_6_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_7_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_8_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_9_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_1_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_2_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_3_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_4_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_5_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_6_json" }],
                // [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_7_json" }],
                [{ nowP: egret.Point.create(15, -2), toP: egret.Point.create(15, 10), sName: "10_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "11_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "12_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "13_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "14_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "6_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "7_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "8_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_m2_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_s_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_m_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "9_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_m_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_m_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_s_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_s_json" }],
            ],
            //第一波
            [
                //第一回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_m2_json" }],
                //第二回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "1_m3_json" }],
                //第三回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_m2_json" }],
            ],
            //第二波
            [
                //第一回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "2_m3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_m2_json" }],
            ],
            //第三波
            [
                //第一回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "3_m3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_m2_json" }],
            ],
            //第四波
            [
                //第一回合
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "4_m3_json" }],
                [{ nowP: egret.Point.create(15, -1), toP: egret.Point.create(15, 10), sName: "5_m2_json" }],
            ]
        ];
    };
    return Guanka;
}());
__reflect(Guanka.prototype, "Guanka");
var guanqia;
(function (guanqia) {
    //随机句子
    function juzi_suiji() {
        var num = suiji.GetRandomNum(0, 10);
        //上中模式
        if (num == juzi.JU_ZI_TYPE.SZ) {
        }
        return null;
    }
    guanqia.juzi_suiji = juzi_suiji;
    //随机句子
    function getJz() {
        var jz = new juzi.JuZiGuanLi(1);
        var size = FC_Console.all_list.length;
        var one = FC_Console.all_list[suiji.GetRandomNum(0, size)];
        return jz;
    }
    guanqia.getJz = getJz;
})(guanqia || (guanqia = {}));
var boci;
(function (boci) {
    //波次的 句子
    // 1.上中结构
    // 2.中心结构
    // 3.上下结构
    // 4.左右结构
    // 5螺旋交替
    // 6四边结构
    // 7单机制霸
    // 8双机巡逻
    // 9三兄弟
    // 10四个二五仔
    // 11.四角结构
    var BO_CI_TYPE;
    (function (BO_CI_TYPE) {
        BO_CI_TYPE[BO_CI_TYPE["SZ"] = 0] = "SZ";
    })(BO_CI_TYPE = boci.BO_CI_TYPE || (boci.BO_CI_TYPE = {}));
    var BoCi = (function () {
        function BoCi(scene) {
            //当前波数
            this.now_bo = 0;
            this.numberList = new Array();
            this.scene = scene;
            this.init();
        }
        BoCi.prototype.init = function () {
            for (var i = 1; i <= 43; i++) {
                this.numberList.push(i);
            }
        };
        //下一波
        BoCi.prototype.next = function () {
            var max = this.numberList.length;
            var min = 1;
            var numb = Tools.GetRandomNum(min, max);
            // numb = 51
            this.jz = this.getJZ(numb);
            this.jz.initFcInfo();
            //移除指定节点
            var index = this.numberList.indexOf(numb, 0);
            if (index > -1) {
                this.numberList.splice(index, 1);
            }
            this.now_bo++;
            this.scene.hhBar.setNumber(this.now_bo);
            this.scene.zzBar.setNumber(this.now_bo);
            this.scene.timeBar.setMark(egret.getTimer() + 90 * 1000);
            this.scene.setJiaSu();
        };
        BoCi.prototype.getJZ = function (numb) {
            if (numb == 1) {
                return new juzi.SanXuanZhanDaoPianJZ(1, this.scene);
            }
            if (numb == 2) {
                return new juzi.ChaoDaWuJZ(1, this.scene);
            }
            if (numb == 3) {
                return new juzi.SiJiRaoQuanXuanZhuanJZ(1, this.scene);
            }
            if (numb == 4) {
                return new juzi.ChaoDaSanXuanZhanJZ(1, this.scene);
            }
            if (numb == 5) {
                return new juzi.PuTongDanXuanZhanDaGeJZ(1, this.scene);
            }
            if (numb == 6) {
                return new juzi.ShiZiXuanZhuanLianXuSheJiJZ(1, this.scene);
            }
            if (numb == 7) {
                return new juzi.SanDaGeJiGuangXuanZhuanJZ(1, this.scene);
            }
            if (numb == 8) {
                return new juzi.ShiZiXuanZhanSanDanJZ(1, this.scene);
            }
            if (numb == 9) {
                return new juzi.SanSanDanDingWeiJZ(1, this.scene);
            }
            if (numb == 10) {
                return new juzi.DanJiSanDanGenZongJZ(1, this.scene);
            }
            if (numb == 11) {
                return new juzi.JuZhanZiDanJiaXuanZhanJZ(1, this.scene);
            }
            if (numb == 12) {
                return new juzi.SanMaZaiJZ(1, this.scene);
            }
            if (numb == 13) {
                return new juzi.ChaoDaKuanTiJZ(1, this.scene);
            }
            if (numb == 14) {
                return new juzi.ShuangJiRaoLuoXuanFeiJZ(1, this.scene);
            }
            if (numb == 15) {
                return new juzi.ShuangDuiJiaoJiaXuanZhuanJZ(1, this.scene);
            }
            if (numb == 16) {
                return new juzi.SanBianYiXuanZhuanJZ(1, this.scene);
            }
            if (numb == 17) {
                return new juzi.ChaoDaLuoXuanJZ(1, this.scene);
            }
            if (numb == 18) {
                return new juzi.ShuangJiJieZouRaoFeiJZ(1, this.scene);
            }
            if (numb == 19) {
                return new juzi.BoSiMaoJiaXuanZhuanJZ(1, this.scene);
            }
            if (numb == 20) {
                return new juzi.DanJiSanDanChangTiaoJZ(1, this.scene);
            }
            if (numb == 21) {
                return new juzi.DaWuJZ(1, this.scene);
            }
            if (numb == 22) {
                return new juzi.SiXiongDiShuangGenZongJZ(1, this.scene);
            }
            if (numb == 23) {
                return new juzi.DaSiJZ(1, this.scene);
            }
            if (numb == 24) {
                return new juzi.DanJiRaoFeiJZ(1, this.scene);
            }
            if (numb == 25) {
                return new juzi.ShuangXuanZHuanFeiDanJZ(1, this.scene);
            }
            if (numb == 26) {
                return new juzi.ShuangJiDuiJiaoXianXuanZhuanJZ(1, this.scene);
            }
            if (numb == 27) {
                return new juzi.ShuangJiShangXiaJZ(1, this.scene);
            }
            if (numb == 28) {
                return new juzi.DaSan(1, this.scene);
            }
            if (numb == 29) {
                return new juzi.ShuangKuanTiJiaXuanZhuanJUZI(1, this.scene);
            }
            if (numb == 30) {
                return new juzi.ShuangQianHouDanXuanZhuanJUZI(1, this.scene);
            }
            if (numb == 31) {
                return new juzi.ShuangJiXuanTingSheJiJUZI(1, this.scene);
            }
            if (numb == 32) {
                return new juzi.SanDanJiDuiXuanZhuanJZ(1, this.scene);
            }
            if (numb == 33) {
                return new juzi.DaErJZ(1, this.scene);
            }
            if (numb == 34) {
                return new juzi.SiXiongDiJZ(1, this.scene);
            }
            if (numb == 35) {
                return new juzi.Xiao62XunLuoGonJiJZ(1, this.scene);
            }
            if (numb == 36) {
                return new juzi.DaYiXiaoDiJZ(1, this.scene);
            }
            if (numb == 37) {
                return new juzi.DaYiJZ(1, this.scene);
            }
            if (numb == 38) {
                return new juzi.KaoJinLiKaiJz(1, this.scene);
            }
            if (numb == 39) {
                return new juzi.YiPaiSheJiJZ(1, this.scene);
            }
            if (numb == 40) {
                return new juzi.DanJiGenZongDanJZ(1, this.scene);
            }
            if (numb == 41) {
                return new juzi.LiangXiongDiBuKaiQiangJZ(1, this.scene);
            }
            if (numb == 42) {
                return new juzi.SanXiongDiManDongJZ(1, this.scene);
            }
            if (numb == 43) {
                return new juzi.ShuangJiJiaoChaXuanZHuan(1, this.scene);
            }
            if (numb == 51) {
                return new juzi.Test1(1, this.scene);
            }
            return null;
        };
        //初始化句子
        BoCi.prototype.initJuzi = function () {
            //------------test---------------------
            // this.jz = new juzi.Test1(1, this.scene);
            //-------------------------------------
            // this.jz = new juzi.SanXuanZhanDaoPianJZ(1, this.scene);//三旋转刀片
            // this.jz = new juzi.ChaoDaWuJZ(1, this.scene);//超大五
            // this.jz = new juzi.SiJiRaoQuanXuanZhuanJZ(1, this.scene);//四机绕旋转
            //40
            // this.jz = new juzi.ChaoDaSanXuanZhanJZ(1,this.scene);//超大三旋转
            // this.jz = new juzi.PuTongDanXuanZhanDaGeJZ(1, this.scene);//普通子弹旋转
            // this.jz = new juzi.ShiZiXuanZhuanLianXuSheJiJZ(1, this.scene);//十字旋转 连续设计
            // this.jz = new juzi.SanDaGeJiGuangXuanZhuanJZ(1, this.scene);//三大哥  激光 旋转
            // this.jz = new juzi.ShiZiXuanZhanSanDanJZ(1, this.scene);//十字旋转散弹
            // this.jz = new juzi.SanSanDanDingWeiJZ(1, this.scene);//三散弹定位
            // this.jz = new juzi.DanJiSanDanGenZongJZ(1, this.scene);//单机散弹 跟踪
            // this.jz = new juzi.JuZhanZiDanJiaXuanZhanJZ(1, this.scene);//矩阵子弹 旋转
            // this.jz = new juzi.SanMaZaiJZ(1, this.scene);//三马仔
            // this.jz = new juzi.ChaoDaKuanTiJZ(1, this.scene);//超大宽体
            //30
            // this.jz = new juzi.ShuangJiRaoLuoXuanFeiJZ(1, this.scene);//双机绕螺旋飞
            // this.jz = new juzi.ShuangDuiJiaoJiaXuanZhuanJZ(1, this.scene);//双对角 旋转
            // this.jz = new juzi.SanBianYiXuanZhuanJZ(1, this.scene);// 三变异 旋转
            // this.jz = new juzi.ChaoDaLuoXuanJZ(1, this.scene);//超大一螺旋
            // this.jz = new juzi.ShuangJiJieZouRaoFeiJZ(1, this.scene);//双击节奏绕飞 
            // this.jz = new juzi.BoSiMaoJiaXuanZhuanJZ(1, this.scene);//波斯猫 加 旋转
            // this.jz = new juzi.DanJiSanDanChangTiaoJZ(1, this.scene)//散弹两侧长条
            // this.jz = new juzi.DaWuJZ(1, this.scene);//大五
            // this.jz = new juzi.SiXiongDiShuangGenZongJZ(1, this.scene);//四兄弟 双跟踪
            // this.jz = new juzi.DaSiJZ(1, this.scene); //大四
            //20
            // this.jz = new juzi.DanJiRaoFeiJZ(1, this.scene);//单机机队绕飞
            // this.jz = new juzi.ShuangXuanZHuanFeiDanJZ(1, this.scene);// 双旋转 四射
            // this.jz = new juzi.ShuangJiDuiJiaoXianXuanZhuanJZ(1, this.scene);//双机对角线 加旋转
            // this.jz = new juzi.ShuangJiShangXiaJZ(1, this.scene);//双机上下
            // this.jz = new juzi.DaSan(1, this.scene);//大 3 武器多
            // this.jz = new juzi.ShuangKuanTiJiaXuanZhuanJUZI(1, this.scene);//双宽体 旋转
            // this.jz = new juzi.ShuangQianHouDanXuanZhuanJUZI(1, this.scene);//双前后加旋转
            // this.jz = new juzi.ShuangJiXuanTingSheJiJUZI(1, this.scene);//双机悬停散弹
            // this.jz = new juzi.SanDanJiDuiXuanZhuanJZ(1, this.scene);//散弹机队螺旋
            // this.jz = new juzi.DaErJZ(1, this.scene);//大二 散弹
            //10
            // this.jz = new juzi.SiXiongDiJZ(1, this.scene);//四兄弟
            // this.jz = new juzi.Xiao62XunLuoGonJiJZ(1, this.scene);//顶部 加 机队
            // this.jz = new juzi.DaYiXiaoDiJZ(1, this.scene);//大一小弟
            // this.jz = new juzi.DaYiJZ(1, this.scene);//大一 单机
            // this.jz = new juzi.KaoJinLiKaiJz(1, this.scene);//靠近离开机队
            // this.jz = new juzi.YiPaiSheJiJZ(1, this.scene); //一排射击
            // this.jz = new juzi.DanJiGenZongDanJZ(1, this.scene);//单机（章鱼）跟踪弹
            // this.jz = new juzi.LiangXiongDiBuKaiQiangJZ(1, this.scene);//两兄弟行走不开枪
            // this.jz = new juzi.SanXiongDiManDongJZ(1, this.scene);//三兄弟
            // this.jz = new juzi.ShuangJiJiaoChaXuanZHuan(1, this.scene);//双机交叉 旋转
            this.jz.initFcInfo();
        };
        BoCi.prototype.randonGuzi = function () {
        };
        return BoCi;
    }());
    boci.BoCi = BoCi;
    __reflect(BoCi.prototype, "boci.BoCi");
})(boci || (boci = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var AssetAdapter = (function () {
    function AssetAdapter() {
    }
    /**
     * @language zh_CN
     * 解析素材
     * @param source 待解析的新素材标识符
     * @param compFunc 解析完成回调函数，示例：callBack(content:any,source:string):void;
     * @param thisObject callBack的 this 引用
     */
    AssetAdapter.prototype.getAsset = function (source, compFunc, thisObject) {
        function onGetRes(data) {
            compFunc.call(thisObject, data, source);
        }
        if (RES.hasRes(source)) {
            var data = RES.getRes(source);
            if (data) {
                onGetRes(data);
            }
            else {
                RES.getResAsync(source, onGetRes, this);
            }
        }
        else {
            RES.getResByUrl(source, onGetRes, this, RES.ResourceItem.TYPE_IMAGE);
        }
    };
    return AssetAdapter;
}());
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var JZ_Console;
(function (JZ_Console) {
    JZ_Console.juzi_info = [function () { return new juzi.LuanZouJuzi(1); }, function () { return new juzi.FangZhenJuzi(1); }];
})(JZ_Console || (JZ_Console = {}));
var juzi;
(function (juzi) {
    //乱走句子
    var LuanZouJuzi = (function (_super) {
        __extends(LuanZouJuzi, _super);
        function LuanZouJuzi(nan_du) {
            return _super.call(this, nan_du) || this;
        }
        return LuanZouJuzi;
    }(juzi.JuZiGuanLi));
    juzi.LuanZouJuzi = LuanZouJuzi;
    __reflect(LuanZouJuzi.prototype, "juzi.LuanZouJuzi");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    //上中结构句子
    var ShangZhongJuzi = (function () {
        function ShangZhongJuzi() {
        }
        //初始化随机的飞机
        ShangZhongJuzi.prototype.initFC = function () {
        };
        return ShangZhongJuzi;
    }());
    juzi.ShangZhongJuzi = ShangZhongJuzi;
    __reflect(ShangZhongJuzi.prototype, "juzi.ShangZhongJuzi");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    //方阵队列机队
    var FangZhenJuzi = (function (_super) {
        __extends(FangZhenJuzi, _super);
        function FangZhenJuzi(nan_du) {
            var _this = _super.call(this, nan_du) || this;
            //0是占位符 机队 横向 和纵向的数量
            _this.kuan = [0, 4, 5, 6, 7, 7];
            _this.hou = [0, 2, 3, 4, 5, 6];
            return _this;
        }
        FangZhenJuzi.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(1, "xiao_3");
            this.fc_w = this.fc_info.width;
            this.fc_h = this.fc_info.height;
            this.jg_w = Math.floor(30 / this.kuan[this.nan_du]);
            this.zx_w = Math.round(this.jg_w / 3);
        };
        //添加飞机到 战场
        FangZhenJuzi.prototype.addFc = function (scene) {
            var w = this.kuan[this.nan_du];
            var h = this.hou[this.nan_du];
            for (var x = 0; x < w; x++) {
                for (var y = 0; y < h; y++) {
                    //1 创建飞船
                    var fc = new feichuan.JuZhenJidui(scene, this.fc_info, egret.Point.create(x * this.jg_w + this.zx_w, (-this.fc_info.height - 2) * y), this.nan_du);
                    //2 创建状态机
                    var ztj_info = new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(x * this.jg_w + this.zx_w, (this.fc_info.height + 2) * (h - y)), zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 1, 0, null, 2, -1, "");
                    var ztj = new fjztj.QuYuZTJ(fc);
                    ztj.is_loop = false;
                    ztj.addInfo(ztj_info);
                    ztj.nextStep(0);
                    fc.ztj = ztj;
                    //3 添加到列表
                    scene.dijis.push(fc);
                }
            }
        };
        return FangZhenJuzi;
    }(juzi.JuZiGuanLi));
    juzi.FangZhenJuzi = FangZhenJuzi;
    __reflect(FangZhenJuzi.prototype, "juzi.FangZhenJuzi");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var Test1 = (function (_super) {
        __extends(Test1, _super);
        function Test1(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        Test1.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_23");
            this.init1ZTJ();
        };
        Test1.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, 5), 9);
            this.fc1.angle = 70 / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 5, 2)], 2, -1, "13:15"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        Test1.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return Test1;
    }(juzi.JuZiGuanLi));
    juzi.Test1 = Test1;
    __reflect(Test1.prototype, "juzi.Test1");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ChaoDaKuanTiJZ = (function (_super) {
        __extends(ChaoDaKuanTiJZ, _super);
        function ChaoDaKuanTiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ChaoDaKuanTiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(5, "chaoda_2");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_22");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ChaoDaKuanTiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 0.5, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 2), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 2), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ChaoDaKuanTiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-5, 15), this.nan_du);
            this.fc2.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 15), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 2, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ChaoDaKuanTiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ChaoDaKuanTiJZ;
    }(juzi.JuZiGuanLi));
    juzi.ChaoDaKuanTiJZ = ChaoDaKuanTiJZ;
    __reflect(ChaoDaKuanTiJZ.prototype, "juzi.ChaoDaKuanTiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ChaoDaLuoXuanJZ = (function (_super) {
        __extends(ChaoDaLuoXuanJZ, _super);
        function ChaoDaLuoXuanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ChaoDaLuoXuanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(5, "chaoda_1");
            this.init1ZTJ();
        };
        ChaoDaLuoXuanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 0.5, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 0.5, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 15), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 2, 0.5, null, 2, -1, "13:15"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        ChaoDaLuoXuanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return ChaoDaLuoXuanJZ;
    }(juzi.JuZiGuanLi));
    juzi.ChaoDaLuoXuanJZ = ChaoDaLuoXuanJZ;
    __reflect(ChaoDaLuoXuanJZ.prototype, "juzi.ChaoDaLuoXuanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ChaoDaWuJZ = (function (_super) {
        __extends(ChaoDaWuJZ, _super);
        function ChaoDaWuJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ChaoDaWuJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(5, "chaoda_4");
            this.init1ZTJ();
        };
        ChaoDaWuJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(10, -15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 5, 0.5, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 5, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 11), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 19), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 24), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 28), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        ChaoDaWuJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return ChaoDaWuJZ;
    }(juzi.JuZiGuanLi));
    juzi.ChaoDaWuJZ = ChaoDaWuJZ;
    __reflect(ChaoDaWuJZ.prototype, "juzi.ChaoDaWuJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var DaErJZ = (function (_super) {
        __extends(DaErJZ, _super);
        function DaErJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DaErJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(4, "da_2");
            this.init1ZTJ();
        };
        DaErJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5, 3), new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 103, 1, 1)], 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 52, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 1003, 12, 1),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 503, 12, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DaErJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DaErJZ;
    }(juzi.JuZiGuanLi));
    juzi.DaErJZ = DaErJZ;
    __reflect(DaErJZ.prototype, "juzi.DaErJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var DanJiGenZongDanJZ = (function (_super) {
        __extends(DanJiGenZongDanJZ, _super);
        function DanJiGenZongDanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DanJiGenZongDanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_4");
            this.init1ZTJ();
        };
        DanJiGenZongDanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(17, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(16, 4), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 2), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 3), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 3), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DanJiGenZongDanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DanJiGenZongDanJZ;
    }(juzi.JuZiGuanLi));
    juzi.DanJiGenZongDanJZ = DanJiGenZongDanJZ;
    __reflect(DanJiGenZongDanJZ.prototype, "juzi.DanJiGenZongDanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var DanJiSanDanChangTiaoJZ = (function (_super) {
        __extends(DanJiSanDanChangTiaoJZ, _super);
        function DanJiSanDanChangTiaoJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DanJiSanDanChangTiaoJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_17");
            this.init1ZTJ();
        };
        DanJiSanDanChangTiaoJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(18, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DanJiSanDanChangTiaoJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DanJiSanDanChangTiaoJZ;
    }(juzi.JuZiGuanLi));
    juzi.DanJiSanDanChangTiaoJZ = DanJiSanDanChangTiaoJZ;
    __reflect(DanJiSanDanChangTiaoJZ.prototype, "juzi.DanJiSanDanChangTiaoJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var DanJiSanDanGenZongJZ = (function (_super) {
        __extends(DanJiSanDanGenZongJZ, _super);
        function DanJiSanDanGenZongJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DanJiSanDanGenZongJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_15");
            this.init1ZTJ();
        };
        DanJiSanDanGenZongJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(14, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 4), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 3, 3, 3),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 3, 36, 3),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 3, 37, 3),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 3, 38, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DanJiSanDanGenZongJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DanJiSanDanGenZongJZ;
    }(juzi.JuZiGuanLi));
    juzi.DanJiSanDanGenZongJZ = DanJiSanDanGenZongJZ;
    __reflect(DanJiSanDanGenZongJZ.prototype, "juzi.DanJiSanDanGenZongJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var DaSan = (function (_super) {
        __extends(DaSan, _super);
        function DaSan(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DaSan.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(4, "da_3");
            this.init1ZTJ();
        };
        DaSan.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-10, -10), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 2, 500, 105, 1, 3)
            ], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(4, 800, 1, 500, 2, 12, 3),
                new zhuangtaiji.WuQiAiInfo(4, 800, 1, 500, 1002, 13, 3)
            ], 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 2, 500, 105, 1, 3)
            ], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(4, 800, 1, 500, 2, 12, 3),
                new zhuangtaiji.WuQiAiInfo(4, 800, 1, 500, 1002, 13, 3)
            ], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DaSan.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DaSan;
    }(juzi.JuZiGuanLi));
    juzi.DaSan = DaSan;
    __reflect(DaSan.prototype, "juzi.DaSan");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var DaSiJZ = (function (_super) {
        __extends(DaSiJZ, _super);
        function DaSiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DaSiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(4, "da_4");
            this.init1ZTJ();
        };
        DaSiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            // this.fc1.angle = (45 - 360) / 180 * Math.PI;
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 1003, 16, 1),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 1503, 17, 1),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 2003, 18, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, -0.5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 1003, 16, 1),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 1503, 17, 1),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 2003, 18, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DaSiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DaSiJZ;
    }(juzi.JuZiGuanLi));
    juzi.DaSiJZ = DaSiJZ;
    __reflect(DaSiJZ.prototype, "juzi.DaSiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var DaWuJZ = (function (_super) {
        __extends(DaWuJZ, _super);
        function DaWuJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DaWuJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(4, "da_5");
            this.init1ZTJ();
        };
        DaWuJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(10, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 5, 3),
                new zhuangtaiji.WuQiAiInfo(4, 1000, 1, 100, 1, 1, 1),
                new zhuangtaiji.WuQiAiInfo(1, 1000, 1, 100, 1001, 2, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 5, 3),
                new zhuangtaiji.WuQiAiInfo(4, 1000, 1, 100, 1, 1, 1),
                new zhuangtaiji.WuQiAiInfo(1, 1000, 1, 100, 1001, 2, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DaWuJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DaWuJZ;
    }(juzi.JuZiGuanLi));
    juzi.DaWuJZ = DaWuJZ;
    __reflect(DaWuJZ.prototype, "juzi.DaWuJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var DaYiJZ = (function (_super) {
        __extends(DaYiJZ, _super);
        function DaYiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DaYiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(4, "da_1");
            this.init1ZTJ();
        };
        DaYiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(13, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 4), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 2, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "32:52"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, -2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.STOP_SHOOT_NOW, 8, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DaYiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DaYiJZ;
    }(juzi.JuZiGuanLi));
    juzi.DaYiJZ = DaYiJZ;
    __reflect(DaYiJZ.prototype, "juzi.DaYiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var DaYiXiaoDiJZ = (function (_super) {
        __extends(DaYiXiaoDiJZ, _super);
        function DaYiXiaoDiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DaYiXiaoDiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_5");
            this.init1ZTJ();
        };
        DaYiXiaoDiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(13, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, -1), zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.STOP_SHOOT_NOW, 3, 1, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, -1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NO_THING, 8, 1, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, -1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        DaYiXiaoDiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return DaYiXiaoDiJZ;
    }(juzi.JuZiGuanLi));
    juzi.DaYiXiaoDiJZ = DaYiXiaoDiJZ;
    __reflect(DaYiXiaoDiJZ.prototype, "juzi.DaYiXiaoDiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var LiangXiongDiBuKaiQiangJZ = (function (_super) {
        __extends(LiangXiongDiBuKaiQiangJZ, _super);
        function LiangXiongDiBuKaiQiangJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        LiangXiongDiBuKaiQiangJZ.prototype.initFcInfo = function () {
            this.fc_info1 = FC_Console.getInfoByName(1, "xiao_2");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_5");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        LiangXiongDiBuKaiQiangJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info1, egret.Point.create(-5, 45), this.nan_du);
            this.fc1.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(0, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(26, 6), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(26, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        LiangXiongDiBuKaiQiangJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(32, 8), this.nan_du);
            this.fc2.angle = -(90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(27, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2", true));
            //1
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 2, -1, "13:15"));
            //2
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(26, 38), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 2, -1, "32:52"));
            //3
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            //4
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(33, -2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, -2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        LiangXiongDiBuKaiQiangJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return LiangXiongDiBuKaiQiangJZ;
    }(juzi.JuZiGuanLi));
    juzi.LiangXiongDiBuKaiQiangJZ = LiangXiongDiBuKaiQiangJZ;
    __reflect(LiangXiongDiBuKaiQiangJZ.prototype, "juzi.LiangXiongDiBuKaiQiangJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var SanBianYiXuanZhuanJZ = (function (_super) {
        __extends(SanBianYiXuanZhuanJZ, _super);
        function SanBianYiXuanZhuanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SanBianYiXuanZhuanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(4, "da_6");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_19");
            this.fc_info3 = FC_Console.getInfoByName(2, "xiao_20");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        SanBianYiXuanZhuanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(17, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 1),
                new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 16),
                new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 17),
                new zhuangtaiji.WuQiAiInfo(100, 30000, 1, 10000, 1, 18)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SanBianYiXuanZhuanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(8, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 1),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 16),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 17),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 18)], 2, -1, "3:8"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SanBianYiXuanZhuanJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info3, egret.Point.create(32, 30), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(35, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 8, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 1),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 16),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 17),
                new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 1000, 1, 18)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        SanBianYiXuanZhuanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return SanBianYiXuanZhuanJZ;
    }(juzi.JuZiGuanLi));
    juzi.SanBianYiXuanZhuanJZ = SanBianYiXuanZhuanJZ;
    __reflect(SanBianYiXuanZhuanJZ.prototype, "juzi.SanBianYiXuanZhuanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var SanMaZaiJZ = (function (_super) {
        __extends(SanMaZaiJZ, _super);
        function SanMaZaiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SanMaZaiJZ.prototype.initFcInfo = function () {
            this.fc_info1 = FC_Console.getInfoByName(2, "xiao_23");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_24");
            this.fc_info3 = FC_Console.getInfoByName(2, "xiao_25");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        SanMaZaiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info1, egret.Point.create(17, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理1"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 2)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 2)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SanMaZaiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-2, 15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SanMaZaiJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info3, egret.Point.create(32, 30), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 5)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 5)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        SanMaZaiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return SanMaZaiJZ;
    }(juzi.JuZiGuanLi));
    juzi.SanMaZaiJZ = SanMaZaiJZ;
    __reflect(SanMaZaiJZ.prototype, "juzi.SanMaZaiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var SanSanDanDingWeiJZ = (function (_super) {
        __extends(SanSanDanDingWeiJZ, _super);
        function SanSanDanDingWeiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SanSanDanDingWeiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_25");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        SanSanDanDingWeiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(7, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 5)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SanSanDanDingWeiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 5)], 2, -1, "3:8"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SanSanDanDingWeiJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(23, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 2, -1, "-1:1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 5)], 2, -1, "3:8"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        SanSanDanDingWeiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return SanSanDanDingWeiJZ;
    }(juzi.JuZiGuanLi));
    juzi.SanSanDanDingWeiJZ = SanSanDanDingWeiJZ;
    __reflect(SanSanDanDingWeiJZ.prototype, "juzi.SanSanDanDingWeiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var SanXiongDiManDongJZ = (function (_super) {
        __extends(SanXiongDiManDongJZ, _super);
        function SanXiongDiManDongJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SanXiongDiManDongJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_2");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        SanXiongDiManDongJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(17, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 10000, 1, 10000, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 2), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SanXiongDiManDongJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-2, 25), this.nan_du);
            this.fc2.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 5000, 1, 100, 5, 1)], 2, -1, "3:8"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "3:8 等待"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 24), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "3:24"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "3:24 等待"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SanXiongDiManDongJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(32, 30), this.nan_du);
            this.fc3.angle = -(90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 2, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 10000, 1, 10000, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        SanXiongDiManDongJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return SanXiongDiManDongJZ;
    }(juzi.JuZiGuanLi));
    juzi.SanXiongDiManDongJZ = SanXiongDiManDongJZ;
    __reflect(SanXiongDiManDongJZ.prototype, "juzi.SanXiongDiManDongJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShuangDuiJiaoJiaXuanZhuanJZ = (function (_super) {
        __extends(ShuangDuiJiaoJiaXuanZhuanJZ, _super);
        function ShuangDuiJiaoJiaXuanZhuanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangDuiJiaoJiaXuanZhuanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_21");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_12");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        ShuangDuiJiaoJiaXuanZhuanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(3, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));
            //
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 1), zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangDuiJiaoJiaXuanZhuanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(27, -15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(27, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(27, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));
            //
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(27, 1), zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(27, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3005, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        ShuangDuiJiaoJiaXuanZhuanJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-5, 30), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 10, null, 2, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(3, 40), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 10, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 10, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangDuiJiaoJiaXuanZhuanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return ShuangDuiJiaoJiaXuanZhuanJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangDuiJiaoJiaXuanZhuanJZ = ShuangDuiJiaoJiaXuanZhuanJZ;
    __reflect(ShuangDuiJiaoJiaXuanZhuanJZ.prototype, "juzi.ShuangDuiJiaoJiaXuanZhuanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShuangJiJieZouRaoFeiJZ = (function (_super) {
        __extends(ShuangJiJieZouRaoFeiJZ, _super);
        function ShuangJiJieZouRaoFeiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiJieZouRaoFeiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_18");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ShuangJiJieZouRaoFeiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 10), this.nan_du);
            this.fc1.angle = (-90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 4, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 5, 0.5, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiJieZouRaoFeiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 25), this.nan_du);
            this.fc2.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理2", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 5, 0.5, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 4, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(10, 1000, 3, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiJieZouRaoFeiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ShuangJiJieZouRaoFeiJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiJieZouRaoFeiJZ = ShuangJiJieZouRaoFeiJZ;
    __reflect(ShuangJiJieZouRaoFeiJZ.prototype, "juzi.ShuangJiJieZouRaoFeiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShuangJiRaoLuoXuanFeiJZ = (function (_super) {
        __extends(ShuangJiRaoLuoXuanFeiJZ, _super);
        function ShuangJiRaoLuoXuanFeiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiRaoLuoXuanFeiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_22");
            this.fc_info2 = FC_Console.getInfoByName(3, "zhong_12");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        ShuangJiRaoLuoXuanFeiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(30, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 4, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 503, 1)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiRaoLuoXuanFeiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 35), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 1, 4, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 503, 1)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        ShuangJiRaoLuoXuanFeiJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 10, null, 2, -1, "-1:1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 10, null, 2, -1, "-1:1"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 3, 18)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiRaoLuoXuanFeiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return ShuangJiRaoLuoXuanFeiJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiRaoLuoXuanFeiJZ = ShuangJiRaoLuoXuanFeiJZ;
    __reflect(ShuangJiRaoLuoXuanFeiJZ.prototype, "juzi.ShuangJiRaoLuoXuanFeiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShuangJiShangXiaJZ = (function (_super) {
        __extends(ShuangJiShangXiaJZ, _super);
        function ShuangJiShangXiaJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiShangXiaJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_8");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ShuangJiShangXiaJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 45), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiShangXiaJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17, 3),
                new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiShangXiaJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ShuangJiShangXiaJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiShangXiaJZ = ShuangJiShangXiaJZ;
    __reflect(ShuangJiShangXiaJZ.prototype, "juzi.ShuangJiShangXiaJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShuangJiXuanTingSheJiJUZI = (function (_super) {
        __extends(ShuangJiXuanTingSheJiJUZI, _super);
        function ShuangJiXuanTingSheJiJUZI(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiXuanTingSheJiJUZI.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_11");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ShuangJiXuanTingSheJiJUZI.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(10, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiXuanTingSheJiJUZI.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiXuanTingSheJiJUZI.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ShuangJiXuanTingSheJiJUZI;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiXuanTingSheJiJUZI = ShuangJiXuanTingSheJiJUZI;
    __reflect(ShuangJiXuanTingSheJiJUZI.prototype, "juzi.ShuangJiXuanTingSheJiJUZI");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var SiXiongDiJZ = (function (_super) {
        __extends(SiXiongDiJZ, _super);
        function SiXiongDiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SiXiongDiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_8");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_9");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
            this.init4ZTJ();
        };
        SiXiongDiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(7, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(9, 24), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(9, 13), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 12), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SiXiongDiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(23, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 18), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 24), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 13), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 12), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            ztj.nextStep(0);
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SiXiongDiJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(7, -11), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 2, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        SiXiongDiJZ.prototype.init4ZTJ = function () {
            //1 创建飞船
            this.fc4 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(23, -11), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc4);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 2, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(24, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "32:52"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(24, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc4.ztj = ztj;
        };
        //添加飞机到 战场
        SiXiongDiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
            scene.dijis.push(this.fc4);
        };
        return SiXiongDiJZ;
    }(juzi.JuZiGuanLi));
    juzi.SiXiongDiJZ = SiXiongDiJZ;
    __reflect(SiXiongDiJZ.prototype, "juzi.SiXiongDiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var SiXiongDiShuangGenZongJZ = (function (_super) {
        __extends(SiXiongDiShuangGenZongJZ, _super);
        function SiXiongDiShuangGenZongJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SiXiongDiShuangGenZongJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(1, "wei_6");
            this.fc_info2 = FC_Console.getInfoByName(1, "wei_1");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
            this.init4ZTJ();
        };
        SiXiongDiShuangGenZongJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(7, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(9, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(6, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 2000, 1, 100, 5, 3)], 2, -1, "32:52"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 12), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 2000, 1, 100, 5, 3)], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SiXiongDiShuangGenZongJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(23, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(9, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(24, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 2000, 1, 100, 5, 3)], 2, -1, "32:52"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 12), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 2000, 1, 100, 5, 3)], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SiXiongDiShuangGenZongJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(35, 10), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 2, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 2), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 4, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        SiXiongDiShuangGenZongJZ.prototype.init4ZTJ = function () {
            //1 创建飞船
            this.fc4 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-5, 10), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc4);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 15, null, 2, -1, "-1:1", true));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 2), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 4, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1)], 2, -1, "13:15"));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc4.ztj = ztj;
        };
        //添加飞机到 战场
        SiXiongDiShuangGenZongJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
            scene.dijis.push(this.fc4);
        };
        return SiXiongDiShuangGenZongJZ;
    }(juzi.JuZiGuanLi));
    juzi.SiXiongDiShuangGenZongJZ = SiXiongDiShuangGenZongJZ;
    __reflect(SiXiongDiShuangGenZongJZ.prototype, "juzi.SiXiongDiShuangGenZongJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var Xiao62XunLuoGonJiJZ = (function (_super) {
        __extends(Xiao62XunLuoGonJiJZ, _super);
        function Xiao62XunLuoGonJiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        Xiao62XunLuoGonJiJZ.prototype.initFcInfo = function () {
            this.fc_info2 = FC_Console.getInfoByName(1, "xiao_2");
            this.fc_info6 = FC_Console.getInfoByName(2, "xiao_6");
            this.init1ZTJ6();
            this.initZTJ21();
            this.initZTJ22();
            this.initZTJ23();
        };
        Xiao62XunLuoGonJiJZ.prototype.init1ZTJ6 = function () {
            //1 创建飞船
            this.fc6 = new feichuan.JuZhenJidui(this.scene, this.fc_info6, egret.Point.create(5, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc6);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 3), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(6, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "32:52"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(9, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, -1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(6, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc6.ztj = ztj;
        };
        Xiao62XunLuoGonJiJZ.prototype.initZTJ21 = function () {
            //1 创建飞船
            this.fc21 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-2, 10), this.nan_du);
            this.fc21.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc21);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc21.ztj = ztj;
        };
        Xiao62XunLuoGonJiJZ.prototype.initZTJ22 = function () {
            //1 创建飞船
            this.fc22 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-8, 10), this.nan_du);
            this.fc22.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc22);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc22.ztj = ztj;
        };
        Xiao62XunLuoGonJiJZ.prototype.initZTJ23 = function () {
            //1 创建飞船
            this.fc23 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-14, 10), this.nan_du);
            this.fc23.angle = (90 - 360) / 180 * Math.PI;
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc23);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc23.ztj = ztj;
        };
        //添加飞机到 战场
        Xiao62XunLuoGonJiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc6);
            scene.dijis.push(this.fc21);
            scene.dijis.push(this.fc22);
            scene.dijis.push(this.fc23);
        };
        return Xiao62XunLuoGonJiJZ;
    }(juzi.JuZiGuanLi));
    juzi.Xiao62XunLuoGonJiJZ = Xiao62XunLuoGonJiJZ;
    __reflect(Xiao62XunLuoGonJiJZ.prototype, "juzi.Xiao62XunLuoGonJiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var BoSiMaoJiaXuanZhuanJZ = (function (_super) {
        __extends(BoSiMaoJiaXuanZhuanJZ, _super);
        function BoSiMaoJiaXuanZhuanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        BoSiMaoJiaXuanZhuanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_10");
            this.init1ZTJ();
            this.fc_info2 = FC_Console.getInfoByName(3, "zhong_11");
            this.init2ZTJ();
        };
        BoSiMaoJiaXuanZhuanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "13:15"));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 2, [new zhuangtaiji.WuQiAiInfo(2, 5000, 12, 300, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(3, 3000, 3, 100, 3, 5, 1),
                new zhuangtaiji.WuQiAiInfo(2, 5000, 1, 100, 3, 2, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5), zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 2, [new zhuangtaiji.WuQiAiInfo(2, 5000, 12, 300, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(3, 3000, 3, 100, 3, 5, 1),
                new zhuangtaiji.WuQiAiInfo(2, 5000, 1, 100, 3, 2, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        BoSiMaoJiaXuanZhuanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-5, 25), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            // //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 2, [new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 16, 1),
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 17, 1),
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 18, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING, zhuangtaiji.ZT_TYPE.NULL_T, 5, 0.3, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 2, [new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 1, 3),
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 16, 1),
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 17, 1),
                new zhuangtaiji.WuQiAiInfo(2, 3000, 3, 100, 3, 18, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING, zhuangtaiji.ZT_TYPE.NULL_T, 5, 0.3, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        BoSiMaoJiaXuanZhuanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return BoSiMaoJiaXuanZhuanJZ;
    }(juzi.JuZiGuanLi));
    juzi.BoSiMaoJiaXuanZhuanJZ = BoSiMaoJiaXuanZhuanJZ;
    __reflect(BoSiMaoJiaXuanZhuanJZ.prototype, "juzi.BoSiMaoJiaXuanZhuanJZ");
})(juzi || (juzi = {}));
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.y = 300;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        this.textField.text = "Loading..." + current + "/" + total;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var juzi;
(function (juzi) {
    var JuZhanZiDanJiaXuanZhanJZ = (function (_super) {
        __extends(JuZhanZiDanJiaXuanZhanJZ, _super);
        function JuZhanZiDanJiaXuanZhanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        JuZhanZiDanJiaXuanZhanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_13");
            this.fc2_info = FC_Console.getInfoByName(3, "zhong_14");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        JuZhanZiDanJiaXuanZhanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(14, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 1)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 6), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 1)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 6), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 1)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 6), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 1)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(14, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 2, 37)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 2, 38)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(16, 4), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 5)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 7), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 1000, 1, 100, 5, 5)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        JuZhanZiDanJiaXuanZhanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(35, 20), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(35, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 20), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 20), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        JuZhanZiDanJiaXuanZhanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return JuZhanZiDanJiaXuanZhanJZ;
    }(juzi.JuZiGuanLi));
    juzi.JuZhanZiDanJiaXuanZhanJZ = JuZhanZiDanJiaXuanZhanJZ;
    __reflect(JuZhanZiDanJiaXuanZhanJZ.prototype, "juzi.JuZhanZiDanJiaXuanZhanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var PuTongDanXuanZhanDaGeJZ = (function (_super) {
        __extends(PuTongDanXuanZhanDaGeJZ, _super);
        function PuTongDanXuanZhanDaGeJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        PuTongDanXuanZhanDaGeJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_22");
            this.fc2_info = FC_Console.getInfoByName(3, "zhong_20");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        PuTongDanXuanZhanDaGeJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(14, 3), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 2, 800, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 3), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 2, 800, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(16, 4), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 2, 800, 3, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        PuTongDanXuanZhanDaGeJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(35, 8), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(24, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 21), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 22), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 22), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(24, 22), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 22), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        PuTongDanXuanZhanDaGeJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return PuTongDanXuanZhanDaGeJZ;
    }(juzi.JuZiGuanLi));
    juzi.PuTongDanXuanZhanDaGeJZ = PuTongDanXuanZhanDaGeJZ;
    __reflect(PuTongDanXuanZhanDaGeJZ.prototype, "juzi.PuTongDanXuanZhanDaGeJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var SanDaGeJiGuangXuanZhuanJZ = (function (_super) {
        __extends(SanDaGeJiGuangXuanZhuanJZ, _super);
        function SanDaGeJiGuangXuanZhuanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SanDaGeJiGuangXuanZhuanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_18");
            this.fc2_info = FC_Console.getInfoByName(3, "zhong_17");
            this.fc3_info = FC_Console.getInfoByName(3, "zhong_19");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
            this.init4ZTJ();
        };
        SanDaGeJiGuangXuanZhuanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 25), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 5000, 1, 100, 3, 1)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(35, 40), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(35, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 5000, 1, 100, 3, 1)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SanDaGeJiGuangXuanZhuanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 30), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(22, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(21, 29), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(21, 29), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 6, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(21, 29), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 31), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 6, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SanDaGeJiGuangXuanZhuanJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(10, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 1, 1, null, 8, -1, "特殊处理1", true));
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, -1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 5000, 3, 100, 5, 2),], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 5000, 3, 100, 5, 22),], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, -1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 5000, 3, 100, 5, 23),], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(21, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 5000, 3, 100, 5, 24),], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, -1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 5000, 3, 100, 5, 2),], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 5000, 3, 100, 5, 22),], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, -1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 5000, 3, 100, 5, 23),], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 0.5, [new zhuangtaiji.WuQiAiInfo(100, 5000, 3, 100, 5, 24),], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        SanDaGeJiGuangXuanZhuanJZ.prototype.init4ZTJ = function () {
            //1 创建飞船
            this.fc4 = new feichuan.JuZhenJidui(this.scene, this.fc3_info, egret.Point.create(35, 15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc4);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(22, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 29), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(21, 18), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(6, 29), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 6, 1, null, 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc4.ztj = ztj;
        };
        //添加飞机到 战场
        SanDaGeJiGuangXuanZhuanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
            scene.dijis.push(this.fc4);
        };
        return SanDaGeJiGuangXuanZhuanJZ;
    }(juzi.JuZiGuanLi));
    juzi.SanDaGeJiGuangXuanZhuanJZ = SanDaGeJiGuangXuanZhuanJZ;
    __reflect(SanDaGeJiGuangXuanZhuanJZ.prototype, "juzi.SanDaGeJiGuangXuanZhuanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var SanXuanZhanDaoPianJZ = (function (_super) {
        __extends(SanXuanZhanDaoPianJZ, _super);
        function SanXuanZhanDaoPianJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SanXuanZhanDaoPianJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_21");
            this.fc2_info = FC_Console.getInfoByName(3, "zhong_22");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        SanXuanZhanDaoPianJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 25), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(29, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 12), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SanXuanZhanDaoPianJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 25), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(29, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 12), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 40), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(2, 1000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SanXuanZhanDaoPianJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(-5, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, -1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 10, 1, null, 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        SanXuanZhanDaoPianJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return SanXuanZhanDaoPianJZ;
    }(juzi.JuZiGuanLi));
    juzi.SanXuanZhanDaoPianJZ = SanXuanZhanDaoPianJZ;
    __reflect(SanXuanZhanDaoPianJZ.prototype, "juzi.SanXuanZhanDaoPianJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShiZiXuanZhuanLianXuSheJiJZ = (function (_super) {
        __extends(ShiZiXuanZhuanLianXuSheJiJZ, _super);
        function ShiZiXuanZhuanLianXuSheJiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShiZiXuanZhuanLianXuSheJiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_27");
            this.fc2_info = FC_Console.getInfoByName(2, "xiao_14");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ShiZiXuanZhuanLianXuSheJiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(28, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(26, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 5, 100, 3003, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(4, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 6, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, -1), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 10, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 5, 100, 3003, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(26, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 6, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShiZiXuanZhuanLianXuSheJiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(-5, 15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(19, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 8, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(19, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 1),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 16),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 17),
                new zhuangtaiji.WuQiAiInfo(1, 3000, 1, 100, 3, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 1, -1, "特殊处理1", true));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ShiZiXuanZhuanLianXuSheJiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ShiZiXuanZhuanLianXuSheJiJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShiZiXuanZhuanLianXuSheJiJZ = ShiZiXuanZhuanLianXuSheJiJZ;
    __reflect(ShiZiXuanZhuanLianXuSheJiJZ.prototype, "juzi.ShiZiXuanZhuanLianXuSheJiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShiZiXuanZhanSanDanJZ = (function (_super) {
        __extends(ShiZiXuanZhanSanDanJZ, _super);
        function ShiZiXuanZhanSanDanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShiZiXuanZhanSanDanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_26");
            this.fc2_info = FC_Console.getInfoByName(3, "zhong_16");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        ShiZiXuanZhanSanDanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 3, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, -1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 3, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShiZiXuanZhanSanDanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 30), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(22, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(21, 29), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(21, 29), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 3, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(21, 29), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(23, 31), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 3, 100, 3, 1)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        ShiZiXuanZhanSanDanJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(-3, 5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(16, 6), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 5),], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 7), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 56),], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(14, 8), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 57),], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 9), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 58),], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        ShiZiXuanZhanSanDanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return ShiZiXuanZhanSanDanJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShiZiXuanZhanSanDanJZ = ShiZiXuanZhanSanDanJZ;
    __reflect(ShiZiXuanZhanSanDanJZ.prototype, "juzi.ShiZiXuanZhanSanDanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShuangJiDuiJiaoXianXuanZhuanJZ = (function (_super) {
        __extends(ShuangJiDuiJiaoXianXuanZhuanJZ, _super);
        function ShuangJiDuiJiaoXianXuanZhuanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiDuiJiaoXianXuanZhuanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_15");
            this.fc2_info = FC_Console.getInfoByName(2, "xiao_16");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        ShuangJiDuiJiaoXianXuanZhuanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(5, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 3, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiDuiJiaoXianXuanZhuanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 20), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 3, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        ShuangJiDuiJiaoXianXuanZhuanJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(15, 55), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 18), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiDuiJiaoXianXuanZhuanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return ShuangJiDuiJiaoXianXuanZhuanJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiDuiJiaoXianXuanZhuanJZ = ShuangJiDuiJiaoXianXuanZhuanJZ;
    __reflect(ShuangJiDuiJiaoXianXuanZhuanJZ.prototype, "juzi.ShuangJiDuiJiaoXianXuanZhuanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    //双机交叉旋转
    var ShuangJiJiaoChaXuanZHuan = (function (_super) {
        __extends(ShuangJiJiaoChaXuanZHuan, _super);
        function ShuangJiJiaoChaXuanZHuan(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangJiJiaoChaXuanZHuan.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_4");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ShuangJiJiaoChaXuanZHuan.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(2, 2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 32), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 10, 15, null, 2, -1, "32:52"));
            //移动加普通武器射击
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 15, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 15, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 15, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 15, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangJiJiaoChaXuanZHuan.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(32, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 10, 15, null, 2, -1, "-2:52"));
            //移动加普通武器射击
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 15, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 15, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 15, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 15, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangJiJiaoChaXuanZHuan.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ShuangJiJiaoChaXuanZHuan;
    }(juzi.JuZiGuanLi));
    juzi.ShuangJiJiaoChaXuanZHuan = ShuangJiJiaoChaXuanZHuan;
    __reflect(ShuangJiJiaoChaXuanZHuan.prototype, "juzi.ShuangJiJiaoChaXuanZHuan");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShuangKuanTiJiaXuanZhuanJUZI = (function (_super) {
        __extends(ShuangKuanTiJiaXuanZhuanJUZI, _super);
        function ShuangKuanTiJiaXuanZhuanJUZI(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangKuanTiJiaXuanZhuanJUZI.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_6");
            this.fc2_info = FC_Console.getInfoByName(2, "xiao_14");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        ShuangKuanTiJiaXuanZhuanJUZI.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, 2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 3), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 3), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangKuanTiJiaXuanZhuanJUZI.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 10), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 11), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(29, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 11), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        ShuangKuanTiJiaXuanZhuanJUZI.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(15, 55), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 18), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 1),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 16),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 17),
                new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 100, 5, 18)], 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangKuanTiJiaXuanZhuanJUZI.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return ShuangKuanTiJiaXuanZhuanJUZI;
    }(juzi.JuZiGuanLi));
    juzi.ShuangKuanTiJiaXuanZhuanJUZI = ShuangKuanTiJiaXuanZhuanJUZI;
    __reflect(ShuangKuanTiJiaXuanZhuanJUZI.prototype, "juzi.ShuangKuanTiJiaXuanZhuanJUZI");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShuangQianHouDanXuanZhuanJUZI = (function (_super) {
        __extends(ShuangQianHouDanXuanZhuanJUZI, _super);
        function ShuangQianHouDanXuanZhuanJUZI(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangQianHouDanXuanZhuanJUZI.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_6");
            this.fc2_info = FC_Console.getInfoByName(2, "xiao_12");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
        };
        ShuangQianHouDanXuanZhuanJUZI.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, -5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, -5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 3, 500, 3, 16, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangQianHouDanXuanZhuanJUZI.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(35, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 25), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, -5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1, 3)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, -5), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 2, 5, [new zhuangtaiji.WuQiAiInfo(100, 3000, 3, 500, 3, 16, 3)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        ShuangQianHouDanXuanZhuanJUZI.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(15, 55), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 18), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 1, -1, "特殊处理1"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangQianHouDanXuanZhuanJUZI.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
        };
        return ShuangQianHouDanXuanZhuanJUZI;
    }(juzi.JuZiGuanLi));
    juzi.ShuangQianHouDanXuanZhuanJUZI = ShuangQianHouDanXuanZhuanJUZI;
    __reflect(ShuangQianHouDanXuanZhuanJUZI.prototype, "juzi.ShuangQianHouDanXuanZhuanJUZI");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var ShuangXuanZHuanFeiDanJZ = (function (_super) {
        __extends(ShuangXuanZHuanFeiDanJZ, _super);
        function ShuangXuanZHuanFeiDanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ShuangXuanZHuanFeiDanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(2, "xiao_14");
            this.init1ZTJ();
            this.init2ZTJ();
        };
        ShuangXuanZHuanFeiDanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(10, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 10, null, 2, -1, "111111", true));
            //移动加普通武器射击
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 5, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)], 2, -1, "222222"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 0.5, null, 2, -1, "33333333"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 10, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)], 2, -1, "44444444"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        ShuangXuanZHuanFeiDanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(5, 55), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 5, null, 3, -1, "-2:52"));
            //移动加普通武器射击
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 25), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 5, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)], 2, -1, "222222"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(-2, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 0.5, null, 2, -1, "33333333"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 45), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 5, [new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 1),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 16),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 17),
                new zhuangtaiji.WuQiAiInfo(5, 2000, 3, 100, 10, 18)], 2, -1, "222222"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        //添加飞机到 战场
        ShuangXuanZHuanFeiDanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
        };
        return ShuangXuanZHuanFeiDanJZ;
    }(juzi.JuZiGuanLi));
    juzi.ShuangXuanZHuanFeiDanJZ = ShuangXuanZHuanFeiDanJZ;
    __reflect(ShuangXuanZHuanFeiDanJZ.prototype, "juzi.ShuangXuanZHuanFeiDanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var SiJiRaoQuanXuanZhuanJZ = (function (_super) {
        __extends(SiJiRaoQuanXuanZhuanJZ, _super);
        function SiJiRaoQuanXuanZhuanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SiJiRaoQuanXuanZhuanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_11");
            this.fc_info2 = FC_Console.getInfoByName(2, "xiao_28");
            this.fc_info3 = FC_Console.getInfoByName(2, "xiao_29");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
            this.init4ZTJ();
            this.init5ZTJ();
        };
        SiJiRaoQuanXuanZhuanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 15), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 1, null, 1, -1, "特殊处理1"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(9, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 2, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SiJiRaoQuanXuanZhuanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(-5, 2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理2"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //移动
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 32), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 32), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SiJiRaoQuanXuanZhuanJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info2, egret.Point.create(35, 32), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 32), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 32), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "13:15"));
            //移动
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        SiJiRaoQuanXuanZhuanJZ.prototype.init4ZTJ = function () {
            //1 创建飞船
            this.fc4 = new feichuan.JuZhenJidui(this.scene, this.fc_info3, egret.Point.create(35, 2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc4);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 32), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 32), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc4.ztj = ztj;
        };
        SiJiRaoQuanXuanZhuanJZ.prototype.init5ZTJ = function () {
            //1 创建飞船
            this.fc5 = new feichuan.JuZhenJidui(this.scene, this.fc_info3, egret.Point.create(-5, 32), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc5);
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 32), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 2), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 1, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 32), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "-1:1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 24), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 1, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc5.ztj = ztj;
        };
        //添加飞机到 战场
        SiJiRaoQuanXuanZhuanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
            scene.dijis.push(this.fc4);
            scene.dijis.push(this.fc5);
        };
        return SiJiRaoQuanXuanZhuanJZ;
    }(juzi.JuZiGuanLi));
    juzi.SiJiRaoQuanXuanZhuanJZ = SiJiRaoQuanXuanZhuanJZ;
    __reflect(SiJiRaoQuanXuanZhuanJZ.prototype, "juzi.SiJiRaoQuanXuanZhuanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var DanJiRaoFeiJZ = (function (_super) {
        __extends(DanJiRaoFeiJZ, _super);
        function DanJiRaoFeiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        DanJiRaoFeiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(3, "zhong_9");
            this.fc2_info = FC_Console.getInfoByName(1, "wei_1");
            this.fc3_info = FC_Console.getInfoByName(1, "wei_5");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
            this.init4ZTJ();
            this.init5ZTJ();
        };
        DanJiRaoFeiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(15, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 500, 5, 1),
            ], 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.DAO_HANG, zhuangtaiji.ZT_TYPE.NULL_T, 3, 3, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(7, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 3, 500, 5, 1),
            ], 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        DanJiRaoFeiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(35, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        DanJiRaoFeiJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(40, -10), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        DanJiRaoFeiJZ.prototype.init4ZTJ = function () {
            //1 创建飞船
            this.fc4 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(45, -15), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc4);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 3, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc4.ztj = ztj;
        };
        DanJiRaoFeiJZ.prototype.init5ZTJ = function () {
            //1 创建飞船
            this.fc5 = new feichuan.JuZhenJidui(this.scene, this.fc3_info, egret.Point.create(50, -20), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc5);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 2, -1, "32:52"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 2, null, 2, -1, "32:52"));
            ztj.nextStep(0);
            this.fc5.ztj = ztj;
        };
        //添加飞机到 战场
        DanJiRaoFeiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
            scene.dijis.push(this.fc4);
            scene.dijis.push(this.fc5);
        };
        return DanJiRaoFeiJZ;
    }(juzi.JuZiGuanLi));
    juzi.DanJiRaoFeiJZ = DanJiRaoFeiJZ;
    __reflect(DanJiRaoFeiJZ.prototype, "juzi.DanJiRaoFeiJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var KaoJinLiKaiJz = (function (_super) {
        __extends(KaoJinLiKaiJz, _super);
        function KaoJinLiKaiJz(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.fcs = new Array();
            _this.scene = scene;
            return _this;
        }
        KaoJinLiKaiJz.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(1, "wei_2");
            for (var i = 0; i < 20; i++) {
                var fc = this.init1ZTJ(i);
                this.fcs.push(fc);
            }
        };
        KaoJinLiKaiJz.prototype.init1ZTJ = function (i) {
            var jl = i / 2;
            var fx = i % 2;
            //目标坐标
            var to1 = egret.Point.create(7, 5);
            var to2 = egret.Point.create(23, 5);
            var lasto1 = egret.Point.create(-5, -5);
            var lasto2 = egret.Point.create(35, -5);
            var fc1;
            var ztj;
            if (fx == 1) {
                //1 创建飞船
                fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-1 + (-jl), -1 + (-jl)), this.nan_du);
                //2 创建状态机
                ztj = new fjztj.QuYuZTJ(fc1);
                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2 * jl, 1, null, 2, -1, "32:52"));
                //进场
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(to1, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "32:52"));
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(lasto1, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            }
            else {
                //1 创建飞船
                fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(31 + jl, -1 + (-jl)), this.nan_du);
                //2 创建状态机
                ztj = new fjztj.QuYuZTJ(fc1);
                //休息
                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 2 * jl, 1, null, 2, -1, "32:52"));
                //进场
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(to2, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
                //休息
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 3, 1, null, 2, -1, "32:52"));
                ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(lasto2, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "13:15"));
            }
            ztj.is_loop = false;
            ztj.nextStep(0);
            fc1.ztj = ztj;
            return fc1;
        };
        //添加飞机到 战场
        KaoJinLiKaiJz.prototype.addFc = function (scene) {
            for (var _i = 0, _a = this.fcs; _i < _a.length; _i++) {
                var fc = _a[_i];
                scene.dijis.push(fc);
            }
        };
        return KaoJinLiKaiJz;
    }(juzi.JuZiGuanLi));
    juzi.KaoJinLiKaiJz = KaoJinLiKaiJz;
    __reflect(KaoJinLiKaiJz.prototype, "juzi.KaoJinLiKaiJz");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var SanDanJiDuiXuanZhuanJZ = (function (_super) {
        __extends(SanDanJiDuiXuanZhuanJZ, _super);
        function SanDanJiDuiXuanZhuanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        SanDanJiDuiXuanZhuanJZ.prototype.initFcInfo = function () {
            this.fc1_info = FC_Console.getInfoByName(2, "xiao_10");
            this.fc2_info = FC_Console.getInfoByName(1, "wei_3");
            this.fc3_info = FC_Console.getInfoByName(2, "xiao_7");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
            this.init4ZTJ();
            this.init5ZTJ();
            this.init6ZTJ();
        };
        SanDanJiDuiXuanZhuanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc1_info, egret.Point.create(28, -5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(1, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(2, 3), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(28, 1), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 5)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        SanDanJiDuiXuanZhuanJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(35, 1), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        SanDanJiDuiXuanZhuanJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(37, 3), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        SanDanJiDuiXuanZhuanJZ.prototype.init4ZTJ = function () {
            //1 创建飞船
            this.fc4 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(39, 5), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc4);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc4.ztj = ztj;
        };
        SanDanJiDuiXuanZhuanJZ.prototype.init5ZTJ = function () {
            //1 创建飞船
            this.fc5 = new feichuan.JuZhenJidui(this.scene, this.fc2_info, egret.Point.create(41, 7), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc5);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 2, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(25, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(5, 35), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 3, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc5.ztj = ztj;
        };
        SanDanJiDuiXuanZhuanJZ.prototype.init6ZTJ = function () {
            //1 创建飞船
            this.fc6 = new feichuan.JuZhenJidui(this.scene, this.fc3_info, egret.Point.create(15, 55), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc6);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 5, null, 2, -1, "特殊处理1", true));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 10), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 2, 3, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 5, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(20, 30), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 5, null, 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(15, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 5, null, 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc6.ztj = ztj;
        };
        //添加飞机到 战场
        SanDanJiDuiXuanZhuanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
            scene.dijis.push(this.fc4);
            scene.dijis.push(this.fc5);
            scene.dijis.push(this.fc6);
        };
        return SanDanJiDuiXuanZhuanJZ;
    }(juzi.JuZiGuanLi));
    juzi.SanDanJiDuiXuanZhuanJZ = SanDanJiDuiXuanZhuanJZ;
    __reflect(SanDanJiDuiXuanZhuanJZ.prototype, "juzi.SanDanJiDuiXuanZhuanJZ");
})(juzi || (juzi = {}));
var juzi;
(function (juzi) {
    var YiPaiSheJiJZ = (function (_super) {
        __extends(YiPaiSheJiJZ, _super);
        function YiPaiSheJiJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        YiPaiSheJiJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(1, "wei_1");
            this.init1ZTJ();
            this.init2ZTJ();
            this.init3ZTJ();
            this.init4ZTJ();
        };
        YiPaiSheJiJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(6, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(6, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        YiPaiSheJiJZ.prototype.init2ZTJ = function () {
            //1 创建飞船
            this.fc2 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(12, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc2);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc2.ztj = ztj;
        };
        YiPaiSheJiJZ.prototype.init3ZTJ = function () {
            //1 创建飞船
            this.fc3 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(18, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc3);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(18, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc3.ztj = ztj;
        };
        YiPaiSheJiJZ.prototype.init4ZTJ = function () {
            //1 创建飞船
            this.fc4 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(24, -2), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc4);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(24, 5), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.NULL_T, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1", true));
            //休息
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(17, 8), zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 3, 1, [new zhuangtaiji.WuQiAiInfo(100, 2000, 1, 100, 5, 1)], 2, -1, "32:52"));
            // ztj.is_loop = false;
            ztj.nextStep(0);
            this.fc4.ztj = ztj;
        };
        //添加飞机到 战场
        YiPaiSheJiJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
            scene.dijis.push(this.fc2);
            scene.dijis.push(this.fc3);
            scene.dijis.push(this.fc4);
        };
        return YiPaiSheJiJZ;
    }(juzi.JuZiGuanLi));
    juzi.YiPaiSheJiJZ = YiPaiSheJiJZ;
    __reflect(YiPaiSheJiJZ.prototype, "juzi.YiPaiSheJiJZ");
})(juzi || (juzi = {}));
var ai;
(function (ai) {
    var DaoHuangAi = (function (_super) {
        __extends(DaoHuangAi, _super);
        function DaoHuangAi(fc, mt, mz, gj) {
            var _this = _super.call(this, fc, mt, mz, gj) || this;
            //角速度
            _this.xs = 2;
            _this.is_chick = false; //是否完成
            _this.is_upFX = true; //是否更新旋转方向
            _this.angle = 0;
            _this.xs_hu = 1;
            _this.jian_tou = -Math.PI * 0.5;
            return _this;
        }
        DaoHuangAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //判断飞船目的地
            if (!this.fc.toPoint) {
                return;
            }
            //角度测算
            if (this.is_upFX) {
                this.angle = Math.atan2((this.fc.toPoint.y - this.fc.position[1]), (this.fc.toPoint.x - this.fc.position[0]));
                this.angle = this.angle % (Math.PI * 2);
                if (this.angle < 0) {
                    this.angle = Math.PI * 2 + this.angle;
                }
            }
            var fcAng = this.fc.angle + this.jian_tou;
            //规范化角度数值
            fcAng = fcAng % (Math.PI * 2);
            if (fcAng < 0) {
                fcAng = Math.PI * 2 + fcAng;
            }
            var js = this.xs;
            //角度差距
            var jc = Math.abs(fcAng - this.angle);
            jc = jc % (Math.PI * 2);
            //方向计算
            if (this.is_upFX) {
                if (fcAng >= this.angle) {
                    if (jc > Math.PI) {
                        this.xs_hu = 1;
                    }
                    else {
                        this.xs_hu = -1;
                    }
                }
                if (fcAng < this.angle) {
                    if (jc > Math.PI) {
                        this.xs_hu = -1;
                    }
                    else {
                        this.xs_hu = 1;
                    }
                }
                this.is_upFX = false;
            }
            //校准
            if (jc > (Math.PI + Math.PI * 0.5)) {
                jc = Math.PI * 2 - jc;
            }
            var pi = jc / Math.PI;
            js = this.xs * pi;
            if (jc < 0.05) {
                this.fc.angularVelocity = 0;
                this.upOver();
                return;
            }
            this.fc.angularVelocity = this.xs_hu * js;
        };
        return DaoHuangAi;
    }(ai.AiBase));
    ai.DaoHuangAi = DaoHuangAi;
    __reflect(DaoHuangAi.prototype, "ai.DaoHuangAi");
})(ai || (ai = {}));
var quyu;
(function (quyu) {
    var ShangQuyu = (function (_super) {
        __extends(ShangQuyu, _super);
        function ShangQuyu() {
            var _this = _super.call(this) || this;
            //可以在上部区域实用的类型
            _this.FCS = [guanqia.FC_TYPE.CHUAN_DUI, guanqia.FC_TYPE.KUAN_TI, guanqia.FC_TYPE.NAI_DA, guanqia.FC_TYPE.TONG_YONG];
            return _this;
        }
        ShangQuyu.prototype.initFc = function () {
            _super.prototype.initFc.call(this);
            var i = suiji.GetRandomNum(0, FC_Console.all_list.length);
        };
        return ShangQuyu;
    }(quyu.QuYu));
    quyu.ShangQuyu = ShangQuyu;
    __reflect(ShangQuyu.prototype, "quyu.ShangQuyu");
})(quyu || (quyu = {}));
var mokuai;
(function (mokuai) {
    /**
     * 飞船动力核心
     */
    var DongLiHeXin = (function (_super) {
        __extends(DongLiHeXin, _super);
        function DongLiHeXin(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, moKuaiPost, shapeType, bitName, fc) || this;
            _this.moKuaiType = mokuai.MO_KUAI_TYPE.HE_XIN;
            return _this;
        }
        return DongLiHeXin;
    }(mokuai.MoKuaiBase));
    mokuai.DongLiHeXin = DongLiHeXin;
    __reflect(DongLiHeXin.prototype, "mokuai.DongLiHeXin");
})(mokuai || (mokuai = {}));
var jiesuan;
(function (jiesuan) {
    var FuHuo = (function (_super) {
        __extends(FuHuo, _super);
        function FuHuo() {
            var _this = _super.call(this) || this;
            _this.init();
            return _this;
        }
        FuHuo.prototype.init = function () {
            this.initOver();
        };
        FuHuo.prototype.initOver = function () {
            var label = new eui.Label();
            label.text = "游戏结束";
            this.addChild(label);
            label.width = 400; //设置宽度
            label.height = 300; //设置高度
            label.fontFamily = "Tahoma"; //设置字体
            label.textColor = 0xD71139; //设置颜色
            label.size = 35; //设置文本字号
            label.bold = true; //设置是否加粗
            label.textAlign = "right"; //设置水平对齐方式
            label.verticalAlign = "middle"; //设置垂直对齐方式
            label.x = 1000;
            label.y = 1100;
        };
        return FuHuo;
    }(egret.Sprite));
    jiesuan.FuHuo = FuHuo;
    __reflect(FuHuo.prototype, "jiesuan.FuHuo");
})(jiesuan || (jiesuan = {}));
var Physics;
(function (Physics) {
    Physics.factor = 50; //物理世界与像素世界 距离换算 因子 (一米 约等于 50像素)
    function getRelativeDistance(size, pos, unit) {
        var rx, ry;
        var x = pos.x;
        rx = (x - (size.x / 2)) * unit;
        if (rx < 0) {
            rx += unit * 0.5;
        }
        if (rx > 0) {
            rx += unit * 0.5;
        }
        if (rx == 0) {
            rx = unit * 0.5;
        }
        if (size.x == 1) {
            rx = 0;
        }
        if (x - (size.x / 2) == -0.5) {
            rx = 0;
        }
        //----------------------------------
        var y = size.y - (pos.y) - 1;
        // let y = (pos.y)
        ry = (y - (size.y / 2)) * unit;
        if (ry < 0) {
            ry += unit * 0.5;
        }
        if (ry > 0) {
            ry += unit * 0.5;
        }
        if (ry == 0) {
            ry = unit * 0.5;
        }
        if (size.y == 1) {
            ry = 0;
        }
        if (y - (size.y / 2) == -0.5) {
            ry = 0;
        }
        // egret.log("LLLLLLLLLLLLLLLLLLL:" + rx + "_" + ry + "|" + "|" + pos.y + "|" + size.y + "|"+y);
        return egret.Point.create(rx, ry);
    }
    Physics.getRelativeDistance = getRelativeDistance;
})(Physics || (Physics = {}));
var ai;
(function (ai) {
    var HuaXingAi = (function (_super) {
        __extends(HuaXingAi, _super);
        function HuaXingAi(fc, mt, mz, gj, xs) {
            var _this = _super.call(this, fc, mt, mz, gj) || this;
            _this.mark = 0;
            _this.xs = xs;
            _this.mark = egret.getTimer();
            _this.fc.angularDamping = 0.5;
            return _this;
        }
        HuaXingAi.prototype.doUpData = function (time) {
            // if (egret.getTimer() - this.mark > this.xs * 1000) {
            //     this.upOver();
            //     this.fc.angularDamping = 0;
            // }
        };
        return HuaXingAi;
    }(ai.AiBase));
    ai.HuaXingAi = HuaXingAi;
    __reflect(HuaXingAi.prototype, "ai.HuaXingAi");
})(ai || (ai = {}));
var shuke;
(function (shuke) {
    var ShuKe = (function (_super) {
        __extends(ShuKe, _super);
        function ShuKe(battle_scene) {
            var _this = _super.call(this, battle_scene, egret.Point.create(15, 45), GameConstant.ZHEN_YING.WO_JUN, 5, 1) || this;
            _this.wyCD = 15;
            _this.wyMark = 0;
            _this.fc_type = feichuan.FC_TYPE.SUKE;
            _this.initSuKe();
            return _this;
        }
        //添加模块
        ShuKe.prototype.addMoKuai = function (dl) {
            if (!dl) {
                return;
            }
            var t = -1;
            var x;
            var y;
            //获取碰撞点
            var mk = this.jia_ce_peng_zhuang_dian(dl.displays[0].x, dl.displays[0].y);
            if (!mk) {
                return;
            }
            // 燃料相关操作
            if (dl.dl_type == suiji.SJ_YAN_SE.RAN_LIAO) {
                return;
            }
            x = mk.moKuaiPost.x;
            y = mk.moKuaiPost.y;
            // //添加模块
            if (Math.abs(mk.x - dl.bitmap.x) > Math.abs(mk.y - dl.bitmap.y)) {
                //右
                if (dl.bitmap.x > mk.x) {
                    x = mk.moKuaiPost.x + 1;
                    t = 4;
                }
                else {
                    //左
                    x = mk.moKuaiPost.x - 1;
                    t = 3;
                }
            }
            else {
                //上
                if (dl.bitmap.y < mk.y) {
                    y = mk.moKuaiPost.y - 1;
                    t = 1;
                }
                else {
                    //下
                    y = mk.moKuaiPost.y + 1;
                    t = 2;
                }
            }
            //越界过滤
            if (x < 0 || y < 0 || x >= this.W || y >= this.H) {
                return;
            }
            //如果该节点已经有模块
            if (this.moKuaiList[y][x]) {
                var p = this.kuosan(x, y);
                if (p) {
                    x = p.x;
                    y = p.y;
                }
            }
            var hx;
            //装甲
            if (dl.dl_type == suiji.SJ_YAN_SE.ZHUANG_JIA) {
                if (dl.lv == 1) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_1", this);
                }
                if (dl.lv == 2) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_2", this);
                }
                if (dl.lv == 3) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_3", this);
                }
                if (dl.lv == 4) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_4", this);
                }
                if (dl.lv == 5) {
                    hx = new zhuangjia.PuTongZhuangJia(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, "us_zj_level_5", this);
                }
            }
            if (dl.dl_type == suiji.SJ_YAN_SE.WU_QI) {
                //普通
                if (dl.wq_type == suiji.WQ_TYPE[0]) {
                    hx = new wuqi.PuTongDan(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //散弹
                if (dl.wq_type == suiji.WQ_TYPE[1]) {
                    hx = new wjwq.SanDanWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //导弹
                if (dl.wq_type == suiji.WQ_TYPE[2]) {
                    hx = new wjwq.DaoDanWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //激光
                if (dl.wq_type == suiji.WQ_TYPE[3]) {
                    hx = new wjwq.JiGuangWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //炮台
                if (dl.wq_type == suiji.WQ_TYPE[4]) {
                    hx = new wjwq.PaoTaiWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //鱼雷
                if (dl.wq_type == suiji.WQ_TYPE[5]) {
                    hx = new wjwq.YuLeiWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //螺旋
                if (dl.wq_type == suiji.WQ_TYPE[6]) {
                    hx = new wjwq.LuoXuanWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //长钉
                if (dl.wq_type == suiji.WQ_TYPE[7]) {
                    hx = new wjwq.ChangDingWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                //重锤
                if (dl.wq_type == suiji.WQ_TYPE[8]) {
                    hx = new wjwq.ZhongChuiWuqi(egret.Point.create(x, y), mokuai.BODY_SHAPE_TYPE.SIMPLE, this, dl.lv);
                }
                var wq = hx;
                hx.setMkLevel(dl.lv);
                this.wuqiList.push(wq);
            }
            hx.setMkLevel(1);
            var hpp = Physics.getRelativeDistance(egret.Point.create(this.W, this.H), egret.Point.create(x, y), mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE]);
            var box = new p2.Box({ width: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE], height: mokuai.M_SIZE_PH[mokuai.BODY_SHAPE_TYPE.SIMPLE] });
            box.collisionGroup = this.collGroup;
            box.collisionMask = this.collMask;
            this.addShape(box, [hpp.x, hpp.y]);
            this.moKuaiList[y][x] = hx;
            hx.boxShape = box;
            this.battle_scene.addChild(hx);
            this.mokuai_size++;
        };
        //初始化云图
        ShuKe.prototype.initYunTU = function () {
            this.yun_tu =
                [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                ];
            this.W = this.yun_tu[0].length;
            this.H = this.yun_tu.length;
            // this.yun_tu =
            // [
            //     [1, 2, 2, 2, 3]
            // ]
        };
        //更新飞船
        ShuKe.prototype.upsuke = function (n) {
            //1 装甲 2 武器 
            // egret.log("GGGGGGGGGG:"+this.yun_tu[10][8])
            var indx = this.getindx(n);
            var m = this.moKuaiList[indx[0]][indx[1]];
            if (m.moKuaiType == 2) {
                var w = m;
                w.level = user.UserInfo.wuqi_shengji_tianti[n];
                w.sj_number = 30;
            }
            if (m.moKuaiType == 1) {
                var r = this.moKuaiList[indx[0]][indx[1]];
                if (r.parent) {
                    r.parent.removeChild(r);
                }
                var hx = this.initSKWuQi(n, indx[1], indx[0], user.UserInfo.wuqi_shengji_tianti[n], egret.Point.create(this.yun_tu[0].length, this.yun_tu.length));
                hx.sj_number = 30;
            }
        };
        ShuKe.prototype.getindx = function (n) {
            if (n < 4) {
                if (n == 1) {
                    return [10, 8];
                }
                if (n == 2) {
                    return [10, 9];
                }
                if (n == 3) {
                    return [10, 10];
                }
            }
            if (n < 7) {
                if (n == 4) {
                    return [11, 8];
                }
                if (n == 5) {
                    return [11, 9];
                }
                if (n == 6) {
                    return [11, 10];
                }
            }
            if (n < 10) {
                if (n == 7) {
                    return [12, 8];
                }
                if (n == 8) {
                    return [12, 9];
                }
                if (n == 9) {
                    return [12, 10];
                }
            }
            return null;
        };
        ShuKe.prototype.initSuKe = function () {
            this.initYunTU();
            this.initPro(this.yun_tu, user.UserInfo.wuqi_shengji_tianti);
        };
        ShuKe.prototype.updataPos = function () {
            _super.prototype.updataPos.call(this);
            this.jiasu_texiao();
        };
        //扩散
        ShuKe.prototype.kuosan = function (x, y) {
            if (this.chick((y - 1), (x - 1))) {
                return egret.Point.create((x - 1), (y - 1));
            }
            if (this.chick((y - 1), x)) {
                return egret.Point.create((x), (y - 1));
            }
            if (this.chick((y - 1), (x + 1))) {
                return egret.Point.create((x + 1), (y - 1));
            }
            //----------------------------
            if (this.chick(y, (x - 1))) {
                return egret.Point.create((x - 1), (y));
            }
            if (this.chick(y, (x + 1))) {
                return egret.Point.create((x + 1), (y));
            }
            //--------------------------
            if (this.chick((y + 1), (x - 1))) {
                return egret.Point.create((x - 1), (y + 1));
            }
            if (this.chick((y + 1), x)) {
                return egret.Point.create((x), (y + 1));
            }
            if (this.chick((y + 1), (x + 1))) {
                return egret.Point.create((x + 1), (y + 1));
            }
            //=============================================================
            if (this.chick((y - 2), (x - 2))) {
                return egret.Point.create((x - 2), (y - 2));
            }
            if (this.chick((y - 2), (x - 1))) {
                return egret.Point.create((x - 1), (y - 2));
            }
            if (this.chick((y - 2), (x))) {
                return egret.Point.create((x), (y - 2));
            }
            if (this.chick((y - 2), (x + 1))) {
                return egret.Point.create((x + 1), (y - 2));
            }
            if (this.chick((y - 2), (x + 2))) {
                return egret.Point.create((x + 2), (y - 2));
            }
            //----------------------------------
            if (this.chick((y - 1), (x - 2))) {
                return egret.Point.create((x - 2), (y - 1));
            }
            if (this.chick((y - 1), (x + 2))) {
                return egret.Point.create((x + 2), (y - 1));
            }
            //--------------------------------
            if (this.chick(y, (x - 2))) {
                return egret.Point.create((x - 2), (y));
            }
            if (this.chick(y, (x + 2))) {
                return egret.Point.create((x + 2), (y));
            }
            //-----------------------------
            if (this.chick((y + 1), (x - 2))) {
                return egret.Point.create((x - 2), (y + 1));
            }
            if (this.chick((y + 1), (x + 2))) {
                return egret.Point.create((x + 2), (y + 1));
            }
            //--------------------------------------------
            if (this.chick((y + 2), (x - 2))) {
                return egret.Point.create((x - 2), (y + 2));
            }
            if (this.chick((y + 2), (x - 1))) {
                return egret.Point.create((x - 1), (y + 2));
            }
            if (this.chick((y + 2), x)) {
                return egret.Point.create((x), (y + 2));
            }
            if (this.chick((y + 2), (x + 1))) {
                return egret.Point.create((x + 1), (y + 2));
            }
            if (this.chick((y + 2), (x + 2))) {
                return egret.Point.create((x + 2), (y + 2));
            }
            return null;
        };
        ShuKe.prototype.chick = function (x, y) {
            if (x < 0 || y < 0 || x >= this.W || y >= this.H) {
                return false;
            }
            return true;
        };
        ShuKe.prototype.jiasu_texiao = function () {
            if (!this.battle_scene.is_jiasu) {
                return;
            }
            // if (egret.getTimer() - this.wyMark < this.wyCD) {
            //     return;
            // }
            var p = Tools.p2TOegretPoitn(egret.Point.create(this.position[0], this.position[1]));
            this.wyMark = egret.getTimer();
            var b = new egret.Bitmap(RES.getRes("us_zd_9"));
            b.anchorOffsetX = b.width * 0.5;
            b.anchorOffsetY = b.height * 0.5;
            // b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = p.x;
            b.y = p.y;
            b.alpha = 0.5;
            this.battle_scene.addChild(b);
            egret.Tween.get(b).to({ "scaleX": 0.1, "scaleY": 0.1, "y": p.y + 100, "rotation": 720 }, 250).call(this.dell, this, [b]);
        };
        //移除缓动动画
        ShuKe.prototype.dell = function (DD) {
            if (DD) {
                if (DD.parent) {
                    egret.Tween.removeTweens(DD);
                    this.battle_scene.removeChild(DD);
                }
            }
            DD = null;
        };
        //被打
        ShuKe.prototype.bei_da = function () {
            //能量顿
            var test_scene = this.battle_scene;
            test_scene.dpBar.jian();
            test_scene.hg.jizhong();
            test_scene.dou_ping();
        };
        //碎裂
        ShuKe.prototype.sui_lie = function () {
            for (var i = 0; i < 50; i++) {
                var sp = new shuke.SuiPian("us_zd_8", Tools.p2TOegretPoitn(egret.Point.create(this.position[0], this.position[1])));
                this.battle_scene.addChild(sp);
                sp.too();
            }
            this.fuhuo();
        };
        // 复活界面
        ShuKe.prototype.fuhuo = function () {
            var fh = new jiesuan.FuHuo();
            this.battle_scene.addChild(fh);
        };
        //结算 界面 
        ShuKe.prototype.jiesuan = function () {
        };
        return ShuKe;
    }(feichuan.FeiChuanBase));
    shuke.ShuKe = ShuKe;
    __reflect(ShuKe.prototype, "shuke.ShuKe");
})(shuke || (shuke = {}));
var shuke;
(function (shuke) {
    var SuiPian = (function (_super) {
        __extends(SuiPian, _super);
        function SuiPian(name, pp) {
            var _this = _super.call(this, RES.getRes(name)) || this;
            //角度
            _this.degree = 0;
            //半径
            _this.radius = 0;
            _this.m = 0;
            _this.t = 0;
            _this.pp = pp;
            _this.x = pp.x;
            _this.y = pp.y;
            _this.init();
            return _this;
        }
        SuiPian.prototype.init = function () {
            this.anchorOffsetX = this.width * 0.5;
            this.anchorOffsetY = this.height * 0.5;
            //缩放
            var scale = Tools.GetRandomNum(1, 3);
            this.scaleX = scale;
            this.scaleY = scale;
            this.radius = Tools.GetRandomNum(50, 200);
            this.degree = Tools.GetRandomNum(1, 360);
            this.t = Tools.GetRandomNum(30, 100);
            this.pt = egret.Point.polar(this.radius, this.degree * Math.PI / 180);
            this.alpha = 0.5;
        };
        SuiPian.prototype.too = function () {
            egret.Tween.get(this).to({ "x": this.x + this.pt.x, "y": this.y + this.pt.y }, 200).call(this.zhuan, this);
        };
        //转
        SuiPian.prototype.zhuan = function () {
            this.m++;
            if (this.m >= 20) {
                this.dell();
                return;
            }
            this.degree += 5;
            this.pt = egret.Point.polar(this.radius, this.degree * Math.PI / 180);
            egret.Tween.get(this).to({ "x": this.pp.x + this.pt.x, "y": this.pp.y + this.pt.y }, this.t).call(this.zhuan, this);
        };
        //移除缓动动画
        SuiPian.prototype.dell = function () {
            if (this.parent) {
                var p = this.parent;
                p.removeChild(this);
            }
        };
        return SuiPian;
    }(egret.Bitmap));
    shuke.SuiPian = SuiPian;
    __reflect(SuiPian.prototype, "shuke.SuiPian");
})(shuke || (shuke = {}));
var suiji;
(function (suiji) {
    //随机核心
    var SJ_HE_XIN;
    (function (SJ_HE_XIN) {
        SJ_HE_XIN[SJ_HE_XIN["HU_DUN"] = 0] = "HU_DUN";
        SJ_HE_XIN[SJ_HE_XIN["ZI_YU"] = 1] = "ZI_YU";
        SJ_HE_XIN[SJ_HE_XIN["JI_SU"] = 2] = "JI_SU";
    })(SJ_HE_XIN = suiji.SJ_HE_XIN || (suiji.SJ_HE_XIN = {}));
    //随机颜色
    var SJ_YAN_SE;
    (function (SJ_YAN_SE) {
        SJ_YAN_SE[SJ_YAN_SE["WU_QI"] = 0] = "WU_QI";
        SJ_YAN_SE[SJ_YAN_SE["ZHUANG_JIA"] = 1] = "ZHUANG_JIA";
        SJ_YAN_SE[SJ_YAN_SE["RAN_LIAO"] = 2] = "RAN_LIAO";
    })(SJ_YAN_SE = suiji.SJ_YAN_SE || (suiji.SJ_YAN_SE = {}));
    suiji.HXS = [SJ_HE_XIN.HU_DUN, SJ_HE_XIN.ZI_YU, SJ_HE_XIN.JI_SU];
    suiji.YSS = [SJ_YAN_SE.WU_QI, SJ_YAN_SE.ZHUANG_JIA];
    suiji.LVS = [1, 2, 3, 4, 5];
    //掉落概率
    suiji.DIAO_LUO_GAI_LV = 20;
    //核心掉落权重
    suiji.HX_QUN_ZHONG = [30, 30, 30];
    suiji.HX_QUN_ZHONG_ALL = 90;
    //颜色权重
    suiji.YS_QUN_ZHONG = [40, 80];
    suiji.YS_QUN_ZHONG_ALL = 120;
    //等级权重、
    suiji.LV_QUN_ZHONG = [50, 30, 10, 5, 100];
    suiji.LV_QUN_ZHONG_ALL = 195;
    //燃料等急权重
    suiji.RL_LV_QZ = [50, 30, 10];
    suiji.RL_LV_QZ_ALL = 90;
    //武器信息
    suiji.WQ_TYPE = [wuqi.WUQI_TYPE.PU_TONG, wuqi.WUQI_TYPE.SAN_DAN, wuqi.WUQI_TYPE.DAO_DAN, wuqi.WUQI_TYPE.SHE_XIAN, wuqi.WUQI_TYPE.DING_XIANG, wuqi.WUQI_TYPE.YU_LEI, wuqi.WUQI_TYPE.LUO_XUAN, wuqi.WUQI_TYPE.CHANG_DING, wuqi.WUQI_TYPE.ZHONG_CHUI];
    //武器权重
    suiji.WQ_TYPE_QZ = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    suiji.WQ_TYPE_QZ_ALL = 9;
    //随机核心
    function suiji_hexin() {
        var qz = suiji.GetRandomNum(0, suiji.HX_QUN_ZHONG_ALL);
        return suiji.HXS[suiji.getQuanZhongKey(qz, suiji.HX_QUN_ZHONG)];
    }
    suiji.suiji_hexin = suiji_hexin;
    //随机颜色
    function suiji_yanse() {
        var qz = suiji.GetRandomNum(0, suiji.YS_QUN_ZHONG_ALL);
        return suiji.YSS[suiji.getQuanZhongKey(qz, suiji.YS_QUN_ZHONG)];
    }
    suiji.suiji_yanse = suiji_yanse;
    // 随机该模块是否是掉落模块
    function isDiaoLuoMoKuai() {
        var g = suiji.GetRandomNum(0, suiji.DIAO_LUO_GAI_LV);
        return g == 1;
    }
    suiji.isDiaoLuoMoKuai = isDiaoLuoMoKuai;
    //随机等级
    function suiji_level(type) {
        if (type == suiji.SJ_YAN_SE.RAN_LIAO) {
            var key = suiji.GetRandomNum(0, suiji.RL_LV_QZ_ALL);
            return suiji.LVS[getQuanZhongKey(key, suiji.RL_LV_QZ)];
        }
        var qz = suiji.GetRandomNum(0, suiji.LV_QUN_ZHONG_ALL);
        return suiji.LVS[suiji.getQuanZhongKey(qz, suiji.LV_QUN_ZHONG)];
    }
    suiji.suiji_level = suiji_level;
    //随机武器
    function suiji_wuqi() {
        var key = suiji.GetRandomNum(0, suiji.WQ_TYPE_QZ_ALL);
        return suiji.WQ_TYPE[getQuanZhongKey(key, suiji.WQ_TYPE_QZ)];
    }
    suiji.suiji_wuqi = suiji_wuqi;
    /**
     * 生成范围随机数
     * @Min 最小值
     * @Max 最大值
     */
    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }
    suiji.GetRandomNum = GetRandomNum;
    //返回权重下标
    function getQuanZhongKey(num, qz) {
        var all = 0;
        var inx = 0;
        for (var _i = 0, qz_1 = qz; _i < qz_1.length; _i++) {
            var i = qz_1[_i];
            all += i;
            if (num < all) {
                return inx;
            }
            inx++;
        }
        return 0;
    }
    suiji.getQuanZhongKey = getQuanZhongKey;
    //随机方向 上下左右 1234
    function randomFangXiang() {
        return GetRandomNum(1, 4);
    }
    suiji.randomFangXiang = randomFangXiang;
    //返回随机坐标 简单
    function randomTargetPos_simple() {
        var x;
        var y;
        x = GetRandomNum(0, 30);
        y = GetRandomNum(0, 50);
        egret.log("随机坐标：" + x + "_" + y);
        return egret.Point.create(x, y);
    }
    suiji.randomTargetPos_simple = randomTargetPos_simple;
    //返回随机坐标 困难
    function randomTargetPos_hard() {
        var x;
        var y;
        x = GetRandomNum(-3, 33);
        y = GetRandomNum(-3, 53);
        return egret.Point.create(x, y);
    }
    suiji.randomTargetPos_hard = randomTargetPos_hard;
})(suiji || (suiji = {}));
var suiji;
(function (suiji) {
    var ShuiJiBean = (function () {
        function ShuiJiBean() {
        }
        return ShuiJiBean;
    }());
    suiji.ShuiJiBean = ShuiJiBean;
    __reflect(ShuiJiBean.prototype, "suiji.ShuiJiBean");
})(suiji || (suiji = {}));
var test;
(function (test) {
    var yuntu_type;
    (function (yuntu_type) {
        yuntu_type[yuntu_type["nll"] = 0] = "nll";
        yuntu_type[yuntu_type["hx"] = 1] = "hx";
        yuntu_type[yuntu_type["zj"] = 2] = "zj"; //装甲
    })(yuntu_type = test.yuntu_type || (test.yuntu_type = {}));
    var TestFeiChuan = (function (_super) {
        __extends(TestFeiChuan, _super);
        function TestFeiChuan(battle_scene) {
            var _this = _super.call(this, battle_scene, egret.Point.create(1200, 15), GameConstant.ZHEN_YING.DI_JUN, 1, 1) || this;
            _this.fc_type = feichuan.FC_TYPE.DIJI;
            // this.initJson("6_1_json");
            _this.initTestFchuan();
            return _this;
        }
        //做一个 飞船
        TestFeiChuan.prototype.initTestFchuan = function () {
            this.mass = 100;
            // this.addAI(new ai.KeepDistanceAI(this, 5));
            // this.addAI(new ai.ShiShiMiaoZhunAi(this));
            // let ps: Array<egret.Point> = new Array<egret.Point>();
            // ps.push(Tools.egretTOp2(egret.Point.create(15, 15)));
            // ps.push(Tools.egretTOp2(egret.Point.create(1700, 1700)));
            // this.addAI(new ai.MoveToAi(this, ps, true));
            // this.addAI(new ai.ZhuanXiang(this));
            // this.addAI(new ai.RandomPointAi(this, ai.RANDOM_POINT.all, 2));
        };
        return TestFeiChuan;
    }(feichuan.FeiChuanBase));
    test.TestFeiChuan = TestFeiChuan;
    __reflect(TestFeiChuan.prototype, "test.TestFeiChuan");
})(test || (test = {}));
var test;
(function (test) {
    var TestGrid = (function (_super) {
        __extends(TestGrid, _super);
        function TestGrid(sc) {
            var _this = _super.call(this) || this;
            _this.sc = sc;
            _this.drawGrid();
            return _this;
        }
        //画格子
        TestGrid.prototype.drawGrid = function () {
            // this.w = Tools.getPhoneW();
            // this.h = Tools.getPhoneH();
            // this.graphics.beginFill(0x000000);
            // this.graphics.drawRect(900, 900, this.w + 1100, this.h + 1100);
            // this.graphics.endFill();
            this.bgh = new egret.Bitmap(RES.getRes("bjh_png"));
            this.bgh.x = 1000;
            this.bgh.y = 1000;
            this.bgh.scaleX = 6.5;
            this.bgh.scaleY = 6;
            this.sc.addChildAt(this.bgh, 0);
            //画星星
            this.init_random_xx();
        };
        //初始化随机星星
        TestGrid.prototype.init_random_xx = function () {
            for (var i = 0; i < 5; i++) {
                var dd = new bj.XingXing(1.1, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 5; i++) {
                var dd = new bj.XingXing(0.9, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 5; i++) {
                var dd = new bj.XingXing(0.7, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 5; i++) {
                var dd = new bj.XingXing(0.3, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
            for (var i = 0; i < 5; i++) {
                var dd = new bj.XingXing(0.1, 1);
                this.sc.addChild(dd.displays[0]);
                this.sc.world.addBody(dd);
                this.sc.xxList.push(dd);
            }
        };
        return TestGrid;
    }(egret.Sprite));
    test.TestGrid = TestGrid;
    __reflect(TestGrid.prototype, "test.TestGrid");
})(test || (test = {}));
var TestScene = (function (_super) {
    __extends(TestScene, _super);
    function TestScene() {
        var _this = _super.call(this) || this;
        _this.guanka = new Guanka(_this);
        //场景更新相关
        _this.up_jg = 1000;
        _this.up_mark = 0;
        //广告
        _this.gg = null;
        //分享
        _this.fx = null;
        //商店
        _this.shop = null;
        //媒体奖励
        _this.mrlb = null;
        //奖励类型  1 广告  2 分享  3新手礼包
        _this.jl_type = 0;
        //碰撞间隔
        _this.jg = 100;
        //碰撞标记
        _this.pzMark = 0;
        _this.mrNumber = 50;
        _this.meici = 111;
        _this.is_jia = true;
        _this.add = 0;
        //商店触发cd
        _this.shop_cd = 2000;
        //随机技能权重
        _this.jnqz = [0, 5, 9, 13, 16, 19, 21, 23, 25, 26];
        //上品价格
        _this.jiage = 1000;
        //是否处于选购商品状态
        _this.is_select = false;
        //等级文字提示
        _this.dji_1 = new egret.TextField();
        _this.dji_2 = new egret.TextField();
        _this.dji_3 = new egret.TextField();
        //ui碰撞判断
        _this.is_ui = false;
        _this.zhanqu_zi = new egret.TextField();
        _this.is_zhanqu = true; //是否可以进入战区
        _this.is_chuji = false;
        _this.initTest();
        // this.initGuanka();
        _this.sjjl();
        _this.initShop();
        _this.initzhanqu();
        return _this;
    }
    ;
    TestScene.getInstance = function () {
        if (TestScene.instance == null) {
            TestScene.instance = new TestScene();
        }
        return TestScene.instance;
    };
    TestScene.prototype.initGuanka = function () {
        this.bcgl = new guanqia.BoCiGuanLi(this);
    };
    TestScene.prototype.initTest = function () {
        //背景
        var bg = new test.TestGrid(this);
        bg.x = 0;
        bg.y = 0;
        // this.addChild(bg);
        var sk = new shuke.ShuKe(this);
        this.sk = sk;
        this.initBars();
        this.initBJG();
        this.gg = new egret.Bitmap(RES.getRes("gg"));
        this.fx = new egret.Bitmap(RES.getRes("fx"));
        this.shop = new egret.Bitmap(RES.getRes("shop"));
        this.mrlb = new egret.Bitmap(RES.getRes("mrlb"));
        // this.mrlb.anchorOffsetX = this.mrlb.width * 0.5;
        // this.mrlb.anchorOffsetY = this.mrlb.height * 0.5;
    };
    TestScene.prototype.initShop = function () {
        if (this.jl_type == 3) {
            this.mrlb.x = Tools.getPhoneW() * 0.15 + 1000;
            this.mrlb.y = Tools.getPhoneH() * 0.7 + 1000;
            this.addChild(this.mrlb);
        }
        if (this.jl_type == 2) {
            this.fx.x = Tools.getPhoneW() * 0.15 + 1000;
            this.fx.y = Tools.getPhoneH() * 0.7 + 1000;
            this.addChild(this.fx);
        }
        if (this.jl_type == 1) {
            this.gg.x = Tools.getPhoneW() * 0.15 + 1000;
            this.gg.y = Tools.getPhoneH() * 0.7 + 1000;
            this.addChild(this.gg);
        }
        this.jia_ge = new egret.TextField(); //故事背景
        this.jia_ge.textFlow = new Array({ text: "-1000", style: { "textColor": 0xFFFF6F, "size": 30 } });
        this.shop.x = Tools.getPhoneW() * 0.75 + 1000;
        this.shop.y = Tools.getPhoneH() * 0.71 + 1000;
        this.addChild(this.shop);
    };
    TestScene.prototype.initBars = function () {
        this.dpBar = new bar.DunBar(this);
        this.hhBar = new bar.HuiHeBar(this);
        // this.gzBar = new bar.GuaZaiBar(this);
        this.timeBar = new bar.TimeBar(this);
        // this.djBar = new bar.DengJiBar(this);
        this.zzBar = new bar.ZhongJianTiShiBar(this);
        this.jinBar = new bar.JinBiBar(this, user.UserInfo.all_number);
    };
    TestScene.prototype.initBJG = function () {
        this.hg = new bj.HongGuang(this);
    };
    //初始化战区线
    TestScene.prototype.initzhanqu = function () {
        this.zhanqu_xian = new egret.Shape();
        this.zhanqu_xian.graphics.lineStyle(1, 0x16FF69);
        this.zhanqu_xian.graphics.moveTo(1000, 1000 + Tools.getPhoneH() * 0.5);
        this.zhanqu_xian.graphics.lineTo(1000 + Tools.getPhoneW(), 1000 + Tools.getPhoneH() * 0.5);
        this.zhanqu_xian.graphics.endFill();
        this.addChild(this.zhanqu_xian);
        this.zhanqu_zi.textFlow = new Array({ text: "前往战区", style: { "textColor": 0x16FF69, "size": 20 } });
        this.zhanqu_zi.x = 1000 + Tools.getPhoneW() * 0.628;
        this.zhanqu_zi.y = 1000 + Tools.getPhoneH() * 0.47;
        this.addChild(this.zhanqu_zi);
        this.zhuanqu_tu = new egret.Bitmap(RES.getRes("zhanqu"));
        this.zhuanqu_tu.x = 1000 + Tools.getPhoneW() * 0.6;
        this.zhuanqu_tu.y = 1000 + Tools.getPhoneH() * 0.47;
        this.addChild(this.zhuanqu_tu);
    };
    TestScene.prototype.upSomeThing = function () {
        _super.prototype.upSomeThing.call(this);
        this.timeBar.upup();
        this.jinBar.updata();
        //开始游戏
        if (this.is_chuji) {
            if ((egret.getTimer() - this.up_mark) > this.up_jg) {
                if (this.bcgl.is_next) {
                    this.bcgl.nextBo();
                    this.bcgl.addFc(this);
                }
                this.bcgl.upSomeThing();
                this.up_mark = egret.getTimer();
            }
        }
        this.upShop();
        if (this.jl_type == 3) {
            this.upMR();
        }
        if (this.jl_type == 1) {
            this.upsp();
        }
        if (this.jl_type == 2) {
            this.upfx();
        }
        //更新武器ui碰撞检测
        if (!this.is_ui) {
            this.upUI();
        }
        //---------判断是否可以进入战区---------------
        if (this.is_zhanqu) {
            if (this.sk.zx.y < (1000 + Tools.getPhoneH() * 0.5)) {
                this.is_zhanqu = false;
                this.initGuanka();
                this.is_chuji = true;
                //各种ui往下划出
                if (this.shop.parent) {
                    egret.Tween.get(this.shop).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.shop]);
                }
                if (this.fx.parent) {
                    egret.Tween.get(this.fx).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.fx]);
                }
                if (this.mrlb.parent) {
                    egret.Tween.get(this.mrlb).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.mrlb]);
                }
                if (this.gg.parent) {
                    egret.Tween.get(this.gg).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.gg]);
                }
                if (this.zhanqu_xian.parent) {
                    egret.Tween.get(this.zhanqu_xian).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.zhanqu_xian]);
                }
                if (this.zhanqu_zi.parent) {
                    egret.Tween.get(this.zhanqu_zi).to({ "y": 1050 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.zhanqu_zi]);
                }
                if (this.zhuanqu_tu.parent) {
                    egret.Tween.get(this.zhuanqu_tu).to({ "y": 800 + Tools.getPhoneH() }, 1000).call(this.remUI, this, [this.zhuanqu_tu]);
                }
            }
        }
    };
    TestScene.prototype.remUI = function (a) {
        if (a.parent) {
            this.removeChild(a);
        }
    };
    TestScene.prototype.upUI = function () {
        if (this.jia1) {
            if (this.jia1.parent) {
                var rect1_ = this.sk.zx.getBounds();
                rect1_.width = this.sk.zx.width * 3;
                rect1_.height = this.sk.zx.height * 3;
                var rect2 = this.jia1.getBounds();
                rect1_.x = this.move_point.x - this.sk.zx.width * 1.5;
                rect1_.y = this.move_point.y - this.sk.zx.height * 1.5;
                rect2.x = this.jia1.x;
                rect2.y = this.jia1.y;
                var sspp = rect1_.intersects(rect2);
                //碰撞检测
                if (sspp) {
                    this.dou_ping();
                    this.is_ui = true;
                    user.UserInfo.saveTianTi(this.zz[0]);
                    this.sk.upsuke(this.zz[0]);
                    this.moveLeve();
                    // this.jia1.alpha
                    egret.Tween.get(this.jia1).to({ "scaleX": 5, "scaleY": 5 }, 500).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia1]);
                    egret.Tween.get(this.jia2).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia2]);
                    egret.Tween.get(this.jia3).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia3]);
                    this.is_zhanqu = true;
                    return;
                }
            }
        }
        if (this.jia2) {
            if (this.jia2.parent) {
                var rect1_ = this.sk.zx.getBounds();
                rect1_.width = this.sk.zx.width * 3;
                rect1_.height = this.sk.zx.height * 3;
                var rect2 = this.jia2.getBounds();
                rect1_.x = this.move_point.x - this.sk.zx.width * 1.5;
                rect1_.y = this.move_point.y - this.sk.zx.height * 1.5;
                rect2.x = this.jia2.x;
                rect2.y = this.jia2.y;
                var sspp = rect1_.intersects(rect2);
                //碰撞检测
                if (sspp) {
                    this.dou_ping();
                    this.is_ui = true;
                    user.UserInfo.saveTianTi(this.zz[1]);
                    this.sk.upsuke(this.zz[1]);
                    this.moveLeve();
                    egret.Tween.get(this.jia2).to({ "scaleX": 5, "scaleY": 5, "alpha": 0 }, 500).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia2]);
                    egret.Tween.get(this.jia1).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia1]);
                    egret.Tween.get(this.jia3).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia3]);
                    this.is_zhanqu = true;
                    return;
                }
            }
        }
        if (this.jia3) {
            if (this.jia3.parent) {
                var rect1_ = this.sk.zx.getBounds();
                rect1_.width = this.sk.zx.width * 3;
                rect1_.height = this.sk.zx.height * 3;
                var rect2 = this.jia3.getBounds();
                rect1_.x = this.move_point.x - this.sk.zx.width * 1.5;
                rect1_.y = this.move_point.y - this.sk.zx.height * 1.5;
                rect2.x = this.jia3.x;
                rect2.y = this.jia3.y;
                var sspp = rect1_.intersects(rect2);
                //碰撞检测
                if (sspp) {
                    this.dou_ping();
                    this.is_ui = true;
                    user.UserInfo.saveTianTi(this.zz[2]);
                    this.sk.upsuke(this.zz[2]);
                    this.moveLeve();
                    egret.Tween.get(this.jia3).to({ "scaleX": 5, "scaleY": 5 }, 500).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia3]);
                    egret.Tween.get(this.jia2).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia2]);
                    egret.Tween.get(this.jia1).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).call(function (a) {
                        if (a.parent) {
                            a.parent.removeChild(a);
                        }
                    }, this, [this.jia1]);
                    this.is_zhanqu = true;
                    return;
                }
            }
        }
    };
    //移除等级图标
    TestScene.prototype.moveLeve = function () {
        if (this.dji_1.parent) {
            this.removeChild(this.dji_1);
        }
        if (this.dji_2.parent) {
            this.removeChild(this.dji_2);
        }
        if (this.dji_3.parent) {
            this.removeChild(this.dji_3);
        }
    };
    //--------------------------------------商店相关----------------------------------------------
    //商店碰撞检测
    TestScene.prototype.upShop = function () {
        if (!this.move_point || this.is_select) {
            return;
        }
        var rect1_ = this.sk.zx.getBounds();
        rect1_.width = this.sk.zx.width * 3;
        rect1_.height = this.sk.zx.height * 3;
        var rect2 = this.shop.getBounds();
        rect1_.x = this.move_point.x - this.sk.zx.width * 1.5;
        rect1_.y = this.move_point.y - this.sk.zx.height * 1.5;
        rect2.x = this.shop.x;
        rect2.y = this.shop.y;
        var sspp = rect1_.intersects(rect2);
        if (sspp) {
            this.is_shop = true;
            //逻辑出发cd 
            if (egret.getTimer() > this.shop_cd) {
                this.shop_cd = egret.getTimer() + 1000;
                //如果钱够的话
                if (!this.is_select) {
                    if (this.jinBar.jianAllNumb(this.jiage)) {
                        this.zz = this.randomJN();
                        //生成ui
                        this.addUI(this.zz);
                        this.dou_ping();
                        this.is_select = true;
                        this.is_shop = false;
                        //飘钱
                        this.jia_ge.x = Tools.getPhoneW() * 0.75 + 1000;
                        this.jia_ge.y = Tools.getPhoneH() * 0.66 + 1000;
                        this.addChild(this.jia_ge);
                        egret.Tween.get(this.jia_ge).to({ "y": Tools.getPhoneH() * 0.65 + 1000, "alpha": 0 }, 1000).call(function (jia_ge) {
                            if (jia_ge.parent) {
                                jia_ge.parent.removeChild(jia_ge);
                            }
                        }, this, [this.jia_ge]);
                        //闪烁移除购物车
                        egret.Tween.get(this.shop).to({ "alpha": 0 }, 200).to({ "alpha": 1 }, 200).to({ "alpha": 0 }, 200).to({ "alpha": 1 }, 200).call(function (jia_ge) {
                            if (jia_ge.parent) {
                                jia_ge.parent.removeChild(jia_ge);
                            }
                        }, this, [this.shop]);
                        //战区锁
                        this.is_zhanqu = false;
                    }
                    else {
                        //飘钱
                        this.jia_ge.x = Tools.getPhoneW() * 0.75 + 1000;
                        this.jia_ge.y = Tools.getPhoneH() * 0.66 + 1000;
                        this.addChild(this.jia_ge);
                        egret.Tween.get(this.jia_ge).to({ "alpha": 0 }, 150).to({ "alpha": 1 }, 150).to({ "alpha": 0 }, 50).to({ "alpha": 1 }, 50).call(function (a) {
                            if (a.parent) {
                                a.parent.removeChild(a);
                            }
                        }, this, [this.jia_ge]);
                    }
                }
            }
            //商店事件
        }
        else {
            this.is_shop = false;
        }
    };
    TestScene.prototype.setUI = function (one, x, y) {
        one.anchorOffsetX = one.width * 0.5;
        one.anchorOffsetY = one.height * 0.5;
        one.x = x;
        one.y = y;
        one.scaleX = 2;
        one.scaleY = 2;
        this.addChild(one);
    };
    TestScene.prototype.getSE = function (n) {
        if (n == 1) {
            return 0xEDFFF9;
        }
        if (n == 2) {
            return 0x16FF69;
        }
        if (n == 3) {
            return 0x4F9DFF;
        }
        if (n == 4) {
            return 0x8223CC;
        }
        if (n >= 5) {
            return 0xFFFF6F;
        }
        return null;
    };
    //添加 武器选择ui
    TestScene.prototype.addUI = function (zz) {
        // 1:us_wq_1 | 2:us_wq_2 | 3:us_wq_4 | 4:us_wq_7 | 5:us_wq_6 | 6:us_wq_3 | 7:us_wq_5 | 8:us_wq_8 | 9:us_wq_9
        var lv1 = user.UserInfo.wuqi_shengji_tianti[zz[0]] + 1;
        var se = this.getSE(lv1);
        this.dji_1.textFlow = new Array({ text: "LV." + lv1, style: { "textColor": se, "size": 10 } });
        this.setUI(this.dji_1, (Tools.getPhoneW() * 0.25 + 1000), Tools.getPhoneH() * 0.52 + 1000);
        this.jia1 = new egret.Bitmap(RES.getRes(this.getuiName(zz[0])));
        this.setUI(this.jia1, (Tools.getPhoneW() * 0.25 + 1000), Tools.getPhoneH() * 0.55 + 1000);
        var lv2 = user.UserInfo.wuqi_shengji_tianti[zz[1]] + 1;
        se = this.getSE(lv2);
        this.dji_2.textFlow = new Array({ text: "LV." + lv2, style: { "textColor": se, "size": 10 } });
        this.setUI(this.dji_2, (Tools.getPhoneW() * 0.5 + 1000), Tools.getPhoneH() * 0.52 + 1000);
        this.jia2 = new egret.Bitmap(RES.getRes(this.getuiName(zz[1])));
        this.setUI(this.jia2, (Tools.getPhoneW() * 0.5 + 1000), Tools.getPhoneH() * 0.55 + 1000);
        var lv3 = user.UserInfo.wuqi_shengji_tianti[zz[2]] + 1;
        se = this.getSE(lv3);
        this.dji_3.textFlow = new Array({ text: "LV." + lv3, style: { "textColor": se, "size": 10 } });
        this.setUI(this.dji_3, (Tools.getPhoneW() * 0.75 + 1000), Tools.getPhoneH() * 0.52 + 1000);
        this.jia3 = new egret.Bitmap(RES.getRes(this.getuiName(zz[2])));
        this.setUI(this.jia3, (Tools.getPhoneW() * 0.75 + 1000), Tools.getPhoneH() * 0.55 + 1000);
    };
    //返回UI图标名称
    TestScene.prototype.getuiName = function (n) {
        if (n == 1) {
            return "us_wq_1";
        }
        if (n == 2) {
            return "us_wq_2";
        }
        if (n == 3) {
            return "us_wq_4";
        }
        if (n == 4) {
            return "us_wq_7";
        }
        if (n == 5) {
            return "us_wq_6";
        }
        if (n == 6) {
            return "us_wq_3";
        }
        if (n == 7) {
            return "us_wq_5";
        }
        if (n == 8) {
            return "us_wq_8";
        }
        if (n == 9) {
            return "us_wq_9";
        }
        return '';
    };
    //-------------------------------商店够买相关-----------------------------------------
    //随机升级技能
    TestScene.prototype.randomJN = function () {
        var zs = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
            for (;;) {
                var zz = Tools.GetRandomNum(1, user.UserInfo.getmax());
                if (zs[0] != zz && zs[1] != zz && zs[2] != zz) {
                    zs[i] = zz;
                    break;
                }
            }
        }
        return zs;
    };
    //---------------------------------------------------------------------------------
    //幸运礼包
    TestScene.prototype.upMR = function () {
        if (!this.move_point) {
            return;
        }
        if (this.mrNumber <= 0) {
            this.is_jl = false;
            if (this.mrlb.parent) {
                this.mrlb.parent.removeChild(this.mrlb);
            }
            return;
        }
        var rect1 = this.sk.zx.getBounds();
        var rect2 = this.mrlb.getBounds();
        rect1.x = this.move_point.x;
        rect1.y = this.move_point.y;
        rect2.x = this.mrlb.x;
        rect2.y = this.mrlb.y;
        var sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_jl = true;
            if (this.is_jia) {
                this.jiawu();
            }
            else {
                this.jianwu();
            }
            // if (this.add % 1 == 0) {
            this.mrNumber--;
            // egret.log("GGGGGGGGG:" + this.mrNumber);
            this.addjibi(this.mrlb.x + this.mrlb.width * 0.5, this.mrlb.y + this.mrlb.height * 0.5);
            // }
            // this.add++;
        }
        else {
            this.is_jl = false;
            this.x = -1000;
            this.y = -1000;
        }
    };
    //观看视频 碰撞
    TestScene.prototype.upsp = function () {
        if (!this.move_point) {
            return;
        }
        var rect1 = this.sk.zx.getBounds();
        var rect2 = this.gg.getBounds();
        rect1.x = this.move_point.x;
        rect1.y = this.move_point.y;
        rect2.x = this.gg.x;
        rect2.y = this.gg.y;
        var sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_jl = true;
            //观看广告事件
        }
        else {
            this.is_jl = false;
        }
    };
    //分享 碰撞
    TestScene.prototype.upfx = function () {
        if (!this.move_point) {
            return;
        }
        var rect1 = this.sk.zx.getBounds();
        var rect2 = this.fx.getBounds();
        rect1.x = this.move_point.x;
        rect1.y = this.move_point.y;
        rect2.x = this.fx.x;
        rect2.y = this.fx.y;
        var sspp = rect1.intersects(rect2);
        if (sspp) {
            this.is_jl = true;
            //分享事件
        }
        else {
            this.is_jl = false;
        }
    };
    //胖短是否可以出发碰撞
    TestScene.prototype.isPZ = function () {
        return (egret.getTimer() - this.pzMark) > this.jg;
    };
    //-------------------------------------------------------------------------------------
    //-----------------随机奖励----------------------------------------
    //随机奖励
    TestScene.prototype.sjjl = function () {
        var r = Tools.GetRandomNum(1, 25);
        if (r <= 10) {
            this.jl_type = 1;
            return;
        }
        if (r > 10 && r <= 20) {
            this.jl_type = 2;
            return;
        }
        this.jl_type = 3;
    };
    TestScene.prototype.jiawu = function () {
        this.x += 5;
        this.y -= 5;
        this.is_jia = false;
    };
    TestScene.prototype.jianwu = function () {
        this.x -= 5;
        this.y += 5;
        this.is_jia = true;
    };
    //抖屏
    TestScene.prototype.dou_ping = function () {
        var x = -1000;
        var y = -1000;
        egret.Tween.get(this).to({ "x": x + 5, "y": y - 5 }, 50).to({ "x": x - 5, "y": y + 5 }, 50).to({ "x": x + 5, "y": y - 5 }, 50).to({ "x": x - 5, "y": y + 5 }, 50).to({ "x": x + 5, "y": y - 5 }, 50).call(this.gui_wei, this, [x, y]);
    };
    //归位
    TestScene.prototype.gui_wei = function (x, y) {
        this.x = x;
        this.y = y;
    };
    //去掉光线
    TestScene.prototype.removeXin = function (shp) {
        if (shp.parent) {
            this.removeChild(shp);
        }
    };
    //添加金币图标
    TestScene.prototype.addjibi = function (x, y) {
        var xx = Tools.GetRandomNum(-50, 50);
        var yy = Tools.GetRandomNum(-50, 50);
        var jinbi = new egret.Bitmap(RES.getRes("jt"));
        jinbi.x = x + xx;
        jinbi.y = yy + y;
        jinbi.anchorOffsetX = jinbi.width * 0.5;
        jinbi.anchorOffsetY = jinbi.height * 0.5;
        jinbi.scaleX = 2;
        jinbi.scaleY = 2;
        this.addChild(jinbi);
        egret.Tween.get(jinbi).to({ "x": x + xx, "y": y + yy }, 500).to({ "x": Tools.getPhoneW() * 0.99 + 1000, "y": Tools.getPhoneH() * 0.02 + 1000, "scaleX": 0.8, "scaleY": 0.8 }, 700).call(this.dell, this, [jinbi]);
    };
    TestScene.prototype.dell = function (d) {
        if (d.parent) {
            d.parent.removeChild(d);
        }
        this.jinBar.addAllNumb(this.meici);
    };
    TestScene.instance = null;
    return TestScene;
}(scene.SceneBase));
__reflect(TestScene.prototype, "TestScene");
var texiao;
(function (texiao) {
    //击中特效
    var JiZhongTeXiao = (function (_super) {
        __extends(JiZhongTeXiao, _super);
        function JiZhongTeXiao(bit_name) {
            return _super.call(this, bit_name) || this;
        }
        JiZhongTeXiao.prototype.goto = function () {
        };
        return JiZhongTeXiao;
    }(texiao.TeXiaoBase));
    texiao.JiZhongTeXiao = JiZhongTeXiao;
    __reflect(JiZhongTeXiao.prototype, "texiao.JiZhongTeXiao");
})(texiao || (texiao = {}));
var ai;
(function (ai) {
    /**
     * 与sk保持 固定距离ai
     */
    var KeepDistanceAI = (function (_super) {
        __extends(KeepDistanceAI, _super);
        function KeepDistanceAI(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.xs = 1;
            return _this;
        }
        KeepDistanceAI.prototype.doUpData = function (time) {
            if (!this.hang_up) {
                //计算 sk 与 宿主 之间的距离
                var jl = egret.Point.distance(egret.Point.create(this.suke.position[0], this.suke.position[1]), egret.Point.create(this.fc.position[0], this.fc.position[1]));
                //在距离内 不施加动力
                if (jl < this.xs) {
                    return;
                }
                //距离外 根据 距离远近 添加 不同大小的动力
                var rx = (this.suke.position[0] - this.fc.position[0]) * 0.1;
                var ry = (this.suke.position[1] - this.fc.position[1]) * 0.1;
                this.fc.velocity = [rx, ry];
            }
        };
        return KeepDistanceAI;
    }(ai.AiBase));
    ai.KeepDistanceAI = KeepDistanceAI;
    __reflect(KeepDistanceAI.prototype, "ai.KeepDistanceAI");
})(ai || (ai = {}));
var Tools;
(function (Tools) {
    //屏幕宽30个格子
    Tools.GE_ZI_NUM_W = 30;
    //屏幕高50个格子
    Tools.GE_ZI_NUM_H = 50;
    //p2  坐标 转 白鹭 坐标
    function p2TOegretPoitn(p) {
        return egret.Point.create(p.x * Physics.factor, scene.battle_sceneH - p.y * Physics.factor);
    }
    Tools.p2TOegretPoitn = p2TOegretPoitn;
    // 白鹭 坐标 转 p2 坐标
    function egretTOp2(p) {
        return egret.Point.create(p.x / Physics.factor, (scene.battle_sceneH - p.y) / Physics.factor);
    }
    Tools.egretTOp2 = egretTOp2;
    //比率
    function bilv(xx, xy, base) {
        var bl = 1;
        var bx;
        var by;
        if (xx < 0) {
            bx = base * -1;
        }
        if (xx > 0) {
            bx = base;
        }
        if (xx == 0) {
            xx = 0.001;
        }
        if (xy == 0) {
            xy = 0.001;
        }
        if (xy < 0) {
            by = base * -1;
        }
        if (xy > 0) {
            by = base;
        }
        if (Math.abs(xx) > Math.abs(xy)) {
            bl = Math.abs(xy) / Math.abs(xx);
            return egret.Point.create(bx, by * bl);
        }
        if (Math.abs(xy) > Math.abs(xx)) {
            bl = Math.abs(xx) / Math.abs(xy);
            return egret.Point.create(bx * bl, by);
        }
        if (Math.abs(xy) == Math.abs(xx)) {
            return egret.Point.create(bx, by);
        }
    }
    Tools.bilv = bilv;
    //格子坐标转 物理坐标
    function gridTop2(x, y) {
        var w_base = getPhoneW() / Tools.GE_ZI_NUM_W;
        var h_base = getPhoneH() / Tools.GE_ZI_NUM_H;
        var ex = x * w_base + w_base * 0.5 + 1000;
        var ey = y * h_base + h_base * 0.5 + 1000;
        return egret.Point.create(ex / Physics.factor, (scene.battle_sceneH - ey) / Physics.factor);
    }
    Tools.gridTop2 = gridTop2;
    //格子坐标转 屏幕坐标
    function gridToEgret(x, y) {
        var w_base = getPhoneW() / Tools.GE_ZI_NUM_W;
        var h_base = getPhoneH() / Tools.GE_ZI_NUM_H;
        return egret.Point.create((x * w_base + w_base * 0.5 + 1000), (y * h_base + h_base * 0.5 + 1000));
    }
    Tools.gridToEgret = gridToEgret;
    //获取设备分辨率宽
    function getPhoneW() {
        // return document.documentElement.clientWidth;
        //egret.MainContext.instance.stage.stageWidth和egret.MainContext.instance.stage.stageHeight 
        // egret.log("WWWWWWWWWWWWWWWWW:" + document.documentElement.clientWidth + " -- " + egret.MainContext.instance.stage.stageWidth + " -- " + Main.W);
        return egret.MainContext.instance.stage.stageWidth;
    }
    Tools.getPhoneW = getPhoneW;
    //获取设备分辨率高
    function getPhoneH() {
        // return document.documentElement.clientHeight;
        // egret.log("HHHHHHHHHHHHHHHHH:" + document.documentElement.clientHeight + " -- " + egret.MainContext.instance.stage.stageHeight + " -- " + Main.H);
        return egret.MainContext.instance.stage.stageHeight;
    }
    Tools.getPhoneH = getPhoneH;
    //求两个点之间的向量
    function xiangliang(from, to, sd) {
        var jl = egret.Point.distance(to, from);
        var pi = sd / jl;
        var rx = (to.x - from.x) * pi;
        var ry = (to.y - from.y) * pi;
        return egret.Point.create(rx, ry);
    }
    Tools.xiangliang = xiangliang;
    //生成随机数
    function GetRandomNum(Min, Max) {
        var Range = Max - Min;
        var Rand = Math.random();
        return (Min + Math.round(Rand * Range));
    }
    Tools.GetRandomNum = GetRandomNum;
    //合并RGB
    function mergeColor(rgb) {
        return Math.floor(((rgb.r * 256) + rgb.g) * 256 + rgb.b);
    }
    Tools.mergeColor = mergeColor;
    //分解颜色
    function spliceColor(color) {
        var result = { r: -1, g: -1, b: -1 };
        result.b = color % 256;
        result.g = Math.floor((color / 256)) % 256;
        result.r = Math.floor((color / 256) / 256);
        return result;
    }
    Tools.spliceColor = spliceColor;
})(Tools || (Tools = {}));
var user;
(function (user) {
    // let d = new Date().getTime();
    // this.bitmap.texture = RES.getRes(name);
    var UserInfo = (function () {
        function UserInfo() {
        }
        //获取最大随机数
        UserInfo.getmax = function () {
            for (var i = 0; i < UserInfo.indx_number.length; i++) {
                if (UserInfo.add_number < UserInfo.indx_number[i]) {
                    return i - 1;
                }
            }
            return 9;
        };
        //保存金币
        UserInfo.saveJinBi = function (n) {
            UserInfo.all_number = n;
        };
        //保存天梯图
        UserInfo.saveTianTi = function (n) {
            UserInfo.wuqi_shengji_tianti[n] += 1;
        };
        UserInfo.add_number = 18; //拢共够买了几次
        UserInfo.indx_number = [-1, -1, -1, -1, 2, 4, 6, 8, 10, 12]; //够买次数对应开放的武器数量
        UserInfo.mei_ri_jiangli_time = 0; //每日奖励领取时间
        UserInfo.mei_ri_jiangli_time_cd = 1000 * 60 * 5; //奖励领取间隔 目前是 5个小时一次
        UserInfo.wuqi_shengji_tianti = [0, 1, 2, 0, 5, 0, 6, 0, 0, 0]; //武器升级天梯图
        //当前的总金币数量
        UserInfo.all_number = 1000;
        return UserInfo;
    }());
    user.UserInfo = UserInfo;
    __reflect(UserInfo.prototype, "user.UserInfo");
})(user || (user = {}));
var wuqi;
(function (wuqi) {
    var PuTongDan = (function (_super) {
        __extends(PuTongDan, _super);
        function PuTongDan(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_1", wuqi.WUQI_TYPE.PU_TONG, fc) || this;
            _this.sudu = 10;
            _this.level = level;
            return _this;
        }
        PuTongDan.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
            var zd = new zidan.PuTongZiDan(this.fc.battle_scene, GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0.0001);
            var p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            zd.position[0] = p.x;
            zd.position[1] = p.y;
            //画 重点
            var rx = Math.cos(this.fc.angle) * 0 + Math.sin(this.fc.angle) * this.sudu;
            var ry = -Math.sin(this.fc.angle) * 0 + Math.cos(this.fc.angle) * this.sudu;
            this.fc.battle_scene.world.addBody(zd);
            this.fc.battle_scene.addChild(zd.bitmap);
            zd.velocity = [rx, ry];
        };
        return PuTongDan;
    }(wuqi.WuQiBase));
    wuqi.PuTongDan = PuTongDan;
    __reflect(PuTongDan.prototype, "wuqi.PuTongDan");
})(wuqi || (wuqi = {}));
var ai;
(function (ai) {
    var MiaoZhun = (function (_super) {
        __extends(MiaoZhun, _super);
        function MiaoZhun(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //角速度
            _this.xs = 4;
            //需要转到的角度
            _this.angle = 0;
            _this.xs_hu = 1;
            //飞船实际需要面准的部位
            _this.jian_tou = -Math.PI * 0.5;
            return _this;
        }
        MiaoZhun.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            //角度测算
            this.angle = Math.atan2((this.fc.battle_scene.sk.position[1] - this.fc.position[1]), (this.fc.battle_scene.sk.position[0] - this.fc.position[0]));
            this.angle = this.angle % (Math.PI * 2);
            var jd = this.angle * 180 / Math.PI;
            if (this.angle < 0) {
                this.angle = Math.PI * 2 + this.angle;
            }
            var fcAng = this.fc.angle + this.jian_tou;
            //规范化角度数值
            fcAng = fcAng % (Math.PI * 2);
            if (fcAng < 0) {
                fcAng = Math.PI * 2 + fcAng;
            }
            var js = this.xs;
            //角度差距
            var jc = Math.abs(fcAng - this.angle);
            //方向计算
            if (fcAng >= this.angle) {
                if (jc > Math.PI) {
                    this.xs_hu = 1;
                }
                else {
                    this.xs_hu = -1;
                }
            }
            if (fcAng < this.angle) {
                if (jc > Math.PI) {
                    this.xs_hu = -1;
                }
                else {
                    this.xs_hu = 1;
                }
            }
            if (jc > (Math.PI + Math.PI * 0.5)) {
                jc = Math.PI * 2 - jc;
            }
            var pi = jc / Math.PI;
            js = this.xs * pi;
            if (jc < 0.05) {
                this.fc.angularVelocity = 0;
                return;
            }
            this.fc.angularVelocity = this.xs_hu * js;
        };
        return MiaoZhun;
    }(ai.AiBase));
    ai.MiaoZhun = MiaoZhun;
    __reflect(MiaoZhun.prototype, "ai.MiaoZhun");
})(ai || (ai = {}));
var djwq;
(function (djwq) {
    //直射类武器
    var DingWeiWuqi = (function (_super) {
        __extends(DingWeiWuqi, _super);
        function DingWeiWuqi(moKuaiPost, shapeType, bitName, fc, fx) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DING_WEI) || this;
            _this.fx = 1;
            _this.fx = fx;
            _this.wq_numb = 1;
            return _this;
        }
        // 1 前  2 后 3左 4右
        //射击
        DingWeiWuqi.prototype.fashe = function (angel, suke, now) {
            var angle;
            if (this.fx == 1) {
                angle = this.fc.angle;
            }
            if (this.fx == 2) {
                angle = this.fc.angle + 180 / 180 * Math.PI;
            }
            if (this.fx == 3) {
                angle = this.fc.angle - 90 / 180 * Math.PI;
            }
            if (this.fx == 4) {
                angle = this.fc.angle + 90 / 180 * Math.PI;
            }
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return DingWeiWuqi;
    }(djwq.DJWQBase));
    djwq.DingWeiWuqi = DingWeiWuqi;
    __reflect(DingWeiWuqi.prototype, "djwq.DingWeiWuqi");
})(djwq || (djwq = {}));
var djwq;
(function (djwq) {
    var DingWeiYouWuqi = (function (_super) {
        __extends(DingWeiYouWuqi, _super);
        function DingWeiYouWuqi(moKuaiPost, shapeType, bitName, fc) {
            return _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DING_WEI) || this;
        }
        //射击
        DingWeiYouWuqi.prototype.fashe = function (angel, suke, now) {
            var angle = this.fc.angle + (90 - 360) / 180 * Math.PI;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return DingWeiYouWuqi;
    }(djwq.DJWQBase));
    djwq.DingWeiYouWuqi = DingWeiYouWuqi;
    __reflect(DingWeiYouWuqi.prototype, "djwq.DingWeiYouWuqi");
})(djwq || (djwq = {}));
var djwq;
(function (djwq) {
    var DingWeiZuoWuqi = (function (_super) {
        __extends(DingWeiZuoWuqi, _super);
        function DingWeiZuoWuqi(moKuaiPost, shapeType, bitName, fc) {
            return _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DING_WEI) || this;
        }
        //射击
        DingWeiZuoWuqi.prototype.fashe = function (angel, suke, now) {
            var angle = this.fc.angle + (-90 - 360) / 180 * Math.PI;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            // sy = sy * -1;
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return DingWeiZuoWuqi;
    }(djwq.DJWQBase));
    djwq.DingWeiZuoWuqi = DingWeiZuoWuqi;
    __reflect(DingWeiZuoWuqi.prototype, "djwq.DingWeiZuoWuqi");
})(djwq || (djwq = {}));
var djwq;
(function (djwq) {
    var DJSanDanWuqi = (function (_super) {
        __extends(DJSanDanWuqi, _super);
        function DJSanDanWuqi(moKuaiPost, shapeType, bitName, fc, fx) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DJ_SAN_DAN) || this;
            _this.A0 = 0 * Math.PI / 180;
            _this.A5 = 5 * Math.PI / 180;
            _this.A10 = 10 * Math.PI / 180;
            _this.FA5 = -5 * Math.PI / 180;
            _this.FA10 = -10 * Math.PI / 180;
            _this.fx = fx;
            _this.wq_numb = 5;
            return _this;
        }
        //射击
        // 1 前  2 后 3左 4右
        DJSanDanWuqi.prototype.fashe = function (angel, suke, now) {
            var angle;
            if (this.fx == 1 || this.fx == 2) {
                angle = this.fc.angle;
            }
            if (this.fx == 3) {
                angle = this.fc.angle + (-90 - 360) / 180 * Math.PI;
            }
            if (this.fx == 4) {
                angle = this.fc.angle + (90 - 360) / 180 * Math.PI;
            }
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, this.getLiLiang(angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            this.diu(this.wuqi_type, this.getLiLiang(this.A5 + angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            this.diu(this.wuqi_type, this.getLiLiang(this.FA5 + angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            this.diu(this.wuqi_type, this.getLiLiang(this.A10 + angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
            this.diu(this.wuqi_type, this.getLiLiang(this.FA10 + angle), GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        DJSanDanWuqi.prototype.getLiLiang = function (angle) {
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            if (this.fx == 1) {
                sy = sy * -1;
            }
            return egret.Point.create(sx, sy);
        };
        return DJSanDanWuqi;
    }(djwq.DJWQBase));
    djwq.DJSanDanWuqi = DJSanDanWuqi;
    __reflect(DJSanDanWuqi.prototype, "djwq.DJSanDanWuqi");
})(djwq || (djwq = {}));
var ai;
(function (ai) {
    var MoveToAi = (function (_super) {
        __extends(MoveToAi, _super);
        function MoveToAi(fc, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //是否变换目标
            _this.is_u = true;
            // 巡逻坐标节点 下标
            _this.point_index = 0;
            // public su_du: number = 1;
            //误差范围
            _this.wu_cha = 1;
            return _this;
        }
        MoveToAi.prototype.doUpData = function (time) {
            if (!this.hang_up) {
                _super.prototype.doUpData.call(this, time);
                //计算 sk 与 宿主 之间的距离
                var jl = egret.Point.distance(egret.Point.create(this.points[this.point_index].x, this.points[this.point_index].y), egret.Point.create(this.fc.position[0], this.fc.position[1]));
                //在距离内 不施加动力
                if (jl < this.wu_cha) {
                    this.is_u = true;
                    this.point_index++;
                    if (this.point_index >= this.points.length) {
                        //是否为 循环巡逻
                        if (this.is_loop) {
                            this.point_index = 0;
                            this.fc.p2_target = this.points[this.point_index];
                            return;
                        }
                        else {
                            //挂起
                            this.hang_up = true;
                            //将目标清空
                            this.fc.p2_target = null;
                            return;
                        }
                    }
                    //设置新的目的地坐标
                    this.fc.p2_target = this.points[this.point_index];
                    return;
                }
                var x = void 0;
                var y = void 0;
                if (this.is_u) {
                    var angle = Math.atan2((this.suke.position[1] - this.fc.position[1]), (this.suke.position[0] - this.fc.position[0]));
                    //弹性版
                    this.rx = (this.points[this.point_index].x - this.fc.position[0]) * 0.1;
                    this.ry = (this.points[this.point_index].y - this.fc.position[1]) * 0.1;
                    this.is_u = false;
                }
                this.fc.velocity = [this.rx, this.ry];
            }
        };
        return MoveToAi;
    }(ai.AiBase));
    ai.MoveToAi = MoveToAi;
    __reflect(MoveToAi.prototype, "ai.MoveToAi");
})(ai || (ai = {}));
var djwq;
(function (djwq) {
    //直射类武器
    var GenZhongWuqi = (function (_super) {
        __extends(GenZhongWuqi, _super);
        function GenZhongWuqi(moKuaiPost, shapeType, bitName, fc, fx) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.GEN_ZHONG) || this;
            _this.small_cd = 2000;
            _this.mark_small_time = 0;
            //每次发射的数量
            _this.shu_liang = 0;
            _this.shu_liang_mark = 5;
            _this.fx = 1;
            _this.shu_liang_mark = 5;
            _this.shu_liang = _this.shu_liang_mark;
            _this.sudu = 1.2;
            _this.fx = fx;
            _this.wq_numb = 3;
            return _this;
        }
        // 1 前  2 后 3左 4右
        //射击
        GenZhongWuqi.prototype.fashe = function (angel, suke, now) {
            var angle;
            if (this.fx == 1 || this.fx == 2) {
                angle = this.fc.angle;
            }
            if (this.fx == 3) {
                angle = this.fc.angle + (-90 - 360) / 180 * Math.PI;
            }
            if (this.fx == 4) {
                angle = this.fc.angle + (90 - 360) / 180 * Math.PI;
            }
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            if (this.fx == 1) {
                sy = sy * -1;
            }
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return GenZhongWuqi;
    }(djwq.DJWQBase));
    djwq.GenZhongWuqi = GenZhongWuqi;
    __reflect(GenZhongWuqi.prototype, "djwq.GenZhongWuqi");
})(djwq || (djwq = {}));
var djwq;
(function (djwq) {
    var HouSheWuqi = (function (_super) {
        __extends(HouSheWuqi, _super);
        function HouSheWuqi(moKuaiPost, shapeType, bitName, fc) {
            return _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.DING_WEI) || this;
        }
        //射击
        HouSheWuqi.prototype.fashe = function (angel, suke, now) {
            var angle = this.fc.angle;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return HouSheWuqi;
    }(djwq.DJWQBase));
    djwq.HouSheWuqi = HouSheWuqi;
    __reflect(HouSheWuqi.prototype, "djwq.HouSheWuqi");
})(djwq || (djwq = {}));
var djwq;
(function (djwq) {
    //直射类武器
    var JianSuWuqi = (function (_super) {
        __extends(JianSuWuqi, _super);
        function JianSuWuqi(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.JIAN_SU) || this;
            _this.sudu = 25;
            _this.wq_numb = 4;
            return _this;
        }
        //射击
        JianSuWuqi.prototype.fashe = function (angel, suke, now) {
            var angle = this.fc.angle;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            var xx = -(this.fc.position[0] - suke.position[0]);
            var xy = -(this.fc.position[1] - suke.position[1]);
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return JianSuWuqi;
    }(djwq.DJWQBase));
    djwq.JianSuWuqi = JianSuWuqi;
    __reflect(JianSuWuqi.prototype, "djwq.JianSuWuqi");
})(djwq || (djwq = {}));
var djwq;
(function (djwq) {
    var JG_TYPE;
    (function (JG_TYPE) {
        JG_TYPE[JG_TYPE["WU"] = 0] = "WU";
        JG_TYPE[JG_TYPE["ZHAO"] = 1] = "ZHAO";
        JG_TYPE[JG_TYPE["GONG"] = 2] = "GONG";
        JG_TYPE[JG_TYPE["TIAO_ZHENG"] = 3] = "TIAO_ZHENG";
    })(JG_TYPE || (JG_TYPE = {}));
    //直射类武器
    var JiGuangWuqi = (function (_super) {
        __extends(JiGuangWuqi, _super);
        function JiGuangWuqi(moKuaiPost, shapeType, bitName, fc) {
            var _this = _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.JI_GUANG) || this;
            _this.result = new p2.RaycastResult();
            _this.rayClosest = new p2.Ray({
                mode: p2.Ray.CLOSEST
            });
            _this.hitPoint = p2.vec2.create();
            //射线宽度
            _this.kuan = 10;
            _this.kuan_mark = 0;
            _this.kuan_more = 20;
            //激光标记次数
            _this.hit_mark = 0;
            _this.is_hit = false;
            _this.shp = new egret.Shape();
            _this.dj = null;
            _this.egP = null;
            _this.rayClosest.collisionGroup = GameConstant.DI_JUN_ZIDAN;
            _this.rayClosest.collisionMask = GameConstant.WO_JUN | GameConstant.ZHONG_LI;
            _this.wq_numb = 2;
            return _this;
        }
        JiGuangWuqi.prototype.updata = function () {
            //攻击
            if (this.hit_mark > 0 && this.kuan_mark <= 0) {
                if (this.dj && !this.is_hit && this.egP) {
                    if (this.dj instanceof shuke.ShuKe) {
                        var sk = this.dj;
                        sk.bei_da();
                    }
                    else {
                        this.dj.checkCollision(this.egP.x, this.egP.y, this.hit);
                    }
                    this.dj = null;
                    this.egP = null;
                }
                this.is_hit = true;
                this.kuan_mark = 0;
                this.huizhikd(5, 0xffff00, 0.5);
                //清理
                egret.Tween.get(this.shp).to({ "alpha": 0.1 }, 600).call(this.clear, this);
                this.hit_mark = 0;
            }
            if (this.kuan_mark <= 0) {
                if (this.shp.parent && !this.is_hit) {
                    this.fc.battle_scene.removeChild(this.shp);
                }
                return;
            }
            var pi = this.kuan_mark / this.kuan_more;
            this.huizhikd(this.kuan * pi, 0x4F9DFF, 0.5);
            this.kuan_mark--;
        };
        //射击
        JiGuangWuqi.prototype.fashe = function (angel, suke, now) {
            this.fc.battle_scene.addChild(this.shp);
            this.kuan_mark = this.kuan_more;
            this.is_hit = false;
            this.hit_mark = 0;
        };
        // 宽度  颜色  透明度
        JiGuangWuqi.prototype.huizhikd = function (kd, color, alpha) {
            // 计算碰撞点
            var p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            var angle = this.fc.angle;
            var sx = Math.sin(angle) * 20;
            var sy = Math.cos(angle) * 20;
            // sy = sy * -1;
            //无碰撞目标点
            var pTo = egret.Point.create(p.x + sx, p.y - sy);
            this.rayClosest.from = [p.x, p.y];
            this.rayClosest.to = [p.x + sx, p.y - sy];
            this.rayClosest.update();
            this.result.reset();
            this.fc.battle_scene.world.raycast(this.result, this.rayClosest);
            this.result.getHitPoint(this.hitPoint, this.rayClosest);
            // 2画线
            if (this.result.hasHit) {
                this.dj = this.result.body;
                if (this.dj) {
                    this.egP = Tools.p2TOegretPoitn(egret.Point.create(this.hitPoint[0], this.hitPoint[1]));
                    this.hit_mark++;
                }
                else {
                    this.egP = Tools.p2TOegretPoitn(pTo);
                    this.hit_mark = 0;
                }
            }
            //清理
            this.shp.graphics.clear();
            //重绘
            this.shp.graphics.lineStyle(kd, color);
            this.shp.graphics.moveTo(this.x, this.y);
            this.shp.graphics.lineTo(this.egP.x, this.egP.y);
            this.shp.graphics.endFill();
            this.shp.alpha = alpha;
        };
        JiGuangWuqi.prototype.clear = function () {
            if (!this.shp) {
                return;
            }
            this.shp.graphics.clear();
            if (this.shp.parent)
                this.fc.battle_scene.removeChild(this.shp);
            this.is_hit = false;
        };
        JiGuangWuqi.prototype.remove_ = function () {
            if (!this.shp) {
                return;
            }
            this.shp.graphics.clear();
            if (this.shp.parent)
                this.fc.battle_scene.removeChild(this.shp);
            this.is_hit = false;
            this.shp = null;
        };
        return JiGuangWuqi;
    }(djwq.DJWQBase));
    djwq.JiGuangWuqi = JiGuangWuqi;
    __reflect(JiGuangWuqi.prototype, "djwq.JiGuangWuqi");
})(djwq || (djwq = {}));
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
                    _super.prototype.fashe.call(this, angel, suke, now);
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
var djwq;
(function (djwq) {
    //直射类武器
    var ZhiSheWuQi = (function (_super) {
        __extends(ZhiSheWuQi, _super);
        function ZhiSheWuQi(moKuaiPost, shapeType, bitName, fc) {
            return _super.call(this, fc, moKuaiPost, shapeType, bitName, wuqi.WUQI_TYPE.ZHI_SHE) || this;
        }
        //射击
        ZhiSheWuQi.prototype.fashe = function (angel, suke, now) {
            var angle = Math.atan2((suke.position[1] - this.fc.position[1]), (suke.position[0] - this.fc.position[0])) + Math.PI * 0.5;
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            if (suke.position[1] < this.fc.position[1]) {
                sy = sy * -1;
            }
            var xx = -(this.fc.position[0] - suke.position[0]);
            var xy = -(this.fc.position[1] - suke.position[1]);
            // let liliang = Tools.bilv(xx, xy, 5);
            var liliang = egret.Point.create(sx, sy);
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.DI_JUN_ZIDAN, angle);
        };
        return ZhiSheWuQi;
    }(djwq.DJWQBase));
    djwq.ZhiSheWuQi = ZhiSheWuQi;
    __reflect(ZhiSheWuQi.prototype, "djwq.ZhiSheWuQi");
})(djwq || (djwq = {}));
var wjwq;
(function (wjwq) {
    var ChangDingWuqi = (function (_super) {
        __extends(ChangDingWuqi, _super);
        function ChangDingWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_8", wuqi.WUQI_TYPE.CHANG_DING, fc) || this;
            _this.level = level;
            _this.cd = 2000;
            _this.sudu = 1;
            return _this;
        }
        ChangDingWuqi.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, egret.Point.create(0, this.sudu), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.fc.angle);
        };
        return ChangDingWuqi;
    }(wuqi.WuQiBase));
    wjwq.ChangDingWuqi = ChangDingWuqi;
    __reflect(ChangDingWuqi.prototype, "wjwq.ChangDingWuqi");
})(wjwq || (wjwq = {}));
var wjwq;
(function (wjwq) {
    var DaoDanWuqi = (function (_super) {
        __extends(DaoDanWuqi, _super);
        function DaoDanWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_3", wuqi.WUQI_TYPE.DAO_DAN, fc) || this;
            _this.small_cd = 2000;
            _this.mark_small_time = 0;
            //每次发射的数量
            _this.shu_liang = 0;
            _this.shu_liang_mark = 1;
            _this.level = level;
            // this.shu_liang_mark = level;
            _this.cd = 150;
            return _this;
        }
        DaoDanWuqi.prototype.fashe = function (angel, suke, now) {
            if ((now - this.mark_small_time) > this.small_cd) {
                if (this.shu_liang > 0) {
                    var angle = this.fc.angle;
                    var liliang = egret.Point.create(0, -5);
                    if (this.mark_tiaget()) {
                        _super.prototype.fashe.call(this, angel, suke, now);
                        this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.WO_JUN_ZIDAN, angle);
                    }
                    this.shu_liang--;
                }
                else {
                    this.mark_small_time = now + this.small_cd;
                    this.shu_liang = this.shu_liang_mark;
                }
            }
        };
        //标记最近的飞船
        DaoDanWuqi.prototype.mark_tiaget = function () {
            var zj;
            var jl = -1;
            for (var _i = 0, _a = this.fc.battle_scene.dijis; _i < _a.length; _i++) {
                var ff = _a[_i];
                if (!zj) {
                    zj = ff;
                    if (ff.hx) {
                        jl = egret.Point.distance(egret.Point.create(ff.hx.x, ff.hx.y), egret.Point.create(this.fc.dd.x, this.fc.dd.y));
                    }
                    continue;
                }
                //根据 距离判断先打哪个飞机
                var ju_li = egret.Point.distance(egret.Point.create(ff.hx.x, ff.hx.y), egret.Point.create(this.fc.dd.x, this.fc.dd.y));
                if (ju_li < jl) {
                    zj = ff;
                }
            }
            if (zj) {
                this.tiaget_fc = zj;
                return true;
            }
            return false;
        };
        return DaoDanWuqi;
    }(wuqi.WuQiBase));
    wjwq.DaoDanWuqi = DaoDanWuqi;
    __reflect(DaoDanWuqi.prototype, "wjwq.DaoDanWuqi");
})(wjwq || (wjwq = {}));
var wjwq;
(function (wjwq) {
    var JiGuangWuqi = (function (_super) {
        __extends(JiGuangWuqi, _super);
        function JiGuangWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_4", wuqi.WUQI_TYPE.DAO_DAN, fc) || this;
            _this.result = new p2.RaycastResult();
            //射线宽度
            _this.kuan = 10;
            _this.kuan_mark = 0;
            _this.kuan_more = 20;
            //激光标记次数
            _this.hit_mark = 0;
            _this.is_hit = false;
            _this.shp = new egret.Shape();
            _this.rayClosest = new p2.Ray({
                mode: p2.Ray.CLOSEST
            });
            _this.hitPoint = p2.vec2.create();
            _this.dj = null;
            _this.egP = null;
            _this.level = level;
            _this.cd = 2000;
            _this.rayClosest.collisionGroup = GameConstant.WO_JUN_ZIDAN;
            _this.rayClosest.collisionMask = GameConstant.DI_JUN | GameConstant.ZHONG_LI;
            return _this;
        }
        JiGuangWuqi.prototype.updata = function () {
            //攻击
            if (this.hit_mark > 0 && this.kuan_mark <= 0) {
                this.kuan_mark = 0;
                this.huizhikd(5, 0x23FF49, 0.5);
                if (this.dj && this.egP && !this.is_hit) {
                    this.dj.checkCollision(this.egP.x, this.egP.y, this.hit);
                    this.dj = null;
                    this.egP = null;
                }
                this.is_hit = true;
                //清理
                egret.Tween.get(this.shp).to({ "alpha": 0.1 }, 600).call(this.clear, this);
                this.hit_mark = 0;
            }
            if (this.kuan_mark <= 0) {
                if (this.shp.parent && !this.is_hit) {
                    this.fc.battle_scene.removeChild(this.shp);
                }
                return;
            }
            var pi = this.kuan_mark / this.kuan_more;
            this.huizhikd(this.kuan * pi, 0x23FF49, 0.5);
            this.kuan_mark--;
        };
        //射击
        JiGuangWuqi.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
            this.fc.battle_scene.addChild(this.shp);
            this.kuan_mark = this.kuan_more;
            this.is_hit = false;
            this.hit_mark = 0;
        };
        // 宽度  颜色  透明度
        JiGuangWuqi.prototype.huizhikd = function (kd, color, alpha) {
            // 计算碰撞点
            var p = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            var angle = this.fc.angle;
            var sx = Math.sin(angle) * 20;
            var sy = Math.cos(angle) * 20;
            // sy = sy * -1;
            //无碰撞目标点
            var pTo = egret.Point.create(p.x + sx, p.y + sy);
            this.rayClosest.from = [p.x, p.y];
            this.rayClosest.to = [p.x + sx, p.y + sy];
            this.rayClosest.update();
            this.result.reset();
            this.fc.battle_scene.world.raycast(this.result, this.rayClosest);
            this.result.getHitPoint(this.hitPoint, this.rayClosest);
            // 2画线
            if (this.result.hasHit) {
                this.dj = this.result.body;
                if (this.dj) {
                    this.egP = Tools.p2TOegretPoitn(egret.Point.create(this.hitPoint[0], this.hitPoint[1]));
                    this.hit_mark++;
                }
                else {
                    this.egP = Tools.p2TOegretPoitn(pTo);
                    this.hit_mark = 0;
                }
            }
            //清理
            this.shp.graphics.clear();
            //重绘
            this.shp.graphics.lineStyle(kd, color);
            this.shp.graphics.moveTo(this.x, this.y);
            this.shp.graphics.lineTo(this.egP.x, this.egP.y);
            this.shp.graphics.endFill();
            this.shp.alpha = alpha;
        };
        JiGuangWuqi.prototype.clear = function () {
            if (!this.shp) {
                return;
            }
            this.shp.graphics.clear();
            if (this.shp.parent)
                this.fc.battle_scene.removeChild(this.shp);
            this.is_hit = false;
        };
        JiGuangWuqi.prototype.remove_ = function () {
            if (!this.shp) {
                return;
            }
            this.shp.graphics.clear();
            if (this.shp.parent)
                this.fc.battle_scene.removeChild(this.shp);
            this.is_hit = false;
            this.shp = null;
        };
        return JiGuangWuqi;
    }(wuqi.WuQiBase));
    wjwq.JiGuangWuqi = JiGuangWuqi;
    __reflect(JiGuangWuqi.prototype, "wjwq.JiGuangWuqi");
})(wjwq || (wjwq = {}));
var wjwq;
(function (wjwq) {
    var LuoXuanWuqi = (function (_super) {
        __extends(LuoXuanWuqi, _super);
        function LuoXuanWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_7", wuqi.WUQI_TYPE.LUO_XUAN, fc) || this;
            _this.zd1 = null;
            _this.zd2 = null;
            _this.zd3 = null;
            _this.zd4 = null;
            _this.zd5 = null;
            //当前螺旋子弹的数量
            _this.zd_number = 0;
            _this.level = level;
            _this.cd = 5000;
            return _this;
        }
        LuoXuanWuqi.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
            if (this.level < 3 && this.zd_number == 3) {
                return;
            }
            if (this.level < 5 && this.zd_number == 4) {
                return;
            }
            if (this.zd_number == 5) {
                return;
            }
            var zd = this.diu(this.wuqi_type, egret.Point.create(0, 0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0);
            //添加子弹
            this.addZD(zd);
        };
        LuoXuanWuqi.prototype.removeZD = function (n) {
            this.zd_number--;
            if (n == 1) {
                this.zd1 = null;
            }
            if (n == 2) {
                this.zd2 = null;
            }
            if (n == 3) {
                this.zd3 = null;
            }
            if (n == 4) {
                this.zd4 = null;
            }
            if (n == 5) {
                this.zd5 = null;
            }
        };
        //添加子弹
        LuoXuanWuqi.prototype.addZD = function (zd) {
            this.zd_number++;
            if (this.zd1 == null) {
                this.zd1 = zd;
                this.zd1.hao_ma = 1;
                this.zd1.wu = this;
                this.zd1.wz = 0;
                return;
            }
            if (this.zd2 == null) {
                this.zd2 = zd;
                this.zd2.hao_ma = 2;
                this.zd2.wu = this;
                this.zd2.wz = this.getAngle();
                return;
            }
            if (this.zd3 == null) {
                this.zd3 = zd;
                this.zd3.hao_ma = 3;
                this.zd3.wu = this;
                this.zd3.wz = this.getAngle() * 2;
                return;
            }
            if (this.level >= 3) {
                if (this.zd4 == null) {
                    this.zd4 = zd;
                    this.zd4.hao_ma = 4;
                    this.zd4.wu = this;
                    this.zd4.wz = this.getAngle() * 3;
                    return;
                }
            }
            if (this.level == 5) {
                if (this.zd5 == null) {
                    this.zd5 = zd;
                    this.zd5.hao_ma = 5;
                    this.zd5.wu = this;
                    this.zd5.wz = this.getAngle() * 4;
                    return;
                }
            }
        };
        LuoXuanWuqi.prototype.getAngle = function () {
            if (this.level >= 3 && this.level < 5) {
                return Math.PI * 2 / 4;
            }
            if (this.level == 5) {
                return Math.PI * 2 / 5;
            }
            return Math.PI * 2 / 3;
        };
        return LuoXuanWuqi;
    }(wuqi.WuQiBase));
    wjwq.LuoXuanWuqi = LuoXuanWuqi;
    __reflect(LuoXuanWuqi.prototype, "wjwq.LuoXuanWuqi");
})(wjwq || (wjwq = {}));
var wjwq;
(function (wjwq) {
    var PaoTaiWuqi = (function (_super) {
        __extends(PaoTaiWuqi, _super);
        function PaoTaiWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_5", wuqi.WUQI_TYPE.DING_XIANG, fc) || this;
            _this.small_cd = 1000;
            _this.mark_small_time = 0;
            //每次发射的数量
            _this.shu_liang = 0;
            _this.shu_liang_mark = 5;
            _this.level = level;
            _this.shu_liang_mark = level;
            _this.cd = 2000;
            _this.sudu = 9;
            _this.lianji = level;
            _this.lianji_mark = _this.lianji;
            return _this;
        }
        PaoTaiWuqi.prototype.fashe = function (angel, suke, now) {
            // if ((now - this.mark_small_time) > this.small_cd) {
            //     if (this.shu_liang > 0) {
            var zj = this.mark_tiaget();
            if (zj && zj.hx) {
                var angel_1 = this.getAngel(zj);
                var liliang = this.getLiliang(zj, angel_1);
                //发射子弹
                _super.prototype.fashe.call(this, angel_1, suke, now);
                this.diu(this.wuqi_type, liliang, GameConstant.ZHEN_YING.WO_JUN_ZIDAN, angel_1);
            }
            //     this.shu_liang--;
            // } else {
            //     this.mark_small_time = now + this.small_cd;
            //     this.shu_liang = this.shu_liang_mark;
            // }
            // }
        };
        //计算角度
        PaoTaiWuqi.prototype.getAngel = function (zj) {
            var hx = Tools.egretTOp2(egret.Point.create(zj.hx.x, zj.hx.y));
            var wq = Tools.egretTOp2(egret.Point.create(this.x, this.y));
            return Math.atan2((hx.y - wq.y), (hx.x - wq.x)) + Math.PI * 0.5;
        };
        //标记最近的飞船
        PaoTaiWuqi.prototype.mark_tiaget = function () {
            var zj;
            var jl = -1;
            for (var _i = 0, _a = this.fc.battle_scene.dijis; _i < _a.length; _i++) {
                var ff = _a[_i];
                if (!ff) {
                    return;
                }
                if (!ff.hx) {
                    return;
                }
                if (!zj) {
                    zj = ff;
                    if (ff.hx) {
                        jl = egret.Point.distance(egret.Point.create(ff.hx.x, ff.hx.y), egret.Point.create(this.fc.pt.x, this.fc.pt.y));
                    }
                    continue;
                }
                //根据 距离判断先打哪个飞机
                var ju_li = egret.Point.distance(egret.Point.create(ff.hx.x, ff.hx.y), egret.Point.create(this.fc.pt.x, this.fc.pt.y));
                if (ju_li < jl) {
                    zj = ff;
                }
            }
            if (zj) {
                return zj;
            }
            return null;
        };
        // 获取设计向量
        PaoTaiWuqi.prototype.getLiliang = function (zj, angle) {
            if (zj) {
                var sx = Math.sin(angle) * this.sudu;
                var sy = Math.cos(angle) * this.sudu;
                sy *= -1;
                var liliang = egret.Point.create(sx, sy);
                return liliang;
            }
            return null;
        };
        return PaoTaiWuqi;
    }(wuqi.WuQiBase));
    wjwq.PaoTaiWuqi = PaoTaiWuqi;
    __reflect(PaoTaiWuqi.prototype, "wjwq.PaoTaiWuqi");
})(wjwq || (wjwq = {}));
var wjwq;
(function (wjwq) {
    var SanDanWuqi = (function (_super) {
        __extends(SanDanWuqi, _super);
        function SanDanWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_2", wuqi.WUQI_TYPE.SAN_DAN, fc) || this;
            _this.A0 = 0 * Math.PI / 180;
            _this.A5 = 5 * Math.PI / 180;
            _this.A10 = 10 * Math.PI / 180;
            _this.A15 = 15 * Math.PI / 180;
            _this.FA5 = -5 * Math.PI / 180;
            _this.FA10 = -10 * Math.PI / 180;
            _this.FA15 = -15 * Math.PI / 180;
            _this.level = level;
            _this.cd = 2000;
            return _this;
        }
        SanDanWuqi.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
            if (this.level >= 1) {
                this.diu(this.wuqi_type, this.getLiliang(this.A5), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A5);
                this.diu(this.wuqi_type, this.getLiliang(this.FA5), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.FA5);
            }
            if (this.level >= 3) {
                // this.diu(this.wuqi_type, this.getLiliang(this.A0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A0);
                this.diu(this.wuqi_type, this.getLiliang(this.A10), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A10);
                this.diu(this.wuqi_type, this.getLiliang(this.FA10), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.FA10);
            }
            if (this.level >= 5) {
                this.diu(this.wuqi_type, this.getLiliang(this.A0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A0);
                this.diu(this.wuqi_type, this.getLiliang(this.A15), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.A15);
                this.diu(this.wuqi_type, this.getLiliang(this.FA15), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.FA15);
            }
        };
        SanDanWuqi.prototype.getLiliang = function (angel) {
            return egret.Point.create(Math.sin(-angel) * this.sudu, Math.cos(-angel) * this.sudu);
        };
        return SanDanWuqi;
    }(wuqi.WuQiBase));
    wjwq.SanDanWuqi = SanDanWuqi;
    __reflect(SanDanWuqi.prototype, "wjwq.SanDanWuqi");
})(wjwq || (wjwq = {}));
var wjwq;
(function (wjwq) {
    var YuLeiWuqi = (function (_super) {
        __extends(YuLeiWuqi, _super);
        function YuLeiWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_6", wuqi.WUQI_TYPE.YU_LEI, fc) || this;
            _this.small_cd = 5000;
            _this.mark_small_time = 0;
            //每次发射的数量
            _this.shu_liang = 0;
            _this.shu_liang_mark = 5;
            _this.level = level;
            _this.cd = 800;
            _this.shu_liang_mark += level;
            _this.shu_liang = _this.shu_liang_mark;
            return _this;
        }
        YuLeiWuqi.prototype.fashe = function (angel, suke, now) {
            now = egret.getTimer();
            //发射鱼雷
            if ((now - this.mark_small_time) > this.small_cd) {
                if (this.shu_liang > 0) {
                    //发射子弹
                    _super.prototype.fashe.call(this, angel, suke, now);
                    this.diu(this.wuqi_type, egret.Point.create(0, 0), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, 0);
                }
                else {
                    this.mark_small_time = now + this.small_cd;
                    this.shu_liang = this.shu_liang_mark;
                }
                this.shu_liang--;
            }
        };
        return YuLeiWuqi;
    }(wuqi.WuQiBase));
    wjwq.YuLeiWuqi = YuLeiWuqi;
    __reflect(YuLeiWuqi.prototype, "wjwq.YuLeiWuqi");
})(wjwq || (wjwq = {}));
var wjwq;
(function (wjwq) {
    var ZhongChuiWuqi = (function (_super) {
        __extends(ZhongChuiWuqi, _super);
        function ZhongChuiWuqi(mokaiPos, shType, fc, level) {
            var _this = _super.call(this, mokaiPos, shType, "us_wq_9", wuqi.WUQI_TYPE.ZHONG_CHUI, fc) || this;
            _this.level = level;
            _this.cd = 2000;
            return _this;
        }
        ZhongChuiWuqi.prototype.fashe = function (angel, suke, now) {
            _super.prototype.fashe.call(this, angel, suke, now);
            this.diu(this.wuqi_type, egret.Point.create(0, this.sudu), GameConstant.ZHEN_YING.WO_JUN_ZIDAN, this.fc.angle);
        };
        return ZhongChuiWuqi;
    }(wuqi.WuQiBase));
    wjwq.ZhongChuiWuqi = ZhongChuiWuqi;
    __reflect(ZhongChuiWuqi.prototype, "wjwq.ZhongChuiWuqi");
})(wjwq || (wjwq = {}));
var zhuangtaiji;
(function (zhuangtaiji) {
    var WuQiAiInfo = (function () {
        function WuQiAiInfo(da_num, da_jian_ge, xiao_num, xiao_jian_ge, she_su, wq_type, nan_du) {
            this.da_num_mark = 0;
            this.xiao_num_mark = 0;
            this.is_xiao = false;
            // 1 2 3个档次 小 中 大  大小跟难度相关 之后 做转换
            this.zi_dan_da_xiao = 2;
            //跟子弹威力相关 跟子弹威力系数想关
            this.nan_du = 0;
            //延迟
            this.yan_chi = 0;
            this.da_num = da_num;
            this.da_jian_ge = da_jian_ge;
            this.xiao_num = xiao_num;
            this.xiao_jian_ge = xiao_jian_ge;
            this.she_su = she_su % 100;
            this.wq_type = wq_type;
            this.da_ge_mark = egret.getTimer() + (she_su - this.she_su);
            this.yan_chi = (she_su - this.she_su);
            this.xiao_ge_mark = egret.getTimer();
            if (nan_du) {
                this.nan_du = nan_du;
            }
        }
        //重新设置cd
        WuQiAiInfo.prototype.initCD = function () {
            this.da_ge_mark = egret.getTimer() - this.da_jian_ge + this.yan_chi;
            this.da_num_mark = 0;
            this.xiao_num_mark = 0;
        };
        return WuQiAiInfo;
    }());
    zhuangtaiji.WuQiAiInfo = WuQiAiInfo;
    __reflect(WuQiAiInfo.prototype, "zhuangtaiji.WuQiAiInfo");
})(zhuangtaiji || (zhuangtaiji = {}));
var ai;
(function (ai) {
    var RANDOM_POINT;
    (function (RANDOM_POINT) {
        RANDOM_POINT[RANDOM_POINT["x"] = 0] = "x";
        RANDOM_POINT[RANDOM_POINT["y"] = 1] = "y";
        RANDOM_POINT[RANDOM_POINT["all"] = 2] = "all"; //左右方向
    })(RANDOM_POINT = ai.RANDOM_POINT || (ai.RANDOM_POINT = {}));
    var RandomPointAi = (function (_super) {
        __extends(RandomPointAi, _super);
        function RandomPointAi(fc, r, d_limit, mt, xz, mz) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            _this.is_u = true;
            _this.d_limit = d_limit;
            _this.random_type = r;
            _this.r_point = _this.random_p();
            return _this;
        }
        RandomPointAi.prototype.doUpData = function (time) {
            //计算 sk 与 宿主 之间的距离
            var jl = egret.Point.distance(egret.Point.create(this.r_point.x, this.r_point.y), egret.Point.create(this.fc.position[0], this.fc.position[1]));
            if (jl < 0.3) {
                this.r_point = this.random_p();
                this.is_u = true;
            }
            if (this.is_u) {
                var angle = Math.atan2((this.suke.position[1] - this.fc.position[1]), (this.suke.position[0] - this.fc.position[0]));
                //弹性版
                this.rx = (this.r_point.x - this.fc.position[0]) * 0.1;
                this.ry = (this.r_point.y - this.fc.position[1]) * 0.1;
                this.is_u = false;
            }
            this.fc.velocity = [this.rx, this.ry];
        };
        RandomPointAi.prototype.random_p = function () {
            var x = Math.random() * this.d_limit * 2 - this.d_limit;
            var y = Math.random() * this.d_limit * 2 - this.d_limit;
            if (this.random_type == RANDOM_POINT.x) {
                return egret.Point.create(this.fc.position[0] + x, this.fc.position[1]);
            }
            if (this.random_type == RANDOM_POINT.y) {
                return egret.Point.create(this.fc.position[0], this.fc.position[1] + y);
            }
            if (this.random_type == RANDOM_POINT.all) {
                return egret.Point.create(this.fc.position[0] + x, this.fc.position[1] + y);
            }
            return null;
        };
        return RandomPointAi;
    }(ai.AiBase));
    ai.RandomPointAi = RandomPointAi;
    __reflect(RandomPointAi.prototype, "ai.RandomPointAi");
})(ai || (ai = {}));
var zhuangtaiji;
(function (zhuangtaiji) {
    var ZhuangTaiJiInfoBean = (function () {
        //目标坐标  三种状态机类型 以及参数 达成成后休眠时间  
        function ZhuangTaiJiInfoBean(pos, mT, mZ, gjT, mT_xs, mZ_xs, gjT_xs, move_time, sleep_time, mb, is_loop) {
            //是否参与循环
            this.is_loop = true;
            this.pos = Tools.gridTop2(pos.x, pos.y);
            this.mT = mT;
            this.mZ = mZ;
            this.gjT = gjT;
            this.mT_xs = mT_xs;
            this.mZ_xs = mZ_xs;
            this.gjT_xs = gjT_xs;
            this.move_time = move_time;
            this.sleep_time = sleep_time;
            this.mb = mb;
            if (is_loop) {
                this.is_loop = false;
            }
            else {
                this.is_loop = true;
            }
        }
        return ZhuangTaiJiInfoBean;
    }());
    zhuangtaiji.ZhuangTaiJiInfoBean = ZhuangTaiJiInfoBean;
    __reflect(ZhuangTaiJiInfoBean.prototype, "zhuangtaiji.ZhuangTaiJiInfoBean");
})(zhuangtaiji || (zhuangtaiji = {}));
var duixing;
(function (duixing) {
    var DuiXingBase = (function (_super) {
        __extends(DuiXingBase, _super);
        function DuiXingBase() {
            return _super.call(this) || this;
        }
        return DuiXingBase;
    }(zhuangtaiji.ZhuangTaiJiBase));
    duixing.DuiXingBase = DuiXingBase;
    __reflect(DuiXingBase.prototype, "duixing.DuiXingBase");
})(duixing || (duixing = {}));
var ai;
(function (ai) {
    var ShiJianYiDongAi = (function (_super) {
        __extends(ShiJianYiDongAi, _super);
        function ShiJianYiDongAi(fc, mt, xz, mz, run_time, time_, xs) {
            var _this = _super.call(this, fc, mt, xz, mz) || this;
            //减速次数上线
            _this.jian_su_num = 20;
            //减速标记
            _this.jian_su_x_mark = 0;
            _this.jian_su_y_mark = 0;
            //力量对速度的印象
            _this.jian_su_li_pi = 5 * 1.8;
            //实际作用力
            _this.jian_su_li = 5;
            //达成
            _this.x_da_cheng = false;
            _this.y_da_cheng = false;
            //作用力
            _this.force_x = 0;
            _this.force_y = 0;
            //总距离
            _this.zong_ju_li_x = 0;
            _this.zong_ju_li_y = 0;
            _this.yp = 0;
            _this.cs_y = 0;
            _this.start_pos = egret.Point.create(_this.fc.position[0], _this.fc.position[1]);
            _this.time_ = time_;
            _this.xs = xs;
            _this.max_time = xs * 1000;
            //初始化 减速参数
            _this.zong_ju_li_x = Math.abs(_this.fc.position[0] - _this.fc.toPoint.x);
            _this.zong_ju_li_y = Math.abs(_this.fc.position[1] - _this.fc.toPoint.y);
            _this.mark_y = egret.getTimer();
            _this.max_force = _this.fc.cs_mass * 1; //( 力与质量 1：1)
            return _this;
            //公式 
            //S=V(初)*T-1/2at^2
            //Vt＝Vo+at 
            //f1.8=ma
            //a=(f*1.8)/m
            //f=(m*a)/1.8
        }
        //----------------------------初始减速----------------------------------
        ShiJianYiDongAi.prototype.cs_jansu_x = function () {
            if (this.mu_biao_wz_X == 1 && this.fc.velocity[0] < 0) {
                return;
            }
            if (this.mu_biao_wz_X == 3 && this.fc.velocity[0] > 0) {
                return;
            }
            if (Math.abs(this.fc.velocity[0]) < 0.01) {
                return;
            }
            // egret.log("XXXXXXJJJJJJJJJJJ")
            this.x_jian_su();
        };
        ShiJianYiDongAi.prototype.cs_jansu_y = function () {
            if (this.mu_biao_wz_Y == 1 && this.fc.velocity[1] < 0) {
                return;
            }
            if (this.mu_biao_wz_Y == 3 && this.fc.velocity[1] > 0) {
                return;
            }
            if (Math.abs(this.fc.velocity[1]) < 0.01) {
                return;
            }
            // egret.log("YYYYYYYYYJJJJJJJJJJJ")
            this.y_jian_su();
        };
        //------------------------------------------------------------------
        //更新状态
        ShiJianYiDongAi.prototype.upType = function () {
            //位置达到
            if (!this.x_da_cheng) {
                this.x_da_cheng = this.is_x_over();
                this.x_type = 3;
            }
            if (!this.y_da_cheng) {
                this.y_da_cheng = this.is_y_over();
                this.y_type = 3;
            }
            if (this.x_da_cheng) {
                this.x_type = 1;
                // egret.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:" + (egret.getTimer() - this.mark_y));
            }
            if (this.y_da_cheng) {
                this.y_type = 1;
                // egret.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY:" + (egret.getTimer() - this.mark_y));
            }
        };
        //----------------------------减速---------------------------------------
        ShiJianYiDongAi.prototype.x_jian_su = function () {
            var a = -this.fc.velocity[0] * 2;
            var f = (this.fc.cs_mass * a) / 1.8;
            if (f > 0 && this.force_x < f) {
                this.force_x = f;
            }
            if (f < 0 && this.force_x > f) {
                this.force_x = f;
            }
        };
        ShiJianYiDongAi.prototype.y_jian_su = function () {
            var a = -this.fc.velocity[1] * 2;
            var f = (this.fc.cs_mass * a) / 1.8;
            if (f > 0 && this.force_y < f) {
                this.force_y = f;
            }
            if (f < 0 && this.force_y > f) {
                this.force_y = f;
            }
        };
        //----------------------------------------------------------------
        //------------------------加速------------------------------------
        ShiJianYiDongAi.prototype.jia_su_x = function () {
            var s = Math.abs(this.fc.position[0] - this.fc.toPoint.x);
            var v = this.fc.velocity[0];
            var t = (this.max_time - (egret.getTimer() - this.mark_y)) / 1000;
            var m = this.fc.cs_mass;
            if (this.mu_biao_wz_X == 1) {
                s = this.zong_ju_li_x * -1;
            }
            //S*1.8=V*T+1/2at^2
            //((s*1.8)-v*t)*2/(t*t)=a
            //f1.8=ma
            //a=(f*1.8)/m
            //f=(m*a)/1.8
            var a = ((s * 1.8) - v * t) * 2 / (t * t);
            var f = (a * m) / 1.8;
            this.force_x = f;
        };
        ShiJianYiDongAi.prototype.jia_su_y = function () {
            var s = Math.abs(this.fc.position[1] - this.fc.toPoint.y);
            var v = this.fc.velocity[1];
            var t = (this.max_time - (egret.getTimer() - this.mark_y)) / 1000;
            var m = this.fc.cs_mass;
            if (this.mu_biao_wz_Y == 1) {
                s = this.zong_ju_li_y * -1;
            }
            var a = ((s * 1.8) - v * t) * 2 / (t * t);
            var f = (a * m) / 1.8;
            this.force_y = f;
        };
        //-------------------------------------------------------------
        ShiJianYiDongAi.prototype.doUpData = function (time) {
            _super.prototype.doUpData.call(this, time);
            this.upType();
            // if (time < 10000) {
            //     this.mark_y = time;
            //     return;
            // }
            //判断是否到达目的地 并修改状态
            if (this.x_da_cheng && this.y_da_cheng) {
                this.upOver();
                return;
            }
            if (this.x_type == 1) {
                this.x_jian_su();
            }
            if (this.x_type == 2) {
                this.force_x = 0;
            }
            //先减速再加速
            if (this.x_type == 3) {
                this.jia_su_x();
                this.cs_jansu_x();
            }
            if (this.y_type == 1) {
                this.y_jian_su();
            }
            if (this.y_type == 2) {
                this.force_y = 0;
            }
            //先减速再加速
            if (this.y_type == 3) {
                this.jia_su_y();
                this.cs_jansu_y();
            }
            var vx = this.fc.velocity[0];
            var vy = this.fc.velocity[1];
            if (vx > 0 && vx > 5) {
                vx = 5;
                this.force_x = 0;
            }
            if (vx < 0 && vx < -5) {
                vx = -5;
                this.force_x = 0;
            }
            if (vy > 0 && vy > 5) {
                vy = 5;
                this.force_y = 0;
            }
            if (vy < 0 && vy < -5) {
                vy = -5;
                this.force_y = 0;
            }
            this.fc.velocity = [vx, vy];
            //施加力
            this.fc.force = [this.force_x, this.force_y];
        };
        return ShiJianYiDongAi;
    }(ai.AiBase));
    ai.ShiJianYiDongAi = ShiJianYiDongAi;
    __reflect(ShiJianYiDongAi.prototype, "ai.ShiJianYiDongAi");
})(ai || (ai = {}));
var fjztj;
(function (fjztj) {
    var JuZhenZTJ = (function (_super) {
        __extends(JuZhenZTJ, _super);
        function JuZhenZTJ(fc) {
            var _this = _super.call(this) || this;
            _this.fc = fc;
            _this.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING;
            _this.gjT = zhuangtaiji.ZT_TYPE.NULL_T;
            _this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
            return _this;
        }
        //进步器
        JuZhenZTJ.prototype.upStep = function (time) {
            _super.prototype.upStep.call(this, time);
            //休眠判定
            if (this.isSleep()) {
                return;
            }
            //检测移动状态并赋值 ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (!this.fc.moveAI) {
                    // this.fc.moveAI = new ai.TaiKongSingoMoveAi(this.fc, zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, -1);
                }
            }
            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.NULL_T;
                this.fc.moveAI = null;
            }
        };
        return JuZhenZTJ;
    }(fjztj.FjZTJ));
    fjztj.JuZhenZTJ = JuZhenZTJ;
    __reflect(JuZhenZTJ.prototype, "fjztj.JuZhenZTJ");
})(fjztj || (fjztj = {}));
var fjztj;
(function (fjztj) {
    //区域瞄准状态机
    var QuYuZTJ = (function (_super) {
        __extends(QuYuZTJ, _super);
        function QuYuZTJ(fc) {
            var _this = _super.call(this) || this;
            _this.fc = fc;
            _this.mT = zhuangtaiji.ZT_TYPE.NULL_T;
            _this.gjT = zhuangtaiji.ZT_TYPE.NULL_T;
            _this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
            return _this;
        }
        //进步器
        QuYuZTJ.prototype.upStep = function (time) {
            _super.prototype.upStep.call(this, time);
            //休眠判定
            if (this.isSleep()) {
                return;
            }
            //------------------------------------------------简单移动------------------------------------------------------
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (this.fc.moveAI == null) {
                    this.fc.moveAI = new ai.ShiJianYiDongAi(this.fc, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, this.info.mT_run_time, this.info.move_time, this.info.mT_xs);
                    // this.fc.moveAI.xs = this.info.mT_xs;
                    this.fc.moveAI.init();
                }
            }
            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                this.fc.moveAI = null;
                this.nextStep(this.info.sleep_time);
            }
            //-----------------------------------------------减速移动--------------------------------------
            if (this.mT == zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING) {
                if (this.fc.moveAI == null) {
                    this.fc.moveAI = new ai.ShiJianYiDongAi(this.fc, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, this.info.mT_run_time, this.info.move_time, this.info.mT_xs);
                    // this.fc.moveAI.xs = this.info.mT_xs;
                    this.fc.moveAI.init();
                }
            }
            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_OVER) {
                this.fc.moveAI = null;
                this.nextStep(this.info.sleep_time);
            }
            //-----------------------------------原地等待----------------------------------------
            if (this.mT == zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_ING) {
                if (this.fc.moveAI == null) {
                    this.fc.moveAI = new ai.YuanDiAi(this.fc, zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, this.info.mT_xs);
                }
            }
            if (this.mT == zhuangtaiji.ZT_TYPE.YUAN_TI_DENG_DAI_OVER) {
                this.fc.moveAI = null;
                this.nextStep(this.info.sleep_time);
            }
            //--------------------------------------------------------------------------------
            //------------------------------保持瞄准sk--------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.MiaoZhun(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }
            if (this.mzT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER) {
                //瞄准结束
            }
            //------------------------------运动导航--------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.YUN_DONG_DAO_HANG_ING) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.DaoHuangAi(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }
            //------------------------------导航--------------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.DAO_HANG) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.DaoHuangAi(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.DAO_HANG_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }
            if (this.mzT == zhuangtaiji.ZT_TYPE.DAO_HANG_OVER) {
                this.fc.mzAI = null;
                this.nextStep(this.info.sleep_time);
            }
            //----------------------------旋转-----------------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.XuanZhuanAI(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }
            //-------------------------正下方--------------------------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.ZHENG_XIA_FANG_ING) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.ZhengXiaFangAi(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_OVER, zhuangtaiji.ZT_TYPE.NO_THING);
                    this.fc.mzAI.xs = this.info.mZ_xs;
                }
            }
            //-------------------普通武器射击---------------------------------
            if (this.gjT == zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING) {
                if (this.fc.gjAI == null) {
                    this.fc.gjAI = new ai.PuTongWuqiAi(this.fc, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_OVER, zhuangtaiji.ZT_TYPE.NO_THING, this.info.gjT_xs);
                }
            }
            //停止射击
            if (this.gjT == zhuangtaiji.ZT_TYPE.STOP_SHOOT_NOW) {
                this.fc.gjAI = null;
            }
            //------------------滑行------------------------
            if (this.mT == zhuangtaiji.ZT_TYPE.HUA_XING_ING) {
                if (this.fc.moveAI == null) {
                    this.fc.moveAI = new ai.HuaXingAi(this.fc, zhuangtaiji.ZT_TYPE.HUA_XING_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, this.info.mT_xs);
                }
            }
            if (this.mT == zhuangtaiji.ZT_TYPE.HUA_XING_OVER) {
                this.fc.moveAI = null;
                this.nextStep(this.info.sleep_time);
            }
            //----------------旋转减速---------------------
            if (this.mzT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_JIAN_ING) {
                if (this.fc.mzAI == null) {
                    this.fc.mzAI = new ai.XuanZhuanJian(this.fc, this.info.mZ_xs);
                }
            }
        };
        return QuYuZTJ;
    }(fjztj.FjZTJ));
    fjztj.QuYuZTJ = QuYuZTJ;
    __reflect(QuYuZTJ.prototype, "fjztj.QuYuZTJ");
})(fjztj || (fjztj = {}));
var fjztj;
(function (fjztj) {
    var XBZhuangtaiji = (function (_super) {
        __extends(XBZhuangtaiji, _super);
        function XBZhuangtaiji(fc) {
            var _this = _super.call(this) || this;
            // 是否到达目的地
            _this.is_Tirget = false;
            //瞄准攻击 开始时间标记
            _this.miao_zhun_mark = 0;
            //瞄准攻击时间限制
            _this.miao_zhun_limit = 15 * 1000;
            _this.fc = fc;
            _this.mT = zhuangtaiji.ZT_TYPE.DAO_HANG;
            _this.gjT = zhuangtaiji.ZT_TYPE.NULL_T;
            _this.mzT = zhuangtaiji.ZT_TYPE.NULL_T;
            return _this;
        }
        //进步器
        XBZhuangtaiji.prototype.upStep = function (time) {
            _super.prototype.upStep.call(this, time);
            //休眠判定
            if (this.isSleep()) {
                return;
            }
            //检测移动状态并赋值 ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING) {
                if (!this.fc.moveAI) {
                    // this.fc.moveAI = new ai.TaiKongSingoMoveAi(this.fc, zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING, -1);
                }
            }
            //当移动状态 停止后 设置新的ai
            if (this.mT == zhuangtaiji.ZT_TYPE.SINGO_MOVE_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK;
                this.fc.moveAI = null;
                this.miao_zhun_mark = egret.getTimer();
            }
            //旋转类
            if (this.mT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN) {
            }
            //旋转结束
            if (this.mT == zhuangtaiji.ZT_TYPE.XUAN_ZHUAN_OVER) {
            }
            //瞄准
            if (this.mT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK) {
                if (!this.fc.mzAI) {
                    this.fc.mzAI = new ai.MiaoZhun(this.fc, zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                }
                //瞄准时间到了
                if ((egret.getTimer() - this.miao_zhun_mark) > this.miao_zhun_limit) {
                    this.mT = zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER;
                }
            }
            //瞄准结束
            if (this.mT == zhuangtaiji.ZT_TYPE.MIAO_ZHUN_SK_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.DAO_HANG;
                this.fc.mzAI = null;
            }
            //导航开始
            if (this.mT == zhuangtaiji.ZT_TYPE.DAO_HANG) {
                if (!this.fc.mzAI) {
                    this.fc.reLoadToPoint(suiji.randomTargetPos_simple());
                    this.fc.mzAI = new ai.DaoHuangAi(this.fc, zhuangtaiji.ZT_TYPE.DAO_HANG_OVER, zhuangtaiji.ZT_TYPE.NO_THING, zhuangtaiji.ZT_TYPE.NO_THING);
                }
            }
            //导航结束
            if (this.mT == zhuangtaiji.ZT_TYPE.DAO_HANG_OVER) {
                this.mT = zhuangtaiji.ZT_TYPE.SINGO_MOVE_ING;
                this.fc.mzAI = null;
            }
        };
        return XBZhuangtaiji;
    }(fjztj.FjZTJ));
    fjztj.XBZhuangtaiji = XBZhuangtaiji;
    __reflect(XBZhuangtaiji.prototype, "fjztj.XBZhuangtaiji");
})(fjztj || (fjztj = {}));
var zhuangtaiji;
(function (zhuangtaiji) {
    var JuziZTJ = (function (_super) {
        __extends(JuziZTJ, _super);
        function JuziZTJ() {
            return _super.call(this) || this;
        }
        return JuziZTJ;
    }(zhuangtaiji.ZhuangTaiJiBase));
    zhuangtaiji.JuziZTJ = JuziZTJ;
    __reflect(JuziZTJ.prototype, "zhuangtaiji.JuziZTJ");
})(zhuangtaiji || (zhuangtaiji = {}));
var pici;
(function (pici) {
    var PiCiBase = (function (_super) {
        __extends(PiCiBase, _super);
        function PiCiBase() {
            return _super.call(this) || this;
        }
        return PiCiBase;
    }(zhuangtaiji.ZhuangTaiJiBase));
    pici.PiCiBase = PiCiBase;
    __reflect(PiCiBase.prototype, "pici.PiCiBase");
})(pici || (pici = {}));
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
var zy;
(function (zy) {
    var ZhuYe = (function (_super) {
        __extends(ZhuYe, _super);
        function ZhuYe(mian) {
            var _this = _super.call(this) || this;
            // public fen_xiang: egret.TextField = new egret.TextField();//分享
            _this.gu_shi_bei_jing = new egret.TextField(); //故事背景
            _this.ren_wu = new egret.TextField(); //任务
            _this.kai_shi = new egret.TextField(); //开始
            _this.wu_qi = new egret.TextField(); //武器
            _this.chou_jiang = new egret.TextField(); //抽奖
            _this.da_shang = new egret.TextField(); //打赏
            // public vio: egret.TextField = new egret.TextField();//vip
            _this.pai_hang = new egret.TextField(); //排行
            //子页面
            _this.zym = null;
            _this.init();
            _this.mian = mian;
            return _this;
        }
        ZhuYe.prototype.init = function () {
            this.width = Tools.getPhoneW();
            this.height = Tools.getPhoneH();
            var bg = new zy.BeiJing();
            bg.x = 0;
            bg.y = 0;
            this.addChild(bg);
            // this.initFenXiang();
            this.initYouXiBeiJing();
            this.iniRenWu();
            this.initKaiShi();
            this.initWuQi();
            this.initChouJiang();
            this.initdashang();
            // this.initVIP();
            this.initPaiHang();
        };
        //初始化分享
        // public initFenXiang() {
        //     this.fen_xiang.textFlow = new Array<egret.ITextElement>(
        //         { text: "分享", style: { underline: true, "textColor": 0xEDFFF9 } })
        //     this.fen_xiang.lineSpacing = 20;
        //     this.addChild(this.fen_xiang);
        //     this.fen_xiang.x = Tools.getPhoneW() * 0.01
        //     this.fen_xiang.y = Tools.getPhoneH() * 0.1;
        // }
        //简介
        ZhuYe.prototype.initYouXiBeiJing = function () {
            this.gu_shi_bei_jing.textFlow = new Array({ text: "简介", style: { underline: true, "textColor": 0xEDFFF9 } });
            this.gu_shi_bei_jing.lineSpacing = 20;
            this.addChild(this.gu_shi_bei_jing);
            this.gu_shi_bei_jing.x = Tools.getPhoneW() * 0.01;
            this.gu_shi_bei_jing.y = Tools.getPhoneH() * 0.15;
            //添加点击事件
            this.gu_shi_bei_jing.touchEnabled = true;
            this.gu_shi_bei_jing.addEventListener(egret.TouchEvent.TOUCH_TAP, this.jianjieOnT, this);
        };
        ZhuYe.prototype.jianjieOnT = function () {
            egret.Tween.get(this.gu_shi_bei_jing).to({ "scaleX": 1.1, "scaleY": 1.1 }, 100).to({ "scaleX": 1, "scaleY": 1 }, 100);
            this.rem_zi();
            this.zym = new zy.JianJieMi(this);
            this.addChild(this.zym);
        };
        //任务
        ZhuYe.prototype.iniRenWu = function () {
            this.ren_wu.textFlow = new Array({ text: "任务", style: { underline: true, "textColor": 0xEDFFF9 } });
            this.ren_wu.lineSpacing = 20;
            this.addChild(this.ren_wu);
            this.ren_wu.x = Tools.getPhoneW() * 0.01;
            this.ren_wu.y = Tools.getPhoneH() * 0.2;
        };
        //开始
        ZhuYe.prototype.initKaiShi = function () {
            this.kai_shi.textFlow = new Array({ text: "开始", style: { underline: true, "textColor": 0xEDFFF9 } });
            this.kai_shi.lineSpacing = 20;
            this.addChild(this.kai_shi);
            this.kai_shi.x = Tools.getPhoneW() * 0.01;
            this.kai_shi.y = Tools.getPhoneH() * 0.25;
            //添加点击事件
            this.kai_shi.touchEnabled = true;
            this.kai_shi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kaishiOnT, this);
        };
        ZhuYe.prototype.kaishiOnT = function () {
            egret.Tween.get(this.kai_shi).to({ "scaleX": 1.1, "scaleY": 1.1 }, 100).to({ "scaleX": 1, "scaleY": 1 }, 100);
            this.rem_zi();
            this.zym = new zy.kaishiMi(this);
            this.addChild(this.zym);
        };
        //武器
        ZhuYe.prototype.initWuQi = function () {
            this.wu_qi.textFlow = new Array({ text: "武器", style: { underline: true, "textColor": 0xEDFFF9 } });
            this.wu_qi.lineSpacing = 20;
            this.addChild(this.wu_qi);
            this.wu_qi.x = Tools.getPhoneW() * 0.01;
            this.wu_qi.y = Tools.getPhoneH() * 0.3;
        };
        //初始抽奖
        ZhuYe.prototype.initChouJiang = function () {
            this.chou_jiang.textFlow = new Array({ text: "抽奖", style: { underline: true, "textColor": 0xEDFFF9 } });
            this.chou_jiang.lineSpacing = 20;
            this.addChild(this.chou_jiang);
            this.chou_jiang.x = Tools.getPhoneW() * 0.01;
            this.chou_jiang.y = Tools.getPhoneH() * 0.35;
        };
        //打赏
        ZhuYe.prototype.initdashang = function () {
            this.da_shang.textFlow = new Array({ text: "打赏", style: { underline: true, "textColor": 0xEDFFF9 } });
            this.da_shang.lineSpacing = 20;
            this.addChild(this.da_shang);
            this.da_shang.x = Tools.getPhoneW() * 0.01;
            this.da_shang.y = Tools.getPhoneH() * 0.4;
        };
        //vip
        // public initVIP() {
        //     this.vio.textFlow = new Array<egret.ITextElement>(
        //         { text: "终身VIP", style: { underline: true, "textColor": 0xEDFFF9 } })
        //     this.vio.lineSpacing = 20;
        //     this.addChild(this.vio);
        //     this.vio.x = Tools.getPhoneW() * 0.01
        //     this.vio.y = Tools.getPhoneH() * 0.45;
        // }
        //排行
        ZhuYe.prototype.initPaiHang = function () {
            this.pai_hang.textFlow = new Array({ text: "排行", style: { underline: true, "textColor": 0xEDFFF9 } });
            this.pai_hang.lineSpacing = 20;
            this.addChild(this.pai_hang);
            this.pai_hang.x = Tools.getPhoneW() * 0.01;
            this.pai_hang.y = Tools.getPhoneH() * 0.5;
        };
        //结束界面 移除相关绑定
        ZhuYe.prototype.end = function () {
        };
        //切换界面 
        ZhuYe.prototype.qie = function () {
            // let testSen: TestScene = new TestScene();
            // this.mian.stage.removeChild(this);
            // this.mian.stage.addChild(testSen)
            // testSen.x = -scene.scene_anch_x;
            // testSen.y = -scene.scene_anch_y;
        };
        //移除子页面
        ZhuYe.prototype.rem_zi = function () {
            if (!this.zym) {
                return;
            }
            if (!this.zym.parent) {
                this.zym = null;
                return;
            }
            this.zym.parent.removeChild(this.zym);
            this.zym = null;
        };
        return ZhuYe;
    }(egret.DisplayObjectContainer));
    zy.ZhuYe = ZhuYe;
    __reflect(ZhuYe.prototype, "zy.ZhuYe");
})(zy || (zy = {}));
var zy;
(function (zy) {
    var JianJieMi = (function (_super) {
        __extends(JianJieMi, _super);
        function JianJieMi(z) {
            var _this = _super.call(this, z) || this;
            _this.kai_shi = new egret.TextField(); //开始
            _this.init();
            return _this;
        }
        JianJieMi.prototype.init = function () {
            this.initKaiShi();
        };
        JianJieMi.prototype.initKaiShi = function () {
            this.kai_shi.textFlow = new Array(
            // { text: "简介 ", style: { "textColor": 0xEDFFF9 } },
            { text: "\n" }, { text: "这是一款，策略射击类游戏。游戏的终极目标只有一个 ,", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "收集太阳能晶体（通过击毁外星生物获得）强化飞船武器系统，", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "从而在战斗中获得更多分数霸榜好友圈。是不是很刺激！！！（咳咳）", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "故事发生在2048年冬天，太阳系闯入了大量未知生物。", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "它们漂浮在太空中以吸食太阳能为生，", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "随着它们不间断的吸食,太阳逐渐暗淡下去，", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "地球终日笼罩在黄昏色的阳光下。", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "要不了多久太阳便会熄灭，于是人类为了守卫太阳系，", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "决定发起一次总攻彻底赶走这些外星生物，", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "这次总攻代号叫做“黎明”。", style: { "textColor": 0xEDFFF9, "size": 15 } }, { text: "\n" }, { text: "对了观看广告以及分享可以加快游戏进程记得试一试呦", style: { "textColor": 0xEDFFF9, "size": 15 } });
            this.kai_shi.lineSpacing = 10;
            this.addChild(this.kai_shi);
            this.kai_shi.x = Tools.getPhoneW() * 0.2;
            this.kai_shi.y = Tools.getPhoneH() * 0.01;
            // this.kai_shi.x = this.kai_shi.y = 150;
            this.kai_shi.border = true;
            this.kai_shi.wordWrap = true;
            this.kai_shi.multiline = true;
            this.addChild(this.kai_shi);
        };
        return JianJieMi;
    }(zy.ziyeMi));
    zy.JianJieMi = JianJieMi;
    __reflect(JianJieMi.prototype, "zy.JianJieMi");
})(zy || (zy = {}));
var zy;
(function (zy) {
    var kaishiMi = (function (_super) {
        __extends(kaishiMi, _super);
        function kaishiMi(z) {
            var _this = _super.call(this, z) || this;
            _this.kai_shi = new egret.TextField(); //开始
            _this.init();
            return _this;
        }
        kaishiMi.prototype.init = function () {
            this.initKaiShi();
        };
        kaishiMi.prototype.initKaiShi = function () {
            this.kai_shi.textFlow = new Array({ text: "出击", style: { underline: true, "textColor": 0xEDFFF9 } });
            this.kai_shi.lineSpacing = 20;
            this.addChild(this.kai_shi);
            this.kai_shi.x = Tools.getPhoneW() * 0.5;
            this.kai_shi.y = Tools.getPhoneH() * 0.5;
            //添加点击事件
            this.kai_shi.touchEnabled = true;
            this.kai_shi.addEventListener(egret.TouchEvent.TOUCH_TAP, this.kaishiOnT, this);
        };
        kaishiMi.prototype.kaishiOnT = function () {
            egret.Tween.get(this.kai_shi).to({ "scaleX": 1.1, "scaleY": 1.1 }, 100).to({ "scaleX": 1, "scaleY": 1 }, 100);
            this.z.end();
            this.z.qie();
            this.z = null;
        };
        return kaishiMi;
    }(zy.ziyeMi));
    zy.kaishiMi = kaishiMi;
    __reflect(kaishiMi.prototype, "zy.kaishiMi");
})(zy || (zy = {}));
var ai;
(function (ai) {
    /**
     * 实时瞄准 ai
     */
    var ShiShiMiaoZhunAi = (function (_super) {
        __extends(ShiShiMiaoZhunAi, _super);
        function ShiShiMiaoZhunAi(fc, mt, xz, mz) {
            return _super.call(this, fc, mt, xz, mz) || this;
        }
        ShiShiMiaoZhunAi.prototype.doUpData = function (time) {
            if (!this.hang_up) {
                _super.prototype.doUpData.call(this, time);
                var angle = Math.atan2((this.suke.position[1] - this.fc.position[1]), (this.suke.position[0] - this.fc.position[0])) + Math.PI * 0.5;
                this.fc.angle = angle;
            }
        };
        return ShiShiMiaoZhunAi;
    }(ai.AiBase));
    ai.ShiShiMiaoZhunAi = ShiShiMiaoZhunAi;
    __reflect(ShiShiMiaoZhunAi.prototype, "ai.ShiShiMiaoZhunAi");
})(ai || (ai = {}));
var zidan;
(function (zidan) {
    var ChangDingZiDan = (function (_super) {
        __extends(ChangDingZiDan, _super);
        function ChangDingZiDan(scene, zhenying, mass, level) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN) || this;
            //溅射数量
            _this.jsNumb = 3;
            _this.initPT();
            _this.bit_name = "us_zd_8";
            if (level >= 3) {
                _this.jsNumb = 4;
            }
            if (level == 5) {
                _this.jsNumb = 5;
            }
            _this.is_updata = true;
            return _this;
        }
        ChangDingZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_8"));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        //穿甲
        ChangDingZiDan.prototype.chuan_jia = function (mok, fc) {
            if (!mok || !fc) {
                return;
            }
            //碰撞点
            var x = mok.moKuaiPost.x;
            var y = mok.moKuaiPost.y;
            //
            //
            //  -180    飞船    180
            //
            //
            //正
            if (mok.rotation > -45 && mok.rotation < 45) {
                this.loopJs(x, y, false, false, fc);
            }
            //左
            if (mok.rotation < -45 && mok.rotation > -135) {
                this.loopJs(x, y, true, true, fc);
            }
            //右
            if (mok.rotation > 45 && mok.rotation < 135) {
                this.loopJs(x, y, true, false, fc);
            }
            //后 11
            if (mok.rotation < -135 || mok.rotation > 135) {
                this.loopJs(x, y, false, true, fc);
            }
        };
        //循环溅射
        ChangDingZiDan.prototype.loopJs = function (x, y, isX, isAdd, fc) {
            for (var i = 1; i <= this.jsNumb; i++) {
                if (isX) {
                    if (isAdd) {
                        this.chickThePost(x + i, y, fc);
                    }
                    else {
                        this.chickThePost(x - i, y, fc);
                    }
                }
                if (!isX) {
                    if (isAdd) {
                        this.chickThePost(x, y + i, fc);
                    }
                    else {
                        this.chickThePost(x, y - i, fc);
                    }
                }
            }
        };
        ChangDingZiDan.prototype.texiao = function () {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8;
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(_super.prototype.dell, this, [this.bitmap]);
        };
        ChangDingZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            this.force = [0, 0.0005];
        };
        return ChangDingZiDan;
    }(zidan.ZiDanBase));
    zidan.ChangDingZiDan = ChangDingZiDan;
    __reflect(ChangDingZiDan.prototype, "zidan.ChangDingZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var DaoDanZiDan = (function (_super) {
        __extends(DaoDanZiDan, _super);
        //----------------------
        function DaoDanZiDan(scene, zhenying, mass, fc) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.DAO_DAN) || this;
            //跟踪弹生效时间
            _this.gz_time = 10000;
            _this.sudu = 8;
            //导弹启动时间
            _this.qi_dong = 300;
            _this.is_go = false;
            _this.f = 0.001;
            //----------------------拐弯用-------------------
            //一半
            _this.yi_ban = Math.PI * 0.5;
            _this.guai_wan_jiao_du = Math.PI / 4;
            _this.guai_wan_jiao_du_b = Math.PI / 6;
            _this.guai_wan_num = 4;
            _this.guai_wan_num_mark = 0;
            _this.guai_wan_jiao_du_mark = Math.PI;
            _this.pi = 1;
            //计算一次
            _this.js = true;
            //到达指定角度 自动导航
            _this.zd = false;
            _this.cishu = 0;
            _this.initPT();
            _this.is_updata = true;
            _this.damping = 0;
            _this.fc = fc;
            _this.bit_name = "us_zd_3";
            _this.sudu = 5;
            _this.angularVelocity = 5;
            return _this;
        }
        DaoDanZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_3"));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.displays = [this.bitmap];
        };
        DaoDanZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            // this.sudu += 0.1;
            if ((egret.getTimer() - this.mark_time) > this.gz_time) {
                this.is_updata = false;
                return;
            }
            if (!this.fc) {
                return;
            }
            if ((egret.getTimer() - this.mark_time) < this.qi_dong) {
                egret.log("qi_dong:" + this.f + " -- " + this.velocity[1]);
                _super.prototype.weiyi.call(this, this.bit_name);
                this.force = [0, this.f];
                return;
            }
            this.is_go = true;
            // if ((egret.getTimer() - (this.mark_time + this.qi_dong)) < this.qi_dong && this.is_go) {
            //     super.weiyi(this.bit_name);
            //     egret.log("is_go:" + this.f + " -- " + this.velocity[1])
            //     this.force = [0, this.f];
            //     return;
            // }
            if (this.js) {
                this.js = false;
                if (this.fc.position[0] > this.position[0]) {
                    this.pi = -1;
                }
            }
            this.zhidao();
            if (!this.zd) {
                var sx_1 = Math.sin(this.guai_wan_jiao_du_mark) * this.sudu;
                var sy_1 = Math.cos(this.guai_wan_jiao_du_mark) * this.sudu;
                sy_1 = sy_1 * -1;
                this.angularVelocity = 5;
                this.velocity = [sx_1, sy_1];
                this.weiyi(this.bit_name);
                return;
            }
            var angle = this.jisuan_jiaodu();
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            this.angularVelocity = 5;
            this.velocity = [sx, sy];
            this.weiyi(this.bit_name);
        };
        //制导
        DaoDanZiDan.prototype.zhidao = function () {
            if (this.guai_wan_num_mark < this.guai_wan_num) {
                this.guai_wan_num_mark++;
                return;
            }
            this.guai_wan_num_mark = Math.PI;
            //目标角度
            var tig = this.jisuan_jiaodu();
            //角度差
            var jdc = Math.abs(Math.abs(this.guai_wan_jiao_du_mark) - Math.abs(tig));
            if (Math.abs(jdc) < this.guai_wan_jiao_du) {
                this.zd = true;
                return;
            }
            this.guai_wan_jiao_du_mark += (this.guai_wan_jiao_du * this.pi);
            this.guai_wan_jiao_du_mark = this.guai_wan_jiao_du_mark % (Math.PI * 2);
        };
        //计算角度
        DaoDanZiDan.prototype.jisuan_jiaodu = function () {
            if (this.fc == null) {
                return 0;
            }
            if (this.fc.hx == null) {
                return 0;
            }
            var hx = Tools.egretTOp2(egret.Point.create(this.fc.hx.x, this.fc.hx.y));
            var angle = Math.atan2((hx.y - this.position[1]), (hx.x - this.position[0])) + this.yi_ban;
            if (angle < 0) {
                return Math.PI * 2 + angle;
            }
            return angle;
        };
        DaoDanZiDan.prototype.weiyi = function (name) {
            this.wyMark = egret.getTimer();
            var b = new egret.Bitmap(RES.getRes(name));
            b.anchorOffsetX = this.bitmap.width * 0.5;
            b.anchorOffsetY = this.bitmap.height * 0.5;
            b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = this.bitmap.x;
            b.y = this.bitmap.y;
            b.scaleX = 0.5;
            b.scaleY = 0.5;
            this.scene.addChild(b);
            b.alpha = 0.8;
            egret.Tween.get(b).to({ "alpha": 0.1 }, 250).call(this.dell, this, [b]);
        };
        return DaoDanZiDan;
    }(zidan.ZiDanBase));
    zidan.DaoDanZiDan = DaoDanZiDan;
    __reflect(DaoDanZiDan.prototype, "zidan.DaoDanZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var DingWeiZidan = (function (_super) {
        __extends(DingWeiZidan, _super);
        function DingWeiZidan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.bit_name = "op_wq_1";
            return _this;
        }
        DingWeiZidan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("op_wq_1"));
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        DingWeiZidan.prototype.updata = function () {
            _super.prototype.updata.call(this);
        };
        return DingWeiZidan;
    }(zidan.ZiDanBase));
    zidan.DingWeiZidan = DingWeiZidan;
    __reflect(DingWeiZidan.prototype, "zidan.DingWeiZidan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var DingXiangZiDan = (function (_super) {
        __extends(DingXiangZiDan, _super);
        function DingXiangZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.bit_name = "us_zd_5";
            _this.is_updata = true;
            return _this;
        }
        DingXiangZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_5"));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        DingXiangZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            _super.prototype.weiyi.call(this, "us_zd_5_wy");
        };
        return DingXiangZiDan;
    }(zidan.ZiDanBase));
    zidan.DingXiangZiDan = DingXiangZiDan;
    __reflect(DingXiangZiDan.prototype, "zidan.DingXiangZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var DJSanDanZiDan = (function (_super) {
        __extends(DJSanDanZiDan, _super);
        function DJSanDanZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.bit_name = "op_wq_5";
            _this.is_updata = true;
            return _this;
        }
        DJSanDanZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("op_wq_5"));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        DJSanDanZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            // super.weiyi(this.bit_name);
        };
        return DJSanDanZiDan;
    }(zidan.ZiDanBase));
    zidan.DJSanDanZiDan = DJSanDanZiDan;
    __reflect(DJSanDanZiDan.prototype, "zidan.DJSanDanZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var GenZongZiDan = (function (_super) {
        __extends(GenZongZiDan, _super);
        function GenZongZiDan(scene, zhenying, mass, suke) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            //跟踪弹生效时间
            _this.gz_time = 10000;
            _this.sudu = 2;
            //一半
            _this.yi_ban = Math.PI * 0.5;
            _this.guai_wan_jiao_du = Math.PI / 4;
            _this.guai_wan_jiao_du_b = Math.PI / 6;
            _this.guai_wan_num = 4;
            _this.guai_wan_num_mark = 0;
            _this.guai_wan_jiao_du_mark = Math.PI;
            _this.pi = 1;
            //计算一次
            _this.js = true;
            //到达指定角度 自动导航
            _this.zd = false;
            _this.cishu = 0;
            _this.initPT();
            _this.is_updata = true;
            _this.damping = 0;
            _this.suke = suke;
            _this.bit_name = "op_wq_3";
            return _this;
        }
        GenZongZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("op_wq_3"));
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        GenZongZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            if ((egret.getTimer() - this.mark_time) > this.gz_time) {
                this.is_updata = false;
                return;
            }
            if (this.js) {
                this.js = false;
                if (this.suke.position[0] > this.position[0]) {
                    this.pi = -1;
                }
            }
            this.zhidao();
            if (!this.zd) {
                var sx_2 = Math.sin(this.guai_wan_jiao_du_mark) * this.sudu;
                var sy_2 = Math.cos(this.guai_wan_jiao_du_mark) * this.sudu;
                sy_2 = sy_2 * -1;
                this.angularVelocity = 5;
                this.velocity = [sx_2, sy_2];
                this.weiyi(this.bit_name);
                return;
            }
            var angle = this.jisuan_jiaodu();
            var sx = Math.sin(angle) * this.sudu;
            var sy = Math.cos(angle) * this.sudu;
            sy = sy * -1;
            this.angularVelocity = 5;
            this.velocity = [sx, sy];
            this.weiyi(this.bit_name);
        };
        //制导
        GenZongZiDan.prototype.zhidao = function () {
            if (this.guai_wan_num_mark < this.guai_wan_num) {
                this.guai_wan_num_mark++;
                return;
            }
            this.guai_wan_num_mark = Math.PI;
            //目标角度
            var tig = this.jisuan_jiaodu();
            //角度差
            var jdc = Math.abs(Math.abs(this.guai_wan_jiao_du_mark) - Math.abs(tig));
            if (Math.abs(jdc) < this.guai_wan_jiao_du) {
                this.zd = true;
                return;
            }
            this.guai_wan_jiao_du_mark += (this.guai_wan_jiao_du * this.pi);
            this.guai_wan_jiao_du_mark = this.guai_wan_jiao_du_mark % (Math.PI * 2);
        };
        //计算角度
        GenZongZiDan.prototype.jisuan_jiaodu = function () {
            var angle = Math.atan2((this.suke.position[1] - this.position[1]), (this.suke.position[0] - this.position[0])) + this.yi_ban;
            if (angle < 0) {
                return Math.PI * 2 + angle;
            }
            return angle;
        };
        GenZongZiDan.prototype.weiyi = function (name) {
            this.wyMark = egret.getTimer();
            var b = new egret.Bitmap(RES.getRes(name));
            b.anchorOffsetX = this.bitmap.width * 0.5;
            b.anchorOffsetY = this.bitmap.height * 0.5;
            b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = this.bitmap.x;
            b.y = this.bitmap.y;
            b.scaleX = 0.5;
            b.scaleY = 0.5;
            this.scene.addChild(b);
            b.alpha = 0.8;
            egret.Tween.get(b).to({ "alpha": 0.1 }, 250).call(this.dell, this, [b]);
        };
        return GenZongZiDan;
    }(zidan.ZiDanBase));
    zidan.GenZongZiDan = GenZongZiDan;
    __reflect(GenZongZiDan.prototype, "zidan.GenZongZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var JianSuZiDan = (function (_super) {
        __extends(JianSuZiDan, _super);
        function JianSuZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.bit_name = "op_wq_4";
            return _this;
        }
        JianSuZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("op_wq_4"));
            this.damping = 0.8;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        JianSuZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
        };
        return JianSuZiDan;
    }(zidan.ZiDanBase));
    zidan.JianSuZiDan = JianSuZiDan;
    __reflect(JianSuZiDan.prototype, "zidan.JianSuZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var KaiHuaZiDan = (function (_super) {
        __extends(KaiHuaZiDan, _super);
        function KaiHuaZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.is_updata = true;
            _this.bit_name = "1-5";
            return _this;
        }
        KaiHuaZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("1-5"));
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        KaiHuaZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            this.force = [0, -0.0001];
        };
        return KaiHuaZiDan;
    }(zidan.ZiDanBase));
    zidan.KaiHuaZiDan = KaiHuaZiDan;
    __reflect(KaiHuaZiDan.prototype, "zidan.KaiHuaZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var LuoXuanZiDan = (function (_super) {
        __extends(LuoXuanZiDan, _super);
        function LuoXuanZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.YU_LEI) || this;
            _this.sudu = 5;
            //号码
            _this.hao_ma = 0;
            _this.collNumber = 1;
            _this.bit_name = "us_zd_7";
            _this.is_updata = true;
            _this.sheng_ming_zhou_qi = 10000;
            _this.initPT();
            _this.sheng_ming_zhou_qi = 1000 * 60;
            return _this;
        }
        LuoXuanZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_7"));
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.displays = [this.bitmap];
            this.angularDamping = 0;
        };
        //约束
        LuoXuanZiDan.prototype.yue_shu = function () {
            // let constraint1 = new p2.DistanceConstraint(this.scene.sk, this);
            // this.scene.world.addConstraint(constraint1);
            // constraint1.upperLimitEnabled = true;
            // constraint1.lowerLimitEnabled = true;
            // constraint1.upperLimit = 3;
            // constraint1.lowerLimit = 3;
            // this.yueShulist.push(constraint1);
        };
        LuoXuanZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            if (this.hao_ma == 0) {
                return;
            }
            if (this.wu == null) {
                return;
            }
            var angle = this.wz + this.wu.lx;
            var sx = Math.sin(angle) * 3;
            var sy = Math.cos(angle) * 3;
            this.position[0] = this.scene.sk.position[0] + sx;
            this.position[1] = this.scene.sk.position[1] + sy;
            this.weiyi("us_zd_7");
        };
        LuoXuanZiDan.prototype.weiyi = function (name) {
            if (egret.getTimer() - this.wyMark < this.wyCD && this.bitmap != null) {
                return;
            }
            this.wyMark = egret.getTimer();
            var b = new egret.Bitmap(RES.getRes(name));
            b.anchorOffsetX = this.bitmap.width * 0.5;
            b.anchorOffsetY = this.bitmap.height * 0.5;
            b.rotation = 360 - this.angle * 180 / Math.PI;
            b.x = this.bitmap.x;
            b.y = this.bitmap.y;
            b.scaleX = 0.6;
            b.scaleY = 0.6;
            this.scene.addChild(b);
            b.alpha = 0.5;
            egret.Tween.get(b).to({ "alpha": 0.1 }, 200).call(this.dell, this, [b]);
        };
        return LuoXuanZiDan;
    }(zidan.ZiDanBase));
    zidan.LuoXuanZiDan = LuoXuanZiDan;
    __reflect(LuoXuanZiDan.prototype, "zidan.LuoXuanZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var PuTongZiDan = (function (_super) {
        __extends(PuTongZiDan, _super);
        function PuTongZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.collNumber = 1;
            _this.bit_name = "us_zd_1";
            _this.bitmap.anchorOffsetX = _this.bitmap.width * 0.5;
            _this.bitmap.anchorOffsetY = _this.bitmap.height * 0.5;
            _this.bitmap.scaleX = 0.4;
            _this.bitmap.scaleY = 0.4;
            _this.is_updata = true;
            return _this;
        }
        PuTongZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_1"));
            this.damping = 0;
            this.displays = [this.bitmap];
        };
        PuTongZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            _super.prototype.weiyi.call(this, "pt_wy");
        };
        PuTongZiDan.prototype.texiao = function () {
            this.bitmap.scaleX = 1;
            this.bitmap.scaleY = 1;
            this.bitmap.alpha = 0.8;
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(_super.prototype.dell, this, [this.bitmap]);
        };
        return PuTongZiDan;
    }(zidan.ZiDanBase));
    zidan.PuTongZiDan = PuTongZiDan;
    __reflect(PuTongZiDan.prototype, "zidan.PuTongZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var SanDanZiDan = (function (_super) {
        __extends(SanDanZiDan, _super);
        function SanDanZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.bit_name = "us_zd_2";
            _this.is_updata = true;
            return _this;
        }
        SanDanZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_2"));
            this.damping = 0;
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        SanDanZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            _super.prototype.weiyi.call(this, "us_zd_2_wy");
        };
        SanDanZiDan.prototype.texiao = function () {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8;
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(_super.prototype.dell, this, [this.bitmap]);
        };
        return SanDanZiDan;
    }(zidan.ZiDanBase));
    zidan.SanDanZiDan = SanDanZiDan;
    __reflect(SanDanZiDan.prototype, "zidan.SanDanZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var YuLeiZiDan = (function (_super) {
        __extends(YuLeiZiDan, _super);
        function YuLeiZiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.YU_LEI) || this;
            _this.collNumber = 1;
            _this.bit_name = "us_zd_6";
            _this.is_updata = true;
            _this.sheng_ming_zhou_qi = 10000;
            _this.initPT();
            return _this;
        }
        YuLeiZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_6"));
            this.bitmap.anchorOffsetX = this.bitmap.width * 0.5;
            this.bitmap.anchorOffsetY = this.bitmap.height * 0.5;
            this.damping = 0;
            this.displays = [this.bitmap];
            this.angularDamping = 0;
            this.damping = 0;
            this.loop();
        };
        YuLeiZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            this.velocity = [0, 0.2];
            this.angularVelocity = 4;
        };
        //穿甲相关
        YuLeiZiDan.prototype.chuan_jia = function (mok, fc) {
            if (!mok || !fc) {
                return;
            }
            //碰撞点
            var x = mok.moKuaiPost.x;
            var y = mok.moKuaiPost.y;
            this.chickThePost(x + 1, y, fc);
            this.chickThePost(x + 2, y, fc);
            this.chickThePost(x - 1, y, fc);
            this.chickThePost(x - 2, y, fc);
            this.chickThePost(x, y + 1, fc);
            this.chickThePost(x, y + 2, fc);
            this.chickThePost(x, y - 1, fc);
            this.chickThePost(x, y - 2, fc);
            this.chickThePost(x - 1, y - 1, fc);
            this.chickThePost(x + 1, y - 1, fc);
            this.chickThePost(x - 1, y + 1, fc);
            this.chickThePost(x + 1, y + 1, fc);
        };
        //循环特效
        YuLeiZiDan.prototype.loop = function () {
            var tw = egret.Tween.get(this.bitmap, { loop: true });
            tw.to({ "scaleX": 2.2, "scaleY": 2.2, "alpha": 0.8 }, 50).to({ "alpha": 1, "scaleX": 1, "scaleY": 1 }, 180);
        };
        YuLeiZiDan.prototype.removeTeXiao = function () {
            egret.Tween.removeTweens(this.bitmap);
            var tw = egret.Tween.get(this.bitmap);
            tw.to({ "scaleX": 3, "scaleY": 3, "alpha": 0.3 }, 800).call(this.addRemove, this);
        };
        return YuLeiZiDan;
    }(zidan.ZiDanBase));
    zidan.YuLeiZiDan = YuLeiZiDan;
    __reflect(YuLeiZiDan.prototype, "zidan.YuLeiZiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var ZhiSheZhiDan = (function (_super) {
        __extends(ZhiSheZhiDan, _super);
        function ZhiSheZhiDan(scene, zhenying, mass) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.initPT();
            _this.bit_name = "op_wq_1";
            return _this;
        }
        ZhiSheZhiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("op_wq_1"));
            this.damping = 0;
            this.bitmap.scaleX = 0.5;
            this.bitmap.scaleY = 0.5;
            this.displays = [this.bitmap];
        };
        ZhiSheZhiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
        };
        return ZhiSheZhiDan;
    }(zidan.ZiDanBase));
    zidan.ZhiSheZhiDan = ZhiSheZhiDan;
    __reflect(ZhiSheZhiDan.prototype, "zidan.ZhiSheZhiDan");
})(zidan || (zidan = {}));
var zidan;
(function (zidan) {
    var ZhongChuiZiDan = (function (_super) {
        __extends(ZhongChuiZiDan, _super);
        function ZhongChuiZiDan(scene, zhenying, mass, level) {
            var _this = _super.call(this, scene, zhenying, mass, wuqi.WUQI_TYPE.PU_TONG) || this;
            _this.lv_1 = [[-1, 0], [1, 0], [0, -1]];
            _this.lv_3 = [[-2, 0], [2, 0], [-1, -1], [1, -1], [0, -2]];
            _this.lv_5 = [[-3, 0], [3, 0], [-2, -1], [2, -1], [-1, -2], [1, -2], [0, -3]];
            _this.initPT();
            _this.collNumber = 1;
            _this.bit_name = "us_zd_9";
            _this.bitmap.anchorOffsetX = _this.bitmap.width * 0.5;
            _this.bitmap.anchorOffsetY = _this.bitmap.height * 0.5;
            _this.bitmap.scaleX = 0.5;
            _this.bitmap.scaleY = 0.5;
            _this.is_updata = true;
            _this.level = level;
            return _this;
        }
        ZhongChuiZiDan.prototype.initPT = function () {
            this.bitmap = new egret.Bitmap(RES.getRes("us_zd_9"));
            this.damping = 0;
            this.displays = [this.bitmap];
        };
        //穿甲
        ZhongChuiZiDan.prototype.chuan_jia = function (mok, fc) {
            if (!mok || !fc) {
                return;
            }
            //碰撞点
            var x = mok.moKuaiPost.x;
            var y = mok.moKuaiPost.y;
            //
            //
            //  -180    飞船    180
            //
            //
            //正
            if (mok.rotation > -45 && mok.rotation < 45) {
                this.loop_level(x, y, true, true, fc);
            }
            //左
            if (mok.rotation < -45 && mok.rotation > -135) {
                this.loop_level(x, y, false, false, fc);
            }
            //右
            if (mok.rotation > 45 && mok.rotation < 135) {
                this.loop_level(x, y, false, true, fc);
            }
            //后
            if (mok.rotation < -135 || mok.rotation > 135) {
                this.loop_level(x, y, true, false, fc);
            }
        };
        ZhongChuiZiDan.prototype.loop_level = function (x, y, isX, isAdd, fc) {
            if (this.level >= 1) {
                this.loopJs(x, y, isX, isAdd, fc, this.lv_1);
            }
            if (this.level >= 3) {
                this.loopJs(x, y, isX, isAdd, fc, this.lv_3);
            }
            if (this.level >= 5) {
                this.loopJs(x, y, isX, isAdd, fc, this.lv_5);
            }
        };
        //循环溅射
        ZhongChuiZiDan.prototype.loopJs = function (x, y, isX, isAdd, fc, ps) {
            for (var _i = 0, ps_1 = ps; _i < ps_1.length; _i++) {
                var p = ps_1[_i];
                if (isX) {
                    if (isAdd) {
                        this.chickThePost(x + p[0], y + p[1], fc);
                    }
                    else {
                        this.chickThePost(x + p[0], y - p[1], fc);
                    }
                }
                if (!isX) {
                    if (isAdd) {
                        this.chickThePost(x + p[1], y + p[0], fc);
                    }
                    else {
                        this.chickThePost(x - p[1], y + p[0], fc);
                    }
                }
            }
        };
        // //检测 节点是否可以被击中
        // public chickThePost(x: number, y: number, fc: feichuan.FeiChuanBase) {
        //     if (x < 0) {
        //         return;
        //     }
        //     if (y < 0) {
        //         return;
        //     }
        //     if (x >= fc.moKuaiList[0].length) {
        //         return;
        //     }
        //     if (y >= fc.moKuaiList.length) {
        //         return;
        //     }
        //     fc.shang_hai(fc.moKuaiList[y][x], this.hitNumber);
        // }
        ZhongChuiZiDan.prototype.updata = function () {
            _super.prototype.updata.call(this);
            _super.prototype.weiyi.call(this, this.bit_name);
        };
        ZhongChuiZiDan.prototype.texiao = function () {
            this.bitmap.scaleX = 0.8;
            this.bitmap.scaleY = 0.8;
            this.bitmap.alpha = 0.8;
            egret.Tween.get(this.bitmap).to({ "alpha": 0.3 }, 300).call(_super.prototype.dell, this, [this.bitmap]);
        };
        return ZhongChuiZiDan;
    }(zidan.ZiDanBase));
    zidan.ZhongChuiZiDan = ZhongChuiZiDan;
    __reflect(ZhongChuiZiDan.prototype, "zidan.ZhongChuiZiDan");
})(zidan || (zidan = {}));
var juzi;
(function (juzi) {
    var ChaoDaSanXuanZhanJZ = (function (_super) {
        __extends(ChaoDaSanXuanZhanJZ, _super);
        function ChaoDaSanXuanZhanJZ(nd, scene) {
            var _this = _super.call(this, nd) || this;
            _this.scene = scene;
            return _this;
        }
        ChaoDaSanXuanZhanJZ.prototype.initFcInfo = function () {
            this.fc_info = FC_Console.getInfoByName(5, "chaoda_3");
            this.init1ZTJ();
        };
        ChaoDaSanXuanZhanJZ.prototype.init1ZTJ = function () {
            //1 创建飞船
            this.fc1 = new feichuan.JuZhenJidui(this.scene, this.fc_info, egret.Point.create(-5, 10), this.nan_du);
            //2 创建状态机
            var ztj = new fjztj.QuYuZTJ(this.fc1);
            //进场
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(8, 10), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 8, 1, null, 1, -1, "特殊处理1"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(10, 11), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 11), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(11, 12), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 12), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 20), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.NULL_T, 5, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(12, 21), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 1)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 22), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 16)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 23), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 17)], 2, -1, "13:15"));
            ztj.addInfo(new zhuangtaiji.ZhuangTaiJiInfoBean(egret.Point.create(13, 24), zhuangtaiji.ZT_TYPE.JIAN_SI_MOVE_ING, zhuangtaiji.ZT_TYPE.XUAN_ZHUAN, zhuangtaiji.ZT_TYPE.PU_TONG_WU_QI_ING, 8, 1, [new zhuangtaiji.WuQiAiInfo(100, 3000, 1, 100, 3, 18)], 2, -1, "13:15"));
            ztj.nextStep(0);
            this.fc1.ztj = ztj;
        };
        //添加飞机到 战场
        ChaoDaSanXuanZhanJZ.prototype.addFc = function (scene) {
            scene.dijis.push(this.fc1);
        };
        return ChaoDaSanXuanZhanJZ;
    }(juzi.JuZiGuanLi));
    juzi.ChaoDaSanXuanZhanJZ = ChaoDaSanXuanZhanJZ;
    __reflect(ChaoDaSanXuanZhanJZ.prototype, "juzi.ChaoDaSanXuanZhanJZ");
})(juzi || (juzi = {}));
;window.Main = Main;