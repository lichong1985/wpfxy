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
//# sourceMappingURL=FaiChuanBase.js.map