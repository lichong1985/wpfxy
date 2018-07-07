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
                    this.bitmap = new egret.Bitmap(RES.getRes("rl_1_dl_png"));
                    this.name1 = "rl_1_dl_png";
                    this.name2 = "rl_1_s_dl_png";
                }
                if (this.lv == 2) {
                    this.bitmap = new egret.Bitmap(RES.getRes("rl_2_dl_png"));
                    this.name1 = "rl_2_dl_png";
                    this.name2 = "rl_2_s_dl_png";
                }
                if (this.lv == 3) {
                    this.bitmap = new egret.Bitmap(RES.getRes("rl_3_dl_png"));
                    this.name1 = "rl_3_dl_png";
                    this.name2 = "rl_3_s_dl_png";
                }
            }
            //武器
            if (this.dl_type == suiji.SJ_YAN_SE.WU_QI) {
                //普通武器
                if (this.wq_type == wuqi.WUQI_TYPE.PU_TONG) {
                    this.bitmap = new egret.Bitmap(RES.getRes("wq_1_dl_png"));
                    this.name1 = "wq_1_dl_png";
                    this.name2 = "wq_1_s_dl_png";
                }
                //散弹
                if (this.wq_type == wuqi.WUQI_TYPE.SAN_DAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("wq_2_dl_png"));
                    this.name1 = "wq_2_dl_png";
                    this.name2 = "wq_2_s_dl_png";
                }
                //导弹
                if (this.wq_type == wuqi.WUQI_TYPE.DAO_DAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("wq_3_dl_png"));
                    this.name1 = "wq_3_dl_png";
                    this.name2 = "wq_3_s_dl_png";
                }
                //射线
                if (this.wq_type == wuqi.WUQI_TYPE.SHE_XIAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("wq_4_dl_png"));
                    this.name1 = "wq_4_dl_png";
                    this.name2 = "wq_4_s_dl_png";
                }
                //定向
                if (this.wq_type == wuqi.WUQI_TYPE.DING_XIANG) {
                    this.bitmap = new egret.Bitmap(RES.getRes("wq_5_dl_png"));
                    this.name1 = "wq_5_dl_png";
                    this.name2 = "wq_5_s_dl_png";
                }
                //鱼雷
                if (this.wq_type == wuqi.WUQI_TYPE.YU_LEI) {
                    this.bitmap = new egret.Bitmap(RES.getRes("wq_6_dl_png"));
                    this.name1 = "wq_6_dl_png";
                    this.name2 = "wq_6_s_dl_png";
                }
                //螺旋
                if (this.wq_type == wuqi.WUQI_TYPE.LUO_XUAN) {
                    this.bitmap = new egret.Bitmap(RES.getRes("wq_7_dl_png"));
                    this.name1 = "wq_7_dl_png";
                    this.name2 = "wq_7_s_dl_png";
                }
                //长钉
                if (this.wq_type == wuqi.WUQI_TYPE.CHANG_DING) {
                    this.bitmap = new egret.Bitmap(RES.getRes("wq_8_dl_png"));
                    this.name1 = "wq_8_dl_png";
                    this.name2 = "wq_8_s_dl_png";
                }
                //重锤
                if (this.wq_type == wuqi.WUQI_TYPE.ZHONG_CHUI) {
                    this.bitmap = new egret.Bitmap(RES.getRes("wq_9_dl_png"));
                    this.name1 = "wq_9_dl_png";
                    this.name2 = "wq_9_s_dl_png";
                }
            }
            //装甲
            if (this.dl_type == suiji.SJ_YAN_SE.ZHUANG_JIA) {
                if (this.lv == 1) {
                    this.bitmap = new egret.Bitmap(RES.getRes("zj_level_1_dl_png"));
                    this.name1 = "zj_level_1_dl_png";
                    this.name2 = "zj_level_1_s_dl_png";
                }
                if (this.lv == 2) {
                    this.bitmap = new egret.Bitmap(RES.getRes("zj_level_2_dl_png"));
                    this.name1 = "zj_level_2_dl_png";
                    this.name2 = "zj_level_2_s_dl_png";
                }
                if (this.lv == 3) {
                    this.bitmap = new egret.Bitmap(RES.getRes("zj_level_3_dl_png"));
                    this.name1 = "zj_level_3_dl_png";
                    this.name2 = "zj_level_3_s_dl_png";
                }
                if (this.lv == 4) {
                    this.bitmap = new egret.Bitmap(RES.getRes("zj_level_4_dl_png"));
                    this.name1 = "zj_level_4_dl_png";
                    this.name2 = "zj_level_4_s_dl_png";
                }
                if (this.lv == 5) {
                    this.bitmap = new egret.Bitmap(RES.getRes("zj_level_5_dl_png"));
                    this.name1 = "zj_level_5_dl_png";
                    this.name2 = "zj_level_5_s_dl_png";
                }
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
//# sourceMappingURL=DiaoLuo.js.map